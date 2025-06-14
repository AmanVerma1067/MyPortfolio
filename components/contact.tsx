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
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Get In <span className="text-blue-500 dark:text-blue-400">Touch</span>
          </h3>
          <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Contact Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
                  className="flex items-center space-x-5 p-5 rounded-xl bg-white dark:bg-slate-800/60 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-700"
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
            className="bg-white dark:bg-slate-800/70 p-8 rounded-2xl shadow-lg"
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
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email *</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project discussion"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message *</label>
                <textarea
                  name="user_project"
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
