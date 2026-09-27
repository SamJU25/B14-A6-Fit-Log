"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarCheck,
  Bookmark,
  CheckCircle,
  Clock,
  Flame,
  Star,
  Dumbbell,
  Layers,
  Repeat,
  Gauge,
  ListOrdered
} from "lucide-react";
import { fetchWorkoutById } from "@/lib/api";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const { addToTodayPlan, saveForLater, todayPlan, savedWorkouts } = usePlan();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkout() {
      if (!id) return;
      setLoading(true);
      try {
        const data = await fetchWorkoutById(id);
        setWorkout(data);
      } catch (err) {
        console.error("Error loading workout:", err);
      } finally {
        setLoading(false);
      }
    }
    loadWorkout();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full animate-pulse">
        <div className="h-6 w-32 bg-brand-surface rounded mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 h-96 bg-brand-surface rounded-2xl" />
          <div className="lg:col-span-7 space-y-6">
            <div className="h-10 w-3/4 bg-brand-surface rounded" />
            <div className="h-4 w-full bg-brand-surface rounded" />
            <div className="h-40 bg-brand-surface rounded-xl" />
            <div className="h-12 w-1/2 bg-brand-surface rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center flex flex-col items-center">
        <Dumbbell className="w-16 h-16 text-brand-muted/40 mb-4" />
        <h2 className="font-heading text-3xl font-bold uppercase text-white">Workout Not Found</h2>
        <p className="text-brand-muted text-sm mt-2 mb-6">
          The requested lift does not exist in our library.
        </p>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-brand-lime text-brand-dark font-bold text-xs uppercase tracking-wider"
        >
          Return to Library
        </Link>
      </div>
    );
  }

  const isAlreadyInPlan = todayPlan.some((item) => String(item.id) === String(workout.id));
  const isAlreadySaved = savedWorkouts.some((item) => String(item.id) === String(workout.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-muted hover:text-brand-lime transition mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Workouts</span>
      </Link>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Side: Visual / Media */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-surface shadow-2xl">
            <img
              src={workout.image || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=740&q=80"}
              alt={workout.name}
              className="w-full h-80 sm:h-[420px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card/90 via-transparent to-transparent opacity-60" />
            
            {/* Category tag pills */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/10 text-brand-lime shadow-md"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Difficulty Badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-surface/90 border border-brand-border text-slate-200 backdrop-blur-md">
              Level: <span className="text-brand-lime">{workout.difficulty || "All Levels"}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Header & Subtitle */}
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              {workout.name}
            </h1>
            <p className="mt-3 text-base text-brand-muted leading-relaxed">
              {workout.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1 border-y border-brand-border/60 py-5">
            {/* Primary Button: Add to today's plan */}
            <button
              onClick={() => addToTodayPlan(workout)}
              disabled={isAlreadyInPlan || (todayPlan.length >= 5 && !isAlreadyInPlan)}
              className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md ${
                isAlreadyInPlan
                  ? "bg-brand-surface border border-brand-lime text-brand-lime cursor-default"
                  : todayPlan.length >= 5
                  ? "bg-brand-surface border border-brand-border text-brand-muted opacity-60 cursor-not-allowed"
                  : "bg-brand-lime hover:bg-brand-lime-dark text-brand-dark shadow-[0_0_15px_rgba(204,255,0,0.25)] hover:scale-105 active:scale-95"
              }`}
            >
              {isAlreadyInPlan ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>In Today&apos;s Plan</span>
                </>
              ) : todayPlan.length >= 5 ? (
                <>
                  <CalendarCheck className="w-4 h-4 stroke-[2.5]" />
                  <span>Plan Full (5 Max)</span>
                </>
              ) : (
                <>
                  <CalendarCheck className="w-4 h-4 stroke-[2.5]" />
                  <span>Add to today&apos;s plan</span>
                </>
              )}
            </button>

            {/* Secondary Button: Save for later */}
            <button
              onClick={() => saveForLater(workout)}
              className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider border transition-all ${
                isAlreadySaved
                  ? "bg-brand-surface border-brand-lime text-brand-lime"
                  : "bg-brand-surface border-brand-border hover:border-brand-muted text-slate-200 hover:text-white"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isAlreadySaved ? "fill-brand-lime" : ""}`} />
              <span>{isAlreadySaved ? "Saved" : "Save for later"}</span>
            </button>
          </div>

          {/* Key Specs Table/Panel */}
          <div className="bg-brand-card border border-brand-border rounded-xl p-5 sm:p-6 shadow-sm">
            <h2 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-brand-lime" />
              <span>Key Specifications</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-xs">
              <div className="space-y-1">
                <span className="text-brand-muted uppercase tracking-wider font-semibold">Equipment</span>
                <p className="font-bold text-white text-sm">{workout.equipment || "None"}</p>
              </div>

              <div className="space-y-1">
                <span className="text-brand-muted uppercase tracking-wider font-semibold">Difficulty</span>
                <p className="font-bold text-brand-lime text-sm">{workout.difficulty || "Intermediate"}</p>
              </div>

              <div className="space-y-1">
                <span className="text-brand-muted uppercase tracking-wider font-semibold">Sets</span>
                <p className="font-bold text-white text-sm">{workout.sets || "3-4"}</p>
              </div>

              <div className="space-y-1">
                <span className="text-brand-muted uppercase tracking-wider font-semibold">Reps</span>
                <p className="font-bold text-white text-sm">{workout.reps || "8-12"}</p>
              </div>

              <div className="space-y-1">
                <span className="text-brand-muted uppercase tracking-wider font-semibold">Duration</span>
                <p className="font-bold text-white text-sm">{workout.duration} min</p>
              </div>

              <div className="space-y-1">
                <span className="text-brand-muted uppercase tracking-wider font-semibold">Calories</span>
                <p className="font-bold text-amber-400 text-sm">{workout.caloriesBurned} kcal</p>
              </div>

              <div className="space-y-1">
                <span className="text-brand-muted uppercase tracking-wider font-semibold">Rating</span>
                <p className="font-bold text-brand-lime text-sm flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-brand-lime" />
                  <span>{workout.rating} / 5.0</span>
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-brand-card border border-brand-border rounded-xl p-5 sm:p-6 shadow-sm">
            <h2 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <ListOrdered className="w-4 h-4 text-brand-lime" />
              <span>Instructions</span>
            </h2>

            <ol className="space-y-3.5">
              {workout.instructions?.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-sm text-slate-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-surface border border-brand-border text-brand-lime font-mono font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}
