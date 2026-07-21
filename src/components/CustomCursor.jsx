import { useEffect, useRef } from "react";

// A lightweight animated mouse-follower ring for pointer devices only.
// Uses direct DOM manipulation (not React state) to stay perfectly smooth.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || prefersReduced) return;

    document.body.classList.add("custom-cursor-active");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onDown = () => ringRef.current?.classList.add("scale-75");
    const onUp = () => ringRef.current?.classList.remove("scale-75");

    let frame;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    frame = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent pointer-events-none"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-primary/60 pointer-events-none transition-transform duration-150 ease-out"
      />
    </div>
  );
}
