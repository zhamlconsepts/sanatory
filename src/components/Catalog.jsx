import React from 'react'
import SanatoriumCard from './SanatoriumCard.jsx'

export default function Catalog({
  sanatoriums,
  activeCategory,
  onCategoryChange,
  activeRegion,
  onRegionChange,
  activeSpecialty,
  onSpecialtyChange,
  sortBy,
  onSortChange,
  searchQuery,
  onClearFilters,
  regions,
  specialties,
  favoritesIds,
  onToggleFavorite,
  comparedIds,
  onToggleCompare,
  onOpenDetails,
  onOpenBooking
}) {
  const categories = [
    { key: 'all', label: 'Barchasi' },
    { key: 'popular', label: 'Eng Ommabop' },
    { key: 'mountain', label: "Tog' Iqlimi" },
    { key: 'mineral', label: 'Mineral Buloqlar' },
    { key: 'family', label: 'Oilaviy Hordiq' },
    { key: 'vip', label: 'Premium Kurort' }
  ]

  const hasActiveFilters = activeCategory !== 'all' || activeRegion !== 'all' || activeSpecialty !== 'all' || !!searchQuery

  return (
    <section className="catalog-section" id="katalog" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            RASMIY RO'YXAT
          </span>
          <h2 className="heading-editorial">Eng Shifobaxsh Sanatoriyalar</h2>
          <p className="section-subtitle">
            Davlat sog'liqni saqlash akkreditatsiyasiga ega, tabiiy buloqlari va zamonaviy tibbiy bazasi bilan mashhur kurortlar
          </p>
        </div>

        {/* Category Segmented Pills Bar */}
        <div className="segmented-pills-bar">
          {categories.map(cat => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => onCategoryChange(cat.key)}
                className={`segmented-pill-btn ${isActive ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Filter Toolbar */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '16px',
            padding: '0.85rem 1.25rem',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Region select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>Viloyat:</span>
              <select
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                value={activeRegion}
                onChange={(e) => onRegionChange(e.target.value)}
              >
                <option value="all">Barchasi</option>
                {regions.map(r => (
                  <option key={r.key} value={r.key}>{r.name}</option>
                ))}
              </select>
            </div>

            {/* Specialty select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>Yo'nalish:</span>
              <select
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                value={activeSpecialty}
                onChange={(e) => onSpecialtyChange(e.target.value)}
              >
                <option value="all">Barcha yo'nalishlar</option>
                {specialties.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Clear filters button */}
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="btn-outline-pill"
                style={{ padding: '0.3rem 0.75rem', fontSize: '0.74rem' }}
              >
                Filtrlarni tozalash
              </button>
            )}
          </div>

          {/* Sort & Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Topildi: {sanatoriums.length} ta
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>Saralash:</span>
              <select
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="recommended">Tavsiya etilgan</option>
                <option value="price-asc">Avval arzonrog'i</option>
                <option value="price-desc">Avval qimmatrog'i</option>
                <option value="rating">Reytingi yuqori</option>
              </select>
            </div>
          </div>
        </div>

        {/* Clean Cards Grid */}
        {sanatoriums.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
            {sanatoriums.map(item => (
              <SanatoriumCard
                key={item.id}
                item={item}
                isFavorite={favoritesIds.includes(item.id)}
                onToggleFavorite={onToggleFavorite}
                isCompared={comparedIds.includes(item.id)}
                onToggleCompare={onToggleCompare}
                onOpenDetails={onOpenDetails}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '20px',
              padding: '3.5rem 1.5rem',
              textAlign: 'center'
            }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-subtle)', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              So'rovingizga mos sanatoriya topilmadi
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
              Qidiruv so'zini yoki tanlangan viloyat/yo'nalish parametrlarini o'zgartirib ko'ring.
            </p>
            <button className="btn-dark-pill" onClick={onClearFilters}>
              Filtrlarni bekor qilish
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
