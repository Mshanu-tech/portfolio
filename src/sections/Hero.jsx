import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Download, ArrowRight, ChevronDown } from "lucide-react";
import { personal, stats } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";
import Particles from "../components/Particles";
import useCountUp from "../hooks/useCountUp";

const floatIcons = [
  { label: "React", color: "#61DAFB", top: "8%", left: "78%", delay: 0 },
  { label: "Node", color: "#3C873A", top: "22%", left: "6%", delay: 0.6 },
  { label: "JS", color: "#F7DF1E", top: "68%", left: "84%", delay: 1.1 },
  { label: "MDB", color: "#47A248", top: "78%", left: "10%", delay: 1.6 },
];

function StatCard({ item, index }) {
  const { ref, value } = useCountUp(item.value, 1400 + index * 150);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="glass rounded-2xl px-4 py-4 sm:px-5 hover-glow"
    >
      <div className="font-display text-xl sm:text-2xl font-bold">
        {value}
        {item.suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted">{item.sub}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      <div className="aurora" />
      <div className="grid-bg absolute inset-0" />
      <Particles count={16} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight"
          >
            Hi, I&apos;m
            <br />
            <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-base sm:text-lg text-muted"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow min-h-[48px]"
            >
              Download CV <Download size={18} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium hover:bg-white/5 transition-colors min-h-[48px]"
            >
              Contact Me <ArrowRight size={18} />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { Icon: Github, href: personal.social.github, label: "GitHub" },
              { Icon: Linkedin, href: personal.social.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: personal.social.email, label: "Email" },
              { Icon: MessageCircle, href: personal.social.whatsapp, label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <MagneticButton
                as="a"
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full glass hover-glow"
              >
                <Icon size={18} className="mt-[10px]" />
              </MagneticButton>
            ))}
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            {stats.map((item, i) => (
              <StatCard key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30 blur-2xl" />
          <div className="absolute inset-6 rounded-full border border-white/10 animate-[spin_24s_linear_infinite]" />
          <div className="absolute inset-0 rounded-[2.5rem] glass-strong overflow-hidden">
            <img
              src="/images/image.jpg"
              alt={`${personal.name} — ${personal.role}`}
              className="h-full w-full object-cover"
              width={900}
              height={900}
              fetchPriority="high"
            />
          </div>

          {floatIcons.map((f) => (
            <motion.div
              key={f.label}
              className="absolute grid h-14 w-14 place-items-center rounded-2xl glass-strong font-display text-xs font-bold hover-glow"
              style={{ top: f.top, left: f.left, color: f.color }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: f.delay, ease: "easeInOut" }}
            >
              {f.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-muted"
        aria-label="Scroll to About section"
      >
        <span className="text-xs">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
