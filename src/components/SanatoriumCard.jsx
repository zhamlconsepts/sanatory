import React, { useState, useEffect } from 'react'
import { getCompanyDetails, fetchLiveWeather } from '../services/companyApi'
import {
  IconFootball,
  IconMassage,
  IconPool,
  IconSanatorium,
  IconCheck,
  IconSun
} from './Icons'

export default function SanatoriumCard({
  item,
  isFavorite,
  onToggleFavorite,
  isCompared,
  onToggleCompare,
  onOpenDetails,
  onOpenBooking
}) {
  const [weather, setWeather] = useState(null)
  const company = getCompanyDetails(item.id)

  useEffect(() => {
    let mounted = true
    if (item.coords && item.coords.length === 2) {
      fetchLiveWeather(item.coords[0], item.coords[1]).then(data => {
        if (mounted && data) setWeather(data)
      })
    }
    return () => { mounted = false }
  }, [item.coords])

  const getCategoryBadge = () => {
    switch (item.facilityType) {
      case 'football':
        return { label: 'Futbol Arenasi', bg: '#0284C7', color: '#FFFFFF', Icon: IconFootball }
      case 'massage':
        return { label: 'Terapevtik Massaj', bg: '#7C3AED', color: '#FFFFFF', Icon: IconMassage }
      case 'fitness':
        return { label: 'Basseyn & Fitnes', bg: '#0D9488', color: '#FFFFFF', Icon: IconPool }
      case 'sanatorium':
      default:
        return { label: 'Sanatoriya-Kurort', bg: '#059669', color: '#FFFFFF', Icon: IconSanatorium }
    }
  }

  const getInclusionText = () => {
    switch (item.facilityType) {
      case 'football':
        return "FIFA sun'iy chim + Professional yoritish + Shinam dush"
      case 'massage':
        return "Shifokor ko'rigi + Tabiiy shifobaxsh moylar kiritilgan"
      case 'fitness':
        return "Basseyn + Kardio zona + Fin saunasi erkin kirish"
      case 'sanatorium':
      default:
        return "3 mahal parhez taomlar + To'liq tibbiy davolash kursi"
    }
  }

  const getPriceSub = () => {
    if (item.priceUnit) return item.priceUnit.replace('/', '').trim()
    switch (item.facilityType) {
      case 'football': return '1 soat / maydon'
      case 'massage': return '1 seans / 60 daqiqa'
      case 'fitness': return '1 kunlik / erkin tashrif'
      case 'sanatorium':
      default: return '1 kishi / kun'
    }
  }

  const getBookingBtnText = () => {
    switch (item.facilityType) {
      case 'football': return 'Maydonni Band Qilish'
      case 'massage': return 'Seansni Band Qilish'
      case 'fitness': return 'Abonement Olish'
      case 'sanatorium':
      default: return 'Vaucher Olish'
    }
  }

  const categoryBadge = getCategoryBadge()

  return (
    <div className="sanatorium-card">
      {/* Card Image Wrap */}
      <div className="card-image-wrap" onClick={() => onOpenDetails(item)} style={{ cursor: 'pointer' }}>
        <img
          src={item.image}
          alt={item.name}
          className="card-image"
          loading="lazy"
        />

        {/* Top Badges */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '0.4rem', zIndex: 2, flexWrap: 'wrap' }}>
          <span
            style={{
              background: categoryBadge.bg,
              color: categoryBadge.color,
              fontSize: '0.68rem',
              fontWeight: 700,
              padding: '0.24rem 0.65rem',
              borderRadius: '9999px',
              letterSpacing: '0.02em',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <categoryBadge.Icon size={12} color="#FFFFFF" />
            <span>{categoryBadge.label}</span>
          </span>
          {item.badge && (
            <span className="card-badge-pill">
              {item.badge}
            </span>
          )}
          {item.discount && (
            <span className="card-badge-pill card-badge-dark">
              {item.discount}
            </span>
          )}
        </div>

        {/* Wishlist Heart Icon Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleFavorite(item.id)
          }}
          className="card-wishlist-pill"
          title={isFavorite ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={isFavorite ? "#E11D48" : "none"}
            stroke={isFavorite ? "#E11D48" : "#1C1C1E"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>

        {/* Altitude Pill Badge */}
        {item.altitude && (
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '12px',
              background: 'rgba(28, 28, 30, 0.75)',
              backdropFilter: 'blur(6px)',
              color: '#FFFFFF',
              fontSize: '0.68rem',
              padding: '0.2rem 0.55rem',
              borderRadius: '9999px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
            </svg>
            <span>{item.altitude}</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Meta row: Location & Rating */}
        <div className="card-location-row">
          <div className="card-location-text">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{item.region}</span>
          </div>
          <div className="card-rating-text" title={`${item.rating} ball — a'lo darajada baholangan`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>{item.rating}</span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.72rem' }}>
              ({item.reviewsCount})
            </span>
          </div>
        </div>

        {/* Live Satellite Weather + State Verification Pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem', margin: '0.55rem 0', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#059669', background: 'rgba(5, 150, 105, 0.08)', padding: '0.2rem 0.55rem', borderRadius: '9999px', fontWeight: 600 }}>
            <IconCheck size={12} color="#059669" />
            <span title={company.officialLegalName}>STIR: {company.inn}</span>
          </div>

          {weather && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-secondary)', background: 'var(--bg-subtle)', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: 600, border: '1px solid var(--border-subtle)' }} title={`Jonli sun'iy yo'ldosh ma'lumoti: ${weather.description}, Shamol: ${weather.windSpeed} km/s`}>
              <IconSun size={12} color="#0284C7" />
              <span>{weather.temp > 0 ? `+${weather.temp}` : weather.temp}°C</span>
              <span style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>Jonli</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3
          className="card-title-editorial"
          onClick={() => onOpenDetails(item)}
          title={item.name}
          style={{ cursor: 'pointer' }}
        >
          {item.name}
        </h3>

        {/* Inclusion Guarantee Badge */}
        <div className="card-inclusions-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>{getInclusionText()}</span>
        </div>

        {/* Clean Specialty Chips */}
        <div className="card-specs-wrap">
          {item.specialties.slice(0, 2).map((spec, idx) => (
            <span key={idx} className="card-spec-tag">
              {spec}
            </span>
          ))}
        </div>

        {/* Direct Phone Contact Row */}
        {item.phone && (
          <div className="card-phone-banner">
            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Aloqa:</span>
            <a
              href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
              title="To'g'ridan-to'g'ri bog'lanish"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{item.phone}</span>
            </a>
          </div>
        )}

        {/* Bottom Pricing & Actions */}
        <div className="card-bottom-pricing">
          <div>
            <div className="card-price-sub">{getPriceSub()}</div>
            <div className="card-price-num">
              {item.priceFormatted || `${item.price?.toLocaleString()} so'm`}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={() => onOpenDetails(item)}
              className="btn-outline-pill"
              style={{ padding: '0.42rem 0.8rem', fontSize: '0.78rem' }}
              title="Batafsil ma'lumotlar"
            >
              Batafsil
            </button>

            <button
              onClick={() => onOpenBooking(item)}
              className="btn-dark-pill"
              style={{ padding: '0.42rem 0.95rem', fontSize: '0.78rem' }}
            >
              {getBookingBtnText()}
            </button>
          </div>
        </div>

        {/* Compare Checkbox */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: isCompared ? 'var(--text-primary)' : 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={isCompared}
              onChange={() => onToggleCompare(item.id)}
              style={{ width: '13px', height: '13px', accentColor: 'var(--dark-capsule)', cursor: 'pointer' }}
            />
            Taqqoslash
          </label>
        </div>
      </div>
    </div>
  )
}
