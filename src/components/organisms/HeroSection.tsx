import React from "react";
import TextType from "@/components/TextType";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div className="flex-1 space-y-8 animate-fade-in-up">
        <Badge>Software Engineering Graduate</Badge>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight flex flex-col pb-2">
          <span className="mb-2">
            Hi, I'm <span className="text-blue-500">Nathanael</span>.
          </span>
          <TextType
            as="span"
            className="text-zinc-800 dark:text-zinc-200"
            text={[
              "Web Developer.",
              "Software Engineer.",
              "Frontend Enthusiast.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorClassName="text-blue-500"
          />
        </h1>
        <div className="flex flex-wrap gap-4">
          <Button href="#experience" variant="primary">
            View Experience
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
      <div className="flex-1 w-full max-w-md relative aspect-square rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 shadow-2xl overflow-hidden backdrop-blur-3xl flex items-center justify-center">
        <div className="absolute inset-x-0 bottom-0 top-10 bg-zinc-900 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse"></div>
        <div className="relative z-10 text-center space-y-2">
          <div className="text-7xl font-bold opacity-30 select-none">NJF</div>
          <div className="text-sm font-medium opacity-50 uppercase tracking-widest">
            Profile Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};
