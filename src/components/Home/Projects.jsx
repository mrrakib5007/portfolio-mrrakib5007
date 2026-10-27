"use client";

import { useState } from "react";
import Link from "next/link";
import { FiLayers, FiFolder } from "react-icons/fi";
import ProjectCard from "@/components/Cards/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "nextjs", label: "Next.js" },
    { id: "fullstack", label: "MERN / Full Stack" },
    { id: "frontend", label: "Frontend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.categories)
            ? project.categories.includes(activeFilter)
            : project.category === activeFilter,
        );

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
              Featured Projects
            </h2>
          </div>

          {/* Filter Tabs: Strict fixed 1px border on all states to eliminate layout shift / button jitter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`project-tab-button inline-flex items-center justify-center min-h-9 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors duration-150 ${
                    isActive
                      ? "bg-brand-gradient text-white border border-transparent shadow-md shadow-primary/25"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-96">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 px-6 min-h-80 shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 mb-4 shadow-inner">
              <FiFolder className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No Projects Found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-sm">
              No projects found in this category yet. New projects will be updated soon.
            </p>
          </div>
        )}

        {filteredProjects.length > 6 && (
          <div className="mt-14 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 hover:border-primary/50 font-semibold text-xs tracking-wider uppercase transition-all shadow-xs"
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
