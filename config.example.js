// Google Calendar API Configuration
// This is an example file showing the expected structure

const GOOGLE_CONFIG = {
    CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    API_KEY: 'YOUR_GOOGLE_API_KEY_HERE'
};

// IMPORTANT: config.js is gitignored and will not be committed to the repository
// This keeps your actual API credentials private

// ============================================================================
// FOR VERCEL DEPLOYMENT:
// ============================================================================
// The config.js file is auto-generated during build from environment variables.
//
// Set these environment variables in your Vercel project settings:
//   - GOOGLE_CLIENT_ID
//   - GOOGLE_API_KEY
//
// See VERCEL_ENV_SETUP.md for detailed setup instructions.

// ============================================================================
// FOR LOCAL DEVELOPMENT:
// ============================================================================
// Option 1: Use environment variables and run the build script
//   export GOOGLE_CLIENT_ID="your_client_id"
//   export GOOGLE_API_KEY="your_api_key"
//   node build-config.js
//
// Option 2: Create config.js manually
//   cp config.example.js config.js
//   # Edit config.js and add your credentials

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
