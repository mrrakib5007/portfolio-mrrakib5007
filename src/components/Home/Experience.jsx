import { FiMapPin, FiGlobe } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      period: "2025 - Present",
      status: "Current",
      role: "Full Stack Engineer",
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
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative ml-2 sm:ml-6 space-y-10 sm:space-y-12">
          {/* Continuous vertical timeline guide */}
          <div className="absolute left-3.5 sm:left-4.5 top-3.5 bottom-3.5 w-0.5 bg-linear-to-b from-primary via-indigo-500/40 to-slate-200 dark:to-slate-800 rounded-full pointer-events-none" />

          {experiences.map((exp, index) => {
            const isCurrent = exp.status === "Current";

            return (
              <div key={index} className="relative pl-11 sm:pl-14 group">
                {/* Timeline Circle Node */}
                <div className="absolute left-3.5 sm:left-4.5 -translate-x-1/2 top-4 z-10 flex items-center justify-center">
                  {isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute h-7 w-7 rounded-full bg-cyan-400 opacity-40" />
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 ring-4 ring-cyan-100 dark:ring-cyan-950/80 shadow-md shadow-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 ring-4 ring-slate-100 dark:ring-slate-950/80 shadow-xs flex items-center justify-center group-hover:border-indigo-500 group-hover:ring-indigo-100 dark:group-hover:ring-indigo-950/50 group-hover:scale-110 transition-all">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 group-hover:bg-indigo-500 transition-colors" />
                    </div>
                  )}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgb(6,182,212,0.12)] hover:border-cyan-400/50 dark:hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${
                        isCurrent
                          ? "text-cyan-700 bg-cyan-50 border-cyan-200 dark:text-primary dark:bg-primary/10 dark:border-primary/20"
                          : "text-slate-600 bg-slate-100 border-slate-200 dark:text-slate-300 dark:bg-slate-800 dark:border-slate-700"
                      }`}
                    >
                      {exp.period}
                    </span>

                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${
                        isCurrent
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30"
                          : "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-400 dark:border-indigo-500/30"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1.5">
                    <span className="text-slate-800 dark:text-slate-200 font-semibold">
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      {exp.isRemote ? (
                        <FiGlobe className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <FiMapPin className="w-3.5 h-3.5 text-primary" />
                      )}
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
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
