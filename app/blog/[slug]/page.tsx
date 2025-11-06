"use client"

import { Heart, MessageCircle, Share2, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CommentSection } from "@/components/comments/comment-section"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Mock post data
  const post = {
    id: params.slug,
    title: "Getting Started with Next.js 14",
    content: `
    Next.js 14 brings exciting new features that make it easier to build fast, scalable web applications. In this comprehensive guide, we'll explore the latest capabilities and best practices.

    ## Why Next.js 14?

    The new version introduces improved performance, better developer experience, and powerful new features that streamline the development process.

    ### Key Features
    - Enhanced App Router capabilities
    - Improved Server Components support
    - Better SEO optimization tools
    - Streaming and suspense improvements

    ## Getting Started

    To get started with Next.js 14, follow these simple steps:

    1. Create a new Next.js app using create-next-app
    2. Install dependencies
    3. Start developing with the new features
    4. Deploy to Vercel

    Next.js 14 represents a significant step forward in web development, providing developers with the tools they need to build modern applications efficiently.
    `,
    author: "Sarah Chen",
    publishedAt: "Nov 4, 2025",
    readTime: 8,
    likes: 234,
    comments: 45,
    category: "Technology",
    image: "/nextjs-logo.png",
  }

  return (
    <div className="container py-12 px-4">
      {/* Back Link */}
      <Link href="/blog" className="text-primary hover:underline text-sm mb-8 inline-block">
        ← Back to blog
      </Link>

      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-6 text-muted text-sm">
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.publishedAt}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime} min read
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full rounded-lg mb-12 object-cover h-96"
        />

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-6 mb-3">
                  {paragraph.replace(/^##\s*/, "")}
                </h2>
              )
            }
            if (paragraph.startsWith("###")) {
              return (
                <h3 key={i} className="text-xl font-bold mt-4 mb-2">
                  {paragraph.replace(/^###\s*/, "")}
                </h3>
              )
            }
            if (paragraph.startsWith("-")) {
              return (
                <ul key={i} className="space-y-2 mb-4">
                  {paragraph.split("\n").map((item, j) => (
                    <li key={j} className="flex gap-2 ml-4">
                      <span className="text-primary mt-1">•</span>
                      {item.replace(/^-\s*/, "")}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Actions */}
        <div className="border-t border-b py-6 mb-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-muted hover:text-primary transition">
              <Heart size={20} /> {post.likes}
            </button>
            <button className="flex items-center gap-2 text-muted hover:text-primary transition">
              <MessageCircle size={20} /> {post.comments}
            </button>
          </div>
          <Button className="gap-2">
            <Share2 size={20} />
            Share
          </Button>
        </div>

        {/* Author Info */}
        <div className="bg-card border rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-full" />
            <div>
              <h3 className="font-bold">{post.author}</h3>
              <p className="text-muted text-sm">Tech writer passionate about Next.js and modern web development.</p>
              <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <CommentSection postId={post.id} />
      </article>
    </div>
  )
}
