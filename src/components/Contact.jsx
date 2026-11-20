import { useState } from 'react'
import { FiAlertCircle, FiCheckCircle, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { profile } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './Contact.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMPTY = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  else if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sent' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    try {
      const subject = encodeURIComponent(form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`)
      const body = encodeURIComponent(
        `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
      )
      window.location.href = `${profile.socials.email}?subject=${subject}&body=${body}`
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container section__inner">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="grad-text">Connect and Create</span> Something Meaningful</>}
          subtitle="Open to entry-level opportunities, internships and collaborations. Send a message or reach out directly."
          center
        />

        <div className="contact__grid">
          <Reveal className="contact__info">
            <a href={profile.socials.email} className="contact__card glass glass--hover">
              <span className="contact__card-icon"><FiMail /></span>
              <div>
                <span className="contact__card-label">Email</span>
                <p>{profile.contact.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.contact.phone.replace(/[\s-]/g, '')}`}
              className="contact__card glass glass--hover"
            >
              <span className="contact__card-icon"><FiPhone /></span>
              <div>
                <span className="contact__card-label">Phone</span>
                <p>{profile.contact.phone}</p>
              </div>
            </a>

            <div className="contact__card glass">
              <span className="contact__card-icon"><FiMapPin /></span>
              <div>
                <span className="contact__card-label">Location</span>
                <p>{profile.contact.location}</p>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact__social"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="contact__social"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="contact__form-wrap glass glass--edge">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                <label>
                  <span>Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                  />
                  {errors.name && (
                    <em id="err-name" className="contact__field-error">
                      <FiAlertCircle /> {errors.name}
                    </em>
                  )}
                </label>
                <label>
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                  />
                  {errors.email && (
                    <em id="err-email" className="contact__field-error">
                      <FiAlertCircle /> {errors.email}
                    </em>
                  )}
                </label>
              </div>

              <label>
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration"
                />
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                />
                {errors.message && (
                  <em id="err-message" className="contact__field-error">
                    <FiAlertCircle /> {errors.message}
                  </em>
                )}
              </label>

              <button type="submit" className="btn btn--primary contact__submit">
                <FiSend /> Send Message
              </button>

              {status === 'sent' && (
                <p className="contact__feedback contact__feedback--ok" role="status">
                  <FiCheckCircle />
                  <span>
                    Your email app should now open with the message pre-filled. If nothing happens, email me
                    directly at <strong>{profile.contact.email}</strong>.
                  </span>
                </p>
              )}

              {status === 'error' && Object.keys(errors).length > 0 && (
                <p className="contact__feedback contact__feedback--err" role="alert">
                  <FiAlertCircle />
                  <span>Please fix the highlighted fields and try again.</span>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
