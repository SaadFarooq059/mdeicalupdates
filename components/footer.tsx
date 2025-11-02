import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Medical Updates and Broadcast"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <span className="font-semibold text-lg">Medical Updates</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Pakistan-based NGO dedicated to monitoring and reporting on global medical events and conferences.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <Phone className="inline-block mr-2 h-4 w-4 align-text-bottom" />
              <a href="tel:+92512359087" className="hover:text-primary transition-colors">
                +92 51 2359087
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Medical Updates and Broadcast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
