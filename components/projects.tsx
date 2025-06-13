"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projectCategories = ["All", "Web", "App", "AI/ML"]

const projects = [
  {
    image: "/images/tt.png",
    category: ["App"],
    title: "StudySync - TimeTable App",
    description: "Timetable manager app for college students",
    tags: ["Flutter", "MongoDB", "Express", "Cors"],
    githubUrl: "https://github.com/AmanVerma1067/StudySync",
    apkUrl: "https://drive.google.com/file/d/17fqezd_qbW-wuDVBJecI7gnQAuIDmpi3/view",
  },
  {
    image: "/images/yatri.jpeg",
    category: ["App", "AI/ML"],
    title: "SahYatri - Smart Bus Assistant",
    description: "Real-time bus occupancy tracking app with AI alerts.",
    tags: ["Flutter", "Next.js", "PostgreSQL", "OpenCV"],
    githubUrl: "https://github.com/AmanVerma1067/SahYatri",
    previewUrl: "https://www.youtube.com/watch?v=ESh_J48Pc3w&feature=youtu.be",
    devfolioUrl: "https://devfolio.co/projects/sahyatri-3ca7",
  },
  {
    image: "/images/ocr.png",
    category: ["AI/ML"],
    title: "OCR Document Processor",
    description: "Intelligent document processing using OCR and ML.",
    tags: ["PyTorch", "OpenCV", "FastAPI"],
    githubUrl: "https://github.com/AmanVerma1067",
    liveUrl: "",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All"
      ? true
      : Array.isArray(project.category)
      ? project.category.includes(activeCategory)
      : project.category === activeCategory
  )

  return (
    <section
      id="projects"
      className="bg-slate-50 dark:bg-slate-800 py-20 transition-colors duration-300"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            My <span className="text-blue-500 dark:text-blue-400">Jobs</span>
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-8">
            Recent Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
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
              className="group bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                      className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4 items-center">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Download APK</span>
                    </a>
                  )}
                  {project.previewUrl && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Preview</span>
                    </a>
                  )}
                  { (
                    <span className="text-slate-400 text-sm italic">No demo available</span>
                  )}
                  {project.devfolioUrl && (
                    <a
                      href={project.devfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
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
  )
}
