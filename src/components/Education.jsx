import { FiAward, FiBookOpen, FiCalendar, FiTrendingUp } from 'react-icons/fi'
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi'
import { education, examResults } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Education.css'

/* One graduation-style icon per qualification, from highest to lowest. */
const stageIcons = [HiOutlineAcademicCap, FiBookOpen, HiOutlineBadgeCheck]

export default function Education() {
  return (
    <section id="education" className="section section--tight">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="grad-text">Background</span></>}
          subtitle="A Computer Science and Business Systems path combining technical depth with business fundamentals."
        />

        <div className="edu__timeline">
          {education.map((edu, i) => {
            const StageIcon = stageIcons[i] || HiOutlineAcademicCap
            return (
              <Reveal key={edu.degree} delay={i * 0.12} className="edu__item">
                <div className="edu__marker">
                  <StageIcon />
                </div>
                <div className={`edu__card glass glass--hover glass--edge ${edu.current ? 'edu__card--current' : ''}`}>
                  {edu.current && <span className="edu__badge">Current</span>}

                  <div className="edu__top">
                    <h3>{edu.degree}</h3>
                    <span className="edu__score">
                      <FiTrendingUp /> {edu.score}
                    </span>
                  </div>

                  <p className="edu__institute">{edu.institute}</p>

                  <div className="edu__meta">
                    <span><FiCalendar /> {edu.period}</span>
                    <span><FiAward /> {edu.board}</span>
                  </div>

                  <p className="edu__detail">{edu.detail}</p>

                  {edu.highlights?.length > 0 && (
                    <div className="edu__highlights">
                      {edu.highlights.map((h) => (
                        <span key={h} className="chip">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="edu__results">
          <h3 className="edu__results-title">Examination Results</h3>
          <div className="edu__results-grid">
            {examResults.map((r) => (
              <div key={r.label} className="edu__result glass glass--hover">
                <strong className="grad-text">{r.value}</strong>
                <span className="edu__result-label">{r.label}</span>
                <small>{r.sub}</small>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
