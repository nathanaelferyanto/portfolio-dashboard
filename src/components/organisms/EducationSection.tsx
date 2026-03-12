import React from "react";
import { EducationCard } from "../molecules/EducationCard";
import { CertificationCard } from "../molecules/CertificationCard";
import { LanguageCard } from "../molecules/LanguageCard";

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="w-full bg-zinc-50 dark:bg-zinc-900/50 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* ── Education ── */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              Academic
            </p>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
              Education
            </h2>
          </div>

          {/* Full-width card */}
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
        </div>

        {/* ── Certifications ── */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              Professional
            </p>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificationCard
              title="Software Engineer Competency Certification"
              issuer="BNSP"
              date="Valid: Sep 2025 - Sep 2028"
              imageUrl="/images/Serifikasi_Software Engineering_Nathanael Jonathan Feryanto_page-0001.jpg"
            />
            <CertificationCard
              title="Cloud Computing Program Certificate"
              issuer="Bangkit Academy"
              date="Jan 2024"
              pdfUrl="/images/[Bangkit 2023 Batch 2] Certificate - C001BSY3824.pdf"
            />
            <CertificationCard
              title="Belajar Membuat Aplikasi Back-End untuk Pemula dengan
Google Cloud"
              issuer="Dicoding"
              date="2023"
              pdfUrl="/images/Dicoding Academy Certificate.pdf"
            />
            <CertificationCard
              title="English for Business Communication"
              issuer="The British Institute"
              date="Nov 2023"
              pdfUrl="/images/bangkit nov 8_1799.pdf"
            />
          </div>
        </div>

        {/* ── Languages ── */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              Communication
            </p>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
              Languages
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <LanguageCard language="Indonesian" proficiency="Native" />
            <LanguageCard language="English" proficiency="Conversational" />
          </div>
        </div>
      </div>
    </section>
  );
};
