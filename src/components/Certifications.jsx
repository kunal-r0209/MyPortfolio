/* eslint-disable */
import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const certifications = [
  {
    name: 'Certified in Java Full Stack Development',
    issuer: 'TNSIF (Capgemini)',
    year: '2026',
    category: 'Full Stack',
    icon: '👨🏻‍💻',
  },
  {
    name: 'Certified in Java Full Stack Development Foundation',
    issuer: 'Edusphere Software Training and Development Institute',
    year: '2025',
    category: 'Front Dev',
    icon: '⚛',
  },
  {
    name: 'Completed Web Development Internship',
    issuer: 'FITA Academy',
    year: '2025',
    category: 'Web Dev',
    icon: '🌐',
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL / IIT',
    year: '2023',
    category: 'Cloud',
    icon: '☁️',
  },
  {
    name: 'Internet of Things (IoT)',
    issuer: 'NPTEL / IIT',
    year: '2024',
    category: 'IoT',
    icon: '🔌',
  },
]

function CertCard({ cert, index }) {
  const ref = useReveal('reveal', 0.1)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        style={{
          position: 'relative',
          padding: '28px 32px',
          background: hovered ? '#111' : '#0d0d0d',
          border: `1px solid ${hovered ? 'rgba(201,169,110,0.3)' : '#1a1a1a'}`,
          borderRadius: '4px',
          display: 'grid',
          gridTemplateColumns: '48px 1fr auto',
          alignItems: 'center',
          gap: '24px',
          transition: 'all 0.3s ease',
          boxShadow: hovered ? '0 0 32px rgba(201,169,110,0.05)' : 'none',
          cursor: 'default',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: hovered ? '3px' : '0px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            transition: 'width 0.3s ease',
            borderRadius: '4px 0 0 4px',
          }}
        />

        {/* Icon circle */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: hovered ? 'rgba(201,169,110,0.12)' : 'rgba(201,169,110,0.06)',
            border: `1px solid ${hovered ? 'rgba(201,169,110,0.3)' : 'rgba(201,169,110,0.1)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease',
            flexShrink: 0,
          }}
        >
          {cert.icon}
        </div>

        {/* Content */}
        <div>
          {/* Category tag */}
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: hovered ? 'var(--accent)' : 'var(--muted)',
              transition: 'color 0.3s ease',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            {cert.category}
          </span>

          {/* Cert name */}
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: hovered ? 'var(--paper)' : '#d0c8b8',
              marginBottom: '6px',
              lineHeight: 1.3,
              transition: 'color 0.3s ease',
            }}
          >
            {cert.name}
          </h3>

          {/* Issuer */}
          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: 'var(--muted)',
              letterSpacing: '0.05em',
            }}
          >
            {cert.issuer}
          </p>
        </div>

        {/* Right — index + year */}
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: hovered ? 'rgba(201,169,110,0.15)' : 'rgba(201,169,110,0.06)',
              lineHeight: 1,
              marginBottom: '8px',
              transition: 'color 0.3s ease',
              userSelect: 'none',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
          <span
            style={{
              display: 'inline-block',
              padding: '3px 10px',
              background: hovered ? 'rgba(201,169,110,0.12)' : 'transparent',
              border: `1px solid ${hovered ? 'rgba(201,169,110,0.3)' : '#222'}`,
              borderRadius: '2px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              color: hovered ? 'var(--accent)' : 'var(--muted)',
              letterSpacing: '0.1em',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {cert.year}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const headRef = useReveal('reveal', 0.1)

  return (
    <section
      id="certifications"
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      {/* Header */}
      <div ref={headRef} className="reveal" style={{ marginBottom: '56px' }}>
        <p className="section-label" style={{ marginBottom: '12px' }}>05 — Certifications</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: 'var(--paper)',
            }}
          >
            Always<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>learning.</span>
          </h2>

          {/* Total count badge */}
          <div
            style={{
              padding: '12px 24px',
              background: 'rgba(201,169,110,0.06)',
              border: '1px solid rgba(201,169,110,0.2)',
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
              }}
            >
              {certifications.length}
            </div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.62rem',
                color: 'var(--muted)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginTop: '6px',
              }}
            >
              Certifications
            </div>
          </div>
        </div>
      </div>

      {/* Cert cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {certifications.map((cert, i) => (
          <CertCard key={cert.name} cert={cert} index={i} />
        ))}
      </div>

    </section>
  )
}