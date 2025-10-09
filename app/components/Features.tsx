'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Package, FileCheck, Printer, BarChart3 } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "All Categories",
    subtitle: "Browse & Explore",
    desc: "Organize your products into intuitive categories with beautiful visual displays.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=800&fit=crop",
    icon: FileCheck,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 2,
    title: "Product Catalog",
    subtitle: "Smart Inventory",
    desc: "Manage your entire product catalog with real-time stock tracking and pricing.",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=400&h=800&fit=crop",
    icon: BarChart3,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 3,
    title: "Shopping Cart",
    subtitle: "Seamless Checkout",
    desc: "Deliver a smooth shopping experience with instant cart updates and quick checkout.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=800&fit=crop",
    icon: Package,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "Order Management",
    subtitle: "Track & Fulfill",
    desc: "Streamline order processing from confirmation to delivery with automated tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
    icon: Printer,
    color: "from-orange-500/20 to-red-500/20"
  }
];

function MobilePhone({ feature, style }) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      style={style}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[580px]"
    >
      {/* Phone frame */}
      <div className="relative w-full h-full bg-gray-900 rounded-[36px] shadow-2xl p-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20" />
        
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[28px] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} backdrop-blur-sm`} />
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Top */}
            <div className="text-center pt-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/30"
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-1">
                {feature.title}
              </h3>
              
              <p className="text-white/80 text-xs">
                {feature.subtitle}
              </p>
            </div>
            
            {/* Bottom */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {feature.desc}
              </p>
              
              <button className="w-full py-3 bg-white text-gray-900 font-semibold rounded-xl text-sm hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Power button */}
        <div className="absolute right-0 top-20 w-1 h-12 bg-gray-800 rounded-l" />
        {/* Volume buttons */}
        <div className="absolute left-0 top-16 w-1 h-8 bg-gray-800 rounded-r" />
        <div className="absolute left-0 top-28 w-1 h-8 bg-gray-800 rounded-r" />
      </div>
    </motion.div>
  );
}

export default function ScrollFeaturesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create transforms for horizontal sliding
  // Each phone slides from right to left as you scroll
  const createPhoneTransforms = (index) => {
    const totalPhones = features.length;
    const segmentSize = 1 / totalPhones;
    const start = index * segmentSize;
    const end = (index + 1) * segmentSize;
    
    return {
      x: useTransform(
        scrollYProgress,
        [start, end],
        ['100%', '-100%']
      ),
      opacity: useTransform(
        scrollYProgress,
        [start, start + segmentSize * 0.2, end - segmentSize * 0.2, end],
        [0, 1, 1, 0]
      ),
      scale: useTransform(
        scrollYProgress,
        [start, start + segmentSize * 0.2, end - segmentSize * 0.2, end],
        [0.8, 1, 1, 0.8]
      )
    };
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Experience the
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Next Generation
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/70 mb-8 max-w-2xl mx-auto">
            Discover powerful features designed to transform your e-commerce experience
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/50 text-sm"
          >
            Scroll to explore ↓
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 blur-3xl rounded-full"
        />
      </div>

      {/* Horizontal Scroll Section */}
      <div 
        ref={containerRef}
        style={{ height: `${features.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background text */}
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <h2 className="text-[20vw] font-black text-white/5 whitespace-nowrap">
              FEATURES
            </h2>
          </motion.div>

          {/* Phones container */}
          <div className="relative w-full h-full">
            {features.map((feature, index) => {
              const transforms = createPhoneTransforms(index);
              return (
                <MobilePhone
                  key={feature.id}
                  feature={feature}
                  style={transforms}
                />
              );
            })}
          </div>

          {/* Progress indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20"
          >
            {features.map((_, index) => {
              const segmentSize = 1 / features.length;
              const start = index * segmentSize;
              const end = (index + 1) * segmentSize;
              
              const width = useTransform(
                scrollYProgress,
                [start, end],
                ['8px', '32px']
              );
              
              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.01, end - 0.01, end],
                [0.3, 1, 1, 0.3]
              );

              return (
                <motion.div
                  key={index}
                  style={{ width, opacity }}
                  className="h-2 bg-white rounded-full"
                />
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Normal Scroll */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl text-blue-100/70 mb-10">
            Join thousands of businesses already using our platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-cyan-500/20 transition-all"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}