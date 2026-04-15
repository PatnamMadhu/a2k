import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";

// Helper function for consistent fade-up animations
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: The Pitch & Contact Info */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Let's Talk
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Ready to modernize your IT environment?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
              Schedule a strategy call with our executive team. We'll show you
              exactly where your business is exposed and how our model recovers
              lost value.
            </p>

            {/* Trust Signals */}
            <div className="space-y-4 mb-12">
              {[
                "Comprehensive IT risk assessment",
                "Customized modernization roadmap",
                "Transparent, predictable pricing model",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Call Us 24/7
                  </p>
                  <p className="text-slate-900 font-bold tracking-tight">
                    (800) 238-2621
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Email Support
                  </p>
                  <p className="text-slate-900 font-bold tracking-tight">
                    info@advance2000.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form Card */}
          <motion.div {...fadeUp(0.2)}>
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl shadow-blue-900/5 border border-slate-100 relative">
              {/* Subtle top gradient line for premium feel */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent opacity-50" />

              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Schedule a meeting with an expert.
              </h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-1">
                    How can we help you?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current IT challenges..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-blue-600/20"
                >
                  Request Executive Briefing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
