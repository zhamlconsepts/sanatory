import React, { useEffect, useRef, useState } from 'react'

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
      let pinEmoji = '🏥'
      if (s.facilityType === 'football') {
        pinColor = '#0284C7'
        pinEmoji = '⚽'
      } else if (s.facilityType === 'massage') {
        pinColor = '#7C3AED'
        pinEmoji = '💆'
      } else if (s.facilityType === 'fitness') {
        pinColor = '#0D9488'
        pinEmoji = '🏊'
      }

      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="background: ${pinColor}; color: #FFFFFF; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.82rem; font-weight: 800; font-family: sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.35); border: 2.5px solid #FFFFFF; cursor: pointer;">${pinEmoji}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -28]
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
            <button id="map-book-btn-${s.id}" style="background: #1C1C1E; color: #FFFFFF; border: none; padding: 4px 10px; border-radius: 9999px; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
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

  return (
    <section className="map-section" id="xarita" style={{ padding: '3rem 0', background: 'var(--bg-canvas)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            INTERAKTIV XARITA
          </span>
          <h2 className="heading-editorial">O'zbekiston Bo'ylab Salomatlik & Sport Maskanlari</h2>
          <p className="section-subtitle">
            Futbol maydonlari, massaj markazlari, shifobaxsh sanatoriylar va suzish majmualarining aniq lokatsiyalari
          </p>

          {/* Map Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {[
              { key: 'all', label: 'Barchasi', icon: '🗺️' },
              { key: 'football', label: 'Futbol', icon: '⚽' },
              { key: 'massage', label: 'Massaj', icon: '💆‍♂️' },
              { key: 'fitness', label: 'Basseyn & Fitnes', icon: '🏊‍♂️' },
              { key: 'sanatorium', label: 'Sanatoriylar', icon: '🏥' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setMapCategory(tab.key)}
                style={{
                  background: mapCategory === tab.key ? 'var(--dark-capsule)' : 'var(--bg-card)',
                  color: mapCategory === tab.key ? '#FFFFFF' : 'var(--text-primary)',
                  border: mapCategory === tab.key ? '1px solid var(--dark-capsule)' : '1px solid var(--border-subtle)',
                  borderRadius: '9999px',
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.25rem', alignItems: 'start' }}>
          {/* Map box */}
          <div
            ref={mapContainerRef}
            className="map-container-box"
            style={{ borderRadius: '24px', minHeight: '460px', overflow: 'hidden' }}
          ></div>

          {/* Side List */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '20px',
              padding: '1.15rem',
              maxHeight: '460px',
              overflowY: 'auto',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Maskanlar Ro'yxati ({filteredItems.length}):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {filteredItems.map(s => {
                const isSelected = selectedId === s.id
                let iconChar = '🏥'
                if (s.facilityType === 'football') iconChar = '⚽'
                if (s.facilityType === 'massage') iconChar = '💆‍♂️'
                if (s.facilityType === 'fitness') iconChar = '🏊‍♂️'

                return (
                  <div
                    key={s.id}
                    onClick={() => flyTo(s)}
                    style={{
                      background: isSelected ? 'var(--accent-lavender-subtle)' : 'var(--bg-subtle)',
                      border: isSelected ? '1.5px solid var(--accent-lavender-dark)' : '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      padding: '0.65rem 0.85rem',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{iconChar}</span>
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
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {s.priceFormatted}
                      </div>
                      <div style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
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
