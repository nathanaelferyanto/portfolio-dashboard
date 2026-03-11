import React from "react";
import TextType from "@/components/TextType";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 flex flex-col items-center justify-center gap-12"
    >
      <div className="w-full max-w-4xl mx-auto space-y-10 animate-fade-in-up text-center flex flex-col items-center">
        <Badge>Software Engineering Graduate</Badge>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight flex flex-col pb-2">
          <span className="mb-4">
            Hi, I'm <span className="text-blue-500">Nathanael</span>.
          </span>
          <TextType
            as="span"
            className="text-zinc-800 dark:text-zinc-200"
            text={[
              "Web Developer.",
              "Software Engineer.",
              "Tech Enthusiast.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorClassName="text-blue-500"
          />
        </h1>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button href="#experience" variant="primary">
            View Experience
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
