import { FiArrowUp, FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { navLinks, profile } from '../data/portfolio.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__mark">HU</span>
            <div>
              <h3>{profile.name}</h3>
              <p className="footer__tagline">{profile.tagline}</p>
              <a className="footer__email" href={profile.socials.email}>
                <FiMail /> {profile.contact.email}
              </a>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h4>Quick Links</h4>
            <div className="footer__links">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`}>{link.label}</a>
              ))}
            </div>
          </nav>

          <div className="footer__connect">
            <h4>Connect</h4>
            <div className="footer__socials">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a href={profile.socials.email} aria-label="Send an email">
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="footer__built">Designed &amp; built with React, Framer Motion &amp; Vite.</p>
          <button
            type="button"
            className="footer__top-btn"
            onClick={backToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
