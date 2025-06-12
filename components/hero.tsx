"use client";

import { motion } from "framer-motion";
import { Github, Youtube, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const socialLinks = [
  { href: "https://github.com/AmanVerma1067", icon: Github },
  { href: "http://www.youtube.com/@AmanVerma1067yt", icon: Youtube },
  { href: "https://www.linkedin.com/in/amanverma1067/", icon: Linkedin },
];

export default function Hero() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-24 pb-16 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-5">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400"
              >
                👋 Hi, I’m
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
              >
                Aman Verma
              </motion.h1>

              {/* Typing animation */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium h-8"
              >
                <Typewriter
                  words={[
                    "Full Stack Developer 💻",
                    "AI/ML Enthusiast 🤖",
                    "Flutter Developer 📱",
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
                className="max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              >
                I build fast, responsive web and mobile experiences using modern
                technologies with a passion for clean design, smooth animations,
                and real-world performance.
              </motion.p>
            </div>

            <motion.button
              onClick={handleContactClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Let’s Talk
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex justify-center lg:justify-start space-x-5 pt-4"
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
                  className="p-3 rounded-full bg-white dark:bg-slate-900 shadow-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-blue-500 dark:text-blue-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Modern Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="justify-self-center relative"
          >
            {/* Animated Glow */}
            <div
              className="absolute -inset-10 z-0 rounded-full blur-3xl opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 60% 40%, #3b82f6 0%, #6366f1 60%, transparent 100%)",
              }}
            />

            {/* Glassmorphism Blob */}
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[30rem] z-10"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 600 700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="modernBlob">
                    <path d="M420,60Q480,120,520,210Q560,300,500,390Q440,480,340,540Q240,600,150,540Q60,480,80,370Q100,260,120,150Q140,40,260,40Q380,40,420,60Z" />
                  </clipPath>
                  <pattern
                    id="dots"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2" fill="#3b82f6" opacity="0.15" />
                  </pattern>
                </defs>

                <g clipPath="url(#modernBlob)">
                  <rect width="600" height="700" fill="url(#dots)" />
                  <rect width="600" height="700" fill="rgba(59,130,246,0.08)" />
                  <image
                    href="/images/perfil.png"
                    x="80"
                    y="80"
                    width="440"
                    height="540"
                    style={{
                      filter:
                        "drop-shadow(0 8px 32px rgba(59,130,246,0.18))",
                    }}
                  />
                </g>

                <path
                  d="M420,60Q480,120,520,210Q560,300,500,390Q440,480,340,540Q240,600,150,540Q60,480,80,370Q100,260,120,150Q140,40,260,40Q380,40,420,60Z"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  opacity="0.25"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
