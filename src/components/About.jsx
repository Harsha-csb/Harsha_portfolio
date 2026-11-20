import { FiCheckCircle } from 'react-icons/fi'
import { highlights, profile, stats } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              My Journey, Skills and <span className="grad-text">Passion for Technology</span>
            </>
          }
          subtitle="A fresher-level foundation built on curiosity, coursework and hands-on practice."
        />

        <div className="about__grid">
          <div className="about__text">
            {profile.aboutParagraphs.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{para}</p>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <ul className="about__list">
                {[
                  'Programming fundamentals and object-oriented thinking',
                  'Frontend development and responsive UI building',
                  'Backend concepts and REST API integration',
                  'Database design, SQL and data handling',
                  'Business, management and analytics foundations',
                ].map((point) => (
                  <li key={point}>
                    <FiCheckCircle /> {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="about__cards">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.09} className="about__card glass glass--hover glass--edge">
                <div className="about__card-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="about__stat glass">
              <strong className="grad-text">{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="about__tagline glass glass--edge">
          <p className="about__tagline-text">{profile.tagline}</p>
        </Reveal>
      </div>
    </section>
  )
}
