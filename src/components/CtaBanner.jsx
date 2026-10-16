import React from 'react'

export default function CtaBanner({ onOpenConsultation }) {
  return (
    <section style={{ padding: '2.5rem 0' }}>
      <div className="container">
        <div
          style={{
            background: 'var(--dark-capsule)',
            color: '#FFFFFF',
            borderRadius: '26px',
            padding: '3rem 2rem',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(234, 213, 230, 0.25) 0%, rgba(28,28,30,0) 70%)',
              pointerEvents: 'none'
            }}
          ></div>

          <span
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              color: 'var(--accent-lavender)',
              fontSize: '0.74rem',
              fontWeight: 700,
              padding: '0.25rem 0.85rem',
              borderRadius: '9999px',
              display: 'inline-block',
              marginBottom: '1rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)'
            }}
          >
            BEPUL MUTAXASSIS VA TIBBIY MASLAHAT
          </span>

          <h2
            className="heading-editorial"
            style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '0.85rem' }}
          >
            <span className="font-italic-serif">Qaysi maskan yoki muolaja</span> sizga eng ma'qul keladi?
          </h2>

          <p style={{ fontSize: '0.96rem', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto 2rem auto' }}>
            Tajribali shifokor va mutaxassislarimiz sizning salomatligingiz, maqsadingiz va byudjetingizga mos maskanni 10 daqiqa ichida bepul tanlab berishadi.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenConsultation}
              className="btn-lavender-pill"
              style={{ padding: '0.65rem 1.6rem', fontSize: '0.9rem' }}
            >
              Mutaxassis Maslahatini Olish
            </button>
            <a
              href="tel:+998712000000"
              className="btn-outline-pill"
              style={{
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                padding: '0.65rem 1.4rem',
                fontSize: '0.9rem'
              }}
            >
              +998 (71) 200-00-00
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
