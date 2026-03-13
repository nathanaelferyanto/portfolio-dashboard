"use client";
import React from "react";
import Image from "next/image";
import { Pill } from "../atoms/Pill";
import GlassIcons from "../atoms/GlassIcons";
import { FiCpu, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";
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
    { label: "Growth Mindset", emoji: "🚀" },
    { label: "Critical Thinking", emoji: "🧠" },
    { label: "Problem Solving", emoji: "🔍" },
    { label: "Adaptability", emoji: "🔄" },
    { label: "Professional Communication", emoji: "💬" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section id="about" className="w-full relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-24">
          {/* Top: Profile + Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Profile Photo */}
            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
            </motion.div>

            {/* Right Side: About Me Text */}
            <div className="lg:col-span-7 space-y-8">
              <motion.h2 
                className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Software Engineering graduate with experience in developing
                  web applications using JavaScript, TypeScript, React, Laravel,
                  and Express. Experienced in building RESTful APIs, integrating
                  systems, and implementing CI/CD pipelines with Docker and
                  GitHub Actions. Seeking opportunities to further develop
                  technical expertise and contribute to building software
                  solutions that support real business operations.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Bottom: Skills — Hard & Soft side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Hard Skills */}
            <motion.div 
              className="bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-lg hover:border-blue-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
                  <FiCpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    Hard Skills
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Technical Proficiencies
                  </p>
                </div>
                <span className="ml-auto text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full">
                  {hardSkillsIcons.length} skills
                </span>
              </div>

              {/* Icons Grid */}
              <GlassIcons items={hardSkillsIcons} colorful={true} />
            </motion.div>

            {/* Soft Skills */}
            <motion.div 
              className="bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-lg hover:border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-500/30">
                  <FiMessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    Soft Skills
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Interpersonal Abilities
                  </p>
                </div>
                <span className="ml-auto text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 px-2.5 py-1 rounded-full">
                  {softSkills.length} skills
                </span>
              </div>

              {/* Soft Skill Cards */}
              <motion.div 
                className="flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill.label}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-700/50 hover:border-purple-400/50 dark:hover:border-purple-500/40 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all duration-300 hover:-translate-y-0.5 group"
                    variants={itemVariants}
                  >
                    <span className="text-2xl select-none group-hover:scale-110 transition-transform duration-300">
                      {skill.emoji}
                    </span>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm">
                      {skill.label}
                    </span>
                    <span className="ml-auto w-2 h-2 rounded-full bg-purple-400/60 dark:bg-purple-500/60 group-hover:bg-purple-500 dark:group-hover:bg-purple-400 transition-colors duration-300"></span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
