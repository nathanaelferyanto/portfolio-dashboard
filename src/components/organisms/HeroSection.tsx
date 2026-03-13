"use client";
import React from "react";
import TextType from "@/components/TextType";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 flex flex-col items-center justify-center gap-12"
    >
      <motion.div
        className="w-full max-w-4xl mx-auto space-y-10 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-8xl font-black tracking-tighter leading-tight flex flex-col pb-2"
          variants={itemVariants}
        >
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
        </motion.h1>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center pt-4"
          variants={itemVariants}
        >
          <Button href="#experience" variant="primary">
            View Experience
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
