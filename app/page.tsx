"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Share Your Stories
          </h1>
          <p className="text-xl text-muted mb-8">
            Join thousands of writers sharing their ideas, experiences, and insights with a global audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2">
              <Link href="/blog">
                Read Stories <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/auth/register">Start Writing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why BlogHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg border">
              <Zap className="text-primary mb-4" size={28} />
              <h3 className="font-bold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted">
                Optimized for speed and performance. Your readers get instant access to your content.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <Users className="text-accent mb-4" size={28} />
              <h3 className="font-bold mb-2">Community Driven</h3>
              <p className="text-sm text-muted">
                Connect with other writers and readers. Engage through comments and discussions.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <Sparkles className="text-primary mb-4" size={28} />
              <h3 className="font-bold mb-2">Easy to Use</h3>
              <p className="text-sm text-muted">
                Beautiful editor with rich text support. Focus on writing, we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="text-muted mb-8">
            Create an account and publish your first post today. It only takes a minute.
          </p>
          <Button size="lg" asChild>
            <Link href="/auth/register">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
