import { useEffect, useState } from "react";

// Tracks the viewport mouse position for cursor-follower / parallax effects.
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return position;
}
