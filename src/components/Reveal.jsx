import { motion } from 'framer-motion'

/**
 * Reusable scroll-reveal wrapper. Fades and lifts children into view once.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.6,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
