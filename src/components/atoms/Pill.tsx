import React from "react";

interface PillProps {
  children: React.ReactNode;
  variant?: "tech" | "general" | "soft-skill";
}

export const Pill = ({ children, variant = "tech" }: PillProps) => {
  const baseClasses =
    "font-medium transition-all cursor-default text-center inline-block";

  const variants = {
    tech: "px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700",
    "soft-skill":
      "px-5 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700",
    general:
      "px-5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`}>{children}</span>
  );
};
