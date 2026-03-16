"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative group flex items-center justify-center p-2.5 sm:p-3 rounded-full transition-all duration-300 bg-white dark:bg-zinc-800 text-amber-500 hover:text-amber-600 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-amber-50 dark:hover:bg-blue-900/30 hover:scale-110 shadow-sm border border-zinc-200 dark:border-zinc-700"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}

      {/* Tooltip Hover Indicator */}
      <div className="absolute left-full ml-4 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-0 -translate-y-1 transition-all whitespace-nowrap hidden md:block shadow-xl">
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-black dark:border-r-white"></div>
        {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
      </div>
    </button>
  );
};
