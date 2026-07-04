"use client"
 
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Swords, Code, Smartphone, Check, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI/ML & Generative AI",
    description:
      "Building intelligent systems with deep learning, NLP, and computer vision — from RAG pipelines to end-to-end ML deployments.",
    features: [
      "RAG Pipelines & LLM Integration",
      "Deep Learning (PyTorch, TensorFlow)",
      "Computer Vision & NLP",
      "ML Model Deployment (Azure, Docker)",
    ],
    gradient: "from-violet-500 to-purple-600",
    hoverGradient: "group-hover:from-violet-600 group-hover:to-purple-700",
  },
  {
    icon: Swords,
    title: "Competitive Programming",
    description:
      "Solving complex algorithmic challenges with optimized C++ solutions — active on Codeforces and CodeChef.",
    features: [
      "Data Structures & Algorithms",
      "Optimized C++ Solutions",
      "Contest Problem Solving",
      "Complexity Analysis & Optimization",
    ],
    gradient: "from-amber-500 to-orange-500",
    hoverGradient: "group-hover:from-amber-600 group-hover:to-orange-600",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Crafting high-performance web applications with modern frameworks, REST APIs, and real-time features.",
    features: [
      "React / Next.js Frontend",
      "Node.js, Flask & FastAPI Backends",
      "Database Design (SQL & NoSQL)",
      "WebSocket & Real-time Systems",
    ],
    gradient: "from-cyan-500 to-blue-500",
    hoverGradient: "group-hover:from-cyan-600 group-hover:to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building scalable cross-platform mobile apps with Flutter, real-time data pipelines, and native-feel UIs.",
    features: [
      "Flutter / Dart Development",
      "Firebase & API Integration",
      "Real-time Updates & Notifications",
      "Cross-platform UI Engineering",
    ],
    gradient: "from-emerald-500 to-teal-500",
    hoverGradient: "group-hover:from-emerald-600 group-hover:to-teal-600",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section-shell surface-section" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="section-kicker">
            My Services
          </p>
          <h2 className="section-title mb-4">What I Do</h2>
          <p className="section-subtitle">
            From AI-powered solutions to competitive programming and full-stack engineering — I build things that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-card group relative overflow-hidden p-8 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer flex flex-col justify-between min-h-[380px]"
            >
              {/* Giant Background Number */}
              <span className="absolute right-8 top-6 text-7xl font-mono font-black text-slate-100 dark:text-slate-800/30 group-hover:text-blue-500/5 dark:group-hover:text-blue-400/5 transition-colors duration-500 pointer-events-none select-none">
                0{index + 1}
              </span>

              {/* Subtle background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Icon */}
                <div className="relative mb-6 w-14 h-14">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} ${service.hoverGradient} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl transition-all duration-300 group-hover:opacity-40 pointer-events-none`}
                  />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.15 + featureIndex * 0.08 + 0.4 }}
                        className="flex items-center text-xs md:text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mr-2.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-300 group-hover:bg-blue-500/10 group-hover:text-blue-500 dark:group-hover:bg-blue-400/20 dark:group-hover:text-blue-400">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom pointer link */}
              <div className="flex items-center gap-1.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/40 text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                <span>Start a Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

            </motion.article>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Ready to bring your ideas to life? Let&apos;s discuss your project.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="primary-btn"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}
