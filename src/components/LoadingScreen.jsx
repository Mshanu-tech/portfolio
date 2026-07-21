import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Brief branded loading screen with a GSAP-driven intro reveal.
// Calls onComplete once the exit animation finishes so the page can render.
export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: prefersReduced ? 0.01 : 0.8,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    tl.to(counter, {
      value: 100,
      duration: prefersReduced ? 0.01 : 1.4,
      ease: "power2.out",
      onUpdate: () => setProgress(Math.floor(counter.value)),
    }).to(
      barRef.current,
      { scaleX: 1, duration: prefersReduced ? 0.01 : 1.4, ease: "power2.out" },
      "<"
    );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
    >
      <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-gradient">
        Muhammed Shanu A
      </div>
      <div className="mt-6 h-[2px] w-48 bg-white/10 overflow-hidden rounded-full">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-accent"
        />
      </div>
      <div className="mt-3 text-sm tabular-nums text-muted">{progress}%</div>
    </div>
  );
}
