import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendStartProjectEmail, sendContactEmail, validateSmtpConfig } from './emailService.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
const PORT = process.env.PORT || 5000;

// Universal CORS & Preflight handler (prevents 405 on OPTIONS / cross-origin requests)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// Security & Parsing Middlewares
app.use(express.json({ limit: '50kb' }));

// Simple In-Memory Rate Limiting (10 submissions per 5 minutes per IP)
const submissionTracker = new Map();
function rateLimit(req, res, next) {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const windowMs = 5 * 60 * 1000;
  const maxSubmissions = 10;

  const userRecord = submissionTracker.get(ip) || [];
  const recent = userRecord.filter((timestamp) => now - timestamp < windowMs);

  if (recent.length >= maxSubmissions) {
    return res.status(429).json({
      success: false,
      error: 'Too many submissions from this connection. Please wait a few minutes before trying again.',
    });
  }

  recent.push(now);
  submissionTracker.set(ip, recent);
  next();
}

// Clean up tracker periodically to prevent memory leaks (unref so it doesn't block process exit)
const cleanupTimer = setInterval(() => {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000;
  for (const [ip, timestamps] of submissionTracker.entries()) {
    const valid = timestamps.filter((t) => now - t < windowMs);
    if (valid.length === 0) {
      submissionTracker.delete(ip);
    } else {
      submissionTracker.set(ip, valid);
    }
  }
}, 10 * 60 * 1000);
if (cleanupTimer.unref) {
  cleanupTimer.unref();
}

// API Health Check
app.get('/api/health', (req, res) => {
  const smtpStatus = validateSmtpConfig();
  res.json({
    status: 'ok',
    service: 'Brahmani Information Email API',
    recipients: {
      to: process.env.EMAIL_TO || 'info@brahmaniinformation.com',
      cc: process.env.EMAIL_CC || 'shahkevin1911@gmail.com',
    },
    smtpConfigured: smtpStatus.valid,
    missingVariables: smtpStatus.valid ? [] : smtpStatus.missing,
    timestamp: new Date().toISOString(),
  });
});

// Endpoint: Start a Project Form Submission
app.post('/api/start-project', rateLimit, async (req, res) => {
  try {
    const result = await sendStartProjectEmail(req.body);
    return res.status(200).json({
      success: true,
      message: 'Project intake request sent successfully.',
      recipients: {
        to: result.to,
        cc: result.cc,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || (error.message.includes('required') || error.message.includes('valid') ? 400 : 500);
    const clientMessage = error.clientMessage || error.message || 'Failed to submit project intake request. Please try again later.';
    console.error('[API /api/start-project Error]:', error.message);
    return res.status(statusCode).json({
      success: false,
      error: clientMessage,
    });
  }
});

// Endpoint: Contact Form Submission
app.post('/api/contact', rateLimit, async (req, res) => {
  try {
    const result = await sendContactEmail(req.body);
    return res.status(200).json({
      success: true,
      message: 'Contact inquiry sent successfully.',
      recipients: {
        to: result.to,
        cc: result.cc,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || (error.message.includes('required') || error.message.includes('valid') ? 400 : 500);
    const clientMessage = error.clientMessage || error.message || 'Failed to submit inquiry. Please try again later.';
    console.error('[API /api/contact Error]:', error.message);
    return res.status(statusCode).json({
      success: false,
      error: clientMessage,
    });
  }
});

// Serve frontend production build if available
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// Catch-all fallback for SPA client-side routing
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, error: `Route ${req.method} ${req.path} not found.` });
  }
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(404).send('Brahmani Information - Frontend build not found. Run "npm run build".');
    }
  });
});

// Only bind to port if executed directly as entrypoint (e.g. node server/server.js)
const isDirectEntry = process.argv[1] && (process.argv[1].endsWith('server.js') || process.argv[1].endsWith('server'));
if (isDirectEntry) {
  const smtpCheck = validateSmtpConfig();
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Brahmani Information Backend Server running on port ${PORT}`);
    console.log(`📧 Form Submissions configured for:`);
    console.log(`   To: ${process.env.EMAIL_TO || 'info@brahmaniinformation.com'}`);
    console.log(`   CC: ${process.env.EMAIL_CC || 'shahkevin1911@gmail.com'}`);
    if (smtpCheck.valid) {
      console.log(`✅ SMTP Status: CONFIGURED (Host: ${smtpCheck.host}, User: ${smtpCheck.user})`);
    } else {
      console.warn(`⚠️ SMTP Status: INCOMPLETE (Missing: ${smtpCheck.missing.join(', ')})`);
      console.warn(`   Configure these variables in your .env or cloud hosting dashboard.`);
    }
    console.log(`====================================================`);
  });
}

export default app;
