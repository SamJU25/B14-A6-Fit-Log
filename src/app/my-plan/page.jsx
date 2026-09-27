"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Clock,
  Flame,
  Star,
  Dumbbell,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Trophy
} from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function MyPlanPage() {
  const {
    todayPlan,
    savedWorkouts,
    isLoaded,
    removeFromTodayPlan,
    removeFromSaved,
    toggleMarkAsDone,
  } = usePlan();

  const [activeTab, setActiveTab] = useState("today"); // "today" | "saved"
  const [sortBy, setSortBy] = useState("duration"); // "duration" | "calories" | "rating"

  // Live Metrics Summary calculation for Today's Plan
  const metrics = useMemo(() => {
    const totalExercises = todayPlan.length;
    const totalMinutes = todayPlan.reduce((acc, curr) => acc + (Number(curr.duration) || 0), 0);
    const totalCalories = todayPlan.reduce((acc, curr) => acc + (Number(curr.caloriesBurned) || 0), 0);
    const completedCount = todayPlan.filter((curr) => curr.isDone).length;

    return { totalExercises, totalMinutes, totalCalories, completedCount };
  }, [todayPlan]);

  // Current active list
  const currentList = activeTab === "today" ? todayPlan : savedWorkouts;

  // Sorted list according to sortBy choice
  const sortedList = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") {
        return (Number(b.duration) || 0) - (Number(a.duration) || 0);
      }
      if (sortBy === "calories") {
        return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
      }
      if (sortBy === "rating") {
        return (Number(b.rating) || 0) - (Number(a.rating) || 0);
      }
      return 0;
    });
  }, [currentList, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col space-y-10">
      
      {/* Page Title & Subtitle */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2 text-brand-lime text-xs font-bold uppercase tracking-widest">
          <Trophy className="w-4 h-4" />
          <span>Active Session</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
          My Plan
        </h1>
        <p className="text-brand-muted text-sm sm:text-base max-w-xl">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics Summary Row (3 Stat Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Exercises Card */}
        <div className="p-5 rounded-xl bg-brand-card border border-brand-border flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
              Exercises
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-3xl sm:text-4xl font-bold text-white">
                {metrics.totalExercises}
              </span>
              <span className="text-xs text-brand-muted">/ 5 max</span>
            </div>
            {metrics.completedCount > 0 && (
              <p className="text-[11px] text-brand-lime font-medium">
                {metrics.completedCount} completed
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-lime">
            <Dumbbell className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        {/* Minutes Card */}
        <div className="p-5 rounded-xl bg-brand-card border border-brand-border flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
              Minutes
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-3xl sm:text-4xl font-bold text-white">
                {metrics.totalMinutes}
              </span>
              <span className="text-xs text-brand-muted">min total</span>
            </div>
            <p className="text-[11px] text-slate-400">Target daily exertion</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-blue-400">
            <Clock className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        {/* Calories Card */}
        <div className="p-5 rounded-xl bg-brand-card border border-brand-border flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
              Calories
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-3xl sm:text-4xl font-bold text-white">
                {metrics.totalCalories}
              </span>
              <span className="text-xs text-brand-muted">kcal burn</span>
            </div>
            <p className="text-[11px] text-amber-400 font-medium">Calculated expenditure</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-amber-400">
            <Flame className="w-6 h-6 stroke-[2]" />
          </div>
        </div>
      </div>

      {/* Controls Bar: Tabs & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/60">
        
        {/* Tabs: Today's Plan / Saved */}
        <div className="flex items-center gap-1 bg-brand-surface p-1 rounded-full border border-brand-border">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              activeTab === "today"
                ? "bg-brand-lime text-brand-dark shadow-sm"
                : "text-brand-muted hover:text-white"
            }`}
          >
            Today&apos;s Plan ({todayPlan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              activeTab === "saved"
                ? "bg-brand-lime text-brand-dark shadow-sm"
                : "text-brand-muted hover:text-white"
            }`}
          >
            Saved ({savedWorkouts.length})
          </button>
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-brand-muted uppercase font-semibold">Sort By:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-brand-surface border border-brand-border text-white text-xs font-semibold rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-brand-lime transition cursor-pointer"
            >
              <option value="duration">Duration (High to Low)</option>
              <option value="calories">Calories (High to Low)</option>
              <option value="rating">Rating (Highest)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-brand-muted absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Workout Cards List / Loading / Empty State */}
      {!isLoaded ? (
        <div className="py-24 flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-2 border-brand-lime border-t-transparent rounded-full animate-spin" />
          <p className="text-brand-muted text-sm font-medium">Loading workouts…</p>
        </div>
      ) : sortedList.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {sortedList.map((workout) => (
            <div
              key={workout.id}
              className={`p-4 sm:p-5 rounded-xl border transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                workout.isDone
                  ? "bg-brand-card/50 border-emerald-500/40 opacity-90"
                  : "bg-brand-card border-brand-border hover:border-brand-border/90"
              }`}
            >
              {/* Left Info with Thumbnail */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-brand-surface border border-brand-border shrink-0">
                  <img
                    src={workout.image || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=740&q=80"}
                    alt={workout.name}
                    className="w-full h-full object-cover"
                  />
                  {workout.isDone && (
                    <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-sm flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`font-heading text-lg sm:text-xl font-bold uppercase ${
                        workout.isDone ? "line-through text-slate-400" : "text-white"
                      }`}
                    >
                      {workout.name}
                    </h3>
                    {workout.isDone && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        Completed
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-brand-muted flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5 text-brand-lime" />
                    <span>{workout.equipment || "Standard Equipment"}</span>
                  </p>

                  {/* Stats Row */}
                  <div className="flex items-center gap-3 pt-1 text-xs text-slate-300 font-medium">
                    <span className="flex items-center gap-1 text-brand-muted">
                      <Clock className="w-3 h-3" /> {workout.duration} min
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Flame className="w-3 h-3" /> {workout.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1 text-brand-lime">
                      <Star className="w-3 h-3 fill-brand-lime" /> {workout.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-brand-border/60">
                {/* View Details Link */}
                <Link
                  href={`/workout/${workout.id}`}
                  className="px-3.5 py-1.5 rounded-lg bg-brand-surface border border-brand-border hover:border-slate-500 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                {/* Mark as Done button (for Today's Plan) */}
                {activeTab === "today" && (
                  <button
                    onClick={() => toggleMarkAsDone(workout.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                      workout.isDone
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
                        : "bg-brand-surface border border-brand-border hover:border-brand-lime text-slate-200 hover:text-white"
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{workout.isDone ? "Done" : "Mark Done"}</span>
                  </button>
                )}

                {/* Remove (X) Button */}
                <button
                  onClick={() =>
                    activeTab === "today"
                      ? removeFromTodayPlan(workout.id)
                      : removeFromSaved(workout.id)
                  }
                  className="p-1.5 rounded-lg bg-brand-surface border border-brand-border hover:border-red-500/60 text-brand-muted hover:text-red-400 transition"
                  title="Remove workout"
                  aria-label="Remove"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center flex flex-col items-center justify-center bg-brand-card/40 border border-dashed border-brand-border rounded-2xl p-8">
          <div className="w-16 h-16 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted mb-4">
            <Sparkles className="w-8 h-8 text-brand-lime" />
          </div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
            Nothing Here Yet
          </h2>
          <p className="text-sm text-brand-muted max-w-md mt-1 mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-lime hover:bg-brand-lime-dark text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(204,255,0,0.25)] hover:scale-105"
          >
            <span>Go to workouts</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      )}

    </div>
  );
}
