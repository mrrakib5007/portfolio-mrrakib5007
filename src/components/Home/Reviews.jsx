"use client";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const reviews = [
    {
      name: "Meratul Marup",
      role: "CEO, It Lancer BD",
      initials: "MM",
      color: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-400 dark:border-cyan-500/30",
      content:
        "Rakib delivered our project ahead of schedule with exceptional quality. His attention to detail and problem-solving skills are remarkable.",
    },
    {
      name: "Sarah Jenkins",
      role: "Product Manager, Apex Digital",
      initials: "SJ",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-400 dark:border-indigo-500/30",
      content:
        "An exceptional MERN stack engineer. He took our complex system requirements and translated them into a flawless, fast user interface.",
    },
    {
      name: "David Chen",
      role: "Founder, SaaSFlow",
      initials: "DC",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30",
      content:
        "Working with Rakib was a breeze. His communication is top-notch, and the clean design structures he implements really elevate the product experience.",
    },
    {
      name: "Alex Rivera",
      role: "CTO, Nexus Lab",
      initials: "AR",
      color: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500/30",
      content:
        "His proficiency in MERN architecture made a massive difference in our platform scaling phase. Highly recommended developer.",
    },
    {
      name: "Emma Watson",
      role: "Creative Director, StudioNine",
      initials: "EW",
      color: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-500/20 dark:text-pink-400 dark:border-pink-500/30",
      content:
        "Rakib bridges the gap between layout design and complex logic beautifully. The pixel-perfect responsive execution exceeded our engineering metrics.",
    },
    {
      name: "Imran Khan",
      role: "Lead Architect, DevGlobal",
      initials: "IK",
      color: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/20 dark:text-sky-400 dark:border-sky-500/30",
      content:
        "Clean controller architecture, well-optimized database paths, and highly reusable React UI modules. A stellar engineering asset.",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
            Client Reviews
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
            What colleagues and project leads say about collaborating with me.
          </p>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative min-h-75">
          {isMounted ? (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={true}
              speed={600}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                prevEl: ".custom-review-prev",
                nextEl: ".custom-review-next",
              }}
              pagination={{
                el: ".custom-review-pagination",
                clickable: true,
              }}
              className="w-full"
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 flex flex-col justify-between shadow-lg shadow-cyan-950/5 dark:shadow-2xl dark:shadow-black/50 text-center transition-colors">
                    <div className="flex justify-center items-center gap-1.5 text-amber-400 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg italic leading-relaxed max-w-2xl mx-auto">
                      &ldquo;{item.content}&rdquo;
                    </p>

                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col items-center justify-center">
                      <div
                        className={`w-12 h-12 rounded-full ${item.color} font-bold flex items-center justify-center text-sm border mb-3 shadow-xs`}
                      >
                        {item.initials}
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full h-72 rounded-3xl bg-slate-100 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-850 animate-pulse" />
          )}

          {/* Navigation Controls */}
          <button
            aria-label="Previous review"
            className="custom-review-prev absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-850 flex items-center justify-center shadow-lg transition-all cursor-pointer"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          <button
            aria-label="Next review"
            className="custom-review-next absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-850 flex items-center justify-center shadow-lg transition-all cursor-pointer"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination container: Pure transparent background with zero gray overlay bar */}
          <div className="custom-review-pagination flex justify-center items-center gap-1.5 mt-8" />
        </div>
      </div>
    </section>
  );
}
