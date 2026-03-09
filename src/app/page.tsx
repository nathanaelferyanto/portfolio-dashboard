import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { ContactSection } from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
