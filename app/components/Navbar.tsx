"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect for professional navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Toggle dropdown for mobile
  const toggleMobileDropdown = (title: string) => {
    setActiveDropdown(prev => (prev === title ? null : title));
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50" onClick={handleMobileLinkClick}>
            <img
              src="/billzzy-logo.png"
              alt="Logo"
              className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Hamburger/Close Icon for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 text-gray-800 hover:text-indigo-600 transition-colors duration-300 p-2 -mr-2"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors duration-300 text-sm">
                  <span>{item.title}</span>
                  {activeDropdown === item.title ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* Animated expanding dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-2 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100"
                    >
                      <div className="flex flex-col w-56 py-2">
                        {item.links.map((link) => (
                          <Link
                            key={link}
                            href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                            className="group flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
                          >
                            <span>{link}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 text-indigo-600">
                              →
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
              className="text-gray-700 text-sm hover:text-indigo-600 transition-colors duration-300"
            >
              Pricing
            </Link>

            <Link
              href="#faq"
              className="text-gray-700 text-sm hover:text-indigo-600 transition-colors duration-300"
            >
              FAQ
            </Link>

            {/* CTA Button */}
            <Link
              href="/signup"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={handleMobileLinkClick}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed top-14 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Menu Content */}
                <div className="flex-1 px-6 py-6 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <button
                        onClick={() => toggleMobileDropdown(item.title)}
                        className="flex items-center justify-between w-full py-4 text-base font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-200 active:scale-95"
                      >
                        <span>{item.title}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.title ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={20} strokeWidth={2.5} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 space-y-1">
                              {item.links.map((link, linkIndex) => (
                                <motion.div
                                  key={link}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: linkIndex * 0.05 }}
                                >
                                  <Link
                                    href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}/${link.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="block py-2.5 pl-4 pr-3 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 active:scale-95"
                                    onClick={handleMobileLinkClick}
                                  >
                                    {link}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}

                  {/* Regular Mobile Links */}
                  {[
                    { href: "#pricing", label: "Pricing" },
                    { href: "#faq", label: "FAQ" }
                  ].map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navItems.length + index) * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-4 text-base font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-200 border-b border-gray-100 active:scale-95"
                        onClick={handleMobileLinkClick}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA - Sticky */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="sticky bottom-0 p-6 bg-gradient-to-t from-white via-white to-transparent"
                >
                  <Link
                    href="/signup"
                    className="block w-full text-center px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 active:scale-95"
                    onClick={handleMobileLinkClick}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;