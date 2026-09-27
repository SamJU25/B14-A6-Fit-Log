import React from "react";
import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand-border/60 bg-brand-dark py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand logo icon + FITLOG */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-brand-lime flex items-center justify-center text-brand-dark font-black">
            <Dumbbell className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-heading text-xl font-bold tracking-wider text-white">
            FIT<span className="text-brand-lime">LOG</span>
          </span>
        </Link>

        {/* Right: Copyright notice */}
        <p className="text-xs text-brand-muted text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
