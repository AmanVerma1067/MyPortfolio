"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projectCategories = ["All", "AI/ML", "Web", "App"];

const projects = [
  {
    image: "/images/chess.png",
    category: ["AI/ML", "Web"],
    title: "Chessify AI - Intelligent Chess Platform",
    description:
      "Real-time multiplayer chess platform supporting 100+ concurrent users with live board sync, server-side move validation, and spectator mode. Integrated a Flask AI backend with the Stockfish engine (ELO 1800), a Polyglot opening book, and a custom Minimax + alpha-beta pruning engine (depth 3).",
    tags: ["Next.js", "Node.js", "Socket.IO", "Flask"],
    githubUrl: "https://github.com/AmanVerma1067/Chessify-WebApp",
    liveUrl: "https://chessify.aman1067.xyz/",
  },
  {
    image: "/images/tt.png",
    category: ["App"],
    title: "StudySync - Smart Timetable & Calendar App",
    description:
      "Cross-platform timetable app with offline-first architecture via local caching and auto-sync for 100% network outage accessibility. Architected REST APIs with an authenticated admin panel for centralized management and sub-second real-time updates.",
    tags: ["Flutter", "MongoDB", "Express"],
    githubUrl: "https://github.com/AmanVerma1067/StudySync",
  },
  {
    image: "/images/yatri.jpeg",
    category: ["App", "AI/ML"],
    title: "SahYatri - Public Transport Analytics",
    description:
      "Smart public transport analytics system. Deployed a fine-tuned YOLOv5n model on Raspberry Pi 4 at 15 FPS, achieving 90%+ detection accuracy for passenger counting. Established a time-series backend streaming live data to a React dashboard and Flutter commuter app.",
    tags: ["IoT", "YOLOv5", "Node.js", "PostgreSQL", "React", "Flutter"],
    githubUrl: "https://github.com/AmanVerma1067/SahYatri",
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All"
      ? true
      : Array.isArray(project.category)
        ? project.category.includes(activeCategory)
        : project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="section-shell surface-section-alt"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="section-kicker">
            My Work
          </p>
          <h2 className="section-title mb-8">
            Recent Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "border border-slate-200 bg-white/80 text-slate-600 hover:border-blue-500/30 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-blue-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${activeCategory}`}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card group overflow-hidden hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-600">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {Array.isArray(project.category)
                      ? project.category.join(", ")
                      : project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4 items-center border-t border-slate-100 dark:border-slate-600/50">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">APK</span>
                    </a>
                  )}
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Preview</span>
                    </a>
                  )}
                  {project.devfolioUrl && (
                    <a
                      href={project.devfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Devfolio</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
