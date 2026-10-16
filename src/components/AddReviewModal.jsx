import React, { useState } from 'react'
import { IconClose } from './Icons'

export default function AddReviewModal({
  isOpen,
  onClose,
  sanatoriums,
  onSubmitReview
}) {
  const [name, setName] = useState('')
  const [city, setCity] = useState('Toshkent')
  const [sanatoriumId, setSanatoriumId] = useState(sanatoriums[0]?.id || 'zomin')
  const [rating, setRating] = useState(5)
  const [effect, setEffect] = useState('')
  const [comment, setComment] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) {
      alert("Iltimos, ismingiz va sharhingizni kiriting.")
      return
    }

    const targetSan = sanatoriums.find(s => s.id === sanatoriumId) || sanatoriums[0]

    const newRev = {
      id: 'rev-' + Date.now(),
      name: name.trim(),
      city: city.trim(),
      sanatoriumId: targetSan.id,
      sanatoriumName: targetSan.name,
      rating,
      date: '2026-10-15',
      comment: comment.trim(),
      treatmentEffect: effect.trim() || 'Salomatlik yaxshilandi'
    }

    onSubmitReview(newRev)
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 2100 }}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
            Xolis Fikr va Sharh Qoldirish
          </h3>
          <button
            onClick={onClose}
            className="btn-outline-pill"
            style={{ width: '34px', height: '34px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
            aria-label="Yopish"
          >
            <IconClose size={15} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Ism-familiyangiz *
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '0.55rem 0.85rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)'
                }}
                placeholder="Dilshod Rahimov"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Shahar / Viloyat
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '0.55rem 0.85rem',
                    fontSize: '0.86rem',
                    color: 'var(--text-primary)'
                  }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Sanatoriya
                </label>
                <select
                  style={{
                    width: '100%',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '0.55rem 0.75rem',
                    fontSize: '0.86rem',
                    color: 'var(--text-primary)'
                  }}
                  value={sanatoriumId}
                  onChange={(e) => setSanatoriumId(e.target.value)}
                >
                  {sanatoriums.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Baho berish:
              </label>
              <div style={{ display: 'flex', gap: '0.4rem', cursor: 'pointer' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <svg
                    key={star}
                    onClick={() => setRating(star)}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? "#F59E0B" : "none"}
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Davolash natijasi (muolaja samarasi):
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '0.55rem 0.85rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)'
                }}
                placeholder="Bo'g'imdagi og'riq yo'qoldi, qon bosimi barqarorlashdi"
                value={effect}
                onChange={(e) => setEffect(e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Sharhingiz *
              </label>
              <textarea
                rows={3}
                style={{
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '0.55rem 0.85rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                  resize: 'none'
                }}
                placeholder="Sharoitlar, muolajalar va xodimlar muomalasi haqida..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.65rem', background: 'var(--bg-card)' }}>
            <button type="button" className="btn-outline-pill" onClick={onClose} style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
              Bekor qilish
            </button>
            <button type="submit" className="btn-dark-pill" style={{ padding: '0.45rem 1.25rem', fontSize: '0.84rem' }}>
              Chop etish
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
