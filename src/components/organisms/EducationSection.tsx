"use client";
import React from "react";
import { EducationCard } from "../molecules/EducationCard";
import { CertificationCard } from "../molecules/CertificationCard";
import { LanguageCard } from "../molecules/LanguageCard";
import { motion } from "framer-motion";

export const EducationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="education"
      className="w-full bg-zinc-50 dark:bg-zinc-900/50 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* ── Education ── */}
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              Academic
            </p>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
              Education
            </h2>
          </motion.div>

          {/* Full-width card */}
          <motion.div variants={itemVariants}>
            <EducationCard
              institution="IPB University"
              location="Bogor, Indonesia"
              duration="Aug 2021 - Aug 2025"
              badgeColor="blue"
              title="Bachelor of Applied Science"
              subtitle="Software Engineering Technology"
              gpa="3.68/4.00"
              imageUrl="/images/SV Logo.png"
              details={
                <>
                  <strong className="text-zinc-900 dark:text-zinc-100">
                    Final Project:
                  </strong>
                  Development of an Investor Management Module for Batch-Based
                  Investment in the Sukaharja Quail Business Investment
                  Application
                </>
              }
            />
          </motion.div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              Professional
            </p>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
              Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <CertificationCard
                title="Software Engineer Competency Certification"
                issuer="BNSP"
                date="Valid: Sep 2025 - Sep 2028"
                imageUrl="/images/Serifikasi_Software Engineering_Nathanael Jonathan Feryanto_page-0001.jpg"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CertificationCard
                title="Cloud Computing Program Certificate"
                issuer="Bangkit Academy"
                date="Jan 2024"
                imageUrl={[
                  "/images/Bangkit Certificate 1.png",
                  "/images/Bangkit Certificate 2.png",
                ]}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CertificationCard
                title="Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud"
                issuer="Dicoding"
                date="2023"
                imageUrl={[
                  "/images/Dicoding Academy Certificate_page-0001.jpg",
                  "/images/Dicoding Academy Certificate_page-0002.jpg",
                ]}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CertificationCard
                title="English for Business Communication"
                issuer="The British Institute"
                date="Nov 2023"
                imageUrl="/images/bangkit nov 8_1799_page-0001.jpg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Languages ── */}
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              Communication
            </p>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
              Languages
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <motion.div variants={itemVariants}>
              <LanguageCard language="Indonesian" proficiency="Native" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <LanguageCard language="English" proficiency="Conversational" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
