"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

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

  const positions = [
    "Software Engineer",
    "Tech Enthusiast",
    "Web Development"
  ];

  // Tripled to ensure smooth infinite scroll on larger screens
  const marqueeItems = [...positions, ...positions, ...positions];

  return (
    <section
      id="home"
      className="w-full relative py-24 md:py-40 flex flex-col items-center justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/20 dark:bg-blue-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[40%] left-[45%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-purple-500/20 dark:bg-purple-600/10 blur-[80px] rounded-full z-0 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-12 z-10 relative">
        <motion.div
          className="w-full max-w-5xl mx-auto space-y-10 md:space-y-12 text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight flex flex-col"
            variants={itemVariants}
          >
            <span>
              Hi, I'm <span className="text-blue-600 dark:text-blue-500 drop-shadow-sm">Nathanael</span>.
            </span>
          </motion.h1>

          {/* Transparent Pill Marquee (Enlarged and Faster for Mobile) */}
          <motion.div 
            className="w-full sm:w-[95%] max-w-[100vw] sm:max-w-[700px] md:max-w-[850px] overflow-hidden py-3.5 sm:py-4 md:py-6 flex items-center relative mt-4 md:mt-8 bg-transparent"
            variants={itemVariants}
          >
            <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex items-center">
              <motion.div
                className="flex whitespace-nowrap items-center w-max"
                animate={{ x: ["0%", "-33.333333%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 15, // Sped up for mobile legibility
                }}
              >
                {marqueeItems.map((title, index) => (
                  <React.Fragment key={index}>
                    <span className="text-base sm:text-2xl md:text-3xl font-black tracking-wide md:tracking-wider uppercase text-zinc-800 dark:text-zinc-100 px-5 sm:px-8 md:px-12">
                      {title}
                    </span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]"></span>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-20 cursor-pointer group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Scroll Down</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           className="p-2 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors border border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800/50"
        >
          <FiChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
};
