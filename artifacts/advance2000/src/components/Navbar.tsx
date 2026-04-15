import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Menu,
  X,
  ChevronDown,
  Cpu,
  Layers,
  Headphones,
  Factory,
  Handshake,
  ChevronRight,
} from "lucide-react";

/* ── Mega-menu data ─────────────────────────────────── */
const CAPABILITIES = [
  {
    group: "Assessment",
    icon: Cpu,
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    items: ["AI Readiness", "Cybersecurity Risk", "IT Strategy"],
  },
  {
    group: "Modernization",
    icon: Layers,
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    items: [
      "Private Cloud Computing",
      "File Collaboration (Privata)",
      "Meeting Collaboration (Cloud In Touch)",
      "Private AI",
      "Infrastructure",
    ],
  },
  {
    group: "Services",
    icon: Headphones,
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    items: [
      "Data Resiliency",
      "Network Operations (NOC)",
      "Help Desk",
      "Premium Support",
      "Cybersecurity",
      "IT Project Management",
    ],
  },
];

const INDUSTRIES = [
  "AEC",
  "Legal",
  "Financial",
  "Healthcare",
  "Education",
  "Government",
  "Home Services",
  "Manufacturing",
];

/* ── Other flat nav links ──────────────────────────── */
const FLAT_LINKS = [
  { label: "Who We Are", href: "#" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Careers", href: "#" },
];

/* ── Mega-menu panel ────────────────────────────────── */
function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[860px] max-w-[calc(100vw-2rem)]"
    >
      <div className="rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-hidden">
        {/* Capabilities */}
        <div className="p-6 border-b border-white/8">
          <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-5">
            Capabilities
          </p>
          <div className="grid grid-cols-3 gap-6">
            {CAPABILITIES.map((col) => {
              const Icon = col.icon;
              return (
                <div key={col.group}>
                  <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ${col.bg} mb-3`}>
                    <Icon className={`w-3.5 h-3.5 ${col.accent}`} strokeWidth={2} />
                    <span className={`${col.accent} text-xs font-bold tracking-wide uppercase`}>
                      {col.group}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {col.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={onClose}
                        className="group flex items-center gap-1.5 text-slate-400 hover:text-white text-sm leading-snug py-0.5 transition-colors duration-150"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-150 text-blue-400 shrink-0" />
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industries + Partnerships */}
        <div className="grid grid-cols-2 divide-x divide-white/8">
          {/* Industries */}
          <div className="p-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-500/10 mb-3">
              <Factory className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Industries
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {INDUSTRIES.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={onClose}
                  className="group flex items-center gap-1.5 text-slate-400 hover:text-white text-sm leading-snug py-0.5 transition-colors duration-150"
                >
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-150 text-blue-400 shrink-0" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Partnerships + CTA */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-500/10 mb-3">
                <Handshake className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
                <span className="text-emerald-400 text-xs font-bold tracking-wide uppercase">
                  Partnerships
                </span>
              </div>
              <a
                href="#"
                onClick={onClose}
                className="group flex items-center gap-1.5 text-slate-400 hover:text-white text-sm leading-snug py-0.5 transition-colors duration-150"
              >
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-150 text-blue-400 shrink-0" />
                Strategic Partnerships
              </a>
            </div>

            {/* CTA strip */}
            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/8 px-4 py-3 flex items-center justify-between gap-4">
              <p className="text-white/70 text-xs leading-snug">
                Not sure where to start?<br />
                <span className="text-white font-medium">Get your free IT risk score.</span>
              </p>
              <a
                href="/contact"
                onClick={onClose}
                className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Navbar ────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mega-menu on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openMega = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const closeMegaDelayed = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
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
        </motion.a>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8 relative"
        >
          {/* What We Do with mega-menu */}
          <div
            ref={megaRef}
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={closeMegaDelayed}
          >
            <button
              onClick={() => setMegaOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                megaOpen ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              What We Do
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  megaOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <MegaMenu onClose={() => setMegaOpen(false)} />
              )}
            </AnimatePresence>
          </div>

          {/* Flat links */}
          {FLAT_LINKS.map((link) => (
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

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-3"
        >
          <button className="text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm">
            Client Login
          </button>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 px-4 py-4 overflow-hidden"
          >
            {/* What We Do expandable */}
            <div className="mb-2">
              <p className="text-white/90 text-sm font-semibold py-2">What We Do</p>
              <div className="pl-3 flex flex-col gap-1 mb-3">
                {CAPABILITIES.flatMap((c) => c.items).map((item) => (
                  <a key={item} href="#" className="text-slate-400 hover:text-white text-sm py-1 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
              <p className="text-white/90 text-sm font-semibold py-2">Industries</p>
              <div className="pl-3 flex flex-col gap-1 mb-3">
                {INDUSTRIES.map((item) => (
                  <a key={item} href="#" className="text-slate-400 hover:text-white text-sm py-1 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {FLAT_LINKS.map((link, i) => (
              <a
                key={`mobile-${i}`}
                href={link.href}
                className="block text-white/80 hover:text-white text-sm font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-3 mt-2 border-t border-white/10">
              <button className="text-white/80 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium">
                Client Login
              </button>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
