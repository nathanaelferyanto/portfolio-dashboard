"use client";
import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiCode, FiBarChart2 } from "react-icons/fi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiLaravel,
  SiMysql,
  SiExpress,
  SiPostgresql,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiFigma,
  SiPostman,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";

export const techIcons: Record<string, React.ElementType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  React: SiReact,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Recharts: FiBarChart2,
  "Node.js": SiNodedotjs,
  HTML: SiHtml5,
  CSS: SiCss,
  Javascript: SiJavascript,
  Bootstrap: SiBootstrap,
  Github: SiGithub,
  Figma: SiFigma,
  NodeJS: SiNodedotjs,
  Tailwind: SiTailwindcss,
  Postman: SiPostman,
  Docker: SiDocker,
  "Github Actions": SiGithubactions,
  Typescript: SiTypescript,
};

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  title,
  description,
  image,
  images,
  tags,
  githubUrl,
  demoUrl,
  onClick,
}: ProjectCardProps) => {
  const displayImage = images?.[0] || image;
  return (
    <div
      className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {/* Project Image Placeholder / Actual Image */}
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        {displayImage ? (
          <Image
            src={displayImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5">
            <span className="text-zinc-400 dark:text-zinc-600 font-medium">
              Image Preview
            </span>
          </div>
        )}

        {/* Overlay Links Removed to prevent blur. Full card is now clickable */}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map((tag) => {
            const Icon = techIcons[tag] || FiCode;
            return (
              <div
                key={tag}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title={tag}
              >
                <Icon className="w-4 h-4" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
