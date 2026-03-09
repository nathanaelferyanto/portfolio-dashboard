import React from "react";

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-2">
      {children}
    </div>
  );
};
