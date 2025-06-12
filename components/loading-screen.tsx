"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress with smoother increments
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.max(1, Math.floor((100 - prev) / 10))
        const newValue = prev + increment * Math.random()

        if (newValue >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return newValue
      })
    }, 100)

    // Minimum loading time
    const minLoadTime = setTimeout(() => {
      setProgress(100)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(minLoadTime)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
        >
          {/* Logo/Branding without box-shadow animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center relative"
          >
            <div className="text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Aman <span className="text-blue-500 dark:text-blue-400">Verma</span>
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-lg">Full Stack Developer</div>
          </motion.div>

          {/* Modern loading indicator */}
          <div className="relative w-64 mb-8">
            {/* Background track */}
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              {/* Animated progress bar */}
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Animated dots */}
            <div className="mt-6 flex justify-center space-x-2">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
                  animate={{
                    y: ["0%", "-50%", "0%"],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Progress percentage */}
          <div className="text-slate-600 dark:text-slate-400 font-medium">{Math.round(progress)}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
