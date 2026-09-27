"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog_today_plan");
      const storedSaved = localStorage.getItem("fitlog_saved");
      if (storedPlan) setTodayPlan(JSON.parse(storedPlan));
      if (storedSaved) setSavedWorkouts(JSON.parse(storedSaved));
    } catch (e) {
      console.error("Failed to load plans from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("fitlog_today_plan", JSON.stringify(todayPlan));
    } catch (e) {
      console.error("Failed to save plan to localStorage", e);
    }
  }, [todayPlan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("fitlog_saved", JSON.stringify(savedWorkouts));
    } catch (e) {
      console.error("Failed to save favorites to localStorage", e);
    }
  }, [savedWorkouts, isLoaded]);

  const showToast = (message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const addToTodayPlan = (workout) => {
    // Limit check: 5 lifts cap
    if (todayPlan.length >= 5) {
      showToast("Plan limit reached! Maximum 5 lifts for today.", "warning");
      return false;
    }

    const exists = todayPlan.some((item) => String(item.id) === String(workout.id));
    if (exists) {
      showToast("Already in today's plan!", "info");
      return false;
    }

    setTodayPlan((prev) => [...prev, { ...workout, isDone: false, addedAt: Date.now() }]);
    showToast(`Added "${workout.name}" to today's plan!`, "success");
    return true;
  };

  const saveForLater = (workout) => {
    const exists = savedWorkouts.some((item) => String(item.id) === String(workout.id));
    if (exists) {
      showToast("Already in your saved workouts!", "info");
      return false;
    }

    setSavedWorkouts((prev) => [...prev, { ...workout, addedAt: Date.now() }]);
    showToast(`Saved "${workout.name}" for later!`, "success");
    return true;
  };

  const removeFromTodayPlan = (id) => {
    setTodayPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
    showToast("Removed from today's plan", "info");
  };

  const removeFromSaved = (id) => {
    setSavedWorkouts((prev) => prev.filter((item) => String(item.id) !== String(id)));
    showToast("Removed from saved workouts", "info");
  };

  const toggleMarkAsDone = (id) => {
    setTodayPlan((prev) =>
      prev.map((item) => {
        if (String(item.id) === String(id)) {
          const nextState = !item.isDone;
          showToast(
            nextState ? `Completed "${item.name}"! Great work!` : `Marked "${item.name}" as pending`,
            nextState ? "success" : "info"
          );
          return { ...item, isDone: nextState };
        }
        return item;
      })
    );
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        isLoaded,
        addToTodayPlan,
        saveForLater,
        removeFromTodayPlan,
        removeFromSaved,
        toggleMarkAsDone,
        showToast,
      }}
    >
      {children}

      {/* Floating Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between px-4 py-3 rounded-lg border shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0 ${
              toast.type === "success"
                ? "bg-brand-card/95 border-brand-lime/50 text-white"
                : toast.type === "warning"
                ? "bg-brand-card/95 border-amber-500/50 text-amber-200"
                : "bg-brand-card/95 border-brand-border text-slate-200"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  toast.type === "success"
                    ? "bg-brand-lime"
                    : toast.type === "warning"
                    ? "bg-amber-400"
                    : "bg-blue-400"
                }`}
              />
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="text-xs text-brand-muted hover:text-white ml-3"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}
