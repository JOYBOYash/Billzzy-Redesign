
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/Features";
import FAQSection from "./components/FAQ";
import WhatWeDoSection from "./components/What";
import IndustriesSection from "./components/Industries";
import PricingSection from "./components/Pricing";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="bg-white ease-in-out">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <IndustriesSection />
      <WhatWeDoSection />
      <PricingSection />
      <FAQSection />
      <CTA />
    </div>
  );
}
