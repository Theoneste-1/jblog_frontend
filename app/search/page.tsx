"use client"

import { useState, useEffect } from "react"
import { PostCard } from "@/components/blog/post-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"
import { Search, Filter, TrendingUp } from "lucide-react"

const ALL_POSTS = [
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
  {
    id: "2",
    title: "Mastering React Hooks",
    excerpt: "Deep dive into React Hooks and learn advanced patterns for state management.",
    author: "John Developer",
    category: "React",
    publishedAt: "5 days ago",
    readTime: "12",
    likes: 567,
    comments: 89,
    image: "/placeholder.svg?key=g9qve",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState(ALL_POSTS)
  const [sortBy, setSortBy] = useState<"recent" | "popular">("recent")

  useEffect(() => {
    if (query.trim()) {
      const filtered = ALL_POSTS.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()),
      )

      const sorted = sortBy === "popular" ? [...filtered].sort((a, b) => b.likes - a.likes) : filtered

      setResults(sorted)
    } else {
      setResults(ALL_POSTS)
    }
  }, [query, sortBy])

  return (
    <div className="container py-12 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Search Stories</h1>
        <p className="text-muted">Find articles, guides, and insights</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-muted" size={20} />
          <Input
            placeholder="Search articles, topics, authors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 text-lg h-12"
          />
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Filter size={20} />
          Advanced
        </Button>
      </div>

      {/* Sort Options */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setSortBy("recent")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            sortBy === "recent" ? "bg-primary text-primary-foreground" : "bg-card border hover:bg-muted"
          }`}
        >
          Most Recent
        </button>
        <button
          onClick={() => setSortBy("popular")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
            sortBy === "popular" ? "bg-primary text-primary-foreground" : "bg-card border hover:bg-muted"
          }`}
        >
          <TrendingUp size={16} />
          Most Popular
        </button>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Search className="mx-auto mb-4 text-muted" size={48} />
          <h2 className="text-xl font-bold mb-2">No results found</h2>
          <p className="text-muted mb-6">
            We couldn't find any articles matching "{query}". Try searching for something else.
          </p>
          <Button variant="outline" onClick={() => setQuery("")}>
            Clear search
          </Button>
        </div>
      )}
    </div>
  )
}
