import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDatabase,
  FaBootstrap, FaJava, FaServer, FaGlobe, FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman,
  SiRedux, SiMui, SiJsonwebtokens, SiNotion, SiFirebase, SiCloudinary, SiCloudflare,
  SiVercel, SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code2 } from "lucide-react";
import { skills } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";

const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  typescript: SiTypescript,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  cloudinary: SiCloudinary,
  cloudflare: SiCloudflare,
  vercel: SiVercel,
  render: SiRender,
  hostinger: FaServer,
  godaddy: FaGlobe,
  mileweb: FaServer,
  gitbash: FaTerminal,
  git: FaGitAlt,
  github: FaGithub,
  vscode: VscVscode,
  figma: FaFigma,
  postman: SiPostman,
  redux: SiRedux,
  bootstrap: FaBootstrap,
  mui: SiMui,
  jwt: SiJsonwebtokens,
  notion: SiNotion,
  firebase: SiFirebase,
  java: FaJava,
  bcrypt: Code2,
  ejs: Code2,
  c: Code2,
};

const iconColor = {
  html5: "#E34F26", css3: "#1572B6", javascript: "#F7DF1E", typescript: "#3178C6",
  react: "#61DAFB", nextjs: "#FFFFFF", tailwind: "#38BDF8", nodejs: "#3C873A",
  express: "#FFFFFF", mongodb: "#47A248", mysql: "#4479A1", cloudinary: "#3448C5",
  cloudflare: "#F38020", vercel: "#FFFFFF", render: "#66C2FF", hostinger: "#1D4ED8",
  godaddy: "#1F2937", mileweb: "#0EA5E9", gitbash: "#4B5563", git: "#F05032",
  github: "#FFFFFF", vscode: "#007ACC", figma: "#F24E1E", postman: "#FF6C37",
  redux: "#764ABC", bootstrap: "#7952B3", mui: "#007FFF", jwt: "#FB015B",
  notion: "#FFFFFF", firebase: "#FFCA28", java: "#f89820", bcrypt: "#6b7280",
  ejs: "#a1a1aa", c: "#a8b9cc",
};

function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.icon] || FaDatabase;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 6) * 0.06, duration: 0.5 }}
      className="group glass rounded-2xl p-5 hover-glow relative overflow-hidden"
    >
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
        className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 mb-4"
      >
        <Icon size={24} color={iconColor[skill.icon]} />
      </motion.div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-sm">{skill.name}</h3>
        <span className="text-xs text-accent font-semibold">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: skill.level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="h-full origin-left rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState("All");
  const tabs = ["All", ...categories];

  const visible =
    active === "All"
      ? categories.flatMap((c) => skills[c])
      : skills[active] || [];

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="My Skills" title="Tools &amp; technologies I work with" />

        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors min-h-[40px] ${
                active === tab
                  ? "bg-gradient-to-r from-primary to-accent border-transparent"
                  : "border-white/10 text-muted hover:text-white hover:border-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {visible.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
