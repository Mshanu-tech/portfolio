import { useMemo } from "react";

// Ambient floating particles used behind hero/CTA sections.
// Purely decorative — generated once and animated via CSS.
export default function Particles({ count = 18 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 12 + Math.random() * 14,
        delay: Math.random() * 12,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: "-10%",
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
