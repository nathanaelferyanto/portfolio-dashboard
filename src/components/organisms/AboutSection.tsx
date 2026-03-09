import React from "react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-zinc-50 dark:bg-zinc-900/50 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
            About Me
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            I specialize in developing scalable web applications using
            JavaScript, TypeScript, React, Laravel, and Express. Experienced in
            building RESTful APIs, integrating systems, and implementing CI/CD
            pipelines.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            I am a Software Engineering graduate seeking opportunities to
            further develop technical expertise and contribute to building
            software solutions that support real business operations.
          </p>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Based in Bogor, Indonesia, I have a deep interest in modern web
            development technologies and cloud infrastructure. I approach
            problems with a growth mindset and am adaptable to new tools and
            environments.
          </p>
        </div>
      </div>
    </section>
  );
};
