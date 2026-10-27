import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiHome,
  FiChevronRight,
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiCheckCircle,
  FiAlertTriangle,
  FiTrendingUp,
  FiCalendar,
  FiUserCheck,
} from "react-icons/fi";
import { projects, getProjectById } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Mahabub Rahman Rakib",
    };
  }

  return {
    title: `${project.title} - Case Study | Mahabub Rahman Rakib`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectDetailPage({ params }) {
  return (
    <main className="min-h-screen pt-8 pb-24 bg-white dark:bg-slate-950 transition-colors">
      <Suspense fallback={<ProjectDetailSkeleton />}>
        <ProjectDetailContent params={params} />
      </Suspense>
    </main>
  );
}

function ProjectDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-8">
      <div className="w-64 h-9 rounded-xl bg-slate-200 dark:bg-slate-800" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
        <div className="lg:col-span-6 w-full aspect-video rounded-2xl bg-slate-200 dark:bg-slate-800" />
        <div className="lg:col-span-6 space-y-4">
          <div className="flex gap-2">
            <div className="w-28 h-6 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="w-28 h-6 rounded-md bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="w-3/4 h-10 rounded-2xl bg-slate-200 dark:bg-slate-800" />
          <div className="w-full h-24 rounded-2xl bg-slate-200 dark:bg-slate-800" />
          <div className="flex gap-3 pt-2">
            <div className="w-36 h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
            <div className="w-36 h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

async function ProjectDetailContent({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Top Breadcrumb Navigation: Home > Projects > [Project Name] */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <ol className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-semibold py-2 px-3.5 sm:px-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <FiHome className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Home</span>
            </Link>
          </li>
          <li className="text-slate-400 dark:text-slate-600" aria-hidden="true">
            <FiChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="inline-flex items-center">
            <Link
              href="/#projects"
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </Link>
          </li>
          <li className="text-slate-400 dark:text-slate-600" aria-hidden="true">
            <FiChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-primary truncate max-w-45 sm:max-w-xs md:max-w-sm font-bold">
            {project.title}
          </li>
        </ol>
      </nav>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Project Hero: Left (Image) & Right (Metadata, Title, Description, CTAs) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-xs">
          {/* Left Column: Project Image */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-2xl dark:shadow-cyan-950/20 bg-slate-100 dark:bg-slate-900 group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Details & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            {/* Badges: Category / Duration / Role */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <FiCalendar className="w-3.5 h-3.5 text-primary" />
                {project.duration}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <FiUserCheck className="w-3.5 h-3.5 text-primary" />
                {project.role}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                <FiExternalLink className="w-4 h-4 text-white" />
                <span>Visit Live Website</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:border-primary/50 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-xs cursor-pointer"
              >
                <FiGithub className="w-4 h-4" />
                <span>Client Repository</span>
              </a>
            </div>
          </div>
        </section>

        {/* Grid: Tech Stack & Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Technology Stack (Requirement 9) */}
          <section className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/90 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                <FiLayers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Technology Stack
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Frameworks, Libraries &amp; Tools
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {project.techStack.map((stackGroup) => (
                <div key={stackGroup.category} className="space-y-1.5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    {stackGroup.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stackGroup.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features & Architecture Highlights */}
          <section className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 space-y-6 shadow-xs">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-900">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Key Features &amp; Implementation
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Built-in Capabilities
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Challenges Faced Section (Requirement 9) */}
        <section className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 space-y-6 shadow-xs">
          <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-900">
            <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <FiAlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                Engineering Insight
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Challenges Faced While Developing The Project
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-bold text-xs flex items-center justify-center mb-3 border border-amber-500/20">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Potential Improvements & Future Plans (Requirement 9) */}
        <section className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 space-y-6 shadow-xs">
          <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-900">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-primary flex items-center justify-center shrink-0">
              <FiTrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Roadmap
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Potential Improvements &amp; Future Plans
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.improvements.map((improvement, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono font-bold text-xs flex items-center justify-center mb-3 border border-primary/20">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {improvement.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {improvement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Block */}
        <div className="pt-6 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
          <Link
            href="/#projects"
            className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 flex items-center gap-2 transition-all cursor-pointer"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub Client</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-brand-gradient text-xs font-semibold text-white shadow-md shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2 transition-all cursor-pointer"
            >
              <FiExternalLink className="w-4 h-4 text-white" />
              <span>Live Preview</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
