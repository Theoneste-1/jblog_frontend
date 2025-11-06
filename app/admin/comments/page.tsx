"use client"

import { Card } from "@/components/ui/card"
import { Check, X, Flag, Eye } from "lucide-react"

const COMMENTS = [
  {
    id: "1",
    author: "John Doe",
    content: "Great article! Really helpful.",
    post: "Getting Started with Next.js 14",
    status: "pending",
    date: "5 minutes ago",
  },
  {
    id: "2",
    author: "Jane Smith",
    content: "Thanks for sharing!",
    post: "Advanced React Patterns",
    status: "approved",
    date: "2 hours ago",
  },
]

export default function AdminCommentsPage() {
  return (
    <div className="container px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Moderate Comments</h1>
        <p className="text-muted mt-1">Review and manage user comments</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-lg text-sm font-medium transition bg-primary text-primary-foreground">
          Pending
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-medium transition border hover:bg-muted">Approved</button>
        <button className="px-4 py-2 rounded-lg text-sm font-medium transition border hover:bg-muted">Rejected</button>
      </div>

      {/* Comments */}
      <div className="space-y-4">
        {COMMENTS.map((comment) => (
          <Card key={comment.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-bold">{comment.author}</p>
                <p className="text-xs text-muted">On: {comment.post}</p>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  comment.status === "pending"
                    ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-500"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {comment.status}
              </span>
            </div>

            <p className="mb-4">{comment.content}</p>

            <div className="flex items-center justify-between text-sm text-muted">
              <span>{comment.date}</span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-card rounded transition" title="View">
                  <Eye size={16} />
                </button>
                <button className="p-2 hover:bg-primary/10 text-primary rounded transition" title="Approve">
                  <Check size={16} />
                </button>
                <button className="p-2 hover:bg-destructive/10 text-destructive rounded transition" title="Reject">
                  <X size={16} />
                </button>
                <button className="p-2 hover:bg-destructive/10 text-destructive rounded transition" title="Flag">
                  <Flag size={16} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
