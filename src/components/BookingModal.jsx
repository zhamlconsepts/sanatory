import React, { useState, useEffect } from 'react'

export default function BookingModal({
  isOpen,
  onClose,
  sanatoriums,
  initialSanatorium,
  onBookingSuccess
}) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSanatoriumId, setSelectedSanatoriumId] = useState('zomin')
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0)

  // Dates
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [nights, setNights] = useState(10)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [isPensioner, setIsPensioner] = useState(false)

  // Guest details
  const [guestName, setGuestName] = useState('')
  const [guestPhone, setGuestPhone] = useState('')
  const [guestPassport, setGuestPassport] = useState('')
  const [guestNotes, setGuestNotes] = useState('')

  // Add-ons & Promo
  const [addons, setAddons] = useState({
    vipCheckup: false,
    transfer: false,
    personalDoctor: false
  })
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [promoError, setPromoError] = useState('')

  // Generated voucher
  const [generatedVoucher, setGeneratedVoucher] = useState(null)

  useEffect(() => {
    if (initialSanatorium) {
      setSelectedSanatoriumId(initialSanatorium.id)
    }
  }, [initialSanatorium])

  useEffect(() => {
    const today = new Date()
    const start = new Date(today)
    start.setDate(today.getDate() + 3)

    const end = new Date(start)
    end.setDate(start.getDate() + 10)

    const toStr = (d) => d.toISOString().split('T')[0]
    setCheckIn(toStr(start))
    setCheckOut(toStr(end))
    setNights(10)
  }, [])

  const handleCheckInChange = (val) => {
    setCheckIn(val)
    if (val && checkOut) {
      const d1 = new Date(val)
      const d2 = new Date(checkOut)
      const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24))
      if (diff > 0) setNights(diff)
    }
  }

  const handleCheckOutChange = (val) => {
    setCheckOut(val)
    if (checkIn && val) {
      const d1 = new Date(checkIn)
      const d2 = new Date(val)
      const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24))
      if (diff > 0) setNights(diff)
    }
  }

  const activeSanatorium = sanatoriums.find(s => s.id === selectedSanatoriumId) || sanatoriums[0]
  const currentRoom = activeSanatorium?.rooms?.[selectedRoomIndex] || activeSanatorium?.rooms?.[0] || { name: 'Standart', price: activeSanatorium?.price || 480000 }

  const roomBasePrice = currentRoom.price || activeSanatorium?.price || 480000
  const baseTotal = roomBasePrice * nights * adults

  let pensionerDiscountAmount = 0
  if (isPensioner) {
    pensionerDiscountAmount = Math.round(baseTotal * 0.10)
  }

  let promoDiscountAmount = 0
  if (appliedPromo) {
    promoDiscountAmount = Math.round(baseTotal * appliedPromo.pct)
  }

  let addonsTotal = 0
  if (addons.vipCheckup) addonsTotal += 250000
  if (addons.transfer) addonsTotal += 180000
  if (addons.personalDoctor) addonsTotal += 200000

  const finalTotal = Math.max(0, baseTotal - pensionerDiscountAmount - promoDiscountAmount + addonsTotal)

  const applyPromo = () => {
    setPromoError('')
    const clean = promoCode.trim().toUpperCase()
    if (clean === 'SIHAT2026') {
      setAppliedPromo({ code: 'SIHAT2026', pct: 0.15, label: '15% chegirma' })
    } else if (clean === 'BAHOR10') {
      setAppliedPromo({ code: 'BAHOR10', pct: 0.10, label: '10% chegirma' })
    } else {
      setPromoError("Yaroqsiz promokod. 'SIHAT2026' yoki 'BAHOR10' kodini kiriting.")
    }
  }

  const handleNextStep = () => {
    if (currentStep === 2) {
      if (!guestName.trim()) {
        alert("Iltimos, to'liq ismingizni kiriting.")
        return
      }
      if (!guestPhone.trim()) {
        alert("Iltimos, telefon raqamingizni kiriting.")
        return
      }
    }

    if (currentStep === 3) {
      const voucherNum = 'SM-2026-' + Math.floor(1000 + Math.random() * 9000)
      const voucherObj = {
        voucherId: voucherNum,
        sanatoriumId: activeSanatorium.id,
        sanatoriumName: activeSanatorium.name,
        region: activeSanatorium.region,
        guestName: guestName.trim(),
        guestPhone: guestPhone.trim(),
        guestPassport: guestPassport.trim() || 'AA 1234567',
        guestNotes: guestNotes.trim(),
        checkIn,
        checkOut,
        nights,
        adults,
        children,
        roomName: currentRoom.name,
        totalPrice: finalTotal,
        totalPriceFormatted: finalTotal.toLocaleString() + " so'm",
        addons,
        bookedAt: new Date().toISOString().split('T')[0],
        status: 'Tasdiqlangan'
      }
      setGeneratedVoucher(voucherObj)
    }

    setCurrentStep(prev => prev + 1)
  }

  const handleConfirmBooking = () => {
    if (!generatedVoucher) return
    onBookingSuccess(generatedVoucher)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 2100 }}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        {/* Modal Header */}
        <div style={{ padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-surface)' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--primary-600)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Bosqich {currentStep} / 4
            </span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              {currentStep === 1 && "1. Sanatoriya, Xona va Muddat"}
              {currentStep === 2 && "2. Mehmon Ma'lumotlari"}
              {currentStep === 3 && "3. Qo'shimcha Xizmatlar"}
              {currentStep === 4 && "4. Rasmiy Elektron Vaucher"}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.2rem' }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.25rem', overflowY: 'auto', maxHeight: '66vh' }}>
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Sanatorium */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  Sanatoriyni tanlang:
                </label>
                <select
                  style={{
                    width: '100%',
                    background: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.86rem',
                    color: 'var(--text-main)',
                    fontWeight: 600
                  }}
                  value={selectedSanatoriumId}
                  onChange={(e) => {
                    setSelectedSanatoriumId(e.target.value)
                    setSelectedRoomIndex(0)
                  }}
                >
                  {sanatoriums.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.region}) — {s.priceFormatted}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Cards */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Xona toifasi:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
                  {(activeSanatorium?.rooms || []).map((room, idx) => {
                    const isSelected = selectedRoomIndex === idx
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedRoomIndex(idx)}
                        style={{
                          background: isSelected ? 'var(--primary-50)' : 'var(--bg-surface-subtle)',
                          border: isSelected ? '1.5px solid var(--primary-600)' : '1px solid var(--border-color)',
                          borderRadius: '8px',
                          padding: '0.65rem 0.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: '0.82rem', color: 'var(--text-main)' }}>
                          {room.name}
                        </div>
                        <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--primary-700)', margin: '0.15rem 0' }}>
                          {room.price.toLocaleString()} so'm
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Dates & Duration */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.65rem', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Kelish:
                  </label>
                  <input
                    type="date"
                    style={{
                      width: '100%',
                      background: 'var(--bg-surface-subtle)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '0.4rem 0.6rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-main)'
                    }}
                    value={checkIn}
                    onChange={(e) => handleCheckInChange(e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Ketish:
                  </label>
                  <input
                    type="date"
                    style={{
                      width: '100%',
                      background: 'var(--bg-surface-subtle)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '0.4rem 0.6rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-main)'
                    }}
                    value={checkOut}
                    onChange={(e) => handleCheckOutChange(e.target.value)}
                  />
                </div>

                <div>
                  <div style={{ background: 'var(--primary-100)', color: 'var(--primary-900)', borderRadius: '8px', padding: '0.45rem', textAlign: 'center', fontWeight: 800, fontSize: '0.82rem' }}>
                    {nights} sutka
                  </div>
                </div>
              </div>

              {/* Guests Count & Pensioner */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.65rem', alignItems: 'center' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Kattalar:
                  </label>
                  <select
                    style={{
                      width: '100%',
                      background: 'var(--bg-surface-subtle)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '0.4rem 0.6rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-main)'
                    }}
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} kishi</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    <input
                      type="checkbox"
                      checked={isPensioner}
                      onChange={(e) => setIsPensioner(e.target.checked)}
                      style={{ width: '15px', height: '15px', accentColor: 'var(--dark-capsule)' }}
                    />
                    <span>Pensioner chegirmasi (-10%)</span>
                  </label>
                </div>
              </div>

              {/* Estimate */}
              <div style={{ background: 'var(--bg-surface-subtle)', borderRadius: '10px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Jami ({nights} sutka, {adults} kishi):</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-700)' }}>
                  {finalTotal.toLocaleString()} so'm
                </span>
              </div>
            </div>
          )}

          {/* STEP 2: GUEST DETAILS */}
          {currentStep === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  F.I.Sh (To'liq ismingiz) *
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    background: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.86rem',
                    color: 'var(--text-main)'
                  }}
                  placeholder="Masalan: Karimov Alisher"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    Telefon raqam *
                  </label>
                  <input
                    type="tel"
                    style={{
                      width: '100%',
                      background: 'var(--bg-surface-subtle)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.86rem',
                      color: 'var(--text-main)'
                    }}
                    placeholder="+998 (90) 123-45-67"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    Pasport seriya va raqami
                  </label>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      background: 'var(--bg-surface-subtle)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.86rem',
                      color: 'var(--text-main)'
                    }}
                    placeholder="AA 1234567"
                    value={guestPassport}
                    onChange={(e) => setGuestPassport(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  Tibbiy tashxis yoki izoh (ixtiyoriy):
                </label>
                <textarea
                  rows={2}
                  style={{
                    width: '100%',
                    background: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.84rem',
                    color: 'var(--text-main)',
                    resize: 'none'
                  }}
                  placeholder="Masalan: Bo'g'im og'rig'i, parhez stol №5..."
                  value={guestNotes}
                  onChange={(e) => setGuestNotes(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* STEP 3: ADDONS & PROMO */}
          {currentStep === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: addons.vipCheckup ? '1.5px solid var(--primary-600)' : '1px solid var(--border-color)',
                    background: addons.vipCheckup ? 'var(--primary-50)' : 'var(--bg-surface-subtle)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <input
                      type="checkbox"
                      checked={addons.vipCheckup}
                      onChange={(e) => setAddons({ ...addons, vipCheckup: e.target.checked })}
                      style={{ accentColor: 'var(--dark-capsule)' }}
                    />
                    <span style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--text-main)' }}>
                      VIP Laboratoriya Diagnostikasi
                    </span>
                  </div>
                  <span style={{ fontWeight: 800, color: 'var(--primary-700)', fontSize: '0.82rem' }}>
                    +250 000
                  </span>
                </label>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: addons.transfer ? '1.5px solid var(--primary-600)' : '1px solid var(--border-color)',
                    background: addons.transfer ? 'var(--primary-50)' : 'var(--bg-surface-subtle)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <input
                      type="checkbox"
                      checked={addons.transfer}
                      onChange={(e) => setAddons({ ...addons, transfer: e.target.checked })}
                      style={{ accentColor: 'var(--dark-capsule)' }}
                    />
                    <span style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--text-main)' }}>
                      Vokzal va Aeroportdan Transfer
                    </span>
                  </div>
                  <span style={{ fontWeight: 800, color: 'var(--primary-700)', fontSize: '0.82rem' }}>
                    +180 000
                  </span>
                </label>
              </div>

              {/* Promo */}
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem' }}>
                <input
                  type="text"
                  placeholder="Promokod: SIHAT2026"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-main)'
                  }}
                />
                <button
                  className="btn-outline"
                  onClick={applyPromo}
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                >
                  Qo'llash
                </button>
              </div>

              {appliedPromo && (
                <div style={{ color: 'var(--primary-700)', fontSize: '0.78rem', fontWeight: 700 }}>
                  ✓ Promokod faol: {appliedPromo.label}
                </div>
              )}

              {/* Total */}
              <div style={{ background: 'var(--primary-50)', borderRadius: '8px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--primary-200)', marginTop: '0.4rem' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--primary-900)', fontWeight: 600 }}>Yakuniy to'lov:</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-800)' }}>
                  {finalTotal.toLocaleString()} so'm
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: VOUCHER */}
          {currentStep === 4 && generatedVoucher && (
            <div style={{ background: 'var(--bg-surface)', border: '1.5px solid var(--primary-500)', borderRadius: '12px', padding: '1.15rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.65rem', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--primary-700)', fontWeight: 800 }}>RASMIY VAUCHER</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>{generatedVoucher.sanatoriumName}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--primary-700)' }}>{generatedVoucher.voucherId}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{generatedVoucher.bookedAt}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem', marginBottom: '0.85rem' }}>
                <div><strong>Mehmon:</strong> {generatedVoucher.guestName}</div>
                <div><strong>Xona:</strong> {generatedVoucher.roomName}</div>
                <div><strong>Sana:</strong> {generatedVoucher.checkIn} — {generatedVoucher.checkOut}</div>
                <div><strong>Muddat:</strong> {generatedVoucher.nights} sutka</div>
              </div>

              <div style={{ background: 'var(--bg-surface-subtle)', borderRadius: '8px', padding: '0.65rem 0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Jami summa:</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-700)' }}>{generatedVoucher.totalPriceFormatted}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{ padding: '0.85rem 1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-surface)' }}>
          {currentStep > 1 && currentStep < 4 ? (
            <button
              className="btn-outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
            >
              ← Orqaga
            </button>
          ) : <div></div>}

          {currentStep < 4 ? (
            <button
              className="btn-primary"
              onClick={handleNextStep}
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.86rem' }}
            >
              Keyingi Bosqich ➔
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={handleConfirmBooking}
              style={{ padding: '0.55rem 1.35rem', fontSize: '0.88rem', fontWeight: 800 }}
            >
              ✓ Buyurtmani Tasdiqlash
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
