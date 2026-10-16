import React from 'react'

export default function FavoritesDrawer({
  isOpen,
  onClose,
  favoritesIds,
  sanatoriums,
  onRemoveFavorite,
  onOpenBooking
}) {
  if (!isOpen) return null

  const favItems = sanatoriums.filter(s => favoritesIds.includes(s.id))

  return (
    <div className="drawer-backdrop" onClick={onClose} style={{ zIndex: 2200 }}>
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Sevimlilar ({favItems.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="btn-outline-pill"
            style={{ width: '34px', height: '34px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {favItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-subtle)', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Sevimlilar ro'yxati bo'sh
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem' }}>
                Katalogdagi sanatoriya kartasining yurak belgisini tanlang.
              </p>
            </div>
          ) : (
            favItems.map(item => (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '56px', height: '56px', borderRadius: '10px', objectFit: 'cover' }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                    {item.region} • {item.rating} / 5.0
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0.15rem 0 0.35rem 0' }}>
                    {item.priceFormatted} <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.priceUnit || (item.facilityType === 'football' ? '/ soat' : item.facilityType === 'massage' ? '/ seans' : '/ kun')}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.45rem' }}>
                    <button
                      className="btn-dark-pill"
                      onClick={() => {
                        onClose()
                        onOpenBooking(item)
                      }}
                      style={{ padding: '0.3rem 0.75rem', fontSize: '0.74rem' }}
                    >
                      Band Qilish
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="btn-outline-pill"
                      style={{ padding: '0.3rem 0.55rem', fontSize: '0.74rem' }}
                      title="O'chirish"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
