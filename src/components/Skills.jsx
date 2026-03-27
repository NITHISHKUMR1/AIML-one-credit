import React, { useState } from 'react'
import { skills } from '../data/portfolio'

const CATEGORIES = ['all','frontend','backend','database','language','tools']

const CAT_COLOR = {
  frontend: '#7c6af7',
  backend:  '#34d399',
  database: '#fbbf24',
  language: '#f472b6',
  tools:    '#60a5fa',
}

export default function Skills() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <p className="section-label">02. technical skills</p>
        <h2 className="section-title">My <span>Stack</span></h2>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em',
                textTransform: 'lowercase', padding: '6px 16px', borderRadius: 99,
                border: '0.5px solid',
                borderColor: active === c ? 'var(--accent)' : 'var(--border)',
                background: active === c ? 'rgba(124,106,247,0.15)' : 'transparent',
                color: active === c ? 'var(--accent2)' : 'var(--muted)',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >{c}</button>
          ))}
        </div>

        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.2rem' }}>
          {filtered.map(skill => (
            <div key={skill.name} style={{
              background: 'var(--bg3)',
              border: '0.5px solid var(--border)',
              borderRadius: 10,
              padding: '1rem 1.2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontWeight: 500, fontSize: 14 }}>{skill.name}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: CAT_COLOR[skill.category] || 'var(--accent)' }}>
                  {skill.level}%
                </span>
              </div>
              <div style={{ height: 4, borderRadius: 99, background: 'var(--border)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  borderRadius: 99,
                  background: CAT_COLOR[skill.category] || 'var(--accent)',
                  transition: 'width 0.8s cubic-bezier(.4,0,.2,1)',
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          {Object.entries(CAT_COLOR).map(([cat, color]) => (
            <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textTransform: 'capitalize' }}>{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
