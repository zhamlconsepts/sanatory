import React from 'react'

export default function TreatmentsSection({ onFilterByKeyword }) {
  const treatments = [
    {
      id: 'mineral',
      title: 'Balneoterapiya (Mineral Suvlar)',
      badge: 'Asosiy Omil',
      desc: "Yod-brom va xlorid-natriyli shifobaxsh vannalar va ichimlik kursi. Oshqozon, jigar va qon bosimini me'yorlashtiradi.",
      effects: ["Oshqozon shirasini yaxshilash", "Bo'g'imlardagi yallig'lanishni kamaytirish"],
      sanatoriums: ['Chortoq', 'Chinobod', 'Omonxona']
    },
    {
      id: 'mud',
      title: 'Peloidoterapiya (Shifobaxsh Balchiq)',
      badge: 'Bo\'g\'im va Bel',
      desc: "Organik moddalarga boy vulqon va mineral ko'l balchiqlari. Umurtqa, bel churrasi va bo'g'imlar uchun eng kuchli vosita.",
      effects: ["Kuchli og'riq qoldiruvchi samara", "Suyak-mushak tizimini tiklash"],
      sanatoriums: ['Chinobod', 'Chortoq', 'Chimyon']
    },
    {
      id: 'salt',
      title: "Speleoterapiya (Tuz G'ori)",
      badge: 'Nafas Yo\'llari',
      desc: "Tabiiy kaliy-natriy tuzi aerozollari bilan to'yingan mikroiqlim. Bronxial astma, allergik rinit va yo'talni yengillashtiradi.",
      effects: ["O'pkani chuqur tozalash", "Immunitetni ko'tarish"],
      sanatoriums: ['Zomin', 'Oqtosh', 'Humson']
    },
    {
      id: 'paraffin',
      title: 'Parafino-ozokerit Terapiyasi',
      badge: 'Issiqlik Muolajasi',
      desc: "Chuqur isituvchi tog' mumi kompresslari. Bo'g'imlardagi tuzlarni eritish va mushak spazmlarini yozishda qo'llaniladi.",
      effects: ["Chuqur to'qimalarni qizdirish", "Spazm va og'riqni yo'qotish"],
      sanatoriums: ['Zomin', 'Xonobod', 'Turon']
    },
    {
      id: 'hydro',
      title: 'Sharko Dushi va Gidromassaj',
      badge: 'Qon Aylanish',
      desc: "Yuqori bosimli suv massaji. Ortiqcha vazn, osteoxondroz, asabiy charchoq va modda almashinuviga qarshi samarali usul.",
      effects: ["Limfodrenaj va umumiy tonus", "Asabiy toliqishni bartaraf etish"],
      sanatoriums: ['Humson', 'Chimyon', 'Zomin']
    },
    {
      id: 'terrenkur',
      title: 'Terrenkur va Fitobar',
      badge: 'Tabiiy Reabilitatsiya',
      desc: "Archazor tog' yo'laklarida shifokor nazorati ostida piyoda yurish va shifobaxsh tog' giyohlari damlamalari.",
      effects: ["Yurak-qon tomir faoliyatini kuchaytirish", "Toza kislorod bilan to'yintirish"],
      sanatoriums: ['Zomin', 'Xonobod', 'Oqtosh']
    }
  ]

  return (
    <section className="treatments-section" id="muolajalar" style={{ padding: '3rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            BALNEOLOGIYA & FIZIOTERAPIYA
          </span>
          <h2 className="heading-editorial">Sanatoriyalardagi Asosiy Muolajalar</h2>
          <p className="section-subtitle">
            Yer osti mineral buloqlari, shifobaxsh balchiqlar va tog' havosi zamonaviy tibbiy texnologiyalar bilan uyg'unlikda
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {treatments.map(t => (
            <div
              key={t.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '20px',
                padding: '1.35rem',
                boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-card)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'var(--accent-lavender)',
                      color: 'var(--accent-lavender-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      background: 'var(--bg-subtle)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {t.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                  {t.desc}
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {t.effects.map((eff, i) => (
                      <li key={i} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-sage)' }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{eff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {t.sanatoriums.map((name, i) => (
                  <button
                    key={i}
                    onClick={() => onFilterByKeyword(name)}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
