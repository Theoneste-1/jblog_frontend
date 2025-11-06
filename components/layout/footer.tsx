import Link from "next/link"
import { Mail, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card mt-16">
      <div className="container py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold mb-4">BlogHub</h3>
            <p className="text-sm text-muted">
              A modern platform for sharing stories and connecting with readers worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Browse</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-primary">
                  All Posts
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/tags" className="hover:text-primary">
                  Tags
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Follow</h4>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Github size={18} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted">
          <p>&copy; 2025 BlogHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
