import React, { useState, useEffect } from 'react'
import { getCompanyDetails, submitBookingToCompanyApi } from '../services/companyApi'

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

  // Facility detection
  const activeSanatorium = sanatoriums.find(s => s.id === selectedSanatoriumId) || sanatoriums[0]
  const facilityType = activeSanatorium?.facilityType || 'sanatorium'

  // Dates & Times
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [matchDate, setMatchDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('19:00 - 20:00')
  const [durationHours, setDurationHours] = useState(1)
  const [massageTime, setMassageTime] = useState('14:00')
  const [masterPref, setMasterPref] = useState('any')

  // Sanatorium specifics
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
    personalDoctor: false,
    referee: false,
    saunaCombo: false,
    kedrBocha: false
  })
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [promoError, setPromoError] = useState('')

  // Generated voucher
  const [generatedVoucher, setGeneratedVoucher] = useState(null)

  useEffect(() => {
    if (initialSanatorium) {
      setSelectedSanatoriumId(initialSanatorium.id)
      setSelectedRoomIndex(0)
    }
  }, [initialSanatorium])

  useEffect(() => {
    const today = new Date()
    const start = new Date(today)
    start.setDate(today.getDate() + 1)

    const end = new Date(start)
    end.setDate(start.getDate() + 10)

    const toStr = (d) => d.toISOString().split('T')[0]
    setCheckIn(toStr(start))
    setCheckOut(toStr(end))
    setMatchDate(toStr(start))
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

  const currentRoom = activeSanatorium?.rooms?.[selectedRoomIndex] || activeSanatorium?.rooms?.[0] || { name: 'Standart', price: activeSanatorium?.price || 150000 }
  const roomBasePrice = currentRoom.price || activeSanatorium?.price || 150000

  // Calculate Base Total dynamically based on category
  let baseTotal = 0
  if (facilityType === 'football') {
    baseTotal = roomBasePrice * durationHours
  } else if (facilityType === 'massage') {
    baseTotal = roomBasePrice
  } else if (facilityType === 'fitness') {
    baseTotal = roomBasePrice
  } else {
    // Sanatorium
    baseTotal = roomBasePrice * nights * adults
  }

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
  if (addons.referee) addonsTotal += 80000
  if (addons.saunaCombo) addonsTotal += 60000
  if (addons.kedrBocha) addonsTotal += 50000

  const finalTotal = Math.max(0, baseTotal - pensionerDiscountAmount - promoDiscountAmount + addonsTotal)

  const applyPromo = () => {
    setPromoError('')
    const clean = promoCode.trim().toUpperCase()
    if (clean === 'SIHAT2026') {
      setAppliedPromo({ code: 'SIHAT2026', pct: 0.15, label: '15% chegirma' })
    } else if (clean === 'BAHOR10') {
      setAppliedPromo({ code: 'BAHOR10', pct: 0.10, label: '10% chegirma' })
    } else {
      setPromoError("Yaroqsiz promokod. 'SIHAT2026' yoki 'BAHOR10' kodini sinab ko'ring.")
    }
  }

  const handleNextStep = () => {
    if (currentStep === 2) {
      if (!guestName.trim()) {
        alert("Iltimos, ismingizni kiriting.")
        return
      }
      if (!guestPhone.trim()) {
        alert("Iltimos, telefon raqamingizni kiriting.")
        return
      }
    }

    if (currentStep === 3) {
      let prefix = 'SM-2026-'
      if (facilityType === 'football') prefix = 'FB-2026-'
      if (facilityType === 'massage') prefix = 'MS-2026-'
      if (facilityType === 'fitness') prefix = 'FIT-2026-'

      const company = getCompanyDetails(activeSanatorium.id)
      const voucherNum = prefix + Math.floor(1000 + Math.random() * 9000)
      const apiTxnId = `UZ-API-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`

      const voucherObj = {
        voucherId: voucherNum,
        apiTransactionId: apiTxnId,
        facilityType,
        sanatoriumId: activeSanatorium.id,
        sanatoriumName: activeSanatorium.name,
        region: activeSanatorium.region,
        companyInn: company.inn,
        officialLegalName: company.officialLegalName,
        companyLicense: company.license,
        companyPhone: company.contactPhone,
        guestName: guestName.trim(),
        guestPhone: guestPhone.trim(),
        guestPassport: guestPassport.trim() || 'AA 1234567',
        guestNotes: guestNotes.trim(),
        checkIn: facilityType === 'sanatorium' ? checkIn : matchDate,
        checkOut: facilityType === 'sanatorium' ? checkOut : (timeSlot || massageTime),
        nights: facilityType === 'sanatorium' ? nights : durationHours,
        adults,
        children,
        roomName: currentRoom.name,
        totalPrice: finalTotal,
        totalPriceFormatted: finalTotal.toLocaleString() + " so'm",
        addons,
        bookedAt: new Date().toISOString().split('T')[0],
        status: 'Kompaniya API Tizimida Tasdiqlandi'
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

  const getStepTitle = () => {
    if (currentStep === 1) {
      if (facilityType === 'football') return "1. Maydon, Sana va Soat Oralig'i"
      if (facilityType === 'massage') return "1. Massaj Turi va Seans Vaqti"
      if (facilityType === 'fitness') return "1. Abonement va Boshlanish Sanasi"
      return "1. Sanatoriya, Xona va Muddat"
    }
    if (currentStep === 2) {
      if (facilityType === 'football') return "2. Jamoa Sardori Ma'lumotlari"
      return "2. Shaxsiy Ma'lumotlar"
    }
    if (currentStep === 3) return "3. Qo'shimcha Xizmatlar va Promokod"
    if (currentStep === 4) return "4. Rasmiy Elektron Vaucher"
  }

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 2100 }}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '740px' }}>
        {/* Modal Header */}
        <div style={{ padding: '0.9rem 1.4rem', borderBottom: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Bosqich {currentStep} / 4
            </span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              {getStepTitle()}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="btn-outline-pill"
            style={{ width: '32px', height: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.35rem', overflowY: 'auto', maxHeight: '68vh' }}>
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {/* Select Facility */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Maskanni tanlang:
                </label>
                <select
                  style={{
                    width: '100%',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '0.55rem 0.85rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-primary)',
                    fontWeight: 600
                  }}
                  value={selectedSanatoriumId}
                  onChange={(e) => {
                    setSelectedSanatoriumId(e.target.value)
                    setSelectedRoomIndex(0)
                  }}
                >
                  {sanatoriums.map(s => {
                    let typeTag = '🏥'
                    if (s.facilityType === 'football') typeTag = '⚽'
                    if (s.facilityType === 'massage') typeTag = '💆'
                    if (s.facilityType === 'fitness') typeTag = '🏊'

                    return (
                      <option key={s.id} value={s.id}>
                        {typeTag} {s.name} ({s.region}) — {s.priceFormatted}
                      </option>
                    )
                  })}
                </select>
              </div>

              {/* Service/Room/Package Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {facilityType === 'football' ? "Tarif / Vaqt oralig'ini tanlang:" : facilityType === 'massage' ? "Massaj va muolaja turini tanlang:" : facilityType === 'fitness' ? "Abonement toifasini tanlang:" : "Xona toifasini tanlang:"}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem' }}>
                  {(activeSanatorium?.rooms || [
                    { name: "Standart paket", price: activeSanatorium?.price || 150000, desc: "Asosiy xizmatlar to'plami" }
                  ]).map((room, idx) => {
                    const isSel = selectedRoomIndex === idx
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedRoomIndex(idx)}
                        style={{
                          border: isSel ? '2px solid var(--dark-capsule)' : '1px solid var(--border-subtle)',
                          background: isSel ? 'var(--accent-lavender-subtle)' : 'var(--bg-subtle)',
                          borderRadius: '12px',
                          padding: '0.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                          {room.name}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '0.2rem 0' }}>
                          {room.desc}
                        </div>
                        <div style={{ fontWeight: 800, fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                          {room.price?.toLocaleString()} so'm
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Specific Date & Time fields based on facility type */}
              {facilityType === 'football' ? (
                /* Football Date & Time */
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      O'yin sanasi:
                    </label>
                    <input
                      type="date"
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={matchDate}
                      onChange={(e) => setMatchDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Boshlanish vaqti:
                    </label>
                    <select
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      <option value="16:00 - 17:00">16:00 - 17:00</option>
                      <option value="17:00 - 18:00">17:00 - 18:00</option>
                      <option value="18:00 - 19:00">18:00 - 19:00</option>
                      <option value="19:00 - 20:00">19:00 - 20:00 (Prime)</option>
                      <option value="20:00 - 21:00">20:00 - 21:00 (Prime)</option>
                      <option value="21:00 - 22:00">21:00 - 22:00 (Prime)</option>
                      <option value="22:00 - 23:00">22:00 - 23:00</option>
                      <option value="23:00 - 00:00">23:00 - 00:00</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Davomiyligi:
                    </label>
                    <select
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={durationHours}
                      onChange={(e) => setDurationHours(Number(e.target.value))}
                    >
                      <option value={1}>1 soat</option>
                      <option value={2}>2 soat (Tavsiya)</option>
                      <option value={3}>3 soat (Turnir)</option>
                    </select>
                  </div>
                </div>
              ) : facilityType === 'massage' ? (
                /* Massage Date & Time */
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Seans sanasi:
                    </label>
                    <input
                      type="date"
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={matchDate}
                      onChange={(e) => setMatchDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Qulay vaqt:
                    </label>
                    <select
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={massageTime}
                      onChange={(e) => setMassageTime(e.target.value)}
                    >
                      <option value="10:00">10:00 ertalab</option>
                      <option value="12:00">12:00 tushlik</option>
                      <option value="14:00">14:00 kunduzgi</option>
                      <option value="16:00">16:00 tushdan keyin</option>
                      <option value="18:00">18:00 oqshomgi</option>
                      <option value="20:00">20:00 kechki</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Usta tanlovi:
                    </label>
                    <select
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={masterPref}
                      onChange={(e) => setMasterPref(e.target.value)}
                    >
                      <option value="any">Ixtiyoriy oliy toifali mutaxassis</option>
                      <option value="male">Erkak massaj ustasi</option>
                      <option value="female">Ayol massaj ustasi</option>
                    </select>
                  </div>
                </div>
              ) : (
                /* Sanatorium / Multi-day Stay */
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Kelish sanasi:
                    </label>
                    <input
                      type="date"
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={checkIn}
                      onChange={(e) => handleCheckInChange(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Ketish sanasi:
                    </label>
                    <input
                      type="date"
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}
                      value={checkOut}
                      onChange={(e) => handleCheckOutChange(e.target.value)}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      Kunlar soni:
                    </label>
                    <div style={{ padding: '0.5rem', background: 'var(--bg-subtle)', borderRadius: '8px', fontWeight: 700, fontSize: '0.88rem', textAlign: 'center' }}>
                      {nights} kun
                    </div>
                  </div>
                </div>
              )}

              {/* Price calculation summary box */}
              <div style={{ background: 'var(--bg-subtle)', borderRadius: '12px', padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>Boshlang'ich narx:</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {baseTotal.toLocaleString()} so'm
                  </div>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 700 }}>
                  ✓ Rasmiy narx kafolati
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Guest Details */}
          {currentStep === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {facilityType === 'football' ? "Sardor / Buyurtmachi F.I.SH *:" : "Mijoz / Bemor to'liq F.I.SH *:"}
                </label>
                <input
                  type="text"
                  placeholder="Masalan: Jamshid Aliyev"
                  style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Telefon raqam (SMS va vaucher uchun) *:
                </label>
                <input
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                />
              </div>

              {facilityType === 'sanatorium' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    Pasport yoki ID-karta seriyasi:
                  </label>
                  <input
                    type="text"
                    placeholder="Masalan: AA 1234567"
                    style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}
                    value={guestPassport}
                    onChange={(e) => setGuestPassport(e.target.value)}
                  />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {facilityType === 'football' ? "Qo'shimcha istaklar (Jamoa nomi, to'plar):" : facilityType === 'massage' ? "Salomatlik shikoyatlari (Bel, grija, bo'g'im):" : "Maxsus eslatmalar:"}
                </label>
                <textarea
                  rows="2"
                  placeholder="Ixtiyoriy..."
                  style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.88rem' }}
                  value={guestNotes}
                  onChange={(e) => setGuestNotes(e.target.value)}
                ></textarea>
              </div>

              {facilityType === 'sanatorium' && (
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginTop: '0.25rem' }}>
                  <input
                    type="checkbox"
                    checked={isPensioner}
                    onChange={(e) => setIsPensioner(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: 'var(--dark-capsule)' }}
                  />
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Pensioner chegirmasi (10% arzonlashtirish qo'llansin)
                  </span>
                </label>
              )}
            </div>
          )}

          {/* STEP 3: Add-ons & Promo */}
          {currentStep === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Qo'shimcha imtiyozlar va xizmatlar:
              </div>

              {facilityType === 'football' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: 'var(--bg-subtle)', borderRadius: '10px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={addons.referee}
                        onChange={(e) => setAddons(p => ({ ...p, referee: e.target.checked }))}
                        style={{ accentColor: 'var(--dark-capsule)' }}
                      />
                      <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>Professional Hakam xizmati (1 o'yin)</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>+80 000 so'm</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: 'var(--bg-subtle)', borderRadius: '10px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={addons.saunaCombo}
                        onChange={(e) => setAddons(p => ({ ...p, saunaCombo: e.target.checked }))}
                        style={{ accentColor: 'var(--dark-capsule)' }}
                      />
                      <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>O'yindan so'ng Fin Saunasi (jamoa uchun)</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>+60 000 so'm</span>
                  </label>
                </div>
              ) : facilityType === 'massage' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: 'var(--bg-subtle)', borderRadius: '10px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={addons.kedrBocha}
                        onChange={(e) => setAddons(p => ({ ...p, kedrBocha: e.target.checked }))}
                        style={{ accentColor: 'var(--dark-capsule)' }}
                      />
                      <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>Kedr Bochkasi bug'ida qizdirish</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>+50 000 so'm</span>
                  </label>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: 'var(--bg-subtle)', borderRadius: '10px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={addons.vipCheckup}
                        onChange={(e) => setAddons(p => ({ ...p, vipCheckup: e.target.checked }))}
                        style={{ accentColor: 'var(--dark-capsule)' }}
                      />
                      <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>VIP Laboratoriya & MRT tahlili</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>+250 000 so'm</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', background: 'var(--bg-subtle)', borderRadius: '10px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={addons.transfer}
                        onChange={(e) => setAddons(p => ({ ...p, transfer: e.target.checked }))}
                        style={{ accentColor: 'var(--dark-capsule)' }}
                      />
                      <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>Toshkentdan qulay transfer (aeroport/vokzal)</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>+180 000 so'm</span>
                  </label>
                </div>
              )}

              {/* Promo code */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Promokod mavjudmi? (Masalan: SIHAT2026 yoki BAHOR10)
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Promokodni kiriting"
                    style={{ flex: 1, padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem', textTransform: 'uppercase' }}
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button onClick={applyPromo} className="btn-dark-pill" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                    Qo'llash
                  </button>
                </div>
                {appliedPromo && (
                  <div style={{ fontSize: '0.74rem', color: '#10B981', fontWeight: 600, marginTop: '0.3rem' }}>
                    ✓ Promokod faollashtirildi: {appliedPromo.label}
                  </div>
                )}
                {promoError && (
                  <div style={{ fontSize: '0.74rem', color: '#EF4444', fontWeight: 600, marginTop: '0.3rem' }}>
                    {promoError}
                  </div>
                )}
              </div>

              {/* Final calculation breakdown */}
              <div style={{ background: 'var(--bg-subtle)', borderRadius: '12px', padding: '0.85rem 1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                  <span>Xizmat qiymati:</span>
                  <span>{baseTotal.toLocaleString()} so'm</span>
                </div>
                {pensionerDiscountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#10B981', marginBottom: '0.2rem' }}>
                    <span>Pensioner chegirmasi:</span>
                    <span>-{pensionerDiscountAmount.toLocaleString()} so'm</span>
                  </div>
                )}
                {promoDiscountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#10B981', marginBottom: '0.2rem' }}>
                    <span>Promokod chegirmasi:</span>
                    <span>-{promoDiscountAmount.toLocaleString()} so'm</span>
                  </div>
                )}
                {addonsTotal > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                    <span>Qo'shimcha xizmatlar:</span>
                    <span>+{addonsTotal.toLocaleString()} so'm</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.4rem', marginTop: '0.4rem', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  <span>Jami to'lov:</span>
                  <span>{finalTotal.toLocaleString()} so'm</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Official Generated Voucher */}
          {currentStep === 4 && generatedVoucher && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <div
                style={{
                  width: '100%',
                  background: '#FFFFFF',
                  border: '2px dashed var(--dark-capsule)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  position: 'relative'
                }}
              >
                {/* Voucher Top */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8E4DC', paddingBottom: '0.85rem', marginBottom: '0.85rem' }}>
                  <div>
                    <span style={{ background: '#10B981', color: '#FFFFFF', fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px', textTransform: 'uppercase' }}>
                      {generatedVoucher.status}
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1A1A1C', margin: '0.35rem 0 0 0' }}>
                      {generatedVoucher.sanatoriumName}
                    </h4>
                    <div style={{ fontSize: '0.76rem', color: '#6B6762' }}>{generatedVoucher.region}</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.68rem', color: '#8E8A83', fontWeight: 700 }}>VAUCHER RAQAMI</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1A1A1C', fontFamily: 'monospace' }}>
                      {generatedVoucher.voucherId}
                    </div>
                  </div>
                </div>

                {/* Official Company Registry & API Transaction Banner */}
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '0.65rem 0.85rem', marginBottom: '0.85rem', fontSize: '0.74rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{ color: '#166534', fontWeight: 700 }}>
                      ✓ Korxona: {generatedVoucher.officialLegalName} (STIR: {generatedVoucher.companyInn})
                    </span>
                    <span style={{ color: '#15803D', fontFamily: 'monospace', fontWeight: 600 }}>
                      API TXN: {generatedVoucher.apiTransactionId}
                    </span>
                  </div>
                  <div style={{ color: '#16A34A', fontSize: '0.7rem', marginTop: '0.2rem' }}>
                    Litsenziya: {generatedVoucher.companyLicense} • SMS xabarnoma yuborildi: {generatedVoucher.guestPhone}
                  </div>
                </div>

                {/* Details Table */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', fontSize: '0.82rem', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ color: '#8E8A83', display: 'block', fontSize: '0.72rem' }}>Buyurtmachi:</span>
                    <strong style={{ color: '#1A1A1C' }}>{generatedVoucher.guestName}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#8E8A83', display: 'block', fontSize: '0.72rem' }}>Telefon:</span>
                    <strong style={{ color: '#1A1A1C' }}>{generatedVoucher.guestPhone}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#8E8A83', display: 'block', fontSize: '0.72rem' }}>Xizmat toifasi:</span>
                    <strong style={{ color: '#1A1A1C' }}>{generatedVoucher.roomName}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#8E8A83', display: 'block', fontSize: '0.72rem' }}>Sana / Vaqt:</span>
                    <strong style={{ color: '#1A1A1C' }}>{generatedVoucher.checkIn} ({generatedVoucher.checkOut})</strong>
                  </div>
                </div>

                {/* Bottom Total & QR Code placeholder */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E8E4DC', paddingTop: '0.85rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#8E8A83', display: 'block' }}>Kafolatlangan jami summa:</span>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1A1A1C' }}>
                      {generatedVoucher.totalPriceFormatted}
                    </span>
                  </div>

                  {/* SVG QR Code Simulation */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#F8F7F4', padding: '0.4rem 0.6rem', borderRadius: '10px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A1A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="5" height="5" x="3" y="3" rx="1"/>
                      <rect width="5" height="5" x="16" y="3" rx="1"/>
                      <rect width="5" height="5" x="3" y="16" rx="1"/>
                      <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                      <path d="M21 21v.01"/>
                      <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                      <path d="M3 12h.01"/>
                      <path d="M12 3h.01"/>
                      <path d="M12 16v.01"/>
                      <path d="M16 12h1"/>
                      <path d="M21 12v.01"/>
                      <path d="M12 21v-1"/>
                    </svg>
                    <span style={{ fontSize: '0.68rem', color: '#6B6762', fontWeight: 600 }}>Rasmiy QR Tasdiq</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textAlign: 'center', margin: 0 }}>
                Ushbu vaucher tizimda saqlandi va sms orqali yuborildi. "Vaucherlarim" bo'limidan istalgan payt ko'rishingiz mumkin.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div style={{ padding: '0.9rem 1.4rem', borderTop: '1px solid var(--border-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)' }}>
          {currentStep > 1 && currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="btn-outline-pill"
              style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}
            >
              Ortga
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < 3 ? (
            <button
              onClick={handleNextStep}
              className="btn-dark-pill"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.86rem' }}
            >
              Keyingisi →
            </button>
          ) : currentStep === 3 ? (
            <button
              onClick={handleNextStep}
              className="btn-dark-pill"
              style={{ padding: '0.5rem 1.35rem', fontSize: '0.86rem', background: '#059669', borderColor: '#059669' }}
            >
              Vaucherni Shakllantirish ✓
            </button>
          ) : (
            <button
              onClick={handleConfirmBooking}
              className="btn-dark-pill"
              style={{ padding: '0.5rem 1.4rem', fontSize: '0.86rem' }}
            >
              Buyurtmani Tasdiqlash va Saqlash
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
