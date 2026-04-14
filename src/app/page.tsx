import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ChallengeSection from "@/components/section/ChallengeSection";
import FeatureSection from "@/components/section/FeatureSection";
import HowItWorksSection from "@/components/section/HowItWorksSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ChallengeSection />
      <FeatureSection />
      <HowItWorksSection />
    </main>
  );
}