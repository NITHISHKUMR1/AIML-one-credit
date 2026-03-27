import React, { useState } from 'react'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">03. projects</p>
        <h2 className="section-title">Things I've <span>Built</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {displayed.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setShowAll(v => !v)}
            className="btn btn-outline"
          >
            {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, index }) {
  return (
    <div
      className="fade-up"
      style={{
        animationDelay: `${index * 0.1}s`,
        background: 'var(--bg2)',
        border: '0.5px solid var(--border)',
        borderRadius: 12,
        padding: '1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'rgba(124,106,247,0.15)',
          border: '0.5px solid rgba(124,106,247,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16,
        }}>
          {getCategoryIcon(p.tech[0])}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>{p.year}</span>
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer"
              style={{ color: 'var(--muted)', fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color='var(--accent2)'}
              onMouseLeave={e => e.target.style.color='var(--muted)'}
            >↗ GitHub</a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer"
              style={{ color: 'var(--green)', fontSize: 13 }}
            >● Live</a>
          )}
        </div>
      </div>

      {/* Title & desc */}
      <div>
        <h3 style={{ fontSize: 16, fontFamily: 'var(--display)', marginBottom: 8 }}>{p.title}</h3>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{p.description}</p>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

function getCategoryIcon(tech) {
  if (!tech) return '⚙️'
  if (tech.toLowerCase().includes('react')) return '⚛'
  if (tech.toLowerCase().includes('node')) return '⬢'
  if (tech.toLowerCase().includes('java')) return '♨'
  if (tech.toLowerCase().includes('mongo')) return '🍃'
  return '{ }'
}
