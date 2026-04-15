import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  ShieldAlert,
  DollarSign,
  Search,
  Layers,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Cloud,
  ChevronRight,
  Building2,
  Scale,
} from "lucide-react";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

/* ── NAVBAR ── */
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Cloud className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">
            Advance<span className="text-blue-600">2000</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="/" className="hover:text-slate-900 transition-colors">
            What We Do
          </a>
          <a href="/" className="hover:text-slate-900 transition-colors">
            Industries
          </a>
          <a href="/our-approach" className="text-blue-600 font-semibold">
            Our Approach
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:block border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Client Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md shadow-blue-600/20">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

/* ── HERO ── */
function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/12 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#60a5fa" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">
            Our Approach
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
        >
          Technology should{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            strengthen
          </span>{" "}
          your business, <br className="hidden sm:block" />
          not complicate it.
        </motion.h1>

        <motion.p
          {...fadeUp(0.32)}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          The Advance2000 Assessment eliminates operational friction, cyber
          exposure, and hidden costs. Modernize, secure, and support the
          business for growth.
        </motion.p>

        <motion.div {...fadeUp(0.44)}>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-2xl shadow-blue-600/40 hover:shadow-blue-500/50"
          >
            Schedule Your Strategy Call Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ── HORIZONTALLY ALIGNED VIDEO & FEATURES ── */
/* ── HORIZONTALLY ALIGNED VIDEO & FEATURES (PATCHED) ── */
const ELIMINATE_CARDS = [
  {
    icon: Zap,
    title: "Eliminate Operational Friction",
    body: "Slow systems, downtime, and fragmented vendors quietly reduce productivity and increase management burden.",
    accent: "from-blue-500 to-cyan-500",
    glow: "group-hover:border-blue-200 group-hover:shadow-blue-500/10",
    iconColor: "text-blue-50",
  },
  {
    icon: ShieldAlert,
    title: "Eliminate Risk Exposure",
    body: "Cybersecurity gaps, weak backups, and poor standardization create real business risk that leadership often cannot see clearly.",
    accent: "from-violet-500 to-indigo-500",
    glow: "group-hover:border-violet-200 group-hover:shadow-violet-500/10",
    iconColor: "text-violet-50",
  },
  {
    icon: DollarSign,
    title: "Eliminate Hidden Costs",
    body: "Many organizations pay too much for environments that underperform and require multiple providers to operate.",
    accent: "from-teal-500 to-emerald-500",
    glow: "group-hover:border-teal-200 group-hover:shadow-teal-500/10",
    iconColor: "text-teal-50",
  },
];

function EliminateGrid() {
  return (
    <section className="bg-slate-50 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            The Core Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Three problems holding your business back.
          </h2>
          <p className="text-slate-500 text-lg">
            Most IT environments suffer from all three simultaneouslyand they
            compound each other.
          </p>
        </motion.div>

        {/* 50/50 Split Layout - FORCED ALIGNMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left Side: Video Container */}
          <motion.div
            {...fadeUp(0.1)}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200 bg-slate-900 h-full flex flex-col justify-center"
          >
            {/* Added aspect-video wrapper inside to maintain ratio, but allowing parent to stretch */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/4FdYheDJCZ4?rel=0"
                title="Advance2000 The Core Problem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0 object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side: 3 Horizontal Points */}
          <div className="flex flex-col justify-between h-full gap-4 sm:gap-6">
            {ELIMINATE_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  {...fadeUp(0.2 + i * 0.1)}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className={`group flex items-start gap-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg ${card.glow} transition-all duration-300 cursor-default flex-1`}
                >
                  <div
                    className={`shrink-0 flex w-14 h-14 rounded-xl bg-gradient-to-br ${card.accent} items-center justify-center shadow-md`}
                  >
                    <Icon
                      className={`w-6 h-6 ${card.iconColor}`}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1.5 leading-snug group-hover:text-blue-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EXECUTIVE FRAMEWORK STEPPER ── */
const STEPS = [
  {
    num: "01",
    label: "ASSESS",
    icon: Search,
    color: "blue",
    body: "Understand your business, infrastructure, risk profile, and where performance and cost are not aligned.",
    outcome:
      "A clear view of your current technology posture and a practical roadmap.",
  },
  {
    num: "02",
    label: "MODERNIZE",
    icon: Layers,
    color: "cyan",
    body: "Upgrade the environment intentionally with better architecture, stronger security, higher performance, and tighter operating discipline.",
    outcome: "A stronger, more secure technology foundation.",
  },
  {
    num: "03",
    label: "SUPPORT",
    icon: HeadphonesIcon,
    color: "teal",
    body: "Keep the environment stable, secure, monitored, and visible with live support and executive oversight.",
    outcome: "A trusted technology partner protecting your environment.",
  },
];

const STEP_COLOR: Record<string, string> = {
  blue: "from-blue-500 to-blue-600",
  cyan: "from-cyan-500 to-blue-500",
  teal: "from-teal-500 to-cyan-500",
};

const STEP_BADGE: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  teal: "bg-teal-500/15 text-teal-300 border-teal-500/20",
};

function FrameworkSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-slate-950 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-700/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Executive Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Our approach is built around a practical executive framework.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three phases. Clear outcomes at every step.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                onClick={() => setActive(i)}
                className={`relative cursor-pointer rounded-2xl border p-8 transition-all duration-300 ${
                  isActive
                    ? "bg-slate-800/80 border-blue-500/40 shadow-xl shadow-blue-500/10"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-600 hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${STEP_COLOR[step.color]} items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <span className="text-slate-700 font-mono font-bold text-2xl select-none">
                    {step.num}
                  </span>
                </div>

                <div
                  className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-4 ${STEP_BADGE[step.color]}`}
                >
                  {step.label}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {step.body}
                </p>

                <motion.div
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-emerald-900/30 border border-emerald-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                          Outcome
                        </p>
                        <p className="text-emerald-100/90 text-sm leading-snug">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {!isActive && (
                  <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium mt-4">
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>See outcome</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── IMPACT METRICS ── */
const METRICS = [
  { value: "$8.45M+", label: "Combined annual value recovered" },
  { value: "16", label: "Case studies across key industries" },
  { value: "30+", label: "Years of experience" },
  { value: "2x", label: "Performance at half the cost of public cloud" },
];

function ImpactBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Client Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Proof in the numbers.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
              className="bg-white px-6 py-10 text-center group hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {m.value}
              </div>
              <p className="text-slate-500 text-sm leading-snug max-w-[140px] mx-auto">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CASE STUDIES ── */
const CASE_STUDIES = [
  {
    id: "AEC-01",
    industry: "Architecture Firm",
    icon: Building2,
    tag: "AEC",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    challenge:
      "Slow VDI & File latency severely degrading design team productivity.",
    solution: "GPU-enabled Private Cloud with dedicated high-speed storage.",
    outcome: "$250K+ Productivity recovered",
    outcomeColor: "text-emerald-600",
    accentBorder: "hover:border-violet-300",
    iconBg: "from-violet-500 to-indigo-500",
  },
  {
    id: "LAW-01",
    industry: "Corporate Law Firm",
    icon: Scale,
    tag: "Legal",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    challenge:
      "Billable time leakage due to slow, unreliable systems and security concerns.",
    solution: "Secure private cloud with Managed Detection & Response (MDR).",
    outcome: "$995K Revenue recovered",
    outcomeColor: "text-emerald-600",
    accentBorder: "hover:border-blue-300",
    iconBg: "from-blue-500 to-cyan-500",
  },
];

function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-slate-50 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real results, real clients.
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all shrink-0">
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => {
            const Icon = cs.icon;
            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group bg-white border border-slate-200 ${cs.accentBorder} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cs.iconBg} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <span
                    className={`text-xs font-semibold border px-3 py-1 rounded-full ${cs.tagColor}`}
                  >
                    {cs.tag} · {cs.id}
                  </span>
                </div>

                <h3 className="text-slate-900 font-bold text-lg mb-5 leading-snug">
                  {cs.industry}
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      label: "Challenge",
                      value: cs.challenge,
                      color: "text-slate-600",
                    },
                    {
                      label: "Solution",
                      value: cs.solution,
                      color: "text-slate-600",
                    },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      <p className={`text-sm ${color} leading-relaxed`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className={`font-bold text-lg ${cs.outcomeColor}`}>
                    {cs.outcome}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA() {
  return (
    <section className="bg-slate-950 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>
      <motion.div
        {...fadeUp(0)}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            modernize
          </span>{" "}
          without the risk?
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          One conversation. A clear picture of your technology posture and a
          path to recovering value across your business.
        </p>
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-base transition-all shadow-2xl shadow-blue-600/40 hover:shadow-blue-500/50"
        >
          Book a Meeting
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Cloud className="w-3 h-3 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white/60 font-medium text-sm">
            &copy; 2026 Advance2000. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── PAGE EXPORT ── */
export default function OurApproach() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <EliminateGrid />
      <FrameworkSection />
      <ImpactBanner />
      <CaseStudies />
      <FinalCTA />
      <Footer />
    </div>
  );
}
