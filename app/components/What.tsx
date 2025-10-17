'use client';

import React, { useState } from 'react';
import { Package, Shield, Scale, Zap } from 'lucide-react';

const WhatWeDoSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: Package,
      title: "Explore 50+ product collections",
      description: "Discover curated investment themes across markets and sectors"
    },
    {
      id: 2,
      icon: Shield,
      title: "Buy and sell with $0 commissions",
      description: "Trade without worrying about transaction fees eating into your returns"
    },
    {
      id: 3,
      icon: Scale,
      title: "Weigh pros and cons at a glance",
      description: "Make informed decisions with clear, digestible data visualizations"
    },
    {
      id: 4,
      icon: Zap,
      title: "Get started with just $1",
      description: "Low barrier to entry means anyone can begin their investment journey"
    }
  ];

  // Function to handle touch start (mimics hover)
  const handleTouchStart = (id: number) => {
    setHoveredCard(id);
  };

  // Function to handle touch end (mimics hover out)
  const handleTouchEnd = () => {
    // Add a small delay to make the hover state visible before resetting
    setTimeout(() => {
      setHoveredCard(null);
    }, 100); 
  };

  return (
    <div className="py-16 px-4 md:py-24 md:px-8 lg:py-36 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-400 to-blue-500 ">
      <div className="max-w-7xl w-full">
        <div className="animate-fadeInUp text-center lg:text-left mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tet-center mb-4 leading-tight">
            A smarter way to <span className='text-indigo-800 md:text-center font-bold underline decoration-white underline-offset-6'> discover</span> and  <span className='underline-offset-6 md:text-center text-indigo-800 font-bold underline decoration-white'>bill</span>.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto lg:mx-0">
            We make sense of the market so you can make more strategic choices, faster. 
            Browse dozens of themes and opportunities, dive into data and perspectives, and invest with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group bg-white/95 backdrop-blur-lg rounded-lg p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
                style={{ 
                  animation: `fadeInUp 0.8s ease ${0.3 + index * 0.1}s backwards` 
                }}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onTouchStart={() => handleTouchStart(feature.id)} // Touch start for mobile hover
                onTouchEnd={handleTouchEnd}                       // Touch end for mobile hover out
                onTouchCancel={handleTouchEnd}                    // Touch cancel for interrupted touches
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className={`w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mb-6 transition-all duration-300 relative z-10 ${
                  hoveredCard === feature.id ? 'scale-110 rotate-6' : ''
                }`}>
                  <Icon className="w-12 h-8 text-white rounded-full" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease;
        }
      `}</style>
    </div>
  );
};

export default WhatWeDoSection;