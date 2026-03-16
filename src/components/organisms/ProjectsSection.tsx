"use client";
import React, { useState } from "react";
import { SectionHeading } from "../molecules/SectionHeading";
import { ProjectCard, ProjectCardProps } from "../molecules/ProjectCard";
import { ProjectModal } from "../molecules/ProjectModal";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardProps | null>(null);

  const projects = [
    {
      title: "Quail Farm Inventory Management",
      description:
        "Dashboard application to monitor daily, monthly, and yearly quail egg production and population data, featuring interactive charts and reporting tools. Provided management with daily performance insights.",
      tags: [
        "MySQL",
        "HTML",
        "CSS",
        "Typescript",
        "React",
        "Tailwind",
        "Docker",
        "Github Actions",
      ],
      images: [
        "/images/Farm Inventory Management/Populasi Puyuh.png",
        "/images/Farm Inventory Management/Performa Bertelur.png",
        "/images/Farm Inventory Management/Stock Inv.png",
      ],
    },
    {
      title: "Company Expenses Management",
      description:
        "A comprehensive web-based platform for handling cash requests, reimbursements, and multi-level approval workflows within the company.",
      tags: [
        "MySQL",
        "HTML",
        "CSS",
        "Typescript",
        "React",
        "Tailwind",
        "Docker",
        "Github Actions",
      ],
      images: [
        "/images/Company Expenses Management/Bon Sementara.png",
        "/images/Company Expenses Management/Approval BKK.png",
      ],
    },
    {
      title: "Company Sales Management",
      description:
        "A sales management system built to handle sales orders, delivery records, invoice generation, and product returns for internal distribution workflows.",
      tags: [
        "MySQL",
        "HTML",
        "CSS",
        "Typescript",
        "React",
        "Tailwind",
        "Docker",
        "Github Actions",
      ],
      images: [
        "/images/Company Sales Management/Dashboard.png",
        "/images/Company Sales Management/Sales Order.png",
        "/images/Company Sales Management/Delivery Order.png",
      ],
    },
    {
      title: "Sukaquail Profile Website",
      description:
        "A dynamic profile website developed as a Content Management System (CMS), allowing administrators to effortlessly make changes to the content on the website independently.",
      tags: [
        "Figma",
        "MySQL",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Tailwind",
        "Express",
        "NodeJS",
      ],
      images: [
        "/images/Sukaquail Profile Website/Homepage 1.png",
        "/images/Sukaquail Profile Website/Product Section.png",
        "/images/Sukaquail Profile Website/Article List.png",
        "/images/Sukaquail Profile Website/Farm Location.png",
      ],
    },
    {
      title: "Quail Investment Management",
      description:
        "An investment management platform developed to facilitate batch-based livestock investments. It allows investors to browse available investment batches, register themselves, and join. Features include investor account management, dedicated history dashboard, and administrative tools for bulk data imports. This system was developed as my final college project.",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "Figma",
        "NodeJS",
        "React",
        "MySQL",
        "Express",
        "Tailwind",
        "Postman",
      ],
      images: [
        "/images/Quail Investment Management/Homepage.png",
        "/images/Quail Investment Management/Pendaftaran Akun.png",
        "/images/Quail Investment Management/List Investasi.png",
        "/images/Quail Investment Management/List Investasi 2.png",
        "/images/Quail Investment Management/Dashboard Investor.png",
        "/images/Quail Investment Management/Dashboard Admin.png",
      ],
    },
    {
      title: "SNI Award Website",
      description:
        "A comprehensive platform for the SNI Award. It features participant registration, self-assessment forms, an admin portal for data verification and master data management, and a dedicated assessor portal to evaluate submissions determining award eligibility.",
      tags: [
        "MySQL",
        "HTML",
        "CSS",
        "Javascript",
        "Laravel",
        "Bootstrap",
        "Github",
      ],
      images: [
        "/images/SNI Award/Homepage.png",
        "/images/SNI Award/Admin Dashboard.png",
        "/images/SNI Award/Pertanyaan.png",
        "/images/SNI Award/Profil Peserta.png",
      ],
    },
  ];

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
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16"
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="Some of the recent software solutions I've designed and built."
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard
              {...project}
              onClick={() => setSelectedProject(project as ProjectCardProps)}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
