"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 dark:shadow-black/40">
      <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800/80">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-primary font-semibold z-10 shadow-xs">
          {project.badge}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-primary/50 flex items-center justify-center gap-2 transition-all hover:text-primary group/btn shadow-xs cursor-pointer"
            >
              <FiGithub className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover/btn:text-primary transition-colors" />
              View Code
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-brand-gradient hover:opacity-95 text-xs font-semibold text-white shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 transition-all group/btn cursor-pointer"
            >
              <FiExternalLink className="w-3.5 h-3.5 text-white group-hover/btn:scale-110 transition-transform" />
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
