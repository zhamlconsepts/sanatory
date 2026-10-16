import React from 'react'

export default function Hero({
  searchQuery,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  selectedSpecialty,
  onSpecialtyChange,
  selectedPrice,
  onPriceChange,
  regions,
  specialties,
  onSearchSubmit,
  onQuickFilter
}) {
  return (
    <section className="hero-wrapper">
      <div className="container">
        {/* Editorial Tagline */}
        <div className="hero-kicker-badge">
          <span className="badge-pulse-dot"></span>
          <span>Rasmiy Sanatoriyalar & Kurortlar Portali</span>
        </div>

        {/* Editorial Main Title */}
        <h1 className="hero-main-title">
          <span className="font-italic-serif">Tabiat bag'rida</span> sog'lomlashtirish va osoyishtalik
        </h1>

        {/* Lead subtitle */}
        <p className="hero-lead-text">
          Zomin archazorlaridan Chortoq va Omonxonaning shifobaxsh mineral buloqlarigacha — to'liq akkreditatsiyalangan davolash kurslari, xolis baholar va kafolatlangan elektron vaucher.
        </p>

        {/* Master Airbnb/Capsule Style Search Bar */}
        <div className="search-capsule-bar">
          {/* 1. Search Query */}
          <div className="search-segment">
            <label className="search-segment-label" htmlFor="heroSearchInput">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <span>Qidiruv</span>
            </label>
            <input
              type="text"
              id="heroSearchInput"
              className="search-segment-input"
              placeholder="Zomin, Chortoq, astma..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearchSubmit()
              }}
            />
          </div>

          <div className="search-divider"></div>

          {/* 2. Region Select */}
          <div className="search-segment">
            <label className="search-segment-label" htmlFor="heroRegionSelect">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Viloyat</span>
            </label>
            <select
              id="heroRegionSelect"
              className="search-segment-input"
              value={selectedRegion}
              onChange={(e) => onRegionChange(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
              <option value="all">Barcha hududlar</option>
              {regions.map(r => (
                <option key={r.key} value={r.key}>{r.name}</option>
              ))}
            </select>
          </div>

          <div className="search-divider"></div>

          {/* 3. Specialty Select */}
          <div className="search-segment">
            <label className="search-segment-label" htmlFor="heroSpecialtySelect">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              <span>Yo'nalish</span>
            </label>
            <select
              id="heroSpecialtySelect"
              className="search-segment-input"
              value={selectedSpecialty}
              onChange={(e) => onSpecialtyChange(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
              <option value="all">Barcha tibbiy sohalar</option>
              {specialties.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="search-divider"></div>

          {/* 4. Price Select */}
          <div className="search-segment">
            <label className="search-segment-label" htmlFor="heroPriceSelect">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              <span>Narx (kun)</span>
            </label>
            <select
              id="heroPriceSelect"
              className="search-segment-input"
              value={selectedPrice}
              onChange={(e) => onPriceChange(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
              <option value="all">Barcha toifalar</option>
              <option value="under400">400 000 so'mgacha</option>
              <option value="400to600">400 000 — 600 000</option>
              <option value="above600">600 000 dan yuqori</option>
            </select>
          </div>

          {/* Submit Action Pill Button */}
          <button className="search-submit-pill" onClick={onSearchSubmit} title="Katalogga o'tish">
            <span>Izlash</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="quick-chips-wrapper">
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tavsiya etiladi:</span>
          {['Zomin', 'Chortoq', 'Chinobod', 'Omonxona', 'Oqtosh', "Tog' iqlimi", 'Mineral buloq'].map(tag => (
            <button
              key={tag}
              className="quick-tag-chip"
              onClick={() => onQuickFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Modern Visual Banner Container (Matching MyPiFi product hero photography layout) */}
        <div style={{ marginTop: '2.5rem', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 45px -10px rgba(0,0,0,0.12)' }}>
          <img
            src="assets/images/sanatoriya_park_resort_1790760932042.jpg"
            alt="O'zbekiston Sanatoriylari Manzarasi"
            style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(28,28,30,0.1) 0%, rgba(28,28,30,0.65) 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2rem'
            }}
          >
            <div style={{ color: '#FFFFFF', textAlign: 'left', maxWidth: '600px' }}>
              <span style={{ background: 'var(--accent-lavender)', color: 'var(--accent-lavender-dark)', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'inline-block', marginBottom: '0.5rem' }}>
                Davlat Reabilitatsiya Tizimi
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', margin: 0, color: '#FFFFFF' }}>
                Tabiiy mineral buloqlar va zamonaviy tibbiy texnologiyalar
              </h2>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)', margin: '0.35rem 0 0 0' }}>
                24 dan ortiq sanatoriyalarning rasmiy reestri, xonalar mavjudligi va kafolatlangan elektron bron.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
