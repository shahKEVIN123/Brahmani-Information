import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

function emailApiPlugin(): Plugin {
  return {
    name: 'email-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];

        if (req.method === 'POST' && (url === '/api/start-project' || url === '/api/contact')) {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const { sendStartProjectEmail, sendContactEmail } = await import('./server/emailService.js');
              let result;
              if (url === '/api/start-project') {
                result = await sendStartProjectEmail(data);
              } else {
                result = await sendContactEmail(data);
              }
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                message: url === '/api/start-project' ? 'Project intake request sent successfully.' : 'Contact inquiry sent successfully.',
                recipients: {
                  to: result.to,
                  cc: result.cc,
                },
              }));
            } catch (err: any) {
              console.error(`[Vite Dev API ${url} Error]:`, err.message);
              const isVal = err.message.includes('required') || err.message.includes('valid');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = isVal ? 400 : 500;
              res.end(JSON.stringify({ success: false, error: err.message || 'Failed to send email' }));
            }
          });
          return;
        }

        if (req.method === 'GET' && url === '/api/health') {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(JSON.stringify({
            status: 'ok',
            service: 'Brahmani Information Email API (Vite Dev)',
            recipients: {
              to: process.env.EMAIL_TO || 'info@brahmaniinformation.com',
              cc: process.env.EMAIL_CC || 'shahkevin1911@gmail.com',
            },
            smtpConfigured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
            timestamp: new Date().toISOString(),
          }));
          return;
        }

        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), emailApiPlugin()],
  server: {
    port: 3000,
    host: true,
  },
});
