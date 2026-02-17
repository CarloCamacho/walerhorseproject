import HeroSection from "@/components/home/HeroSection";
import MissionStatement from "@/components/home/MissionStatement";
import FeaturedHorses from "@/components/home/FeaturedHorses";
import ImpactNumbers from "@/components/home/ImpactNumbers";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionStatement />
      <FeaturedHorses />
      <ImpactNumbers />
      <NewsletterSignup />
      <CTABanner />
    </>
  );
}
