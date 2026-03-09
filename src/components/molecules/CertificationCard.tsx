import React from "react";

export interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
}

export const CertificationCard = ({
  title,
  issuer,
  date,
}: CertificationCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1 hover:border-blue-500 transition-colors">
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="text-zinc-600 dark:text-zinc-400 flex justify-between items-center">
        <span>{issuer}</span>
        <span className="text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
          {date}
        </span>
      </div>
    </div>
  );
};
