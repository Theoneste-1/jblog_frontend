"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)

    setTheme(isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    setTheme(isDark ? "dark" : "light")
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  return <div data-theme-toggle={toggleTheme}>{children}</div>
}
