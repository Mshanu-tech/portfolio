import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { projects, projectCategories } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeading eyebrow="Featured Projects" title="Things I&rsquo;ve built recently" />
          <div className="flex flex-wrap gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors min-h-[40px] ${
                  filter === cat
                    ? "bg-gradient-to-r from-primary to-accent border-transparent"
                    : "border-white/10 text-muted hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <TiltCard className="group glass rounded-2xl overflow-hidden hover-glow h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/30 to-accent/20">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 size={40} className="text-white/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium flex items-center gap-1.5 hover:bg-white/20 transition-colors"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View code on GitHub"
                        className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted mt-2 flex-1">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs rounded-full border border-white/10 px-2.5 py-1 text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent font-medium"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent font-medium"
                      >
                        View Code <Github size={14} />
                      </a>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
