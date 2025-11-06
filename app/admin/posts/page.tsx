"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye } from "lucide-react"

const POSTS = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    author: "Sarah Chen",
    status: "published",
    views: 1234,
    date: "2 days ago",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    author: "John Developer",
    status: "published",
    views: 567,
    date: "5 days ago",
  },
  {
    id: "3",
    title: "Web Design Trends 2025",
    author: "Emma Design",
    status: "flagged",
    views: 234,
    date: "1 week ago",
  },
]

export default function AdminPostsPage() {
  return (
    <div className="container px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Manage Posts</h1>
        <p className="text-muted mt-1">Review and moderate all published posts</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        <Button className="bg-primary text-primary-foreground">All</Button>
        <Button variant="outline">Published</Button>
        <Button variant="outline">Flagged</Button>
        <Button variant="outline">Pending</Button>
      </div>

      {/* Table */}
      <Card className="p-6 overflow-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left py-4 font-semibold">Title</th>
              <th className="text-left py-4 font-semibold">Author</th>
              <th className="text-right py-4 font-semibold">Views</th>
              <th className="text-left py-4 font-semibold">Status</th>
              <th className="text-right py-4 font-semibold">Date</th>
              <th className="text-right py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {POSTS.map((post) => (
              <tr key={post.id} className="border-b hover:bg-card/50 transition">
                <td className="py-4 font-medium">{post.title}</td>
                <td className="py-4 text-muted">{post.author}</td>
                <td className="text-right py-4">{post.views}</td>
                <td className="py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      post.status === "flagged" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="text-right py-4 text-muted text-sm">{post.date}</td>
                <td className="text-right py-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-card rounded transition" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 hover:bg-card rounded transition" title="Edit">
                      <Edit size={16} />
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
