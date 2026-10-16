import React from 'react'

export default function DiseasesDirectory({ diseases, onSelectSanatorium, onFilterByKeyword }) {
  return (
    <section className="diseases-section" id="tashxislar" style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            TASHXISLAR REESTRI
          </span>
          <h2 className="heading-editorial">Qaysi Kasallik Qayerda Davolanadi?</h2>
          <p className="section-subtitle">
            Har bir sanatoriya o'ziga xos mineral suvlari, iqlimiy omillari va balchiqlariga ko'ra chuqur ixtisoslashgan
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
          {diseases.map(d => (
            <div
              key={d.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '18px',
                padding: '1.25rem 1.35rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                transition: 'all var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-card)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'var(--accent-lavender)',
                      color: 'var(--accent-lavender-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      {d.name}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                      {d.specialtyTitle || "Ixtisoslashgan yo'nalish"}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.9rem' }}>
                  {d.description}
                </p>
              </div>

              {/* Recommended chips */}
              <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '0.75rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.45rem' }}>
                  Tavsiya etiladigan sanatoriylar:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {d.recommendedSanatoriums.map((san, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (typeof san === 'string') {
                          onFilterByKeyword(san)
                        } else if (san.id) {
                          onSelectSanatorium(san.id)
                        }
                      }}
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '9999px',
                        padding: '0.22rem 0.65rem',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--text-primary)'
                        e.currentTarget.style.background = 'var(--accent-lavender-subtle)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)'
                        e.currentTarget.style.background = 'var(--bg-subtle)'
                      }}
                    >
                      {typeof san === 'string' ? san : san.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
