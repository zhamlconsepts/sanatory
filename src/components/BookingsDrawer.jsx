import React from 'react'

export default function BookingsDrawer({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
  onOpenBookingModal
}) {
  if (!isOpen) return null

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
              Buyurtmalarim ({bookings.length})
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
        <div style={{ padding: '1.25rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bookings.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-subtle)', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Hozircha buyurtmalar yo'q
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginBottom: '1.25rem' }}>
                O'zingizga ma'qul sanatoriyni tanlang va rasmiy elektron vaucher oling.
              </p>
              <button
                className="btn-dark-pill"
                onClick={() => {
                  onClose()
                  onOpenBookingModal()
                }}
              >
                Joy Band Qilish
              </button>
            </div>
          ) : (
            bookings.map((b, idx) => (
              <div
                key={b.voucherId || idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: '1.1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ background: 'var(--dark-capsule)', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: '9999px', fontFamily: 'var(--font-mono)' }}>
                    {b.voucherId}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--accent-sage)', fontWeight: 700 }}>
                    {b.status || 'Tasdiqlangan'}
                  </span>
                </div>

                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    {b.sanatoriumName}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                    {b.guestName} • {b.roomName}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {b.checkIn} — {b.checkOut} ({b.nights} {b.facilityType === 'football' ? 'soat' : b.facilityType === 'massage' ? 'seans' : 'kun'})
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-card)', paddingTop: '0.65rem' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {b.totalPriceFormatted}
                  </div>

                  <div style={{ display: 'flex', gap: '0.45rem' }}>
                    <button
                      className="btn-outline-pill"
                      onClick={() => window.print()}
                      style={{ padding: '0.3rem 0.65rem', fontSize: '0.74rem' }}
                    >
                      PDF
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("Ushbu bronni bekor qilmoqchimisiz?")) {
                          onCancelBooking(b.voucherId)
                        }
                      }}
                      style={{
                        background: 'none',
                        border: '1px solid rgba(225, 29, 72, 0.4)',
                        color: '#E11D48',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '9999px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Bekor qilish
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
