import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";
import { experienceTimeline } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

const icons = { briefcase: Briefcase, graduation: GraduationCap, book: BookOpen };
const colorMap = {
  primary: "bg-primary/20 text-primary border-primary/40",
  success: "bg-success/20 text-success border-success/40",
  accent: "bg-accent/20 text-accent border-accent/40",
};

// A dedicated, larger interactive timeline (complements the compact one in About).
export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Journey" title="Experience" align="center" />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden sm:block" />

          <div className="space-y-10">
            {experienceTimeline.map((item, i) => {
              const Icon = icons[item.icon];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-10 sm:items-stretch`}
                >
                  <div className={`${isLeft ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"} h-full`}>
                    <div className="glass rounded-2xl p-5 sm:p-6 hover-glow w-full h-full flex flex-col justify-center">
                      <span className="text-xs text-accent font-semibold">{item.period}</span>
                      <h3 className="font-display font-semibold mt-1">{item.title}</h3>
                      <p className="text-sm text-secondary mt-0.5">{item.place}</p>
                      <p className="text-sm text-muted mt-2">{item.description}</p>
                    </div>
                  </div>

                  <span
                    className={`hidden sm:grid absolute left-1/2 -translate-x-1/2 h-11 w-11 place-items-center rounded-full border ${colorMap[item.color]} glass-strong`}
                  >
                    <Icon size={17} />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
