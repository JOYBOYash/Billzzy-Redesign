'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my data safe with Billzzy?",
    answer:
      "Absolutely. Billzzy is built on secure AWS infrastructure with encryption both in transit and at rest — ensuring your data stays yours, always. We also perform regular security audits to keep your business safe.",
  },
  {
    question: "Can I manage products with different sizes and colors?",
    answer:
      "Yes! Billzzy supports full product variants — including size, color, and style — each tracked separately for inventory accuracy. It's made for real-world retail needs.",
  },
  {
    question: "Is it difficult to get started?",
    answer:
      "Not at all! You can create your account, add products, and generate your first bill in under 5 minutes. Our guided onboarding walks you through every step.",
  },
  {
    question: "Who is Billzzy for?",
    answer:
      "Billzzy is designed for small businesses, boutique owners, and shop managers who want powerful billing without the complexity of traditional ERP tools.",
  },
  {
    question: "Can I access Billzzy on mobile?",
    answer:
      "Yes! Billzzy works seamlessly across desktop, tablet, and mobile browsers — so your business moves with you, wherever you go.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.10,
        duration: 0.62,
        ease: [0.18, 0.44, 0.29, 0.96]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="border-b border-neutral-800/70 hover:border-cyan-400/30 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-6 text-left group focus:outline-none rounded-lg"
      >
        <h3 className="text-lg md:text-xl font-medium text-neutral-100 group-hover:text-cyan-400 transition-colors duration-200">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 16 }}
          className="ml-4"
        >
          <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-150" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faqanswer"
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{
              duration: 0.47,
              ease: [0.18, 0.7, 0.34, 0.96]
            }}
            className="overflow-hidden pb-4 pl-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{
                duration: 0.34,
                ease: [0.32, 0.72, 0.21, 1]
              }}
              className=" rounded-lg p-3"
            >
              <p className="text-neutral-400 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-6 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.18 }}
      />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 0.7, 0.33, 1.02] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Got a question? We’ve got honest answers — straight from the team that built Billzzy.
          </p>
        </motion.div>

        <div className="divide-y divide-neutral-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* subtle CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut", delay: 0.32 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 mb-3">
            Didn’t find what you’re looking for?
          </p>
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-semibold rounded-full shadow-md transition-all hover:scale-105">
            Chat with Support →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
