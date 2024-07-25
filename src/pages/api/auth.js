// pages/api/auth.js
import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Invalid Request Asshole`);
  }

  // Check for required headers
  if (!req.headers['x-requested-with'] || req.headers['x-requested-with'] !== 'XMLHttpRequest') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const { password } = req.body;

  // Ensure password was provided
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  // The password is stored securely as a server-side environment variable
  const correctPassword = process.env.AUTH_PASSWORD;

  // Use a timing-safe comparison
  const isPasswordCorrect = crypto.timingSafeEqual(
    Buffer.from(password),
    Buffer.from(correctPassword)
  );

  if (isPasswordCorrect) {
    // In a real-world scenario, you might set a secure session cookie here
    res.status(200).json({ authenticated: true });
  } else {
    // Use a generic error message
    res.status(401).json({ error: 'Authentication failed' });
  }
}