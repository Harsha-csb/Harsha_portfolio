import {
  FiClock,
  FiDownload,
  FiEye,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'
import { profile } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Resume.css'

const resumePoints = [
  'Professional summary and career objective',
  'Education and examination results',
  'Technical skills and toolset',
  'Internship and project experience',
  'Certifications and achievements',
]

export default function Resume() {
  return (
    <section id="resume" className="section section--tight">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Resume"
          title={<><span className="grad-text">Resume</span> &amp; CV</>}
          subtitle="Preview my resume below, open it in a new tab, or download a copy for your records."
        />

        <div className="resume__grid">
          <Reveal className="resume__preview glass glass--edge">
            <div className="resume__preview-bar">
              <span className="resume__dot" />
              <span className="resume__dot" />
              <span className="resume__dot" />
              <span className="resume__filename">Harshavardhan_Uppaluri_Resume.pdf</span>
            </div>
            <div className="resume__frame">
              <iframe
                src={profile.resumeUrl}
                title="Resume PDF preview"
                loading="lazy"
              />
            </div>
            <p className="resume__preview-note">
              Preview not loading? Use <strong>View Resume</strong> to open the PDF directly.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="resume__pane">
            <div className="resume__doc glass glass--edge">
              <span className="resume__doc-icon"><FiFileText /></span>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.qualification}</p>
              </div>
            </div>

            <ul className="resume__points">
              {resumePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="resume__actions">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost resume__action"
              >
                <FiEye /> View Resume
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="btn btn--primary resume__action"
              >
                <FiDownload /> Download Resume
              </a>
            </div>

            <p className="resume__updated">
              <FiClock /> Last updated: {profile.resumeUpdated}
            </p>

            <p className="resume__note">
              Keep this file at <code>public/Harshavardhan_Uppaluri_Resume.pdf</code> — replace it with a
              newer version and the preview, download and view actions update automatically.
            </p>
          </Reveal>
        </div>

        <div className="resume__facts">
          <Reveal className="resume__fact glass">
            <FiMail />
            <div>
              <span>Email</span>
              <a href={profile.socials.email}>{profile.contact.email}</a>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="resume__fact glass">
            <FiPhone />
            <div>
              <span>Phone</span>
              <a href={`tel:${profile.contact.phone.replace(/[\s-]/g, '')}`}>{profile.contact.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="resume__fact glass">
            <FiMapPin />
            <div>
              <span>Location</span>
              <p>{profile.contact.location}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="resume__fact glass resume__fact--hl">
            <div>
              <span>Availability</span>
              <p>{profile.status}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
