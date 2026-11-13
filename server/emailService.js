import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Default recipients specified by Brahmani Information requirements
const DEFAULT_TO = 'info@brahmaniinformation.com';
const DEFAULT_CC = 'shahkevin1911@gmail.com';

/**
 * Custom error class for email service operations with HTTP status and user-safe messages.
 */
export class EmailServiceError extends Error {
  constructor(message, statusCode = 500, code = 'EMAIL_ERROR', clientMessage = null) {
    super(message);
    this.name = 'EmailServiceError';
    this.statusCode = statusCode;
    this.code = code;
    this.clientMessage = clientMessage || message;
  }
}

/**
 * Validates whether the required SMTP environment variables are present and configured.
 */
export function validateSmtpConfig() {
  const host = process.env.SMTP_HOST ? process.env.SMTP_HOST.trim() : '';
  const user = process.env.SMTP_USER ? process.env.SMTP_USER.trim() : '';
  const rawPass = process.env.SMTP_PASS ? process.env.SMTP_PASS.trim() : '';
  const pass = rawPass.replace(/^["']|["']$/g, '');
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  const missing = [];
  if (!host) missing.push('SMTP_HOST');
  if (!user) missing.push('SMTP_USER');
  if (!pass) missing.push('SMTP_PASS');

  return {
    valid: missing.length === 0,
    missing,
    host,
    user,
    port,
    secure,
  };
}

/**
 * Escapes HTML characters to prevent HTML/XSS injection in email clients.
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Strips carriage returns and newlines to prevent SMTP header injection in subjects and email fields.
 */
function sanitizeHeader(text) {
  if (!text) return '';
  return String(text).replace(/[\r\n]/g, ' ').trim();
}

/**
 * Basic RFC 5322 email regex check.
 */
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Creates and returns the active nodemailer transporter using environment variables.
 */
export async function getTransporter() {
  // Mock / JSON transporter for automated testing & verification
  if (process.env.SMTP_MOCK === 'true') {
    return nodemailer.createTransport({ jsonTransport: true });
  }

  const config = validateSmtpConfig();

  if (config.valid) {
    const rawPass = process.env.SMTP_PASS.trim();
    const cleanPass = rawPass.replace(/^["']|["']$/g, '');
    return nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: cleanPass,
      },
      tls: {
        rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
      },
    });
  }

  // Optional test mode using Ethereal if credentials are not yet configured
  if (process.env.EMAIL_TEST_MODE === 'true' || process.env.NODE_ENV === 'test') {
    try {
      const testAccount = await nodemailer.createTestAccount();
      console.log('[EmailService] Generated test SMTP credentials:', testAccount.user);
      return nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } catch {
      // Fall through to error
    }
  }

  const logMessage = `[EmailService Configuration Error]: Missing required SMTP environment variables: ${config.missing.join(', ')}. Please configure these in your hosting environment (e.g. Vercel Project Settings or .env).`;
  console.error(logMessage);

  throw new EmailServiceError(
    `Email server is missing credentials: ${config.missing.join(', ')}.`,
    503,
    'MISSING_SMTP_CREDENTIALS',
    'Email service is temporarily unavailable due to missing server configuration. Please try again later or reach out to info@brahmaniinformation.com.'
  );
}

/**
 * Sends a validated Start a Project submission email to both primary and CC recipients.
 */
export async function sendStartProjectEmail(payload) {
  const {
    name,
    email,
    company = 'Not provided',
    phone = 'Not provided',
    selectedService = 'General Digital Engineering',
    selectedTimeline = 'Flexible',
    selectedBudget = 'Standard',
    projectBrief,
  } = payload || {};

  // Server-side validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    throw new EmailServiceError('Full Name is required.', 400, 'VALIDATION_ERROR', 'Full Name is required.');
  }
  if (!email || !isValidEmail(email)) {
    throw new EmailServiceError('A valid work email address is required.', 400, 'VALIDATION_ERROR', 'A valid work email address is required.');
  }
  if (!projectBrief || typeof projectBrief !== 'string' || !projectBrief.trim()) {
    throw new EmailServiceError('Project Goals & Brief details are required.', 400, 'VALIDATION_ERROR', 'Project Goals & Brief details are required.');
  }

  const cleanName = sanitizeHeader(name);
  const cleanEmail = sanitizeHeader(email);
  const cleanCompany = sanitizeHeader(company);
  const cleanPhone = sanitizeHeader(phone);
  const cleanService = sanitizeHeader(selectedService);
  const cleanTimeline = sanitizeHeader(selectedTimeline);
  const cleanBudget = sanitizeHeader(selectedBudget);

  const submissionDate = new Date();
  const dateFormatted = submissionDate.toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata',
  }) + ' (IST)';

  const to = process.env.EMAIL_TO || DEFAULT_TO;
  const cc = process.env.EMAIL_CC || DEFAULT_CC;
  const from = process.env.SMTP_FROM || `"Brahmani Information Intake" <${process.env.SMTP_USER}>`;

  const subject = `[New Project Intake] ${cleanName} — ${cleanService}`;

  // Plain-text representation for maximum deliverability
  const textContent = `
==================================================
BRAHMANI INFORMATION — NEW PROJECT INTAKE
==================================================

Submitted On: ${dateFormatted}
Discipline:   ${cleanService}
Timeline:     ${cleanTimeline}
Investment:   ${cleanBudget}

CLIENT DETAILS:
- Full Name:    ${cleanName}
- Work Email:   ${cleanEmail}
- Organization: ${cleanCompany}
- Phone Number: ${cleanPhone}

PROJECT BRIEF & REQUIREMENTS:
--------------------------------------------------
${projectBrief.trim()}
--------------------------------------------------

Recipients:
- To: ${to}
- CC: ${cc}
`;

  // High-fidelity HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Intake - Brahmani Information</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0b0f19; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #131b2e; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #070d1a; padding: 28px 32px; border-bottom: 2px solid #005EDA;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size: 11px; font-weight: 700; color: #38BDF8; letter-spacing: 1.5px; text-transform: uppercase;">Brahmani Information</span>
                    <h1 style="margin: 6px 0 0; font-size: 22px; font-weight: 700; color: #ffffff;">New Project Intake Request</h1>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; padding: 6px 12px; background-color: #005EDA; color: #ffffff; font-size: 11px; font-weight: 700; border-radius: 8px;">NEW LEAD</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Scope Pills -->
          <tr>
            <td style="padding: 24px 32px 12px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #17223b; border: 1px solid #233354; border-radius: 12px;">
                <tr>
                  <td style="padding: 16px; width: 33.33%; border-right: 1px solid #233354;">
                    <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Discipline</div>
                    <div style="font-size: 13px; color: #38BDF8; font-weight: 700; margin-top: 4px;">${escapeHtml(cleanService)}</div>
                  </td>
                  <td style="padding: 16px; width: 33.33%; border-right: 1px solid #233354;">
                    <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Target Horizon</div>
                    <div style="font-size: 13px; color: #ffffff; font-weight: 700; margin-top: 4px;">${escapeHtml(cleanTimeline)}</div>
                  </td>
                  <td style="padding: 16px; width: 33.33%;">
                    <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Budget Tier</div>
                    <div style="font-size: 13px; color: #34d399; font-weight: 700; margin-top: 4px;">${escapeHtml(cleanBudget)}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Client Details Section -->
          <tr>
            <td style="padding: 16px 32px 8px;">
              <h2 style="margin: 0 0 12px; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.2px; font-weight: 700;">Client Information</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 10px; border: 1px solid #1e293b;">
                <tr>
                  <td style="padding: 12px 16px; width: 140px; color: #94a3b8; font-size: 12px; border-bottom: 1px solid #1e293b; font-weight: 600;">Full Name</td>
                  <td style="padding: 12px 16px; color: #ffffff; font-size: 13px; border-bottom: 1px solid #1e293b; font-weight: 700;">${escapeHtml(cleanName)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94a3b8; font-size: 12px; border-bottom: 1px solid #1e293b; font-weight: 600;">Work Email</td>
                  <td style="padding: 12px 16px; color: #38BDF8; font-size: 13px; border-bottom: 1px solid #1e293b;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #38BDF8; text-decoration: none; font-weight: 600;">${escapeHtml(cleanEmail)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94a3b8; font-size: 12px; border-bottom: 1px solid #1e293b; font-weight: 600;">Organization</td>
                  <td style="padding: 12px 16px; color: #cbd5e1; font-size: 13px; border-bottom: 1px solid #1e293b;">${escapeHtml(cleanCompany)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94a3b8; font-size: 12px; font-weight: 600;">Phone Number</td>
                  <td style="padding: 12px 16px; color: #cbd5e1; font-size: 13px;">${escapeHtml(cleanPhone)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Brief Section -->
          <tr>
            <td style="padding: 16px 32px 24px;">
              <h2 style="margin: 0 0 12px; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.2px; font-weight: 700;">Project Brief & Technical Requirements</h2>
              <div style="background-color: #0f172a; border-radius: 10px; border: 1px solid #1e293b; padding: 18px; color: #e2e8f0; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(projectBrief.trim())}</div>
            </td>
          </tr>

          <!-- Metadata Footer -->
          <tr>
            <td style="background-color: #070d1a; padding: 20px 32px; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b; line-height: 1.5;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div><strong>Submitted:</strong> ${escapeHtml(dateFormatted)}</div>
                    <div><strong>Recipients:</strong> To: ${escapeHtml(to)} | CC: ${escapeHtml(cc)}</div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <a href="mailto:${escapeHtml(cleanEmail)}" style="display: inline-block; padding: 8px 16px; background-color: #005EDA; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 11px;">Reply to Client</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  const transporter = await getTransporter();

  const mailOptions = {
    from,
    to,
    cc,
    replyTo: cleanEmail,
    subject,
    text: textContent,
    html: htmlContent,
  };

  let result;
  try {
    result = await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('[EmailService sendStartProjectEmail Error]:', err.code || err.name, err.message);
    if (err.code === 'EAUTH') {
      throw new EmailServiceError(
        `SMTP authentication failed for user "${process.env.SMTP_USER}": ${err.message}`,
        500,
        'SMTP_AUTH_FAILED',
        'Email delivery failed: Authentication with the SMTP server was unsuccessful.'
      );
    }
    if (['ETIMEDOUT', 'ECONNREFUSED', 'ESOCKET', 'EDNS', 'ENOTFOUND'].includes(err.code)) {
      throw new EmailServiceError(
        `SMTP connection failed (${err.code}): ${err.message}`,
        504,
        'SMTP_CONNECTION_ERROR',
        'Email delivery failed: Could not establish a connection to the SMTP server. Please try again later.'
      );
    }
    throw new EmailServiceError(
      `Email delivery failed: ${err.message}`,
      500,
      'SMTP_DELIVERY_ERROR',
      'An error occurred while sending your project intake request. Please try again later.'
    );
  }

  const previewUrl = nodemailer.getTestMessageUrl(result);
  if (previewUrl) {
    console.log('📬 [Test Preview URL]:', previewUrl);
  }
  return {
    success: true,
    messageId: result.messageId,
    to,
    cc,
    previewUrl,
  };
}

/**
 * Sends a validated Contact Form submission email to both primary and CC recipients.
 */
export async function sendContactEmail(payload) {
  const {
    name,
    email,
    company = 'Not provided',
    projectType = 'General Technical Inquiry',
    message,
  } = payload || {};

  // Server-side validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    throw new EmailServiceError('Your Name is required.', 400, 'VALIDATION_ERROR', 'Your Name is required.');
  }
  if (!email || !isValidEmail(email)) {
    throw new EmailServiceError('A valid work email address is required.', 400, 'VALIDATION_ERROR', 'A valid work email address is required.');
  }
  if (!message || typeof message !== 'string' || !message.trim()) {
    throw new EmailServiceError('Message details are required.', 400, 'VALIDATION_ERROR', 'Message details are required.');
  }

  const cleanName = sanitizeHeader(name);
  const cleanEmail = sanitizeHeader(email);
  const cleanCompany = sanitizeHeader(company);
  const cleanType = sanitizeHeader(projectType);

  const submissionDate = new Date();
  const dateFormatted = submissionDate.toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata',
  }) + ' (IST)';

  const to = process.env.EMAIL_TO || DEFAULT_TO;
  const cc = process.env.EMAIL_CC || DEFAULT_CC;
  const from = process.env.SMTP_FROM || `"Brahmani Information Contact" <${process.env.SMTP_USER}>`;

  const subject = `[Website Inquiry] ${cleanName} — ${cleanType}`;

  // Plain-text representation for maximum deliverability
  const textContent = `
==================================================
BRAHMANI INFORMATION — GENERAL INQUIRY
==================================================

Submitted On: ${dateFormatted}
Inquiry Type: ${cleanType}

SENDER DETAILS:
- Full Name:    ${cleanName}
- Work Email:   ${cleanEmail}
- Organization: ${cleanCompany}

INQUIRY MESSAGE & DETAILS:
--------------------------------------------------
${message.trim()}
--------------------------------------------------

Recipients:
- To: ${to}
- CC: ${cc}
`;

  // High-fidelity HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Inquiry - Brahmani Information</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0b0f19; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #131b2e; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #070d1a; padding: 28px 32px; border-bottom: 2px solid #005EDA;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size: 11px; font-weight: 700; color: #38BDF8; letter-spacing: 1.5px; text-transform: uppercase;">Brahmani Information</span>
                    <h1 style="margin: 6px 0 0; font-size: 22px; font-weight: 700; color: #ffffff;">New Contact Inquiry</h1>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; padding: 6px 12px; background-color: #005EDA; color: #ffffff; font-size: 11px; font-weight: 700; border-radius: 8px;">INQUIRY</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Scope Banner -->
          <tr>
            <td style="padding: 24px 32px 12px;">
              <div style="background-color: #17223b; border: 1px solid #233354; border-radius: 12px; padding: 16px;">
                <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Inquiry Scope / Category</div>
                <div style="font-size: 14px; color: #38BDF8; font-weight: 700; margin-top: 4px;">${escapeHtml(cleanType)}</div>
              </div>
            </td>
          </tr>

          <!-- Sender Details Section -->
          <tr>
            <td style="padding: 16px 32px 8px;">
              <h2 style="margin: 0 0 12px; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.2px; font-weight: 700;">Sender Information</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a; border-radius: 10px; border: 1px solid #1e293b;">
                <tr>
                  <td style="padding: 12px 16px; width: 140px; color: #94a3b8; font-size: 12px; border-bottom: 1px solid #1e293b; font-weight: 600;">Name</td>
                  <td style="padding: 12px 16px; color: #ffffff; font-size: 13px; border-bottom: 1px solid #1e293b; font-weight: 700;">${escapeHtml(cleanName)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94a3b8; font-size: 12px; border-bottom: 1px solid #1e293b; font-weight: 600;">Work Email</td>
                  <td style="padding: 12px 16px; color: #38BDF8; font-size: 13px; border-bottom: 1px solid #1e293b;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #38BDF8; text-decoration: none; font-weight: 600;">${escapeHtml(cleanEmail)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94a3b8; font-size: 12px; font-weight: 600;">Organization</td>
                  <td style="padding: 12px 16px; color: #cbd5e1; font-size: 13px;">${escapeHtml(cleanCompany)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Details Section -->
          <tr>
            <td style="padding: 16px 32px 24px;">
              <h2 style="margin: 0 0 12px; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.2px; font-weight: 700;">Inquiry Message</h2>
              <div style="background-color: #0f172a; border-radius: 10px; border: 1px solid #1e293b; padding: 18px; color: #e2e8f0; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message.trim())}</div>
            </td>
          </tr>

          <!-- Metadata Footer -->
          <tr>
            <td style="background-color: #070d1a; padding: 20px 32px; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b; line-height: 1.5;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div><strong>Submitted:</strong> ${escapeHtml(dateFormatted)}</div>
                    <div><strong>Recipients:</strong> To: ${escapeHtml(to)} | CC: ${escapeHtml(cc)}</div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <a href="mailto:${escapeHtml(cleanEmail)}" style="display: inline-block; padding: 8px 16px; background-color: #005EDA; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 11px;">Reply to Sender</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  const transporter = await getTransporter();

  const mailOptions = {
    from,
    to,
    cc,
    replyTo: cleanEmail,
    subject,
    text: textContent,
    html: htmlContent,
  };

  let result;
  try {
    result = await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('[EmailService sendStartProjectEmail Error]:', err.code || err.name, err.message);
    if (err.code === 'EAUTH') {
      throw new EmailServiceError(
        `SMTP authentication failed for user "${process.env.SMTP_USER}": ${err.message}`,
        500,
        'SMTP_AUTH_FAILED',
        'Email delivery failed: Authentication with the SMTP server was unsuccessful.'
      );
    }
    if (['ETIMEDOUT', 'ECONNREFUSED', 'ESOCKET', 'EDNS', 'ENOTFOUND'].includes(err.code)) {
      throw new EmailServiceError(
        `SMTP connection failed (${err.code}): ${err.message}`,
        504,
        'SMTP_CONNECTION_ERROR',
        'Email delivery failed: Could not establish a connection to the SMTP server. Please try again later.'
      );
    }
    throw new EmailServiceError(
      `Email delivery failed: ${err.message}`,
      500,
      'SMTP_DELIVERY_ERROR',
      'An error occurred while sending your project intake request. Please try again later.'
    );
  }

  const previewUrl = nodemailer.getTestMessageUrl(result);
  if (previewUrl) {
    console.log('📬 [Test Preview URL]:', previewUrl);
  }
  return {
    success: true,
    messageId: result.messageId,
    to,
    cc,
    previewUrl,
  };
}
