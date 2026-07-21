import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";
import useCountUp from "../hooks/useCountUp";

function Counter({ item, index }) {
  const { ref, value } = useCountUp(item.value, 1600 + index * 200);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
        {value}
        {item.suffix}
      </div>
      <p className="mt-2 text-sm text-muted">{item.label}</p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="glass-strong rounded-3xl px-6 sm:px-10 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {achievements.map((item, i) => (
            <Counter key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
