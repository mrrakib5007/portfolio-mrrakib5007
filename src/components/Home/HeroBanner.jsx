"use client";

import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiMail, FiCode } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section 
      id="home" 
      className="relative py-16 md:py-20 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-175 h-112 bg-linear-to-tr from-cyan-500/20 via-indigo-600/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for Hire
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
              Hi, I&apos;m
            </h2>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mt-1 leading-[1.15]">
              Mahabub Rahman Rakib
            </h1>

            <div className="mt-3 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400">
                Full Stack Developer
              </span>
            </div>

            <p className="mt-6 text-base text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
              I build fully responsive web applications using the MERN stack. My focus is to create clean designs, smooth user experiences, and innovative digital solutions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1J0J7YQzT2Boyo3RlF_FZRZG8rnscnKHy/view?usp=sharing"    
                target="_blank"            
                className="bg-brand-gradient w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>

              <Link
                href="#contact"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:border-primary/50 hover:bg-slate-850 hover:-translate-y-0.5 transition-all"
              >
                <FiMail className="w-4 h-4 text-primary" />
                Contact Me
              </Link>

              <a
                href="https://wa.me/8801991465007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/20 hover:-translate-y-0.5 transition-all"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-68 sm:w-76">
              
              <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-cyan-500/25 to-indigo-600/25 blur-2xl -rotate-3" />
              
              <div className="relative rounded-md p-1.5 bg-linear-to-b from-primary/30 via-slate-800/80 to-slate-900/60 shadow-2xl backdrop-blur-xl border border-slate-800/80">
                <div className="relative w-full aspect-35/42 rounded-2.5xl overflow-hidden bg-radial-[at_50%_40%] from-slate-800/90 via-slate-950 to-slate-950 flex items-end justify-center">
                  
                  <div className="absolute top-8 w-40 h-40 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none" />

                  <Image
                    src="/developer-profile.png"
                    alt="Mahabub Rahman Rakib"
                    fill
                    sizes="(max-width: 640px) 272px, 304px"
                    className="object-contain object-bottom scale-100 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    priority
                  />

                  <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="absolute -bottom-4 left-3 right-3 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 shadow-xl z-20 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Specialization
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    MERN & Next.js Specialist
                  </p>
                </div>
                <span className="h-8 w-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <FiCode className="w-4 h-4" />
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}