'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Headphones, BarChart2, Clock, Users } from "lucide-react";

export default function HeroSection() {
  const dashRef = useRef(null);
  const { scrollY } = useScroll();

  // Smooth scroll-based transforms
  const floatX = useTransform(scrollY, [0, 300], [0, 15]);
  const floatY = useTransform(scrollY, [0, 300], [0, -18]);
  const floatCardY = useTransform(scrollY, [0, 200], [0, -12]);

  // Gentle floating animation for orbs
  const orbFloat = {
    y: [0, -15, 0],
    transition: { 
      repeat: Infinity, 
      duration: 8, 
      ease: "easeInOut" 
    }
  };

  // Chip positions around dashboard
  const chipPositions = [
    {
      top: "-40px",
      left: "50%",
      translateX: "-50%",
      label: "User friendly",
      icon: <Clock className="w-4 h-4 text-yellow-300" />,
      delay: 0
    },
    {
      top: "50%",
      left: "-130px",
      translateY: "-50%",
      label: "24/7 Customer Support",
      icon: <Headphones className="w-4 h-4 text-cyan-200" />,
      delay: 0.2
    },
    {
      bottom: "-40px",
      left: "50%",
      translateX: "-50%",
      label: "63% Immediate Rise in Sales",
      icon: <BarChart2 className="w-4 h-4 text-green-300" />,
      delay: 0.4
    },
    {
      top: "50%",
      right: "-130px",
      translateY: "-50%",
      label: "100% Convenient",
      icon: <Users className="w-4 h-4 text-blue-200" />,
      delay: 0.6
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6 text-white">
      {/* Animated Gradient Orbs */}
      <motion.div 
      animate={{ ...orbFloat, transition: { ...orbFloat.transition, delay: 2, ease: ["easeInOut"] } }}
        className="absolute top-[-70px] left-[-60px] w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ ...orbFloat, transition: { ...orbFloat.transition, delay: 2, ease: ["easeInOut"] } }}
        className="absolute bottom-[-80px] right-[-90px] w-80 h-80 bg-purple-600/20 blur-3xl rounded-full pointer-events-none z-0" 
      />
      <motion.div 
       animate={{ ...orbFloat, transition: { ...orbFloat.transition, delay: 2, ease: ["easeInOut"] } }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-indigo-400/15 blur-3xl rounded-full pointer-events-none z-0" 
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
        
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="text-center lg:text-left flex-1 max-w-2xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/10 text-cyan-200 rounded-full px-4 py-1.5 font-semibold text-xs tracking-widest inline-flex items-center gap-2 mb-6 border border-cyan-400/30 backdrop-blur"
          >
            <Star className="w-4 h-4 text-cyan-200 fill-cyan-200" />
            Fastest Growing Platform
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empowering Your Sales,
            <span className="block text-cyan-400 mt-2">Simplifying Your Workflow.</span>
          </h1>
          
          <p className="text-lg text-blue-100/90 mt-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Streamline your billing process and boost productivity with automated address entry and smart order management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }} 
              whileTap={{ scale: 0.98 }} 
              className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-3.5 rounded-lg font-semibold shadow-lg transition-all duration-300"
            >
              View Pricings
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }} 
              whileTap={{ scale: 0.98 }} 
              className="border-2 border-white/40 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300"
            >
              Request Free Demo
            </motion.button>
          </div>
          
          <div className="flex flex-wrap gap-6 mt-8 text-cyan-100/90 text-sm justify-center lg:justify-start">
            <span className="flex items-center gap-2">
              <span className="text-green-400">✔</span> No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Cancel Anytime
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Predictive Analytics
            </span>
          </div>
        </motion.div>

        {/* Dashboard Card with Floating Chips */}
        <div className="relative flex-1 flex items-center justify-center w-full max-w-[500px]">
          <motion.div
            ref={dashRef}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{ y: floatCardY }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 w-full shadow-2xl border border-white/20 flex flex-col gap-4 transition-all duration-300"
          >
            <div className="mb-2 text-gray-200 font-semibold text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              Dashboard · Oct 10, 2025
            </div>
            
            <Stat label="Monthly Sales" value="25.4k" color="text-green-400" />
            <Stat label="Revenue" value="$6,35,240" color="text-cyan-300" />
            <Stat label="Active Users" value="49 now" color="text-purple-300" />
            
            <div className="flex justify-between items-center text-xs text-cyan-100 mt-4 pt-4 border-t border-white/10">
              <span className="flex items-center gap-1">
                <span className="text-green-400">✔</span> All insights in real-time
              </span>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">View More →</span>
            </div>

            {/* Floating Feature Chips */}
            {chipPositions.map((chip, i) => (
              <motion.div
                key={i}
                className="hidden lg:block absolute"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{
                  opacity: { delay: 0.8 + chip.delay, duration: 0.5 },
                  scale: { delay: 0.8 + chip.delay, duration: 0.5 },
                  y: { 
                    repeat: Infinity, 
                    duration: 3 + i * 0.5, 
                    ease: "easeInOut",
                    delay: i * 0.3
                  }
                }}
                style={{
                  top: chip.top,
                  bottom: chip.bottom,
                  left: chip.left,
                  right: chip.right,
                  transform: `${chip.translateX ? `translateX(${chip.translateX})` : ''} ${chip.translateY ? `translateY(${chip.translateY})` : ''}`.trim()
                }}
              >
                <FloatingChip icon={chip.icon} label={chip.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, color }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      className="flex justify-between items-center bg-white/10 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
    >
      <span className="text-gray-200">{label}</span>
      <span className={`${color} font-bold text-base`}>{value}</span>
    </motion.div>
  );
}

function FloatingChip({ icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border border-white/20 text-sm font-medium text-white whitespace-nowrap cursor-pointer"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
}