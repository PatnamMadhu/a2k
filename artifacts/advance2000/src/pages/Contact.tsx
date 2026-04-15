import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

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
