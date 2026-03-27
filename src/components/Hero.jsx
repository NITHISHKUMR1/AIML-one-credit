import React from 'react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(124,106,247,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,106,247,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />
      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '20%', left: '60%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)',
        zIndex: 0, filter: 'blur(40px)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '4rem' }}>
        <p className="fade-up" style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>
          // hello world, I'm
        </p>

        <h1 className="fade-up delay-1" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          {profile.name}
        </h1>

        <h2 className="fade-up delay-2" style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontFamily: 'var(--display)',
          fontWeight: 600,
          color: 'var(--accent2)',
          marginBottom: '1.5rem',
        }}>
          {profile.title}
        </h2>

        <p className="fade-up delay-3" style={{
          maxWidth: 560, color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: '2.5rem',
        }}>
          {profile.tagline}
        </p>

        <div className="fade-up delay-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
            Download CV ↓
          </a>
        </div>

        {/* Floating tech pills */}
        <div style={{ marginTop: '4rem', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['MongoDB','Express.js','React.js','Node.js','Core Java','Python'].map((t,i) => (
            <span key={t} className="tag fade-up" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--mono)',
        animation: 'fadeUp 1s 1s both',
      }}>
        <span>scroll</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'pulse 2s infinite',
        }} />
      </div>
    </section>
  )
}
