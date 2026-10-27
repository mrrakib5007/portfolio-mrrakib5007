"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your typical development process?",
      answer:
        "My process begins with a detailed requirement audit and UI architecture draft. Next, I set up a modular frontend structure with reusable Tailwind and React/Next.js components, integrate secured Express/Node.js endpoints, design schema in MongoDB, and run rigorous cross-browser testing before deploying to production on Vercel or cloud infrastructure.",
    },
    {
      question: "Can you work directly with Figma design files?",
      answer:
        "Yes, absolutely! I regularly translate complex Figma components, auto-layouts, tokens, and prototypes directly into pixel-perfect, mobile-responsive Tailwind and React code without skipping spacing, micro-interactions, or responsive constraints.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes. I provide dedicated warranty periods post-launch to address any edge-case bug fixes, performance monitoring, database schema revisions, and incremental feature rollouts according to client needs.",
    },
    {
      question: "How do you ensure application loading performance?",
      answer:
        "I utilize code-splitting, Next.js Server Components, lazy-loading of heavy media assets via Cloudinary, gzip/brotli compression, lean bundle analysis, and MongoDB query indexing to maintain sub-second load times and 95+ Google Lighthouse scores.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Clarity &amp; Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 overflow-hidden transition-all duration-300 hover:border-primary/40 shadow-xs"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-primary dark:text-slate-200 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden bg-slate-50/70 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800/60">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 px-6 py-5 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
