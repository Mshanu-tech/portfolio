import { useEffect } from "react";
import Lenis from "lenis";

// Sets up Lenis smooth scrolling for the whole app.
// Respects prefers-reduced-motion by skipping smoothing entirely.
export default function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    // Let internal anchor links use Lenis' smooth scrollTo
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
}
