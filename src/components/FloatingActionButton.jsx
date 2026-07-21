import { MessageCircle } from "lucide-react";
import { personal } from "../data/portfolioData";

// Sticky WhatsApp-style FAB for quick contact on mobile.
export default function FloatingActionButton() {
  return (
    <a
      href={personal.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-20 md:bottom-8 z-[65] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40 active:scale-95 transition-transform"
      aria-label="Message on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
