import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Wrench,
  Shield,
  RefreshCw,
  Handshake,
  BarChart,
  CheckCircle,
  X,
  Play,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ── helpers ── */
function fadeUp(delay = 0, once = true) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once, margin: "-60px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

/* ──────────────────────────────────────────────────
   1. HERO SPLIT
────────────────────────────────────────────────── */
const EXEC_CHECKLIST = [
  "Find where your business is overpaying for underperforming IT",
  "Identify hidden operational and cybersecurity exposure",
  "See what a more accountable IT model can do for you",
];

const KICKER_CARDS = [
  "Driving better IT for better outcomes",
  "Faster systems with dedicated private cloud performance",
  "Built-in security, visibility, and accountability",
];

function HeroSplit() {
  return (
    <Section className="bg-slate-950 pt-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.h1
            {...fadeUp(0.05)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Modernize <br className="hidden sm:block" />
            Your IT.
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
            Too many vendors. No accountability. Rising cost. Hidden risk.
            Advance2000 replaces it with one high-performance, fully managed
            system built for better business outcomes.
          </motion.p>

          <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3 mb-8">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Get Your IT Risk Score
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
            >
              <Play className="w-4 h-4" />
              Watch the Overview
            </motion.button>
          </motion.div>

          <motion.div
            {...fadeUp(0.35)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {KICKER_CARDS.map((text) => (
              <div
                key={text}
                className="border border-slate-700 rounded-xl px-4 py-3 bg-slate-900/50"
              >
                <p className="text-slate-400 text-xs leading-snug">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — exec insight card */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative rounded-2xl border border-slate-700/60 bg-slate-800/70 backdrop-blur-sm p-8 overflow-hidden"
        >
          {/* top-right glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            What Executives Need To Know
          </p>
          <h2 className="text-white font-bold text-xl sm:text-2xl leading-snug mb-4">
            Your biggest IT problem may not be technology. It may be the model.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Most organizations are running a fragmented stack of vendors with no
            single point of accountability — and it's quietly compounding cost,
            risk, and underperformance every day.
          </p>
          <div className="flex flex-col gap-3">
            {EXEC_CHECKLIST.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <p className="text-slate-300 text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
          <a href="/contact" className="mt-8 group flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            Schedule your briefing
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

/* ──────────────────────────────────────────────────
   2. VIDEO & VALUE
────────────────────────────────────────────────── */
const VIDEO_ITEMS = [
  "One managed environment replacing multiple fragmented vendors",
  "Private cloud performance at lower total cost than public alternatives",
  "24×7 live support with proactive monitoring and executive visibility",
];

function VideoValue() {
  return (
    <Section className="bg-slate-900">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left — white value card */}
        <motion.div
          {...fadeUp(0.05)}
          className="bg-white rounded-3xl p-10 flex flex-col justify-center"
        >
          <h2 className="text-slate-900 font-extrabold text-2xl sm:text-3xl leading-snug mb-6">
            Better IT, Better Business, and Happier Clients.
          </h2>
          <div className="flex flex-col gap-4">
            {VIDEO_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 group self-start flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md shadow-blue-600/20">
            See Our Approach
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Right — video embed */}
        <motion.div {...fadeUp(0.15)} className="flex flex-col rounded-2xl overflow-hidden border border-slate-700">
          <div className="bg-slate-800 px-5 py-3 flex items-center gap-3 border-b border-slate-700">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <span className="text-slate-400 text-xs font-medium">
              Advance2000 Video Overview
            </span>
          </div>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/e7JpcZBoXzM"
              title="Advance2000 Video Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ──────────────────────────────────────────────────
   3. HIDDEN COSTS
────────────────────────────────────────────────── */
const COST_CARD_1 = [
  "Redundant vendor contracts billing for the same capabilities",
  "Unplanned downtime that never appears in a vendor's SLA report",
  "Staff time consumed managing vendors instead of driving outcomes",
  "Security gaps that only surface after an incident",
];

const COST_CARD_2 = [
  "Public cloud configurations that drift in cost over time",
  "Reactive support that fixes symptoms, not root causes",
  "Fragmented licensing with no consolidated visibility",
  "Performance bottlenecks that limit business throughput",
];

function HiddenCosts() {
  return (
    <Section className="bg-slate-950">
      <motion.div {...fadeUp(0)} className="text-center mb-14">
        <span className="inline-block bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          The Real Cost of IT
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          IT has become a core business function.
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Yet most organizations are managing it like a back-office utility —
          with fragmented vendors, reactive support, and no consolidated view of
          risk or cost. The gap between what IT costs and what it delivers is
          where business value disappears.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "The biggest IT cost is often the one you do not see.",
            body: "Hidden inefficiencies compound across every team, every day. Most are never surfaced in a standard vendor report — because vendors have no incentive to find them.",
            items: COST_CARD_1,
            delay: 0.05,
          },
          {
            title: "Most businesses are overspending on IT and still underperforming.",
            body: "Paying more for fragmented services doesn't produce better outcomes. It produces more complexity, more risk, and less accountability across the stack.",
            items: COST_CARD_2,
            delay: 0.15,
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            {...fadeUp(card.delay)}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="text-slate-900 font-bold text-xl leading-snug mb-3">
              {card.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.body}</p>
            <div className="flex flex-col gap-3">
              {card.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <p className="text-slate-600 text-sm leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ──────────────────────────────────────────────────
   4. MODEL COMPARISON (VS)
────────────────────────────────────────────────── */
const TRAD_ITEMS = [
  "Multiple vendors with overlapping and conflicting scopes",
  "Reactive support that patches symptoms without solving root causes",
  "Unpredictable cost with no consolidated view of spend",
  "Accountability gaps when something goes wrong",
];

const A2K_ITEMS = [
  "One fully integrated system replacing your entire vendor stack",
  "Proactive monitoring, live support, and executive-level visibility",
  "Predictable, consolidated cost with measurable business outcomes",
  "A single accountable partner responsible for the full environment",
];

function ModelComparison() {
  return (
    <Section className="bg-slate-900">
      <motion.div {...fadeUp(0)} className="text-center mb-14">
        <span className="inline-block bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Model Comparison
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          The problem is not your IT team. It is the model.
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          The fragmented vendor model was never designed to produce consistent
          outcomes. A unified model was.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
        {/* Traditional */}
        <motion.div {...fadeUp(0.05)} className="bg-white rounded-2xl p-8">
          <span className="inline-block bg-red-50 text-red-600 border border-red-200 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-5">
            Traditional IT Model
          </span>
          <h3 className="text-slate-900 font-bold text-xl leading-snug mb-6">
            More vendors. More friction. Less accountability.
          </h3>
          <div className="flex flex-col gap-3.5">
            {TRAD_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                </div>
                <p className="text-slate-600 text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* VS divider */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center justify-center"
        >
          <div className="text-blue-500 font-extrabold text-2xl tracking-tight px-4 py-2 rounded-xl border border-blue-500/30 bg-blue-500/5">
            VS
          </div>
        </motion.div>

        {/* Advance2000 */}
        <motion.div {...fadeUp(0.15)} className="bg-white rounded-2xl p-8">
          <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-5">
            Advance2000 Model
          </span>
          <h3 className="text-slate-900 font-bold text-xl leading-snug mb-6">
            One integrated system. One partner. Total accountability.
          </h3>
          <div className="flex flex-col gap-3.5">
            {A2K_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ──────────────────────────────────────────────────
   5. CAPABILITIES GRID
────────────────────────────────────────────────── */
const CAPABILITIES = [
  {
    icon: Cloud,
    title: "High-Performance Private Cloud",
    desc: "Dedicated infrastructure built for your workloads — no noisy neighbors, no shared resource contention.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "Managed IT With Real Accountability",
    desc: "One partner owning your full stack — infrastructure, endpoints, support, and outcomes.",
    accent: "from-slate-500 to-slate-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity and Risk Visibility",
    desc: "Built-in security posture management, MDR, and threat visibility that most vendors leave to someone else.",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    icon: RefreshCw,
    title: "Backup, Recovery, and Continuity",
    desc: "Tested recovery plans, immutable backups, and RTO/RPO commitments that actually hold under pressure.",
    accent: "from-teal-500 to-emerald-500",
  },
  {
    icon: Handshake,
    title: "Secure Collaboration",
    desc: "Modern, protected communication and productivity tools managed within your private environment.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: BarChart,
    title: "Executive Visibility",
    desc: "Real-time dashboards, quarterly reviews, and business-aligned reporting for leadership — not just IT.",
    accent: "from-rose-500 to-pink-500",
  },
];

function CapabilitiesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section className="bg-slate-950">
      <motion.div {...fadeUp(0)} className="text-center mb-14">
        <span className="inline-block bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          We provide a complete IT system, not a collection of services.
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Every capability is integrated and managed under one accountable partner — so nothing falls through the gaps.
        </p>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CAPABILITIES.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/8 transition-all duration-300"
            >
              <div className={`inline-flex w-11 h-11 rounded-xl bg-gradient-to-br ${cap.accent} items-center justify-center mb-5 shadow-md`}>
                <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-2 group-hover:text-blue-700 transition-colors">
                {cap.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ──────────────────────────────────────────────────
   6. FINAL CTA BANNER
────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <Section className="bg-slate-900 pb-28">
      <motion.div
        {...fadeUp(0)}
        className="relative rounded-2xl border border-slate-700 bg-slate-800/70 overflow-hidden px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
      >
        {/* left glow */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-snug mb-3">
            See what your IT is really costing you.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Book a 30-minute executive briefing and walk away with a clear picture of your technology posture, cost exposure, and what a better model looks like for your business.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 border border-slate-500 hover:border-blue-400 text-slate-200 hover:text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap"
          >
            Schedule Executive Briefing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────────
   SHARED CONTENT (used inside Home.tsx too)
────────────────────────────────────────────────── */
export function WhatWeDoContent() {
  return (
    <>
      <HeroSplit />
      <VideoValue />
      <HiddenCosts />
      <ModelComparison />
      <CapabilitiesGrid />
      <FinalCTA />
    </>
  );
}

/* ──────────────────────────────────────────────────
   PAGE EXPORT
────────────────────────────────────────────────── */
export default function WhatWeDo() {
  return (
    <div className="font-sans antialiased bg-slate-950">
      <Navbar />
      <WhatWeDoContent />
      <Footer />
    </div>
  );
}
