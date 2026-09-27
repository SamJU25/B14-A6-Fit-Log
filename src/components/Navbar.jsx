"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X, CalendarCheck, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { todayPlan, savedWorkouts } = usePlan();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isWorkoutActive = pathname === "/" || pathname.startsWith("/workout");
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border/60 bg-brand-dark/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-brand-lime flex items-center justify-center text-brand-dark font-black shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-transform group-hover:scale-105">
            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="font-heading text-2xl font-bold tracking-wider text-white">
            FIT<span className="text-brand-lime">LOG</span>
          </span>
        </Link>

        {/* Middle: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-brand-surface/80 p-1.5 rounded-full border border-brand-border/60">
          <Link
            href="/"
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
              isWorkoutActive
                ? "bg-white/10 text-brand-lime shadow-sm"
                : "text-brand-muted hover:text-white"
            }`}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
              isMyPlanActive
                ? "bg-white/10 text-brand-lime shadow-sm"
                : "text-brand-muted hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right: Badge Counters & Mobile Button */}
        <div className="flex items-center gap-3">
          {/* Plan badge = filled pill with accent background (e.g. #ccff00) */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime hover:bg-brand-lime-dark text-brand-dark font-bold text-xs uppercase tracking-wide transition-all shadow-[0_0_12px_rgba(204,255,0,0.25)] hover:scale-105"
            title="Today's Plan"
          >
            <CalendarCheck className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Plan</span>
            <span className="px-1.5 py-0.5 bg-black/20 rounded-full font-mono text-[11px]">
              {todayPlan.length}
            </span>
          </Link>

          {/* Saved badge = pill with outline/border only */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-border hover:border-brand-muted/80 bg-brand-surface/60 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wide transition-all"
            title="Saved Workouts"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Saved</span>
            <span className="px-1.5 py-0.5 bg-white/10 rounded-full font-mono text-[11px] text-brand-lime">
              {savedWorkouts.length}
            </span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-muted hover:text-white hover:bg-brand-surface transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-surface px-4 py-4 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
              isWorkoutActive ? "bg-brand-card text-brand-lime" : "text-brand-muted hover:text-white"
            }`}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
              isMyPlanActive ? "bg-brand-card text-brand-lime" : "text-brand-muted hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
}
