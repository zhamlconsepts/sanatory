import React from 'react'
import { IconClose } from './Icons'

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '0.65rem', maxWidth: '380px', width: '90%' }}>
      {toasts.map(toast => {
        let icon = (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        )

        if (toast.type === 'success') {
          icon = (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-sage)' }}>
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          )
        } else if (toast.type === 'error') {
          icon = (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          )
        } else if (toast.type === 'favorite') {
          icon = (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#E11D48" stroke="#E11D48" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          )
        }

        return (
          <div
            key={toast.id}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              padding: '0.75rem 1.15rem',
              borderRadius: '9999px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              color: 'var(--text-primary)',
              fontSize: '0.84rem',
              fontWeight: 600,
              animation: 'modalScale 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '0 0.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Yopish"
              aria-label="Yopish"
            >
              <IconClose size={13} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
