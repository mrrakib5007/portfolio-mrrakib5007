"use client";

import {
  FiUser,
  FiMail,
  FiCalendar,
  FiMapPin,
  FiDownload,
  FiSend,
  FiBriefcase,
} from "react-icons/fi";
import Link from "next/link";

export default function About() {
  const personalInfo = [
    {
      icon: <FiUser className="w-5 h-5" />,
      label: "Name",
      value: "Mahabub Rahman Rakib",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      value: "mrrakib5007@gmail.com",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      isEmail: true,
    },
    {
      icon: <FiCalendar className="w-5 h-5" />,
      label: "Age",
      value: "25 Years",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: "From",
      value: "Dhaka, Bangladesh",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Hello! I&apos;m{" "}
              <span className="text-primary">Mahabub Rahman Rakib</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              I&apos;m a passionate MERN stack developer with over 2 years of
              experience building dynamic web applications. I specialize in
              creating seamless user experiences with responsive designs and
              robust backend systems.
            </p>

            <p className="text-slate-400 leading-relaxed text-base">
              When I’m not coding, I enjoy exploring new technologies and
              contributing to open source projects. I believe in continuous
              learning and staying up to date with industry trends.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1J0J7YQzT2Boyo3RlF_FZRZG8rnscnKHy/view?usp=sharing"
                target="_blank"
                className="bg-brand-gradient w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="mailto:mrrakib5007@gmail.com"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:border-primary/50 hover:bg-slate-850 hover:-translate-y-0.5 transition-all"
              >
                <FiSend className="w-4 h-4 text-primary" />
                Quick Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-primary/40 transition-all hover:-translate-y-1 group flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider leading-tight">
                      {item.label}
                    </p>
                    <h4
                      className={`text-sm font-bold text-white mt-1 leading-snug truncate ${item.isEmail ? "text-xs sm:text-sm" : ""}`}
                      title={item.value}
                    >
                      {item.value}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <FiBriefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Full Stack Developering
                  </p>
                  <p className="text-xs text-slate-400">
                    Available for contract & remote positions
                  </p>
                </div>
              </div>

              <Link
                href="#contact"
                className="hidden sm:inline-flex text-xs font-bold text-primary hover:text-cyan-300 items-center gap-1.5 transition-colors shrink-0"
              >
                Hire Me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
