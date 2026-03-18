import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
          404
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-3" style={{ color: 'var(--text)' }}>
          Page not found
        </h1>
        <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
          The page you&apos;re looking for doesn&apos;t exist, or it was moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0"
          style={{
            backgroundColor: 'color-mix(in oklch, var(--accent) 16%, transparent)',
            border: '1px solid color-mix(in oklch, var(--accent) 38%, transparent)',
            color: 'var(--text)',
          }}
        >
          <ArrowLeft size={15} />
          Back home
        </Link>
      </div>
    </main>
  )
}
