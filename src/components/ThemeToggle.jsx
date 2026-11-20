import { AnimatePresence, motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import './ThemeToggle.css'

/** Dark / light theme switcher with an animated icon swap. */
export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -14, opacity: 0, rotate: -35 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 35 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <FiMoon /> : <FiSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
