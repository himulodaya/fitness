// FORCE Tracker - Main Application Logic

// State management
let currentProgram = 'sandbag';
let currentWeek = 1;
let currentDay = 1;
let workoutProgress = {};
let challengeScores = {};

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

        // Update UI to reflect loaded state
        updateProgramUI();
        updateWeekUI();
        updateDayUI();
    }
}

function saveToStorage() {
    const data = {
        workoutProgress,
        challengeScores,
        currentProgram,
        currentWeek,
        currentDay
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

// Initialize on load
window.onload = function() {
    loadFromStorage();
    displayWorkout();
    setTimeout(loadChallenges, 100);
    initPWA();

    // Log storage info for debugging
    console.log('Storage Info:', StorageManager.getStorageInfo());
};
