"use client";

import { motion } from "framer-motion";
import { Github, Youtube, Linkedin, FileText, Download, Mail, Trophy, Code } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

// Devfolio icon
const DevfolioIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60.3 66.2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60.3 36.4C60.3 52 48.6 64.7 33.8 66c0 0-19.1 0.5-25.4-0.1c-2.4-0.3-4.4-1.8-5.3-4c0.9 0.4 1.8 0.7 2.8 0.8C8 62.9 11.5 63 16.4 63c7.2 0 15.1-0.2 15.1-0.2h0.1c7.9-0.7 15.2-4.3 20.4-10.2c4.5-5 7.4-11.3 8.2-17.9C60.3 35.2 60.3 35.8 60.3 36.4z"
      fill="#3770FF"
    />
    <path
      d="M58 30c0 15.6-11.7 28.3-26.6 29.5c0 0-19.1 0.5-25.4-0.1c-3.4-0.3-5.9-3.5-6-7.1l0.1-45c0.1-3.6 2.7-6.8 6.1-7.1c6.3-0.5 25.4 0.1 25.4 0.1C46.4 1.6 58 14.4 58 30z"
      fill="#3770FF"
    />
  </svg>
);

const socialLinks = [
  { href: "https://github.com/AmanVerma1067", icon: Github },
  { href: "http://www.youtube.com/@AmanVerma1067yt", icon: Youtube },
  { href: "https://www.linkedin.com/in/amanverma1067/", icon: Linkedin },
  { href: "https://devfolio.co/@Aman1067", icon: DevfolioIcon }, // Devfolio
];


export default function Hero() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_30%),linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] pt-24 pb-16 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 dark:opacity-20" />
      <div className="container relative mx-auto px-6">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl space-y-8 text-center lg:text-left"
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/50 dark:text-slate-300 lg:mx-0"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.75)]" />
                Open to SDE Opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-7xl"
              >
                Aman <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Verma</span>
              </motion.h1>

              {/* Typing animation */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex h-8 items-center justify-center gap-3 text-xl font-semibold text-slate-700 dark:text-slate-200 md:text-2xl lg:justify-start"
              >
                <span className="hidden h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 sm:inline-block" />
                <Typewriter
                  words={[
                    "Software Engineer 💻",
                    "Full Stack Developer 🚀",
                    "AI/ML Enthusiast 🤖",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mx-auto max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg lg:mx-0"
              >
                Final year B.Tech student focused on Software Engineering, Full-Stack Development, AI/ML, and scalable backend systems. I build production-ready applications with clean architecture and practical user impact.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                <FileText size={18} />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Aman_Verma_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-900 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:hover:text-blue-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 rounded-2xl border border-blue-500/60 px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white dark:text-blue-300 dark:hover:text-white"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex justify-center gap-3 pt-4 lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${social.href}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-3 text-slate-600 shadow-sm backdrop-blur transition-colors duration-300 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-blue-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Modern Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative justify-self-center lg:mt-0 mt-12"
          >
            {/* Glowing backdrop elements */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 opacity-25 blur-3xl dark:from-blue-500/10 dark:via-cyan-400/10 dark:to-purple-500/10 dark:opacity-30" />
            <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 opacity-40 blur-2xl" />

            {/* Rotating dashed ring */}
            <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-blue-400/30 dark:border-cyan-400/20 animate-[spin_40s_linear_infinite] pointer-events-none" />
            {/* Pulsing solid ring */}
            <div className="absolute inset-0 -m-4 rounded-full border border-blue-500/10 dark:border-white/5 animate-[ping_4s_ease-in-out_infinite] opacity-75 pointer-events-none" />

            {/* Main Interactive Photo Card */}
            <motion.div
              whileHover={{ y: -8, rotate: 1 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                hover: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="relative z-10 w-72 sm:w-80 lg:w-[23rem] aspect-[4/5] rounded-[3rem] p-3.5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/10 transition-shadow duration-500"
            >
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent border border-white/10 shadow-inner">
                <Image
                  src="/images/perfil_real.png"
                  alt="Aman Verma profile portrait"
                  fill
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 368px"
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                
                {/* Glossy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5 mix-blend-overlay pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
