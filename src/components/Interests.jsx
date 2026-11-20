import { FiCompass } from 'react-icons/fi'
import { personalInterests } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Interests.css'

export default function Interests() {
  return (
    <section id="interests" className="section section--tight">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Personal Interests"
          title={<>Curiosity Beyond <span className="grad-text">Technology</span></>}
          subtitle="The ideas and industries I keep an eye on outside of day-to-day coding."
        />

        <Reveal className="interests__intro glass glass--edge">
          <span className="interests__intro-icon"><FiCompass /></span>
          <p>{personalInterests.intro}</p>
        </Reveal>

        <div className="interests__grid">
          {personalInterests.items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="interests__card glass glass--hover glass--edge"
              >
                <span className="interests__card-icon"><Icon /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
