import React from "react";
import Link from "next/link";
import { Dumbbell, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-20 h-20 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-lime shadow-xl mb-6">
        <Dumbbell className="w-10 h-10 stroke-[2]" />
      </div>

      <span className="font-mono text-sm font-bold text-brand-lime tracking-widest uppercase mb-2">
        404 — Page Not Found
      </span>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white max-w-md">
        This Lift Is Not On The Board
      </h1>

      <p className="text-brand-muted text-sm sm:text-base max-w-md mt-3 mb-8">
        The route you followed doesn&apos;t exist or has been relocated. Return to the main workout
        library and log your session.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-lime hover:bg-brand-lime-dark text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(204,255,0,0.25)] hover:scale-105"
        >
          <Home className="w-4 h-4 stroke-[2.5]" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/my-plan"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-surface border border-brand-border text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition"
        >
          <span>View My Plan</span>
        </Link>
      </div>
    </div>
  );
}
