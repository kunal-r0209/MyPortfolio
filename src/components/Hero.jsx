import { useState, useEffect } from 'react'
import HeroScene from './HeroScene'
import { personal } from '../data/content'

const roles = personal.roles

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        68
      )
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        38
      )
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--ink)',
      }}
    >
      {/* Three.js 3D background */}
      <HeroScene />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'radial-gradient(ellipse 60% 80% at 35% 50%, transparent 0%, var(--ink) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 48px 80px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
        }}
      >
        {/* ── LEFT — Text ── */}
        <div style={{ flex: 1 }}>
          {/* Location label */}
          <p
            className="section-label"
            style={{
              marginBottom: '24px',
              opacity: 0,
              animation: 'fadeUp 0.7s 0.3s ease forwards',
            }}
          >
            Java Full Stack Developer · Chennai, India
          </p>
        
          {/* Name */}
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 6vw, 7rem)',
              fontWeight: 700,
              lineHeight: 1.0,
              color: 'var(--paper)',
              marginBottom: '16px',
              opacity: 0,
              animation: 'fadeUp 0.8s 0.5s ease forwards',
            }}
          >
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              Kunal
            </span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
              color: 'var(--muted)',
              marginBottom: '32px',
              height: '1.6em',
              opacity: 0,
              animation: 'fadeUp 0.8s 0.75s ease forwards',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>$ </span>
            {displayed}
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.1em',
                background: 'var(--accent)',
                marginLeft: '3px',
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </div>

          {/* Bio */}
          <p
            style={{
              fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
              color: 'var(--muted)',
              maxWidth: '480px',
              lineHeight: 1.85,
              marginBottom: '48px',
              opacity: 0,
              animation: 'fadeUp 0.8s 1s ease forwards',
            }}
          >
            {personal.bio}
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeUp 0.8s 1.2s ease forwards',
            }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>

            <a
              href="/images/kunal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Resume ↗
            </a>
          </div>

          {/* Nagaon → Bengaluru */}
          <div
            style={{
              marginTop: '52px',
              opacity: 0,
              animation: 'fadeUp 0.8s 1.4s ease forwards',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#444',
              }}
            >
              Pondicherry, India
            </span>

            <span style={{ color: '#444', fontSize: '0.8rem' }}>→</span>

            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              Chennai, Tamilnadu
            </span>
          </div>
        </div>

        {/* ── RIGHT — Photo ── */}
        <div
          style={{
            opacity: 0,
            animation: 'fadeUp 0.9s 0.8s ease forwards',
            flexShrink: 0,
            position: 'relative',
          }}
        >
          {/* Top-left corner */}
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '-12px',
              width: '36px',
              height: '36px',
              borderTop: '2px solid var(--accent)',
              borderLeft: '2px solid var(--accent)',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />

          {/* Bottom-right corner */}
          <div
            style={{
              position: 'absolute',
              bottom: '-12px',
              right: '-12px',
              width: '36px',
              height: '36px',
              borderBottom: '2px solid var(--accent)',
              borderRight: '2px solid var(--accent)',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />

          {/* The image itself */}
          <img
            src="/images/Kunal.jpg"
            alt="Kunal"
            style={{
              display: 'block',
              width: '280px',
              height: 'auto',
              borderRadius: '3px',
              border: '1px solid #2a2a2a',
              filter: 'grayscale(10%) contrast(1.05)',
              position: 'relative',
              zIndex: 2,
            }}
          />

          {/* Bottom gradient fade on photo */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100px',
              background:
                'linear-gradient(to top, rgba(10,10,10,0.55), transparent)',
              zIndex: 2,
              borderRadius: '0 0 3px 3px',
              pointerEvents: 'none',
            }}
          />

          {/* Open to work badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 4,
              background: 'rgba(10,10,10,0.88)',
              border: '1px solid #2a2a2a',
              borderRadius: '2px',
              padding: '7px 16px',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                color: 'var(--accent)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              ● Open to Work
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '48px',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0,
          animation: 'fadeUp 0.8s 1.8s ease forwards',
        }}
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.58rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            writingMode: 'vertical-rl',
          }}
        >
          scroll
        </span>

        <div
          style={{
            width: '1px',
            height: '56px',
            background:
              'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes scrollLine {
          0%, 100% {
            transform: scaleY(1);
            opacity: 1;
          }
          50% {
            transform: scaleY(0.5);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  )
}