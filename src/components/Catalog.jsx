import React from 'react'
import SanatoriumCard from './SanatoriumCard.jsx'
import { FACILITY_CATEGORIES } from '../data/sanatoriumsData.js'

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
  const hasActiveFilters = activeCategory !== 'all' || activeRegion !== 'all' || activeSpecialty !== 'all' || !!searchQuery

  const getSectionTitle = () => {
    switch (activeCategory) {
      case 'football': return 'Futbol & Sport Maydonlari'
      case 'massage': return 'Terapevtik Massaj & SPA Markazlari'
      case 'fitness': return 'Basseyn & Fitnes Majmualari'
      case 'sanatorium': return 'Shifobaxsh Sanatoriylar & Kurortlar'
      case 'mountain': return "Tog' Iqlimi & Eko Maskanlar"
      case 'mineral': return 'Tabiiy Mineral Buloqlar'
      case 'family': return 'Oilaviy Dam Olish Maskani'
      default: return 'Barcha Salomatlik, Sport & Hordiq Maskanlari'
    }
  }

  const getSectionSubtitle = () => {
    switch (activeCategory) {
      case 'football': return "FIFA standartidagi sun'iy chim, tungi LED yoritgichlar, dush va qulay mini-futbol arenalari"
      case 'massage': return "Umurtqa churrasi (grija), bel-bo'g'im og'riqlari va asabiy charchoqni yo'qotuvchi sertifikatlangan tibbiy massaj"
      case 'fitness': return "50 metrli isitiladigan basseynlar, professional Technogym trenajyorlari va akva-aerobika"
      case 'sanatorium': return "Davlat sog'liqni saqlash akkreditatsiyasiga ega, tabiiy buloqlari va zamonaviy tibbiy bazasi bilan mashhur kurortlar"
      default: return "Inson salomatligi, jismoniy chiniqish, professional massaj va to'liq tibbiy tiklanish maskanlari ro'yxati"
    }
  }

  return (
    <section className="catalog-section" id="katalog" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            RASMIY RO'YXAT VA BRON TIZIMI
          </span>
          <h2 className="heading-editorial">{getSectionTitle()}</h2>
          <p className="section-subtitle">
            {getSectionSubtitle()}
          </p>
        </div>

        {/* Category Segmented Pills Bar */}
        <div className="segmented-pills-bar" style={{ flexWrap: 'wrap', gap: '0.45rem', justifyContent: 'center' }}>
          {FACILITY_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => onCategoryChange(cat.key)}
                className={`segmented-pill-btn ${isActive ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 1rem'
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
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
                  <option key={r.id || r.key} value={r.id || r.key}>{r.name}</option>
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
                <option value="all">Barcha xizmatlar</option>
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

          {/* Results count & Sort */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              {sanatoriums.length} ta maskan topildi
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
                <option value="priceAsc">Arzondan qimmatga</option>
                <option value="priceDesc">Qimmatdan arzonga</option>
                <option value="rating">Reytingi yuqori</option>
              </select>
            </div>
          </div>
        </div>

        {/* Catalog Grid */}
        {sanatoriums.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
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
              textAlign: 'center',
              padding: '4rem 1rem',
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-card)'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Hech qanday maskan topilmadi
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
              Qidiruv so'zini yoki filtrlarni o'zgartirib ko'ring yoki barcha parametrlarni tozalang.
            </p>
            <button onClick={onClearFilters} className="btn-dark-pill">
              Barcha filtrlarni tozalash
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
