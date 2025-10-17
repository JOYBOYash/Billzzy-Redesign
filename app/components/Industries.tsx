'use client';
import React, { useState } from 'react';

// types.ts
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

// IndustryCard Component
interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={`/industries/${industry.id}`} 
      className="group block relative h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        h-full p-8 
        bg-white border border-gray-100 rounded-2xl 
        transition-all duration-300 ease-out
        relative
        ${isHovered ? 'shadow-xl shadow-indigo-100/50 -translate-y-1 border-indigo-100' : 'shadow-sm'}
      `}>
        
        {/* Background Icon Overlay */}
        {industry.icon && (
          <div className="absolute bottom-0 right-0 w-62 group-hover:w-64 group-hover:h-64 transition ease-in-out h-62 overflow-hidden rounded-br-2xl pointer-events-none">
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
        
        {/* Icon Container
        <div className={`
          w-14 h-14 mb-6 
          bg-gradient-to-br from-blue-50 to-indigo-50
          rounded-xl
          flex items-center justify-center
          transition-all duration-300
          relative z-10
          ${isHovered ? 'scale-110 rotate-3 from-indigo-50 to-indigo-100' : ''}
        `}>
          {industry.icon && (
            <img 
              src={industry.icon} 
              alt={`${industry.title} icon`} 
              className={`w-7 h-7 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
            />
          )}
        </div> */}

        {/* Title */}
        <h3 className={`
          text-2xl font-semibold mb-3 
          transition-colors duration-300
          ${isHovered ? 'text-indigo-600' : 'text-gray-900'}
        `}>
          {industry.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
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

// Demo Component
const IndustryCardDemo = () => {
  return (
    <div className="mt-12 mb-24 md:p-12">
      <div className="w-full p-36 mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600">
            Tailored solutions for every business type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCardDemo;