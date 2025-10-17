
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/Features";
import FAQSection from "./components/FAQ";
import WhatWeDoSection from "./components/What";
import IndustriesSection from "./components/Industries";
import PricingSection from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="bg-white ease-in-out scroll-smooth max-w-screen overflow-x-clip  md:overflow-x-visibble ">
       <Navbar />
      <HeroSection />
      <div  id='features'>
       <FeaturesSection />
      </div>
      <div  id='industries'>
        <IndustriesSection />
      </div>
      <WhatWeDoSection />
      <div  id='pricing'>
       <PricingSection />
      </div>
      <div  id='faq'>
        <FAQSection />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
