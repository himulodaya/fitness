// Workout data for FORCE Preparation Program
const workoutData = {
    sandbag: {
        day1: {
            title: "Day 1 - Strength and Conditioning",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Jumping Jacks", sets: 3, reps: "30", rest: "-", cues: "Reach your arms overhead to warm up the shoulders too." },
                        { name: "Lizard Hip Opener to T-spine Rotation", sets: 3, reps: "5 each side", rest: "-", cues: "Reach as low as possible with closest elbow, then turn out towards the front knee." },
                        { name: "Squat Stretch", sets: 3, reps: "10", rest: "-", cues: "Push your knees out with your elbows, keeping feet flat on the ground." }
                    ]
                },
                {
                    name: "CARDIO",
                    exercises: [
                        { name: "Moderate Cardio of your choice", sets: 1, reps: "10 min", rest: "-", cues: "Run if possible or select a cardio machine of your choice." }
                    ]
                },
                {
                    name: "SUPERSET 1",
                    exercises: [
                        { name: "Sandbag Front Squat", sets: 3, reps: "15", rest: "-", cues: "Hold the sandbag in front of you with both arms and keep it close to your body.", trackable: true },
                        { name: "Sandbag Bent Over Row", sets: 3, reps: "10-15", rest: "60 sec", cues: "Keep your back straight in the bent-over position. Pull the sandbag to your torso.", trackable: true }
                    ]
                },
                {
                    name: "SUPERSET 2",
                    exercises: [
                        { name: "Sandbag/Bodyweight Lunges", sets: 3, reps: "20", rest: "-", cues: "Alternate left and right leg. Attempt to bend both knees to 90 degrees.", trackable: true },
                        { name: "Push Ups (knees/feet)", sets: 3, reps: "10-15", rest: "60 sec", cues: "Descend until your chest reaches the floor. If unable, use your knees as the pivot point.", trackable: true }
                    ]
                },
                {
                    name: "INTERVAL WORK",
                    exercises: [
                        { name: "Burpees with Hand Release", sets: 5, reps: "Max reps in 1 min", rest: "1 min", cues: "Max reps in 1 min, followed by 1 min rest. Repeat for 5 total sets (10 min).", trackable: true }
                    ]
                },
                {
                    name: "CORE",
                    exercises: [
                        { name: "Side Plank Hold", sets: 3, reps: "30-60 sec each side", rest: "30-60 sec", cues: "Make sure your feet, hips, and elbows are aligned. Keep the body straight and hips high.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Pigeon Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep your knee on the ground. You should feel a stretch in your glute associated with the front leg." },
                        { name: "Doorway Pec Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep your shoulder close to the wall and turn away to stretch the pectoral muscle." },
                        { name: "Couch Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep the chest high to deepen the stretch in the front of the hip." }
                    ]
                }
            ]
        },
        day2: {
            title: "Day 2 - Strength and Conditioning",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Inchworm", sets: 3, reps: "5", rest: "-", cues: "Walk your hands into a plank position and walk them back to your feet." },
                        { name: "Half Burpee", sets: 3, reps: "10", rest: "-", cues: "Perform a plank, then hop back up to a squat stance (flat feet on the ground)." },
                        { name: "Wall Slides", sets: 3, reps: "10", rest: "-", cues: "Keep back flat on the wall, then slide the arms as high as possible while maintaining full contact with the wall." },
                        { name: "Lunges (no weight)", sets: 3, reps: "20", rest: "-", cues: "Alternate left and right leg. Control the movement while attempting to bend both knees to 90 degrees" }
                    ]
                },
                {
                    name: "SUPERSET 1",
                    exercises: [
                        { name: "Sandbag Good Morning / Sandbag Deadlift", sets: 3, reps: "15", rest: "-", cues: "Shift the hips back while dropping the chest forward. Keep spine neutral and stable.", trackable: true },
                        { name: "Step up / Sandbag Step Up", sets: 3, reps: "20", rest: "60 sec", cues: "Alternate left and right leg. Step on a stable chair or on stairs.", trackable: true }
                    ]
                },
                {
                    name: "SUPERSET 2",
                    exercises: [
                        { name: "Sandbag Ground to Shoulder", sets: 3, reps: "8 each side", rest: "-", cues: "Keep your back straight and use your legs and hips for power and momentum.", trackable: true },
                        { name: "Sandbag Carry / Sandbag Static March", sets: 3, reps: "45 sec each side", rest: "60 sec", cues: "Carry the sandbag on one shoulder or in one hand for 45 sec each side.", trackable: true }
                    ]
                },
                {
                    name: "10 MIN CIRCUIT",
                    exercises: [
                        { name: "Sandbag Thruster (squat + press)", sets: 1, reps: "5-10", rest: "-", cues: "Perform a full squat and use your legs for power on the way up to push the sandbag overhead.", trackable: true },
                        { name: "Split Squat Jump", sets: 1, reps: "5-10 each side", rest: "-", cues: "Explosive tempo on the way up in a lunge position.", trackable: true },
                        { name: "Hand Release Push-Up (knees/feet)", sets: 1, reps: "5-10", rest: "-", cues: "Descend until your chest reaches the floor. If unable, use your knees as the pivot point.", trackable: true }
                    ]
                },
                {
                    name: "CORE",
                    exercises: [
                        { name: "Hollow Body Hold", sets: 3, reps: "30 sec", rest: "-", cues: "To lower the intensity, bring arms lower and bend your knees.", trackable: true },
                        { name: "Deadbug", sets: 3, reps: "20", rest: "60 sec", cues: "Alternate opposite arm and leg. Focus on keeping the spine stable and core tight.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Quadriceps Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Laying on your side, keep your knees and hips aligned while pulling back on the bent leg." },
                        { name: "Half Kneeling Hamstring Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep the front leg straight and lean forward while keeping your back straight." },
                        { name: "Wall T-spine Extension", sets: 1, reps: "1-2 min", rest: "-", cues: "With both hands on a wall, shift your hips back while you drop your chest towards the floor." }
                    ]
                }
            ]
        },
        day3: {
            title: "Day 3 - Light Cardio and Mobility",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Dorsiflexion to Calf Raise", sets: 3, reps: "10", rest: "-", cues: "In a standing position, shift your weight on your heels and lift your toes. Following this, lift your heels off the floor by pushing through your toes." },
                        { name: "Hamstring Sweep", sets: 3, reps: "10", rest: "-", cues: "Keep both knees close to each other. Front leg is extended while hips shift backward." },
                        { name: "Dynamic Quad Stretch - Hold 3 sec", sets: 3, reps: "10", rest: "-", cues: "Lift your heel towards your glute. Ensure knee of bent leg points towards the floor." },
                        { name: "Side Shuffle", sets: 3, reps: "10 each side", rest: "-", cues: "While maintaining a half squat position, shuffle to the side." },
                        { name: "Butt Kickers", sets: 3, reps: "20", rest: "-", cues: "Alternate bringing your heels to your glutes in a light jog." },
                        { name: "High Knees", sets: 3, reps: "20", rest: "-", cues: "Alternate raising your knees to hip height in front of you in a light jog." }
                    ]
                },
                {
                    name: "CARDIO",
                    exercises: [
                        { name: "Running, easy to moderate pace", sets: 1, reps: "10-15 min", rest: "-", cues: "Goal is to find an easy to moderate pace you can maintain for the entire time.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Figure 4 Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Keep your head relaxed on the ground." },
                        { name: "Downward Dog with Calf Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Alternate left and right calf stretch." },
                        { name: "Seated Hamstring Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Keep one leg extended and reach forward as far as possible." },
                        { name: "Lizard Hip Opener to T-spine Rotation", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Reach as low as possible with closest elbow, then turn out towards the front knee." },
                        { name: "Couch Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Keep the chest high to deepen the stretch in the front of the hip." },
                        { name: "Twisted Cross (Pec Stretch)", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Reach as low as possible with closest elbow, then turn out towards the front knee." }
                    ]
                }
            ]
        },
        day4: {
            title: "Day 4 - Strength and Conditioning",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Prone Angels", sets: 3, reps: "5", rest: "-", cues: "Laying in a prone position, raise your hands overhead as high as possible." },
                        { name: "Squat Stretch", sets: 3, reps: "10", rest: "-", cues: "Push your knees out with your elbows, keeping feet flat on the ground." },
                        { name: "Butt Kickers", sets: 3, reps: "20", rest: "-", cues: "Alternate bringing your heels to your glutes in a light jog." },
                        { name: "Skater Jumps", sets: 3, reps: "20", rest: "-", cues: "Starting on one leg, jump laterally (to the side) while landing on the other foot." }
                    ]
                },
                {
                    name: "SUPERSET 1",
                    exercises: [
                        { name: "Towel Leg Curl", sets: 3, reps: "10", rest: "-", cues: "Heels are on a towel. While keeping the hips raised, curl your heels towards your glutes.", trackable: true },
                        { name: "Sandbag Overhead Press", sets: 3, reps: "10-15", rest: "60 sec", cues: "Hold the sandbag with both hands in front of you and press it overhead, keeping the chest high.", trackable: true }
                    ]
                },
                {
                    name: "SUPERSET 2",
                    exercises: [
                        { name: "Sandbag Sumo Squat", sets: 3, reps: "15", rest: "-", cues: "In a wide squat stance, hold the sandbag in your hands in front of you. Keep your chest up.", trackable: true },
                        { name: "Chair Hold on Wall with Sandbag", sets: 3, reps: "30-60 sec", rest: "60 sec", cues: "Hold a chair position on a wall (knees bent at 90 degrees). Hold the sandbag in both arms.", trackable: true }
                    ]
                },
                {
                    name: "10 MIN CIRCUIT",
                    exercises: [
                        { name: "Squat Jump", sets: 1, reps: "10", rest: "-", cues: "Perform a full squat and, with power, jump on the way up. Remove the jump if needed.", trackable: true },
                        { name: "Sandbag Sumo Deadlift High Pull", sets: 1, reps: "10", rest: "-", cues: "Keep the chest up and use your legs, hips, and arms for power and momentum to raise the sandbag up to the collar bone.", trackable: true },
                        { name: "High Knees", sets: 1, reps: "30", rest: "-", cues: "Alternate raising your knees to hip height in front of you in a light jog.", trackable: true }
                    ]
                },
                {
                    name: "CORE",
                    exercises: [
                        { name: "Plank Alternating Shoulder Taps", sets: 3, reps: "30-60 sec", rest: "60 sec", cues: "Holding a plank position with feet wide, lift one hand and touch opposite shoulder while keeping the hips and spine as stable as possible.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Towel Hamstring Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "While lying on your back, wrap a towel around your foot and use it to assist a light pull." },
                        { name: "Two Legs Iron Cross Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "While keeping your back flat on the floor, bend both knees and drop them to one side." },
                        { name: "Doorway Pec Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep your elbows below shoulder height." }
                    ]
                }
            ]
        }
    },
    bodyweight: {
        day1: {
            title: "Day 1 - Strength and Conditioning",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Jumping Jacks", sets: 3, reps: "30", rest: "-", cues: "Reach your arms overhead to warm up the shoulders too." },
                        { name: "Lizard Hip Opener to T-spine Rotation", sets: 3, reps: "5 each side", rest: "-", cues: "Reach as low as possible with closest elbow, then turn out towards the front knee." },
                        { name: "Squat Stretch", sets: 3, reps: "10", rest: "-", cues: "Push your knees out with your elbows, keeping feet flat on the ground." }
                    ]
                },
                {
                    name: "CARDIO",
                    exercises: [
                        { name: "Moderate Cardio of your choice", sets: 1, reps: "10 min", rest: "-", cues: "Run if possible or select a cardio machine of your choice." }
                    ]
                },
                {
                    name: "SUPERSET 1",
                    exercises: [
                        { name: "Squat Jump", sets: 3, reps: "15", rest: "-", cues: "Perform a full squat and jump on the way up.", trackable: true },
                        { name: "Single Leg Glute Bridge", sets: 3, reps: "10-15 each side", rest: "60 sec", cues: "Push through your heels and squeeze your glutes to lift the hips as high as possible.", trackable: true }
                    ]
                },
                {
                    name: "SUPERSET 2",
                    exercises: [
                        { name: "Static Lunge / Jumping Lunges", sets: 3, reps: "20", rest: "-", cues: "Alternate left and right leg. Attempt to bend both knees to 90 degrees.", trackable: true },
                        { name: "Push-Ups (knees/feet)", sets: 3, reps: "10-15", rest: "60 sec", cues: "Descend until your chest reaches the floor. If unable, use your knees as the pivot point.", trackable: true }
                    ]
                },
                {
                    name: "INTERVAL WORK",
                    exercises: [
                        { name: "Burpees with Hand Release", sets: 5, reps: "Max reps in 1 min", rest: "1 min", cues: "Max reps in 1 min, followed by 1 min rest. Repeat for 5 sets total (10 min).", trackable: true }
                    ]
                },
                {
                    name: "CORE",
                    exercises: [
                        { name: "Side Plank Hold", sets: 3, reps: "30-60 sec each side", rest: "30-60 sec", cues: "Make sure your feet, hips and elbows are aligned. Keep the body straight and hips high.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Pigeon Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep your knee on the ground. You should feel a stretch in your glute associated with the front leg." },
                        { name: "Doorway Pec Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep your shoulder close to the wall and turn away to stretch the pectoral muscle." },
                        { name: "Couch Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep the chest high to deepen the stretch in the front of the hip." }
                    ]
                }
            ]
        },
        day2: {
            title: "Day 2 - Strength and Conditioning",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Inchworm", sets: 3, reps: "5", rest: "-", cues: "Walk your hands into a plank position and walk them back to your feet." },
                        { name: "Half Burpee", sets: 3, reps: "10", rest: "-", cues: "Perform a plank, then hop back up to a squat stance (flat feet on the ground)." },
                        { name: "Wall Slides", sets: 3, reps: "10", rest: "-", cues: "Keep back flat on the wall, then slide the arms as high as possible while maintaining full contact with the wall." },
                        { name: "Lunges", sets: 3, reps: "10", rest: "-", cues: "Alternate left and right leg. Attempt to bend both knees to 90 degrees." }
                    ]
                },
                {
                    name: "SUPERSET 1",
                    exercises: [
                        { name: "Hip Thrust with Hold", sets: 3, reps: "15", rest: "-", cues: "Hold 3 sec on top of each rep, squeeze your glutes as much as possible to elevate the hips.", trackable: true },
                        { name: "Step Up", sets: 3, reps: "20", rest: "60 sec", cues: "Alternate left and right leg. Step on a stable chair or on stairs.", trackable: true }
                    ]
                },
                {
                    name: "SUPERSET 2",
                    exercises: [
                        { name: "Plank Knee to Elbow", sets: 3, reps: "10-15 each side", rest: "-", cues: "Holding the plank position, bring your knee to your elbow, keeping the hips stable.", trackable: true },
                        { name: "Incline Push-Up", sets: 3, reps: "5-10", rest: "60 sec", cues: "Use a wall, table, chair, or couch to put your hands on.", trackable: true }
                    ]
                },
                {
                    name: "10 MIN CIRCUIT",
                    exercises: [
                        { name: "Squat In and Out", sets: 1, reps: "5-10", rest: "-", cues: "Perform a full squat, then jump your feet in and back out to the squat stance for the next squat.", trackable: true },
                        { name: "Split Squat Jump", sets: 1, reps: "5-10 each side", rest: "-", cues: "Explosive tempo on the way up in a lunge position.", trackable: true },
                        { name: "Hand Release Push-Up (knees/feet)", sets: 1, reps: "5-10", rest: "-", cues: "Descend until your chest reaches the floor. If unable, use your knees as the pivot point.", trackable: true }
                    ]
                },
                {
                    name: "CORE",
                    exercises: [
                        { name: "Hollow Body Hold", sets: 3, reps: "30 sec", rest: "-", cues: "To lower the intensity, bring arms lower and bend your knees.", trackable: true },
                        { name: "Deadbug", sets: 3, reps: "20", rest: "60 sec", cues: "Alternate opposite arm and leg. Focus on keeping the spine stable and core tight.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Quadriceps Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Laying on your side, keep your knees and hips aligned while pulling back on the bent leg" },
                        { name: "Half Kneeling Hamstring Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep the front leg straight and lean forward while keeping your back straight." },
                        { name: "Wall T-spine Extension", sets: 1, reps: "1-2 min", rest: "-", cues: "With both hand on a wall, shift your hips back while you drop your chest towards the floor." }
                    ]
                }
            ]
        },
        day3: {
            title: "Day 3 - Light Cardio and Mobility",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Dorsiflexion to Calf Raise", sets: 3, reps: "10", rest: "-", cues: "In a standing position, shift your weight on your heels and lift your toes." },
                        { name: "Hamstring Sweep", sets: 3, reps: "10", rest: "-", cues: "Keep both knees close to each other. Front leg is extended while hips shift backward." },
                        { name: "Dynamic Quad Stretch - Hold 3 sec", sets: 3, reps: "10", rest: "-", cues: "Lift your heel towards your glute. Ensure knee of bent leg points towards the floor." },
                        { name: "Side Shuffle", sets: 3, reps: "10 each side", rest: "-", cues: "While maintaining a half squat position, shuffle to the side." },
                        { name: "Butt Kickers", sets: 3, reps: "20", rest: "-", cues: "Alternate bringing your heels to your glutes in a light jog." },
                        { name: "High Knees", sets: 3, reps: "20", rest: "-", cues: "Alternate raising your knees to hip height in front of you in a light jog." }
                    ]
                },
                {
                    name: "CARDIO",
                    exercises: [
                        { name: "Running, easy to moderate pace", sets: 1, reps: "10-15 min", rest: "-", cues: "Goal is to find an easy to moderate pace you can maintain for the entire time.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Figure 4 Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Keep your head relaxed on the ground" },
                        { name: "Downward Dog with Calf Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Alternate left and right calf stretch." },
                        { name: "Seated Hamstring Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Keep one leg extended and reach forward as far as possible." },
                        { name: "Lizard Hip Opener to T-spine Rotation", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Reach as low as possible with closest elbow, then turn out towards the front knee." },
                        { name: "Couch Stretch", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "Keep the chest high to deepen the stretch in the front of the hip." },
                        { name: "Twisted Cross (Pec Stretch)", sets: "1-2", reps: "1-2 min each side", rest: "-", cues: "In a prone position while keeping one arm extended, rotate towards the opposite side." }
                    ]
                }
            ]
        },
        day4: {
            title: "Day 4 - Strength and Conditioning",
            sections: [
                {
                    name: "ACTIVATION",
                    exercises: [
                        { name: "Prone Angels", sets: 3, reps: "5", rest: "-", cues: "Laying in a prone position, raise your hands overhead as high as possible." },
                        { name: "Squat Stretch", sets: 3, reps: "10", rest: "-", cues: "Grab your toes while keeping your legs as straight as possible, then drop your hips to the floor." },
                        { name: "Butt Kickers", sets: 3, reps: "20", rest: "-", cues: "Alternate bringing your heels to your glutes in a light jog." },
                        { name: "Skater Jumps", sets: 3, reps: "20", rest: "-", cues: "Starting on one leg, jump laterally (to the side) while landing on the other foot." }
                    ]
                },
                {
                    name: "SUPERSET 1",
                    exercises: [
                        { name: "Towel Leg Curl", sets: 3, reps: "10", rest: "-", cues: "Heels are on a towel. While keeping the hips raised, curl your heels towards your glutes.", trackable: true },
                        { name: "Pike Push-up (feet elevated)", sets: 3, reps: "5-10", rest: "60 sec", cues: "Raise your hips over your hands. Bend your elbows to lower your shoulders towards the floor.", trackable: true }
                    ]
                },
                {
                    name: "SUPERSET 2",
                    exercises: [
                        { name: "Bulgarian Split Squat", sets: 3, reps: "10 each side", rest: "-", cues: "Place your rear leg on a chair/bench. Keep front foot flat on the floor while you lower your back knee towards the ground.", trackable: true },
                        { name: "Chair Hold on Wall", sets: 3, reps: "60 sec", rest: "60 sec", cues: "Hold a chair position on a wall (knees bent at 90 degrees).", trackable: true }
                    ]
                },
                {
                    name: "10 MIN CIRCUIT",
                    exercises: [
                        { name: "Inchworm to Push-Up (knees/feet)", sets: 1, reps: "5-10", rest: "-", cues: "Walk your hands down to a plank position, then lower your chest all the way to the floor. Perform the push-up from your knees if needed.", trackable: true },
                        { name: "Sumo Squat", sets: 1, reps: "15-20", rest: "-", cues: "Wide squat stance with toes pointed out. Keep chest up.", trackable: true },
                        { name: "High Knees", sets: 1, reps: "30", rest: "-", cues: "Alternate raising your knees to hip height in front of you in a light jog.", trackable: true }
                    ]
                },
                {
                    name: "CORE",
                    exercises: [
                        { name: "Plank Alternating Shoulder Taps", sets: 3, reps: "30-60 sec", rest: "60 sec", cues: "Holding a plank position with feet wide, lift one hand and touch opposite shoulder while keeping the hips and spine as stable as possible.", trackable: true }
                    ]
                },
                {
                    name: "MOBILITY",
                    exercises: [
                        { name: "Towel Hamstring Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "While lying on your back, wrap a towel around your foot and use it to assist a light pull." },
                        { name: "Two Legs Iron Cross Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "While keeping your back flat on the floor, bend both knees and drop them to one side." },
                        { name: "Doorway Pec Stretch", sets: 1, reps: "1-2 min each side", rest: "-", cues: "Keep your elbows below shoulder height." }
                    ]
                }
            ]
        }
    }
};
