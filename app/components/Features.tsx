'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { Package, FileCheck, Printer, BarChart3, LucideIcon } from 'lucide-react';

// Helper function to create a URL-friendly slug
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

interface Feature {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  icon: LucideIcon;
  color: string;
  slug: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Order Confirmation Automation",
    subtitle: "Browse & Explore",
    desc: "Organize your products into intuitive categories with beautiful visual displays.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=800&fit=crop",
    icon: FileCheck,
    color: "from-indigo-500/40 to-purple-500/40",
    slug: createSlug("Order Confirmation Automation")
  },
  {
    id: 2,
    title: "Packing & Tracking Automation",
    subtitle: "Smart Inventory",
    desc: "Manage your entire product catalog with real-time stock tracking and pricing.",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=400&h=800&fit=crop",
    icon: BarChart3,
    color: "from-blue-500/40 to-cyan-500/40",
    slug: createSlug("Packing & Tracking Automation")
  },
  {
    id: 3,
    title: "Label Printing",
    subtitle: "Seamless Checkout",
    desc: "Deliver a smooth shopping experience with instant cart updates and quick checkout.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=800&fit=crop",
    icon: Package,
    color: "from-violet-500/40 to-pink-500/40",
    slug: createSlug("Label Printing")
  },
  {
    id: 4,
    title: "Automatic Amount Confirmation",
    subtitle: "Track & Fulfill",
    desc: "Streamline order processing from confirmation to delivery with automated tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
    icon: Printer,
    color: "from-emerald-500/40 to-teal-500/40",
    slug: createSlug("Automatic Amount Confirmation")
  }
];

interface MobilePhoneProps {
  feature: Feature;
  style: {
    x?: MotionValue<string>;
    y?: MotionValue<string>;
    opacity: MotionValue<number>;
    scale: MotionValue<number>;
  };
  isMobile: boolean;
}

function MobilePhone({ feature, style, isMobile }: MobilePhoneProps) {
  const Icon = feature.icon;
  
  return (
    <div>
      <motion.div 
        style={style}
        className={`absolute ${isMobile ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} w-[280px] h-[580px] overflow-visible`}
      >
        {/* Phone frame */}
        <div className="relative w-full h-full bg-gray-800 rounded-[36px] shadow-2xl p-2">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl z-20" />
          
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
                  className="w-14 h-14 bg-white/80 backdrop-blur-lg rounded-xl flex items-center justify-center mx-auto mb-3 border border-white shadow-lg"
                >
                  <Icon className="w-7 h-7 text-indigo-600" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-1">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 text-xs">
                  {feature.subtitle}
                </p>
              </div>
              
              {/* Bottom */}
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 border border-gray-200 shadow-lg">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {feature.desc}
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(100, 0, 200, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold cursor-pointer rounded-xl text-sm hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md block text-center"
                >
                  Learn More
                </motion.div>
              </div>
            </div>
          </div>

          {/* Power button */}
          <div className="absolute right-0 top-20 w-1 h-12 bg-gray-700 rounded-l" />
          {/* Volume buttons */}
          <div className="absolute left-0 top-16 w-1 h-8 bg-gray-700 rounded-r" />
          <div className="absolute left-0 top-28 w-1 h-8 bg-gray-700 rounded-r" />
        </div>
      </motion.div>
    </div>
  );
}

export default function ScrollFeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create transforms for horizontal sliding (desktop)
  const createPhoneTransformsDesktop = (index: number) => {
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

  // Create transforms for vertical sliding (mobile)
  const createPhoneTransformsMobile = (index: number) => {
    const totalPhones = features.length;
    const segmentSize = 1 / totalPhones;
    const start = index * segmentSize;
    const end = (index + 1) * segmentSize;
    
    return {
      y: useTransform(
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
      <div className="h-fit py-24 flex flex-col items-center justify-center px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Experience the
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Next Generation
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover powerful automation features designed to <span className='text-indigo-600 font-bold'>transform your e-commerce experience </span>
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm animate-bounce"
          >
            Scroll to explore ↓
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/50 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/50 blur-3xl rounded-full"
        />
      </div>

      {/* Scroll Section */}
      <div 
        ref={containerRef}
        style={{ height: `${features.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background text */}
          <motion.div
            style={{
              x: isMobile ? '0%' : useTransform(scrollYProgress, [0, 1], ['0%', '-50%']),
              y: isMobile ? useTransform(scrollYProgress, [0, 1], ['0%', '-50%']) : '0%'
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <h2 className="text-[20vw] font-black text-indigo-600/50 whitespace-nowrap">
              FEATURES
            </h2>
          </motion.div>

          {/* Phones container */}
          <div className="relative w-full h-full">
            {features.map((feature, index) => {
              const transforms = isMobile 
                ? createPhoneTransformsMobile(index)
                : createPhoneTransformsDesktop(index);
              return (
                <MobilePhone
                  key={feature.id}
                  feature={feature}
                  style={transforms}
                  isMobile={isMobile}
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
                  className="h-2 bg-indigo-600 rounded-full shadow-lg"
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}