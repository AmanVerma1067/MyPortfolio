"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "DigiFlute Media Lab",
    type: "Remote",
    duration: "May 2026 – Jul 2026",
    tags: ["PHP", "MongoDB Atlas", "JWT & RBAC", "Multi-Tenant Architecture", "PHPUnit", "Postman", "Agile"],
    highlights: [
      "Engineered 20+ RESTful API endpoints in PHP with MongoDB Atlas for Packspec (a specification-management platform) via a modular middleware-based routing layer in a cross-functional Agile team of 8.",
      "Implemented JWT authentication and role-based access control (RBAC) across 5 tenant/role tiers on a multi-tenant, company-scoped data model with invite-based onboarding, workspace provisioning, and plan-based quota enforcement to prevent cross-tenant data leakage.",
      "Designed workflow-state transitions, revision versioning, and cascading soft-deletes so every spec change / record history stays auditable rather than overwritten; validated consistency with Postman and PHPUnit before merge.",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-shell surface-section-alt" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-kicker">
            My Journey
          </p>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/60 to-blue-500/20 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-800 transform -translate-x-1.5 md:-translate-x-2 z-10 shadow-lg shadow-blue-500/50"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="glass-card p-6 md:p-8 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-500" />
                        {exp.role}
                      </h4>
                      <h5 className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        {exp.company} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">({exp.type})</span>
                      </h5>
                    </div>
                    <div className="flex items-center text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-200/50 dark:border-white/5">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mt-5">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{highlight}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="badge-tech text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
