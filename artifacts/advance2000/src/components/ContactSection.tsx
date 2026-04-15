import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ContactSection() {
  return (
    <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-block bg-blue-500/10 text-cyan-400 border border-cyan-400/20 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Let's Talk
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              Ready to modernize your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                IT environment?
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
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
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4 bg-slate-800/60 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                    Call Us 24/7
                  </p>
                  <p className="text-white font-bold tracking-tight">
                    (800) 238-2621
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/60 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                    Email Support
                  </p>
                  <p className="text-white font-bold tracking-tight">
                    info@advance2000.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div {...fadeUp(0.2)}>
            <div className="bg-slate-800/50 rounded-[2rem] p-8 sm:p-10 border border-white/10 backdrop-blur-sm relative">
              {/* Top gradient accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent opacity-60 rounded-full" />

              <h3 className="text-2xl font-bold text-white mb-8">
                Schedule a meeting with an expert.
              </h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/70 text-white placeholder-slate-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/70 text-white placeholder-slate-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 ml-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/70 text-white placeholder-slate-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 ml-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/70 text-white placeholder-slate-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/70 text-white placeholder-slate-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 ml-1">
                    How can we help you?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current IT challenges..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/70 text-white placeholder-slate-500 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 transition-all text-sm resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 group flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-400/40"
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
