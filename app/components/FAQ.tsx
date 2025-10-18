'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is my data safe with Billzzy?',
    answer:
      'Absolutely. Billzzy is built on secure AWS infrastructure with encryption both in transit and at rest — ensuring your data stays yours, always. We also perform regular security audits to keep your business safe.',
  },
  {
    question: 'Can I manage products with different sizes and colors?',
    answer:
      'Yes! Billzzy supports full product variants — including size, color, and style — each tracked separately for inventory accuracy. It\'s made for real-world retail needs.',
  },
  {
    question: 'Is it difficult to get started?',
    answer:
      'Not at all! You can create your account, add products, and generate your first bill in under 5 minutes. Our guided onboarding walks you through every step.',
  },
  {
    question: 'Who is Billzzy for?',
    answer:
      'Billzzy is designed for small businesses, boutique owners, and shop managers who want powerful billing without the complexity of traditional ERP tools.',
  },
  {
    question: 'Can I access Billzzy on mobile?',
    answer:
      'Yes! Billzzy works seamlessly across desktop, tablet, and mobile browsers — so your business moves with you, wherever you go.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // Start with first FAQ open
  const [isVisible, setIsVisible] = useState(false);
  const [faqVisibilities, setFaqVisibilities] = useState<boolean[]>(new Array(faqs.length).fill(false));
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
            faqRefs.current.forEach((faqRef, index) => {
              if (faqRef === entry.target) {
                setFaqVisibilities(prev => {
                  const newVisibilities = [...prev];
                  newVisibilities[index] = true;
                  return newVisibilities;
                });
              }
            });
          }
        });
      },
      { rootMargin: '0px', threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    faqRefs.current.forEach(faqRef => {
      if (faqRef) observer.observe(faqRef);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      faqRefs.current.forEach(faqRef => {
        if (faqRef) observer.unobserve(faqRef);
      });
    };
  }, []);

  const handleFAQClick = (index: number) => {
    setOpenIndex(index);
    setIsPaused(true);
    setProgress(0);
    
    // Resume auto-cycling after 10 seconds of user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section className="max-h-screen overflow-hidden md:py-36 py-0">
      <div className="max-w-4xl max-h-screen mx-auto px-6 p-12 md:px-8">
        
        {/* Header Section */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
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

        {/* FAQ Items */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isVisible = faqVisibilities[index];
            
            return (
              <div
                key={index}
                ref={el => { faqRefs.current[index] = el }}
                className={`
                  bg-white rounded-2xl border border-gray-100 overflow-hidden
                  transition-all duration-700 hover:border-indigo-100
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${isOpen ? 'shadow-lg shadow-indigo-100/50' : 'shadow-sm'}
                `}
                style={{ 
                  transitionDelay: isVisible ? `${index * 0.1}s` : '0s' 
                }}
              >
                <button
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between text-left group"
                  onClick={() => handleFAQClick(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`
                    text-lg md:text-xl font-semibold pr-8 transition-colors duration-300
                    ${isOpen ? 'text-indigo-600' : 'text-gray-900 group-hover:text-indigo-600'}
                  `}>
                    {faq.question}
                  </span>
                  
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                    transition-all duration-300
                    ${isOpen ? 'bg-indigo-600 rotate-180' : 'bg-indigo-50 group-hover:bg-indigo-100'}
                  `}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-indigo-600" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                {isOpen && (
                  <div className="h-1 bg-gray-100 w-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-8">
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
      </div>
    </section>
  );
};

export default FAQSection;