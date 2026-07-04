"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Globe, Brain, Server, Database, BookOpen } from "lucide-react"
import { 
  SiCplusplus, SiPython, SiPhp, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiFlutter, SiStreamlit, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiFlask, SiFastapi,
  SiMongodb, SiPostgresql, SiMysql, SiAmazon, SiDocker, SiGit, SiLinux, SiPostman, SiPytorch, SiTensorflow
} from "react-icons/si"
import { VscAzure } from "react-icons/vsc"
import { FaJava, FaCuttlefish, FaBrain, FaNetworkWired, FaServer, FaLock } from "react-icons/fa"
import { BiNetworkChart, BiCodeAlt } from "react-icons/bi"
import { TbApi, TbBrandOauth } from "react-icons/tb"

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(56,189,248,0.25)",
    skills: [
      { name: "C", icon: FaCuttlefish },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "PHP", icon: SiPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: Database },
    ],
  },
  {
    icon: BookOpen,
    title: "Core CS",
    color: "from-blue-400 to-indigo-500",
    glowColor: "rgba(99,102,241,0.25)",
    skills: [
      { name: "Data Structures & Algorithms", icon: BiCodeAlt },
      { name: "Operating Systems", icon: FaServer },
      { name: "DBMS", icon: Database },
      { name: "OOP", icon: Code },
      { name: "Computer Networks", icon: FaNetworkWired },
      { name: "System Design", icon: BiNetworkChart },
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.25)",
    skills: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "NLP", icon: Brain },
      { name: "Deep Learning", icon: FaBrain },
      { name: "LangChain", icon: Code },
      { name: "Hugging Face", icon: Brain },
      { name: "RAG", icon: Database },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },
  {
    icon: Globe,
    title: "Frontend / Mobile",
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.25)",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flutter", icon: SiFlutter },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    icon: Server,
    title: "Backend / APIs",
    color: "from-orange-400 to-amber-500",
    glowColor: "rgba(251,146,60,0.25)",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Flask", icon: SiFlask },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: TbApi },
      { name: "WebSocket", icon: BiNetworkChart },
      { name: "JWT Authentication", icon: FaLock },
    ],
  },
  {
    icon: Database,
    title: "Databases, Cloud & DevOps",
    color: "from-rose-400 to-pink-500",
    glowColor: "rgba(251,113,133,0.25)",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "AWS", icon: SiAmazon },
      { name: "Azure", icon: VscAzure },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "Linux", icon: SiLinux },
      { name: "CI/CD", icon: Code },
      { name: "Postman", icon: SiPostman },
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
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + categoryIndex * 0.08 + skillIndex * 0.04,
                    }}
                    className="flex cursor-default items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 group/skill"
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
                  >
                    <skill.icon className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover/skill:text-white transition-colors" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
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