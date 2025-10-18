'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is my data safe with Billzzy?',
    answer:
      'Absolutely. Billzzy is built on secure AWS infrastructure with encryption both in transit and at rest — ensuring your data stays yours, always. We also perform regular security audits to keep your business safe and protected from any potential threats.',
  },
  {
    question: 'Can I manage products with different sizes and colors?',
    answer:
      'Yes! Billzzy supports full product variants — including size, color, and style — each tracked separately for inventory accuracy. It\'s made for real-world retail needs & giving you complete control over your product catalog, for managing your inventory.',
  },
  {
    question: 'Is it difficult to get started?',
    answer:
      'Not at all! You can create your account, add products, and generate your first bill in under 5 minutes, with not mre than a penny! Our guided onboarding walks you through every step, ensuring a smooth and hassle-free setup experience for your business.',
  },
  {
    question: 'Who is Billzzy for?',
    answer:
      'Billzzy is designed for small businesses, boutique owners, and shop managers who want powerful billing without the complexity of traditional ERP tools. It\'s perfect for anyone looking to streamline their operations and manage their business efficiently.',
  },
  {
    question: 'Can I access Billzzy on mobile?',
    answer:
      'Yes! Billzzy works seamlessly across desktop, tablet, and mobile browsers — so your business moves with you, wherever you go. Access all features on any device and manage your operations on the move with complete flexibility and always keep tracking them!',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-cycle through FAQs
  useEffect(() => {
    if (isPaused) {
      setProgress(0);
      return;
    }

    setProgress(0);
    const duration = 5000; // 5 seconds
    const intervalTime = 50; // Update every 50ms
    const increment = (intervalTime / duration) * 100;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    const cycleInterval = setInterval(() => {
      setOpenIndex((prevIndex) => (prevIndex + 1) % faqs.length);
      setProgress(0);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(cycleInterval);
    };
  }, [isPaused, openIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === sectionRef.current) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleFAQClick = (index: number) => {
    setOpenIndex(index);
    setIsPaused(true);
    setProgress(0);
    
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const goToPrevious = () => {
    setOpenIndex((prevIndex) => (prevIndex - 1 + faqs.length) % faqs.length);
    setIsPaused(true);
    setProgress(0);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setOpenIndex((prevIndex) => (prevIndex + 1) % faqs.length);
    setIsPaused(true);
    setProgress(0);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div 
          ref={sectionRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions? <br/> <span className='text-indigo-600 font-bold'> We've Got Solutions!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Billzzy and how it can transform your business
          </p>
        </div>

        {/* Horizontal FAQ Container */}
        <div className="relative">
          {/* FAQ Cards Container */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
            {/* Questions List */}
            <div className="w-full md:w-2/5 space-y-3 md:min-h-0" style={{ minHeight: '280px' }}>
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleFAQClick(index)}
                  className={`
                    w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-300
                    ${openIndex === index 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200' 
                      : 'bg-white border-gray-200 text-gray-900 hover:border-indigo-300 hover:bg-indigo-50'
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`text-sm md:text-base font-semibold ${
                      openIndex === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronRight className={`flex-shrink-0 w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-90 text-white' : 'text-indigo-600'
                    }`} />
                  </div>
                  
                  {/* Progress Bar for Active Item */}
                  {openIndex === index && (
                    <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Answer Display */}
            <div className="w-full md:w-3/5 bg-white rounded-2xl border-2 border-gray-100 p-8 md:p-10 shadow-lg min-h-[300px] md:min-h-[400px] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {faqs[openIndex].question}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {faqs[openIndex].answer}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={goToPrevious}
                  className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-all duration-300 font-medium"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Progress Indicator */}
                <div className="flex gap-2">
                  {faqs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(index)}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        ${openIndex === index ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-300 hover:bg-indigo-300'}
                      `}
                      aria-label={`Go to FAQ ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-all duration-300 font-medium"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;