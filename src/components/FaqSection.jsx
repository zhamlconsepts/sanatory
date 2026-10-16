import React, { useState } from 'react'

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="faq-section" id="faq" style={{ padding: '3rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            SAVOL VA JAVOBLAR
          </span>
          <h2 className="heading-editorial">Ko'p So'raladigan Savollar</h2>
          <p className="section-subtitle">
            Sanatoriyalarga yo'llanma olish, to'lovlar va elektron vaucher kafolatlari bo'yicha eng muhim javoblar
          </p>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={faq.id || idx}
                style={{
                  background: 'var(--bg-card)',
                  border: isOpen ? '1.5px solid var(--accent-lavender-dark)' : '1px solid var(--border-card)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.1rem 1.35rem',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem'
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent-lavender)' : 'var(--bg-subtle)',
                      color: isOpen ? 'var(--accent-lavender-dark)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.35rem 1.15rem 1.35rem',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-card)',
                      paddingTop: '0.85rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
