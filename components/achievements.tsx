"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Sparkles, Flame, CheckCircle, ExternalLink, GraduationCap, Cpu, Layers } from "lucide-react";
import { CodolioIcon, DevfolioIcon } from "./custom-icons";

const achievementsList = [
  {
    icon: Trophy,
    title: "1st Place Winner — BitBox 5.0 Hackathon",
    organizer: "Google Developer Groups (GDG)",
    date: "2025–2026",
    badge: "1st Place 🏆",
    badgeColor: "from-amber-500 to-yellow-400",
    description:
      "Awarded 1st place for SahYatri, an IoT edge analytics and public transit telemetry pipeline running YOLOv5n on Raspberry Pi at 15 FPS with time-series PostgreSQL data feeds.",
    links: [
      { label: "Devfolio Project", url: "https://devfolio.co/projects/sahyatri-3ca7", icon: DevfolioIcon },
    ],
  },
  {
    icon: Award,
    title: "Finalist — Innovate 3.0 National Hackathon",
    organizer: "National Innovation Challenge",
    date: "Jan 2026",
    badge: "National Finalist 🎖️",
    badgeColor: "from-purple-500 to-indigo-500",
    description:
      "Selected among top finalist teams nationwide for Drive-Sure, an AI/IoT vehicle telematics device processing live sensor streams to generate real-time driver safety risk scores.",
    links: [
      { label: "View Model Code", url: "https://github.com/AmanVerma1067/DriveSureModel", icon: ExternalLink },
    ],
  },
  {
    icon: Flame,
    title: "LeetCode Knight (Peak Rating: 2094)",
    organizer: "LeetCode / Algorithmic Contests",
    date: "Ongoing",
    badge: "Peak Rating: 2094 ⚡",
    badgeColor: "from-cyan-500 to-blue-500",
    description:
      "Solved 1,000+ Data Structures & Algorithms problems across LeetCode, Codeforces, and GeeksforGeeks with a 250-day consecutive algorithmic problem solving streak.",
    links: [
      { label: "Codolio Profile", url: "https://codolio.com/profile/aman1067", icon: CodolioIcon },
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic Distinction — Letter of Appreciation",
    organizer: "Jaypee Institute of Information Technology",
    date: "2023–Present",
    badge: "CGPA 8.6 / 10 🎓",
    badgeColor: "from-emerald-500 to-teal-500",
    description:
      "Awarded official Letter of Appreciation by JIIT for top academic standing and outstanding performance in core engineering subjects and computer science coursework.",
    links: [],
  },
  {
    icon: Sparkles,
    title: "Generative AI with LangChain & Hugging Face",
    organizer: "Udemy Certified",
    date: "Apr 2026",
    badge: "GenAI Certified 📜",
    badgeColor: "from-violet-500 to-fuchsia-500",
    description:
      "Completed comprehensive training in LLM Prompt Engineering, RAG architectures, Vector Databases, Hugging Face pipelines, and LangChain/CrewAI agent orchestration.",
    links: [],
  },
  {
    icon: Cpu,
    title: "Complete Data Science, ML, Deep Learning & NLP Bootcamp",
    organizer: "Udemy Certified",
    date: "Mar 2026",
    badge: "ML & DL Certified 📜",
    badgeColor: "from-rose-500 to-pink-500",
    description:
      "Mastered end-to-end Machine Learning, Neural Networks, PyTorch & TensorFlow architectures, Computer Vision (CNNs, ResNet), and Natural Language Processing.",
    links: [],
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-shell surface-section" ref={ref}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="section-container">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="section-kicker">
            Honors & Accolades
          </p>
          <h2 className="section-title mb-6">
            Achievements & Certifications
          </h2>
          <p className="section-subtitle">
            Recognitions from hackathons, competitive programming platforms, academic institutions, and professional certifications.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {achievementsList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-card group p-6 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${item.badgeColor} px-3 py-1 text-xs font-bold text-white shadow-sm`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Organizer */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {item.organizer} {item.date && `· ${item.date}`}
                </p>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Links if available */}
              {item.links.length > 0 && (
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-3">
                  {item.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <link.icon size={14} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
