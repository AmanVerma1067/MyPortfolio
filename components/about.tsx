"use client"
 
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Brain, GraduationCap, Server, Sparkles, Trophy, Cpu, Flame } from "lucide-react"
import { CodolioIcon } from "./custom-icons"

const highlights = [
  {
    icon: Brain,
    title: "AI/ML & LLM Systems",
    description: "Gemini API, LangChain, CrewAI, RAG, PyTorch, spaCy",
  },
  {
    icon: CodolioIcon,
    title: "LeetCode Knight",
    description: "1000+ Solved · Peak 2094 · 250-day streak",
    url: "https://codolio.com/profile/aman1067",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "FastAPI, Node.js, MongoDB Atlas, PostgreSQL, RBAC",
  },
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "1st Place BitBox 5.0 (GDG) · Innovate 3.0 Finalist",
  },
]

const achievements = [
  {
    icon: Trophy,
    title: "1st Place — BitBox 5.0 Hackathon",
    desc: "Google Developer Groups (GDG) · Won for SahYatri IoT Edge CV pipeline",
  },
  {
    icon: Award,
    title: "Finalist — Innovate 3.0 Hackathon",
    desc: "Top finalist team for Drive-Sure AI/IoT vehicle telematics system",
  },
  {
    icon: Flame,
    title: "LeetCode Knight (Peak: 2094)",
    desc: "1,000+ DSA problems solved across LeetCode & Codeforces (Top 2.5%)",
  },
  {
    icon: GraduationCap,
    title: "Academic Distinction (JIIT)",
    desc: "Awarded Letter of Appreciation for top coursework standing (8.6 CGPA)",
  },
]

const stats = [
  { value: "2094", label: "LeetCode Peak", url: "https://codolio.com/profile/aman1067" },
  { value: "8.6", label: "B.Tech CGPA" },
  { value: "1st", label: "BitBox 5.0 Rank" },
  { value: "1000+", label: "Problems Solved", url: "https://codolio.com/profile/aman1067" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<"expertise" | "education" | "achievements">("expertise")

  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const tabs = [
    { id: "expertise", label: "Expertise" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
  ] as const

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-slate-900"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          
          {/* Left Column - Intro Narrative & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            <div>
              <p className="section-kicker">
                My Intro
              </p>
              <h2 className="section-title">
                About Me
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              <p className="text-balance">
                I'm a final-year B.Tech student in Electronics & Communication Engineering at <span className="font-semibold text-slate-900 dark:text-white">Jaypee Institute of Information Technology</span>, specializing in AI/ML systems, LLM orchestration, and scalable full-stack backend architectures.
              </p>
              <p className="text-balance">
                From developing adaptive prompt-chaining state machines and fine-tuning transfer learning classifiers to deploying YOLOv5n edge computer vision on Raspberry Pi (<span className="font-semibold text-blue-600 dark:text-blue-400">SahYatri</span>), I engineer high-performance software for real-world impact.
              </p>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, idx) => {
                const StatWrapper = stat.url ? motion.a : motion.div;
                const statProps = stat.url
                  ? {
                      href: stat.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-center dark:border-white/10 dark:bg-slate-800/40 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer block"
                    }
                  : {
                      className: "rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-center dark:border-white/10 dark:bg-slate-800/40"
                    };
                return (
                  <StatWrapper
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    {...statProps}
                  >
                    <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-300">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </StatWrapper>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={handleContactClick}
                className="primary-btn"
              >
                Let's Collaborate
              </button>
            </div>
          </motion.div>

          {/* Right Column - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full"
          >
            <div className="relative rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/30 md:p-7 flex flex-col justify-between">
              
              {/* Tab Bar */}
              <div className="flex gap-1.5 p-1 mb-6 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/50 dark:border-white/5 relative z-20">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute inset-0 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/60 dark:border-white/10 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="w-full">
                
                {/* Expertise Tab */}
                {activeTab === "expertise" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                  >
                    {highlights.map((highlight) => {
                      const HighlightWrapper = (highlight as any).url ? "a" : "div";
                      const highlightProps = (highlight as any).url
                        ? {
                            href: (highlight as any).url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group relative rounded-2xl border border-slate-200/60 bg-slate-50/50 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 dark:border-white/5 dark:bg-slate-800/40 dark:hover:bg-slate-800/80 block cursor-pointer"
                          }
                        : {
                            className: "group relative rounded-2xl border border-slate-200/60 bg-slate-50/50 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 dark:border-white/5 dark:bg-slate-800/40 dark:hover:bg-slate-800/80"
                          };
                      return (
                        <HighlightWrapper key={highlight.title} {...highlightProps}>
                          <div className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                            <highlight.icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-950 dark:text-white">{highlight.title}</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{highlight.description}</p>
                        </HighlightWrapper>
                      );
                    })}
                  </motion.div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3.5"
                  >
                    <div className="rounded-2xl border border-slate-200/60 bg-slate-50/50 p-5 dark:border-white/5 dark:bg-slate-800/40">
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                          <GraduationCap className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="text-sm md:text-base font-bold text-slate-950 dark:text-white leading-snug">
                            Jaypee Institute of Information Technology
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Aug 2023 – May 2027 · Noida, India</p>
                        </div>
                      </div>
                      
                      <p className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                        B.Tech in Electronics & Communication Engineering
                      </p>
                      
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <div className="inline-flex items-center gap-1.5 rounded-xl bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                          <span className="h-2 w-2 rounded-full bg-blue-500" />
                          CGPA: 8.6 / 10
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                          <Award className="h-3.5 w-3.5" />
                          Academic Letter of Appreciation
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/60 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-slate-800/40">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                        Core Academic Focus
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="badge-tech text-xs">AI/ML Systems</span>
                        <span className="badge-tech text-xs">Data Structures & Algorithms</span>
                        <span className="badge-tech text-xs">Operating Systems</span>
                        <span className="badge-tech text-xs">DBMS & SQL</span>
                        <span className="badge-tech text-xs">System Design</span>
                        <span className="badge-tech text-xs">Computer Networks</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Achievements Tab */}
                {activeTab === "achievements" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  >
                    {achievements.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-slate-50/50 p-3.5 transition-all duration-300 hover:bg-white dark:border-white/5 dark:bg-slate-800/40 dark:hover:bg-slate-800/80"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 mt-0.5">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h5 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.title}</h5>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

