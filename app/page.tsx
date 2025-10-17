
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/Features";
import FAQSection from "./components/FAQ";

export default function Home() {
  return (
    <div className="bg-white ease-in-out">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
    </div>
  );
}
