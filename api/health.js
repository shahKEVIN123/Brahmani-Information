export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    status: 'ok',
    service: 'Brahmani Information Email API (Serverless)',
    recipients: {
      to: process.env.EMAIL_TO || 'info@brahmaniinformation.com',
      cc: process.env.EMAIL_CC || 'shahkevin1911@gmail.com',
    },
    smtpConfigured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
    timestamp: new Date().toISOString(),
  });
}

