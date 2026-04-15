import { Cloud, PhoneCall, Send, MapPin } from "lucide-react";

const FOOTER_LINKS = [
  {
    heading: "Assessment",
    items: ["AI Readiness", "Cybersecurity Risk", "IT Strategy"],
  },
  {
    heading: "Modernization",
    items: [
      "Private Cloud Computing",
      "File Collaboration (Privata)",
      "Meeting Collaboration (Cloud In Touch)",
      "Private AI",
      "Infrastructure",
    ],
  },
  {
    heading: "Services",
    items: [
      "Data Resiliency",
      "Network Operations (NOC)",
      "Help Desk",
      "Premium Support",
      "Cybersecurity",
      "IT Project Management",
    ],
  },
  {
    heading: "Partnership",
    items: ["Strategic Partnerships"],
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

const COMPANY = ["Our Approach", "Who We Are", "Careers", "Blog"];

const INFORMATION = [
  "RTO/RPO",
  "Cloud Desktop Best Practices",
  "Cloud Availability",
  "Service Response (SLA)",
  "Uptime History",
];

function LinkGroup({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) {
  return (
    <div>
      <p className="text-white font-semibold text-sm mb-3">{heading}</p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 text-sm leading-snug transition-colors duration-150"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/8">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[220px_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shrink-0">
                <Cloud className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">
                ADVANCE<span className="text-cyan-400">2000</span>
              </span>
            </a>

            <div className="flex flex-col gap-3">
              <a
                href="tel:8002382621"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <PhoneCall className="w-4 h-4 text-cyan-500 shrink-0" />
                (800) 238-2621
              </a>
              <a
                href="mailto:info@advance2000.com"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Send className="w-4 h-4 text-blue-400 shrink-0" />
                info@advance2000.com
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Service presence in United States and Canada
                </span>
              </div>
            </div>
          </div>

          {/* Capabilities: Assessment + Modernization stacked */}
          <div className="flex flex-col gap-8">
            {FOOTER_LINKS.slice(0, 2).map((group) => (
              <LinkGroup key={group.heading} {...group} />
            ))}
          </div>

          {/* Services + Partnership stacked */}
          <div className="flex flex-col gap-8">
            {FOOTER_LINKS.slice(2).map((group) => (
              <LinkGroup key={group.heading} {...group} />
            ))}
          </div>

          {/* Industries */}
          <div>
            <LinkGroup heading="Industries" items={INDUSTRIES} />
          </div>

          {/* Company + Information stacked */}
          <div className="flex flex-col gap-8">
            <LinkGroup heading="Company" items={COMPANY} />
            <LinkGroup heading="Information" items={INFORMATION} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Advance2000. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
