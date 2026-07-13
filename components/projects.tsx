"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Youtube, Download, Award } from "lucide-react";
import Image from "next/image";

const projectCategories = ["All", "AI/ML", "Web", "App"];

const projects = [
  {
    image: "/images/chess.png",
    category: ["AI/ML", "Web"],
    title: "Chessify AI",
    description:
      "Full-featured chess app with AI opponent (Minimax + Stockfish) and real-time PvP multiplayer via WebSockets. Features live chat, spectator mode, game timers, and drag-and-drop interaction.",
    tags: ["Next.js", "TypeScript", "Flask", "Stockfish", "Socket.IO", "WebSocket"],
    githubUrl: "https://github.com/AmanVerma1067/Chessify-WebApp",
    liveUrl: "https://chessify-web-app.vercel.app/",
    previewUrl: "https://www.youtube.com/watch?v=kzqac5qWbYQ",
  },
  {
    image: "/images/tt.png",
    category: ["App"],
    title: "StudySync - TimeTable App",
    description:
      "A visually appealing Flutter timetable and calendar app that helps students efficiently track their class schedules and college events.",
    tags: ["Flutter", "MongoDB", "Express", "Cors"],
    githubUrl: "https://github.com/AmanVerma1067/StudySync",
    liveUrl: "https://study-sync-orpin.vercel.app/",
    apkUrl: "https://github.com/AmanVerma1067/StudySync/releases/tag/v3.0.0",
  },
  {
    image: "/images/yatri.jpeg",
    category: ["App", "AI/ML"],
    title: "SahYatri - Smart Bus Assistant",
    description:
      "An intelligent public transport analytics platform offering real-time bus occupancy tracking and AI-powered alerts.",
    tags: ["Flutter", "Next.js", "PostgreSQL", "OpenCV"],
    githubUrl: "https://github.com/AmanVerma1067/SahYatri",
    previewUrl: "https://www.youtube.com/watch?v=ESh_J48Pc3w&feature=youtu.be",
    devfolioUrl: "https://devfolio.co/projects/sahyatri-3ca7",
  },
  {
    image: "/images/interview.png",
    category: ["AI/ML", "Web"],
    title: "AI-Driven Interview System",
    description:
      "Full-stack AI interview platform featuring automated PDF resume parsing, AI-generated technical questions via Hugging Face, and a secure Docker-based code execution sandbox with proctoring and performance analytics.",
    tags: ["React", "FastAPI", "Docker", "Hugging Face", "PostgreSQL", "Microservices"],
    githubUrl: "https://github.com/Minor-2-0/Recruitai",
    liveUrl: "https://recrut-ai-web29.vercel.app/",
  },
  {
    image: "/images/nva.png",
    category: ["AI/ML", "Web"],
    title: "Nutri-Vision AI",
    description:
      "AI-powered nutrition tracker with food image recognition, voice-to-text logging, health-aware alerts, and goal-based dietary recommendations. Built with Next.js & Supabase.",
    tags: ["Next.js", "Supabase", "AI", "Voice Recognition", "Health Tech"],
    githubUrl: "https://github.com/AmanVerma1067/nva",
    liveUrl: "https://nva-jet.vercel.app/",
  },
  {
    image: "/images/vaultdrop.png",
    category: ["Web"],
    title: "VaultDrop",
    description:
      "Full-stack cloud storage web application inspired by Google Drive. Features serverless architecture, edge-ready SQLite database, NextAuth v5 credentials-based authentication, and CDN-backed file storage.",
    tags: ["Next.js", "TypeScript", "Drizzle ORM", "Turso (libSQL)", "Cloudinary", "NextAuth v5"],
    githubUrl: "https://github.com/AmanVerma1067/VaultDrop",
    liveUrl: "https://vault-drop29.vercel.app/",
  },
  {
    image: "/images/shieldchat.png",
    category: ["Web"],
    title: "ShieldChat",
    description:
      "A privacy-focused, real-time chat application implementing client-side end-to-end encryption (E2EE) using the AES-GCM algorithm. Features secure Google OAuth sign-in and real-time database listener integration.",
    tags: ["React", "Firebase", "Web Crypto API", "AES-GCM", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/AmanVerma1067/ShieldChat",
    liveUrl: "https://shield-chat29.vercel.app/",
  },
  {
  image: "/images/a1typing.png",
  category: ["Web"],
  title: "A1 Typing",
  description:
    "A modern typing practice web app focused on speed and accuracy improvement with a clean UI, real-time WPM/accuracy feedback, and responsive performance tracking.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  githubUrl: "https://github.com/AmanVerma1067/A1Typing",
  liveUrl: "https://a1-typing29-seven.vercel.app/",
},
  {
    image: "/images/neuro.png",
    category: ["AI/ML"],
    title: "NeuroMath",
    description:
      "AI-powered handwritten math solver using a PyTorch CNN that recognizes digits and operators drawn on a digital canvas, achieving 98.6% validation accuracy.",
    tags: ["PyTorch", "Flask", "OpenCV", "Deep Learning", "Canvas API"],
    githubUrl: "https://github.com/AmanVerma1067/NeuroMath",
  },
  {
    image: "/images/drive.png",
    category: ["AI/ML"],
    title: "DriveSure",
    description:
      "Pay-As-You-Drive insurance risk scoring system that evaluates real-time telematics data to predict crash/claim risk and generate a 0–100 safety score via REST API.",
    tags: ["Python", "Machine Learning", "REST API", "Telematics", "Risk Modeling"],
    githubUrl: "https://github.com/AmanVerma1067/DriveSureModel",
  },
  {
    image: "/images/ml.png",
    category: ["AI/ML"],
    title: "Student Performance ML",
    description:
      "End-to-end ML pipeline predicting student math scores based on demographic and academic features. Deployed on Azure with Docker, CI/CD, and a Flask web frontend.",
    tags: ["Python", "Flask", "Docker", "Azure", "Scikit-learn", "CI/CD"],
    githubUrl: "https://github.com/AmanVerma1067/Student_Performance-ML-Azure-Deployment",
    liveUrl: "https://student-ml-app.onrender.com",
  },
  {
    image: "/images/nvat.png",
    category: ["AI/ML"],
    title: "Nutri-Vision Text Analyzer",
    description:
      "NLP system that transforms natural food descriptions into detailed nutritional data using spaCy NER, USDA API integration, and a FastAPI + Streamlit interface.",
    tags: ["FastAPI", "spaCy", "NLP", "Streamlit", "USDA API"],
    githubUrl: "https://github.com/Nutri-Vision/Model_Text-Voice",
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
              className="glass-card group overflow-hidden hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
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
                    <span className="text-xs font-semibold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {Array.isArray(project.category)
                        ? project.category.join(", ")
                        : project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[72px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links container */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 items-center border-t border-slate-100 dark:border-slate-800/40">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={15} />
                      <span className="text-xs font-semibold">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={15} />
                      <span className="text-xs font-semibold">Live Demo</span>
                    </a>
                  )}
                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Download size={15} />
                      <span className="text-xs font-semibold">APK</span>
                    </a>
                  )}
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Youtube size={15} />
                      <span className="text-xs font-semibold">Preview</span>
                    </a>
                  )}
                  {project.devfolioUrl && (
                    <a
                      href={project.devfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Award size={15} />
                      <span className="text-xs font-semibold">Devfolio</span>
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
