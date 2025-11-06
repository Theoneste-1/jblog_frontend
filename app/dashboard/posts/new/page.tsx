"use client"

import { RichTextEditor, type PostData } from "@/components/blog/editor"
import { useRouter } from "next/navigation"

export default function NewPostPage() {
  const router = useRouter()

  const handlePublish = async (data: PostData) => {
    // API call would go here
    console.log("Publishing post:", data)
    // TODO: Implement actual post creation
    router.push("/dashboard/posts")
  }

  return (
    <div className="container py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Write New Post</h1>
      <RichTextEditor onPublish={handlePublish} />
    </div>
  )
}
