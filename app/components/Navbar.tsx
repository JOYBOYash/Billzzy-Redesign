"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    title: "Features",
    links: ["Order Confirmation Automation","Packing Tracking Automation", "Label Printing", "Automatic Amount Confirmation"],
  },
  {
    title: "Industries",
    links: ["E-Commerce","Retail", "Small Businesses", "Logistics & Delivery"],
  },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for professional navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/billzzy-logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex gap-8 items-center text-gray-700 font-medium">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-300">
                <span>{item.title}</span>
                {activeDropdown === item.title ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {/* Animated expanding dropdown */}
              <AnimatePresence>
                {activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden"
                  >
                    <div className="flex flex-col w-48 border border-gray-100">
              {item.links.map((link) => (
                <Link
                  key={link}
                  id="link"
                  href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                >
                  {link}
                  <span className="text-indigo-600/50 group-hover:text-indigo-600 transition-transform duration-300 group-hover:translate-x-2">
                    ➜
                  </span>
                </Link>
              ))}
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

            {/* CTA Button */}
          <Link
            href="#pricing"
            className=" text-gray-700 px-5 py-2 hover:text-indigo-600 transition-all duration-300"
          >
            Pricing
          </Link>

           <Link
            href="#faq"
            className=" text-gray-700 px-5 py-2 hover:text-indigo-600 transition-all duration-300"
          >
          FAQ
          </Link>

          {/* CTA Button */}
          <Link
            href="/signup"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium hover:cursor-pointer transition-color transition ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
