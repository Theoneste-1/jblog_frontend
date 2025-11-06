"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // API call would go here
      console.log({ email, password })
      // TODO: Implement actual authentication
    } catch (err) {
      setError("Failed to login. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 text-sm text-muted mb-8 hover:text-primary">
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="bg-card border rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted text-sm mb-6">Sign in to your BlogHub account</p>

          {error && (
            <div className="bg-destructive/10 border border-destructive text-destructive text-sm p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:border-primary">
                <Mail size={18} className="text-muted" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 focus:ring-0 p-0"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:border-primary">
                <Lock size={18} className="text-muted" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 focus:ring-0 p-0"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-6 space-y-3">
            <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline block text-center">
              Forgot password?
            </Link>
            <div className="text-center text-sm text-muted">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
