'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, REGISTRATION_URL } from '@/lib/site-data'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-background/60 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-8">
        <a href="#home" className="flex items-center" aria-label="BioLabs home">
          <Image
            src="/biolabs-logo.jpg"
            alt="BioLabs, powered by Healix Technologies Pvt. Ltd."
            width={180}
            height={72}
            priority
            className="h-9 w-auto md:h-11"
          />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-secondary hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-brand-red px-4 py-2.5 text-sm font-semibold text-brand-red-foreground shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-md sm:inline-flex"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-secondary lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ease-in-out lg:hidden',
          menuOpen ? 'max-h-[32rem]' : 'max-h-0 border-t-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-navy transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-4 py-3 text-sm font-semibold text-brand-red-foreground"
          >
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
