"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBlurred, setIsBlurred] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY >= 50)

      // Update active section
      const sections = document.querySelectorAll("section[id]")
      const scrollY = window.pageYOffset

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isBlurred || isMenuOpen
          ? "border-b border-slate-200/60 bg-white dark:bg-slate-950 shadow-lg shadow-slate-900/5"
          : "border-b border-transparent bg-white/70 backdrop-blur-md dark:bg-slate-950/70"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#home" className="text-slate-900 dark:text-slate-100 font-medium text-lg">
          Aman <span className="text-blue-500 dark:text-blue-400">Verma</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-300 ${activeSection === item.href.slice(1)
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-300"
                  : "text-slate-700 dark:text-slate-200"
                }`}
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-2xl border border-slate-200 bg-white/80 p-2 text-slate-900 shadow-sm transition-colors hover:border-blue-500/30 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:text-blue-300"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 dark:text-slate-100 text-xl relative z-50 p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu & Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-30 lg:hidden"
              />

              {/* Drawer Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="fixed top-0 right-0 w-3/4 max-w-[320px] h-full bg-white dark:bg-slate-900 border-l border-slate-200/50 dark:border-slate-800/60 shadow-2xl z-40 lg:hidden"
              >
                <div className="pt-20 px-6">
                  <div className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-left font-semibold text-base transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-slate-50/50 dark:hover:bg-slate-800/50 ${
                          activeSection === item.href.slice(1)
                            ? "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-900/20"
                            : "text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
