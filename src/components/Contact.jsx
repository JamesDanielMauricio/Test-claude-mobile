import { useState } from 'react'

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V9H3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

function validate(name, email, message) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email.'
  if (message.trim().length < 10) errors.message = 'Message must be at least 10 chars.'
  return errors
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ text: '', type: '' })
  const [submitting, setSubmitting] = useState(false)

  const update = key => e => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    setErrors(er => ({ ...er, [key]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate(fields.name, fields.email, fields.message)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    setStatus({ text: '', type: '' })
    try {
      await new Promise(res => setTimeout(res, 1200))
      setStatus({ text: "Message sent! I'll get back to you soon.", type: 'success' })
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus({ text: 'Something went wrong. Please try again.', type: 'error' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact__grid">

        <div className="contact__info reveal">
          <h2 className="section__title">Let's Work Together</h2>
          <p>
            I'm currently open to new projects — whether you need a Bubble.io application
            built from scratch, a performance audit, or a custom backend integration.
            Drop me a message and let's talk.
          </p>
          <ul className="contact__socials">
            <li>
              <a href="mailto:jamesdanielmauricio@gmail.com" className="social-link">
                <EmailIcon /> jamesdanielmauricio@gmail.com
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jamesdanielmauricio" target="_blank" rel="noopener" className="social-link">
                <LinkedInIcon /> linkedin.com/in/jamesdanielmauricio
              </a>
            </li>
            <li>
              <a href="https://ichica.co" target="_blank" rel="noopener" className="social-link">
                <GlobeIcon /> ichica.co — Live Project
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={fields.name} onChange={update('name')} placeholder="Your name" required />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={fields.email} onChange={update('email')} placeholder="you@example.com" required />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" value={fields.message} onChange={update('message')} placeholder="Tell me about your project..." required />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>
          <button type="submit" className="btn btn--primary btn--full" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
          {status.text && (
            <p className={`form-status ${status.type}`} aria-live="polite">{status.text}</p>
          )}
        </form>

      </div>
    </section>
  )
}
