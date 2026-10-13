"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiMail, FiPhone, FiArrowUp } from "react-icons/fi";

const emptySubscribe = () => () => {};

export default function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 shadow-lg shadow-cyan-500/10">
              <Image
                src="/logo_white.png"
                alt="Developer Rakib"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-base text-white tracking-tight flex items-center gap-1">
                Developer<span className="text-primary">Rakib</span>
              </span>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Full Stack Engineer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
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

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mrrakib5007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:mrrakib5007@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/8801991465007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <FiPhone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-primary hover:bg-primary hover:text-slate-950 flex items-center justify-center transition-all hover:-translate-y-0.5 cursor-pointer ml-1"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {currentYear} Mahabub Rahman Rakib. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}