import React from "react";
import { Pill } from "../atoms/Pill";
import { SectionHeading } from "../molecules/SectionHeading";
import GlassIcons from "../atoms/GlassIcons";

// React Icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiDocker,
  SiGithubactions,
  SiFigma,
} from "react-icons/si";

export const SkillsSection = () => {
  const hardSkillsIcons = [
    { icon: <SiJavascript />, color: "yellow", label: "JavaScript" },
    { icon: <SiTypescript />, color: "blue", label: "TypeScript" },
    { icon: <SiReact />, color: "sky", label: "React" },
    { icon: <SiLaravel />, color: "red", label: "Laravel" },
    { icon: <SiExpress />, color: "gray", label: "Express.js" },
    { icon: <SiMysql />, color: "orange", label: "MySQL" },
    { icon: <SiHtml5 />, color: "orange", label: "HTML" },
    { icon: <SiCss />, color: "blue", label: "CSS" },
    { icon: <SiTailwindcss />, color: "teal", label: "TailwindCSS" },
    { icon: <SiDocker />, color: "blue", label: "Docker" },
    { icon: <SiGithubactions />, color: "indigo", label: "GitHub Actions" },
    { icon: <SiFigma />, color: "pink", label: "Figma" },
  ];

  const softSkills = [
    "Growth mindset",
    "Critical thinking",
    "Problem solving",
    "Adaptability",
    "Professional communication",
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16"
    >
      <SectionHeading title="Technical Arsenal & Skills" alignment="center" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Hard Skills
          </h3>
          <div className="pt-2 pb-8">
            <GlassIcons items={hardSkillsIcons} colorful={true} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {softSkills.map((skill) => (
              <Pill key={skill} variant="soft-skill">
                {skill}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
