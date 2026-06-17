/* eslint-disable */
import { useReveal } from '../hooks/useReveal'
const projects = [
  {
    title: 'LuxeLane',
    image: '/images/Luxe.png',
    year: '2026',
    type: 'Full-Stack . E-commerce',
    description:
      'Full-stack e-commerce app with user authentication, product management, shopping cart, and search functionality. Developed responsive frontend components and RESTful backend APIs for efficient data handling and user interactions.',
    tech: [
      'Spring Boot',
      'React.js',
      'JPA',
      'PostgreSQL',
      'MongoDB',
      'Express js',
      'Render',
    ],
     live: 'https://e-commerce-luxlane-shopping.onrender.com/',
    github: 'https://github.com/kunal-r0209/E-commerce-LuxLane-shopping',
    featured: true,
  },
  {
    title: 'iPhone 15 Pro Showcase UI',
    image: '/images/Iphone.png',
    year: '2024',
    type: 'Animated 3D . landing page',
    description:
      'A mobile-responsive landing page inspired by Apple’s high-end animated UI design, built using React (TypeScript) and TailwindCSS. It features smooth, interactive animations powered by GSAP, along with 3D visual elements rendered using Three.js, and includes a fully responsive navigation system optimized for both desktop and mobile experience.',
    tech: [
      'React-TS',
      'TailwindCSS',
      'GSAP',
      'Three.js',
      'Docker',
      'Render',
    ],
   live: 'https://iphone-titanium.onrender.com/',
    github: 'https://github.com/kunal-r0209/iphone-titanium',
    featured: false,
  },
  {
    title: 'Student Management System',
    image: '/images/st-mgt.png',
    year: '2025',
    type: 'Full Stack · MVC CRUD App',
    description:
      'Full-stack CRUD application using MVC architecture, Java Servlets, JSP, and PostgreSQL with a layered Controller-Service pattern for clean separation of concerns.',
    tech: ['Java', 'Servlets', 'JSP', 'PostgreSQL', 'MVC'],
    live: null,
    github: 'https://github.com/kunal-r0209/student-management-system',
    featured: false,
  },
  {
    title: 'PolicyPilot AI',
    image: '/images/Policypilot.png',
    year: '2026',
    type: 'AI-powered . insurance assistant ',
    description:
      'Built an AI-powered insurance assistant using Retrieval-Augmented Generation (RAG) for context-aware policy responses. Designed a scalable FastAPI backend with conversational memory,REST APIs,Docker support, deployment-ready architecture.',
    tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Groq Llama 3'],
    live: null,
    github: 'https://github.com/kunal-r0209/policypilot-ai',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const ref = useReveal('reveal', 0.1)

  return (
    <div
      ref={ref}
      className="reveal card-glow"
      style={{
        transitionDelay: `${index * 80}ms`,
        padding: '24px',
        background: '#101010',
        border: '1px solid #1e1e1e',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        height: '100%',
      }}
    >
      {/* Screenshot */}
      <div
        style={{
          borderRadius: '3px',
          overflow: 'hidden',
          height: '130px',
          border: '1px solid #1a1a1a',
          flexShrink: 0,
          background: '#0a0a0a',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            {project.type} · {project.year}
          </span>

          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--paper)',
              marginTop: '4px',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #2a2a2a',
              borderRadius: '2px',
              color: 'var(--muted)',
              fontSize: '0.8rem',
              textDecoration: 'none',
              transition: 'border-color 0.25s, color 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a2a'
              e.currentTarget.style.color = 'var(--muted)'
            }}
          >
            ↗
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--accent)',
                borderRadius: '2px',
                color: 'var(--accent)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'background 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.color = 'var(--ink)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--accent)'
              }}
            >
              Live
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--muted)',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tech chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.06em',
              padding: '3px 8px',
              background: '#181818',
              border: '1px solid #252525',
              borderRadius: '2px',
              color: 'var(--muted)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const headRef = useReveal('reveal', 0.1)
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      style={{
        padding: '90px 48px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        ref={headRef}
        className="reveal"
        style={{ marginBottom: '48px' }}
      >
        <p className="section-label" style={{ marginBottom: '10px' }}>
          03 — Projects
        </p>

        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'var(--paper)',
          }}
        >
          Things I've{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            shipped.
          </span>
        </h2>
      </div>

      {/* Featured — AlfaazCraft */}
      {featured && (
        <div
          className="card-glow"
          style={{
            marginBottom: '24px',
            padding: '36px',
            background: '#0d0d0d',
            border: '1px solid #1e1e1e',
            borderRadius: '4px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left — info */}
          <div>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              ★ Featured · {featured.type} · {featured.year}
            </span>

            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                fontWeight: 700,
                color: 'var(--paper)',
                marginBottom: '14px',
                lineHeight: 1.1,
              }}
            >
              {featured.title}
            </h3>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--muted)',
                lineHeight: 1.75,
                marginBottom: '20px',
              }}
            >
              {featured.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '24px',
              }}
            >
              {featured.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.62rem',
                    padding: '3px 10px',
                    background: '#181818',
                    border: '1px solid #282828',
                    borderRadius: '2px',
                    color: 'var(--muted)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo ↗
                </a>
              )}

              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right — AlfaazCraft screenshot */}
          <div
            style={{
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid #1e1e1e',
              height: '260px',
              background: '#080808',
            }}
          >
            <img
              src="/images/Luxe.png"
              alt="Luxe"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                transition: 'transform 0.6s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            />
          </div>
        </div>
      )}

      {/* 3 cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {rest.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}