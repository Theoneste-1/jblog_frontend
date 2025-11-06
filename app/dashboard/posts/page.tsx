"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Heart, MessageSquare, Edit, Trash2, Archive, EyeIcon } from "lucide-react"

const POSTS = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    status: "published",
    views: 1234,
    likes: 234,
    comments: 45,
    date: "2 days ago",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    status: "published",
    views: 567,
    likes: 123,
    comments: 28,
    date: "5 days ago",
  },
  {
    id: "3",
    title: "Draft Post",
    status: "draft",
    views: 0,
    likes: 0,
    comments: 0,
    date: "1 week ago",
  },
]

export default function PostsPage() {
  return (
    <div className="container px-4 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Posts</h1>
          <p className="text-muted mt-1">Manage and monitor all your published posts</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/posts/new">New Post</Link>
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        <Button className="bg-primary text-primary-foreground">All</Button>
        <Button variant="outline">Published</Button>
        <Button variant="outline">Drafts</Button>
      </div>

      {/* Posts Table */}
      <Card className="p-6 overflow-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left py-4 font-semibold">Title</th>
              <th className="text-right py-4 font-semibold">Views</th>
              <th className="text-right py-4 font-semibold">Engagement</th>
              <th className="text-right py-4 font-semibold">Status</th>
              <th className="text-right py-4 font-semibold">Date</th>
              <th className="text-right py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {POSTS.map((post) => (
              <tr key={post.id} className="border-b hover:bg-card/50 transition">
                <td className="py-4">
                  <div>
                    <p className="font-medium hover:text-primary">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </p>
                  </div>
                </td>
                <td className="text-right py-4">
                  <div className="flex items-center justify-end gap-1 text-muted">
                    <EyeIcon size={16} />
                    {post.views}
                  </div>
                </td>
                <td className="text-right py-4">
                  <div className="flex items-center justify-end gap-3 text-muted text-sm">
                    <span className="flex items-center gap-1">
                      <Heart size={14} /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={14} /> {post.comments}
                    </span>
                  </div>
                </td>
                <td className="text-right py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      post.status === "published" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="text-right py-4 text-muted text-sm">{post.date}</td>
                <td className="text-right py-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-card rounded transition" title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 hover:bg-card rounded transition" title="Archive">
                      <Archive size={16} />
                    </button>
                    <button className="p-2 hover:bg-destructive/10 text-destructive rounded transition" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
