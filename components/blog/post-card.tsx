import Link from "next/link"
import { Heart, MessageCircle, Share2 } from "lucide-react"

interface PostCardProps {
  id: string
  title: string
  excerpt: string
  author: string
  authorImage?: string
  category: string
  publishedAt: string
  readTime: string
  likes: number
  comments: number
  image?: string
}

export function PostCard({
  id,
  title,
  excerpt,
  author,
  category,
  publishedAt,
  readTime,
  likes,
  comments,
  image,
}: PostCardProps) {
  return (
    <article className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      {image && (
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{category}</span>
          <span className="text-xs text-muted">{readTime} min read</span>
        </div>

        <Link href={`/blog/${id}`}>
          <h3 className="text-lg font-bold mb-2 hover:text-primary transition group-hover:text-primary">{title}</h3>
        </Link>

        <p className="text-sm text-muted mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t text-xs text-muted">
          <div>
            <span>{author}</span> • <span>{publishedAt}</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-1 hover:text-primary transition">
              <Heart size={16} /> {likes}
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition">
              <MessageCircle size={16} /> {comments}
            </button>
            <button className="hover:text-primary transition">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
