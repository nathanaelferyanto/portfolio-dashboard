import React from "react";
import { SectionHeading } from "../molecules/SectionHeading";
import { TimelineItem } from "../molecules/TimelineItem";

export const ExperienceSection = () => {
  const experiences = [
    {
      duration: "Dec 2024 - Present",
      location: "Bogor, Indonesia",
      role: "IT Staff",
      company: "PT Sukaharja Quail Indonesia",
      isLatest: true,
      responsibilities: [
        "Built a web-based expense management system for cash requests, reimbursements, and approval workflows, used by approximately 20 employees.",
        "Developed an inventory monitoring system to record daily, monthly, and yearly quail egg production and population data with data visualizations.",
        "Implemented a sales management system to handle sales orders, delivery records, invoice generation, and product returns for internal distribution workflows.",
        "Developed a web-based remote attendance system using GPS location validation to verify employee check-ins.",
        "Designed and built a public corporate website with a custom CMS allowing non-technical staff updates.",
      ],
      techStack: [
        "React",
        "Laravel",
        "Express",
        "MySQL",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      duration: "Jul 2024 - Dec 2024",
      location: "Bogor, Indonesia",
      role: "Web Developer Intern",
      company: "PT Sukaharja Quail Indonesia",
      responsibilities: [
        "Developed an investment management module supporting investor registration and participation in batch-based livestock investments.",
        "Implemented investor account registration, verification, and dedicated dashboard for monitoring history.",
        "Built functionality for investors to join/withdraw from batches, and administrators to manage participation.",
        "Developed bulk data import features to streamline investor administration.",
      ],
      techStack: ["Figma", "React", "Express", "MySQL"],
    },
    {
      duration: "Jan 2024 - May 2024",
      location: "Jakarta, Indonesia",
      role: "Web Developer Intern",
      company: "Badan Standardisasi Nasional",
      responsibilities: [
        "Developed a web-based registration platform for the SNI Award program for businesses to submit assessment data.",
        "Built and maintained master data management (CRUD) modules for administrators.",
        "Implemented participant registration and verification workflows with validation and approval systems.",
        "Integrated frontend interfaces with backend services to support secure data handling.",
      ],
      techStack: ["Laravel", "MySQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16"
    >
      <SectionHeading
        title="Work Experience"
        subtitle="My professional journey in software development."
      />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};
