"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Youtube, Instagram, Twitter } from "lucide-react"

const socialLinks = [
  { href: "http://www.youtube.com/@AmanVerma1067yt", icon: Youtube },
  { href: "https://www.instagram.com/aman.v.1067/", icon: Instagram },
  { href: "https://x.com/Mr_aman__", icon: Twitter },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="bg-slate-50 dark:bg-slate-800 py-16 transition-colors duration-300" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Aman <span className="text-blue-500 dark:text-blue-400">Verma</span>
            </h1>
            <h2 className="text-slate-600 dark:text-slate-300">Full Stack Developer</h2>
          </div>

          <div className="flex justify-center lg:justify-center space-x-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 dark:bg-blue-600 p-3 text-white text-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <span className="text-sm text-slate-500 dark:text-slate-400 lg:justify-self-end">
            © {new Date().getFullYear()} AmanCodes. All rights reserved
          </span>
        </div>
      </motion.div>
    </footer>
  )
}
