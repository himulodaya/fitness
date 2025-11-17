# Vercel Environment Variables Setup

This guide explains how to configure Google Calendar API credentials in your Vercel project.

## Environment Variables Required

Set these environment variables in your Vercel project settings:

1. **GOOGLE_CLIENT_ID** - Your Google OAuth 2.0 Client ID
2. **GOOGLE_API_KEY** - Your Google API Key

## Step-by-Step Setup

### 1. Get Google API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Calendar API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

4. Create **OAuth 2.0 Client ID**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client ID"
   - Application type: "Web application"
   - Add authorized JavaScript origins:
     - `https://yourdomain.vercel.app` (replace with your actual domain)
   - Copy the **Client ID**

5. Create **API Key**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Restrict the API key (recommended):
     - Application restrictions: "HTTP referrers"
     - Website restrictions: Add `https://yourdomain.vercel.app/*`
     - API restrictions: Select "Google Calendar API"
   - Copy the **API Key**

### 2. Configure Vercel Environment Variables

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variables:

   | Variable Name      | Value                          | Environment              |
   |--------------------|--------------------------------|--------------------------|
   | GOOGLE_CLIENT_ID   | Your Google OAuth Client ID    | Production, Preview, Development |
   | GOOGLE_API_KEY     | Your Google API Key            | Production, Preview, Development |

4. Click **Save** for each variable

### 3. Redeploy Your Application

After adding the environment variables:

1. Go to the **Deployments** tab
2. Click the three dots menu on your latest deployment
3. Select **Redeploy**
4. Wait for the deployment to complete

**Important:** Environment variables are only applied during the build process. You must trigger a new deployment after adding or changing environment variables.

## Verification

After redeployment:

1. Open your deployed application
2. Navigate to the **Schedule** section
3. Click **Connect Google Calendar**
4. If configured correctly, you should see the Google sign-in popup
5. If not configured, you'll see an error message asking you to configure credentials

## Troubleshooting

### Still seeing the error after adding environment variables?

1. **Check variable names**: Ensure they are exactly `GOOGLE_CLIENT_ID` and `GOOGLE_API_KEY` (case-sensitive)
2. **Verify environments**: Make sure variables are set for all environments (Production, Preview, Development)
3. **Trigger new deployment**: Environment variables are only read during build time
4. **Check build logs**: Go to Deployments > View Function Logs to see if config.js was generated successfully

### OAuth errors when signing in?

1. **Check authorized origins**: Make sure your Vercel domain is added to authorized JavaScript origins in Google Cloud Console
2. **Update redirect URIs**: Add your Vercel domain to authorized redirect URIs
3. **API Key restrictions**: Ensure your API key allows requests from your Vercel domain

## Local Development

For local development, you can either:

1. **Use environment variables**:
   ```bash
   export GOOGLE_CLIENT_ID="your_client_id"
   export GOOGLE_API_KEY="your_api_key"
   node build-config.js
   ```

2. **Create config.js manually**:
   ```bash
   cp config.example.js config.js
   # Edit config.js and add your credentials
   ```

Note: `config.js` is gitignored and won't be committed to the repository.

## How It Works

1. During Vercel build, the `build-config.js` script runs automatically
2. The script reads `GOOGLE_CLIENT_ID` and `GOOGLE_API_KEY` from environment variables
3. It generates a `config.js` file with these values
4. The app loads `config.js` at runtime to configure Google Calendar integration

This approach keeps your API keys secure and separate from your codebase.
