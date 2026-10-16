import React, { useState } from 'react'

export default function VoucherVerification({ sampleVouchers, userBookings }) {
  const [voucherCode, setVoucherCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [verificationResult, setVerificationResult] = useState(null)

  const handleVerify = (codeToTest) => {
    const code = (codeToTest || voucherCode).trim().toUpperCase()
    if (!code) return

    setVoucherCode(code)
    setLoading(true)
    setVerificationResult(null)

    setTimeout(() => {
      setLoading(false)

      const sessionBooking = (userBookings || []).find(b => b.voucherId && b.voucherId.toUpperCase() === code)

      if (sessionBooking) {
        setVerificationResult({
          voucherId: sessionBooking.voucherId,
          sanatoriumName: sessionBooking.sanatoriumName,
          guestName: sessionBooking.guestName,
          checkIn: sessionBooking.checkIn,
          checkOut: sessionBooking.checkOut,
          nights: sessionBooking.nights,
          roomName: sessionBooking.roomName,
          totalPriceFormatted: sessionBooking.totalPriceFormatted,
          status: 'Tasdiqlangan va Faol',
          isValid: true,
          securityHash: 'UZ-MINZDRAV-SIG-' + Math.random().toString(36).substring(2, 8).toUpperCase()
        })
        return
      }

      const sample = (sampleVouchers || []).find(v => v.code.toUpperCase() === code)

      if (sample) {
        setVerificationResult({
          voucherId: sample.code,
          sanatoriumName: sample.sanatoriumName,
          guestName: sample.guestName,
          checkIn: sample.checkIn,
          checkOut: sample.checkOut,
          nights: sample.nights,
          roomName: sample.roomType,
          totalPriceFormatted: sample.totalPriceFormatted,
          status: sample.status || 'Tasdiqlangan va Faol',
          isValid: true,
          securityHash: 'UZ-MINZDRAV-SIG-98442FA'
        })
      } else {
        setVerificationResult({
          isValid: false,
          errorMsg: `"${code}" raqamli elektron vaucher davlat reyestri bazasidan topilmadi.`
        })
      }
    }, 450)
  }

  return (
    <section className="verify-section" id="vaucher-tekshirish" style={{ padding: '3rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            YAGONA DAVLAT REYESTRI
          </span>
          <h2 className="heading-editorial">Elektron Vaucherni Tekshirish</h2>
          <p className="section-subtitle">
            Sihat & Sport portali orqali rasmiylashtirilgan elektron vaucher haqiqiyligi va bandlik holatini bir zumda tekshiring
          </p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Input Card */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '20px',
              padding: '1.35rem',
              boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
              marginBottom: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <input
                type="text"
                style={{
                  flex: 1,
                  minWidth: '220px',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  padding: '0.7rem 1.15rem',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
                placeholder="Vaucher kodi: SM-2026-7841"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleVerify()
                }}
              />
              <button
                className="btn-dark-pill"
                onClick={() => handleVerify()}
                disabled={loading}
                style={{ padding: '0.7rem 1.45rem' }}
              >
                {loading ? 'Tekshirilmoqda...' : 'Tekshirish'}
              </button>
            </div>

            {/* Test chips */}
            <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Namunaviy kodlar:</span>
              {['SM-2026-7841', 'SM-2026-9932', 'SM-2026-4512'].map(code => (
                <button
                  key={code}
                  onClick={() => handleVerify(code)}
                  style={{
                    background: 'var(--accent-lavender-subtle)',
                    border: '1px solid var(--accent-lavender)',
                    color: 'var(--accent-lavender-dark)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          {/* Result Ticket Card */}
          {verificationResult && (
            <div
              style={{
                background: 'var(--bg-card)',
                border: verificationResult.isValid ? '1.5px solid var(--accent-lavender-dark)' : '1.5px solid #E11D48',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
              }}
            >
              {verificationResult.isValid ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-sage)' }}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                      <span style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--text-primary)', letterSpacing: '0.02em' }}>
                        RASMIY ELEKTRON VAUCHER TASDIQLANDI
                      </span>
                    </div>
                    <span style={{ fontSize: '0.74rem', fontWeight: 700, background: 'var(--dark-capsule)', color: '#FFFFFF', padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>
                      {verificationResult.status}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Vaucher kodi:</div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                        {verificationResult.voucherId}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Maskan / Muassasa:</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {verificationResult.sanatoriumName}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Mehmon F.I.O:</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {verificationResult.guestName}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Muddat:</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        {verificationResult.checkIn} — {verificationResult.checkOut} ({verificationResult.nights} kun)
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-card)', paddingTop: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>To'langan umumiy summa: </span>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {verificationResult.totalPriceFormatted}
                      </span>
                    </div>
                    <button
                      className="btn-outline-pill"
                      onClick={() => window.print()}
                      style={{ padding: '0.4rem 0.95rem', fontSize: '0.78rem' }}
                    >
                      Chop etish (PDF)
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FEE2E2', color: '#DC2626', margin: '0 auto 0.75rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#DC2626', marginBottom: '0.35rem' }}>
                    Vaucher Topilmadi
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', margin: 0 }}>
                    {verificationResult.errorMsg}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
