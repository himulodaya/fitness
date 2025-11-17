# Deploying FORCE Tracker to Vercel

This guide will help you deploy the FORCE Tracker PWA to Vercel for hosting on the internet.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier works perfectly)
- Git repository (already set up)

## Deployment Options

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (if not already done)
   ```bash
   git push origin claude/add-vercel-integration-01RrYsK9V92ejT3wJSk9Ws9D
   ```

2. **Go to [Vercel Dashboard](https://vercel.com/new)**

3. **Import your repository**
   - Click "Add New..." → "Project"
   - Select your Git provider (GitHub)
   - Find and import the `fitness` repository

4. **Configure your project**
   - Framework Preset: **Other** (or leave as detected)
   - Root Directory: `./` (leave as default)
   - Build Command: Leave empty (no build needed)
   - Output Directory: `./` (leave as default)
   - Install Command: Leave empty (no dependencies)

5. **Deploy!**
   - Click "Deploy"
   - Wait for deployment to complete (usually < 1 minute)
   - Your app will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd /home/user/fitness
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? `force-tracker` (or your choice)
   - In which directory is your code located? `./`
   - Want to override settings? **N**

5. **Production deployment**
   ```bash
   vercel --prod
   ```

## What's Included

The Vercel configuration (`vercel.json`) includes:

### ✅ Service Worker Support
- Proper caching headers for `sw.js`
- Service Worker scope set to root (`/`)

### ✅ PWA Manifest
- Correct Content-Type headers for `manifest.json`
- Optimized caching for manifest file

### ✅ Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### ✅ Performance Optimization
- Long-term caching for icons (1 year)
- Appropriate cache control for all assets

## Verifying Your Deployment

After deployment, verify everything works:

1. **Visit your Vercel URL** (e.g., `https://force-tracker.vercel.app`)

2. **Test PWA functionality:**
   - Open browser DevTools → Application tab
   - Check Service Worker is registered and activated
   - Verify Cache Storage contains all assets

3. **Test offline mode:**
   - Disconnect from internet (or use DevTools offline mode)
   - Refresh the page - it should still work!

4. **Test installation:**
   - On mobile: Look for "Add to Home Screen" prompt
   - On desktop (Chrome/Edge): Look for install icon in address bar

## Custom Domain (Optional)

To use your own domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Environment Variables (If Needed)

This app currently uses local storage and doesn't require environment variables. If you add backend integration later:

1. Go to "Settings" → "Environment Variables"
2. Add your variables (API keys, etc.)
3. Redeploy for changes to take effect

## Updating Your Deployment

Vercel auto-deploys on every push to your main branch:

```bash
# Make changes to your code
git add .
git commit -m "Update feature X"
git push origin main

# Vercel automatically rebuilds and deploys
```

Or manually redeploy:
```bash
vercel --prod
```

## Troubleshooting

### Service Worker not working
- Check browser console for errors
- Verify HTTPS is enabled (Vercel provides this automatically)
- Clear browser cache and reload

### Icons not loading
- Check `/icons/` directory is included in deployment
- Verify paths in `manifest.json` are correct (they are!)

### App not installable
- Ensure HTTPS is enabled ✓
- Verify `manifest.json` is accessible ✓
- Check service worker is registered ✓

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

---

**Your FORCE Tracker is now ready for deployment! 🚀**
