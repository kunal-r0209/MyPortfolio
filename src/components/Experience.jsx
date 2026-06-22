/* eslint-disable */
import { useReveal } from '../hooks/useReveal'

const experience = [
  {
    role: 'Technical Associate',
    company: 'Info Way Solutions, Chennai',
    period: 'Feb – Present',
    location: 'Chennai, India',
    points: [
      'Support US-based IT operations by diagnosing and resolving technical issues, maintaining consistent response times.',
      'Collaborate with cross-functional teams to troubleshoot operational problems, contributing to faster incident resolution.',
      'Part of an intensive developer training program focused on production-grade code.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'IBC Techno Consultancy Pvt Ltd, Bangalore',
    period: 'Dec 2025 – Feb 2026',
    location: 'Bengaluru, India',
    points: [
      'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN Stack).',
      'Implemented JWT authentication, REST APIs, CRUD operations, responsive UI, and file upload features.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Pursuit Future Technology, Bangalore',
    period: 'Sep 2025 – Nov 2025',
    location: 'Bengaluru, India',
    points: [
      'Built web interfaces using HTML, CSS, JavaScript, Bootstrap, React.js, Node.js.',
      'Utilized Git, GitHub, and Postman for version control, collaboration, and API testing.',
    ],
  },
]

function ExpCard({ job, index, isLast }) {
  const ref = useReveal('reveal', 0.1)

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        transitionDelay: `${index * 150}ms`,
        display: 'grid',
        gridTemplateColumns: '220px 1px 1fr',
        gap: '0 48px',
        position: 'relative',
      }}
    >
      {/* Left — date + location */}
      <div
        style={{
          textAlign: 'right',
          paddingTop: '2px',
          paddingBottom: '48px',
        }}
      >
        {/* Period badge */}
        <div
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: 'rgba(201,169,110,0.08)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderRadius: '2px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '10px',
          }}
        >
          {job.period}
        </div>
        <p
          style={{
            fontSize: '0.78rem',
            color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}
        >
          {job.location}
        </p>

        {/* Index number */}
        <p
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: 700,
            color: 'rgba(201,169,110,0.06)',
            lineHeight: 1,
            marginTop: '16px',
            userSelect: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </p>
      </div>

      {/* Timeline center */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Glowing dot */}
        <div
          style={{
            position: 'relative',
            width: '12px',
            height: '12px',
            flexShrink: 0,
            marginTop: '4px',
          }}
        >
          {/* Outer glow ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              background: 'rgba(201,169,110,0.15)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          {/* Inner dot */}
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'var(--accent)',
              border: '2px solid var(--ink)',
              outline: '2px solid rgba(201,169,110,0.5)',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>

        {/* Connecting line */}
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: '1px',
              marginTop: '10px',
              background: 'linear-gradient(to bottom, rgba(201,169,110,0.6), rgba(201,169,110,0.05))',
              minHeight: '80px',
            }}
          />
        )}
      </div>

      {/* Right — content card */}
      <div style={{ paddingBottom: '56px' }}>
        <div
          style={{
            padding: '28px 32px',
            background: '#0d0d0d',
            border: '1px solid #1e1e1e',
            borderRadius: '4px',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(201,169,110,0.25)'
            e.currentTarget.style.boxShadow = '0 0 32px rgba(201,169,110,0.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#1e1e1e'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {/* Role + company */}
          <div style={{ marginBottom: '20px' }}>
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--paper)',
                marginBottom: '6px',
                lineHeight: 1.2,
              }}
            >
              {job.role}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.06em',
                }}
              >
                {job.company}
              </span>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  opacity: 0.4,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.68rem',
                  color: 'var(--muted)',
                }}
              >
                {job.location}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(to right, rgba(201,169,110,0.2), transparent)',
              marginBottom: '20px',
            }}
          />

          {/* Bullet points */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {job.points.map((pt, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: '12px',
                  fontSize: '0.88rem',
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                }}
              >
                <span
                  style={{
                    color: 'var(--accent)',
                    flexShrink: 0,
                    marginTop: '3px',
                    fontSize: '0.7rem',
                  }}
                >
                  ▹
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 0.2; }
        }
      `}</style>
    </div>
  )
}

export default function Experience() {
  const headRef = useReveal('reveal', 0.1)

  return (
    <section
      id="experience"
      style={{
        background: 'var(--surface)',
        padding: '100px 48px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div ref={headRef} className="reveal" style={{ marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>04 — Experience</p>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              color: 'var(--paper)',
            }}
          >
            Where I've<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>worked.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div>
          {experience.map((job, i) => (
            <ExpCard
              key={job.company + i}
              job={job}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
