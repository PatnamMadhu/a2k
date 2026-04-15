import { useEffect, useRef } from "react";

interface Ring {
  rx: number;
  ry: number;
  tilt: number;
  speed: number;
  color: [number, number, number];
  nodes: { angle: number; offset: number; size: number; glow: number }[];
}

function buildRings(cx: number, cy: number, scale: number): Ring[] {
  return [
    {
      rx: scale * 0.13,
      ry: scale * 0.055,
      tilt: -0.22,
      speed: 0.0009,
      color: [34, 211, 238],
      nodes: [
        { angle: 0, offset: 0, size: 3.5, glow: 18 },
        { angle: Math.PI, offset: 0, size: 2.2, glow: 10 },
      ],
    },
    {
      rx: scale * 0.24,
      ry: scale * 0.1,
      tilt: -0.18,
      speed: 0.00055,
      color: [59, 130, 246],
      nodes: [
        { angle: 1.1, offset: 0, size: 3, glow: 14 },
        { angle: 2.9, offset: 0, size: 2, glow: 8 },
        { angle: 5.0, offset: 0, size: 2.5, glow: 12 },
      ],
    },
    {
      rx: scale * 0.37,
      ry: scale * 0.155,
      tilt: -0.14,
      speed: 0.00035,
      color: [99, 102, 241],
      nodes: [
        { angle: 0.4, offset: 0, size: 2.8, glow: 13 },
        { angle: 3.5, offset: 0, size: 2, glow: 8 },
      ],
    },
    {
      rx: scale * 0.51,
      ry: scale * 0.215,
      tilt: -0.1,
      speed: 0.00022,
      color: [148, 163, 184],
      nodes: [
        { angle: 2.2, offset: 0, size: 2.2, glow: 9 },
        { angle: 5.3, offset: 0, size: 1.8, glow: 7 },
      ],
    },
  ];
}

function ellipsePoint(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  tilt: number,
  angle: number
): [number, number] {
  const x0 = rx * Math.cos(angle);
  const y0 = ry * Math.sin(angle);
  return [cx + x0 * Math.cos(tilt) - y0 * Math.sin(tilt), cy + x0 * Math.sin(tilt) + y0 * Math.cos(tilt)];
}

export default function OrbitalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rings: Ring[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const scale = Math.min(canvas.width, canvas.height * 1.6);
      rings = buildRings(canvas.width / 2, canvas.height / 2, scale);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;

      ctx.clearRect(0, 0, W, H);
      t += 1;

      for (const ring of rings) {
        const [r, g, b] = ring.color;
        const STEPS = 180;

        ctx.beginPath();
        for (let s = 0; s <= STEPS; s++) {
          const a = (s / STEPS) * Math.PI * 2;
          const [px, py] = ellipsePoint(cx, cy, ring.rx, ring.ry, ring.tilt, a);
          s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(${r},${g},${b},0.10)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        for (const node of ring.nodes) {
          node.angle += ring.speed;
          const angle = node.angle;
          const [nx, ny] = ellipsePoint(cx, cy, ring.rx, ring.ry, ring.tilt, angle);

          const TRAIL = 38;
          for (let k = TRAIL; k >= 1; k--) {
            const ta = angle - (k / TRAIL) * 0.45 * Math.sign(ring.speed);
            const [tx, ty] = ellipsePoint(cx, cy, ring.rx, ring.ry, ring.tilt, ta);
            const alpha = ((TRAIL - k) / TRAIL) * 0.28 * (1 - k / TRAIL);
            ctx.beginPath();
            ctx.arc(tx, ty, node.size * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.fill();
          }

          const grd = ctx.createRadialGradient(nx, ny, 0, nx, ny, node.glow);
          grd.addColorStop(0, `rgba(${r},${g},${b},0.55)`);
          grd.addColorStop(0.4, `rgba(${r},${g},${b},0.18)`);
          grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.arc(nx, ny, node.glow, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
          ctx.fill();
        }
      }

      const hubGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
      hubGrd.addColorStop(0, "rgba(34,211,238,0.35)");
      hubGrd.addColorStop(0.5, "rgba(59,130,246,0.12)");
      hubGrd.addColorStop(1, "rgba(59,130,246,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fillStyle = hubGrd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34,211,238,0.95)";
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
