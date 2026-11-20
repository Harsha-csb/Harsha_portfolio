import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolio.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import ThemeToggle from './ThemeToggle.jsx'
import './Navbar.css'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const active = useScrollSpy(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={(e) => go(e, 'home')}>
          <span className="nav__brand-mark">HU</span>
          <span className="nav__brand-text">
            Harshavardhan
            <small>Uppaluri</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => go(e, link.id)}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
            >
              {link.label}
              {active === link.id && (
                <motion.span layoutId="nav-indicator" className="nav__indicator" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
              )}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle className="nav__theme" />
          <a href={profile.resumeUrl} download className="btn btn--primary btn--sm nav__resume">
            <FiDownload /> Resume
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => go(e, link.id)}
                className={`nav__mobile-link ${active === link.id ? 'is-active' : ''}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <span className="nav__mobile-dot" />
                {link.label}
              </motion.a>
            ))}
            <a href={profile.resumeUrl} download className="btn btn--primary nav__mobile-cta">
              <FiDownload /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
