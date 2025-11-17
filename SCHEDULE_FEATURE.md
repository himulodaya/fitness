# Schedule Days Picker & Google Calendar Integration

This document explains the new scheduling features added to the FORCE Tracker app.

## Features Added

### 1. **Customizable Weekly Schedule** 📅
- **Interactive Days Picker**: Select which days of the week you want to perform each workout
- **Flexible Scheduling**: Assign Day 1, Day 2, Day 3, and Day 4 to any day of the week
- **Optional Mobility**: Choose any day(s) for optional mobility sessions (can select multiple days)
- **Visual Preview**: See your weekly schedule at a glance with color-coded workout types

### 2. **Google Calendar Integration** 🗓️
- **One-Click Sync**: Sync your entire 6-week training program to Google Calendar
- **Automatic Event Creation**: Creates calendar events for all workout days with full exercise details
- **Smart Scheduling**: Events are created starting from next Monday with your selected days
- **Event Details**: Each calendar event includes:
  - Workout title and day number
  - Complete list of exercises with sets and reps
  - 30-minute reminder before each workout
  - 1-hour duration by default

## How to Use

### Setting Up Your Schedule

1. **Navigate to the Schedule Tab**
   - Click on the "Schedule" tab in the main navigation

2. **Select Training Days**
   - For **Day 1-4**: Choose one day of the week for each workout using radio buttons
   - For **Optional Mobility**: Check any days you want to include mobility sessions (can select multiple)

3. **Save Your Schedule**
   - Click the "Save Schedule" button to save your preferences
   - Your schedule will be saved locally and persist across sessions

4. **Preview Your Schedule**
   - View the "Your Weekly Schedule" section to see your customized training week
   - Color coding:
     - 🔵 Blue = Strength & Conditioning days
     - 🟢 Green = Mobility days
     - ⚪ Gray = Rest days

### Syncing with Google Calendar

#### Initial Setup (Required for Google Calendar Integration)

To use Google Calendar integration, you need to set up Google API credentials:

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google Calendar API**
   - In the Cloud Console, go to "APIs & Services" > "Library"
   - Search for "Google Calendar API" and enable it

3. **Create OAuth 2.0 Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized JavaScript origins:
     - `http://localhost:8080` (for local testing)
     - Your production domain (e.g., `https://yourdomain.com`)
   - Add authorized redirect URIs if required
   - Copy your **Client ID**

4. **Create an API Key**
   - In the same "Credentials" page
   - Click "Create Credentials" > "API key"
   - Copy your **API Key**

5. **Update app.js**
   - Open `app.js` in a text editor
   - Find these lines (around line 445-446):
   ```javascript
   const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE';
   const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE';
   ```
   - Replace with your actual credentials:
   ```javascript
   const GOOGLE_CLIENT_ID = 'your-actual-client-id.apps.googleusercontent.com';
   const GOOGLE_API_KEY = 'your-actual-api-key';
   ```

#### Using Google Calendar Sync

Once credentials are configured:

1. **Connect to Google Calendar**
   - Click the "Connect Google Calendar" button
   - Sign in with your Google account
   - Grant the necessary permissions

2. **Sync Your Workouts**
   - Click the "Sync to Calendar" button
   - The app will create events for the next 6 weeks based on your selected schedule
   - You'll see a success message showing how many events were created

3. **View in Google Calendar**
   - Open [Google Calendar](https://calendar.google.com)
   - You'll see all your FORCE Training events with:
     - Event title: "FORCE Training: Day X - [Workout Type]"
     - Full workout details in the event description
     - 30-minute reminder before each session

4. **Disconnect (Optional)**
   - Click the "Disconnect" button to sign out of Google Calendar

## Technical Details

### Files Modified
- `index.html` - Added schedule picker UI and Google Calendar integration section
- `app.js` - Added schedule state management and Google Calendar API integration
- `styles.css` - Added styles for day picker and mobile responsiveness

### State Management
The weekly schedule is stored in the `weeklySchedule` object:
```javascript
{
    day1: 'monday',      // Day of week for workout Day 1
    day2: 'wednesday',   // Day of week for workout Day 2
    day3: 'thursday',    // Day of week for workout Day 3
    day4: 'friday',      // Day of week for workout Day 4
    mobility: ['sunday'] // Array of days for optional mobility
}
```

This data is persisted using the same storage system (localStorage + cookies) as the rest of the app.

### Google Calendar API Integration
- Uses Google Identity Services (GIS) for OAuth 2.0 authentication
- Uses Google Calendar API v3 for event creation
- Events are created with:
  - Start time: 9:00 AM on the selected day
  - Duration: 1 hour
  - Timezone: User's local timezone
  - Reminder: 30 minutes before

## Default Schedule

If no custom schedule is set, the default is:
- **Monday**: Day 1 - Strength & Conditioning
- **Tuesday**: Rest
- **Wednesday**: Day 2 - Strength & Conditioning
- **Thursday**: Day 3 - Light Cardio & Mobility
- **Friday**: Day 4 - Strength & Conditioning
- **Saturday**: Rest
- **Sunday**: Optional Mobility

## Notes

- The schedule applies to all 6 weeks of the program
- Day 1-4 must always be assigned (order is maintained)
- Optional Mobility is truly optional and can be assigned to any/all days
- When syncing to Google Calendar, events start from next Monday
- Re-running the sync will create duplicate events (manually delete old events if needed)
- All schedule data is saved locally and syncs across devices via cookies

## Browser Compatibility

- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- PWA-enabled for mobile installation
- Fully responsive and touch-optimized for mobile devices

## Privacy & Data

- All workout data is stored locally on your device
- Google Calendar integration requires explicit user consent
- No workout data is sent to third-party servers (except Google Calendar when you sync)
- You can disconnect from Google Calendar at any time
