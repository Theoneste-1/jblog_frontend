"use client"

import { useState } from "react"
import { CommentForm } from "./comment-form"
import { Comment } from "./comment"

interface CommentData {
  id: string
  author: string
  content: string
  timestamp: string
  likes: number
  replies?: CommentData[]
}

interface CommentSectionProps {
  postId: string
}

// Mock data
const MOCK_COMMENTS: CommentData[] = [
  {
    id: "1",
    author: "Alex Johnson",
    content: "Great article! Really helped me understand Next.js 14 better. Looking forward to trying these features.",
    timestamp: "2 hours ago",
    likes: 12,
    replies: [
      {
        id: "1-1",
        author: "Sarah Chen",
        content: "Thanks for the feedback! Let me know if you have any questions.",
        timestamp: "1 hour ago",
        likes: 3,
      },
    ],
  },
  {
    id: "2",
    author: "Jordan Lee",
    content: "The code examples are really clear. This is exactly what I needed for my current project.",
    timestamp: "1 day ago",
    likes: 8,
  },
  {
    id: "3",
    author: "Morgan Tech",
    content: "Can you elaborate more on the Server Components section? That part was a bit confusing.",
    timestamp: "1 day ago",
    likes: 5,
  },
]

export function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentData[]>(MOCK_COMMENTS)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  const handleNewComment = (content: string) => {
    const newComment: CommentData = {
      id: Date.now().toString(),
      author: "Current User",
      content,
      timestamp: "just now",
      likes: 0,
    }
    setComments([newComment, ...comments])
  }

  const handleReply = (parentId: string, content: string) => {
    const addReply = (comments: CommentData[]): CommentData[] => {
      return comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [
              ...(comment.replies || []),
              {
                id: `${parentId}-${Date.now()}`,
                author: "Current User",
                content,
                timestamp: "just now",
                likes: 0,
              },
            ],
          }
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: addReply(comment.replies),
          }
        }
        return comment
      })
    }

    setComments(addReply(comments))
    setReplyingTo(null)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

        {/* Comment Form */}
        <div className="mb-8">
          <CommentForm onSubmit={handleNewComment} placeholder="Share your thoughts..." />
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onReply={() => setReplyingTo(comment.id)}
              onSubmitReply={(content) => handleReply(comment.id, content)}
              isReplying={replyingTo === comment.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
