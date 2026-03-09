import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Pill } from "../atoms/Pill";

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Project Image Placeholder / Actual Image */}
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        {image ? (
          <Image
            src={image}
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

        {/* Overlay Links on Hover (Desktop) */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4 backdrop-blur-sm">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
              aria-label="View Source Code"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
              aria-label="View Live Demo"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Pill key={tag} variant="tech">
              {tag}
            </Pill>
          ))}
        </div>

        {/* Mobile Links (Always visible on small screens) */}
        <div className="md:hidden flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            >
              <FiGithub className="w-4 h-4" /> Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <FiExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
