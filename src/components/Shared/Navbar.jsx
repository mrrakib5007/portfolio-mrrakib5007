"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Logo from "@/components/Shared/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark";
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;
    setIsDark(nextThemeIsDark);
    if (nextThemeIsDark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  };

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "#home", id: "home" },
      { label: "About", href: "#about", id: "about" },
      { label: "Skills", href: "#skills", id: "skills" },
      { label: "Projects", href: "#projects", id: "projects" },
      { label: "Experience", href: "#experience", id: "experience" },
      { label: "Reviews", href: "#reviews", id: "reviews" },
      { label: "FAQ", href: "#faq", id: "faq" },
      { label: "Contact", href: "#contact", id: "contact" },
    ],
    [],
  );

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    isClickScrolling.current = true;

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const elem = document.getElementById(targetId);
      if (elem) {
        const yOffset = -75;
        const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    if (isOpen) setIsOpen(false);

    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (isClickScrolling.current) return;

      const scrollPosition = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-xl dark:shadow-cyan-950/10"
            : "bg-white/80 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-200/70 dark:border-slate-800/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="relative w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-1.5 shadow-sm group-hover:border-primary/50 group-hover:shadow-primary/25 transition-all duration-300">
              <Logo
                width={40}
                height={40}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1 leading-tight">
                Developer <span className="text-primary">Rakib</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-widest font-semibold uppercase">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Smooth Pill Switching */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-md shadow-cyan-500/25 scale-[1.02]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 sm:gap-4">
            <button
              suppressHydrationWarning
              onClick={toggleTheme}
              type="button"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:border-primary/50 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            >
              {isDark ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-slate-700" />}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="bg-brand-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all group cursor-pointer"
            >
              <IoChatboxEllipsesOutline className="w-4 h-4 text-white" /> Let&apos;s Talk
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer shadow-xs"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 sm:w-80 bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800/80 backdrop-blur-xl p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-1">
                <Logo width={28} height={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  Developer <span className="text-primary">Rakib</span>
                </span>
                <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors cursor-pointer"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 mt-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-brand-gradient text-white font-semibold shadow-md shadow-primary/25"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
          <button
            suppressHydrationWarning
            onClick={toggleTheme}
            type="button"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="w-full mb-3 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer"
          >
            {isDark ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-slate-700" />}
            {isDark ? "Light theme" : "Dark theme"}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-brand-gradient w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-all cursor-pointer"
          >
            <IoChatboxEllipsesOutline className="w-4 h-4 text-white" />
            Let&apos;s Talk
          </a>
        </div>
      </aside>
    </>
  );
}
