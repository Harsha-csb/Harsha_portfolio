import { FiCompass } from 'react-icons/fi'
import { beyondTechnical } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './BeyondTechnical.css'

export default function BeyondTechnical() {
  return (
    <section id="beyond" className="section section--tight">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Beyond Technical Knowledge"
          title={<>The <span className="grad-text">CSBS</span> Advantage</>}
          subtitle="Computer Science and Business Systems graduates are trained to work across two worlds — building technology and understanding the business it serves."
        />

        <Reveal className="beyond__intro glass glass--edge">
          <span className="beyond__intro-icon"><FiCompass /></span>
          <p>{beyondTechnical.intro}</p>
        </Reveal>

        <h3 className="beyond__subtitle">Professional &amp; Business Capabilities</h3>
        <div className="beyond__grid">
          {beyondTechnical.capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <Reveal key={cap.title} delay={i * 0.06} className="beyond__card glass glass--hover">
                <span className="beyond__card-icon"><Icon /></span>
                <h4>{cap.title}</h4>
                <p>{cap.text}</p>
              </Reveal>
            )
          })}
        </div>

        <h3 className="beyond__subtitle beyond__subtitle--spaced">Interests &amp; Areas I Follow</h3>
        <div className="beyond__interests">
          {beyondTechnical.interests.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 0.07} className="beyond__interest glass glass--hover glass--edge">
                <span className="beyond__interest-icon"><Icon /></span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1} className="beyond__note glass glass--edge">
          <p>
            The result: a graduate who is adaptable across domains — comfortable writing code, working with data,
            communicating with teams and understanding how technology creates business value.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
