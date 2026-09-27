import React from "react";
import Link from "next/link";
import { Clock, Flame, Star, Dumbbell } from "lucide-react";

export default function WorkoutCard({ workout }) {
  const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="group flex flex-col bg-brand-card hover:bg-[#20242c] border border-brand-border/80 hover:border-brand-lime/60 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
    >
      {/* Image container */}
      <div className="relative w-full h-48 sm:h-52 bg-brand-surface overflow-hidden">
        <img
          src={image || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=740&q=80"}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-90" />

        {/* Category tag pills */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {muscleGroups?.map((group, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 text-brand-lime shadow-sm"
            >
              {group}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Workout name */}
          <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white group-hover:text-brand-lime transition-colors line-clamp-1">
            {name}
          </h3>

          {/* Equipment line */}
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-brand-muted">
            <Dumbbell className="w-3.5 h-3.5 text-brand-lime/80 shrink-0" />
            <span className="truncate">{equipment || "Bodyweight"}</span>
          </div>
        </div>

        {/* Stats row with icons */}
        <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-1 font-medium" title="Duration">
            <Clock className="w-3.5 h-3.5 text-brand-muted" />
            <span>{duration} min</span>
          </div>

          <div className="flex items-center gap-1 font-medium" title="Calories">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-brand-lime" title="Rating">
            <Star className="w-3.5 h-3.5 fill-brand-lime" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
