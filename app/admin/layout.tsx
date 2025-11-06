"use client"

import type React from "react"

import { AdminSidebar } from "@/components/admin/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6 min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 py-8">{children}</main>
    </div>
  )
}
