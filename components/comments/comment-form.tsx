"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

interface CommentFormProps {
  onSubmit: (content: string) => void
  placeholder?: string
  isReply?: boolean
  onCancel?: () => void
}

export function CommentForm({
  onSubmit,
  placeholder = "Add a comment...",
  isReply = false,
  onCancel,
}: CommentFormProps) {
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-primary rounded-full flex-shrink-0" />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-card resize-none"
            rows={isReply ? 2 : 3}
          />
          <div className="flex gap-2 mt-3 justify-end">
            {isReply && (
              <Button type="button" variant="outline" size="sm" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" size="sm" disabled={!content.trim()} className="gap-2">
              <Send size={16} />
              {isReply ? "Reply" : "Comment"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
