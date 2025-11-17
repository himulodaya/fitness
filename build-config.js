#!/usr/bin/env node
// Build script to generate config.js from environment variables
// This runs during Vercel build process

const fs = require('fs');
const path = require('path');

// Get environment variables
const clientId = process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID_HERE';
const apiKey = process.env.GOOGLE_API_KEY || 'YOUR_GOOGLE_API_KEY_HERE';

// Generate config.js content
const configContent = `// Google Calendar API Configuration
// This file is auto-generated during build from environment variables
// DO NOT EDIT MANUALLY - changes will be overwritten

const GOOGLE_CONFIG = {
    CLIENT_ID: '${clientId}',
    API_KEY: '${apiKey}'
};
`;

// Write config.js
const configPath = path.join(__dirname, 'config.js');
fs.writeFileSync(configPath, configContent, 'utf8');

console.log('✅ config.js generated successfully');

// Verify environment variables were provided
if (clientId === 'YOUR_GOOGLE_CLIENT_ID_HERE' || apiKey === 'YOUR_GOOGLE_API_KEY_HERE') {
    console.warn('⚠️  WARNING: Google Calendar credentials not set in environment variables');
    console.warn('   Set GOOGLE_CLIENT_ID and GOOGLE_API_KEY in Vercel project settings');
} else {
    console.log('✅ Google Calendar credentials configured');
}
