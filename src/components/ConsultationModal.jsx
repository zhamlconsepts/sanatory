import React, { useState } from 'react'
import { IconClose } from './Icons'

export default function ConsultationModal({ isOpen, onClose, onRequestSuccess }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [specialty, setSpecialty] = useState("Bo'g'im va umurtqa")

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      alert("Iltimos, ism va telefoningizni kiriting.")
      return
    }

    onRequestSuccess({ name, phone, specialty })
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 2100 }}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '460px' }}>
        <div style={{ padding: '1.1rem 1.5rem', borderBottom: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Tibbiy & Salomatlik Maslahati
            </h3>
            <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
              Malakali mutaxassis 10-15 daqiqa ichida siz bilan bog'lanadi
            </span>
          </div>
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
                Ismingiz *
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
                placeholder="Ismingizni kiriting"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Telefon raqamingiz *
              </label>
              <input
                type="tel"
                style={{
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '0.55rem 0.85rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)'
                }}
                placeholder="+998 (90) 123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Bezovta qilayotgan tibbiy soha:
              </label>
              <select
                style={{
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '0.55rem 0.85rem',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)'
                }}
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option value="Bo'g'im va umurtqa">Bo'g'im, bel va umurtqa pog'onasi</option>
                <option value="Nafas a'zolari">Nafas yo'llari va bronxial astma</option>
                <option value="Oshqozon va jigar">Oshqozon-ichak va jigar</option>
                <option value="Asab va stress">Asab tizimi va uyqusizlik</option>
                <option value="Yurak va qon tomir">Yurak va qon bosimi</option>
                <option value="Qandli diabet">Qandli diabet va metabolizm</option>
              </select>
            </div>
          </div>

          <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.65rem', background: 'var(--bg-card)' }}>
            <button type="button" className="btn-outline-pill" onClick={onClose} style={{ padding: '0.45rem 1.15rem', fontSize: '0.82rem' }}>
              Bekor qilish
            </button>
            <button type="submit" className="btn-dark-pill" style={{ padding: '0.45rem 1.35rem', fontSize: '0.84rem' }}>
              Maslahat So'rash
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
