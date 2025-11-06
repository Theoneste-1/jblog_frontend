"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, LinkIcon } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container px-4 max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-muted mt-1">Manage your public profile information</p>
      </div>

      {/* Profile Picture */}
      <Card className="p-6">
        <h3 className="font-bold mb-4">Profile Picture</h3>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-primary rounded-full" />
          <div>
            <Button>Change Picture</Button>
            <p className="text-xs text-muted mt-2">JPG, PNG or GIF. Max 5MB.</p>
          </div>
        </div>
      </Card>

      {/* Basic Info */}
      <Card className="p-6 space-y-6">
        <h3 className="font-bold">Basic Information</h3>

        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <Input type="text" placeholder="Your full name" defaultValue="Sarah Chen" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <Mail size={18} className="text-muted" />
            <Input
              type="email"
              placeholder="your@email.com"
              defaultValue="sarah@example.com"
              className="border-0 focus:ring-0 p-0"
              disabled
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea
            placeholder="Tell us about yourself"
            defaultValue="Tech writer passionate about Next.js and modern web development."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary resize-none"
            rows={4}
          />
        </div>
      </Card>

      {/* Social Links */}
      <Card className="p-6 space-y-6">
        <h3 className="font-bold">Social Links</h3>

        <div>
          <label className="block text-sm font-medium mb-2">Website</label>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <LinkIcon size={18} className="text-muted" />
            <Input type="url" placeholder="https://example.com" className="border-0 focus:ring-0 p-0" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Twitter</label>
          <Input placeholder="@yourhandle" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">LinkedIn</label>
          <Input placeholder="Your LinkedIn URL" />
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-2">
        <Button>Save Changes</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  )
}
