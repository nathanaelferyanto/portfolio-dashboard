import React from "react";
import { SectionHeading } from "../molecules/SectionHeading";
import { ProjectCard } from "../molecules/ProjectCard";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Expense Management System",
      description:
        "A comprehensive web-based platform for handling cash requests, reimbursements, and multi-level approval workflows within the company.",
      tags: ["React", "Laravel", "MySQL", "TailwindCSS"],
      demoUrl: "#", // Placeholder
    },
    {
      title: "Quail Inventory Monitoring",
      description:
        "Dashboard application to monitor daily, monthly, and yearly quail egg production and population data, featuring interactive charts and reporting tools.",
      tags: ["React", "Express", "PostgreSQL", "Recharts"],
      demoUrl: "#", // Placeholder
      githubUrl: "#",
    },
    {
      title: "Livestock Investment Platform",
      description:
        "An investment management module built to facilitate batch-based livestock investments, supporting user registration, batch participation, and automated history tracking.",
      tags: ["Node.js", "Express", "React", "MySQL"],
      githubUrl: "#",
    },
    {
      title: "Corporate CMS Website",
      description:
        "A custom Content Management System powering the company's public website, designed specifically to allow non-technical staff to seamlessly update news and pages.",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
      demoUrl: "https://nathanaelferyanto.my.id",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16"
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="Some of the recent software solutions I've designed and built."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
