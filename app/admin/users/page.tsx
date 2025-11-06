"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Ban, Mail } from "lucide-react"

const USERS = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah@example.com",
    role: "admin",
    posts: 12,
    joined: "2 months ago",
  },
  {
    id: "2",
    name: "John Developer",
    email: "john@example.com",
    role: "user",
    posts: 8,
    joined: "3 months ago",
  },
  {
    id: "3",
    name: "Emma Design",
    email: "emma@example.com",
    role: "user",
    posts: 15,
    joined: "1 month ago",
  },
]

export default function AdminUsersPage() {
  return (
    <div className="container px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Manage Users</h1>
        <p className="text-muted mt-1">View and manage user accounts</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-muted text-sm font-medium">Total Users</p>
          <p className="text-2xl font-bold">2,847</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted text-sm font-medium">Active Users</p>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted text-sm font-medium">Banned Users</p>
          <p className="text-2xl font-bold">23</p>
        </Card>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        <Button className="bg-primary text-primary-foreground">All</Button>
        <Button variant="outline">Admins</Button>
        <Button variant="outline">Moderators</Button>
        <Button variant="outline">Banned</Button>
      </div>

      {/* Table */}
      <Card className="p-6 overflow-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left py-4 font-semibold">Name</th>
              <th className="text-left py-4 font-semibold">Email</th>
              <th className="text-left py-4 font-semibold">Role</th>
              <th className="text-right py-4 font-semibold">Posts</th>
              <th className="text-left py-4 font-semibold">Joined</th>
              <th className="text-right py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((user) => (
              <tr key={user.id} className="border-b hover:bg-card/50 transition">
                <td className="py-4 font-medium">{user.name}</td>
                <td className="py-4 text-muted flex items-center gap-2">
                  <Mail size={16} />
                  {user.email}
                </td>
                <td className="py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      user.role === "admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="text-right py-4">{user.posts}</td>
                <td className="py-4 text-sm text-muted">{user.joined}</td>
                <td className="text-right py-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-card rounded transition" title="Make Admin">
                      <Shield size={16} />
                    </button>
                    <button className="p-2 hover:bg-destructive/10 text-destructive rounded transition" title="Ban">
                      <Ban size={16} />
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
