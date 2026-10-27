"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/Shared/Logo";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-12 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-900">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-1.5 shadow-sm">
              <Logo width={36} height={36} className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
                Developer<span className="text-primary">Rakib</span>
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons (First icon: LinkedIn - username: mrrakib5007) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* 1. LinkedIn (mrrakib5007) */}
            <a
              href="https://www.linkedin.com/in/mrrakib5007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile - mrrakib5007"
              title="LinkedIn: mrrakib5007"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#0a66c2] dark:text-slate-300 hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white dark:hover:bg-[#0a66c2] dark:hover:border-[#0a66c2] dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            {/* 2. GitHub */}
            <a
              href="https://github.com/mrrakib5007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-900 hover:border-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-700 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
            >
              <FiGithub className="w-4 h-4" />
            </a>

            {/* 3. Email */}
            <a
              href="mailto:mrrakib5007@gmail.com"
              aria-label="Send Email"
              title="Send Email"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-cyan-700 dark:text-slate-300 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:border-cyan-600 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
            >
              <FiMail className="w-4 h-4" />
            </a>

            {/* 4. WhatsApp */}
            <a
              href="https://wa.me/8801991465007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              title="WhatsApp Contact"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#16a34a] dark:text-slate-300 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:border-[#25D366] dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>

            {/* 5. Scroll to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to top"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-primary hover:bg-primary hover:border-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary dark:hover:text-slate-950 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer ml-1"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500 dark:text-slate-500">
          <p>
            &copy; {currentYear} Mahabub Rahman Rakib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
