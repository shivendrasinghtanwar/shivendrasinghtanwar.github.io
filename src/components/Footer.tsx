import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { profile } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 mt-24"
      style={{ borderTop: '1px solid var(--rule)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="text-sm font-sans" style={{ color: 'var(--text-muted)' }}>
            © {year} Shivendra Singh Tanwar
          </span>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={16} />
          </Link>
          <Link
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href={profile.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="social-link"
            aria-label="Email"
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
