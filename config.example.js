// Google Calendar API Configuration
// Copy this file to config.js and add your actual credentials

const GOOGLE_CONFIG = {
    CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    API_KEY: 'YOUR_GOOGLE_API_KEY_HERE'
};

// IMPORTANT: config.js is gitignored and will not be committed to the repository
// This keeps your actual API credentials private

// To get your credentials:
// 1. Go to https://console.cloud.google.com/
// 2. Create a new project or select an existing one
// 3. Enable the Google Calendar API
// 4. Create credentials:
//    - OAuth 2.0 Client ID (for CLIENT_ID)
//    - API Key (for API_KEY)
// 5. Configure API key restrictions (recommended):
//    - Application restrictions: HTTP referrers
//    - Add your website URL (e.g., https://yourdomain.com/*)
//    - For local development, add: http://localhost:*
// 6. Configure OAuth consent screen and add authorized domains
