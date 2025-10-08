'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Package, FileCheck, Printer, BarChart3 } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Order Confirmation",
    subtitle: "Automation",
    desc: "Instantly confirm orders and reduce errors with automated confirmations.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
    icon: FileCheck,
  },
  {
    id: 2,
    title: "Amount Verification",
    subtitle: "System",
    desc: "Automatically verify amounts to avoid discrepancies and manual checks.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=800&fit=crop",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Label Printing",
    subtitle: "Solution",
    desc: "Seamlessly print labels for shipping and inventory management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=800&fit=crop",
    icon: Printer,
  },
  {
    id: 4,
    title: "Packing & Tracking",
    subtitle: "Automation",
    desc: "Automate packing and track orders in real-time for better control.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=800&fit=crop",
    icon: Package,
  }
];

function FeatureCard({ feature, index }) {
  const [hovered, setHovered] = React.useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer group"
    >
      <motion.div
        animate={{
          width: hovered ? 340 : 100,
        }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#12042a] via-[#0a0228] to-[#291648] border border-white/10"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0024]/60 via-[#090024]/70 to-[#1a0638]/90 backdrop-blur-xl" />
        </div>

        {/* Compact View (Vertical Title) */}
        <AnimatePresence>
          {!hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col justify-center items-center"
            >
              <motion.h3
                animate={{ rotate: -90 }}
                className="text-white/90 text-lg font-bold tracking-wider whitespace-nowrap"
                style={{ textShadow: '0 0 10px rgba(0,0,0,0.6)' }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                animate={{ rotate: -90 }}
                className="text-white/60 text-sm whitespace-nowrap mt-1"
                style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}
              >
                {feature.subtitle}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded View */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-end p-6"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="bg-white/10 backdrop-blur-2xl rounded-xl p-5 border border-white/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-cyan-300" />
                </motion.div>

                <h3 className="text-white font-bold text-xl mb-1">
                  {feature.title}
                </h3>
                <p className="text-cyan-100/70 text-sm mb-2">{feature.subtitle}</p>
                <p className="text-blue-100/80 text-sm mb-4 leading-relaxed">
                  {feature.desc}
                </p>

                <motion.a
                  href={feature.url}
                  whileHover={{ x: 6 }}
                  className="inline-flex items-center gap-2 text-cyan-300 font-medium text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#12042a] via-[#090024] to-[#291648] py-24 px-6 overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Streamlined automation and control built for modern sales teams
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
