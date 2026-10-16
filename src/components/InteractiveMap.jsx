import React, { useEffect, useRef, useState } from 'react'

export default function InteractiveMap({ sanatoriums, onOpenBookingModal, onOpenDetailsModal }) {
  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef({})
  const [selectedId, setSelectedId] = useState(null)

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
    sanatoriums.forEach(s => {
      if (!s.coords || s.coords.length !== 2) return

      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div style="background: #1C1C1E; color: #EAD5E6; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; font-family: sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 2px solid #FFFFFF; cursor: pointer;">•</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -26]
      })

      const marker = L.marker(s.coords, { icon: customIcon }).addTo(map)

      const popupHtml = `
        <div style="max-width: 210px; font-family: 'Plus Jakarta Sans', sans-serif; padding: 2px;">
          <img src="${s.image}" alt="${s.name}" style="width: 100%; height: 95px; object-fit: cover; border-radius: 10px; margin-bottom: 8px;">
          <div style="font-weight: 700; font-size: 0.92rem; color: #1A1A1C; margin-bottom: 2px;">${s.name}</div>
          <div style="font-size: 0.74rem; color: #6B6762; font-weight: 500; margin-bottom: 6px;">${s.region}</div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E8E4DC; padding-top: 6px;">
            <span style="font-weight: 800; color: #1A1A1C; font-size: 0.88rem;">${s.priceFormatted || s.price + " so'm"}</span>
            <button id="map-book-btn-${s.id}" style="background: #1C1C1E; color: #FFFFFF; border: none; padding: 4px 12px; border-radius: 9999px; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
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
  }, [sanatoriums])

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
            GEOGRAFIK JOYLASHUV
          </span>
          <h2 className="heading-editorial">O'zbekiston Bo'ylab Sanatoriylar</h2>
          <p className="section-subtitle">
            Tog'li hududlar, mineral buloqlar va vodiylar bo'ylab joylashgan barcha sihatgohlarni interaktiv xaritadan tanlang
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.25rem', alignItems: 'start' }}>
          {/* Map box */}
          <div
            ref={mapContainerRef}
            className="map-container-box"
          ></div>

          {/* Side List */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '20px',
              padding: '1.15rem',
              maxHeight: '440px',
              overflowY: 'auto',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Sanatoriylar Ro'yxati ({sanatoriums.length}):
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {sanatoriums.map(s => {
                const isSelected = selectedId === s.id

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
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                        {s.name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                        {s.region}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {s.priceFormatted}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                        kuniga
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
