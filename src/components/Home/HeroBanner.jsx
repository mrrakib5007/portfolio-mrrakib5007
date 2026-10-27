"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiDownload, FiMail, FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const roles = [
  "Full Stack Developer",
  "Next.js + Typescript Expert",
  "React & Node.js Developer",
  "Building High-Performance Web Apps",
  "Robotics and Automation Learner",
];

export default function HeroBanner() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayedRole === currentRole) {
      // Completed typing current word: pause before backspacing
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayedRole === "") {
      // Completed deleting: switch to next role after a short pause
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 400);
    } else if (isDeleting) {
      // Deleting characters
      timeout = window.setTimeout(() => {
        setDisplayedRole((prev) => prev.slice(0, -1));
      }, 45);
    } else {
      // Typing characters
      timeout = window.setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }, 85);
    }

    return () => window.clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-175 h-112 bg-linear-to-tr from-cyan-500/15 via-indigo-600/15 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for Hire
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
              Hi, I&apos;m
            </h2>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1 leading-[1.15]">
              Mahabub Rahman Rakib
            </h1>

            {/* Typewriter animated role */}
            <div className="mt-3 flex min-h-9 items-center justify-center lg:justify-start gap-1">
              <span
                suppressHydrationWarning
                className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-sky-500 to-indigo-500 dark:from-cyan-400 dark:via-sky-400 dark:to-indigo-400 text-left min-h-8"
                aria-live="polite"
              >
                {displayedRole}
                <span className="typing-caret ml-1 text-cyan-500" aria-hidden="true" />
              </span>
            </div>

            <p className="mt-6 text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              I build fully responsive web applications using the MERN stack and Next.js. My
              focus is to create clean designs, smooth user experiences, and
              innovative digital solutions.
            </p>

            {/* CTA Buttons: Download CV & Contact Me */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1J0J7YQzT2Boyo3RlF_FZRZG8rnscnKHy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gradient w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                <FiDownload className="w-4 h-4 text-white" />
                Download CV
              </a>

              {/* Contact Me button with hover gradient border & gradient text */}
              <Link
                href="#contact"
                className="contact-gradient-btn w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FiMail className="contact-icon w-4 h-4 text-primary transition-colors" />
                <span className="contact-text">Contact Me</span>
              </Link>
            </div>

            {/* Social Icons row below buttons */}
            <div className="mt-7 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mr-1">
                Follow Me:
              </span>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mrrakib5007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn: mrrakib5007"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-[#0a66c2] dark:text-slate-300 hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white dark:hover:bg-[#0a66c2] dark:hover:border-[#0a66c2] dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mrrakib5007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub: mrrakib5007"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-900 hover:border-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-700 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
              >
                <FiGithub className="w-4 h-4" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/mrrakib5007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                title="Twitter / X: @mrrakib5007"
                className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-900 hover:border-slate-900 hover:text-white dark:hover:bg-slate-800 dark:hover:border-slate-700 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs cursor-pointer"
              >
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Image (Clean card without overlay badges) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80">
              {/* Soft ambient colorful blur halo behind the card */}
              <div className="absolute -inset-2 rounded-4xl bg-linear-to-tr from-cyan-400/20 via-sky-300/15 to-indigo-500/20 dark:from-cyan-500/25 dark:via-indigo-600/20 dark:to-purple-600/20 blur-2xl pointer-events-none" />

              {/* Main Profile Showcase Card */}
              <div className="relative rounded-3xl p-2 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-cyan-950/5 dark:shadow-black/60 group">
                <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-linear-to-b from-slate-100/70 via-slate-50/50 to-white dark:from-slate-800/80 dark:via-slate-900/90 dark:to-slate-950 flex items-end justify-center border border-slate-100 dark:border-slate-800/50">
                  {/* Subtle ambient lighting inside the card */}
                  <div className="absolute top-4 w-48 h-48 rounded-full bg-cyan-400/15 dark:bg-cyan-500/15 blur-2xl pointer-events-none" />

                  {/* Profile photo: sharp, crisp */}
                  <Image
                    src="/developer-profile.png"
                    alt="Mahabub Rahman Rakib"
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-contain object-bottom scale-100 filter drop-shadow-[0_12px_24px_rgba(15,23,42,0.14)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-102"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
