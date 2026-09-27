# FitLog - Workout Library & Planner

FitLog is a responsive workout library and planner web app built with Next.js and Tailwind CSS. It lets users explore exercises across major muscle groups, view detailed instructions and key specifications, and track daily sessions with live metric calculations.

---

## Links

- **Live Site**: https://b14-a6-fit-1l4hvkhy6-sampad1.vercel.app/
- **GitHub Repository**: https://github.com/SamJU25/B14-A6-Fit-Log.git

---

## Features

1. **Workout Library**: Browse 12 exercises in a responsive 3x4 grid with category filter buttons (Chest, Back, Legs, Arms, Core, Shoulders) and a search bar.
2. **Exercise Details Page**: A two-column page showing workout image, equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.
3. **Daily Plan Tracking**: Add up to 5 exercises to "Today's Plan" with live metrics that calculate total exercises, total minutes, and total calories burned.
4. **Saved Workouts & Sorting**: Save workouts for later, switch between "Today's Plan" and "Saved" tabs, and sort entries by duration, calories, or rating.
5. **Mark as Done & LocalStorage**: Mark completed lifts with a visual checkmark and persist plan data in browser localStorage so it stays saved after reloading.

---

## Technologies Used

- **Next.js 15 (App Router)** - React framework for routing and layouts
- **React 19** - UI components, state management, and context
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Icons for metrics, equipment, and actions
- **LocalStorage API** - Saving plan and bookmark state locally

---

## Running Locally

1. Clone the repository:
```bash
git clone https://github.com/SamJU25/B14-A6-Fit-Log.git
cd B14-A6-Fit-Log
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.
