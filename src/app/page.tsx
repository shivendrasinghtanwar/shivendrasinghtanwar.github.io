'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight } from 'lucide-react'
import { profile, experience, projects } from '@/lib/data'

/* ─── Scroll progress bar ───────────────────────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  return <motion.div className="progress-bar" style={{ scaleX }} />
}

/* ─── Section label with extending rule ─────────────────────────────────── */
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
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

/* ─── Home page ─────────────────────────────────────────────────────────── */
export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const currentJob = experience.find((e) => e.current)

  return (
    <>
      <ScrollProgress />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-20 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-16 lg:gap-20">

            {/* Text */}
            <div className="flex-1 min-w-0">
              {/* Meta bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <span
                  className="inline-block w-8 h-px shrink-0"
                  style={{ backgroundColor: 'var(--rule)' }}
                />
                <span
                  className="text-[0.6875rem] font-sans uppercase tracking-[0.18em]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {currentJob
                    ? `${currentJob.title} · ${currentJob.company}`
                    : 'Technology Lead'}
                </span>
              </motion.div>

              {/* Giant Playfair name */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-display font-semibold leading-[0.92] tracking-tight mb-8"
                style={{
                  fontSize: 'clamp(3.25rem, 8vw, 7.5rem)',
                  color: 'var(--text)',
                }}
              >
                Shivendra
                <br />
                Singh Tanwar
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="font-sans text-[1.0625rem] leading-relaxed mb-10 max-w-md"
                style={{ color: 'var(--text-muted)' }}
              >
                {profile.subtitle}
              </motion.p>

              {/* Proof points */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
              >
                {[
                  { k: 'Experience', v: '8+ years' },
                  { k: 'Focus', v: 'Distributed systems' },
                  { k: 'Location', v: 'Hyderabad · Remote' },
                ].map((item) => (
                  <motion.div
                    key={item.k}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="surface rounded-xl px-4 py-3"
                  >
                    <p
                      className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] mb-1"
                      style={{ color: 'var(--text-muted)', opacity: 0.75 }}
                    >
                      {item.k}
                    </p>
                    <p className="font-display text-sm font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                      {item.v}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="flex flex-wrap items-center gap-7 mb-12"
              >
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold transition-all group"
                  style={{ color: 'var(--accent)' }}
                >
                  View Resume
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-medium link-line group"
                  style={{ color: 'var(--text-muted)' }}
                >
                  See Projects
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-5"
              >
                {[
                  { href: profile.social.github, Icon: Github, label: 'GitHub' },
                  { href: profile.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={label}
                  >
                    <Icon size={17} />
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="shrink-0 self-start"
            >
              <div
                className="relative overflow-hidden rounded-2xl surface"
                style={{
                  width: 'clamp(180px, 26vw, 260px)',
                  aspectRatio: '3/4',
                }}
              >
                <Image
                  src="/images/Profile.jpg"
                  alt="Shivendra Singh Tanwar"
                  fill
                  className="object-cover"
                  priority
                  style={{
                    filter: 'saturate(0.9) contrast(1.02)',
                    transform: 'scale(1.12)',
                    transformOrigin: '50% 18%',
                    objectPosition: '50% 18%',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, color-mix(in oklch, var(--bg) 22%, transparent), transparent 55%)',
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── About & Skills ───────────────────────────────────────────── */}
      <div className="e-rule" />
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-24">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>About</SectionLabel>
            {profile.about.map((para, i) => (
              <p
                key={i}
                className="font-sans text-[1.0625rem] leading-relaxed mb-5"
                style={{ color: 'var(--text-muted)' }}
              >
                {para}
              </p>
            ))}
            <div
              className="flex items-center gap-2 mt-6 text-sm font-sans"
              style={{ color: 'var(--text-muted)', opacity: 0.65 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              {profile.location}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <SectionLabel>Expertise</SectionLabel>
            <dl className="space-y-0">
              {profile.skills.map((cat, i) => (
                <div key={cat.category}>
                  {i > 0 && <div className="e-rule my-4" />}
                  <div className="flex gap-5">
                    <dt
                      className="font-sans text-xs font-semibold uppercase tracking-[0.12em] pt-0.5 w-24 shrink-0"
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
          </motion.div>

        </div>
      </section>

      {/* ── Featured Work ─────────────────────────────────────────────── */}
      <div className="e-rule" />
      <section className="py-20 max-w-5xl mx-auto px-6">
        <SectionLabel>Selected Work</SectionLabel>

        <div>
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {i > 0 && <div className="e-rule" />}
              <div className="py-8">
                <div className="flex items-start justify-between gap-6 mb-2">
                  <h3
                    className="font-display font-semibold text-2xl leading-tight"
                    style={{ color: 'var(--text)' }}
                  >
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-5 shrink-0 pt-1">
                    {project.period && (
                      <span
                        className="font-sans text-sm"
                        style={{ color: 'var(--text-muted)', opacity: 0.55 }}
                      >
                        {project.period.split(' – ')[0]}
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

                <p
                  className="font-sans text-xs mb-3"
                  style={{ color: 'var(--text-muted)', opacity: 0.6 }}
                >
                  {project.tech.join(' · ')}
                </p>

                <p
                  className="font-sans text-sm leading-relaxed max-w-2xl"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="e-rule" />
        <div className="pt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium link-line group"
            style={{ color: 'var(--text-muted)' }}
          >
            View all projects
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ── Get in touch ──────────────────────────────────────────────── */}
      <div className="e-rule" />
      <section className="py-20 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionLabel>Get in Touch</SectionLabel>
          <div className="max-w-xl">
            <p
              className="font-sans text-[1.0625rem] leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              I&apos;m always open to new opportunities, interesting projects, and conversations
              about technology and engineering.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-sans text-base font-medium group"
                style={{ color: 'var(--accent)' }}
              >
                <Mail size={15} />
                {profile.email}
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium link-line"
                style={{ color: 'var(--text-muted)' }}
              >
                <Linkedin size={14} />
                LinkedIn profile
                <ArrowUpRight size={11} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
