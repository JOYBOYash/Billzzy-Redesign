"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown data
  const dropdowns = {
    Features: ["Analytics Dashboard", "Smart Automation", "Collaboration Tools"],
    Industries: ["Healthcare", "Finance", "Education"]
  };

  const simpleLinks = ["Pricing", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 shadow-lg backdrop-blur-xl py-3"
            : "bg-white/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="relative z-10"
          >
            <img
              src="/billzzy-logo.png"
              alt="Logo"
              className="w-28 h-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {Object.keys(dropdowns).map((menu, idx) => (
              <motion.div
                key={menu}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeDropdown === menu
                      ? "text-cyan-400 bg-cyan-50"
                      : "text-gray-700 hover:text-cyan-400"
                  }`}
                >
                  {menu}
                  <motion.div
                    animate={{ rotate: activeDropdown === menu ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}

            {simpleLinks.map((link, idx) => (
              <motion.a
                key={link}
                href={`/${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (Object.keys(dropdowns).length + idx) * 0.1, duration: 0.5, type: "spring", stiffness: 300}}
                whileHover={{ y: -2, color: "#22d3ee" }}
          
                className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-cyan-400 transition-all duration-300"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:flex items-center gap-3"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                backgroundColor: "#ecfeff"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="px-5 py-2 rounded-lg font-medium text-cyan-600 border-2 border-cyan-400 hover:border-cyan-500 hover:bg-cyan-700 transition-all duration-300"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 30px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md hover:from-cyan-300 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 90 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-cyan-50 transition-colors duration-200"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Desktop Mega Dropdown */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl overflow-hidden"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex items-center justify-between gap-12">
                  {/* Left: Visual */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="hidden md:flex items-center justify-center flex-1"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <img
                          src={`/nav/${activeDropdown?.toLowerCase()}.png`}
                          alt="Dropdown Visual"
                          className="w-72 h-auto select-none drop-shadow-2xl"
                        />
                      </motion.div>
                      {/* Glow effect */}
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                          scale: [0.8, 1.1, 0.8]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-3xl -z-10"
                      />
                    </div>
                  </motion.div>

                  {/* Right: Dropdown Items */}
                  <div className="flex flex-col items-end text-right gap-3 flex-1">
                    {dropdowns[activeDropdown as keyof typeof dropdowns].map((item, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: idx * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          x: -10,
                          scale: 1.05
                        }}
                        className="group flex items-center justify-end gap-3 p-4 rounded-xl hover:bg-gradient-to-l hover:from-cyan-50 hover:to-transparent cursor-pointer transition-all duration-300"
                      >
                        <span className="font-semibold text-lg text-gray-700 group-hover:text-cyan-500 transition-colors duration-300">
                          {item}
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="p-2 rounded-lg bg-cyan-100 text-cyan-600 group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto z-50 md:hidden"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9, rotate: 90 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-cyan-50 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.button>
                </div>

                {/* Mobile Nav Items */}
                <div className="space-y-2">
                  {Object.keys(dropdowns).map((menu, menuIdx) => (
                    <motion.div 
                      key={menu}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: menuIdx * 0.1, duration: 0.4 }}
                      className="border-b border-gray-100 pb-4 mb-4"
                    >
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setActiveDropdown(activeDropdown === menu ? null : menu)
                        }
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-cyan-50 transition-all duration-200"
                      >
                        <span className="font-semibold text-gray-800">{menu}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === menu ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {activeDropdown === menu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 space-y-1 pl-4">
                              {dropdowns[menu as keyof typeof dropdowns].map((item, idx) => (
                                <motion.a
                                  key={idx}
                                  href="#"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200"
                                >
                                  <div className="font-medium text-gray-800 text-sm hover:text-cyan-500 transition-colors">
                                    {item}
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}

                  {simpleLinks.map((link, idx) => (
                    <motion.a
                      key={link}
                      href={`/${link.toLowerCase()}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (Object.keys(dropdowns).length + idx) * 0.1, duration: 0.4 }}
                      whileTap={{ scale: 0.98 }}
                      className="block p-3 rounded-lg font-semibold text-gray-800 hover:bg-cyan-50 hover:text-cyan-500 transition-all duration-200"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-8 space-y-3"
                >
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 rounded-lg font-medium text-cyan-600 border-2 border-cyan-400 hover:bg-cyan-900 transition-all duration-200"
                  >
                    Sign In
                  </motion.button>
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ 
                      boxShadow: "0 10px 30px rgba(34, 211, 238, 0.3)"
                    }}
                    className="w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}