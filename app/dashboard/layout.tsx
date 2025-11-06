"use client"

import type React from "react"

import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6 min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 py-8">{children}</main>
    </div>
  )
}
