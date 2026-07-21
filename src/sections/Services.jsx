import { motion } from "framer-motion";
import { Layers, Smartphone, Server, LayoutDashboard, Palette, Gauge } from "lucide-react";
import { services } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

const icons = { layers: Layers, smartphone: Smartphone, server: Server, "layout-dashboard": LayoutDashboard, palette: Palette, gauge: Gauge };

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="What I Offer" title="Services built around your product" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="glow-border glass rounded-2xl p-6 hover-glow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 text-accent mb-5">
                  <Icon size={22} />
                </span>
                <h3 className="font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
