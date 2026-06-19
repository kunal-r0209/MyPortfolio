/* eslint-disable */
import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const personal = {
  email: 'kl07kunal@gmail.com',
  phone: '+91-8438749605',
  location: 'Chennai, TamilNadu, India',
  github: 'https://github.com/kunal-r0209',
  linkedin: 'https://www.linkedin.com/in/kunal-suresh0209/',
}

export default function Contact() {
  const headRef = useReveal('reveal', 0.1)
  const formRef = useReveal('reveal-right', 0.1)
  const leftRef = useReveal('reveal-left', 0.1)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1400))
    setSending(false)
    setSent(true)
  }

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 16px',
    background: focused === field ? '#111' : '#0a0a0a',
    border: `1px solid ${focused === field ? 'var(--accent)' : '#1e1e1e'}`,
    borderRadius: '3px',
    color: 'var(--paper)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxShadow: focused === field ? '0 0 0 3px rgba(201,169,110,0.06)' : 'none',
  })

  const contactItems = [
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: '✉' },
    { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, icon: '☎' },
    { label: 'Location', value: personal.location, href: null, icon: '◎' },
  ]

  return (
    <section
      id="contact"
      style={{ background: 'var(--surface)', padding: '100px 48px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: '56px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>06 — Contact</p>

          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: 'var(--paper)',
            }}
          >
            Let's build<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              something.
            </span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px' }}>

          {/* Left — contact info */}
          <div ref={leftRef} className="reveal-left">
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--muted)',
                lineHeight: 1.85,
                marginBottom: '40px',
              }}
            >
              I'm open to full-time roles, freelance projects, and interesting collaborations.
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            {/* Contact items */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginBottom: '36px',
              }}
            >
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    background: '#0d0d0d',
                    border: '1px solid #1a1a1a',
                    borderRadius: '3px',
                    transition: 'border-color 0.25s, background 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,169,110,0.25)'
                    e.currentTarget.style.background = '#111'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1a1a1a'
                    e.currentTarget.style.background = '#0d0d0d'
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(201,169,110,0.08)',
                      border: '1px solid rgba(201,169,110,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      color: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                        marginBottom: '3px',
                      }}
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--warm)',
                          textDecoration: 'none',
                          transition: 'color 0.25s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm)')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.88rem', color: 'var(--warm)' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(to right, rgba(201,169,110,0.2), transparent)',
                marginBottom: '28px',
              }}
            />

            {/* Social links */}
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '14px',
              }}
            >
              Find me on
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { label: 'GitHub', href: personal.github },
                { label: 'LinkedIn', href: personal.linkedin },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 20px',
                    background: 'transparent',
                    border: '1px solid #222',
                    borderRadius: '3px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.background = 'rgba(201,169,110,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#222'
                    e.currentTarget.style.color = 'var(--muted)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div ref={formRef} className="reveal-right">
            {sent ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  minHeight: '360px',
                  textAlign: 'center',
                  gap: '20px',
                  padding: '40px',
                  background: '#0d0d0d',
                  border: '1px solid rgba(201,169,110,0.2)',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    border: '2px solid var(--accent)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: 'var(--accent)',
                    background: 'rgba(201,169,110,0.06)',
                  }}
                >
                  ✓
                </div>

                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.6rem',
                    color: 'var(--paper)',
                  }}
                >
                  Message sent!
                </h3>

                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    maxWidth: '280px',
                  }}
                >
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div
                style={{
                  padding: '36px',
                  background: '#0d0d0d',
                  border: '1px solid #1a1a1a',
                  borderRadius: '4px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '24px',
                  }}
                >
                  ✦ Send a message
                </p>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  {/* Name */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.62rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: focused === 'name' ? 'var(--accent)' : 'var(--muted)',
                        marginBottom: '8px',
                        transition: 'color 0.25s',
                      }}
                    >
                      Name
                    </label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      style={inputStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.62rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: focused === 'email' ? 'var(--accent)' : 'var(--muted)',
                        marginBottom: '8px',
                        transition: 'color 0.25s',
                      }}
                    >
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.62rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: focused === 'message' ? 'var(--accent)' : 'var(--muted)',
                        marginBottom: '8px',
                        transition: 'color 0.25s',
                      }}
                    >
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      style={{
                        ...inputStyle('message'),
                        resize: 'vertical',
                        minHeight: '130px',
                      }}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      alignSelf: 'flex-start',
                      padding: '13px 32px',
                      background: sending ? 'var(--accent-dark)' : 'var(--accent)',
                      color: 'var(--ink)',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      border: 'none',
                      borderRadius: '3px',
                      cursor: sending ? 'not-allowed' : 'pointer',
                      opacity: sending ? 0.8 : 1,
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                    onMouseEnter={(e) => {
                      if (!sending) e.currentTarget.style.background = 'var(--accent-dark)'
                    }}
                    onMouseLeave={(e) => {
                      if (!sending) e.currentTarget.style.background = 'var(--accent)'
                    }}
                  >
                    {sending ? (
                      <>
                        <span
                          style={{
                            width: '12px',
                            height: '12px',
                            border: '2px solid var(--ink)',
                            borderTop: '2px solid transparent',
                            borderRadius: '50%',
                            display: 'inline-block',
                            animation: 'spin 0.8s linear infinite',
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </form>

                <style>{`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                  }
                `}</style>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
