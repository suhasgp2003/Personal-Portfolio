import { useState } from 'react'

function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.91-.61.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.11 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.89.68 1.79v2.65c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.25A1.75 1.75 0 1 0 6.5 4.75a1.75 1.75 0 0 0 0 3.5ZM5 9.75h3v9.5H5v-9.5Zm5 0h2.87v1.3h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.16h-3v-4.57c0-1.09-.02-2.49-1.52-2.49-1.53 0-1.77 1.18-1.77 2.41v4.65h-3v-9.5Z" /></svg>
}

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    setStatus('Opening your email app…')
    window.location.href = `mailto:suhasgp20@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow"></div>
      <p className="section-number">04 / CONTACT</p>
      <div className="contact-content">
        <div className="contact-heading">
          <p className="contact-pretitle">Let&apos;s connect</p>
          <h2>Contact</h2>
          <p className="contact-copy">Have a question or want to work together? Send a message and I&apos;ll get back to you.</p>
          <ul className="contact-list">
            <li><a href="mailto:suhasgp20@gmail.com"><MailIcon /> suhasgp20@gmail.com</a></li>
            <li><a href="https://github.com/suhasgp2003" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/suhas-gp-898419266/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a></li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" type="text" placeholder="What should I call you?" autoComplete="name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            Your message
            <textarea name="message" placeholder="Tell me a little about your idea..." rows="4" required></textarea>
          </label>
          <button type="submit">Send message <span aria-hidden="true">↗</span></button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </div>
      <div className="contact-footer"><p>© 2026 Suhas GP</p><a href="#home">Back to top ↑</a></div>
    </section>
  )
}

export default Contact
