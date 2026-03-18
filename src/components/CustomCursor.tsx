'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  const dotX = useSpring(x, { damping: 32, stiffness: 900, mass: 0.25 })
  const dotY = useSpring(y, { damping: 32, stiffness: 900, mass: 0.25 })
  const ringX = useSpring(x, { damping: 24, stiffness: 200, mass: 0.5 })
  const ringY = useSpring(y, { damping: 24, stiffness: 200, mass: 0.5 })

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="pointer"], input, textarea, select, label'))
        setHovering(true)
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="pointer"], input, textarea, select, label'))
        setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [x, y])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s ease' }}
    >
      {/* Ring — medium lag */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'var(--accent)',
          opacity: 0.45,
          position: 'absolute',
          borderRadius: '9999px',
          border: '1px solid',
        }}
        animate={{
          width: hovering ? 42 : clicking ? 18 : 28,
          height: hovering ? 42 : clicking ? 18 : 28,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Dot — snappy */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'var(--accent)',
          position: 'absolute',
          borderRadius: '9999px',
        }}
        animate={{
          width: clicking ? 7 : 5,
          height: clicking ? 7 : 5,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  )
}
