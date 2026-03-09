import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export const Button = ({
  href,
  variant = "primary",
  children,
}: ButtonProps) => {
  const baseClasses =
    "px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg shadow-black/10 dark:shadow-white/10",
    outline:
      "border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};
