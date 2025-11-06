"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Users, MessageSquare, BarChart3, Settings, LogOut, Tag } from "lucide-react"

const ADMIN_MENU = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Posts",
    href: "/admin/posts",
    icon: FileText,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Comments",
    href: "/admin/comments",
    icon: MessageSquare,
  },
  {
    label: "Categories",
    href: "/admin/categories",
    icon: Tag,
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-card p-6 sticky top-16 h-screen overflow-y-auto hidden md:block">
      <div className="mb-2">
        <h2 className="font-bold text-lg">Admin Panel</h2>
        <p className="text-xs text-muted">Site Management</p>
      </div>

      <div className="mb-8 border-t pt-4 mt-4" />

      <nav className="space-y-2 mb-8">
        {ADMIN_MENU.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive ? "bg-primary text-primary-foreground" : "text-muted hover:bg-muted"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      <button className="w-full flex items-center gap-3 px-4 py-3 text-muted hover:text-destructive rounded-lg transition">
        <LogOut size={20} />
        <span className="font-medium text-sm">Logout</span>
      </button>
    </aside>
  )
}
