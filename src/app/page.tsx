import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { ContactSection } from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <HeroSection />
      </div>
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <AboutSection />
      </div>
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <ExperienceSection />
      </div>
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <ProjectsSection />
      </div>
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <EducationSection />
      </div>

      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <ContactSection />
      </div>
    </div>
  );
}
