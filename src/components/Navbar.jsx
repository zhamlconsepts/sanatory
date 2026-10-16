import React, { useState } from 'react'

export default function Navbar({
  favoritesCount,
  onOpenFavorites,
  comparedCount,
  onOpenComparison,
  bookingsCount,
  onOpenBookings,
  onOpenBookingModal,
  onOpenConsultation,
  onSelectCategory
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Katalog', href: '#katalog', category: 'all' },
    { label: 'Futbol Maydonlari', href: '#katalog', category: 'football' },
    { label: 'Massaj va Terapiya', href: '#katalog', category: 'massage' },
    { label: 'Basseyn va Fitnes', href: '#katalog', category: 'fitness' },
    { label: 'Interaktiv Xarita', href: '#xarita' },
    { label: 'Muolajalar', href: '#muolajalar' },
    { label: 'Saralash Testi', href: '#quiz' },
    { label: 'Vaucher Tekshirish', href: '#vaucher-tekshirish' }
  ]

  const handleNavClick = (e, item) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (item.category && onSelectCategory) {
      onSelectCategory(item.category)
    }
    const target = document.querySelector(item.href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>O'zbekistonning Yagona Salomatlik, Sport va Dam Olish Portali • Rasmiy Korxonalar Reyestri</span>
        <a href="tel:+998712000000">+998 (71) 200-00-00</a>
      </div>

      {/* Floating Dark Capsule Navbar */}
      <div className="floating-nav-wrapper">
        <header className="floating-nav">
          {/* Logo */}
          <a
            href="#"
            className="logo-text"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span>SIHAT & SPORT</span>
            <span className="logo-pill">Ekotizim</span>
          </a>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="floating-nav-links">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="floating-nav-link"
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="floating-nav-actions">
            {/* Favorites Icon */}
            <button
              className="nav-icon-btn"
              onClick={onOpenFavorites}
              title="Sevimlilar"
              aria-label="Sevimlilar"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              {favoritesCount > 0 && <span className="nav-badge-dot">{favoritesCount}</span>}
            </button>

            {/* Comparison Icon */}
            <button
              className="nav-icon-btn"
              onClick={onOpenComparison}
              title="Taqqoslash"
              aria-label="Taqqoslash"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/>
                <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4"/>
                <circle cx="8" cy="12" r="2"/>
                <circle cx="20" cy="12" r="1"/>
              </svg>
              {comparedCount > 0 && <span className="nav-badge-dot">{comparedCount}</span>}
            </button>

            {/* Bookings */}
            <button
              className="nav-icon-btn"
              onClick={onOpenBookings}
              title="Mening Buyurtmalarim"
              aria-label="Buyurtmalar"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              {bookingsCount > 0 && <span className="nav-badge-dot">{bookingsCount}</span>}
            </button>

            {/* Action CTA Button */}
            <button
              className="nav-lavender-btn"
              onClick={() => onOpenBookingModal()}
            >
              Onlayn Band Qilish
            </button>

            {/* Mobile Hamburger */}
            <button
              className="nav-icon-btn mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyu"
              style={{ display: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '0.5rem',
              background: 'var(--dark-capsule)',
              borderRadius: '20px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
              color: '#FFFFFF'
            }}
          >
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{ color: '#EAD5E6', fontSize: '0.9rem', fontWeight: 600, padding: '0.35rem 0' }}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenBookingModal()
              }}
              className="nav-lavender-btn"
              style={{ width: '100%', marginTop: '0.5rem', textAlign: 'center' }}
            >
              Joy Band Qilish
            </button>
          </div>
        )}
      </div>
    </>
  )
}
