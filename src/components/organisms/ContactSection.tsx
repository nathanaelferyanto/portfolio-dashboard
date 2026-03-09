import React from "react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-blue-600 dark:bg-blue-900 py-24 md:py-32 text-center space-y-8"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
          Let's Build Something Great
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
          Seeking opportunities to further develop technical expertise and
          contribute to building robust software solutions. My inbox is always
          open.
        </p>
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:nathanaelferyanto@gmail.com"
            className="px-10 py-4 text-lg rounded-full bg-white text-blue-700 font-bold tracking-wide hover:bg-zinc-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-blue-800/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/nathanaeljferyanto"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-lg rounded-full border border-blue-400 text-white font-bold tracking-wide hover:bg-blue-700 dark:hover:bg-blue-800 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            LinkedIn Profile
          </a>
        </div>
        <p className="text-blue-200 mt-8 text-sm">
          Bogor, Indonesia • +62 895 6131 62019
        </p>
      </div>
    </section>
  );
};
