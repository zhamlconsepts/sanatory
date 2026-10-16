import React, { useState } from 'react'

export default function DetailsModal({ isOpen, onClose, sanatorium, onOpenBooking }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen || !sanatorium) return null

  const gallery = sanatorium.gallery && sanatorium.gallery.length > 0 ? sanatorium.gallery : [sanatorium.image]
  const currentImg = gallery[activeImageIndex] || sanatorium.image

  // Rating breakdown scores (clean, no emojis)
  const ratingDetails = [
    { label: "Tozalik va qulaylik", score: "4.9", max: "5.0", pct: 98 },
    { label: "3 mahal shifobaxsh taomnoma", score: "4.8", max: "5.0", pct: 96 },
    { label: "Shifokor va muolajalar", score: "5.0", max: "5.0", pct: 100 },
    { label: "Tabiat va toza tog' havosi", score: "5.0", max: "5.0", pct: 100 },
    { label: "Xodimlar xushmuomalaligi", score: "4.9", max: "5.0", pct: 98 }
  ]

  const phoneClean = (sanatorium.phone || "+998712000000").replace(/[^0-9+]/g, '')

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 2100 }}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '880px' }}>
        {/* Header */}
        <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                {sanatorium.name}
              </h3>
              {sanatorium.badge && (
                <span className="card-badge-pill" style={{ position: 'static' }}>
                  {sanatorium.badge}
                </span>
              )}
              <span style={{ fontSize: '0.74rem', background: 'var(--bg-subtle)', color: 'var(--text-secondary)', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: 600, border: '1px solid var(--border-subtle)' }}>
                {sanatorium.rating} / 5.0 ({sanatorium.reviewsCount} ta baho)
              </span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
              {sanatorium.location} • {sanatorium.altitude || 'Kurort zonasi'}
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn-outline-pill"
            style={{ width: '36px', height: '36px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', maxHeight: '72vh' }}>
          {/* Gallery View */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ width: '100%', height: '260px', borderRadius: '18px', overflow: 'hidden', marginBottom: '0.65rem' }}>
              <img
                src={currentImg}
                alt={sanatorium.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: '70px',
                      height: '48px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: activeImageIndex === idx ? '2px solid var(--dark-capsule)' : '1px solid var(--border-card)',
                      padding: 0,
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PROMINENT DIRECT CONTACT CARD */}
          <div
            style={{
              background: 'var(--accent-lavender-subtle)',
              border: '1px solid var(--accent-lavender)',
              borderRadius: '16px',
              padding: '1.15rem 1.35rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                To'g'ridan-to'g'ri Aloqa va Qabulxona:
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Telefon: <strong style={{ color: 'var(--text-primary)' }}>{sanatorium.phone}</strong>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                Ish tartibi: Har kuni 24/7 • Qabul: 08:00 - 20:00
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${phoneClean}`}
                className="btn-dark-pill"
                style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Qo'ng'iroq Qilish</span>
              </a>

              <a
                href="https://t.me/sihatmaskan_support"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-pill"
                style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}
              >
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* RATINGS BREAKDOWN */}
          <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-card)', borderRadius: '16px', padding: '1.15rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                Bemorlar Baholari va Mezonlari:
              </div>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                {sanatorium.reviewsCount} ta tekshirilgan baho
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.75rem' }}>
              {ratingDetails.map((r, i) => (
                <div key={i} style={{ background: 'var(--bg-card)', padding: '0.65rem 0.85rem', borderRadius: '10px', border: '1px solid var(--border-card)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    <span>{r.label}</span>
                    <span style={{ fontWeight: 800 }}>{r.score}</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'var(--bg-subtle)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${r.pct}%`, background: 'var(--dark-capsule)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION TABS */}
          <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-card)', paddingBottom: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { id: 'overview', label: "Umumiy & Afzalliklar" },
              { id: 'treatments', label: "Kiritilgan Muolajalar" },
              { id: 'rooms', label: "Xonalar & Narxlar" },
              { id: 'transport', label: "Borish Yo'li" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`segmented-pill-btn ${activeTab === tab.id ? 'active' : ''}`}
                style={{ padding: '0.38rem 0.95rem', fontSize: '0.78rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {sanatorium.description}
              </p>

              {/* Advantages */}
              {sanatorium.advantages && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Asosiy Afzalliklari:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {sanatorium.advantages.map((adv, i) => (
                      <li key={i} style={{ fontSize: '0.84rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-sage)', flexShrink: 0, marginTop: '2px' }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specialties */}
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Davolash Yo'nalishlari:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {sanatorium.specialties.map((s, i) => (
                    <span key={i} className="card-spec-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TREATMENTS */}
          {activeTab === 'treatments' && (
            <div>
              <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-card)', borderRadius: '14px', padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Yo'llanma (Vaucher) Narxiga Kiritilgan Bepul Xizmatlar:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {(sanatorium.includedInPrice || [
                    "Barcha turdagi shifokor ko'riklari va monitoring",
                    "Kuniga 3 mahal tabiiy shifobaxsh parhez taomnoma",
                    "Mineral vannalar, balchiq yoki ingalyatsiya muolajalari",
                    "Basseyn, fizioterapiya va fitobar shifobaxsh choylari"
                  ]).map((inc, i) => (
                    <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-sage)' }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {sanatorium.contraindications && (
                <div style={{ background: '#FFF1F2', border: '1px solid #FFE4E6', borderRadius: '14px', padding: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#BE123C', marginBottom: '0.3rem' }}>
                    Qarshi Ko'rsatmalar:
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#9F1239', margin: 0, lineHeight: 1.5 }}>
                    {sanatorium.contraindications}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ROOMS */}
          {activeTab === 'rooms' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(sanatorium.rooms || []).map((r, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid var(--border-card)',
                    borderRadius: '14px',
                    padding: '1rem 1.15rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.85rem',
                    background: 'var(--bg-card)'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--text-primary)' }}>{r.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{r.desc}</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--accent-sage)', fontWeight: 600, marginTop: '0.25rem' }}>
                      3 mahal ovqat va davolash kursi kiritilgan
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {r.price.toLocaleString()} so'm / kun
                    </div>
                    <button
                      className="btn-dark-pill"
                      onClick={() => {
                        onClose()
                        onOpenBooking(sanatorium)
                      }}
                      style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                    >
                      Tanlash
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: TRANSPORT */}
          {activeTab === 'transport' && (
            <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                <strong>Lokatsiya:</strong> {sanatorium.location}
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                <strong>Transport va marshrut:</strong> Toshkent yoki viloyat markazidan taksi, avtobus yoki qulay transfer orqali to'g'ridan-to'g'ri sanatoriya darvozasigacha borish mumkin.
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                <strong>Transfer xizmati:</strong> Vokzal yoki aeroportdan kutib olishni bron qilish bosqichida qo'shishingiz mumkin.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: '1.1rem 1.5rem', borderTop: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Telefon orqali bron qilish: </span>
            <strong style={{ color: 'var(--text-primary)', fontSize: '0.88rem' }}>{sanatorium.phone}</strong>
          </div>
          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <button className="btn-outline-pill" onClick={onClose} style={{ padding: '0.45rem 1.15rem', fontSize: '0.82rem' }}>
              Yopish
            </button>
            <button
              className="btn-dark-pill"
              onClick={() => {
                onClose()
                onOpenBooking(sanatorium)
              }}
              style={{ padding: '0.45rem 1.45rem', fontSize: '0.86rem', fontWeight: 700 }}
            >
              Joy Band Qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
