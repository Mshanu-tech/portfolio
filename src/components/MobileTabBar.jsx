import { Home, User, Layers, FolderKanban, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: User },
  { href: "#skills", label: "Skills", Icon: Layers },
  { href: "#projects", label: "Work", Icon: FolderKanban },
  { href: "#contact", label: "Contact", Icon: Mail },
];

// App-like bottom navigation shown only on small screens.
export default function MobileTabBar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = items.map((i) => document.querySelector(i.href)).filter(Boolean);

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
    <nav
      className="fixed bottom-0 inset-x-0 z-[70] md:hidden glass-strong border-t border-white/10 pb-[env(safe-area-inset-bottom)]"
      aria-label="Primary"
    >
      <div className="flex items-center justify-between px-2">
        {items.map(({ href, label, Icon }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className="flex flex-1 flex-col items-center gap-1 py-2.5 min-w-[56px] min-h-[56px] justify-center"
            >
              <Icon
                size={20}
                className={isActive ? "text-accent" : "text-muted"}
                strokeWidth={isActive ? 2.4 : 2}
              />
              <span className={`text-[10px] ${isActive ? "text-accent" : "text-muted"}`}>{label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
