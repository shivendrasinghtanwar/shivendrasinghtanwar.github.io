'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech))).sort()

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null)
  const filtered = filter ? projects.filter((p) => p.tech.includes(filter)) : projects

  return (
    <main className="min-h-screen py-16 max-w-4xl mx-auto px-6">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-14"
      >
        <h1
          className="font-display font-semibold leading-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--text)' }}
        >
          Projects
        </h1>
        <p
          className="font-sans text-[1.0625rem] leading-relaxed max-w-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          A collection of work spanning backend systems, open-source tooling, and
          browser-based applications.
        </p>
      </motion.div>

      {/* ── Filter ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12"
      >
        <button
          onClick={() => setFilter(null)}
          className="font-sans text-sm font-medium transition-colors"
          style={{ color: filter === null ? 'var(--text)' : 'var(--text-muted)' }}
        >
          <span className={`link-line${filter === null ? ' is-active' : ''}`}>All</span>
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(filter === tech ? null : tech)}
            className="font-sans text-sm font-medium transition-colors"
            style={{ color: filter === tech ? 'var(--text)' : 'var(--text-muted)' }}
          >
            <span className={`link-line${filter === tech ? ' is-active' : ''}`}>{tech}</span>
          </button>
        ))}
      </motion.div>

      {/* ── Project list ─────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-sans text-sm py-12"
            style={{ color: 'var(--text-muted)' }}
          >
            No projects match &quot;{filter}&quot;
          </motion.p>
        ) : (
          <motion.div
            key={filter ?? 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                {i > 0 && <div className="e-rule" />}
                <div className="py-8">
                  <div className="flex items-start justify-between gap-6 mb-2">
                    <h2
                      className="font-display font-semibold text-xl leading-tight"
                      style={{ color: 'var(--text)' }}
                    >
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-5 shrink-0 pt-1">
                      {project.period && (
                        <span
                          className="font-sans text-sm"
                          style={{ color: 'var(--text-muted)', opacity: 0.55 }}
                        >
                          {project.period}
                        </span>
                      )}
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 font-sans text-xs font-semibold uppercase tracking-wider group"
                          style={{ color: 'var(--accent)' }}
                        >
                          Visit
                          <ArrowUpRight
                            size={11}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Tech — clickable to filter */}
                  <div
                    className="font-sans text-xs mb-3"
                    style={{ color: 'var(--text-muted)', opacity: 0.6 }}
                  >
                    {project.tech.map((t, ti) => (
                      <span key={t}>
                        {ti > 0 && (
                          <span className="mx-1.5" style={{ opacity: 0.5 }}>
                            ·
                          </span>
                        )}
                        <button
                          onClick={() => setFilter(filter === t ? null : t)}
                          className="hover:underline underline-offset-2 transition-colors"
                          style={{ color: filter === t ? 'var(--accent)' : 'inherit' }}
                        >
                          {t}
                        </button>
                      </span>
                    ))}
                  </div>

                  <p
                    className="font-sans text-sm leading-relaxed max-w-2xl"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
