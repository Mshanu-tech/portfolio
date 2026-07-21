import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const updateActiveSection = () => {
      const visible = sections.filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35;
      });

      if (visible.length > 0) {
        setActive(`#${visible[0].id}`);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
              scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
            }`}
          >
            <a
              href="#home"
              onClick={() => setActive("#home")}
              className="flex items-center gap-3 group"
            >
              <img
                src="/images/image.jpg"
                alt={personal.name}
                className="h-9 w-9 rounded-xl object-cover ring-1 ring-white/15"
                width={36}
                height={36}
              />
              <span className="hidden sm:block leading-tight">
                <span className="block font-display font-semibold text-sm">{personal.name}</span>
                <span className="block text-xs text-muted">{personal.role.replace(" (MERN Stack)", "")}</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                    active === link.href ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>

            <MagneticButton
              as="a"
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 border border-primary/50 px-5 py-2 text-sm font-medium hover:bg-primary/10 transition-colors glow-border"
            >
              Hire Me
              <span className="h-1.5 w-1.5 bg-success animate-pulse" />
            </MagneticButton>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-xl glass"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className="font-display text-2xl font-medium text-white/90 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setActive("#contact");
                  setOpen(false);
                }}
                className="mt-4 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium"
              >
                Hire Me
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
