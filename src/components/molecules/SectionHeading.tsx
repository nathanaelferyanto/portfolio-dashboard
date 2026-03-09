import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export const SectionHeading = ({
  title,
  subtitle,
  alignment = "left",
}: SectionHeadingProps) => {
  return (
    <div className={`space-y-4 ${alignment === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
};
