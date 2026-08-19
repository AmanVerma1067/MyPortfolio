import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/loading-screen"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  title: "Aman Verma | AI/ML Systems & Full-Stack Developer",
  description:
    "Portfolio of Aman Verma — Final-year B.Tech at JIIT Noida (8.6 CGPA). Specializing in AI/ML Systems, LLM Orchestration, Scalable Backend Architectures, and Full-Stack Web/Mobile Engineering. LeetCode Knight (2094 Peak), 1st Place BitBox 5.0 Hackathon.",
  keywords: [
    "Aman Verma",
    "AI/ML Engineer",
    "Machine Learning",
    "LLM Systems",
    "Full Stack Developer",
    "FastAPI",
    "Next.js",
    "React",
    "Python",
    "PyTorch",
    "LangChain",
    "Flutter",
    "LeetCode Knight",
    "JIIT",
    "Portfolio",
  ],
  authors: [{ name: "Aman Verma", url: "https://aman1067.xyz" }],
  creator: "Aman Verma",
  openGraph: {
    title: "Aman Verma | AI/ML Systems & Full-Stack Developer",
    description:
      "B.Tech in ECE at JIIT Noida (8.6 CGPA). AI/ML Systems, LLM Orchestration, Backend Architecture, and Full-Stack Engineering.",
    url: "https://aman1067.xyz",
    siteName: "Aman Verma Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional other icon types */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <LoadingScreen />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--toast-bg)",
                color: "var(--toast-color)",
                border: "1px solid var(--toast-border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
