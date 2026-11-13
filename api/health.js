import { validateSmtpConfig } from '../server/emailService.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const smtpStatus = validateSmtpConfig();
  res.status(200).json({
    status: 'ok',
    service: 'Brahmani Information Email API (Serverless)',
    recipients: {
      to: process.env.EMAIL_TO || 'info@brahmaniinformation.com',
      cc: process.env.EMAIL_CC || 'shahkevin1911@gmail.com',
    },
    smtpConfigured: smtpStatus.valid,
    missingVariables: smtpStatus.valid ? [] : smtpStatus.missing,
    timestamp: new Date().toISOString(),
  });
}

