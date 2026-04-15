const LOGOS = [
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-1.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-2.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-3.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/12/primary-logo-1.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-5.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-6.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/12/omnissa_tm-logo-clr-rgb.png",
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-8.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-9.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/07/greyscale_HP-10.svg",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Sophos_logo.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Synology_Logo.svg.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Tenable_Inc._logo.svg.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Ubiquiti_Logo_Horizontal.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Yealink_logo.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Zoom-Logo-Vector-1-1.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/4e35fb7c-c690-4571-841b-d1b7368c67cc-e1726751557309.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Alcatel_Lucent_Enterprise_Logo.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Barracuda-Networks-logo.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Godaddylogo_2020.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Hewlett_Packard_Enterprise_logo.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Lenovo-Logo-Transparent-PNG.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/Logitech_logo.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/logo-10zig.png",
  "https://www.advance2000.com/wp-content/uploads/2024/12/microsoft-logo-microsoft-icon-transparent-free-png.png",
];

const mid = Math.ceil(LOGOS.length / 2);
const TOP_LOGOS = LOGOS.slice(0, mid);
const BOT_LOGOS = LOGOS.slice(mid);

function MarqueeTrack({
  logos,
  direction,
}: {
  logos: string[];
  direction: "left" | "right";
}) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  const strip = [...logos, ...logos];

  return (
    <div className="marquee-track overflow-hidden">
      <div className={`flex gap-12 w-max ${animClass}`}>
        {strip.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0 h-12 w-32"
          >
            <img
              src={src}
              alt={`Partner ${i + 1}`}
              className="max-h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partnerships() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-6xl mx-auto border-t border-slate-200 pt-16">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-12">
          <h2 className="text-slate-900 font-extrabold text-3xl sm:text-4xl tracking-tight shrink-0 mb-6 md:mb-0">
            Partnerships
          </h2>
          <p className="text-slate-600 text-base leading-relaxed md:max-w-[60%]">
            It requires a strong ecosystem of strategic partnerships aligned
            around innovation, performance, and trust to build great business
            solutions. We continuously evaluate, test, and adopt emerging
            technologies to ensure our clients stay secure, competitive, and
            ahead of what's next.
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
            style={{
              background:
                "linear-gradient(to right, white 0%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
            style={{
              background:
                "linear-gradient(to left, white 0%, transparent 100%)",
            }}
          />

          <div className="flex flex-col gap-6 overflow-hidden">
            <MarqueeTrack logos={TOP_LOGOS} direction="left" />
            <MarqueeTrack logos={BOT_LOGOS} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
