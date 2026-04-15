import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  isHub: boolean;
}

const HUB_COUNT = 1;
const NODE_COUNT = 28;
const MAX_DIST = 220;
const HUB_ATTRACT = 0.012;

function makeNodes(w: number, h: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < NODE_COUNT + HUB_COUNT; i++) {
    const isHub = i === 0;
    nodes.push({
      x: isHub ? w / 2 : Math.random() * w,
      y: isHub ? h / 2 : Math.random() * h,
      vx: isHub ? 0 : (Math.random() - 0.5) * 0.28,
      vy: isHub ? 0 : (Math.random() - 0.5) * 0.28,
      r: isHub ? 4 : 1.5 + Math.random() * 1.5,
      opacity: isHub ? 0.9 : 0.35 + Math.random() * 0.4,
      isHub,
    });
  }
  return nodes;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes = makeNodes(canvas.width, canvas.height);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const hub = nodes[0];

      for (let i = 1; i < nodes.length; i++) {
        const n = nodes[i];

        const dx = hub.x - n.x;
        const dy = hub.y - n.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > 60) {
          n.vx += (dx / d) * HUB_ATTRACT;
          n.vy += (dy / d) * HUB_ATTRACT;
        }

        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        const maxSpeed = 0.42;
        if (speed > maxSpeed) {
          n.vx = (n.vx / speed) * maxSpeed;
          n.vy = (n.vy / speed) * maxSpeed;
        }

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const t = 1 - dist / MAX_DIST;
            const isHubLine = a.isHub || b.isHub;
            const alpha = isHubLine ? t * 0.5 : t * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isHubLine
              ? `rgba(56,189,248,${alpha})`
              : `rgba(148,163,184,${alpha})`;
            ctx.lineWidth = isHubLine ? 0.8 : 0.5;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        if (n.isHub) {
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 24);
          g.addColorStop(0, "rgba(34,211,238,0.55)");
          g.addColorStop(0.45, "rgba(56,189,248,0.18)");
          g.addColorStop(1, "rgba(56,189,248,0)");
          ctx.beginPath();
          ctx.arc(n.x, n.y, 24, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(34,211,238,0.9)";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(148,163,184,${n.opacity * 0.6})`;
          ctx.fill();
        }
      }

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
      style={{ opacity: 0.55 }}
    />
  );
}
