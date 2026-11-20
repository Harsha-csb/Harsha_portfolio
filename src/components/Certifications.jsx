import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiAward, FiCalendar, FiExternalLink, FiEye, FiFileText, FiPlus, FiX } from 'react-icons/fi'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { certCategories, certifications } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Certifications.css'

export default function Certifications() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const counts = useMemo(() => {
    const map = { all: certifications.length }
    certifications.forEach((c) => {
      map[c.category] = (map[c.category] || 0) + 1
    })
    return map
  }, [])

  const visible = useMemo(
    () => (filter === 'all' ? certifications : certifications.filter((c) => c.category === filter)),
    [filter]
  )

  useEffect(() => {
    if (!active) return undefined
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="certifications" className="section section--tight">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Learning &amp; <span className="grad-text">Credentials</span>
            </>
          }
          subtitle="Internship certificates and verified learning achievements. Blank cards are placeholders for certificates to be added from real records."
        />

        <Reveal className="certs__filters">
          {certCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`certs__filter ${filter === c.id ? 'is-active' : ''}`}
              onClick={() => setFilter(c.id)}
              aria-pressed={filter === c.id}
            >
              {c.label}
              <span className="certs__filter-count">{counts[c.id] || 0}</span>
            </button>
          ))}
        </Reveal>

        <div className="certs__grid">
          <AnimatePresence mode="popLayout">
            {visible.map((cert) => {
              return (
                <motion.article
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`certs__card glass glass--hover glass--edge ${
                      cert.placeholder ? 'is-placeholder' : ''
                    }`}
                  >
                    <div className="certs__preview">
                      {cert.image ? (
                        <img src={cert.image} alt={cert.title} loading="lazy" />
                      ) : (
                        <span className="certs__preview-fallback" aria-hidden="true">
                          {cert.placeholder ? <FiPlus /> : <HiOutlineBadgeCheck />}
                        </span>
                      )}
                      {cert.placeholder && <span className="certs__tag">Placeholder</span>}
                      <span className="certs__preview-cat">{categoryLabel(cert.category)}</span>
                    </div>

                    <div className="certs__body">
                      <h3>{cert.title}</h3>
                      <p className="certs__issuer">{cert.issuer || 'Issuing organization to be added'}</p>

                      {cert.date && (
                        <p className="certs__date">
                          <FiCalendar /> {cert.date}
                        </p>
                      )}

                      {cert.skills.length > 0 && (
                        <div className="certs__skills">
                          {cert.skills.map((s) => (
                            <span key={s} className="chip">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {!cert.placeholder && (
                        <div className="certs__actions">
                          <button
                            type="button"
                            className="btn btn--ghost btn--sm"
                            onClick={() => setActive(cert)}
                          >
                            <FiEye /> Preview
                          </button>
                          {cert.pdf && (
                            <a
                              href={cert.pdf}
                              target="_blank"
                              rel="noreferrer"
                              className="certs__link"
                              aria-label={`Open ${cert.title} PDF`}
                            >
                              <FiFileText /> PDF
                            </a>
                          )}
                          {cert.verify ? (
                            <a
                              href={cert.verify}
                              target="_blank"
                              rel="noreferrer"
                              className="certs__link certs__link--primary"
                              aria-label={`Verify ${cert.title}`}
                            >
                              <FiExternalLink /> Verify
                            </a>
                          ) : (
                            <span
                              className="certs__link certs__link--muted"
                              title="Verification link not available"
                            >
                              Verify link pending
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active && <CertModal cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function categoryLabel(id) {
  return certCategories.find((c) => c.id === id)?.label ?? 'Certificate'
}

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      className="cmodal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <motion.div
        className="cmodal__dialog glass glass--edge"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="cmodal__close" onClick={onClose} aria-label="Close preview">
          <FiX />
        </button>

        <div className="cmodal__head">
          <span className="cmodal__icon">
            <FiAward />
          </span>
          <div>
            <h3>{cert.title}</h3>
            <p>
              {cert.issuer || 'Issuing organization to be added'}
              {cert.date ? ` · ${cert.date}` : ''}
            </p>
          </div>
        </div>

        <div className="cmodal__preview">
          {cert.image ? (
            <img src={cert.image} alt={cert.title} />
          ) : cert.pdf ? (
            <iframe src={cert.pdf} title={cert.title} loading="lazy" />
          ) : (
            <div className="cmodal__empty">
              <FiFileText />
              <p>No certificate file uploaded yet.</p>
            </div>
          )}
        </div>

        {cert.skills.length > 0 && (
          <div className="cmodal__skills">
            {cert.skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        )}

        {cert.verify && (
          <a
            href={cert.verify}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--sm cmodal__verify"
          >
            <FiExternalLink /> Verify credential
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}
