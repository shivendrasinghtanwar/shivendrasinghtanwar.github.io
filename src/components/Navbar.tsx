'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '@/lib/data'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative w-8 h-8 rounded-lg overflow-hidden surface"
          >
            <span
              className="absolute -inset-6"
              style={{
                background:
                  'conic-gradient(from 220deg, transparent, color-mix(in oklch, var(--accent) 26%, transparent), transparent, color-mix(in oklch, var(--glow-2) 22%, transparent), transparent)',
                opacity: 0.95,
                filter: 'blur(8px)',
              }}
            />
            <span
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(70% 70% at 30% 30%, color-mix(in oklch, var(--accent) 20%, transparent), transparent 60%)',
                opacity: 0.9,
              }}
            />
          </span>
          <span
            className="hidden sm:block text-sm font-sans"
            style={{ color: 'var(--text-muted)' }}
          >
            Shivendra Singh Tanwar
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-sans font-medium link-line${pathname === l.href ? ' is-active' : ''}`}
              style={{ color: pathname === l.href ? 'var(--text)' : 'var(--text-muted)' }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />
          <Link
            href={`mailto:${profile.email}`}
            className="text-sm font-sans font-medium link-line"
            style={{ color: 'var(--accent)' }}
          >
            Let's connect
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-md"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    className="block py-3.5 text-sm font-sans font-medium border-b"
                    style={{
                      color: pathname === l.href ? 'var(--text)' : 'var(--text-muted)',
                      borderColor: 'var(--rule)',
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href={`mailto:${profile.email}`}
                  className="text-sm font-sans font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  Let's connect →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
