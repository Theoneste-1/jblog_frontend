"use client"

import { PostCard } from "@/components/blog/post-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const MOCK_POSTS = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications.",
    author: "Sarah Chen",
    category: "Technology",
    publishedAt: "2 days ago",
    readTime: "8",
    likes: 234,
    comments: 45,
    image: "/placeholder.svg?key=c50w1",
  },
]

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)

  return (
    <div className="container py-12 px-4">
      {/* Back Link */}
      <Link href="/categories" className="flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft size={16} />
        Back to categories
      </Link>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{category}</h1>
        <p className="text-muted text-lg">
          Showing all articles in the {category} category. Browse, search, and discover relevant content.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
