"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pill } from "../atoms/Pill";
import GlassIcons from "../atoms/GlassIcons";
import { FiCpu, FiMessageCircle } from "react-icons/fi";
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

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"hard" | "soft">("hard");

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
    <section id="about" className="w-full relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Profile Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-sm lg:max-w-md relative aspect-square rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 shadow-2xl overflow-hidden backdrop-blur-3xl flex items-center justify-center group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/25">
                <div className="absolute inset-x-0 bottom-0 top-10 bg-zinc-900 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse group-hover:opacity-30 group-hover:bg-blue-600 transition-all duration-700"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-500/30 group-hover:scale-95 transition-all duration-500 z-20 pointer-events-none"></div>
                <div className="absolute inset-4 rounded-full border border-purple-500/0 group-hover:border-purple-500/20 group-hover:animate-[spin_4s_linear_reverse_infinite] transition-all duration-700 z-20 pointer-events-none"></div>

                <div className="absolute inset-2 md:inset-3 z-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src="/images/Personal Photo.jpeg"
                    alt="Personal Photo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: About Me Text */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-4">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  I specialize in developing scalable web applications using
                  JavaScript, TypeScript, React, Laravel, and Express.
                  Experienced in building RESTful APIs, integrating systems, and
                  implementing CI/CD pipelines.
                </p>
                <p
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  I am a Software Engineering graduate seeking opportunities to
                  further develop technical expertise and contribute to building
                  software solutions that support real business operations.
                </p>
                <p
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  Based in Bogor, Indonesia, I have a deep interest in modern
                  web development technologies and cloud infrastructure. I
                  approach problems with a growth mindset and am adaptable to
                  new tools and environments.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Side: Skills Box */}
          <div className="w-full">
            <div className="bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-10 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("hard")}
                    className={`flex items-center gap-2 px-4 py-2 font-bold rounded-lg transition-all ${
                      activeTab === "hard"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <FiCpu className="w-5 h-5" />
                    Hard Skills
                  </button>
                  <button
                    onClick={() => setActiveTab("soft")}
                    className={`flex items-center gap-2 px-4 py-2 font-bold rounded-lg transition-all ${
                      activeTab === "soft"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                        : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <FiMessageCircle className="w-5 h-5" />
                    Soft Skills
                  </button>
                </div>
                <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 px-4 hidden sm:block">
                  {activeTab === "hard"
                    ? "Technical Proficiencies"
                    : "Interpersonal Abilities"}
                </div>
              </div>

              <div className="min-h-[280px]">
                {activeTab === "hard" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <GlassIcons items={hardSkillsIcons} colorful={true} />
                  </div>
                )}
                {activeTab === "soft" && (
                  <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {softSkills.map((skill) => (
                      <div
                        key={skill}
                        className="hover:-translate-y-1 transition-transform duration-300"
                      >
                        <Pill variant="soft-skill">{skill}</Pill>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
