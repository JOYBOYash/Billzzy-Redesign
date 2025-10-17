'use client';
import React, { useState } from 'react';

// types.ts (Keeping this as is)
export interface Industry {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const industriesData: Industry[] = [
  {
    id: 'retail',
    title: 'Retail',
    description:
      'Billz streamlines inventory management, billing, and customer tracking for retail businesses, with built-in SMS notifications to keep customers updated from order to delivery.',
    icon: '/industries/retail.svg',
  },
  {
    id: 'logistics-delivery',
    title: 'Logistics & Delivery',
    description:
      'Integrate with courier services, generate tracking IDs, and provide automatic SMS updates to customers about their shipment status and delivery timeline.',
    icon: '/industries/logistics.svg',
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    description:
      'Track sales, manage inventory, and analyze business performance through our comprehensive dashboard, helping small businesses make data-driven decisions.',
    icon: '/industries/small-business.svg',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    description:
      'Create professional online bills with tracking numbers, generate shipping labels, and automatically notify customers when orders are created, packed, and dispatched.',
    icon: '/industries/e-commerce.svg',
  },
];

// IndustryCard Component (Minor adjustments for desktop spaciousness)
interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 100); 
  };

  return (
    <a 
      href={`/industries/${industry.id}`} 
      className="group block relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <div className={`
        h-full p-6 sm:p-8 lg:p-10 
        bg-white border border-gray-100 rounded-2xl 
        transition-all duration-300 ease-out
        relative
        ${isHovered ? 'shadow-xl shadow-indigo-100/50 -translate-y-1 border-indigo-100' : 'shadow-sm'}
      `}>
        
        {/* Background Icon Overlay */}
        {industry.icon && (
          <div className="absolute bottom-0 right-0 md:w-62 group-hover:md:w-64 group-hover:md:h-64 transition ease-in-out h-62 overflow-hidden rounded-br-2xl pointer-events-none">
            <img 
              src={industry.icon} 
              alt="" 
              className={`
                absolute bottom-[-10%] right-[-5%] w-full h-full object-contain
                opacity-[0.08] transition-all duration-300
                ${isHovered ? 'opacity-[0.5] scale-110' : ''}
              `}
            />
          </div>
        )}
        
        {/* Title */}
        <h3 className={`
          text-2xl lg:text-3xl font-semibold mb-3 // Larger title on desktop
          transition-colors duration-300
          ${isHovered ? 'text-indigo-600' : 'text-gray-900'}
        `}>
          {industry.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"> 
          {industry.description}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <span className={`
            font-medium transition-colors duration-300
            ${isHovered ? 'text-indigo-600' : 'text-gray-900'}
          `}>
            Learn More
          </span>
          <span className={`
            inline-block transition-all duration-300
            ${isHovered ? 'translate-x-2 text-indigo-600' : 'text-gray-900'}
          `}>
            →
          </span>
        </div>

        {/* Hover accent line */}
        <div className={`
          absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-500
          transition-all duration-300 ease-out
          ${isHovered ? 'w-full' : 'w-0'}
        `} />
      </div>
    </a>
  );
};

// Demo Component (Updated for spacious desktop view)
const IndustryCardDemo = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 bg-gray-50"> {/* Increased vertical padding, added subtle background */}
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"> {/* Wider max-width on large screens */}
        <div className="mb-12 lg:mb-16 text-center md:text-left"> {/* Increased margin bottom */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl md:mx-0 mx-auto"> {/* Added max-width to intro text */}
            Tailored solutions for every business type, crafted to elevate your operational efficiency and customer engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10"> {/* Increased grid gap */}
          {industriesData.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCardDemo;