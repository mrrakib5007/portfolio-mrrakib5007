"use client";

import { useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoUrl = `mailto:mrrakib5007@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: \${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Let&apos;s Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-brand-gradient mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white leading-snug">
              Looking for a Personal Web Developer?
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Are you on the lookout for someone who can design and manage your website? Or maybe you are looking for someone who can help you with the concept of your Business website design? You got your freelancer! I work personally and friendly.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 flex items-center gap-4 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-bold text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <a
                href="mailto:mrrakib5007@gmail.com"
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 flex items-center gap-4 hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FiMail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">
                    mrrakib5007@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/8801991465007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 flex items-center gap-4 hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                    +880 1991-465007
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-950 border border-slate-800/90 shadow-2xl shadow-black/50">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-gradient hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FiSend className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}