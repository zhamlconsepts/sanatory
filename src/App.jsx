import React, { useState, useEffect, useMemo } from 'react'

// Data
import {
  SANATORIUMS_DATA,
  REGIONS_DATA,
  SPECIALTIES_DATA,
  PREPARATION_GUIDE_DATA,
  DISEASES_DIRECTORY_DATA,
  SAMPLE_VERIFICATION_VOUCHERS,
  FAQS_DATA,
  REVIEWS_DATA
} from './data/sanatoriumsData.js'

// Components
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustStats from './components/TrustStats.jsx'
import DiagnosticQuiz from './components/DiagnosticQuiz.jsx'
import Catalog from './components/Catalog.jsx'
import DiseasesDirectory from './components/DiseasesDirectory.jsx'
import InteractiveMap from './components/InteractiveMap.jsx'
import TreatmentsSection from './components/TreatmentsSection.jsx'
import PreparationGuide from './components/PreparationGuide.jsx'
import VoucherVerification from './components/VoucherVerification.jsx'
import ReviewsSection from './components/ReviewsSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'

// Modals & Drawers
import BookingModal from './components/BookingModal.jsx'
import DetailsModal from './components/DetailsModal.jsx'
import ComparisonModal from './components/ComparisonModal.jsx'
import BookingsDrawer from './components/BookingsDrawer.jsx'
import FavoritesDrawer from './components/FavoritesDrawer.jsx'
import AddReviewModal from './components/AddReviewModal.jsx'
import ConsultationModal from './components/ConsultationModal.jsx'
import FloatingCallWidget from './components/FloatingCallWidget.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sihatmaskan_theme') || 'light'
  })

  // Favorites state
  const [favoritesIds, setFavoritesIds] = useState(() => {
    try {
      const saved = localStorage.getItem('sihatmaskan_favorites')
      return saved ? JSON.parse(saved) : ['zomin', 'chortoq']
    } catch {
      return ['zomin', 'chortoq']
    }
  })

  // Comparison state
  const [comparedIds, setComparedIds] = useState([])

  // User bookings state
  const [userBookings, setUserBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('sihatmaskan_bookings')
      return saved ? JSON.parse(saved) : [
        {
          voucherId: 'SM-2026-7841',
          sanatoriumId: 'zomin',
          sanatoriumName: 'Zomin Sanatoriysi',
          region: 'Jizzax viloyati',
          guestName: 'Alisher Karimov',
          roomName: 'Standart (2 kishilik)',
          checkIn: '2026-10-18',
          checkOut: '2026-10-28',
          nights: 10,
          totalPriceFormatted: "4 800 000 so'm",
          status: 'Tasdiqlangan va To\'langan',
          bookedAt: '2026-10-15'
        }
      ]
    } catch {
      return []
    }
  })

  // Reviews state
  const [reviews, setReviews] = useState(() => {
    try {
      const custom = localStorage.getItem('sihatmaskan_reviews')
      return custom ? [...JSON.parse(custom), ...REVIEWS_DATA] : REVIEWS_DATA
    } catch {
      return REVIEWS_DATA
    }
  })

  // Filters state
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeRegion, setActiveRegion] = useState('all')
  const [activeSpecialty, setActiveSpecialty] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortBy, setSortBy] = useState('recommended')

  // Modals & Drawers state
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [bookingTarget, setBookingTarget] = useState(null)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [detailsTarget, setDetailsTarget] = useState(null)
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false)
  const [bookingsDrawerOpen, setBookingsDrawerOpen] = useState(false)
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false)
  const [addReviewModalOpen, setAddReviewModalOpen] = useState(false)
  const [consultationModalOpen, setConsultationModalOpen] = useState(false)

  // Toast notifications
  const [toasts, setToasts] = useState([])

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3800)
  }

  const dismissToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  // Effect: Sync Theme with DOM
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('sihatmaskan_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    addToast(next === 'dark' ? "Tungi rejim yoqildi" : "Kunduzgi rejim yoqildi", 'info')
  }

  // Effect: Sync Favorites with localStorage
  useEffect(() => {
    localStorage.setItem('sihatmaskan_favorites', JSON.stringify(favoritesIds))
  }, [favoritesIds])

  // Effect: Sync Bookings with localStorage
  useEffect(() => {
    localStorage.setItem('sihatmaskan_bookings', JSON.stringify(userBookings))
  }, [userBookings])

  // Favorite toggle
  const toggleFavorite = (id) => {
    const exists = favoritesIds.includes(id)
    const san = SANATORIUMS_DATA.find(s => s.id === id)
    const sanName = san ? san.name : 'Sanatoriya'

    if (exists) {
      setFavoritesIds(prev => prev.filter(item => item !== id))
      addToast(`${sanName} sevimlilardan o'chirildi`, 'info')
    } else {
      setFavoritesIds(prev => [...prev, id])
      addToast(`${sanName} sevimlilarga saqlandi`, 'favorite')
    }
  }

  // Compare toggle
  const toggleCompare = (id) => {
    const exists = comparedIds.includes(id)
    if (exists) {
      setComparedIds(prev => prev.filter(item => item !== id))
      addToast("Taqqoslash ro'yxatidan o'chirildi", 'info')
    } else {
      if (comparedIds.length >= 4) {
        addToast("Bir vaqtning o'zida ko'pi bilan 4 ta sanatoriyni taqqoslash mumkin", 'error')
        return
      }
      setComparedIds(prev => [...prev, id])
      addToast("Taqqoslash ro'yxatiga qo'shildi", 'success')
    }
  }

  // Booking handlers
  const openBookingModal = (sanatorium = null) => {
    setBookingTarget(sanatorium || SANATORIUMS_DATA[0])
    setBookingModalOpen(true)
  }

  const handleBookingSuccess = (newVoucher) => {
    setUserBookings(prev => [newVoucher, ...prev])
    addToast(`Vaucher ${newVoucher.voucherId} muvaffaqiyatli rasmiylashtirildi`, 'success')
  }

  const cancelBooking = (voucherId) => {
    setUserBookings(prev => prev.filter(b => b.voucherId !== voucherId))
    addToast(`Vaucher ${voucherId} bekor qilindi`, 'info')
  }

  // Details modal
  const openDetailsModal = (sanatorium) => {
    setDetailsTarget(sanatorium)
    setDetailsModalOpen(true)
  }

  // Add review
  const handleReviewSubmit = (newRev) => {
    setReviews(prev => [newRev, ...prev])
    try {
      const custom = JSON.parse(localStorage.getItem('sihatmaskan_reviews') || '[]')
      localStorage.setItem('sihatmaskan_reviews', JSON.stringify([newRev, ...custom]))
    } catch {}
    addToast("Sharhingiz muvaffaqiyatli chop etildi", 'success')
  }

  // Consultation request
  const handleConsultationSuccess = (req) => {
    addToast(`Rahmat, ${req.name}! Shifokorimiz tez orada siz bilan bog'lanadi.`, 'success')
  }

  // Fast filter helpers
  const handleQuickFilter = (keyword) => {
    setSearchQuery(keyword)
    const target = document.querySelector('#katalog')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const clearAllFilters = () => {
    setActiveCategory('all')
    setActiveRegion('all')
    setActiveSpecialty('all')
    setSelectedPrice('all')
    setSearchQuery('')
    setSortBy('recommended')
    addToast("Barcha filtrlar tozalandi", 'info')
  }

  const scrollToCatalog = () => {
    const el = document.querySelector('#katalog')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Memoized Filtered & Sorted Sanatoriums
  const filteredSanatoriums = useMemo(() => {
    let result = SANATORIUMS_DATA.filter(item => {
      // 1. Category
      if (activeCategory !== 'all' && !item.categories.includes(activeCategory)) {
        return false
      }

      // 2. Region
      if (activeRegion !== 'all' && item.regionKey !== activeRegion) {
        return false
      }

      // 3. Specialty
      if (activeSpecialty !== 'all') {
        const hasSpec = item.specialties.some(s => {
          const lower = s.toLowerCase()
          if (activeSpecialty === 'nafas' && (lower.includes('nafas') || lower.includes('astma') || lower.includes('bronxit'))) return true
          if (activeSpecialty === 'oshqozon' && (lower.includes('oshqozon') || lower.includes('jigar') || lower.includes('ichak'))) return true
          if (activeSpecialty === 'bogim' && (lower.includes('bo\'g\'im') || lower.includes('suyak') || lower.includes('artroz') || lower.includes('umurtqa'))) return true
          if (activeSpecialty === 'yurak' && (lower.includes('yurak') || lower.includes('qon') || lower.includes('kardio'))) return true
          if (activeSpecialty === 'asab' && (lower.includes('asab') || lower.includes('stress') || lower.includes('nevroz'))) return true
          if (activeSpecialty === 'diabet' && (lower.includes('diabet') || lower.includes('endokrin') || lower.includes('modda'))) return true
          if (activeSpecialty === 'urologiya' && (lower.includes('buyrak') || lower.includes('urolog') || lower.includes('ginekolog'))) return true
          return lower.includes(activeSpecialty.toLowerCase())
        })
        if (!hasSpec) return false
      }

      // 4. Price range
      if (selectedPrice === 'under400' && item.price > 400000) return false
      if (selectedPrice === '400to600' && (item.price < 400000 || item.price > 600000)) return false
      if (selectedPrice === 'above600' && item.price < 600000) return false

      // 5. Search text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchName = item.name.toLowerCase().includes(q)
        const matchRegion = item.region.toLowerCase().includes(q)
        const matchLocation = item.location.toLowerCase().includes(q)
        const matchSpec = item.specialties.some(s => s.toLowerCase().includes(q))
        const matchAmenity = item.amenities.some(a => a.toLowerCase().includes(q))
        if (!matchName && !matchRegion && !matchLocation && !matchSpec && !matchAmenity) {
          return false
        }
      }

      return true
    })

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [activeCategory, activeRegion, activeSpecialty, selectedPrice, searchQuery, sortBy])

  return (
    <div className="site-wrapper">
      {/* Toast Notification Layer */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        favoritesCount={favoritesIds.length}
        onOpenFavorites={() => setFavoritesDrawerOpen(true)}
        comparedCount={comparedIds.length}
        onOpenComparison={() => setComparisonModalOpen(true)}
        bookingsCount={userBookings.length}
        onOpenBookings={() => setBookingsDrawerOpen(true)}
        onOpenBookingModal={() => openBookingModal()}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero with Floating Master Filter */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRegion={activeRegion}
          onRegionChange={setActiveRegion}
          selectedSpecialty={activeSpecialty}
          onSpecialtyChange={setActiveSpecialty}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
          regions={REGIONS_DATA}
          specialties={SPECIALTIES_DATA}
          onSearchSubmit={scrollToCatalog}
          onQuickFilter={handleQuickFilter}
        />

        {/* 2. Key Metrics & Trust Section */}
        <TrustStats />

        {/* 3. Interactive Diagnostic Quiz */}
        <DiagnosticQuiz
          sanatoriums={SANATORIUMS_DATA}
          onOpenBookingModal={openBookingModal}
          onOpenDetailsModal={openDetailsModal}
        />

        {/* 4. Sanatoriums Catalog */}
        <Catalog
          sanatoriums={filteredSanatoriums}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeRegion={activeRegion}
          onRegionChange={setActiveRegion}
          activeSpecialty={activeSpecialty}
          onSpecialtyChange={setActiveSpecialty}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onClearFilters={clearAllFilters}
          regions={REGIONS_DATA}
          specialties={SPECIALTIES_DATA}
          favoritesIds={favoritesIds}
          onToggleFavorite={toggleFavorite}
          comparedIds={comparedIds}
          onToggleCompare={toggleCompare}
          onOpenDetails={openDetailsModal}
          onOpenBooking={openBookingModal}
        />

        {/* 5. Health Conditions / Diagnostics Directory */}
        <DiseasesDirectory
          diseases={DISEASES_DIRECTORY_DATA}
          onSelectSanatorium={(id) => {
            const san = SANATORIUMS_DATA.find(s => s.id === id)
            if (san) openBookingModal(san)
          }}
          onFilterByKeyword={handleQuickFilter}
        />

        {/* 6. Interactive Leaflet Map */}
        <InteractiveMap
          sanatoriums={SANATORIUMS_DATA}
          onOpenBookingModal={openBookingModal}
          onOpenDetailsModal={openDetailsModal}
        />

        {/* 7. Balneology & Physical Treatments */}
        <TreatmentsSection
          onFilterByKeyword={handleQuickFilter}
        />

        {/* 8. Preparation Guide Checklist */}
        <PreparationGuide />

        {/* 9. Real-Time Voucher Verification */}
        <VoucherVerification
          sampleVouchers={SAMPLE_VERIFICATION_VOUCHERS}
          userBookings={userBookings}
        />

        {/* 10. Patient Reviews & Add Review Action */}
        <ReviewsSection
          reviews={reviews}
          onOpenAddReview={() => setAddReviewModalOpen(true)}
        />

        {/* 11. Frequently Asked Questions */}
        <FaqSection faqs={FAQS_DATA} />

        {/* 12. Doctor Consultation CTA */}
        <CtaBanner
          onOpenConsultation={() => setConsultationModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* MODALS & DRAWERS */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        sanatoriums={SANATORIUMS_DATA}
        initialSanatorium={bookingTarget}
        onBookingSuccess={handleBookingSuccess}
      />

      <DetailsModal
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        sanatorium={detailsTarget}
        onOpenBooking={(san) => openBookingModal(san)}
      />

      <ComparisonModal
        isOpen={comparisonModalOpen}
        onClose={() => setComparisonModalOpen(false)}
        comparedIds={comparedIds}
        sanatoriums={SANATORIUMS_DATA}
        onRemoveFromCompare={(id) => setComparedIds(prev => prev.filter(x => x !== id))}
        onOpenBooking={(san) => openBookingModal(san)}
      />

      <BookingsDrawer
        isOpen={bookingsDrawerOpen}
        onClose={() => setBookingsDrawerOpen(false)}
        bookings={userBookings}
        onCancelBooking={cancelBooking}
        onOpenBookingModal={() => openBookingModal()}
      />

      <FavoritesDrawer
        isOpen={favoritesDrawerOpen}
        onClose={() => setFavoritesDrawerOpen(false)}
        favoritesIds={favoritesIds}
        sanatoriums={SANATORIUMS_DATA}
        onRemoveFavorite={(id) => setFavoritesIds(prev => prev.filter(x => x !== id))}
        onOpenBooking={(san) => openBookingModal(san)}
      />

      <AddReviewModal
        isOpen={addReviewModalOpen}
        onClose={() => setAddReviewModalOpen(false)}
        sanatoriums={SANATORIUMS_DATA}
        onSubmitReview={handleReviewSubmit}
      />

      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        onRequestSuccess={handleConsultationSuccess}
      />

      {/* Floating 24/7 Call & Telegram Widget */}
      <FloatingCallWidget
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />
    </div>
  )
}
