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
  onQuickFilter,
  activeCategory,
  onCategoryChange
}) {
  const categoryShortcuts = [
    { key: 'all', label: 'Barchasi', icon: '🌟' },
    { key: 'football', label: 'Futbol & Sport', icon: '⚽' },
    { key: 'massage', label: 'Massaj & SPA', icon: '💆‍♂️' },
    { key: 'sanatorium', label: 'Sanatoriylar', icon: '🏥' },
    { key: 'fitness', label: 'Basseyn & Fitnes', icon: '🏊‍♂️' },
    { key: 'mountain', label: "Tog' Iqlimi", icon: '🏔️' }
  ]

  return (
    <section className="hero-wrapper">
      <div className="container">
        {/* Editorial Tagline */}
        <div className="hero-kicker-badge">
          <span className="badge-pulse-dot"></span>
          <span>Yagona Sog'lom Hayot, Sport & Sanatoriya Ekotizimi</span>
        </div>

        {/* Editorial Main Title */}
        <h1 className="hero-main-title">
          <span className="font-italic-serif">Salomatlik, sport</span> va to'laqonli dam olish maskanlari
        </h1>

        {/* Lead subtitle */}
        <p className="hero-lead-text">
          Shifobaxsh sanatoriylar, professional mini-futbol maydonchalari, terapevtik massaj studiyalari va zamonaviy sport majmualari — inson salomatligi uchun barchasi yagona rasmiy platformada.
        </p>

        {/* Quick Category Navigation Shortcuts */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', margin: '0 auto 1.75rem auto', maxWidth: '850px' }}>
          {categoryShortcuts.map(cat => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => {
                  if (onCategoryChange) onCategoryChange(cat.key)
                  const el = document.getElementById('katalog')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  background: isActive ? 'var(--dark-capsule)' : 'var(--bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--dark-capsule)' : '1px solid var(--border-subtle)',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

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
              placeholder="Bunyodkor futbol, Zomin, massaj, basseyn..."
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
                <option key={r.id || r.key} value={r.id || r.key}>{r.name}</option>
              ))}
            </select>
          </div>

          <div className="search-divider"></div>

          {/* 3. Specialty / Service Select */}
          <div className="search-segment">
            <label className="search-segment-label" htmlFor="heroSpecialtySelect">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              <span>Xizmat turi</span>
            </label>
            <select
              id="heroSpecialtySelect"
              className="search-segment-input"
              value={selectedSpecialty}
              onChange={(e) => onSpecialtyChange(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
              <option value="all">Barcha xizmatlar</option>
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
              <span>Narx toifasi</span>
            </label>
            <select
              id="heroPriceSelect"
              className="search-segment-input"
              value={selectedPrice}
              onChange={(e) => onPriceChange(e.target.value)}
              style={{ cursor: 'pointer' }}
            >
              <option value="all">Barcha narxlar</option>
              <option value="under200">200 000 so'mgacha (Maydon / Massaj)</option>
              <option value="400to600">400 000 — 600 000 so'm (Sanatoriyalar)</option>
              <option value="above600">600 000 dan yuqori (Premium Kurortlar)</option>
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
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Ommabop qidiruvlar:</span>
          {['Mini-Futbol', 'Manual Massaj', 'Zomin Sanatoriysi', 'Olimpiya Basseyn', 'Chortoq', 'Tuz g\'ori'].map(tag => (
            <button
              key={tag}
              className="quick-tag-chip"
              onClick={() => onQuickFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 4-Pillar Visual Interactive Feature Showcase Cards */}
        <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {/* Card 1: Futbol */}
          <div
            onClick={() => {
              if (onCategoryChange) onCategoryChange('football')
              const el = document.getElementById('katalog')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '240px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src="assets/images/hero_football_card.jpg"
              alt="Futbol va Sport Maydonlari"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem', color: '#fff' }}>
              <span style={{ background: '#0284C7', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px', width: 'fit-content', marginBottom: '0.4rem' }}>
                ⚽ SPORT & FUTBOL
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#fff' }}>Futbol Maydonlari</h3>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', margin: '0.2rem 0 0 0' }}>FIFA chimli maydonlar, tungi projektorlar va dush</p>
            </div>
          </div>

          {/* Card 2: Massaj & SPA */}
          <div
            onClick={() => {
              if (onCategoryChange) onCategoryChange('massage')
              const el = document.getElementById('katalog')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '240px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src="assets/images/hero_massage_card.jpg"
              alt="Terapevtik Massaj & SPA"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem', color: '#fff' }}>
              <span style={{ background: '#7C3AED', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px', width: 'fit-content', marginBottom: '0.4rem' }}>
                💆‍♂️ RELAKS & TIKLANISH
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#fff' }}>Terapevtik Massaj</h3>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', margin: '0.2rem 0 0 0' }}>Grija, bo'g'im, manual terapiya va sauna</p>
            </div>
          </div>

          {/* Card 3: Basseyn & Fitnes */}
          <div
            onClick={() => {
              if (onCategoryChange) onCategoryChange('fitness')
              const el = document.getElementById('katalog')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '240px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src="assets/images/hero_fitness_card.jpg"
              alt="Basseyn va Fitnes Zallari"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem', color: '#fff' }}>
              <span style={{ background: '#0D9488', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px', width: 'fit-content', marginBottom: '0.4rem' }}>
                🏊‍♂️ AQUA & FITNES
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#fff' }}>Basseyn & Fitnes</h3>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', margin: '0.2rem 0 0 0' }}>50m isitiladigan basseyn, akva va zallar</p>
            </div>
          </div>

          {/* Card 4: Sanatoriya */}
          <div
            onClick={() => {
              if (onCategoryChange) onCategoryChange('sanatorium')
              const el = document.getElementById('katalog')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '240px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src="assets/images/hero_sanatorium_card.jpg"
              alt="Shifobaxsh Sanatoriylar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.25rem', color: '#fff' }}>
              <span style={{ background: '#059669', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px', width: 'fit-content', marginBottom: '0.4rem' }}>
                🏥 TIBBIY SOG'LOMLASHTIRISH
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#fff' }}>Sanatoriylar & Kurortlar</h3>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', margin: '0.2rem 0 0 0' }}>Zomin, Chortoq, Chinobod, mineral suvlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
