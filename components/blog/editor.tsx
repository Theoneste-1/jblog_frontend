"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bold, Italic, UnderlineIcon, List, LinkIcon, ImageIcon, Code } from "lucide-react"

interface EditorProps {
  onPublish: (data: PostData) => void
  initialData?: PostData
}

export interface PostData {
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  image?: string
}

export function RichTextEditor({ onPublish, initialData }: EditorProps) {
  const [title, setTitle] = useState(initialData?.title || "")
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "")
  const [content, setContent] = useState(initialData?.content || "")
  const [category, setCategory] = useState(initialData?.category || "")
  const [tags, setTags] = useState(initialData?.tags?.join(", ") || "")
  const [image, setImage] = useState(initialData?.image || "")

  const handlePublish = () => {
    onPublish({
      title,
      excerpt,
      content,
      category,
      tags: tags.split(",").map((t) => t.trim()),
      image,
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 bg-card p-6 rounded-lg border">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-2">Post Title</label>
        <Input
          type="text"
          placeholder="Enter your post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-xl font-bold"
        />
      </div>

      {/* Featured Image */}
      <div>
        <label className="block text-sm font-medium mb-2">Featured Image URL</label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition cursor-pointer">
          <ImageIcon className="mx-auto mb-2 text-muted" size={32} />
          <Input
            type="text"
            placeholder="Paste image URL here..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border-0 bg-transparent text-center"
          />
        </div>
      </div>

      {/* Category & Tags */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <Input
            type="text"
            placeholder="e.g., Technology, Design, Business"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
          <Input
            type="text"
            placeholder="react, nextjs, webdev"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-medium mb-2">Excerpt</label>
        <textarea
          placeholder="Write a brief summary of your post..."
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={3}
        />
      </div>

      {/* Editor Toolbar */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-card border-b p-3 flex gap-1 flex-wrap">
          <button className="p-2 hover:bg-muted rounded transition" title="Bold">
            <Bold size={18} />
          </button>
          <button className="p-2 hover:bg-muted rounded transition" title="Italic">
            <Italic size={18} />
          </button>
          <button className="p-2 hover:bg-muted rounded transition" title="Underline">
            <UnderlineIcon size={18} />
          </button>
          <div className="border-r mx-1" />
          <button className="p-2 hover:bg-muted rounded transition" title="List">
            <List size={18} />
          </button>
          <button className="p-2 hover:bg-muted rounded transition" title="Link">
            <LinkIcon size={18} />
          </button>
          <button className="p-2 hover:bg-muted rounded transition" title="Code">
            <Code size={18} />
          </button>
        </div>

        {/* Content Editor */}
        <textarea
          placeholder="Start writing your amazing post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-4 border-0 focus:ring-0 resize-none font-mono text-sm"
          rows={15}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline">Save as Draft</Button>
        <Button onClick={handlePublish}>Publish Post</Button>
      </div>
    </div>
  )
}
