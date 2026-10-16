import React, { useState } from 'react'

export default function FloatingCallWidget({ onOpenConsultation }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="pifi-chat-widget">
      {/* Popover Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '56px',
            right: 0,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '20px',
            padding: '1.25rem',
            boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            width: '280px',
            animation: 'modalScale 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
              Tezkor Muloqot Markazi
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
              Sport, massaj va sanatoriylar bo'yicha bepul ma'lumot va yo'llanma
            </div>
          </div>

          <a
            href="tel:+998712000000"
            className="btn-dark-pill"
            style={{
              padding: '0.65rem 1rem',
              justifyContent: 'flex-start',
              fontSize: '0.86rem'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+998 (71) 200-00-00</span>
          </a>

          <a
            href="https://t.me/sihatsport_support"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-pill"
            style={{
              padding: '0.6rem 1rem',
              justifyContent: 'flex-start',
              fontSize: '0.84rem'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            <span>Telegram orqali yozish</span>
          </a>

          <button
            onClick={() => {
              setMenuOpen(false)
              onOpenConsultation()
            }}
            className="btn-lavender-pill"
            style={{
              padding: '0.6rem 1rem',
              justifyContent: 'flex-start',
              fontSize: '0.82rem'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            <span>Qo'ng'iroq buyurtma qilish</span>
          </button>
        </div>
      )}

      {/* Floating Lavender Button (MyPiFi Style) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="pifi-chat-btn"
        title="24/7 Muloqot va Aloqa"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
  )
}
