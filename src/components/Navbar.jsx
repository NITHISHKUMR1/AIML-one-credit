import React, { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'

const links = ['About','Skills','Projects','Experience','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s',
      padding: '0 1.5rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#hero" style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, color: 'var(--text)', letterSpacing: '-0.02em' }}>
          &lt;{profile.name.split(' ')[0]} /&gt;
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'lowercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent2)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ fontSize: 12, padding: '6px 16px' }}
          >Resume ↗</a>
        </div>
      </div>
    </nav>
  )
}
