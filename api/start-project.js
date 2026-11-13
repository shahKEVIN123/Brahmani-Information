import { sendStartProjectEmail } from '../server/emailService.js';

export default async function handler(req, res) {
  // CORS & Preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

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
    console.error('[Vercel API /api/start-project Error]:', error.message);
    return res.status(statusCode).json({
      success: false,
      error: clientMessage,
    });
  }
}

