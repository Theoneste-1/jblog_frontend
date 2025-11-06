"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CATEGORIES = [
  {
    name: "Technology",
    description: "Latest trends in software development, frameworks, and tools",
    postCount: 234,
    icon: "💻",
  },
  {
    name: "React",
    description: "React libraries, patterns, and best practices",
    postCount: 156,
    icon: "⚛️",
  },
  {
    name: "Design",
    description: "UI/UX design principles, trends, and case studies",
    postCount: 89,
    icon: "🎨",
  },
  {
    name: "Business",
    description: "Entrepreneurship, startups, and growth strategies",
    postCount: 123,
    icon: "📈",
  },
  {
    name: "Tutorial",
    description: "Step-by-step guides and learning resources",
    postCount: 201,
    icon: "📚",
  },
  {
    name: "Career",
    description: "Job search, interviews, and professional development",
    postCount: 98,
    icon: "🎯",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container py-12 px-4">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Categories</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Explore content by topic. Find articles, guides, and resources related to your interests.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => (
          <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg hover:border-primary transition cursor-pointer h-full">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-muted text-sm mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">{category.postCount} articles</span>
                <ArrowRight size={16} className="text-muted group-hover:text-primary transition" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured */}
      <section className="mt-16 pt-16 border-t">
        <h2 className="text-2xl font-bold mb-8">Popular Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Next.js", "TypeScript", "Tailwind CSS", "Web Performance"].map((topic) => (
            <Link key={topic} href={`/search?q=${topic}`}>
              <Button variant="outline" className="w-full bg-transparent">
                #{topic}
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
