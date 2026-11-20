import { FiBriefcase, FiCalendar, FiExternalLink, FiFileText, FiTarget } from 'react-icons/fi'
import { careerGoals, experience } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section section--tight">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Internships & Experience"
          title={<>Professional <span className="grad-text">Experience</span></>}
          subtitle="Hands-on industry internships where coursework turned into working, tested code."
        />

        <div className="exp__timeline">
          {experience.map((job, i) => {
            const hasCert = Boolean(job.certificate?.url)
            return (
              <Reveal key={`${job.company}-${job.role}`} delay={i * 0.12} className="exp__item">
                <div className="exp__marker">
                  <FiBriefcase />
                </div>

                <div className={`exp__card glass glass--hover glass--edge ${job.status === 'Current' ? 'exp__card--current' : ''}`}>
                  <div className="exp__head">
                    <div className="exp__headline">
                      <h3>{job.role}</h3>
                      <p className="exp__company-line">
                        <span className="exp__company">{job.company}</span>
                        <span className="exp__dot" />
                        <span className="exp__type">{job.type}</span>
                      </p>
                      <p className="exp__period"><FiCalendar /> {job.period}</p>
                    </div>
                    <span className={`exp__status ${job.status === 'Current' ? 'is-current' : 'is-done'}`}>
                      {job.status}
                    </span>
                  </div>

                  <ul className="exp__points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="exp__tech">
                    <span className="exp__tech-label">Technologies</span>
                    <div className="exp__stack">
                      {job.stack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="exp__cert">
                    <span className="exp__cert-icon"><FiFileText /></span>
                    <div className="exp__cert-body">
                      <strong>{job.certificate?.label || 'Certificate'}</strong>
                      <small>{hasCert ? 'Verified document available' : 'Available on request'}</small>
                    </div>
                    {hasCert ? (
                      <a href={job.certificate.url} target="_blank" rel="noreferrer" className="exp__cert-link">
                        View <FiExternalLink />
                      </a>
                    ) : (
                      <span className="exp__cert-link is-muted">On request</span>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="exp__goals" delay={0.1}>
          <div className="exp__goals-head">
            <FiTarget />
            <h3>Career Goals</h3>
          </div>
          <div className="exp__goals-grid">
            {careerGoals.map((goal) => (
              <div key={goal.phase} className="exp__goal glass glass--hover">
                <span className="exp__goal-phase">{goal.phase}</span>
                <h4>{goal.title}</h4>
                <p>{goal.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
