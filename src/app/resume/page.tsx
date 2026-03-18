'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Github, Linkedin, ArrowUpRight, Download } from 'lucide-react'
import { profile, experience, education, certifications } from '@/lib/data'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span
        className="text-[0.6875rem] font-sans font-semibold uppercase tracking-[0.2em] shrink-0"
        style={{ color: 'var(--text-muted)' }}
      >
        {children}
      </span>
      <div className="flex-1 e-rule" />
    </div>
  )
}

export default function ResumePage() {
  return (
    <main className="min-h-screen py-16 max-w-4xl mx-auto px-6">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-14"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="flex-1">
            <h1
              className="font-display font-semibold leading-tight mb-2"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)', color: 'var(--text)' }}
            >
              {profile.name}
            </h1>
            <p
              className="font-sans text-sm font-semibold uppercase tracking-[0.15em] mb-6"
              style={{ color: 'var(--accent)' }}
            >
              {profile.title}
            </p>

            <div
              className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={12} />
                {profile.location}
              </span>
              <Link href={`mailto:${profile.email}`} className="flex items-center gap-1.5 social-link">
                <Mail size={12} />
                {profile.email}
              </Link>
              <Link href={`tel:${profile.phone}`} className="flex items-center gap-1.5 social-link">
                <Phone size={12} />
                {profile.phone}
              </Link>
              <Link
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 social-link"
              >
                <Github size={12} />
                GitHub
              </Link>
              <Link
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 social-link"
              >
                <Linkedin size={12} />
                LinkedIn
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-sans text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 surface"
                style={{ color: 'var(--text)' }}
              >
                <Download size={14} />
                Download PDF
              </a>
              <span
                className="font-sans text-xs"
                style={{ color: 'var(--text-muted)', opacity: 0.75 }}
              >
                Put your PDF at <span className="font-mono">public/resume.pdf</span>
              </span>
            </div>

            <p
              className="font-sans text-[1.0625rem] leading-relaxed max-w-xl"
              style={{ color: 'var(--text-muted)' }}
            >
              {profile.about[0]}
            </p>
          </div>

          {/* Portrait */}
          <div
            className="shrink-0 relative overflow-hidden self-start rounded-2xl surface"
            style={{
              width: 96,
              height: 116,
            }}
          >
            <Image
              src="/images/Profile.jpg"
              alt={profile.name}
              fill
              className="object-cover"
              priority
              style={{
                filter: 'saturate(0.9) contrast(1.02)',
                transform: 'scale(1.14)',
                transformOrigin: '50% 16%',
                objectPosition: '50% 16%',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Experience ───────────────────────────────────────────────── */}
      <div className="e-rule mb-12" />
      <motion.section {...fadeIn(0.05)} className="mb-14">
        <SectionLabel>Experience</SectionLabel>
        {experience.map((job, i) => (
          <div key={job.company}>
            {i > 0 && <div className="e-rule my-8" />}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3
                    className="font-display font-semibold text-xl"
                    style={{ color: 'var(--text)' }}
                  >
                    {job.title}
                  </h3>
                  {job.current && <span className="badge-accent">Current</span>}
                </div>
                <p
                  className="font-sans text-sm font-medium mt-0.5"
                  style={{ color: 'var(--accent)' }}
                >
                  {job.company}
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>
                  {job.period}
                </p>
                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: 'var(--text-muted)', opacity: 0.65 }}
                >
                  {job.location}
                </p>
              </div>
            </div>

            <p
              className="font-sans text-sm leading-relaxed mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              {job.description}
            </p>

            {job.bullets.length > 0 && (
              <ul className="space-y-1.5">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-sans text-sm flex gap-3 leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="shrink-0 mt-0.5 font-sans" style={{ color: 'var(--accent)' }}>
                      —
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </motion.section>

      {/* ── Education ────────────────────────────────────────────────── */}
      <div className="e-rule mb-12" />
      <motion.section {...fadeIn(0.1)} className="mb-14">
        <SectionLabel>Education</SectionLabel>
        {education.map((edu, i) => (
          <div key={edu.institution}>
            {i > 0 && <div className="e-rule my-6" />}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <h3
                  className="font-display font-semibold text-lg"
                  style={{ color: 'var(--text)' }}
                >
                  {edu.institution}
                </h3>
                <p
                  className="font-sans text-sm mt-0.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {edu.degree}
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <p className="font-sans text-sm" style={{ color: 'var(--text-muted)' }}>
                  {edu.period}
                </p>
                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: 'var(--text-muted)', opacity: 0.65 }}
                >
                  {edu.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.section>

      {/* ── Skills ───────────────────────────────────────────────────── */}
      <div className="e-rule mb-12" />
      <motion.section {...fadeIn(0.15)} className="mb-14">
        <SectionLabel>Skills</SectionLabel>
        <dl className="space-y-0">
          {profile.skills.map((cat, i) => (
            <div key={cat.category}>
              {i > 0 && <div className="e-rule my-4" />}
              <div className="flex gap-6">
                <dt
                  className="font-sans text-xs font-semibold uppercase tracking-[0.12em] pt-0.5 w-32 shrink-0"
                  style={{ color: 'var(--text-muted)', opacity: 0.65 }}
                >
                  {cat.category}
                </dt>
                <dd
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {cat.items.join(', ')}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </motion.section>

      {/* ── Certifications ───────────────────────────────────────────── */}
      <div className="e-rule mb-12" />
      <motion.section {...fadeIn(0.2)} className="mb-14">
        <SectionLabel>Certifications</SectionLabel>
        {certifications.map((cert, i) => (
          <div key={cert.name}>
            {i > 0 && <div className="e-rule my-4" />}
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="font-sans text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {cert.name}
                </p>
                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: 'var(--text-muted)', opacity: 0.7 }}
                >
                  {cert.issuer}
                </p>
              </div>
              <span
                className="font-sans text-xs shrink-0"
                style={{ color: 'var(--text-muted)', opacity: 0.6 }}
              >
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </motion.section>

      {/* ── LinkedIn ─────────────────────────────────────────────────── */}
      <div className="e-rule mb-8" />
      <motion.div {...fadeIn(0.25)} className="pb-8 text-center">
        <Link
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-sans text-sm link-line group"
          style={{ color: 'var(--text-muted)' }}
        >
          Full profile on LinkedIn
          <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>

    </main>
  )
}
