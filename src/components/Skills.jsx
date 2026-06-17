import { useRef, useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { skills, techMarquee } from '../data/content'
import SkillsOrb from './SkillsOrb'

function SkillBar({ name, level }) {
  const [animate, setAnimate] = useState(false)
  const [hover, setHover] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        marginBottom: '14px',
        padding: '14px',
        background: hover ? 'rgba(201,169,110,0.05)' : '#0d0d0d',
        border: hover
          ? '1px solid rgba(201,169,110,0.25)'
          : '1px solid #1a1a1a',
        borderRadius: '10px',
        transition: 'all 0.35s ease',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 10px 30px rgba(201,169,110,0.08)'
          : 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '0.95rem',
            color: 'var(--paper)',
            fontWeight: 500,
          }}
        >
          {name}
        </span>

        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem',
            color: 'var(--accent)',
            padding: '4px 8px',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '20px',
            background: 'rgba(201,169,110,0.05)',
          }}
        >
          {level}%
        </span>
      </div>

      <div
        style={{
          height: '8px',
          background: '#1a1a1a',
          borderRadius: '999px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          className={animate ? 'skill-bar-fill' : ''}
          style={{
            height: '100%',
            width: animate ? `${level}%` : '0%',
            background:
              'linear-gradient(90deg, var(--accent-dark), var(--accent), #f5d08a)',
            borderRadius: '999px',
            transition: 'width 1.4s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '-40%',
              width: '40%',
              height: '100%',
              background:
                'linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)',
              animation: animate ? 'shine 2s infinite' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useReveal('reveal', 0.1)

  return (
    <section
      id="skills"
      style={{
        background:
          'radial-gradient(circle at top, rgba(201,169,110,0.06), transparent 35%), var(--surface)',
        padding: '90px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'rgba(201,169,110,0.05)',
          filter: 'blur(120px)',
          top: '-120px',
          right: '-120px',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          ref={headRef}
          className="reveal"
          style={{
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          <p
            className="section-label"
            style={{
              marginBottom: '12px',
              letterSpacing: '0.2em',
            }}
          >
            02 — Skills
          </p>

          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--paper)',
            }}
          >
            Tools I build
            <br />
            <span
              style={{
                fontStyle: 'italic',
                color: 'var(--accent)',
              }}
            >
              with.
            </span>
          </h2>

          <p
            style={{
              maxWidth: '560px',
              margin: '16px auto 0',
              color: 'var(--muted)',
              fontSize: '0.92rem',
              lineHeight: 1.7,
            }}
          >
            Building scalable backend systems, elegant frontend experiences,
            and full-stack products with modern technologies.
          </p>
        </div>

        {/* Main layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '40px',
          }}
        >
          {/* LEFT SIDE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Backend */}
            <div>
              <p
                style={{
                  marginBottom: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                ✦ Backend
              </p>

              {skills.Backend.map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                />
              ))}
            </div>

            {/* 3D Orb */}
            <div
              style={{
                height: '320px',
                borderRadius: '18px',
                overflow: 'hidden',
                position: 'relative',
                background:
                  'linear-gradient(145deg, rgba(20,18,10,0.95), rgba(10,10,10,0.95))',
                border: '1px solid rgba(201,169,110,0.15)',
                boxShadow: '0 14px 40px rgba(0,0,0,0.28)',
              }}
            >
              <SkillsOrb />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.55), transparent 40%)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.64rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  opacity: 0.85,
                }}
              >
                Drag to explore · Interactive 3D
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Frontend */}
            <div>
              <p
                style={{
                  marginBottom: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                ✦ Frontend
              </p>

              {skills.Frontend.map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                />
              ))}
            </div>

            {/* Databases */}
            <div>
              <p
                style={{
                  marginBottom: '14px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                ✦ Databases & DevOps
              </p>

              {skills['Databases & DevOps'].map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        style={{
          borderTop: '1px solid #1a1a1a',
          borderBottom: '1px solid #1a1a1a',
          padding: '16px 0',
          overflow: 'hidden',
          background: '#0b0b0b',
        }}
      >
        <div className="marquee-track">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.74rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: i % 4 === 0 ? 'var(--accent)' : 'var(--muted)',
                padding: '0 28px',
                whiteSpace: 'nowrap',
              }}
            >
              {t}

              <span
                style={{
                  color: 'var(--border)',
                  marginLeft: '28px',
                }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            left: -40%;
          }
          100% {
            left: 140%;
          }
        }
      `}</style>
    </section>
  )
}