// Local fallback data for workouts
export const FALLBACK_WORKOUTS = [

  {
    id: 1,
    name: "Barbell Bench Press",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=740&q=80",
    muscleGroups: ["Chest", "Arms"],
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    duration: 25,
    caloriesBurned: 180,
    sets: 4,
    reps: "6-8",
    rating: 4.8,
    description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    instructions: [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back."
    ]
  },
  {
    id: 2,
    name: "Pull-Up",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=740&q=80",
    muscleGroups: ["Back", "Arms"],
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    duration: 15,
    caloriesBurned: 120,
    sets: 4,
    reps: "6-10",
    rating: 4.7,
    description: "An upper-body pulling staple targeting the lats, biceps, and posterior chain with bodyweight control.",
    instructions: [
      "Grip the bar slightly wider than shoulder-width with overhand grip.",
      "Engage your lats and pull your chest toward the bar.",
      "Pause briefly with chin cleared above the bar.",
      "Lower with control until arms reach full extension."
    ]
  },
  {
    id: 3,
    name: "Barbell Back Squat",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=740&q=80",
    muscleGroups: ["Legs", "Core"],
    equipment: "Barbell, Squat Rack",
    difficulty: "Advanced",
    duration: 30,
    caloriesBurned: 240,
    sets: 5,
    reps: "5",
    rating: 4.9,
    description: "The gold-standard lower body lift targeting quadriceps, hamstrings, glutes, and core stability.",
    instructions: [
      "Step under the barbell resting it across upper traps.",
      "Hinge hips back and bend knees, driving knees outward.",
      "Descend until hip crease is below the top of knees.",
      "Drive through mid-foot to stand back up to starting position."
    ]
  },
  {
    id: 4,
    name: "Romanian Deadlift",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=740&q=80",
    muscleGroups: ["Legs", "Back"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 20,
    caloriesBurned: 160,
    sets: 4,
    reps: "8-10",
    rating: 4.6,
    description: "A hip-hinge movement that emphasizes hamstring tension and glute activation while keeping posture firm.",
    instructions: [
      "Hold the barbell with an overhand grip at thigh level.",
      "Push hips back with soft knees, keeping spine neutral.",
      "Lower bar down shins until hamstrings feel fully stretched.",
      "Drive hips forward to return to standing locked position."
    ]
  },
  {
    id: 5,
    name: "Overhead Shoulder Press",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=740&q=80",
    muscleGroups: ["Shoulders", "Arms"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 20,
    caloriesBurned: 150,
    sets: 4,
    reps: "6-8",
    rating: 4.7,
    description: "A strict vertical press that develops anterior deltoids, upper chest, triceps, and standing core balance.",
    instructions: [
      "Rest the barbell on front shoulders with elbows slightly forward.",
      "Brace core and press the bar straight up clearing the chin.",
      "Lock out arms overhead with head returning forward.",
      "Control the descent back to shoulder level."
    ]
  },
  {
    id: 6,
    name: "Barbell Bent-Over Row",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=740&q=80",
    muscleGroups: ["Back", "Arms"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    duration: 20,
    caloriesBurned: 160,
    sets: 4,
    reps: "8",
    rating: 4.8,
    description: "A heavy horizontal pull targeting the mid-back, rhomboids, and lats for balanced torso thickness.",
    instructions: [
      "Hinge hips back with torso around 45 degrees to the floor.",
      "Grip the bar slightly wider than shoulder width.",
      "Pull bar to lower sternum driving elbows back.",
      "Lower with controlled eccentric without rounding lower back."
    ]
  },
  {
    id: 7,
    name: "Dumbbell Incline Bench Press",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=740&q=80",
    muscleGroups: ["Chest", "Shoulders"],
    equipment: "Dumbbells, Incline Bench",
    difficulty: "Intermediate",
    duration: 20,
    caloriesBurned: 140,
    sets: 3,
    reps: "10-12",
    rating: 4.6,
    description: "Focuses on the clavicular head of the pectorals with independent limb stabilization.",
    instructions: [
      "Set bench to 30 degrees and sit with dumbbells on knees.",
      "Kick dumbbells to shoulders and lie back securely.",
      "Press dumbbells up until arms extend above upper chest.",
      "Lower slowly until chest reaches a deep comfortable stretch."
    ]
  },
  {
    id: 8,
    name: "Hanging Leg Raise",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=740&q=80",
    muscleGroups: ["Core"],
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    duration: 12,
    caloriesBurned: 90,
    sets: 3,
    reps: "12-15",
    rating: 4.5,
    description: "Direct abdominal and hip flexor movement from a dead hang to build rotational and anti-extension trunk strength.",
    instructions: [
      "Hang with straight arms and shoulders engaged.",
      "Raise legs together until thighs are perpendicular to torso.",
      "Avoid swinging by maintaining strict control.",
      "Lower legs slowly to complete dead stop."
    ]
  },
  {
    id: 9,
    name: "Dumbbell Bicep Curl",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=740&q=80",
    muscleGroups: ["Arms"],
    equipment: "Dumbbells",
    difficulty: "Beginner",
    duration: 15,
    caloriesBurned: 100,
    sets: 3,
    reps: "12",
    rating: 4.5,
    description: "Classic elbow flexion isolating the biceps brachii with supination at peak contraction.",
    instructions: [
      "Stand tall holding dumbbells at sides with palms forward.",
      "Curl weights while keeping upper arms fixed to sides.",
      "Squeeze biceps firmly at top of motion.",
      "Lower under control back to starting position."
    ]
  },
  {
    id: 10,
    name: "Tricep Rope Pushdown",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=740&q=80",
    muscleGroups: ["Arms"],
    equipment: "Cable Machine, Rope",
    difficulty: "Beginner",
    duration: 15,
    caloriesBurned: 95,
    sets: 3,
    reps: "12-15",
    rating: 4.6,
    description: "Cable-based isolation targeting the lateral and long heads of the triceps with constant tension.",
    instructions: [
      "Attach rope to high pulley, gripping near knotted ends.",
      "Pin elbows to sides and push rope down toward thighs.",
      "Spread rope apart at bottom for peak contraction.",
      "Return slowly until forearms reach parallel."
    ]
  },
  {
    id: 11,
    name: "Bulgarian Split Squat",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=740&q=80",
    muscleGroups: ["Legs"],
    equipment: "Dumbbells, Bench",
    difficulty: "Advanced",
    duration: 20,
    caloriesBurned: 180,
    sets: 3,
    reps: "8-10 each",
    rating: 4.8,
    description: "Unilateral leg developer targeting quadriceps and glutes while exposing and fixing side-to-side imbalances.",
    instructions: [
      "Stand two feet ahead of bench, placing rear foot laces down on bench.",
      "Lower hips until front thigh is parallel to ground.",
      "Keep torso tall with slight forward lean for glute engagement.",
      "Push through front heel to return to top."
    ]
  },
  {
    id: 12,
    name: "Russian Twist",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=740&q=80",
    muscleGroups: ["Core"],
    equipment: "Medicine Ball / Dumbbell",
    difficulty: "Beginner",
    duration: 15,
    caloriesBurned: 110,
    sets: 3,
    reps: "20 total",
    rating: 4.4,
    description: "Seated rotational core exercise engaging internal and external obliques under continuous static hold.",
    instructions: [
      "Sit on mat with knees bent and feet elevated slightly.",
      "Lean back slightly to engage abdominal wall in V-shape.",
      "Rotate torso from side to side tapping weight on ground.",
      "Maintain stable hips and controlled breathing throughout."
    ]
  }
];

export async function fetchAllWorkouts() {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    const list = Array.isArray(data) ? data : data?.value;
    if (Array.isArray(list) && list.length > 0) return list;
  } catch (error) {
    console.warn("Primary API failed, trying alternative API...", error);
  }

  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const data = await res.json();
    const list = Array.isArray(data) ? data : data?.value;
    if (Array.isArray(list) && list.length > 0) return list;
  } catch (error) {
    console.warn("Alternative API failed, using fallback data...", error);
  }

  return FALLBACK_WORKOUTS;
}

export async function fetchWorkoutById(id) {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await res.json();
    if (data && !data.error && data.name) return data;
  } catch (error) {
    console.warn("Primary API failed, trying alternative API...", error);
  }

  try {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
    const data = await res.json();
    if (data && !data.error && data.name) return data;
  } catch (error) {
    console.warn("Alternative API failed, using fallback data...", error);
  }

  return FALLBACK_WORKOUTS.find((w) => String(w.id) === String(id)) || null;
}

