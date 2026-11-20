import { FiBriefcase, FiFolder, FiInfo, FiTrendingUp } from 'react-icons/fi'
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi'
import { achievements, nqtResults } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Achievements.css'

const typeMeta = {
  academic: { icon: HiOutlineAcademicCap, className: 'is-academic', label: 'Academic' },
  internship: { icon: FiBriefcase, className: 'is-internship', label: 'Internship' },
  project: { icon: FiFolder, className: 'is-project', label: 'Projects' },
  certificate: { icon: HiOutlineBadgeCheck, className: 'is-certificate', label: 'Certificate' },
  result: { icon: FiTrendingUp, className: 'is-result', label: 'Result' },
}

const pct = (score, outOf) => Math.round((score / outOf) * 1000) / 10

export default function Achievements() {
  const { total } = nqtResults

  return (
    <section id="achievements" className="section">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Milestones &amp; <span className="grad-text">Highlights</span>
            </>
          }
          subtitle="Academic milestones, internships, projects, certificates and examination results — in one professional timeline."
        />

        <div className="ach__timeline">
          {achievements.map((item, i) => {
            const meta = typeMeta[item.type] || typeMeta.academic
            const Icon = meta.icon
            return (
              <Reveal key={item.title} delay={i * 0.06} className="ach__item">
                <span className={`ach__marker ${meta.className}`}>
                  <Icon />
                </span>
                <div className="ach__card glass glass--hover glass--edge">
                  <div className="ach__head">
                    <span className="ach__year">{item.year}</span>
                    <span className={`ach__tag ${meta.className}`}>{meta.label}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* ---------- TCS iON NQT results ---------- */}
        <Reveal className="nqt glass glass--edge">
          <div className="nqt__head">
            <div>
              <span className="nqt__eyebrow">Examination Results</span>
              <h3 className="nqt__title">{nqtResults.provider}</h3>
            </div>
            <span className="nqt__lang">Programming Language: {nqtResults.language}</span>
          </div>

          <p className="nqt__note">
            <FiInfo /> {nqtResults.note}
          </p>

          <div className="nqt__top">
            <div
              className="nqt__ring"
              style={{
                background: `conic-gradient(from -90deg, var(--primary) 0%, var(--violet) ${total.percent}%, rgba(148,163,184,0.16) ${total.percent}%, rgba(148,163,184,0.16) 100%)`,
              }}
            >
              <div className="nqt__ring-inner">
                <strong className="grad-text">{total.percent}%</strong>
                <span>Cognitive</span>
              </div>
            </div>
            <div className="nqt__total">
              <span className="nqt__total-label">{total.label}</span>
              <span className="nqt__total-score">
                {total.score}
                <small> / {total.outOf}</small>
              </span>
            </div>
          </div>

          <div className="nqt__groups">
            {nqtResults.groups.map((group) => (
              <div key={group.title} className="nqt__group">
                <h4 className="nqt__group-title">{group.title}</h4>
                <div className="nqt__cards">
                  {group.items.map((item) => {
                    const percent = pct(item.score, item.outOf)
                    return (
                      <div key={item.label} className="nqt__card">
                        <div className="nqt__card-top">
                          <span className="nqt__card-label">{item.label}</span>
                          <span className="nqt__card-score">
                            {item.score}
                            <small> / {item.outOf}</small>
                          </span>
                        </div>
                        <div className="nqt__bar">
                          <span className="nqt__bar-fill" style={{ width: `${percent}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
