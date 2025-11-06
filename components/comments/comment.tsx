"use client"

import { useState } from "react"
import { Heart, MessageCircle, Flag } from "lucide-react"
import { CommentForm } from "./comment-form"

interface CommentData {
  id: string
  author: string
  content: string
  timestamp: string
  likes: number
  replies?: CommentData[]
}

interface CommentProps {
  comment: CommentData
  onReply: () => void
  onSubmitReply: (content: string) => void
  isReplying: boolean
}

export function Comment({ comment, onReply, onSubmitReply, isReplying }: CommentProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(comment.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <div>
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-accent rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="bg-card border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">{comment.author}</h4>
              <span className="text-xs text-muted">{comment.timestamp}</span>
            </div>
            <p className="text-sm leading-relaxed">{comment.content}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-2 text-sm text-muted">
            <button onClick={handleLike} className="flex items-center gap-1 hover:text-primary transition">
              <Heart size={16} fill={liked ? "currentColor" : "none"} />
              {likes}
            </button>
            <button onClick={onReply} className="flex items-center gap-1 hover:text-primary transition">
              <MessageCircle size={16} />
              Reply
            </button>
            <button className="flex items-center gap-1 hover:text-destructive transition">
              <Flag size={16} />
            </button>
          </div>

          {/* Reply Form */}
          {isReplying && (
            <div className="mt-4">
              <CommentForm isReply onSubmit={onSubmitReply} onCancel={onReply} placeholder="Write a reply..." />
            </div>
          )}

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 space-y-4 ml-6 border-l-2 pl-4">
              {comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  onReply={() => {}}
                  onSubmitReply={() => {}}
                  isReplying={false}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
