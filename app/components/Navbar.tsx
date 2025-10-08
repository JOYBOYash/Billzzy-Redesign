"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown data
  const dropdowns = {
    Features: ["Analytics Dashboard", "Smart Automation", "Collaboration Tools"],
    Industries: ["Healthcare", "Finance", "Education"],
    // Pricing: ["Plans & Tiers", "Enterprise", "Custom Quote"],
    // Contact: ["Customer Support", "Sales Team", "Help Center"],
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md  backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <img
            src="/billzzy-logo.png"
            alt="Logo"
            className="w-28 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex items-center space-x-8">
          {Object.keys(dropdowns).map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setActiveDropdown(menu)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {menu}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === menu ? "rotate-180" : ""
                  }`}
                />
              </button>
              
            </div>
          ))}
             <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <a>
                  Pricing
                </a>
          </button>

          <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <a>
                  Contact
                </a>
          </button>
        </div>

       

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-blue-600 cursor-pointer text-blue-600 hover:bg-blue-500  hover:text-white     ">
            Sign In
          </Button>
          <Button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white">
            Get Started
          </Button>
        </div>
      </div>

      {/* Expanding Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="bg-gradient-to-r from-[#12042a] via-[#090024] to-[#291648] mt-10 shadow-md overflow-hidden"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">
              {/* Left Visual */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="hidden md:block flex-1"
              >
                <img
                  src={`/nav/${activeDropdown?.toLowerCase()}.png`}
                  alt="Dropdown Visual"
                  className="w-72 h-auto select-none"
                />
              </motion.div>

              {/* Right Dropdown Content */}
              <div className="flex flex-col items-end text-right gap-4 flex-1">
                {dropdowns[activeDropdown as keyof typeof dropdowns].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: -6 }}
                    className="group flex items-center justify-end gap-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    <span className="font-medium text-lg">{item}</span>
                    <ChevronRight
                      size={18}
                      className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
