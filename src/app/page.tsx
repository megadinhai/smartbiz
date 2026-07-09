import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <SecuritySection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
