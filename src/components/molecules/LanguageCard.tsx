import React from "react";

interface LanguageCardProps {
  language: string;
  proficiency: string;
}

export const LanguageCard = ({ language, proficiency }: LanguageCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <div className="font-bold">{language}</div>
      <div className="text-sm text-zinc-500 mt-1">{proficiency}</div>
    </div>
  );
};
