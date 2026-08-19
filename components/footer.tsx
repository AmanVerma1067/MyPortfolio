"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Youtube, Instagram, Twitter } from "lucide-react"
import { CodolioIcon, DevfolioIcon } from "./custom-icons"

const footerSocialLinks = [
  { href: "https://github.com/AmanVerma1067", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/amanverma1067/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://codolio.com/profile/aman1067", icon: CodolioIcon, label: "Codolio" },
  { href: "https://devfolio.co/@Aman1067", icon: DevfolioIcon, label: "Devfolio" },
  { href: "http://www.youtube.com/@AmanVerma1067yt", icon: Youtube, label: "YouTube" },
  { href: "https://x.com/Mr_aman__", icon: Twitter, label: "X (Twitter)" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="border-t border-slate-200 bg-white py-14 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
              Aman <span className="text-blue-600 dark:text-blue-400">Verma</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
              AI/ML Systems Engineer & Full Stack Developer
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-3">
            {footerSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 lg:justify-self-end whitespace-nowrap">
            © {new Date().getFullYear()} Aman Verma. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
