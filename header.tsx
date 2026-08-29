'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { StarBurst } from '@/components/doodles'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Resources' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Beyond the Bell home">
          <StarBurst className="h-7 w-7 text-foreground" />
          <span className="text-xl font-bold tracking-tight">Beyond the Bell</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-base transition-colors hover:text-foreground',
                pathname === link.href ? 'font-semibold text-foreground' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-xl border border-foreground px-6 py-3 text-base font-medium transition-colors hover:bg-foreground hover:text-accent-foreground"
          >
            Join a club
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-foreground p-2 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-foreground/10 px-4 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {[...navLinks, { href: '/contact', label: 'Join a club' }].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-lg px-3 py-3 text-lg',
                    pathname === link.href ? 'bg-primary font-semibold' : 'hover:bg-secondary',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
