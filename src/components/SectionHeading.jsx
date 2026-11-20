import Reveal from './Reveal.jsx'

/**
 * Consistent section heading: eyebrow chip + title + optional subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}) {
  return (
    <Reveal className={`sec-head ${center ? 'sec-head--center' : ''}`}>
      {eyebrow && (
        <span className="sec-head__eyebrow">
          <span className="dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="sec-head__title">{title}</h2>
      {subtitle && <p className="sec-head__sub">{subtitle}</p>}
    </Reveal>
  )
}
