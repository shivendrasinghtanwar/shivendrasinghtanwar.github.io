'use client'

import { motion } from 'framer-motion'

// template.tsx already remounts on every route change in Next.js App Router,
// so framer-motion's enter animation fires automatically — no AnimatePresence needed.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
