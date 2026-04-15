import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Menu, X } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const NAV_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Who We Are", href: "#" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Careers", href: "#" },
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
          ? "py-3 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
          : "py-5 bg-slate-950/80 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30"
          >
            Contact Us
          </a>
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
          {NAV_LINKS.map((link, i) => (
            <a
              key={`mobile-${i}`}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            <button className="text-white/80 border border-white/20 px-4 py-2 rounded-lg text-sm font-medium">
              Client Login
            </button>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

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

export default function Contact() {
  return (
    <div className="font-sans antialiased bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-1">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
