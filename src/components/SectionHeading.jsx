import { motion } from "framer-motion";

// Consistent eyebrow + heading treatment used across sections.
export default function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-10 md:mb-14 ${align === "center" ? "text-center mx-auto" : ""}`}
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-secondary">
        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(124,58,237,0.8)]" />
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
