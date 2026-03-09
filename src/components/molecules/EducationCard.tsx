import React from "react";

export interface EducationCardProps {
  institution: string;
  location: string;
  duration: string;
  badgeColor?: "blue" | "zinc";
  title: string;
  subtitle: string;
  gpa?: string;
  details: React.ReactNode | string[];
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
}: EducationCardProps) => {
  const badgeColors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    zinc: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
      <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {institution}
          </h3>
          <div className="text-zinc-600 dark:text-zinc-400 text-sm">
            {location}
          </div>
        </div>
        <span
          className={`text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap ${badgeColors[badgeColor]}`}
        >
          {duration}
        </span>
      </div>
      <div>
        <div
          className={`font-semibold text-lg ${badgeColor === "blue" ? "text-blue-600 dark:text-blue-400" : ""}`}
        >
          {title}
        </div>
        <div className="font-medium text-zinc-700 dark:text-zinc-500">
          {subtitle}
        </div>
      </div>

      {gpa && (
        <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
          GPA: <span className="text-blue-600 dark:text-blue-400">{gpa}</span>
        </div>
      )}

      {Array.isArray(details) ? (
        <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          {details}
        </div>
      )}
    </div>
  );
};
