import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import Particles from "../components/Particles";

// Closing call-to-action before the footer.
export default function CtaBanner() {
  return (
    <section className="relative py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass-strong px-6 sm:px-12 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="aurora opacity-60" />
          <Particles count={10} />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">Let&rsquo;s Work Together</h2>
            <p className="mt-3 text-muted">
              I&rsquo;m currently open to new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out.
            </p>
            <MagneticButton
              as="a"
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-medium shadow-lg shadow-primary/30 min-h-[48px]"
            >
              Get In Touch <ArrowRight size={17} />
            </MagneticButton>
          </div>
          <div className="relative z-10 hidden md:grid h-32 w-32 place-items-center rounded-full glass">
            <Mail size={44} className="text-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
