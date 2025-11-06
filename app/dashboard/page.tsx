"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Eye, Heart, MessageSquare, TrendingUp } from "lucide-react"

const STATS_DATA = [
  { name: "Mon", views: 240 },
  { name: "Tue", views: 380 },
  { name: "Wed", views: 200 },
  { name: "Thu", views: 278 },
  { name: "Fri", views: 190 },
  { name: "Sat", views: 229 },
  { name: "Sun", views: 200 },
]

const RECENT_POSTS = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    views: 1234,
    likes: 234,
    comments: 45,
    date: "2 days ago",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    views: 567,
    likes: 123,
    comments: 28,
    date: "5 days ago",
  },
]

export default function DashboardPage() {
  return (
    <div className="container px-4 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted mt-1">Welcome back! Here's your stats overview.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/posts/new">Write New Post</Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">Total Views</p>
              <p className="text-2xl font-bold">12,485</p>
            </div>
            <Eye className="text-primary" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">Total Likes</p>
              <p className="text-2xl font-bold">3,245</p>
            </div>
            <Heart className="text-accent" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">Comments</p>
              <p className="text-2xl font-bold">892</p>
            </div>
            <MessageSquare className="text-primary" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">This Month</p>
              <p className="text-2xl font-bold">+12.5%</p>
            </div>
            <TrendingUp className="text-accent" size={32} />
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold mb-6">Views This Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={STATS_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Bar dataKey="views" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold mb-6">Engagement Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={STATS_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="var(--accent)" dot={{ fill: "var(--accent)" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Recent Posts</h3>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/posts">View All</Link>
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 font-semibold">Post</th>
                <th className="text-right py-3 font-semibold">Views</th>
                <th className="text-right py-3 font-semibold">Likes</th>
                <th className="text-right py-3 font-semibold">Comments</th>
                <th className="text-right py-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_POSTS.map((post) => (
                <tr key={post.id} className="border-b hover:bg-card transition">
                  <td className="py-3">
                    <Link href={`/blog/${post.id}`} className="font-medium hover:text-primary">
                      {post.title}
                    </Link>
                  </td>
                  <td className="text-right py-3">{post.views}</td>
                  <td className="text-right py-3">{post.likes}</td>
                  <td className="text-right py-3">{post.comments}</td>
                  <td className="text-right py-3 text-muted">{post.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
