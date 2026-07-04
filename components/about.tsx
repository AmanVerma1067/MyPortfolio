"use client"
 
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Brain, Code, GraduationCap, Smartphone, Swords, Trophy } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI/ML & Deep Learning",
    description: "LangChain, Hugging Face, NLP",
  },
  {
    icon: Swords,
    title: "LeetCode Knight",
    description: "1000+ solved · Peak 2094",
  },
  {
    icon: Code,
    title: "Full-Stack Engineer",
    description: "Next.js, Node.js, Scalable APIs",
  },
  {
    icon: Smartphone,
    title: "Mobile App Developer",
    description: "Offline-first Flutter apps",
  },
]

const achievements = [
  "1st Place — BitBox 5.0 (GDG Noida)",
  "Finalist — Innovate 3.0 National Hackathon",
  "LeetCode Knight (Peak Rating: 2094)",
  "Academic Letter of Appreciation, JIIT",
]

const stats = [
  { value: "2094", label: "LeetCode Peak" },
  { value: "8.6", label: "B.Tech CGPA" },
  { value: "1st", label: "Hackathon Rank" },
  { value: "1000+", label: "Problems Solved" },
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
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-500 dark:text-blue-400">
                My Intro
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white lg:text-5xl">
                About Me
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
              <p className="text-balance">
                I'm a final-year B.Tech student at Jaypee Institute of Information Technology, specializing in Electronics & Communication Engineering with a strong focus on Software Engineering, Full-Stack Web architectures, and AI/ML pipelines.
              </p>
              <p className="text-balance">
                My projects, including the award-winning <span className="font-semibold text-blue-500 dark:text-blue-400">SahYatri</span> public transport analytics system, reflect my interest in practical engineering: clean APIs, optimized data flows, and scalable system components.
              </p>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="rounded-2xl border border-slate-200/60 bg-slate-50/50 p-4 text-center dark:border-white/5 dark:bg-slate-800/30"
                >
                  <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleContactClick}
                className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-700/30"
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
            <div className="relative rounded-[2.5rem] border border-slate-200/80 bg-white/70 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/25 md:p-8 min-h-[480px] flex flex-col justify-between">
              
              {/* Tab Bar */}
              <div className="flex gap-1.5 p-1 mb-8 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/40 dark:border-white/5 relative z-20">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute inset-0 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/50 dark:border-white/5 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="flex-1 flex flex-col justify-center">
                
                {/* Expertise Tab */}
                {activeTab === "expertise" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {highlights.map((highlight, index) => (
                      <div
                        key={highlight.title}
                        className="group relative rounded-2xl border border-slate-200/50 bg-slate-50/40 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/5 dark:bg-slate-800/30 dark:hover:bg-slate-800/80"
                      >
                        <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:bg-blue-500/15 dark:text-blue-300">
                          <highlight.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                        </div>
                        <h4 className="mb-1 font-semibold text-slate-950 dark:text-white">{highlight.title}</h4>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-5"
                  >
                    <div className="rounded-2xl border border-slate-200/50 bg-slate-50/40 p-5 dark:border-white/5 dark:bg-slate-800/30">
                      <div className="flex items-center gap-3.5 mb-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-300">
                          <GraduationCap className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="font-bold text-slate-950 dark:text-white leading-snug">
                            Jaypee Institute of Information Technology
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">2023 – 2027 · Noida, India</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                        B.Tech in Electronics & Communication Engineering
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Specialization in Computer Science
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-500/10 px-3.5 py-1.5 text-xs md:text-sm font-bold text-blue-600 dark:text-blue-300">
                        <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                        CGPA: 8.6 / 10
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200/50 bg-slate-50/40 p-5 dark:border-white/5 dark:bg-slate-800/30">
                      <div className="flex items-center gap-3 mb-3.5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-300">
                          <Award className="h-5 w-5" />
                        </span>
                        <h4 className="font-bold text-slate-950 dark:text-white">Areas of Focus</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-300">
                          LangChain & Hugging Face GenAI
                        </span>
                        <span className="rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-300">
                          Data Science, ML & NLP
                        </span>
                        <span className="rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-300">
                          Algorithms & optimization
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Achievements Tab */}
                {activeTab === "achievements" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3.5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-300">
                        <Trophy className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">Key Achievements</h3>
                    </div>
                    <div className="grid gap-3">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3.5 rounded-xl border border-slate-200/50 bg-slate-50/40 p-4 transition-all duration-300 hover:bg-white dark:border-white/5 dark:bg-slate-800/30 dark:hover:bg-slate-800/80"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                            <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
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
