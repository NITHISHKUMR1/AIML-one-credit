import React from 'react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '0.5px solid var(--border)',
      padding: '2rem 1.5rem',
      textAlign: 'center',
    }}>
      <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
        &lt;built by <span style={{ color: 'var(--accent2)' }}>{profile.name}</span> with React + Vite /&gt;
      </p>
    </footer>
  )
}
