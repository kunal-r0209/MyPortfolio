import { useReveal, useRevealChildren } from '../hooks/useReveal'
import { personal, stats, education } from '../data/content'

export default function About() {
  const headRef  = useReveal('reveal', 0.1)
  const leftRef  = useReveal('reveal-left', 0.1)
  const rightRef = useReveal('reveal-right', 0.1)
  const statsRef = useRevealChildren(100, 0.1)

  return (
    <section
      id="about"
      style={{ padding: '140px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      {/* Header */}
      <div ref={headRef} className="reveal" style={{ marginBottom: '80px' }}>
        <p className="section-label" style={{ marginBottom: '12px' }}>01 — About</p>
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'var(--paper)',
          }}
        >
          The person<br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>behind the code.</span>
        </h2>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* Left — photo + bio */}
        <div ref={leftRef} className="reveal-left">

          {/* ── PROFILE PHOTO ── */}
          <div style={{ marginBottom: '36px', position: 'relative', display: 'inline-block' }}>
            {/* Gold offset border behind photo */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                width: '100%',
                height: '100%',
                border: '1px solid var(--accent)',
                borderRadius: '4px',
                opacity: 0.35,
                zIndex: 0,
              }}
            />
            <img
              src="/images/Kunal1.jpg"
              alt="Kunal S"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '260px',
                height: '300px',
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: '4px',
                border: '1px solid #1e1e1e',
                display: 'block',
                filter: 'grayscale(10%)',
              }}
            />
          </div>

          {/* Bio text */}
          <p style={{ fontSize: '1.05rem', color: 'var(--warm)', lineHeight: 1.85, marginBottom: '24px' }}>
            {personal.bio}
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '40px' }}>
            {personal.bio2}
          </p>

          {/* Contact chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { icon: '📍', text: personal.location },
              { icon: '📧', text: personal.email },
              { icon: '📞', text: personal.phone },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 16px',
                  background: '#141414',
                  border: '1px solid #222',
                  borderRadius: '2px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.04em',
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Education + Stats */}
        <div ref={rightRef} className="reveal-right">

          {/* Education */}
          <div style={{ marginBottom: '48px' }}>
            <p className="section-label" style={{ marginBottom: '20px' }}>Education</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {education.map((edu) => (
                <div
                  key={edu.school}
                  style={{
                    padding: '20px 24px',
                    background: '#141414',
                    border: '1px solid #1e1e1e',
                    borderRadius: '4px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', gap: '12px' }}>
                    <h3
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--paper)',
                        lineHeight: 1.3,
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        color: 'var(--accent)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: 'var(--muted)', marginBottom: '4px' }}>
                    {edu.school} · {edu.location}
                  </p>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--accent)' }}>
                    {edu.gpa}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: '22px',
                  background: '#141414',
                  border: '1px solid #1e1e1e',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}