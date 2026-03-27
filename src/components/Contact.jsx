import React from 'react'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: 700 }}>
        <p className="section-label">05. contact</p>
        <h2 className="section-title">Let's <span>Connect</span></h2>

        <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: '3rem', lineHeight: 1.8 }}>
          I'm open to full-time roles, freelance projects, and collaborations.
          Feel free to reach out — I typically respond within 24 hours.
        </p>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { icon: '✉', label: 'Email', val: profile.email, href: `mailto:${profile.email}` },
            { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/...', href: profile.linkedin },
            { icon: '🐙', label: 'GitHub', val: 'github.com/...', href: profile.github },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'block',
                background: 'var(--bg2)',
                border: '0.5px solid var(--border)',
                borderRadius: 10,
                padding: '1.2rem',
                transition: 'border-color 0.2s, transform 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(124,106,247,0.4)'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateY(0)' }}
            >
              <div style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', marginBottom: 4, letterSpacing: '0.1em', textTransform: 'lowercase' }}>{item.label}</p>
              <p style={{ fontSize: 13, color: 'var(--text)', wordBreak: 'break-all' }}>{item.val}</p>
            </a>
          ))}
        </div>

        <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            Download Resume ↓
          </a>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  )
}
