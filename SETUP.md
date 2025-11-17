# Google Calendar API Setup

This guide will help you configure the Google Calendar integration for your FORCE Tracker app.

## Why Keep API Keys Private?

While Google API keys and Client IDs are designed to be used in client-side applications, keeping them out of public repositories is a best practice because:
- Prevents potential quota abuse
- Avoids the need to rotate keys if accidentally exposed
- Follows security best practices for credential management

## Setup Instructions

### Step 1: Copy the Configuration File

```bash
cp config.example.js config.js
```

The `config.js` file is gitignored and will never be committed to the repository.

### Step 2: Get Your Google API Credentials

1. **Go to Google Cloud Console**
   - Visit [https://console.cloud.google.com/](https://console.cloud.google.com/)
   - Sign in with your Google account

2. **Create or Select a Project**
   - Click "Select a project" at the top
   - Click "New Project" or select an existing one

3. **Enable Google Calendar API**
   - In the left sidebar, go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click on it and press "Enable"

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API key"
   - Copy the API key
   - **Important:** Click "Restrict Key" to add restrictions

5. **Restrict Your API Key** (Recommended)
   - Under "Application restrictions", select "HTTP referrers (web sites)"
   - Add your website URL:
     - For production: `https://yourdomain.com/*`
     - For local development: `http://localhost:*` and `http://127.0.0.1:*`
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Calendar API"
   - Click "Save"

6. **Create OAuth 2.0 Client ID**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - If prompted, configure the OAuth consent screen:
     - Choose "External" user type
     - Fill in required fields (app name, user support email)
     - Add your domain to "Authorized domains"
   - Select "Web application" as application type
   - Add authorized JavaScript origins:
     - For production: `https://yourdomain.com`
     - For local development: `http://localhost:8080` (or your local port)
   - Add authorized redirect URIs (same as above)
   - Click "Create"
   - Copy the Client ID

### Step 3: Update config.js

Open `config.js` and replace the placeholder values:

```javascript
const GOOGLE_CONFIG = {
    CLIENT_ID: 'your-actual-client-id.apps.googleusercontent.com',
    API_KEY: 'your-actual-api-key'
};
```

### Step 4: Test Your Integration

1. Open your app in a browser
2. Click the "Google Calendar" button
3. Sign in with your Google account
4. Grant permissions to access your calendar
5. Schedule a workout and verify it appears in your Google Calendar

## Deployment to Vercel

When deploying to Vercel, you have two options:

### Option 1: Manual config.js Upload

After deploying, manually upload your `config.js` file to your Vercel project directory. This is simple but requires manual updates.

### Option 2: Environment Variables (Recommended)

1. **Add a Build Command to vercel.json** (already configured in this project)

2. **Set Environment Variables in Vercel**
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add these variables:
     - `VITE_GOOGLE_CLIENT_ID`: Your OAuth Client ID
     - `VITE_GOOGLE_API_KEY`: Your API Key
   - Set the scope to "Production", "Preview", and "Development" as needed

3. **Create a Build Script** (if you want to use environment variables)

   You can create a simple build script that generates `config.js` from environment variables during deployment.

## Security Notes

- ✅ `config.js` is gitignored and won't be committed
- ✅ Use HTTP referrer restrictions on your API key
- ✅ Configure authorized domains in OAuth consent screen
- ✅ Never commit actual credentials to the repository
- ✅ Rotate keys immediately if they are ever exposed publicly

## Troubleshooting

**"Google Calendar integration requires setup" error**
- Make sure you've copied `config.example.js` to `config.js`
- Verify your credentials are correct in `config.js`
- Check browser console for specific error messages

**"Origin not allowed" error**
- Add your domain to "Authorized JavaScript origins" in Google Cloud Console
- Make sure HTTP referrer restrictions include your domain

**Permission denied errors**
- Check that Google Calendar API is enabled
- Verify OAuth consent screen is configured
- Ensure user has granted necessary permissions

## Need Help?

- [Google Calendar API Documentation](https://developers.google.com/calendar/api/guides/overview)
- [Google Cloud Console Help](https://cloud.google.com/docs)
