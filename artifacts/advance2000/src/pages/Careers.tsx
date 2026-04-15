import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Eye,
  DollarSign,
  Heart,
  Umbrella,
  PiggyBank,
  CalendarDays,
  GraduationCap,
  TrendingUp,
  Upload,
  ArrowRight,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

/* ── HERO ── */
function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-700/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-600/6 rounded-full blur-3xl" />
        <HeroCanvas />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">
            Careers at Advance2000
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
        >
          A purpose driven career centered on{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            innovation, value creation,
          </span>{" "}
          and positive impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join a team of driven, curious people who push forward, take
          ownership, and build something meaningful every day.
        </motion.p>

        <motion.a
          href="#apply"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-xl shadow-blue-500/40 hover:shadow-blue-400/50"
        >
          View Open Positions
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}

/* ── CEO QUOTE + PHOTO GRID ── */
const PHOTOS = [
  {
    src: "https://www.advance2000.com/wp-content/uploads/2024/08/Careers-2-1024x683.jpg",
    alt: "Advance2000 team collaboration",
    tall: true,
  },
  {
    src: "https://www.advance2000.com/wp-content/uploads/2024/08/Careers-4-1024x683.jpg",
    alt: "Advance2000 office environment",
    tall: false,
  },
  {
    src: "https://www.advance2000.com/wp-content/uploads/2024/08/Careers-1-1024x683.jpg",
    alt: "Advance2000 team members",
    tall: false,
  },
  {
    src: "https://www.advance2000.com/wp-content/uploads/2024/07/medium-shot-excited-woman-playing-computer-1024x683.jpg",
    alt: "Team member at work",
    tall: false,
  },
  {
    src: "https://www.advance2000.com/wp-content/uploads/2024/08/Careers-3-1024x683.jpg",
    alt: "Advance2000 culture",
    tall: false,
  },
  {
    src: "https://www.advance2000.com/wp-content/uploads/2024/08/Careers-5-1024x683.jpg",
    alt: "Working at Advance2000",
    tall: true,
  },
];

function WhyWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left — quote */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs font-bold tracking-[0.18em] uppercase text-cyan-400 mb-4"
          >
            Why We Do What We Do
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/30" />
            <blockquote className="pl-6 border-l-2 border-blue-500/40">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Helping people and technology are my passions, and Advance2000
                is the place where those two come together. Here we explore new
                technologies, solve real business challenges, and support one
                another as a team. Every day, we can innovate, improve, and
                make a meaningful impact on our clients and their businesses. I
                have the privilege of doing what I love by building, creating,
                and advancing technology, while helping others succeed.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Advance2000 is a place for people who are driven to grow,
                curious, and committed to continuous learning. It is not a
                place for complacency — it's a place for those who want to push
                forward, take ownership, and be part of something meaningful.
                If that resonates with you, you'll find a home here.
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm">
                  BM
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Brian M. Maouad
                  </p>
                  <p className="text-slate-500 text-xs">CEO, Advance2000</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Right — staggered photo grid */}
        <div className="grid grid-cols-3 gap-3">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-xl overflow-hidden ${photo.tall ? "row-span-2" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                style={{ minHeight: photo.tall ? "280px" : "130px" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── VALUES ── */
const VALUES = [
  {
    icon: Users,
    title: "Teamwork",
    body: "We believe true success comes from collaboration; working side by side with our staff, clients, partners and vendors to achieve shared goals and deliver exceptional results.",
    accent: "from-blue-500 to-cyan-500",
    glow: "group-hover:border-blue-400/40 group-hover:shadow-blue-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "Every partnership is built on trust. At Advance2000, we honor the trust our clients place in us by managing IT with integrity, accountability and a relentless drive to exceed expectations.",
    accent: "from-cyan-500 to-teal-500",
    glow: "group-hover:border-cyan-400/40 group-hover:shadow-cyan-500/10",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "We value open and honest communication. From proactive updates to clear reporting, we ensure you always have full visibility into your IT environment and the decisions that impact your business.",
    accent: "from-violet-500 to-indigo-500",
    glow: "group-hover:border-violet-400/40 group-hover:shadow-violet-500/10",
  },
];

function ValuesSection() {
  return (
    <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-cyan-400 mb-3">
            Our Culture
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What we stand for
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map(({ icon: Icon, title, body, accent, glow }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.1)}
              className={`group bg-slate-800/60 border border-white/8 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${glow}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── BENEFITS ── */
const BENEFITS = [
  { icon: DollarSign, label: "Competitive Base Pay" },
  { icon: Heart, label: "Health Insurance" },
  { icon: Umbrella, label: "Life Insurance" },
  { icon: PiggyBank, label: "401K" },
  { icon: CalendarDays, label: "Paid PTO" },
  { icon: GraduationCap, label: "Training & Certification" },
  { icon: TrendingUp, label: "Commission Bonus" },
];

function BenefitsSection() {
  return (
    <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-cyan-400 mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Employee benefits
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {BENEFITS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              {...fadeUp(i * 0.07)}
              className="flex flex-col items-center gap-3 bg-slate-800/50 border border-white/8 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-slate-300 text-sm font-medium text-center leading-snug">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── APPLY FORM ── */
function ApplySection() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="apply"
      className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-cyan-400 mb-3">
            Join Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Apply here
          </h2>
          <p className="text-slate-400">
            Send us your resume and we'll be in touch about current and upcoming
            opportunities.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="bg-slate-800/60 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">
                Application received!
              </h3>
              <p className="text-slate-400">
                Thank you for your interest. Our team will review your
                submission and reach out within a few business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
              </div>

              {/* Resume upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wide">
                  Resume or CV
                </label>
                <label className="group cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="sr-only"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name ?? null)
                    }
                  />
                  <div className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/15 rounded-xl px-6 py-8 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                    <Upload className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    {fileName ? (
                      <span className="text-cyan-400 text-sm font-medium">
                        {fileName}
                      </span>
                    ) : (
                      <>
                        <span className="text-slate-400 text-sm">
                          <span className="text-blue-400 font-semibold">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </span>
                        <span className="text-slate-600 text-xs">
                          PDF, DOC, DOCX — max 10 MB
                        </span>
                      </>
                    )}
                  </div>
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 mt-2"
              >
                Submit Resume
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ── PAGE EXPORT ── */
export default function Careers() {
  return (
    <div className="font-sans antialiased bg-slate-950">
      <Navbar />
      <HeroSection />
      <WhyWeDoSection />
      <ValuesSection />
      <BenefitsSection />
      <ApplySection />
      <Footer />
    </div>
  );
}
