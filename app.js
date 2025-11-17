// FORCE Tracker - Main Application Logic

// State management
let currentProgram = 'sandbag';
let currentWeek = 1;
let currentDay = 1;
let workoutProgress = {};
let challengeScores = {};
let weeklySchedule = {
    day1: 'monday',
    day2: 'wednesday',
    day3: 'thursday',
    day4: 'friday',
    mobility: ['sunday']
};

// PWA Install prompt
let deferredPrompt = null;

// Initialize from storage (localStorage + cookies)
function loadFromStorage() {
    const data = StorageManager.load();

    if (data) {
        workoutProgress = data.workoutProgress || {};
        challengeScores = data.challengeScores || {};
        currentProgram = data.currentProgram || 'sandbag';
        currentWeek = data.currentWeek || 1;
        currentDay = data.currentDay || 1;
        weeklySchedule = data.weeklySchedule || {
            day1: 'monday',
            day2: 'wednesday',
            day3: 'thursday',
            day4: 'friday',
            mobility: ['sunday']
        };

        // Update UI to reflect loaded state
        updateProgramUI();
        updateWeekUI();
        updateDayUI();
        loadScheduleUI();
    }
}

function saveToStorage() {
    const data = {
        workoutProgress,
        challengeScores,
        currentProgram,
        currentWeek,
        currentDay,
        weeklySchedule
    };

    StorageManager.save(data);
}

// Update UI helper functions
function updateProgramUI() {
    document.querySelectorAll('.program-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Find and select the current program card
    const cards = document.querySelectorAll('.program-card');
    if (currentProgram === 'sandbag' && cards[0]) {
        cards[0].classList.add('selected');
    } else if (currentProgram === 'bodyweight' && cards[1]) {
        cards[1].classList.add('selected');
    }
}

function updateWeekUI() {
    document.querySelectorAll('.week-button').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === currentWeek);
    });
}

function updateDayUI() {
    document.querySelectorAll('.day-button').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === currentDay);
    });
}

// Section navigation
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

// Program selection
function selectProgram(program) {
    currentProgram = program;
    updateProgramUI();
    saveToStorage();
    displayWorkout();
}

// Week selection
function selectWeek(week) {
    currentWeek = week;
    updateWeekUI();
    saveToStorage();
    displayWorkout();
}

// Day selection
function selectDay(day) {
    currentDay = day;
    updateDayUI();
    saveToStorage();
    displayWorkout();
}

// Display workout
function displayWorkout() {
    const workoutDisplay = document.getElementById('workout-display');
    const dayData = workoutData[currentProgram][`day${currentDay}`];

    if (!dayData) {
        workoutDisplay.innerHTML = '<p>No workout data available for this day.</p>';
        return;
    }

    let html = `<div class="workout-content">`;
    html += `<h2 style="color: #2c3e50; margin-bottom: 20px;">${dayData.title}</h2>`;
    html += `<p style="margin-bottom: 20px; color: #555;">Week ${currentWeek}</p>`;

    dayData.sections.forEach((section, sectionIdx) => {
        html += `<div class="exercise-block">`;
        html += `<h3>${section.name}</h3>`;

        section.exercises.forEach((exercise, exerciseIdx) => {
            const progressKey = `${currentProgram}-w${currentWeek}-d${currentDay}-s${sectionIdx}-e${exerciseIdx}`;
            const isCompleted = workoutProgress[progressKey]?.completed || false;
            const notes = workoutProgress[progressKey]?.notes || '';

            html += `<div class="exercise-item">`;

            if (exercise.trackable) {
                html += `<input type="checkbox" class="exercise-checkbox"
                               id="${progressKey}"
                               ${isCompleted ? 'checked' : ''}
                               onchange="toggleExercise('${progressKey}')">`;
            }

            html += `<div class="exercise-details">`;
            html += `<div class="exercise-name">${exercise.name}</div>`;
            html += `<div class="exercise-specs">Sets: ${exercise.sets} | Reps: ${exercise.reps} | Rest: ${exercise.rest}</div>`;
            html += `<div class="exercise-cues">${exercise.cues}</div>`;

            if (exercise.trackable) {
                html += `<input type="text" class="tracking-input"
                               placeholder="Notes (e.g., weight used, modifications)"
                               value="${notes}"
                               onchange="updateNotes('${progressKey}', this.value)">`;
            }

            html += `</div></div>`;
        });

        html += `</div>`;
    });

    html += `</div>`;
    workoutDisplay.innerHTML = html;
}

