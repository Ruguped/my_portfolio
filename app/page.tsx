import HeroSection from "./components/Pages/HeroSection";
import AboutSection from "./components/Pages/AboutSection";
import WorkSection from "./components/Pages/WorkSection";
import EducationSection from "./components/Pages/EducationSection";
import ProjectsSection from "./components/Pages/ProjectsSection";
import GrantsSection from "./components/Pages/GrantsSection";
import SkillsSection from "./components/Pages/SkillsSection";
import ContactSection from "./components/Pages/ContactSection";
import Dock from "./components/Dock";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <GrantsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Dock />
    </>
  );
}
