// scripts/test-live-health.js
// Tests the live website's health check endpoint to verify SMTP configuration

import https from 'https';
import http from 'http';

function checkEndpoint(targetUrl) {
  console.log(`Checking live health status at: ${targetUrl}...`);

  const client = targetUrl.startsWith('https') ? https : http;

  client.get(targetUrl, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log(`HTTP ${res.statusCode} Redirecting to: ${res.headers.location}`);
      return checkEndpoint(res.headers.location);
    }

    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        console.log('\n--- Live Production Status ---');
        console.log('HTTP Status:', res.statusCode);
        console.log('Service:', parsed.service);
        console.log('SMTP Configured:', parsed.smtpConfigured ? 'YES (Ready)' : 'NO (Missing Variables)');
        if (parsed.missingVariables && parsed.missingVariables.length > 0) {
          console.log('Missing Variables in Production:', parsed.missingVariables.join(', '));
        }
        console.log('Recipients:', parsed.recipients);
        console.log('-------------------------------\n');
        if (parsed.smtpConfigured) {
          console.log('SUCCESS: Production SMTP is fully active! Contact forms are operational.');
        } else {
          console.log('ACTION REQUIRED: Please add the missing variables in Vercel Project Settings.');
        }
      } catch {
        console.log('HTTP Status:', res.statusCode);
        console.log('Response body:', data);
      }
    });
  }).on('error', (err) => {
    console.error('Failed to reach endpoint:', err.message);
  });
}

checkEndpoint('https://brahmaniinformation.com/api/health');
