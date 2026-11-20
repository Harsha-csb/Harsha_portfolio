import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPython,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { profile } from '../data/portfolio.js'
import TypingText from './TypingText.jsx'
import './Hero.css'

const floatingIcons = [
  { Icon: FaJava, className: 'f1', color: '#f89820' },
  { Icon: SiJavascript, className: 'f2', color: '#f7df1e' },
  { Icon: SiReact, className: 'f3', color: '#61dafb' },
  { Icon: SiNodedotjs, className: 'f4', color: '#68a063' },
  { Icon: SiMysql, className: 'f5', color: '#00758f' },
  { Icon: SiPython, className: 'f6', color: '#3776ab' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        {/* ---------------- Left column ---------------- */}
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="hero__status">
            <span className="hero__status-dot" />
            {profile.status}
          </motion.div>

          <motion.h1 variants={item} className="hero__name">
            HARSHAVARDHAN
            <span className="hero__name-last grad-text">UPPALURI</span>
          </motion.h1>

          <motion.p variants={item} className="hero__role">
            <TypingText words={profile.roles} />
          </motion.p>

          <motion.p variants={item} className="hero__intro">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="hero__meta">
            <span><FiMapPin /> {profile.location}</span>
            <span className="hero__meta-sep" />
            <span>B.Tech · CSBS · {profile.graduation}</span>
            <span className="hero__meta-sep" />
            <span>CGPA {profile.cgpa}</span>
          </motion.div>

          <motion.div variants={item} className="hero__actions">
            <a href={profile.resumeUrl} download className="btn btn--primary">
              <FiDownload /> Download Resume
            </a>
            <a
              href="#projects"
              className="btn btn--ghost"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="btn btn--ghost"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__socials">
            <span className="hero__socials-label">Connect</span>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
              <FaLinkedinIn />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
              <FaGithub />
            </a>
            <a href={profile.socials.email} aria-label="Email" className="social-btn">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        {/* ---------------- Right column ---------------- */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__orb" />
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />

          <div className="hero__avatar glass glass--edge">
            <div className="hero__avatar-glow" />
            <span className="hero__avatar-monogram">HU</span>
            <span className="hero__avatar-hint">Add your photo here</span>
          </div>

          <div className="hero__badge hero__badge--identity glass">
            <strong>Harsha-CSBS</strong>
          </div>
          <div className="hero__badge hero__badge--year glass">
            <strong>{profile.graduation}</strong>
            <span>Graduate</span>
          </div>

          {floatingIcons.map(({ Icon, className, color }, i) => (
            <div key={className} className={`hero__float glass ${className}`} style={{ animationDelay: `${i * 0.4}s` }}>
              <Icon style={{ color }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
