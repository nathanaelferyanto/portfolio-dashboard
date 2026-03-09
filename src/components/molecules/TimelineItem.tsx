import React from "react";
import { Pill } from "../atoms/Pill";

export interface TimelineItemProps {
  duration: string;
  location: string;
  role: string;
  company: string;
  responsibilities: string[];
  techStack: string[];
  isLatest?: boolean;
}

export const TimelineItem = ({
  duration,
  location,
  role,
  company,
  responsibilities,
  techStack,
  isLatest = false,
}: TimelineItemProps) => {
  const pinColorBase = isLatest
    ? "bg-blue-500"
    : "bg-zinc-300 dark:bg-zinc-700";
  const textColorBase = isLatest
    ? "text-blue-600 dark:text-blue-400"
    : "text-zinc-700 dark:text-zinc-300";

  return (
    <div className="relative pl-8 md:pl-0">
      <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>

      <div className="md:flex gap-8 relative">
        <div className="md:w-1/4 pb-4 md:pb-0 z-10 flex flex-col items-start md:items-end md:text-right">
          <div
            className={`absolute left-0 w-3 h-3 rounded-full ${pinColorBase} top-2 md:hidden -ml-[5px]`}
          ></div>
          <div
            className={`hidden md:block absolute left-1/4 w-3 h-3 rounded-full ${pinColorBase} top-2 -ml-[5px] ring-4 ring-white dark:ring-black`}
          ></div>
          <span className={`text-sm font-bold ${textColorBase}`}>
            {duration}
          </span>
          <span className="text-sm font-medium text-zinc-500 mt-1">
            {location}
          </span>
        </div>
        <div className="md:w-3/4 space-y-4">
          <div>
            <h3 className="text-2xl font-bold">{role}</h3>
            <div className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
              {company}
            </div>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <Pill key={tech} variant="tech">
                  {tech}
                </Pill>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
