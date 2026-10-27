import {
  FiUser,
  FiMail,
  FiCalendar,
  FiMapPin,
  FiDownload,
  FiSend,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiCompass,
  FiHeart,
} from "react-icons/fi";
import Link from "next/link";

export default function About() {
  const personalInfo = [
    {
      icon: <FiUser className="w-5 h-5" />,
      label: "Name",
      value: "Mahabub Rahman Rakib",
      color: "text-primary bg-primary/10 border-primary/20",
      fullWidth: true,
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      value: "mrrakib5007@gmail.com",
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20",
      isEmail: true,
      fullWidth: true,
    },
    {
      icon: <FiCalendar className="w-5 h-5" />,
      label: "Age",
      value: "25 Years",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: "From",
      value: "Dhaka, Bangladesh",
      color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20",
    },
  ];

  const hobbies = [
    {
      icon: <FiCpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      title: "Robotics & Automation",
      desc: "Curious learner exploring microcontrollers and automation hardware.",
    },
    {
      icon: <FiHeart className="w-4 h-4 text-rose-500" />,
      title: "Cricket & Sports",
      desc: "Avid cricket enthusiast who loves teamwork and outdoor energy.",
    },
    {
      icon: <FiCompass className="w-4 h-4 text-amber-500" />,
      title: "Traveling & Nature",
      desc: "Exploring new places across Bangladesh to refresh creativity.",
    },
    {
      icon: <FiCode className="w-4 h-4 text-emerald-500" />,
      title: "Open Source & Tech Blogs",
      desc: "Passionate about testing cutting-edge developer tools and libraries.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Split: Introduction & Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Intro & Programming Journey */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
              Hello! I&apos;m{" "}
              <span className="text-primary">Mahabub Rahman Rakib</span>
            </h3>

            {/* Programming Journey */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              My journey into programming began over 2 years ago fueled by a genuine fascination with how web applications empower people and streamline everyday tasks. From crafting my first lines of JavaScript to architecting full-stack Next.js and MERN stack platforms, coding has grown from a passion into a dedicated engineering craft.
            </p>

            {/* Type of Work I Enjoy */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              I genuinely enjoy building production-grade web products that solve practical problems- whether it&apos;s an all-in-one IT utility portal, a high-traffic news platform, or a seamless logistics management system. I take pride in clean controller logic, scalable MongoDB database structures, and creating buttery-smooth, accessible user interfaces with Tailwind CSS and Next.js.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1J0J7YQzT2Boyo3RlF_FZRZG8rnscnKHy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gradient w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                <FiDownload className="w-4 h-4 text-white" />
                Download CV
              </a>

              <a
                href="mailto:mrrakib5007@gmail.com"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-850 hover:-translate-y-0.5 transition-all shadow-xs cursor-pointer"
              >
                <FiSend className="w-4 h-4 text-primary" />
                Quick Email
              </a>
            </div>
          </div>

          {/* Right Column: Personal Info Cards & Availability */}
          <div className="lg:col-span-5 space-y-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-primary/40 transition-all hover:-translate-y-0.5 group flex items-center gap-3.5 shadow-xs ${
                    item.fullWidth ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-tight">
                      {item.label}
                    </p>
                    {item.isEmail ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary mt-0.5 leading-snug block transition-colors"
                        title={item.value}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <h4
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 leading-snug"
                        title={item.value}
                      >
                        {item.value}
                      </h4>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-card p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <FiBriefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    Full Stack Developer
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    Open for remote &amp; contract roles
                  </p>
                </div>
              </div>

              <Link
                href="#contact"
                className="hidden sm:inline-flex text-xs font-bold text-primary hover:text-cyan-600 dark:hover:text-cyan-300 items-center gap-1 transition-colors shrink-0"
              >
                Hire Me &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Showcase: Hobbies & Personal Interests (Requirement 5) */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Beyond The Code
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Hobbies &amp; Personal Interests
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-primary/40 transition-all hover:-translate-y-1 group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                    {hobby.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {hobby.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {hobby.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
