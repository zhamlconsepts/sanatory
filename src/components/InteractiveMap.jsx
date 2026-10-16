import React, { useEffect, useRef, useState } from 'react'
import {
  IconAll,
  IconFootball,
  IconMassage,
  IconPool,
  IconSanatorium,
  IconMapPin
} from './Icons'

export default function InteractiveMap({ sanatoriums, onOpenBookingModal, onOpenDetailsModal }) {
  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef({})
  const [selectedId, setSelectedId] = useState(null)
  const [mapCategory, setMapCategory] = useState('all')

  const filteredItems = mapCategory === 'all'
    ? sanatoriums
    : sanatoriums.filter(s => (s.facilityType || 'sanatorium') === mapCategory)

  useEffect(() => {
    if (!mapContainerRef.current) return
    const L = window.L

    if (!L) {
      console.warn("Leaflet library not loaded")
      return
    }

    // Initialize Map
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [40.2, 67.5],
        zoom: 6.5,
        scrollWheelZoom: false
      })

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map)

      mapInstanceRef.current = map
    }

    const map = mapInstanceRef.current

    // Clear old markers
    Object.values(markersRef.current).forEach(marker => {
      map.removeLayer(marker)
    })
    markersRef.current = {}

    // Add markers
    filteredItems.forEach(s => {
      if (!s.coords || s.coords.length !== 2) return

      let pinColor = '#059669' // Emerald for sanatorium
      let svgInner = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-3"/></svg>'

      if (s.facilityType === 'football') {
        pinColor = '#0284C7'
        svgInner = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 7 3 2.5v3.5l-3 2.5-3-2.5V9.5Z"/><path d="M12 2v5"/><path d="M12 17v5"/></svg>'
      } else if (s.facilityType === 'massage') {
        pinColor = '#7C3AED'
        svgInner = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'
      } else if (s.facilityType === 'fitness') {
        pinColor = '#0D9488'
        svgInner = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0 3 1 4 0"/><path d="M16 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m8 9 4-2 3 2-2 3"/></svg>'
      }

      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="background: ${pinColor}; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 2.5px solid #FFFFFF; cursor: pointer; transition: transform 0.2s;">${svgInner}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -30]
      })

      const marker = L.marker(s.coords, { icon: customIcon }).addTo(map)

      const priceUnitStr = s.priceUnit ? s.priceUnit : (s.facilityType === 'football' ? '/ soat' : s.facilityType === 'massage' ? '/ seans' : '/ kun')

      const popupHtml = `
        <div style="max-width: 220px; font-family: 'Plus Jakarta Sans', sans-serif; padding: 2px;">
          <img src="${s.image}" alt="${s.name}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 10px; margin-bottom: 8px;">
          <div style="font-size: 0.68rem; font-weight: 800; color: ${pinColor}; text-transform: uppercase; margin-bottom: 2px;">
            ${s.facilityType === 'football' ? 'Futbol Maydoni' : s.facilityType === 'massage' ? 'Terapevtik Massaj' : s.facilityType === 'fitness' ? 'Basseyn & Fitnes' : 'Sanatoriya'}
          </div>
          <div style="font-weight: 700; font-size: 0.92rem; color: #1A1A1C; margin-bottom: 2px;">${s.name}</div>
          <div style="font-size: 0.74rem; color: #6B6762; font-weight: 500; margin-bottom: 6px;">${s.region}</div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E8E4DC; padding-top: 6px;">
            <div>
              <span style="font-weight: 800; color: #1A1A1C; font-size: 0.88rem;">${s.priceFormatted || s.price + " so'm"}</span>
              <span style="font-size: 0.68rem; color: #8E8A83;"> ${priceUnitStr}</span>
            </div>
            <button id="map-book-btn-${s.id}" style="background: #1C1C1E; color: #FFFFFF; border: none; padding: 5px 12px; border-radius: 9999px; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              Band Qilish
            </button>
          </div>
        </div>
      `

      marker.bindPopup(popupHtml)

      marker.on('popupopen', () => {
        const btn = document.getElementById(`map-book-btn-${s.id}`)
        if (btn) {
          btn.onclick = () => onOpenBookingModal(s)
        }
      })

      markersRef.current[s.id] = marker
    })
  }, [filteredItems])

  const flyTo = (item) => {
    setSelectedId(item.id)
    if (mapInstanceRef.current && item.coords) {
      mapInstanceRef.current.flyTo(item.coords, 11, { duration: 1.2 })
      const marker = markersRef.current[item.id]
      if (marker) {
        setTimeout(() => {
          marker.openPopup()
        }, 600)
      }
    }
  }

  const mapTabs = [
    { key: 'all', label: 'Barchasi', icon: IconAll },
    { key: 'football', label: 'Futbol', icon: IconFootball },
    { key: 'massage', label: 'Massaj', icon: IconMassage },
    { key: 'fitness', label: 'Basseyn & Fitnes', icon: IconPool },
    { key: 'sanatorium', label: 'Sanatoriylar', icon: IconSanatorium }
  ]

  const renderSideIcon = (type) => {
    if (type === 'football') return <IconFootball size={16} color="#0284C7" />
    if (type === 'massage') return <IconMassage size={16} color="#7C3AED" />
    if (type === 'fitness') return <IconPool size={16} color="#0D9488" />
    return <IconSanatorium size={16} color="#059669" />
  }

  return (
    <section className="map-section" id="xarita" style={{ padding: '3.5rem 0', background: 'var(--bg-canvas)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            INTERAKTIV XARITA
          </span>
          <h2 className="heading-editorial">O'zbekiston Bo'ylab Salomatlik va Sport Maskanlari</h2>
          <p className="section-subtitle">
            Futbol maydonlari, massaj markazlari, shifobaxsh sanatoriylar va suzish majmualarining tasdiqlangan lokatsiyalari
          </p>

          {/* Map Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            {mapTabs.map(tab => {
              const TabIcon = tab.icon
              const isActive = mapCategory === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setMapCategory(tab.key)}
                  style={{
                    background: isActive ? 'var(--dark-capsule)' : 'var(--bg-card)',
                    color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                    border: isActive ? '1px solid var(--dark-capsule)' : '1px solid var(--border-subtle)',
                    borderRadius: '9999px',
                    padding: '0.45rem 1rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <TabIcon size={14} color={isActive ? '#FFFFFF' : 'var(--text-secondary)'} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', alignItems: 'start' }}>
          {/* Map box */}
          <div
            ref={mapContainerRef}
            className="map-container-box"
            style={{ borderRadius: '24px', minHeight: '480px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
          ></div>

          {/* Side List */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '20px',
              padding: '1.25rem',
              maxHeight: '480px',
              overflowY: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Maskanlar Ro'yxati ({filteredItems.length}):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {filteredItems.map(s => {
                const isSelected = selectedId === s.id

                return (
                  <div
                    key={s.id}
                    onClick={() => flyTo(s)}
                    style={{
                      background: isSelected ? 'var(--accent-lavender-subtle)' : 'var(--bg-subtle)',
                      border: isSelected ? '1.5px solid var(--accent-lavender-dark)' : '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      padding: '0.75rem 0.9rem',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.65rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'var(--bg-card)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        {renderSideIcon(s.facilityType)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                          {s.name}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                          {s.region}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {s.priceFormatted}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                        {s.priceUnit ? s.priceUnit.replace('/', '').trim() : 'kuniga'}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
