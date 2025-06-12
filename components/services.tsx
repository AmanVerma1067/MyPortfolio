"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Smartphone, Brain } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web solutions using modern frameworks and best practices.",
    features: ["Responsive Design", "Modern Frameworks (React, Node.js)", "Performance Optimization"],
    gradient: "from-blue-500 to-blue-600",
    hoverGradient: "group-hover:from-blue-600 group-hover:to-blue-700",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building scalable cross-platform apps using Flutter and real-time data pipelines.",
    features: ["Flutter/Dart Development", "Firebase and API Integration", "Real-time Updates and Notifications"],
    gradient: "from-green-500 to-green-600",
    hoverGradient: "group-hover:from-green-600 group-hover:to-green-700",
  },
  {
    icon: Brain,
    title: "Generative AI Solutions",
    description: "Delivering intelligent systems powered by computer vision and generative AI.",
    features: ["OCR & Computer Vision", "Deep Learning (PyTorch, OpenCV)", "GenAI with LLMs and Diffusion Models"],
    gradient: "from-purple-500 to-purple-600",
    hoverGradient: "group-hover:from-purple-600 group-hover:to-purple-700",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            My <span className="text-blue-500 dark:text-blue-400">Services</span>
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-4">What I Do</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I specialize in creating comprehensive digital solutions that combine modern technology with practical
            business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} ${service.hoverGradient} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} opacity-20 blur-xl transition-all duration-300 group-hover:opacity-40`}
                ></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>

                {/* Feature list */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                      className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}
                      ></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-slate-100/5 dark:to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
            Ready to bring your ideas to life? Let's discuss your project.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}
