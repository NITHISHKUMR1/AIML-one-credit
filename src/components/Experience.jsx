import React from 'react'
import { experience } from '../data/portfolio'

export default function Experience() {
  if (!experience.length) return null
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <p className="section-label">04. experience</p>
        <h2 className="section-title">Where I've <span>Worked</span></h2>

        <div style={{ position: 'relative', maxWidth: 720 }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 16, top: 0, bottom: 0,
            width: 1, background: 'var(--border2)',
          }} />

          {experience.map((e, i) => (
            <div key={e.id} style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '2.5rem' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: 9, top: 6,
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--accent)',
                border: '2px solid var(--bg2)',
                boxShadow: '0 0 8px rgba(124,106,247,0.5)',
              }} />

              <div style={{
                background: 'var(--bg3)',
                border: '0.5px solid var(--border)',
                borderRadius: 10,
                padding: '1.2rem 1.4rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 16 }}>{e.role}</h3>
                    <p style={{ color: 'var(--accent2)', fontSize: 14 }}>{e.company}</p>
                  </div>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)',
                    background: 'var(--bg2)', padding: '4px 10px', borderRadius: 99,
                    border: '0.5px solid var(--border)', height: 'fit-content',
                  }}>{e.period}</span>
                </div>
                <ul style={{ paddingLeft: '1rem', color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
