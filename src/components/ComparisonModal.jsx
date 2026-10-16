import React from 'react'

export default function ComparisonModal({
  isOpen,
  onClose,
  comparedIds,
  sanatoriums,
  onRemoveFromCompare,
  onOpenBooking
}) {
  if (!isOpen) return null

  const items = sanatoriums.filter(s => comparedIds.includes(s.id))

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 2100 }}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '920px' }}>
        {/* Header */}
        <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Taqqoslash Jadvali ({items.length} ta)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="btn-outline-pill"
            style={{ width: '36px', height: '36px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem', overflowX: 'auto', maxHeight: '70vh' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-subtle)', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/>
                  <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4"/>
                  <circle cx="8" cy="12" r="2"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Taqqoslash ro'yxati bo'sh
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '1.25rem' }}>
                Katalogdagi sanatoriya kartalaridan "Taqqoslash" belgisini tanlang.
              </p>
              <button className="btn-dark-pill" onClick={onClose}>
                Sanatoriylarni Ko'rish
              </button>
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '550px', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ borderBottom: '1.5px solid var(--border-subtle)' }}>
                  <th style={{ padding: '0.85rem 0.65rem', width: '22%', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.72rem' }}>Xususiyat</th>
                  {items.map(item => (
                    <th key={item.id} style={{ padding: '0.85rem 0.65rem', width: `${78 / items.length}%`, verticalAlign: 'top' }}>
                      <div style={{ position: 'relative' }}>
                        <button
                          onClick={() => onRemoveFromCompare(item.id)}
                          style={{
                            position: 'absolute',
                            top: '-6px',
                            right: '-6px',
                            background: 'var(--dark-capsule)',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '50%',
                            width: '22px',
                            height: '22px',
                            cursor: 'pointer',
                            fontSize: '0.7rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          title="O'chirish"
                        >
                          ✕
                        </button>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '12px', marginBottom: '0.45rem' }}
                        />
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                          {item.region}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                  <td style={{ padding: '0.75rem 0.65rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Narxi:</td>
                  {items.map(item => (
                    <td key={item.id} style={{ padding: '0.75rem 0.65rem', fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.96rem' }}>
                      {item.priceFormatted} <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>{item.priceUnit || (item.facilityType === 'football' ? '/ soat' : item.facilityType === 'massage' ? '/ seans' : '/ kun')}</span>
                    </td>
                  ))}
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-card)', background: 'var(--bg-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.65rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Reyting:</td>
                  {items.map(item => (
                    <td key={item.id} style={{ padding: '0.75rem 0.65rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.rating} / 5.0 ({item.reviewsCount} baho)
                    </td>
                  ))}
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                  <td style={{ padding: '0.75rem 0.65rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Iqlim & Joylashuv:</td>
                  {items.map(item => (
                    <td key={item.id} style={{ padding: '0.75rem 0.65rem', color: 'var(--text-primary)' }}>
                      <div>{item.altitude || "Kurort tekisligi"}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>{item.climate}</div>
                    </td>
                  ))}
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-card)', background: 'var(--bg-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.65rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Yo'nalishlar:</td>
                  {items.map(item => (
                    <td key={item.id} style={{ padding: '0.75rem 0.65rem', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        {item.specialties.map((s, idx) => (
                          <span key={idx} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>• {s}</span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td style={{ padding: '0.75rem 0.65rem' }}></td>
                  {items.map(item => (
                    <td key={item.id} style={{ padding: '0.75rem 0.65rem' }}>
                      <button
                        className="btn-dark-pill"
                        onClick={() => {
                          onClose()
                          onOpenBooking(item)
                        }}
                        style={{ width: '100%', padding: '0.45rem', fontSize: '0.78rem' }}
                      >
                        Band Qilish
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
