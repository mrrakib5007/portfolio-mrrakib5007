"use client";

import { useState } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaBootstrap, 
  FaPython, 
  FaGitAlt, 
  FaFigma, 
  FaCss3Alt
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiRedux, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiFirebase, 
  SiVercel, 
  SiNetlify, 
  SiCloudinary,
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      category: "frontend",
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="w-6 h-6 text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-slate-900 dark:text-white" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="w-6 h-6 text-purple-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-6 h-6 text-purple-500" /> },
        { name: "HTML5", icon: <SiHtml5 className="w-6 h-6 text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-6 h-6 text-blue-500" /> },
      ],
    },
    {
      category: "backend",
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-emerald-500" /> },
        { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-slate-900 dark:text-slate-200" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-emerald-400" /> },
        { name: "MongoDB Atlas", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
        { name: "Python", icon: <FaPython className="w-6 h-6 text-yellow-500" /> },
      ],
    },
    {
      category: "tools",
      title: "Tools & Ecosystem",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="w-6 h-6 text-orange-500" /> },
        { name: "Postman", icon: <SiPostman className="w-6 h-6 text-orange-400" /> },
        { name: "Firebase", icon: <SiFirebase className="w-6 h-6 text-amber-400" /> },
        { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-slate-900 dark:text-white" /> },
        { name: "Netlify", icon: <SiNetlify className="w-6 h-6 text-cyan-400" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="w-6 h-6 text-blue-400" /> },
        { name: "Figma", icon: <FaFigma className="w-6 h-6 text-pink-400" /> },
        { name: "Photoshop", icon: <TbBrandAdobePhotoshop className="w-6 h-6 text-sky-400" /> },
      ],
    },
  ];

  const filteredCategories = activeTab === "all" 
    ? skillCategories 
    : skillCategories.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 gap-1.5 shadow-xs">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "tools", label: "Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-brand-gradient text-white shadow-md shadow-primary/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold px-1">
                {group.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3.5 group shadow-xs hover:shadow-lg hover:shadow-cyan-950/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
