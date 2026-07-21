import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Wraps any button/link content and gives it a subtle magnetic pull toward the cursor.
export default function MagneticButton({ children, className = "", as: Component = "button", strength = 0.35, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`magnetic inline-block ${className}`}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
