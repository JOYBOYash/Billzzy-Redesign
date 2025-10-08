'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarIcon, Headphones, BarChart2, Clock, Users } from "lucide-react";

export default function HeroSection() {
  // Get scroll and ref positions
  const dashRef = useRef(null);
  const { scrollY } = useScroll();

  // Floating animation helpers
  const floatX = useTransform(scrollY, [0, 300], [0, 18]);
  const floatY = useTransform(scrollY, [0, 300], [0, -22]);
  const floatCardY = useTransform(scrollY, [0, 200], [0, -14]);

  // Additional gentle cycles for wave animation
  const floatingWave = {
    animate: { y: [0, -8, 0, 8, 0] },
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
  };

  // Card chip positions, as children of the dashboard card
  const chipPositions = [
    // Top center
    {
      top: "-36px",
      left: "50%",
      translateX: "-50%",
      label: "User friendly",
      icon: <Clock className="w-4 h-4 text-yellow-300" />,
      floatProps: { x: floatX, y: floatY }
    },
    // Left middle
    {
      top: "50%",
      left: "-125px",
      translateY: "-50%",
      label: "24/7 Customer Support",
      icon: <Headphones className="w-4 h-4 text-cyan-200" />,
      floatProps: { y: floatX }
    },
    // Bottom center
    {
      bottom: "-36px",
      left: "50%",
      translateX: "-50%",
      label: "63% Immediate Rise in Sales",
      icon: <BarChart2 className="w-4 h-4 text-green-300" />,
      floatProps: { x: floatY, y: floatX }
    },
    // Right middle
    {
      top: "50%",
      right: "-125px",
      translateY: "-50%",
      label: "100% Convenient",
      icon: <Users className="w-4 h-4 text-blue-200" />,
      floatProps: { y: floatY }
    }
  ];

  return (
    <section className="relative min-h-[92vh] transition ease-in-out flex items-center justify-center bg-gradient-to-r from-[#12042a] via-[#090024] to-[#291648] overflow-hidden px-6 text-white">
      {/* Animated Gradient Orbs */}
      <motion.div {...floatingWave} className="absolute top-[-70px] left-[-60px] w-64 h-64 bg-cyan-400/25 blur-3xl rounded-full pointer-events-none z-0" />
      <motion.div {...floatingWave} className="absolute bottom-[-80px] right-[-90px] w-80 h-80 bg-purple-600/25 blur-3xl rounded-full pointer-events-none z-0" />
      <motion.div {...floatingWave} className="absolute top-1/2 left-1/2 w-44 h-44 bg-indigo-400/20 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Main Layout */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        {/* Hero Text */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center md:text-left flex-1">
          <span className="bg-white/10 text-cyan-200 rounded-full px-4 py-1 font-semibold text-xs tracking-widest inline-block mb-4 border border-cyan-400/30 backdrop-blur">
            <StarIcon className="w-4 h-4 inline-block mr-2 text-cyan-200 fill-blue-100 animate-pulse animate-spin ease-in-out" />
            Fastest Growing Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
            Empowering Your Sales,<span className="text-cyan-400 px-2">Simplifying Your Workflow.</span>
          </h1>
          <p className="text-lg text-blue-100 mt-6 max-w-xl mx-auto md:mx-0">
            Streamline your billing process and boost productivity with automated address entry and smart order management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-cyan-400 cursor-pointer hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition">
              View Pricings
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="border border-white/50 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Request Free Demo
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-6 mt-8 text-cyan-100 text-sm justify-center md:justify-start">
            <span>✔ No Credit Card Required</span>
            <span>✔ Cancel Anytime</span>
            <span>✔ Predictive Analytics</span>
          </div>
        </motion.div>

        {/* Main Dashboard Card: scales on hover and floats gently */}
        <motion.div
          ref={dashRef}
          initial={{ opacity: 0, x: 72, y: 32 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          style={{ y: floatCardY }}
          whileHover={{ scale: 1.04 }}
          className="relative mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-8 min-w-[350px] max-w-[450px] shadow-2xl border border-white/15 flex flex-col gap-4 z-10 cursor-pointer"
          {...floatingWave}
        >
          <div className="mb-2 text-gray-200 font-semibold text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
            Dashboard · Jan 16, 2024
          </div>
          <Stat label="Monthly Sales" value="25.4k" color="text-green-400" />
          <Stat label="Revenue" value="$6,35,240" color="text-cyan-300" />
          <Stat label="Active Users" value="49 now" color="text-purple-200" />
          <div className="flex justify-between text-xs text-cyan-100 mt-4">
            <span>✔ All insights in real-time</span>
            <span>View More →</span>
          </div>
          {/* Floating Feature Chips, as perfectly positioned children */}
          {chipPositions.map((chip, i) => (
            <motion.div
              key={chip.label}
              className="hidden md:flex absolute"
              style={{
                ...chip.floatProps,
                top: chip.top,
                bottom: chip.bottom,
                left: chip.left,
                right: chip.right,
                transform: chip.translateX ? `translateX(${chip.translateX})` : chip.translateY ? `translateY(${chip.translateY})` : undefined,
                zIndex: 20,
              }}
              {...floatingWave}
            >
              <FloatingChip icon={chip.icon} label={chip.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value, color }) {
  return (
    <div className="flex justify-between items-center bg-white/10 px-4 py-3 rounded-lg text-sm font-medium">
      <span>{label}</span>
      <span className={`${color} font-semibold`}>{value}</span>
    </div>
  );
}

function FloatingChip({ icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.10 }}
      className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-white/15 text-sm font-medium text-cyan-100"
      transition={{ type: "spring", stiffness: 260 }}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
}
