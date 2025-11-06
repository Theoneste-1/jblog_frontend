"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, MessageSquare, Settings, LogOut, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const MENU_ITEMS = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/dashboard/posts",
    icon: FileText,
  },
  {
    label: "Comments",
    href: "/dashboard/comments",
    icon: MessageSquare,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-card p-6 sticky top-16 h-screen overflow-y-auto hidden md:block">
      <div className="mb-8">
        <Button asChild className="w-full gap-2">
          <Link href="/dashboard/posts/new">
            <PlusCircle size={18} />
            New Post
          </Link>
        </Button>
      </div>

      <nav className="space-y-2 mb-8">
        {MENU_ITEMS.map((item) => {
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
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      <button className="w-full flex items-center gap-3 px-4 py-3 text-muted hover:text-destructive rounded-lg transition">
        <LogOut size={20} />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  )
}
