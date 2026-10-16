import React, { useState } from 'react'

export default function ReviewsSection({ reviews, onOpenAddReview }) {
  const [filterSanatorium, setFilterSanatorium] = useState('all')

  const uniqueSanatoriums = Array.from(new Set(reviews.map(r => r.sanatoriumName).filter(Boolean)))

  const filteredReviews = filterSanatorium === 'all'
    ? reviews
    : reviews.filter(r => r.sanatoriumName === filterSanatorium)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={i < Math.floor(rating) ? "#F59E0B" : "none"}
        stroke="#F59E0B"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))
  }

  return (
    <section className="reviews-section" id="sharhlar" style={{ padding: '3rem 0', background: 'var(--bg-canvas)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-tagline">
              <span className="tagline-dot"></span>
              HAQIQIY TAJRIBA
            </span>
            <h2 className="heading-editorial">Bemorlar Baholari va Fikrlari</h2>
            <p className="section-subtitle">
              Sanatoriyalarda davolanish kursini o'tagan yurtdoshlarimizning tekshirilgan va xolis baholari
            </p>
          </div>

          <button
            className="btn-dark-pill"
            onClick={onOpenAddReview}
            style={{ padding: '0.55rem 1.25rem' }}
          >
            Sharh Qoldirish
          </button>
        </div>

        {/* OVERALL RATING SCORE CARD */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '20px',
            padding: '1.5rem 1.75rem',
            marginBottom: '2rem',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            gap: '2rem',
            alignItems: 'center',
            boxShadow: '0 4px 18px rgba(0,0,0,0.02)'
          }}
        >
          {/* Main Average Score */}
          <div style={{ textAlign: 'center', paddingRight: '1.5rem', borderRight: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '-0.03em' }}>
              4.9
            </div>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', margin: '0.4rem 0' }}>
              {renderStars(5)}
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              1 500+ tasdiqlangan baho
            </div>
          </div>

          {/* Progress Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.74rem' }}>
              <span style={{ width: '55px', fontWeight: 600, color: 'var(--text-primary)' }}>5 yulduz</span>
              <div style={{ flex: 1, height: '5px', background: 'var(--bg-subtle)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: '91%', height: '100%', background: 'var(--dark-capsule)' }}></div>
              </div>
              <span style={{ width: '32px', color: 'var(--text-secondary)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>91%</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.74rem' }}>
              <span style={{ width: '55px', fontWeight: 600, color: 'var(--text-primary)' }}>4 yulduz</span>
              <div style={{ flex: 1, height: '5px', background: 'var(--bg-subtle)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: '7%', height: '100%', background: 'var(--accent-lavender-dark)' }}></div>
              </div>
              <span style={{ width: '32px', color: 'var(--text-secondary)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>7%</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.74rem' }}>
              <span style={{ width: '55px', fontWeight: 600, color: 'var(--text-primary)' }}>3 yulduz</span>
              <div style={{ flex: 1, height: '5px', background: 'var(--bg-subtle)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: '2%', height: '100%', background: '#F59E0B' }}></div>
              </div>
              <span style={{ width: '32px', color: 'var(--text-secondary)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>2%</span>
            </div>
          </div>

          {/* Sanatorium filter */}
          <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.45rem' }}>
              Sanatoriya bo'yicha:
            </span>
            <select
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '9999px',
                padding: '0.45rem 0.95rem',
                fontSize: '0.8rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              value={filterSanatorium}
              onChange={(e) => setFilterSanatorium(e.target.value)}
            >
              <option value="all">Barchasi ({reviews.length})</option>
              {uniqueSanatoriums.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
          {filteredReviews.slice(0, 6).map(r => (
            <div
              key={r.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '18px',
                padding: '1.35rem',
                boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--accent-lavender)',
                        color: 'var(--accent-lavender-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.86rem'
                      }}
                    >
                      {r.name ? r.name.charAt(0) : 'M'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        {r.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {r.sanatoriumName} • {r.date}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {renderStars(r.rating || 5)}
                  </div>
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  "{r.comment}"
                </p>
              </div>

              {r.treatmentEffect && (
                <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '0.75rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  <span style={{ fontWeight: 600 }}>Natija:</span>
                  <span style={{ color: 'var(--accent-sage)', fontWeight: 600 }}>{r.treatmentEffect}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
