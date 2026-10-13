"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "/", id: "home" },
      { label: "About", href: "#about", id: "about" },
      { label: "Skills", href: "#skills", id: "skills" },
      { label: "Projects", href: "#projects", id: "projects" },
      { label: "Experience", href: "#experience", id: "experience" },
      { label: "Reviews", href: "#reviews", id: "reviews" },
      { label: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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
      ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-cyan-950/10"
      : "bg-slate-950/60 backdrop-blur-sm border-b border-slate-800/40"
  }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1.5 shadow-lg shadow-cyan-500/10 group-hover:border-primary/50 group-hover:shadow-primary/25 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Rakib Logo"
                width={40}
                height={40}
                className="object-contain invert brightness-200 contrast-125 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1 leading-tight">
                Developer <span className="text-primary">Rakib</span>
              </span>
              <span className="text-[10px] font-mono text-white tracking-widest font-semibold uppercase">
                Full Stack Engineer
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-gradient text-white shadow-md shadow-primary/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="bg-brand-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all group"
            >
              <IoChatboxEllipsesOutline className="w-4 h-4" /> Let&apos;s Talk
              
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-70 sm:w-80 bg-slate-950/95 border-l border-slate-800/80 backdrop-blur-xl p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center p-1">
                <Image
                  src="/logo.png"
                  alt="Rakib Logo"
                  width={28}
                  height={28}
                  className="object-contain invert brightness-200"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-white">
                  Developer <span className="text-primary">Rakib</span>
                </span>
                <span className="text-[9px] font-mono text-white uppercase">
                  Full Stack Engineer
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 mt-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-subtle border border-primary/40 text-primary font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800/80">
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-brand-gradient w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-all"
          >
            <IoChatboxEllipsesOutline className="w-4 h-4" />
            Let&apos;s Talk
          </Link>
        </div>
      </aside>
    </>
  );
}