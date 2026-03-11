"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Pill } from "../atoms/Pill";
import { ProjectCardProps, techIcons } from "./ProjectCard";
import { FiCode } from "react-icons/fi";

interface ProjectModalProps {
  project: ProjectCardProps;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { title, description, images, image, tags, githubUrl, demoUrl } =
    project;
  const displayImages = images?.length ? images : image ? [image] : [];
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentImageIdx(
      (prev) => (prev - 1 + displayImages.length) % displayImages.length,
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Left Side: Image Carousel */}
        <div className="relative w-full md:w-3/5 aspect-video md:aspect-auto bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden min-h-[300px]">
          {displayImages.length > 0 ? (
            <>
              <Image
                src={displayImages[currentImageIdx]}
                alt={`${title} screenshot ${currentImageIdx + 1}`}
                fill
                className="object-contain bg-black/10 dark:bg-black/40"
              />
              {displayImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {displayImages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIdx ? "bg-white" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <span className="text-zinc-400 dark:text-zinc-600 font-medium">
                No Image Available
              </span>
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 pr-8 text-black dark:text-white">
            {title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => {
              const Icon = techIcons[tag] || FiCode;
              return (
                <Pill key={tag} variant="tech">
                  <span className="flex items-center gap-1.5 shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tag}</span>
                  </span>
                </Pill>
              );
            })}
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed whitespace-pre-wrap">
            {description}
          </p>

          <div className="mt-auto flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white rounded-lg transition-colors font-medium text-sm"
              >
                <FiGithub className="w-4 h-4" /> Source Code
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
              >
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
