import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Reveal } from "@/components/atoms/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <HeroSection />
      </div>
      
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <Reveal width="100%">
          <AboutSection />
        </Reveal>
      </div>
      
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <Reveal width="100%">
          <ExperienceSection />
        </Reveal>
      </div>
      
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <Reveal width="100%">
          <ProjectsSection />
        </Reveal>
      </div>
      
      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <Reveal width="100%">
          <EducationSection />
        </Reveal>
      </div>

      <div className="min-h-[100dvh] w-full flex flex-col justify-center">
        <Reveal width="100%">
          <ContactSection />
        </Reveal>
      </div>
    </div>
  );
}
