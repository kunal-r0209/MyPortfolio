import { useState, useEffect } from 'react'
import { personal } from '../data/content'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work',     href: '#experience' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 800,
        padding: '0 40px',
        height: scrolled ? '60px' : '80px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a1a1a' : 'none',
        transition: 'all 0.4s cubic-bezier(.16,1,.3,1)',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--paper)', textDecoration: 'none', letterSpacing: '0.02em' }}>
        KL<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hover-line"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.25s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--paper)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l.label}
          </a>
        ))}
        
      </nav>
    </header>
  )
}
