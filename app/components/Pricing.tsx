'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';

interface Feature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceDetails?: string;
  features: Feature[];
  buttonText: string;
  buttonLink: string;
  buttonClass?: string;
  isMostPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small businesses getting started',
    price: 'Free',
    priceDetails: 'Forever',
    features: [
      { text: 'Up to 100 bills per month' },
      { text: 'Basic inventory management' },
      { text: 'Customer tracking' },
      { text: 'Email support' },
      { text: 'Mobile access' },
    ],
    buttonText: 'Start Free',
    buttonLink: '/signup',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For growing businesses that need more power',
    price: '$29',
    priceDetails: 'per month, billed annually',
    features: [
      { text: 'Unlimited bills' },
      { text: 'Advanced inventory & variants' },
      { text: 'SMS notifications' },
      { text: 'Priority support 24/7' },
      { text: 'Analytics dashboard' },
      { text: 'API access' },
      { text: 'Custom branding' },
    ],
    buttonText: 'Start Pro Trial',
    buttonLink: '/signup?plan=pro',
    buttonClass: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl',
    isMostPopular: true,
  },
];

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const planRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [planVisibilities, setPlanVisibilities] = useState<boolean[]>(
    new Array(pricingPlans.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
            planRefs.current.forEach((planRef, index) => {
              if (planRef === entry.target) {
                setPlanVisibilities((prev) => {
                  const newVisibilities = [...prev];
                  newVisibilities[index] = true;
                  return newVisibilities;
                });
              }
            });
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    planRefs.current.forEach((planRef) => {
      if (planRef) observer.observe(planRef);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      planRefs.current.forEach((planRef) => {
        if (planRef) observer.unobserve(planRef);
      });
    };
  }, []);

  return (
    <div className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div
          ref={sectionRef}
          className={`
            text-center mb-20 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600">Pricing Plans</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. No hidden fees, just clear value.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const isHovered = hoveredPlan === plan.id;
            const isPro = plan.isMostPopular;
            
            return (
              <div
                key={plan.id}
                ref={(el) => { planRefs.current[index] = el; }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{ transitionDelay: planVisibilities[index] ? `${index * 0.15}s` : '0s' }}
                className={`
                  relative rounded-3xl transition-all duration-500
                  ${planVisibilities[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${isPro ? '' : ''}
                  ${isHovered ? 'scale-105' : 'scale-100'}
                `}
              >
                {/* Popular Badge */}
                {plan.isMostPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-semibold ">
                      <Zap className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div
                  className={`
                    h-full p-10 rounded-3xl border-2 transition-all duration-300
                    ${isPro 
                      ? `bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 
                         ${isHovered ? 'shadow-2xl shadow-indigo-200/50 border-indigo-300' : 'shadow-xl shadow-indigo-100/50'}` 
                      : `bg-white border-gray-200 
                         ${isHovered ? 'shadow-xl shadow-gray-200/50 border-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200' : 'shadow-lg'}`
                    }
                  `}
                >
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.priceDetails && (
                        <span className="text-gray-500 text-lg">
                          {plan.id === 'starter' ? '' : '/mo'}
                        </span>
                      )}
                    </div>
                    {plan.priceDetails && (
                      <p className="text-gray-500 mt-2">
                        {plan.priceDetails}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className={`
                          flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
                          ${isPro ? 'bg-indigo-100' : 'bg-gray-100'}
                        `}>
                          <Check className={`w-4 h-4 ${isPro ? 'text-indigo-600' : 'text-gray-600'}`} />
                        </div>
                        <span className="text-base leading-relaxed">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={plan.buttonLink}
                    className={`
                      block w-full py-4 px-6 rounded-xl font-semibold text-lg text-center
                      transition-all duration-300
                      ${isPro
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1'
                      }
                    `}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Footer */}
        <div
          className={`
            mt-16 text-center transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <p className="text-gray-600 mb-6">
            Trusted by over 500+ businesses worldwide
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;