// Toggle exercise completion
function toggleExercise(key) {
    if (!workoutProgress[key]) {
        workoutProgress[key] = { completed: false, notes: '' };
    }
    workoutProgress[key].completed = !workoutProgress[key].completed;
    saveToStorage();
}

// Update notes
function updateNotes(key, value) {
    if (!workoutProgress[key]) {
        workoutProgress[key] = { completed: false, notes: '' };
    }
    workoutProgress[key].notes = value;
    saveToStorage();
}

// Save progress
function saveProgress() {
    saveToStorage();
    showNotification('Progress saved successfully!', 'success');
}

// Reset week
function resetWeek() {
    if (confirm('Are you sure you want to reset all progress for this week?')) {
        Object.keys(workoutProgress).forEach(key => {
            if (key.includes(`-w${currentWeek}-`)) {
                delete workoutProgress[key];
            }
        });
        saveToStorage();
        displayWorkout();
        showNotification('Week reset successfully!', 'info');
    }
}

// Save challenges
function saveChallenges() {
    challengeScores = {
        burpeesBefore: document.getElementById('burpees-before').value,
        burpeesAfter: document.getElementById('burpees-after').value,
        wallChairBefore: document.getElementById('wall-chair-before').value,
        wallChairAfter: document.getElementById('wall-chair-after').value,
        runBefore: document.getElementById('run-before').value,
        runAfter: document.getElementById('run-after').value
    };
    saveToStorage();
    showNotification('Challenge scores saved successfully!', 'success');
}

// Load challenges
function loadChallenges() {
    if (challengeScores.burpeesBefore) {
        document.getElementById('burpees-before').value = challengeScores.burpeesBefore;
    }
    if (challengeScores.burpeesAfter) {
        document.getElementById('burpees-after').value = challengeScores.burpeesAfter;
    }
    if (challengeScores.wallChairBefore) {
        document.getElementById('wall-chair-before').value = challengeScores.wallChairBefore;
    }
    if (challengeScores.wallChairAfter) {
        document.getElementById('wall-chair-after').value = challengeScores.wallChairAfter;
    }
    if (challengeScores.runBefore) {
        document.getElementById('run-before').value = challengeScores.runBefore;
    }
    if (challengeScores.runAfter) {
        document.getElementById('run-after').value = challengeScores.runAfter;
    }
}

// Notification system (replacement for alert())
function showNotification(message, type = 'info') {
    // For now, use alert. Can be enhanced with a custom notification UI
    alert(message);
}

