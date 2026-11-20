import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCheckCircle, FiLayers } from 'react-icons/fi'
import { skillCategories } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import GitHubShowcase from './GitHubShowcase.jsx'
import './Skills.css'

const LEVELS = {
  'hands-on': { label: 'Hands-on', className: 'is-hands-on' },
  foundational: { label: 'Foundational', className: 'is-foundational' },
}

export default function Skills() {
  const [active, setActive] = useState('all')

  const shown = useMemo(
    () => (active === 'all' ? skillCategories : skillCategories.filter((c) => c.id === active)),
    [active],
  )

  const totalSkills = useMemo(
    () => skillCategories.reduce((sum, c) => sum + c.skills.length, 0),
    [],
  )

  return (
    <section id="skills" className="section">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Technical Skills"
          title={<>Technical <span className="grad-text">Skills Dashboard</span></>}
          subtitle={`${totalSkills} skills across ${skillCategories.length} categories — organised by how I use them, not by invented scores.`}
        />

        {/* Legend */}
        <Reveal className="skills__legend">
          <span className="skills__legend-item">
            <span className="skills__legend-dot is-hands-on" />
            Hands-on — practised through projects and internship work
          </span>
          <span className="skills__legend-item">
            <span className="skills__legend-dot is-foundational" />
            Foundational — coursework and concept-level exposure
          </span>
        </Reveal>

        {/* Category filters */}
        <Reveal className="skills__filters" delay={0.06}>
          <button
            type="button"
            className={`skills__filter ${active === 'all' ? 'is-active' : ''}`}
            onClick={() => setActive('all')}
          >
            <FiLayers /> All
            <span className="skills__filter-count">{totalSkills}</span>
          </button>
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                type="button"
                className={`skills__filter ${active === cat.id ? 'is-active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                <Icon /> {cat.title}
                <span className="skills__filter-count">{cat.skills.length}</span>
              </button>
            )
          })}
        </Reveal>

        {/* Category blocks */}
        <div className="skills__blocks">
          <AnimatePresence mode="popLayout">
            {shown.map((cat, ci) => {
              const CatIcon = cat.icon
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: ci * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="skills__block"
                >
                  <div className="skills__block-head">
                    <span className="skills__block-icon"><CatIcon /></span>
                    <div className="skills__block-title">
                      <h3>{cat.title}</h3>
                      <p>{cat.blurb}</p>
                    </div>
                    <span className="skills__block-count">{cat.skills.length}</span>
                  </div>

                  <div className="skills__cards">
                    {cat.skills.map((skill, si) => {
                      const SkillIcon = skill.icon
                      const level = LEVELS[skill.level]
                      return (
                        <motion.div
                          key={skill.name}
                          className="skills__card glass glass--hover"
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 0.45, delay: si * 0.05 }}
                        >
                          <span className="skills__card-icon"><SkillIcon /></span>
                          <h4>{skill.name}</h4>
                          <p>{skill.desc}</p>
                          <span className={`skills__level ${level.className}`}>
                            <FiCheckCircle /> {level.label}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <GitHubShowcase />
      </div>
    </section>
  )
}
