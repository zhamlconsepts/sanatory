import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-capsule)', color: 'rgba(255, 255, 255, 0.7)', padding: '3.5rem 0 1.75rem 0', marginTop: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--accent-lavender)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-lavender-dark)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                SihatMaskan
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '1rem' }}>
              O'zbekistonning barcha rasmiy sanatoriyalari va shifobaxsh kurortlarini onlayn bron qilish va rasmiy elektron vaucher berish milliy portali.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
              Bo'limlar
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem' }}>
              <li><a href="#katalog" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Sanatoriyalar Katalogi</a></li>
              <li><a href="#quiz" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Individual Tavsiya Testi</a></li>
              <li><a href="#tashxislar" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Tashxislar Reestri</a></li>
              <li><a href="#xarita" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Interaktiv Xarita</a></li>
              <li><a href="#muolajalar" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Muolajalar Ro'yxati</a></li>
              <li><a href="#vaucher-tekshirish" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>Vaucherni Tekshirish</a></li>
            </ul>
          </div>

          {/* Top Kurortlar */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
              Mashhur Kurortlar
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.65)' }}>
              <li>Zomin Sanatoriysi (Jizzax viloyati)</li>
              <li>Chortoq Sanatoriysi (Namangan viloyati)</li>
              <li>Chinobod Sanatoriysi (Toshkent shahri)</li>
              <li>Oqtosh Sanatoriysi (Toshkent viloyati)</li>
              <li>Omonxona Shifoxonasi (Surxondaryo viloyati)</li>
            </ul>
          </div>

          {/* Contact & Call center */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
              Aloqa Markazi (24/7)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem' }}>
              <a href="tel:+998712000000" style={{ color: 'var(--accent-lavender)', fontWeight: 800, fontSize: '1.15rem', textDecoration: 'none' }}>
                +998 (71) 200-00-00
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Toshkent shahri, Chilonzor tumani</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>info@sihatmaskan.uz</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)' }}>
          <div>
            © 2026 SihatMaskan. Barcha huquqlar himoyalangan.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span>Maxfiylik siyosati</span>
            <span>Ommaviy oferta</span>
            <span>Davlat akkreditatsiyasi</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
