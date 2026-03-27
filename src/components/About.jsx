import React from 'react'
import { profile, education, certifications } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">01. about me</p>
        <h2 className="section-title">Who I <span>Am</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Bio */}
          <div>
            <div style={{
              background: 'var(--bg3)',
              border: '0.5px solid var(--border)',
              borderRadius: 12,
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              <p style={{ color: 'var(--muted)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{profile.about}</p>
            </div>

            {/* Quick info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['📍', 'Location', profile.location],
                ['✉️', 'Email', profile.email],
                ['📞', 'Phone', profile.phone],
              ].map(([icon, label, val]) => (
                <div key={label} style={{
                  display: 'flex', gap: 12, alignItems: 'center',
                  padding: '10px 14px',
                  background: 'var(--bg2)',
                  borderRadius: 8,
                  border: '0.5px solid var(--border)',
                }}>
                  <span>{icon}</span>
                  <span style={{ color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 11, width: 60 }}>{label}</span>
                  <span style={{ color: 'var(--text)', fontSize: 14 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: 14, fontFamily: 'var(--mono)', color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Education</h3>
              {education.map(e => (
                <div key={e.id} style={{
                  background: 'var(--bg3)', border: '0.5px solid var(--border)', borderRadius: 10, padding: '1rem 1.2rem', marginBottom: 10,
                  borderLeft: '2px solid var(--accent)',
                }}>
                  <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{e.degree}</p>
                  <p style={{ color: 'var(--accent2)', fontSize: 13 }}>{e.institution}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>{e.period}</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green)' }}>{e.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {certifications.length > 0 && (
              <div>
                <h3 style={{ fontSize: 14, fontFamily: 'var(--mono)', color: 'var(--accent)', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Certifications</h3>
                {certifications.map((c, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 14px',
                    background: 'var(--bg2)',
                    border: '0.5px solid var(--border)',
                    borderRadius: 8,
                    marginBottom: 8,
                  }}>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500 }}>{c.name}</p>
                      <p style={{ fontSize: 12, color: 'var(--muted)' }}>{c.issuer}</p>
                    </div>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--amber)' }}>{c.year}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
