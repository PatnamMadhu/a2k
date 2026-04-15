import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Cloud,
  Shield,
  Sparkles,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Phone,
  TrendingDown,
  Server,
  ShieldCheck,
  Target,
} from "lucide-react";

const NAV_LINKS = [
  { label: "What We Do", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Our Approach", href: "/our-approach" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
            <Cloud className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Advance<span className="text-cyan-400">2000</span>
          </span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-3"
        >
          <button className="text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm">
            Client Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40">
            Contact Us
          </button>
        </motion.div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-white/80 hover:text-white text-sm font-medium py-2">
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            <button className="text-white/80 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium">
              Client Login
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
            style={{
              left: `${10 + i * 16}%`,
              height: "60%",
              top: "20%",
            }}
            animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [0.8, 1, 0.8] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">
            Trusted IT & Cloud Partner Since 1994
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          Unleash Business{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Performance
          </span>{" "}
          with Private Cloud & Managed IT.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          For organizations that cannot afford slow systems, fragmented vendors,
          or weak oversight. We recover millions in annual value while reducing
          business risk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 shadow-xl shadow-blue-500/40 hover:shadow-blue-400/50 w-full sm:w-auto"
          >
            See Our Approach
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 border border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-300 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 backdrop-blur-sm w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Book an Assessment
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {["SOC 2 Certified", "HIPAA Ready", "ISO 27001 Aligned"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

const STATS = [
  { value: "2X", label: "Performance of traditional public clouds" },
  { value: "50%", label: "Lower cost potential" },
  { value: "30+", label: "Years supporting critical IT" },
  { value: "24x7", label: "Live proactive support" },
];

function StatsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl shadow-black/20 border border-slate-100 px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            className="text-center"
          >
            <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <p className="text-slate-500 text-sm leading-snug font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const SERVICES = [
  {
    id: "private-cloud",
    icon: Cloud,
    title: "Private Cloud Computing",
    desc: "Dedicated high-performance infrastructure engineered for your workloads. Experience predictable speed, zero noisy-neighbor risk, and full sovereignty over your data — cloud power without the shared-cloud compromise.",
    accent: "from-blue-500 to-cyan-500",
    span: "lg:col-span-2",
    size: "large",
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity Risk",
    desc: "Built-in visibility and continuous threat monitoring. Identify gaps, harden your perimeter, and stay one step ahead of evolving threats.",
    accent: "from-violet-500 to-indigo-500",
    span: "",
    size: "square",
  },
  {
    id: "private-ai",
    icon: Sparkles,
    title: "Private AI",
    desc: "Secure AI modernization within your own trusted environment. Harness the power of machine learning without sacrificing data privacy.",
    accent: "from-teal-500 to-emerald-500",
    span: "",
    size: "square",
  },
  {
    id: "it-strategy",
    icon: TrendingUp,
    title: "IT Strategy & Modernization",
    desc: "Strategic planning and hands-on transformation — from legacy migration to cloud-native architecture — aligned to your business objectives and growth trajectory.",
    accent: "from-orange-500 to-amber-500",
    span: "lg:col-span-2",
    size: "wide",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group bg-white border border-slate-200 hover:border-blue-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer ${service.span}`}
    >
      <div
        className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} items-center justify-center mb-6 shadow-lg`}
      >
        <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
      </div>

      <h3 className="text-slate-900 font-bold text-xl mb-3 group-hover:text-blue-700 transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>

      <div className="mt-6 flex items-center gap-2 text-blue-500 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-slate-50 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Enterprise-Grade Capabilities,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Unified.
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Every service is designed to interlock — so your infrastructure,
            security, and strategy move as one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    "Single-vendor accountability — no finger-pointing",
    "Dedicated engineers, not rotating help-desk tickets",
    "Transparent pricing with no hidden fees",
    "Real-time monitoring with business-impact alerting",
    "Private cloud speed: 2x faster than public alternatives",
    "Compliance-ready from day one (SOC 2, HIPAA, ISO)",
  ];

  return (
    <section className="bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-6">
            Why Advance2000
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
            Not another MSP.{" "}
            <span className="text-blue-600">A true technology partner.</span>
          </h2>
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 group flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-600/20 rounded-full blur-2xl" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">
                  System Health Dashboard
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-mono">LIVE</span>
                </div>
              </div>

              {[
                { label: "Uptime SLA", value: "99.99%", color: "text-emerald-400", bar: "w-full" },
                { label: "Threat Events Blocked", value: "14,203", color: "text-blue-400", bar: "w-4/5" },
                { label: "Avg Response Time", value: "< 2 min", color: "text-cyan-400", bar: "w-3/4" },
                { label: "Cost vs. Cloud Avg.", value: "–47%", color: "text-teal-400", bar: "w-1/2" },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs">{metric.label}</span>
                    <span className={`${metric.color} text-sm font-bold font-mono`}>
                      {metric.value}
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.6 + i * 0.15 }}
                      className={`h-full ${metric.bar} bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full`}
                      style={{ maxWidth: metric.bar.replace("w-", "") === "full" ? "100%" : metric.bar.replace("w-", "") === "4/5" ? "80%" : metric.bar.replace("w-", "") === "3/4" ? "75%" : "50%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-slate-950 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Ready to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            recover value
          </span>{" "}
          from your IT?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Book a free infrastructure assessment. Our team will identify
          inefficiencies and present a clear path to peak performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-blue-500/40"
          >
            Book Free Assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
          >
            Talk to an Expert
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
            <Cloud className="w-3 h-3 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white/70 font-semibold text-sm">
            &copy; 2026 Advance2000. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   CORE VALUE PILLARS (dark cards)
───────────────────────────────────────────── */
const VALUE_PILLARS = [
  {
    icon: TrendingDown,
    headline: "Lower, and more predictable cost than fragmented alternatives",
    accent: "from-blue-500 to-cyan-500",
    glow: "hover:shadow-blue-500/20",
  },
  {
    icon: Server,
    headline: "Faster systems with dedicated private cloud performance",
    accent: "from-cyan-500 to-teal-500",
    glow: "hover:shadow-cyan-500/20",
  },
  {
    icon: ShieldCheck,
    headline: "Built-in cybersecurity, visibility, and real accountability",
    accent: "from-violet-500 to-indigo-500",
    glow: "hover:shadow-violet-500/20",
  },
];

function ValuePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            The Advance2000 Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            One partner. Complete accountability.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {VALUE_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.headline}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl border border-slate-700/60 bg-slate-800/60 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl ${pillar.glow} hover:border-slate-600 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-2xl" />
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.accent} items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <p className="text-white/90 font-semibold text-lg leading-snug">
                  {pillar.headline}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROOF METRICS (stat bar)
───────────────────────────────────────────── */
const PROOF_METRICS = [
  { value: "2X", desc: "The performance of traditional public clouds" },
  { value: "50%", desc: "Lower cost potential vs. fragmented public cloud stacks" },
  { value: "30+", desc: "Years supporting business-critical IT environments" },
  { value: "24x7", desc: "Live support coverage with proactive oversight" },
  { value: "4.7/5", label: "Stars", desc: "End-user satisfaction driven by accountability" },
];

function ProofMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-100 rounded-2xl overflow-hidden shadow-sm"
        >
          {PROOF_METRICS.map((m, i) => (
            <motion.div
              key={m.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.09, ease: "easeOut" }}
              className="bg-white px-6 py-10 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-none mb-1">
                {m.value}
              </div>
              {m.label && (
                <span className="text-blue-500 text-sm font-semibold mb-2">{m.label}</span>
              )}
              <p className="text-slate-400 text-xs sm:text-sm leading-snug mt-2 max-w-[130px]">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXECUTIVE INSIGHTS
───────────────────────────────────────────── */
const INSIGHTS = [
  {
    text: "Find where your business is overpaying for underperforming IT",
    subtext: "Cost & efficiency analysis across your full technology stack",
  },
  {
    text: "Identify hidden operational and cybersecurity exposure",
    subtext: "Risk mapping that surfaces vulnerabilities leadership cannot see",
  },
  {
    text: "See what a more accountable IT model can do for you",
    subtext: "Benchmark your environment against what best-in-class looks like",
  },
];

function ExecutiveInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Executive View
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What executives need to know
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {INSIGHTS.map((insight, i) => (
            <motion.div
              key={insight.text}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015, transition: { duration: 0.18 } }}
              className="group relative flex items-center gap-6 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl px-8 py-7 shadow-sm hover:shadow-lg hover:shadow-blue-500/8 transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/40 group-hover:via-transparent transition-all duration-500 pointer-events-none rounded-2xl" />

              <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 border border-blue-100 group-hover:border-blue-200 flex items-center justify-center transition-all duration-200">
                <Target className="w-5 h-5 text-blue-500" strokeWidth={1.8} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-slate-900 font-semibold text-base sm:text-lg leading-snug group-hover:text-blue-900 transition-colors">
                  {insight.text}
                </p>
                <p className="text-slate-400 text-sm mt-1 leading-snug">{insight.subtext}</p>
              </div>

              <div className="shrink-0 ml-auto">
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35"
          >
            Get Your Free Assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <StatsBanner />
      <ServicesSection />
      <ValuePillars />
      <ProofMetrics />
      <ExecutiveInsights />
      <WhySection />
      <CTASection />
      <Footer />
    </div>
  );
}
