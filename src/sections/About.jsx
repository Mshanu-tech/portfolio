import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen, MapPin, Mail, Phone, Languages } from "lucide-react";
import { personal, educationTimeline } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

const icons = { briefcase: Briefcase, graduation: GraduationCap, book: BookOpen };
const colorMap = {
  primary: "bg-primary/20 text-primary",
  success: "bg-success/20 text-success",
  accent: "bg-accent/20 text-accent",
};

const infoItems = [
  { Icon: MapPin, label: "Location", value: personal.location },
  { Icon: Mail, label: "Email", value: personal.email },
  { Icon: Phone, label: "Phone", value: personal.phone },
  { Icon: Languages, label: "Languages", value: personal.languages.join(", ") },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="About Me" title="A little about my journey" />

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 sm:p-8 hover-glow"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/profile-avatar.jpg"
                alt={personal.name}
                className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/15"
                width={64}
                height={64}
                loading="lazy"
              />
              <div>
                <p className="font-display font-semibold">{personal.name}</p>
                <p className="text-sm text-secondary">{personal.role}</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed">{personal.about}</p>

            <dl className="mt-8 grid sm:grid-cols-2 gap-5">
              {infoItems.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon size={16} />
                  </span>
                  <div>
                    <dt className="text-xs text-muted">{label}</dt>
                    <dd className="text-sm font-medium break-words">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
               Education
            </h3>
            <ol className="relative border-l border-white/10 pl-8 space-y-8">
              {educationTimeline.map((item, i) => {
                const Icon = icons[item.icon];
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative"
                  >
                    <span
                      className={`absolute -left-[42px] grid h-8 w-8 place-items-center rounded-full ${colorMap[item.color]}`}
                    >
                      <Icon size={15} />
                    </span>
                    <div className="glass rounded-2xl p-4 sm:p-5 hover-glow">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-semibold">{item.title}</h4>
                        <span className="text-xs text-accent font-medium">{item.period}</span>
                      </div>
                      <p className="text-sm text-secondary mt-0.5">{item.place}</p>
                      <p className="text-sm text-muted mt-2">{item.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
