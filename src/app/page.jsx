"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, Search, Dumbbell, Zap, Flame, ShieldCheck } from "lucide-react";
import WorkoutCard from "@/components/WorkoutCard";
import { fetchAllWorkouts } from "@/lib/api";

const CATEGORIES = ["All", "Chest", "Back", "Legs", "Arms", "Core", "Shoulders"];

export default function HomePage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await fetchAllWorkouts();
        setWorkouts(data);
      } catch (err) {
        console.error("Failed to load workouts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filtered list based on search and category
  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch =
      workout.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workout.equipment?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workout.muscleGroups?.some((mg) => mg.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" ||
      workout.muscleGroups?.some((mg) => mg.toLowerCase() === selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero / Banner Section */}
      <section className="relative overflow-hidden border-b border-brand-border/60 bg-gradient-to-b from-brand-surface/40 to-brand-dark py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-lime text-xs font-bold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Workout Library</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08]">
              Train With Intent. <br />
              <span className="text-brand-lime">Log Every Set.</span>
            </h1>

            <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s
              plan, and watch the week&apos;s work add up.
            </p>

            <div className="pt-2">
              <a
                href="#library"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-lime hover:bg-brand-lime-dark text-brand-dark font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-105 active:scale-95"
              >
                <span>Browse Workouts</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs text-brand-muted">
              <span className="flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-brand-lime" /> Compound & Isolation
              </span>
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" /> Live Metric Tracking
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Strict Form Protocols
              </span>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-brand-border bg-brand-surface shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Athlete training with barbell"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card/90 via-brand-card/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-dark/80 backdrop-blur-md border border-brand-border/60">
                <div className="flex items-center justify-between text-xs text-brand-muted uppercase tracking-wider">
                  <span>Daily Lift Protocol</span>
                  <span className="text-brand-lime font-bold">5 Lift Max</span>
                </div>
                <p className="mt-1 font-heading text-lg font-bold text-white uppercase">
                  Quality over volume. Every single rep counts.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. The Library Section */}
      <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-brand-border/60">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              The Library
            </h2>
            <p className="text-sm sm:text-base text-brand-muted mt-1">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
            <input
              type="text"
              placeholder="Search lifts or muscles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-brand-surface border border-brand-border rounded-full text-sm text-white placeholder-brand-muted/70 focus:outline-none focus:border-brand-lime transition"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition shrink-0 ${
                selectedCategory === cat
                  ? "bg-brand-lime text-brand-dark shadow-sm"
                  : "bg-brand-surface border border-brand-border text-brand-muted hover:text-white hover:border-slate-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Workouts Grid / Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-brand-card border border-brand-border rounded-xl p-4 animate-pulse flex flex-col space-y-4"
              >
                <div className="h-44 bg-brand-surface rounded-lg w-full" />
                <div className="h-5 bg-brand-surface rounded w-3/4" />
                <div className="h-4 bg-brand-surface rounded w-1/2" />
                <div className="h-6 bg-brand-surface rounded w-full mt-4" />
              </div>
            ))}
          </div>
        ) : filteredWorkouts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
            {filteredWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <Dumbbell className="w-12 h-12 text-brand-muted/50 mb-3" />
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              No Workouts Found
            </h3>
            <p className="text-sm text-brand-muted max-w-sm mt-1">
              Try adjusting your search query or selecting a different muscle group filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-brand-surface border border-brand-border text-xs font-semibold text-brand-lime hover:bg-brand-card transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
