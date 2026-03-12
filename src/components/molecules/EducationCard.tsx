"use client";

import React from "react";
import Image from "next/image";

export interface EducationCardProps {
  institution: string;
  location: string;
  duration: string;
  badgeColor?: "blue" | "zinc";
  title: string;
  subtitle: string;
  gpa?: string;
  details: React.ReactNode | string[];
  imageUrl?: string;
}

export const EducationCard = ({
  institution,
  location,
  duration,
  badgeColor = "zinc",
  title,
  subtitle,
  gpa,
  details,
  imageUrl,
}: EducationCardProps) => {
  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
      <div className="flex flex-col md:flex-row">

        {/* LEFT PANEL — institution branding */}
        <div className="md:w-72 lg:w-80 shrink-0 relative flex flex-col items-center justify-center gap-5 p-8 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-purple-50/40 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/20 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">

          {/* Decorative blurred circles */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-2xl pointer-events-none" />

          {imageUrl && (
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-700 shadow-md group-hover:scale-105 transition-transform duration-500">
              <Image
                src={imageUrl}
                alt={`${institution} logo`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 5rem, 6rem"
              />
            </div>
          )}

          <div className="text-center z-10">
            <h3 className="font-black text-xl text-zinc-900 dark:text-zinc-100 leading-tight">
              {institution}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
              {location}
            </p>
          </div>

          <span
            className={`z-10 text-xs font-bold px-4 py-1.5 rounded-full border ${
              badgeColor === "blue"
                ? "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800/50"
                : "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"
            }`}
          >
            {duration}
          </span>
        </div>

        {/* RIGHT PANEL — degree details */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center gap-5">

          {/* Degree & major */}
          <div>
            <div
              className={`font-black text-2xl md:text-3xl leading-tight ${
                badgeColor === "blue"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-zinc-800 dark:text-zinc-200"
              }`}
            >
              {title}
            </div>
            <div className="text-zinc-600 dark:text-zinc-300 font-medium text-lg mt-1">
              {subtitle}
            </div>
          </div>

          {/* GPA */}
          {gpa && (
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/40">
              <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">GPA</span>
              <span className="text-lg font-black text-blue-600 dark:text-blue-400">{gpa}</span>
            </div>
          )}

          {/* Details */}
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
            {Array.isArray(details) ? (
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {details.map((item, idx) => (
                  <li key={idx} className="pl-1">{item}</li>
                ))}
              </ul>
            ) : (
              <div className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {details}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
