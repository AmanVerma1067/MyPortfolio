"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "amanverma1067@gmail.com",
    href: "mailto:amanverma1067@gmail.com",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Let's chat on WhatsApp",
    href: "https://wa.me/919451842598",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Noida, Uttar Pradesh, India",
    href: "https://www.google.com/maps/place/Noida",
  },
]

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const loadingToast = toast.loading("Sending message...")

    try {
      await emailjs.sendForm("service_fes9afn", "template_j3u36me", formRef.current!, "J6AP0JOZDlt0--Hm0")

      toast.success("Message sent successfully! 🎉", {
        id: loadingToast,
      })

      formRef.current?.reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        id: loadingToast,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="section-shell bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_28%),linear-gradient(135deg,#f8fafc_0%,#ffffff_45%,#eef2ff_100%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_30%),linear-gradient(135deg,#0f172a_0%,#020617_55%,#0f172a_100%)]"
      ref={ref}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="section-kicker">
            Get In Touch
          </p>
          <h2 className="section-title mb-4">
            Contact Me
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                Let's start a conversation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you're a company looking
                to hire, or someone with a project idea, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-card group flex items-center space-x-5 p-5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="p-3 bg-blue-500 text-white rounded-full shadow-md group-hover:scale-110 transition-transform">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{info.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass-card p-8 shadow-2xl shadow-slate-900/10 dark:shadow-black/20"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition-colors placeholder-slate-400 focus:border-blue-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email *</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition-colors placeholder-slate-400 focus:border-blue-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project discussion"
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition-colors placeholder-slate-400 focus:border-blue-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message *</label>
                <textarea
                  name="user_project"
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition-colors placeholder-slate-400 focus:border-blue-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="primary-btn flex w-full items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:transform-none"
              >
                <Send size={20} />
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
