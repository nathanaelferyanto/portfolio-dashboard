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
  const badgeColors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    zinc: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  };

  return (
    <div className="group bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-6 relative overflow-hidden">
      {/* Decorative gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

      <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
        {imageUrl && (
          <div className="shrink-0 relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
            <Image
              src={imageUrl}
              alt={`${institution} logo`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 4rem, 5rem"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-2 w-full">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {institution}
            </h3>
            <div className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
              {location}
            </div>
          </div>
          <span
            className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-colors duration-300 ${badgeColors[badgeColor]} group-hover:shadow-sm`}
          >
            {duration}
          </span>
        </div>
      </div>
      <div className="relative z-10">
        <div
          className={`font-semibold text-lg sm:text-xl ${badgeColor === "blue" ? "text-blue-600 dark:text-blue-400" : ""}`}
        >
          {title}
        </div>
        <div className="font-medium text-zinc-700 dark:text-zinc-300 mt-1">
          {subtitle}
        </div>
      </div>

      {gpa && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-sm font-bold text-zinc-800 dark:text-zinc-200 border border-blue-100 dark:border-blue-900/30 relative z-10 group-hover:border-blue-200 dark:group-hover:border-blue-800/50 transition-colors">
          GPA: <span className="text-blue-600 dark:text-blue-400">{gpa}</span>
        </div>
      )}

      {Array.isArray(details) ? (
        <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10">
          {details.map((item, idx) => (
            <li key={idx} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10">
          {details}
        </div>
      )}
    </div>
  );
};
