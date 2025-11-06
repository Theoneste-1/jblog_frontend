"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    setTheme(isDark ? "dark" : "light")
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg" />
          BlogHub
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm hover:text-primary transition">
            Blog
          </Link>
          <Link href="/categories" className="text-sm hover:text-primary transition">
            Categories
          </Link>
          <Link href="/about" className="text-sm hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary transition">
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 hover:bg-card rounded-lg transition" aria-label="Toggle theme">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div className="hidden md:flex gap-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-card rounded-lg">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-card p-4 space-y-3">
          <Link href="/blog" className="block hover:text-primary transition">
            Blog
          </Link>
          <Link href="/categories" className="block hover:text-primary transition">
            Categories
          </Link>
          <Link href="/about" className="block hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="block hover:text-primary transition">
            Contact
          </Link>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="flex-1">
              <Link href="/auth/register">Sign Up</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
