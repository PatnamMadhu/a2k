import { motion } from "framer-motion";
import { PhoneCall, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left — contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact Us
          </h2>
          <p className="text-slate-600 font-medium text-lg mt-3">
            Thank You for Visiting Our Site
          </p>

          <a
            href="https://meetings.advance2000.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 mb-10 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200"
          >
            Book a meeting
          </a>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-cyan-500 shrink-0" />
              <span className="text-slate-700 font-medium">(800) 238-2621</span>
            </div>
            <div className="flex items-center gap-3">
              <Send className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="text-slate-700 font-medium">info@advance2000.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right — form card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-10"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Schedule a meeting with an expert.
          </h3>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200"
              />
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200"
              />
            </div>

            {/* Row 3 */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200"
            />

            {/* Row 4 */}
            <textarea
              placeholder="How can we help you?"
              rows={4}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-200"
            />

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-600/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
