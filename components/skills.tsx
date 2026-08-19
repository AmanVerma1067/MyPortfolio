"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Globe, Brain, Server, Database, BookOpen, Terminal, Sparkles, Cpu, Layers, Workflow, Eye, Shield, Boxes, Activity } from "lucide-react"
import { 
  SiCplusplus, SiPython, SiPhp, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiFlutter, SiStreamlit, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiFlask, SiFastapi,
  SiMongodb, SiPostgresql, SiMysql, SiAmazon, SiDocker, SiGit, SiLinux, SiPostman, SiPytorch, SiTensorflow
} from "react-icons/si"
import { VscAzure } from "react-icons/vsc"
import { FaCuttlefish, FaBrain, FaNetworkWired, FaServer, FaLock, FaRobot, FaTerminal, FaLayerGroup } from "react-icons/fa"
import { BiNetworkChart, BiCodeAlt } from "react-icons/bi"
import { TbApi, TbBrandOauth } from "react-icons/tb"
import { CodolioIcon } from "./custom-icons"

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Querying",
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(56,189,248,0.25)",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: FaCuttlefish },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
      { name: "SQL", icon: Database },
      { name: "Bash", icon: FaTerminal },
    ],
  },
  {
    icon: BookOpen,
    title: "Core CS & Algorithms",
    color: "from-blue-400 to-indigo-500",
    glowColor: "rgba(99,102,241,0.25)",
    skills: [
      { name: "DSA (2094 Peak)", icon: CodolioIcon, url: "https://codolio.com/profile/aman1067" },
      { name: "System Design", icon: BiNetworkChart },
      { name: "Operating Systems", icon: FaServer },
      { name: "DBMS & SQL", icon: Database },
      { name: "OOP", icon: Code },
      { name: "Computer Networks", icon: FaNetworkWired },
      { name: "PHPUnit & Postman", icon: SiPostman },
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.25)",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-Learn", icon: Cpu },
      { name: "Deep Learning", icon: FaBrain },
      { name: "Computer Vision", icon: Eye },
      { name: "OpenCV", icon: Eye },
      { name: "YOLOv5 (Edge CV)", icon: Eye },
      { name: "ResNet-50", icon: FaLayerGroup },
    ],
  },
  {
    icon: Sparkles,
    title: "LLMs & GenAI Systems",
    color: "from-fuchsia-500 to-purple-600",
    glowColor: "rgba(217,70,239,0.25)",
    skills: [
      { name: "Gemini API", icon: Sparkles },
      { name: "LangChain", icon: Layers },
      { name: "CrewAI (Multi-Agent)", icon: FaRobot },
      { name: "RAG Pipelines", icon: Database },
      { name: "Vector Search", icon: Database },
      { name: "spaCy (NER)", icon: Brain },
      { name: "Hugging Face", icon: Brain },
      { name: "Prompt Engineering", icon: Code },
    ],
  },
  {
    icon: Server,
    title: "Backend & Distributed APIs",
    color: "from-orange-400 to-amber-500",
    glowColor: "rgba(251,146,60,0.25)",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs", icon: TbApi },
      { name: "WebSocket / Socket.IO", icon: BiNetworkChart },
      { name: "JWT Auth & RBAC", icon: FaLock },
      { name: "Time-Series Telemetry", icon: Activity },
    ],
  },
  {
    icon: Globe,
    title: "Frontend, Cloud & DevOps",
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.25)",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flutter (Offline)", icon: SiFlutter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
      { name: "Git & Linux", icon: SiGit },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleProjectsClick = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="skills"
      className="section-shell surface-section-alt"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="section-kicker">
            Technical Expertise
          </p>
          <h2 className="section-title mb-6">
            Skills & Technologies
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`glass-card group relative p-6 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 ${
                categoryIndex < 3 ? "lg:col-span-2" : "lg:col-span-2"
                }`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ background: category.glowColor }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const skillUrl = (skill as any).url;
                  const Wrapper = skillUrl ? motion.a : motion.div;
                  const wrapperProps = skillUrl
                    ? {
                        href: skillUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 group/skill",
                        title: `Showcase DSA profile on Codolio`
                      }
                    : {
                        className: "flex cursor-default items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 group/skill"
                      };

                  return (
                    <Wrapper
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + categoryIndex * 0.08 + skillIndex * 0.04,
                      }}
                      style={
                        {
                          "--tw-gradient-from": category.color.includes("cyan")
                            ? "#22d3ee"
                            : category.color.includes("blue")
                              ? "#60a5fa"
                              : category.color.includes("violet")
                                ? "#8b5cf6"
                                : category.color.includes("emerald")
                                  ? "#34d399"
                                  : category.color.includes("orange")
                                    ? "#fb923c"
                                    : "#fb7185",
                        } as React.CSSProperties
                      }
                      onMouseEnter={(e) => {
                        const el = e.currentTarget
                        el.style.background = `linear-gradient(135deg, ${category.color
                          .replace("from-", "")
                          .replace("to-", "")
                          .split(" ")
                          .map((c) => {
                            const colorMap: Record<string, string> = {
                              "cyan-400": "#22d3ee",
                              "blue-500": "#3b82f6",
                              "blue-400": "#60a5fa",
                              "indigo-500": "#6366f1",
                              "violet-500": "#8b5cf6",
                              "purple-600": "#9333ea",
                              "emerald-400": "#34d399",
                              "teal-500": "#14b8a6",
                              "orange-400": "#fb923c",
                              "amber-500": "#f59e0b",
                              "rose-400": "#fb7185",
                              "pink-500": "#ec4899",
                            }
                            return colorMap[c] || c
                          })
                          .join(", ")})`
                        el.style.boxShadow = `0 4px 15px ${category.glowColor}`
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.background = ""
                        el.style.boxShadow = ""
                      }}
                      {...wrapperProps}
                    >
                      <skill.icon className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover/skill:text-white transition-colors" />
                      <span>{skill.name}</span>
                    </Wrapper>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={handleProjectsClick}
            className="primary-btn"
          >
            View My Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}