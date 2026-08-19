"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Youtube, Download, Trophy, Award } from "lucide-react";
import Image from "next/image";
import { DevfolioIcon } from "./custom-icons";

const projectCategories = ["All", "AI/ML & LLM", "Full-Stack Web", "Mobile & IoT"];

const projects = [
  {
    image: "/images/chess.png",
    category: ["AI/ML & LLM", "Full-Stack Web"],
    title: "Chessify AI",
    description:
      "Full-featured chess platform with AI opponent (Minimax + Stockfish ELO 1800) and real-time PvP multiplayer via WebSockets. Features live chat, spectator mode, board replay, and server-side move validation.",
    tags: ["Next.js", "TypeScript", "Flask", "Stockfish", "Socket.IO", "WebSocket"],
    githubUrl: "https://github.com/AmanVerma1067/Chessify-WebApp",
    liveUrl: "https://chessify-web-app.vercel.app/",
    previewUrl: "https://www.youtube.com/watch?v=kzqac5qWbYQ",
  },
  {
    image: "/images/tt.png",
    category: ["Mobile & IoT"],
    title: "StudySync - TimeTable App",
    description:
      "Cross-platform timetable and academic-calendar app on Android, iOS, and web from one Flutter codebase across 3 tagged releases, in daily use by students at JIIT. Features offline-first local cache rendering.",
    tags: ["Flutter", "MongoDB", "Express.js", "Offline-First", "Android/iOS"],
    githubUrl: "https://github.com/AmanVerma1067/StudySync",
    liveUrl: "https://study-sync-orpin.vercel.app/",
    apkUrl: "https://github.com/AmanVerma1067/StudySync/releases/tag/v3.0.0",
  },
  {
    image: "/images/yatri.jpeg",
    category: ["AI/ML & LLM", "Mobile & IoT"],
    badge: "1st Place · BitBox 5.0 Winner",
    badgeType: "winner",
    title: "SahYatri - Smart Bus Assistant",
    description:
      "Intelligent public transport analytics platform running YOLOv5n on Raspberry Pi 4 at 15 FPS with adaptive thresholding, computing passenger occupancy density on-device with time-series telemetry.",
    tags: ["YOLOv5", "Raspberry Pi 4", "PostgreSQL", "Node.js", "React.js", "Flutter"],
    githubUrl: "https://github.com/AmanVerma1067/SahYatri",
    previewUrl: "https://www.youtube.com/watch?v=ESh_J48Pc3w&feature=youtu.be",
    devfolioUrl: "https://devfolio.co/projects/sahyatri-3ca7",
  },
  {
    image: "/images/interview.png",
    category: ["AI/ML & LLM", "Full-Stack Web"],
    title: "AI-Driven Interview System (RecrutAI)",
    description:
      "Adaptive prompt-chaining state machine on Gemini 2.5 Flash scoring responses across 5 rubric dimensions to dynamically branch interview paths with timeouts, fallback templates, and recruiter audit logs.",
    tags: ["Gemini API", "TypeScript", "Next.js", "Docker", "FastAPI", "Prompt Chaining"],
    githubUrl: "https://github.com/Minor-2-0/Recruitai",
    liveUrl: "https://recrut-ai-web29.vercel.app/",
  },
  {
    image: "/images/nva.png",
    category: ["AI/ML & LLM", "Full-Stack Web"],
    title: "Nutri-Vision AI",
    description:
      "Nutrition inference pipeline combining custom spaCy NER with rule-based quantity parsing against USDA FoodData Central DB. Fine-tuned PyTorch ResNet-50 food classifier served behind a FastAPI inference API.",
    tags: ["PyTorch", "spaCy", "FastAPI", "ResNet-50", "Git LFS", "Next.js", "USDA API"],
    githubUrl: "https://github.com/AmanVerma1067/nva",
    liveUrl: "https://nva-jet.vercel.app/",
  },
  {
    image: "/images/vaultdrop.png",
    category: ["Full-Stack Web"],
    title: "VaultDrop",
    description:
      "Full-stack cloud storage web application inspired by Google Drive. Features serverless architecture, edge-ready SQLite database via Turso (libSQL), Drizzle ORM, NextAuth v5 credentials authentication, and Cloudinary storage.",
    tags: ["Next.js", "TypeScript", "Drizzle ORM", "Turso (libSQL)", "Cloudinary", "NextAuth v5"],
    githubUrl: "https://github.com/AmanVerma1067/VaultDrop",
    liveUrl: "https://vault-drop29.vercel.app/",
  },
  {
    image: "/images/shieldchat.png",
    category: ["Full-Stack Web"],
    title: "ShieldChat",
    description:
      "Privacy-focused, real-time chat application implementing client-side end-to-end encryption (E2EE) using AES-GCM (Web Crypto API) with Firebase Realtime Database and secure Google OAuth sign-in.",
    tags: ["React", "Firebase", "Web Crypto API", "AES-GCM", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/AmanVerma1067/ShieldChat",
    liveUrl: "https://shield-chat29.vercel.app/",
  },
  {
    image: "/images/a1typing.png",
    category: ["Full-Stack Web"],
    title: "A1 Typing",
    description:
      "A modern typing practice web app focused on speed and accuracy improvement with a clean UI, real-time WPM/accuracy feedback, and responsive performance tracking.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/AmanVerma1067/A1Typing",
    liveUrl: "https://a1-typing29-seven.vercel.app/",
  },
  {
    image: "/images/neuro.png",
    category: ["AI/ML & LLM"],
    title: "NeuroMath",
    description:
      "AI-powered handwritten math solver using a custom PyTorch Convolutional Neural Network (CNN) that recognizes digits and operators drawn on a digital canvas, achieving 98.6% validation accuracy.",
    tags: ["PyTorch", "Flask", "OpenCV", "Deep Learning", "Canvas API"],
    githubUrl: "https://github.com/AmanVerma1067/NeuroMath",
  },
  {
    image: "/images/drive.png",
    category: ["AI/ML & LLM", "Mobile & IoT"],
    badge: "Finalist · Innovate 3.0 Hackathon",
    badgeType: "finalist",
    title: "DriveSure (Drive-Sure)",
    description:
      "Pay-As-You-Drive insurance risk scoring system that evaluates real-time telematics data and sensor streams to predict crash risk and generate 0–100 safety scores via REST API. Innovate 3.0 Finalist.",
    tags: ["Python", "Machine Learning", "IoT Sensors", "REST API", "Risk Modeling"],
    githubUrl: "https://github.com/AmanVerma1067/DriveSureModel",
  },
  {
    image: "/images/ml.png",
    category: ["AI/ML & LLM"],
    title: "Student Performance ML",
    description:
      "End-to-end ML pipeline predicting student math scores based on demographic and academic features. Deployed on Azure with Docker, CI/CD pipelines, and a Flask web frontend.",
    tags: ["Python", "Flask", "Docker", "Azure", "Scikit-learn", "CI/CD"],
    githubUrl: "https://github.com/AmanVerma1067/Student_Performance-ML-Azure-Deployment",
    liveUrl: "https://student-ml-app.onrender.com",
  },
  {
    image: "/images/nvat.png",
    category: ["AI/ML & LLM"],
    title: "Nutri-Vision Text Analyzer",
    description:
      "NLP system that transforms natural food descriptions into detailed nutritional data using custom spaCy NER, USDA API integration, and a FastAPI + Streamlit interface.",
    tags: ["FastAPI", "spaCy", "NLP", "Streamlit", "USDA API"],
    githubUrl: "https://github.com/Nutri-Vision/Model_Text-Voice",
  },
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
      <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="section-kicker">
            Featured Portfolio
          </p>
          <h2 className="section-title mb-6">
            Featured Projects
          </h2>
          <p className="section-subtitle mb-8">
            Production-ready systems spanning AI/ML pipelines, edge computer vision, real-time multiplayer backends, and offline-first mobile apps.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "border border-slate-200/80 bg-white/80 text-slate-600 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-blue-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${activeCategory}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-card group overflow-hidden hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200/50 dark:border-white/5">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20">
                      {Array.isArray(project.category)
                        ? project.category.join(" · ")
                        : project.category}
                    </span>
                    {project.badge && (
                      <span className={project.badgeType === "winner" ? "badge-winner" : "badge-finalist"}>
                        {project.badgeType === "winner" ? (
                          <Trophy className="h-3 w-3" />
                        ) : (
                          <Award className="h-3 w-3" />
                        )}
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge-tech text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links container */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 items-center border-t border-slate-100 dark:border-slate-800/60">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Download size={14} />
                      <span>APK Release</span>
                    </a>
                  )}
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Youtube size={14} />
                      <span>Video Demo</span>
                    </a>
                  )}
                  {project.devfolioUrl && (
                    <a
                      href={project.devfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <DevfolioIcon size={14} />
                      <span>Devfolio</span>
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
