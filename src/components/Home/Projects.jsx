"use client";

import { useState } from "react";
import Link from "next/link";
import { FiLayers, FiFolder } from "react-icons/fi";
import ProjectCard from "@/components/Cards/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectList = [
    {
      title: "Dainik Sangbad (দৈনিক সংবাদ)",
      category: "nextjs",
      badge: "News Portal",
      image: "https://i.ibb.co.com/QFvVDvyd/dainik-sangbad.jpg",
      description:
        "A modern, fast, and fully responsive Bengali online news portal application built with Next.js (App Router) and Tailwind CSS. Features live weather, real-time prayer timings, category filtering, Better Auth login/signup, and proxy-secured profile routing.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "SweetAlert2"],
      liveUrl: "https://dainik-sangbad.vercel.app",
      githubUrl: "https://github.com/mrrakib5007/dainik-sangbad",
    },
    {
      title: "ABIRA Logistics & Transport Service",
      category: "nextjs",
      badge: "Supply Chain",
      image: "https://i.ibb.co.com/xtbKSnSG/abira-fright-service.jpg",
      description:
        "A high-performance freight and supply chain business web platform. Showcases multimodal cargo movement, customs clearance brokerage, warehousing operations, and seamless quote acquisition flows.",
      tags: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion", "Next Themes", "SweetAlert2"],
      liveUrl: "https://abira-logistics.netlify.app/",
      githubUrl: "https://github.com/mrrakib5007/abira-logistics",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((project) => project.category === activeFilter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "nextjs", label: "Next.js" },
    { id: "fullstack", label: "MERN / Full Stack" },
    { id: "frontend", label: "Frontend" },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-900/30 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? "bg-brand-gradient text-white shadow-md shadow-primary/25"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center rounded-3xl border border-dashed border-slate-800 bg-slate-950/40 px-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-500 mb-4 shadow-inner">
              <FiFolder className="w-8 h-8 text-primary/60" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">No Projects Found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-sm">
              No projects found in this category yet. New projects will be updated soon.
            </p>
          </div>
        )}

        {filteredProjects.length > 6 && (
          <div className="mt-14 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:border-primary/50 font-semibold text-xs tracking-wider uppercase transition-all"
            >
              <FiLayers className="w-4 h-4 text-primary" />
              View All Projects
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}