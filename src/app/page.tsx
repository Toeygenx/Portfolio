import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectTimeline from "@/components/ProjectTimeline";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectTimeline />
      <TechStackSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
