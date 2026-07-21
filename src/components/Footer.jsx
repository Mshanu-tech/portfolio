import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { personal, navLinks } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <div className="glass-strong rounded-3xl px-6 sm:px-10 py-10 grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-3 mb-3">
              <img
                src="/images/image.jpg"
                alt={personal.name}
                className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/15"
                width={40}
                height={40}
              />
              <span>
                <span className="block font-display font-semibold">{personal.name}</span>
                <span className="block text-xs text-muted">Full Stack Developer</span>
              </span>
            </a>
            <p className="text-sm text-muted max-w-xs">{personal.tagline}</p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-3">
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
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl glass hover-glow"
                >
                  <Icon size={18}  className="mt-[10px]" />
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>&copy; {year} {personal.name}. All rights reserved.</p>
          <p>Built with React, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>

      <MagneticButton
        onClick={scrollTop}
        aria-label="Back to top"
        className="fixed right-5 bottom-36 md:bottom-24 z-[60] grid h-11 w-11 place-items-center rounded-full glass-strong hover-glow"
      >
        <ArrowUp size={18} />
      </MagneticButton>
    </footer>
  );
}
