"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"; // Added Menu and X icons
import Link from "next/link";

const navItems = [
  {
    title: "Features",
    links: ["Order Confirmation Automation", "Packing Tracking Automation", "Label Printing", "Automatic Amount Confirmation"],
  },
  {
    title: "Industries",
    links: ["E-Commerce", "Retail", "Small Businesses", "Logistics & Delivery"],
  },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  // Scroll effect for professional navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null); // Close any open dropdowns
  };

  // Toggle dropdown for mobile
  const toggleMobileDropdown = (title: string) => {
    setActiveDropdown(prev => (prev === title ? null : title));
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 transition-all min-w-screen max-w-screen duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex  justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={handleMobileLinkClick}>
          <img
            src="/billzzy-logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Hamburger/Close Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
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
                          onClick={handleMobileLinkClick} // Ensure dropdowns close on click
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

          {/* Regular Links */}
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
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium hover:cursor-pointer transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed inset-0 bg-white z-40 flex flex-col pt-20 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.title} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => toggleMobileDropdown(item.title)}
                    className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <span>{item.title}</span>
                    {activeDropdown === item.title ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex flex-col pl-4 mt-2 mb-2 overflow-hidden"
                      >
                        {item.links.map((link) => (
                          <Link
                            key={link}
                            href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                            className="py-2 text-base text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                            onClick={handleMobileLinkClick}
                          >
                            {link}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Regular Mobile Links */}
              <Link
                href="#pricing"
                className="block py-3 text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-300 border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="block py-3 text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-300 border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                FAQ
              </Link>

              {/* Mobile CTA Button */}
              <Link
                href="/signup"
                className="mt-6 w-full text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors duration-300"
                onClick={handleMobileLinkClick}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;