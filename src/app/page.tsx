import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ModulesSection } from "@/components/home/modules-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { VisitStepsSection } from "@/components/home/visit-steps-section";
import { WhySection } from "@/components/home/why-section";
import { SiteLayout } from "@/components/layout/site-layout";

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ModulesSection />
      <WhySection />
      <VisitStepsSection />
      <ContactSection />
    </SiteLayout>
  );
}
