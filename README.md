# FORCE Preparation Tracker

A Progressive Web App (PWA) for tracking the 6-week FORCE Preparation training program for Canadian Armed Forces personnel.

## Features

- **Progressive Web App**: Install on mobile and desktop devices for offline access
- **Mobile Optimized**: Touch-friendly interface with responsive design
- **Data Persistence**: Uses localStorage with cookie backup for reliable data storage
- **Offline Capable**: Service worker caching allows the app to work without internet
- **Two Programs**: Choose between Sandbag or Bodyweight training programs
- **Progress Tracking**: Track exercise completion and add personal notes
- **Fitness Challenges**: Monitor pre/post program fitness assessments
- **6-Week Structure**: Complete workout plans for all 6 weeks
- **Google Calendar Integration**: Schedule workouts directly to your Google Calendar

## Google Calendar Setup

To use the Google Calendar integration feature, you'll need to configure your Google API credentials:

1. **Copy the configuration template:**
   ```bash
   cp config.example.js config.js
   ```

2. **Get your Google API credentials** from [Google Cloud Console](https://console.cloud.google.com/)

3. **Update `config.js`** with your credentials

For detailed setup instructions, see [SETUP.md](SETUP.md).

**Important:** Never commit your `config.js` file with real API keys. It's already included in `.gitignore`.

## Installation

### As a PWA (Recommended)

1. Open the app in a modern browser (Chrome, Edge, Safari, Firefox)
2. Look for the "Install App" button in the header
3. Or use your browser's install option:
   - **Chrome/Edge**: Click the install icon in the address bar
   - **Safari (iOS)**: Tap Share → Add to Home Screen
   - **Firefox**: Use the "Install" option in the menu

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fitness
   ```

2. Serve the files using a local web server:
   ```bash
   # Using Python
   python3 -m http.server 8000

   # Or using Node.js
   npx http-server -p 8000
   ```

3. Open http://localhost:8000 in your browser

## File Structure

```
fitness/
├── index.html              # Main HTML structure
├── styles.css              # All styling and responsive design
├── app.js                  # Main application logic
├── workout-data.js         # Workout programs and exercises
├── cookie-storage.js       # Storage management utilities
├── config.example.js       # Template for Google API configuration
├── config.js               # Your Google API credentials (gitignored)
├── manifest.json           # PWA configuration
├── sw.js                   # Service worker for offline functionality
├── generate-icons.py       # Icon generation script
├── icons/                  # App icons in various sizes
│   ├── icon.svg           # Source SVG icon
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
├── .gitignore             # Excludes config.js and other sensitive files
├── SETUP.md               # Google Calendar API setup guide
└── README.md              # This file
```

## Usage

### Selecting a Program

1. On the Overview page, choose between:
   - **With Sandbag**: Full program using sandbag equipment
   - **Without Sandbag**: Bodyweight alternative program

### Tracking Workouts

1. Navigate to the **Workouts** tab
2. Select your current week (1-6)
3. Select the day (1-4)
4. Check off completed exercises
5. Add notes for weights, modifications, or personal records
6. Click "Save Progress" to store your data

### Fitness Challenges

1. Navigate to the **Challenges** tab
2. Complete the assessments before Week 1:
   - Hand Release Burpees (max reps in 60 seconds)
   - Wall Chair Hold (maximum hold time in seconds)
   - 1000m Run/Walk (time in minutes:seconds)
3. Repeat after Week 6 to measure improvement
4. Click "Save Challenge Scores"

### Data Storage

The app uses a dual-storage system for reliability:

- **Primary**: localStorage (faster, larger capacity)
- **Backup**: Cookies (cross-session persistence)

Your data is automatically saved and persists across sessions. Data remains local to your device for privacy.

## Browser Compatibility

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

## PWA Features

- **Offline Mode**: Works without internet connection
- **Installable**: Add to home screen on mobile devices
- **Fast Loading**: Cached resources load instantly
- **Push Notifications**: (Future feature for workout reminders)
- **Background Sync**: (Future feature for cloud backup)

## Development

### Regenerating Icons

If you need to regenerate the app icons:

```bash
# Requires Python 3 and Pillow
pip install Pillow
python3 generate-icons.py
```

Or use online tools:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [PWABuilder](https://www.pwabuilder.com/)

### Customizing the Service Worker

Edit `sw.js` to modify caching strategy:

- **CACHE_NAME**: Update version when deploying changes
- **urlsToCache**: Add/remove files to cache
- Modify fetch strategy for different caching approaches

## About FORCE

The FORCE (Fitness for Operational Requirements of CAF Employment) Evaluation is the Canadian Armed Forces' physical fitness standard. It includes:

1. **20m Rushes**: Sprint shuttles with prone drops (≤51 seconds)
2. **Sandbag Lift**: 30 consecutive lifts of 20kg sandbag (≤3:30)
3. **Intermittent Loaded Shuttles**: 10 shuttles with 20kg sandbag (≤5:21)
4. **Sandbag Drag**: Carry and drag sandbags 20m without stopping

This 6-week program prepares you for these physical demands through progressive strength, conditioning, and mobility training.

## Privacy

All data is stored locally on your device. No information is transmitted to external servers. Your workout progress and personal information remain completely private.

## License

This project is for educational and training purposes. The FORCE evaluation is a trademark of the Canadian Armed Forces.

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify localStorage and cookies are enabled
3. Try clearing cache and reinstalling the PWA
4. Ensure you're using a supported browser version

## Contributing

Contributions are welcome! Please ensure any changes:
- Maintain mobile responsiveness
- Follow the existing code style
- Update documentation as needed
- Test across multiple browsers

---

**Stay fit, stay ready!** 💪
