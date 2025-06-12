"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Globe, Brain, Settings } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "C++", level: 90, icon: "💻" },
      { name: "Python", level: 95, icon: "🐍" },     
      { name: "JavaScript", level: 77, icon: "🟨" },
      { name: "TypeScript", level: 65, icon: "🔷" },
    ],
  },
  {
    icon: Globe,
    title: "Web & App Development",
    color: "from-green-500 to-green-600",
    skills: [
      { name: "Flutter", level: 90, icon: "📱" },
      { name: "Tailwind CSS", level: 82, icon: "🎨" },
      { name: "React/Next.js", level: 79, icon: "⚛️" },
      { name: "Node.js", level: 75, icon: "🟢" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Generative AI", level: 82, icon: "🧬" },
      { name: "Deep Learning", level: 87, icon: "🧠" },
      { name: "Scikit-learn", level: 85, icon: "📊" },
      { name: "OpenCV", level: 78, icon: "👁️" },
    ],
  },
  {
    icon: Settings,
    title: "Tools & Frameworks",
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "Git/GitHub", level: 95, icon: "🔧" },
      { name: "Docker", level: 82, icon: "🐳" },
      { name: "AWS", level: 78, icon: "☁️" },
      { name: "MongoDB", level: 85, icon: "🍃" },
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
    <section className="bg-slate-50 dark:bg-slate-800 py-24 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Technical <span className="text-blue-500 dark:text-blue-400">Expertise</span>
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different domains of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
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
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            View My Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
