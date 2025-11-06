"use client"

import { useState } from "react"
import { PostCard } from "@/components/blog/post-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

// Mock data
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
    image: "/nextjs-logo.png",
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
    image: "/react-logo-abstract.png",
  },
  {
    id: "3",
    title: "The Future of Web Design",
    excerpt: "Exploring emerging trends and technologies that will shape web design in 2025.",
    author: "Emma Design",
    category: "Design",
    publishedAt: "1 week ago",
    readTime: "10",
    likes: 432,
    comments: 67,
    image: "/webdesign.jpg",
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = ["Technology", "React", "Design", "Business", "Tutorial"]

  const filteredPosts = MOCK_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-12 px-4">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted text-lg">Discover stories, ideas, and insights from our community</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted" size={20} />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter size={20} />
            More Filters
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              !selectedCategory ? "bg-primary text-primary-foreground" : "bg-card border hover:bg-muted"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-card border hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted mb-4">No posts found matching your search.</p>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Clear search
          </Button>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <Button variant="outline">Previous</Button>
        <Button variant="outline" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  )
}