// PWA Installation
function initPWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }

    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Store the event for later use
        deferredPrompt = e;
        // Show install button
        const installButton = document.getElementById('installButton');
        if (installButton) {
            installButton.style.display = 'inline-block';
        }
    });

    // Install button click handler
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.addEventListener('click', async () => {
            if (!deferredPrompt) {
                return;
            }

            // Show the install prompt
            deferredPrompt.prompt();

            // Wait for the user's response
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to install prompt: ${outcome}`);

            // Clear the deferred prompt
            deferredPrompt = null;

            // Hide the install button
            installButton.style.display = 'none';
        });
    }

    // Detect if app is installed
    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
        deferredPrompt = null;
        const installButton = document.getElementById('installButton');
        if (installButton) {
            installButton.style.display = 'none';
        }
    });
}

// Schedule Management Functions
function loadScheduleUI() {
    // Load the schedule settings into the UI
    if (weeklySchedule.day1) {
        const radio = document.querySelector(`input[name="day1"][value="${weeklySchedule.day1}"]`);
        if (radio) radio.checked = true;
    }
    if (weeklySchedule.day2) {
        const radio = document.querySelector(`input[name="day2"][value="${weeklySchedule.day2}"]`);
        if (radio) radio.checked = true;
    }
    if (weeklySchedule.day3) {
        const radio = document.querySelector(`input[name="day3"][value="${weeklySchedule.day3}"]`);
        if (radio) radio.checked = true;
    }
    if (weeklySchedule.day4) {
        const radio = document.querySelector(`input[name="day4"][value="${weeklySchedule.day4}"]`);
        if (radio) radio.checked = true;
    }

    // Load mobility checkboxes
    document.querySelectorAll('input[name="mobility"]').forEach(checkbox => {
        checkbox.checked = weeklySchedule.mobility.includes(checkbox.value);
    });

    updateSchedulePreview();
}

function saveSchedule() {
    // Get selected days from radio buttons
    const day1Radio = document.querySelector('input[name="day1"]:checked');
    const day2Radio = document.querySelector('input[name="day2"]:checked');
    const day3Radio = document.querySelector('input[name="day3"]:checked');
    const day4Radio = document.querySelector('input[name="day4"]:checked');

    if (!day1Radio || !day2Radio || !day3Radio || !day4Radio) {
        alert('Please select a day for each workout (Day 1-4)');
        return;
    }

    weeklySchedule.day1 = day1Radio.value;
    weeklySchedule.day2 = day2Radio.value;
    weeklySchedule.day3 = day3Radio.value;
    weeklySchedule.day4 = day4Radio.value;

    // Get selected mobility days from checkboxes
    const mobilityDays = [];
    document.querySelectorAll('input[name="mobility"]:checked').forEach(checkbox => {
        mobilityDays.push(checkbox.value);
    });
    weeklySchedule.mobility = mobilityDays;

    saveToStorage();
    updateSchedulePreview();
    showNotification('Schedule saved successfully!', 'success');
}

function updateSchedulePreview() {
    const previewContainer = document.getElementById('schedule-preview');
    if (!previewContainer) return;

    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const dayLabels = {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday'
    };

    // Create a map of day -> workout
    const scheduleMap = {};

    // Initialize all days as rest days
    daysOfWeek.forEach(day => {
        scheduleMap[day] = { type: 'rest', label: 'OFF' };
    });

    // Assign workout days
    if (weeklySchedule.day1) {
        scheduleMap[weeklySchedule.day1] = {
            type: 'workout',
            label: 'Day 1 - Strength & Conditioning'
        };
    }
    if (weeklySchedule.day2) {
        scheduleMap[weeklySchedule.day2] = {
            type: 'workout',
            label: 'Day 2 - Strength & Conditioning'
        };
    }
    if (weeklySchedule.day3) {
        scheduleMap[weeklySchedule.day3] = {
            type: 'mobility',
            label: 'Day 3 - Light Cardio & Mobility'
        };
    }
    if (weeklySchedule.day4) {
        scheduleMap[weeklySchedule.day4] = {
            type: 'workout',
            label: 'Day 4 - Strength & Conditioning'
        };
    }

    // Add mobility days (don't override existing workouts)
    weeklySchedule.mobility.forEach(day => {
        if (scheduleMap[day].type === 'rest') {
            scheduleMap[day] = {
                type: 'mobility',
                label: 'Optional Mobility'
            };
        }
    });

    // Generate HTML
    let html = '';
    daysOfWeek.forEach(day => {
        const schedule = scheduleMap[day];
        html += `
            <div class="schedule-day ${schedule.type}">
                <strong>${dayLabels[day]}</strong>
                <p>${schedule.label}</p>
            </div>
        `;
    });

    previewContainer.innerHTML = html;
}

// Google Calendar Integration
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE'; // User needs to set this up
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE'; // User needs to set this up
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

let tokenClient;
let gapiInited = false;
let gisInited = false;
let accessToken = null;

function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
    try {
        await gapi.client.init({
            apiKey: GOOGLE_API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
    } catch (error) {
        console.error('Error initializing GAPI client:', error);
    }
}

function gisLoaded() {
    try {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: GOOGLE_CLIENT_ID,
            scope: SCOPES,
            callback: '', // defined later
        });
        gisInited = true;
        maybeEnableButtons();
    } catch (error) {
        console.error('Error initializing GIS:', error);
    }
}

function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        document.getElementById('google-signin-btn').disabled = false;
    }
}

function handleGoogleSignIn() {
    // Check if CLIENT_ID and API_KEY are set
    if (GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID_HERE' ||
        GOOGLE_API_KEY === 'YOUR_GOOGLE_API_KEY_HERE') {
        alert('Google Calendar integration requires setup. Please configure your Google API credentials in app.js.\n\nVisit https://console.cloud.google.com/ to create credentials.');
        return;
    }

    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }
        accessToken = resp.access_token;
        updateCalendarUI(true);
        showCalendarStatus('Connected to Google Calendar', 'success');
    };

    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
        tokenClient.requestAccessToken({prompt: ''});
    }
}

function handleGoogleSignOut() {
    const token = gapi.client.getToken();
    if (token !== null) {
        google.accounts.oauth2.revoke(token.access_token);
        gapi.client.setToken('');
        accessToken = null;
        updateCalendarUI(false);
        showCalendarStatus('Disconnected from Google Calendar', 'info');
    }
}

function updateCalendarUI(isConnected) {
    document.getElementById('google-signin-btn').style.display = isConnected ? 'none' : 'inline-block';
    document.getElementById('google-sync-btn').style.display = isConnected ? 'inline-block' : 'none';
    document.getElementById('google-signout-btn').style.display = isConnected ? 'inline-block' : 'none';
}

function showCalendarStatus(message, type) {
    const statusDiv = document.getElementById('calendar-status');
    const statusText = document.getElementById('calendar-status-text');
    statusText.textContent = message;
    statusDiv.style.display = 'block';
    statusDiv.style.background = type === 'success' ? '#d5f4e6' : type === 'error' ? '#f8d7da' : '#f0f0f0';
}

async function syncToGoogleCalendar() {
    if (!accessToken) {
        alert('Please connect to Google Calendar first');
        return;
    }

    try {
        showCalendarStatus('Syncing to Google Calendar...', 'info');

        // Get the start of next week
        const today = new Date();
        const dayOfWeek = today.getDay();
        const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek; // Next Monday
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + daysUntilMonday);
        startDate.setHours(9, 0, 0, 0); // Default to 9 AM

        const events = [];

        // Generate events for the next 6 weeks
        for (let week = 0; week < 6; week++) {
            // Day 1
            const day1Date = getDateForDay(startDate, week, weeklySchedule.day1);
            const day1Workout = workoutData[currentProgram].day1;
            events.push(createCalendarEvent(day1Date, 'Day 1 - ' + day1Workout.title, getWorkoutDescription(day1Workout)));

            // Day 2
            const day2Date = getDateForDay(startDate, week, weeklySchedule.day2);
            const day2Workout = workoutData[currentProgram].day2;
            events.push(createCalendarEvent(day2Date, 'Day 2 - ' + day2Workout.title, getWorkoutDescription(day2Workout)));

            // Day 3
            const day3Date = getDateForDay(startDate, week, weeklySchedule.day3);
            const day3Workout = workoutData[currentProgram].day3;
            events.push(createCalendarEvent(day3Date, 'Day 3 - ' + day3Workout.title, getWorkoutDescription(day3Workout)));

            // Day 4
            const day4Date = getDateForDay(startDate, week, weeklySchedule.day4);
            const day4Workout = workoutData[currentProgram].day4;
            events.push(createCalendarEvent(day4Date, 'Day 4 - ' + day4Workout.title, getWorkoutDescription(day4Workout)));

            // Mobility days
            weeklySchedule.mobility.forEach(mobilityDay => {
                const mobilityDate = getDateForDay(startDate, week, mobilityDay);
                events.push(createCalendarEvent(mobilityDate, 'Optional Mobility', 'Light stretching and recovery session'));
            });
        }

        // Create all events
        let successCount = 0;
        for (const event of events) {
            try {
                await gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event
                });
                successCount++;
            } catch (error) {
                console.error('Error creating event:', error);
            }
        }

        showCalendarStatus(`Successfully created ${successCount} calendar events!`, 'success');
        showNotification(`Created ${successCount} workout events in Google Calendar!`, 'success');
    } catch (error) {
        console.error('Error syncing to calendar:', error);
        showCalendarStatus('Error syncing to Google Calendar', 'error');
        alert('Error syncing to Google Calendar. Please try again.');
    }
}

function getDateForDay(startDate, weekOffset, dayName) {
    const dayMap = {
        monday: 0,
        tuesday: 1,
        wednesday: 2,
        thursday: 3,
        friday: 4,
        saturday: 5,
        sunday: 6
    };

    const date = new Date(startDate);
    date.setDate(startDate.getDate() + (weekOffset * 7) + dayMap[dayName]);
    return date;
}

function createCalendarEvent(date, title, description) {
    const endDate = new Date(date);
    endDate.setHours(date.getHours() + 1); // 1 hour duration

    return {
        'summary': 'FORCE Training: ' + title,
        'description': description,
        'start': {
            'dateTime': date.toISOString(),
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        'end': {
            'dateTime': endDate.toISOString(),
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'popup', 'minutes': 30}
            ]
        }
    };
}

function getWorkoutDescription(dayData) {
    let description = dayData.title + '\n\n';
    description += 'Sections:\n';
    dayData.sections.forEach(section => {
        description += `\n${section.name}:\n`;
        section.exercises.forEach(exercise => {
            description += `- ${exercise.name} (${exercise.sets} sets x ${exercise.reps})\n`;
        });
    });
    return description;
}

// Initialize on load
window.onload = function() {
    loadFromStorage();
    displayWorkout();
    setTimeout(loadChallenges, 100);
    setTimeout(() => {
        updateSchedulePreview();
    }, 200);
    initPWA();

    // Initialize Google API if available
    if (typeof gapi !== 'undefined') {
        gapiLoaded();
    }
    if (typeof google !== 'undefined' && google.accounts) {
        gisLoaded();
    }

    // Log storage info for debugging
    console.log('Storage Info:', StorageManager.getStorageInfo());
};
