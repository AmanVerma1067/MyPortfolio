"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const bootLines = [
  { text: "> Initializing system...", delay: 0 },
  { text: "> Loading neural networks...", delay: 300 },
  { text: "> Compiling portfolio modules...", delay: 600 },
  { text: "> Mounting UI components...", delay: 900 },
  { text: "> Establishing connections...", delay: 1200 },
  { text: "> Ready.", delay: 1500 },
]

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [glitchActive, setGlitchActive] = useState(false)
  const [hexStrings, setHexStrings] = useState<string[]>([])

  // Glitch effect
  const triggerGlitch = useCallback(() => {
    setGlitchActive(true)
    setTimeout(() => setGlitchActive(false), 150)
  }, [])

  useEffect(() => {
    // Progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.max(1, Math.floor((100 - prev) / 8))
        const newValue = prev + increment * Math.random()
        if (newValue >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 600)
          return 100
        }
        return newValue
      })
    }, 80)

    // Boot lines
    bootLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines((prev) => prev + 1), bootLines[i].delay)
    })

    // Random glitch
    const glitchInterval = setInterval(triggerGlitch, 800)

    const minLoadTime = setTimeout(() => setProgress(100), 2200)

    // Generate hex strings on client mount
    setHexStrings(
      [...Array(6)].map(() => `0x${Math.random().toString(16).substr(2, 8).toUpperCase()}`)
    )

    return () => {
      clearInterval(interval)
      clearInterval(glitchInterval)
      clearTimeout(minLoadTime)
    }
  }, [triggerGlitch])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(145deg, #0a0e1a 0%, #0f172a 50%, #0a0e1a 100%)" }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Scanline effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
            }}
          />

          {/* Floating hex decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {hexStrings.map((hex, i) => (
              <motion.div
                key={i}
                className="absolute text-blue-500/[0.06] text-xs font-mono whitespace-nowrap"
                style={{
                  top: `${15 + i * 15}%`,
                  left: `${i % 2 === 0 ? 5 : 70}%`,
                }}
                animate={{ opacity: [0, 0.5, 0], y: [0, -20, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
              >
                {hex}
              </motion.div>
            ))}
          </div>

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative mb-8"
          >
            {/* Code brackets logo */}
            <div className="relative flex items-center gap-3">
              <motion.span
                className="text-4xl font-mono font-bold text-blue-400"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &lt;
              </motion.span>
              <div className="text-center">
                <motion.div
                  className={`text-3xl font-bold tracking-tight ${glitchActive ? "text-red-400" : "text-white"
                    } transition-colors duration-75`}
                  style={
                    glitchActive
                      ? { textShadow: "2px 0 #ff0040, -2px 0 #00ff88", transform: "translateX(2px)" }
                      : { textShadow: "0 0 20px rgba(59,130,246,0.3)" }
                  }
                >
                  AV
                </motion.div>
              </div>
              <motion.span
                className="text-4xl font-mono font-bold text-blue-400"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                /&gt;
              </motion.span>
            </div>

            {/* Pulse ring */}
            <motion.div
              className="absolute -inset-4 border border-blue-500/20 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <div className="text-xl font-medium text-white/90 mb-1">
              Aman <span className="text-blue-400">Verma</span>
            </div>
            <div className="text-sm text-slate-500 font-mono">AI/ML Engineer & Full Stack Developer</div>
          </motion.div>

          {/* Terminal boot text */}
          <div className="w-72 sm:w-80 mb-8 font-mono text-xs space-y-1">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${i === visibleLines - 1 && i === bootLines.length - 1
                    ? "text-emerald-400"
                    : "text-blue-400/60"
                  }`}
              >
                {line.text}
                {i === visibleLines - 1 && (
                  <motion.span
                    className="inline-block w-2 h-3 bg-blue-400 ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-72 sm:w-80">
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
              <span>loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                  backgroundSize: "200% 100%",
                }}
                initial={{ width: 0 }}
                animate={{
                  width: `${progress}%`,
                  backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                  width: { duration: 0.3 },
                  backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" },
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
