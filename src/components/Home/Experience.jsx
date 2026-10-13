"use client";

import { FiMapPin, FiGlobe } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      period: "2025 - Present",
      status: "Current",
      role: "Web Developer (MERN)",
      company: "It Lancer BD",
      location: "Lakshmipur, BD",
      isRemote: false,
      description:
        "Contributed to the development of web applications while gaining hands-on experience with industry best practices.",
    },
    {
      period: "2023 - 2025",
      status: "Contract",
      role: "Full Stack Developer",
      company: "Freelance",
      location: "Online",
      isRemote: true,
      description:
        "Developed and maintained several client projects using the MERN stack, collaborating with UX/UI designers to build modern, user-friendly interfaces.",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp, index) => {
            const isCurrent = exp.status === "Current";

            return (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Circle Bullet */}
                <div
                  className={`absolute -left-2.25 top-1.5 w-4 h-4 rounded-full ring-4 ring-slate-950 group-hover:scale-125 transition-transform ${
                    isCurrent ? "bg-primary" : "bg-slate-700"
                  }`}
                />

                {/* Experience Card */}
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-primary/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded border ${
                        isCurrent
                          ? "text-primary bg-primary/10 border-primary/20"
                          : "text-slate-400 bg-slate-800 border-slate-700"
                      }`}
                    >
                      {exp.period}
                    </span>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                        isCurrent
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                          : "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-1">
                    <span className="text-slate-300 font-semibold">
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      {exp.isRemote ? (
                        <FiGlobe className="w-3 h-3 text-primary" />
                      ) : (
                        <FiMapPin className="w-3 h-3 text-primary" />
                      )}
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}