import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiInfo,
  FiTarget,
  FiX,
} from 'react-icons/fi'
import { projectCategories, projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Projects.css'

const statusTone = {
  done: 'is-done',
  live: 'is-live',
  concept: 'is-concept',
  progress: 'is-progress',
}

const categoryLabel = (id) =>
  projectCategories.find((c) => c.id === id)?.label ?? 'Project'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const counts = useMemo(() => {
    const map = { all: projects.length }
    projects.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1
    })
    return map
  }, [])

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
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
    <section id="projects" className="section">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Things I&apos;ve <span className="grad-text">Built</span>
            </>
          }
          subtitle="Academic and personal projects that apply what I learn — from frontends to databases. Open any project for the full breakdown."
        />

        <Reveal className="projects__filters">
          {projectCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`projects__filter ${filter === c.id ? 'is-active' : ''}`}
              onClick={() => setFilter(c.id)}
              aria-pressed={filter === c.id}
            >
              {c.label}
              <span className="projects__filter-count">{counts[c.id] || 0}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className={`projects__card glass glass--hover glass--edge accent-${project.accent}`}
                >
                  <button
                    type="button"
                    className="projects__cover"
                    onClick={() => setActive(project)}
                    aria-label={`View details of ${project.title}`}
                  >
                    <span className="projects__cover-fallback" aria-hidden="true">
                      &lt;/&gt;
                    </span>
                    <span className="projects__cover-veil" />
                    <span className={`projects__status ${statusTone[project.statusTone] || ''}`}>
                      {project.status}
                    </span>
                    <span className="projects__cat">{categoryLabel(project.category)}</span>
                  </button>

                  <div className="projects__body">
                    <h3 className="projects__title">{project.title}</h3>
                    <p className="projects__tagline">{project.tagline}</p>
                    <p className="projects__overview">{project.overview}</p>

                    <div className="projects__stack">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="chip chip--more">+{project.stack.length - 5}</span>
                      )}
                    </div>

                    <div className="projects__actions">
                      <button
                        type="button"
                        className="btn btn--ghost btn--sm"
                        onClick={() => setActive(project)}
                      >
                        View details
                      </button>
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="projects__link"
                          aria-label={`${project.title} source code`}
                        >
                          <FiGithub /> Source Code
                        </a>
                      )}
                      {!project.repo && (
                        <span className="projects__link projects__link--unavailable">
                          <FiGithub /> Source not linked
                        </span>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="projects__link projects__link--primary"
                          aria-label={`${project.title} live demo`}
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                      {!project.demo && (
                        <span className="projects__link projects__link--unavailable">
                          <FiExternalLink /> Not deployed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="pmodal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="pmodal__dialog glass glass--edge"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="pmodal__close" onClick={onClose} aria-label="Close details">
          <FiX />
        </button>

        <div className="pmodal__hero">
          <span className="projects__cover-fallback" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="pmodal__hero-veil" />
          <div className="pmodal__hero-top">
            <span className={`projects__status ${statusTone[project.statusTone] || ''}`}>
              {project.status}
            </span>
            <span className="projects__cat">{categoryLabel(project.category)}</span>
          </div>
        </div>

        <div className="pmodal__body">
          <h3 className="pmodal__title">{project.title}</h3>
          <p className="pmodal__tagline">{project.tagline}</p>

          <div className="pmodal__links">
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                <FiGithub /> View Source Code
              </a>
            ) : (
              <span className="pmodal__link-muted">
                <FiGithub /> Source repository not linked
              </span>
            )}
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                <FiExternalLink /> Live Demo
              </a>
            ) : (
              <span className="pmodal__link-muted">
                <FiExternalLink /> No live deployment
              </span>
            )}
          </div>

          {project.note && (
            <p className="pmodal__note">
              <FiInfo /> {project.note}
            </p>
          )}

          <div className="pmodal__section">
            <h4>Overview</h4>
            <p>{project.overview}</p>
          </div>

          <div className="pmodal__section">
            <h4>Problem Statement</h4>
            <p>{project.problem}</p>
          </div>

          <div className="pmodal__split">
            <div className="pmodal__section">
              <h4>
                <FiTarget /> Objectives
              </h4>
              <ul className="pmodal__list">
                {project.objectives.map((o) => (
                  <li key={o}>
                    <FiCheckCircle /> {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pmodal__section">
              <h4>
                <FiArrowUpRight /> Key Features
              </h4>
              <ul className="pmodal__list">
                {project.features.map((f) => (
                  <li key={f}>
                    <FiCheckCircle /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pmodal__section">
            <h4>Technologies Used</h4>
            <div className="projects__stack">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pmodal__section">
            <h4>My Contribution</h4>
            <p>{project.contribution}</p>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}
