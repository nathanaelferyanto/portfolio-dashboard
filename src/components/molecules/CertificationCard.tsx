import React from "react";
import Image from "next/image";

export interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
}

export const CertificationCard = ({
  title,
  issuer,
  date,
  imageUrl,
}: CertificationCardProps) => {
  return (
    <div className="group bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-5 hover:border-blue-500/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10 transition-colors pointer-events-none" />

      {imageUrl && (
        <div className="shrink-0 relative w-14 h-14 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-500 z-10 shadow-sm">
          <Image
            src={imageUrl}
            alt={`${title} certificate`}
            fill
            className="object-cover"
            sizes="3.5rem"
          />
        </div>
      )}

      <div className="flex flex-col gap-1.5 flex-1 relative z-10">
        <h3 className="font-bold text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <span className="text-sm font-medium">{issuer}</span>
          <span className="text-xs font-bold bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 px-2.5 py-1 rounded-md whitespace-nowrap group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors self-start sm:self-auto">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};
