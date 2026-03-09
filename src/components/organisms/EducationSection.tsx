import React from "react";
import { EducationCard } from "../molecules/EducationCard";
import { CertificationCard } from "../molecules/CertificationCard";
import { LanguageCard } from "../molecules/LanguageCard";

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="w-full bg-zinc-50 dark:bg-zinc-900/50 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Formal & Non-Formal Education */}
        <div className="space-y-8">
          <h2 className="text-3xl font-black tracking-tight">Education</h2>

          <EducationCard
            institution="IPB University"
            location="Bogor, Indonesia"
            duration="Aug 2021 - Aug 2025"
            badgeColor="blue"
            title="Bachelor of Applied Science"
            subtitle="Software Engineering Technology"
            gpa="3.68/4.00"
            details={
              <>
                <strong className="text-zinc-900 dark:text-zinc-100">
                  Final Project:
                </strong>{" "}
                Development of an Investor Management Module for Batch-Based
                Investment in the Sukaharja Quail Business Investment
                Application
              </>
            }
          />

          <h2 className="text-2xl font-black tracking-tight pt-4">
            Non-Formal Education
          </h2>
          <EducationCard
            institution="Bangkit Academy"
            location="led by Google, Tokopedia, Gojek, & Traveloka"
            duration="Aug 2023 - Jan 2024"
            badgeColor="zinc"
            title="Cloud Computing Cohort"
            subtitle="Studi Independen Kampus Merdeka • Remote"
            details={[
              "Focusing on full-stack web development principles and soft skills.",
              "Deepened technical proficiency in Node.js to build scalable RESTful APIs.",
              "Gained foundational exposure to DevOps practices and cloud infrastructure.",
              "Collaborated on a Capstone Project to deliver backend integration.",
            ]}
          />
        </div>

        {/* Certifications & Languages */}
        <div className="space-y-8">
          <h2 className="text-3xl font-black tracking-tight">Certifications</h2>
          <div className="space-y-4">
            <CertificationCard
              title="Software Engineer Competency Certification"
              issuer="BNSP"
              date="Valid: Sep 2025 - Sep 2028"
            />
            <CertificationCard
              title="Cloud Computing Program Certificate"
              issuer="Bangkit Academy"
              date="Jan 2024"
            />
            <CertificationCard
              title="English for Business Communication"
              issuer="The British Institute"
              date="Nov 2023"
            />
          </div>

          <h2 className="text-2xl font-black tracking-tight pt-8">Languages</h2>
          <div className="grid grid-cols-2 gap-4">
            <LanguageCard language="Indonesian" proficiency="Native" />
            <LanguageCard language="English" proficiency="Conversational" />
          </div>
        </div>
      </div>
    </section>
  );
};
