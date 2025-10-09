
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/Features";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#12042a] via-[#090024] to-[#291648] transition ease-in-out">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
