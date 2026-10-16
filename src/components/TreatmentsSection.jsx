import React from 'react'

export default function TreatmentsSection({ onFilterByKeyword }) {
  const treatments = [
    {
      id: 'football_sport',
      title: "Mini-Futbol va Kardio Chiniqish",
      badge: 'Yurak va Qon Tomirlari',
      image: 'assets/images/treatment_football.jpg',
      desc: "Muntazam mini-futbol o'yinlari va jismoniy harakat yurak mushaklarini baquvvat qiladi, metabolizmni tezlashtiradi va kuchli energiya baxsh etadi.",
      effects: ["Gipodinamiyani bartaraf etish va chidamlilikni oshirish", "Tetiklik gormonlari (endorfin) ajralishini faollashtirish"],
      sanatoriums: ['Bunyodkor Arena', 'Zomin Stadium', 'Registon Sport']
    },
    {
      id: 'massage_therapy',
      title: 'Terapevtik Massaj va Manual Terapiya',
      badge: "Umurtqa va Bo'g'imlar",
      image: 'assets/images/treatment_massage.jpg',
      desc: "Disk churrasi (grija), osteoxondroz hamda bo'yin-bel og'riqlarini dori-darmonsiz bartaraf etish. Chuqur mushak spazmlarini yozadi.",
      effects: ["Umurtqalararo disk bosimini sezilarli pasaytirish", "Qisilgan asab tolalari va surunkali bosh og'rig'ini yengillashtirish"],
      sanatoriums: ['Ibn Sino Massaj', 'Lotus SPA', 'Shifo Nur']
    },
    {
      id: 'swimming_pool',
      title: 'Suzish va Gidroterapiya Havzalari',
      badge: 'Qad-Qomat va Bo\'g\'im',
      image: 'assets/images/treatment_aquatic.jpg',
      desc: "Umurtqaga ortiqcha yuk tushirmasdan butun tana mushaklarini uyg'un rivojlantiruvchi, bo'g'imlar elastikligini tiklovchi universal sport.",
      effects: ["O'pka nafas sig'imini kengaytirish", "Skolioz va qad-qomat egriliklarini tuzatish"],
      sanatoriums: ['Olimpiya Kompleks', 'Titan Fitnes', 'Humson Buloq']
    },
    {
      id: 'mineral_water',
      title: 'Tabiiy Mineral Suvlar (Balneoterapiya)',
      badge: "Oshqozon va Ichki A'zolar",
      image: 'assets/images/treatment_mineral.jpg',
      desc: "Yod-brom va xlorid-natriyli shifobaxsh vannalar hamda ichimlik kursi. Oshqozon-ichak, jigar va qon bosimini me'yorlashtiradi.",
      effects: ["Me'da-ichak shilliq qavatini qayta tiklash", "Bo'g'imlardagi tuz va yallig'lanishlarni yuvish"],
      sanatoriums: ['Chortoq', 'Chinobod', 'Omonxona']
    },
    {
      id: 'salt_cave',
      title: "Speleoterapiya (Tabiiy Tuz G'orlari)",
      badge: 'Nafas Yo\'llari Salomatligi',
      image: 'assets/images/treatment_salt.jpg',
      desc: "Tabiiy kaliy-natriy tuzi mikropartikullari bilan to'yingan ionlashgan havo. Bronxial astma, allergik yo'tal va o'pka tozalanishi uchun samarali.",
      effects: ["O'pka to'qimalarini shilimshiqdan chuqur tozalash", "Mavsumiy infeksiyalarga qarshi tabiiy immunitetni kuchaytirish"],
      sanatoriums: ['Zomin', 'Oqtosh', 'Humson']
    },
    {
      id: 'mountain_air',
      title: 'Archazor Tog\' Iqlimi va Terrenkur',
      badge: 'Asab Tizimi va Ruhiy Xotirjamlik',
      image: 'assets/images/treatment_mountain.jpg',
      desc: "Baland tog' archazorlarining fitonsidlarga boy kislorodli havosi va shifobaxsh piyoda yurish yo'laklari (terrenkur tizimi).",
      effects: ["Surunkali charchoq va stressni samarali bartaraf etish", "Qon aylanishini toza kislorod bilan to'liq to'yintirish"],
      sanatoriums: ['Zomin', 'Xonobod', 'Miraki']
    }
  ]

  return (
    <section className="treatments-section" id="muolajalar" style={{ padding: '3.5rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            ILMIY ASOSLANGAN REABILITATSIYA
          </span>
          <h2 className="heading-editorial">Salomatlik va Jismoniy Tiklanishning 6 Asosiy Omili</h2>
          <p className="section-subtitle">
            Doimiy jismoniy faollik, professional manual parvarish va tabiiy shifobaxsh manbalarning kompleks ijobiy ta'siri
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {treatments.map(t => (
            <div
              key={t.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '20px',
                overflow: 'hidden',
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
                <div style={{ height: '140px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={t.image}
                    alt={t.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                    <span
                      style={{
                        background: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(6px)',
                        color: 'var(--text-primary)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      {t.badge}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.25rem 0.5rem 1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                    {t.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.85rem' }}>
                    {t.desc}
                  </p>
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {t.effects.map((eff, i) => (
                      <li key={i} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-sage)', flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{eff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '0.85rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tavsiya etilgan:</span>
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
                      padding: '0.22rem 0.65rem',
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
