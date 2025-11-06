"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // API call would go here
      console.log({ email })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/auth/login" className="flex items-center gap-2 text-sm text-muted mb-8 hover:text-primary">
          <ArrowLeft size={16} />
          Back to login
        </Link>

        <div className="bg-card border rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-2">Reset password</h1>
          <p className="text-muted text-sm mb-6">
            {submitted
              ? "Check your email for a password reset link"
              : "Enter your email address and we will send you a link to reset your password"}
          </p>

          {submitted ? (
            <div className="bg-primary/10 border border-primary text-primary text-sm p-4 rounded-lg text-center">
              Password reset link has been sent to {email}
            </div>
          ) : (
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
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send reset link"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
