"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Users, FileText, MessageSquare, TrendingUp } from "lucide-react"

const STATS_DATA = [
  { name: "Jan", posts: 12, users: 24 },
  { name: "Feb", posts: 18, users: 32 },
  { name: "Mar", posts: 24, users: 42 },
  { name: "Apr", posts: 16, users: 28 },
  { name: "May", posts: 22, users: 38 },
  { name: "Jun", posts: 28, users: 48 },
]

const PIE_DATA = [
  { name: "Published", value: 234 },
  { name: "Draft", value: 45 },
  { name: "Archived", value: 12 },
]

const COLORS = ["var(--primary)", "var(--accent)", "var(--muted)"]

export default function AdminDashboard() {
  return (
    <div className="container px-4 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted mt-1">Site overview and key metrics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">Total Users</p>
              <p className="text-2xl font-bold">2,847</p>
            </div>
            <Users className="text-primary" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">Total Posts</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <FileText className="text-accent" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">Comments</p>
              <p className="text-2xl font-bold">8,456</p>
            </div>
            <MessageSquare className="text-primary" size={32} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-sm font-medium">This Month</p>
              <p className="text-2xl font-bold">+24.5%</p>
            </div>
            <TrendingUp className="text-accent" size={32} />
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold mb-6">Posts & Users Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={STATS_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Bar dataKey="posts" fill="var(--primary)" name="Posts" />
              <Bar dataKey="users" fill="var(--accent)" name="Users" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold mb-6">Post Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={PIE_DATA}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {PIE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Pending Moderation */}
      <Card className="p-6">
        <h3 className="font-bold mb-6">Pending Moderation</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">New comment by John Doe</p>
              <p className="text-sm text-muted">On post: "Getting Started with Next.js 14"</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-primary hover:text-primary-foreground transition">
                Approve
              </button>
              <button className="px-3 py-1 text-sm border rounded hover:bg-destructive/10 hover:text-destructive transition">
                Reject
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
