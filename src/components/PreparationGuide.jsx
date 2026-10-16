import React, { useState } from 'react'

export default function PreparationGuide() {
  const [activeTab, setActiveTab] = useState('docs')
  const [checkedItems, setCheckedItems] = useState({})

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const tabs = [
    { id: 'docs', label: 'Kerakli Hujjatlar' },
    { id: 'luggage', label: 'Zarur Buyumlar' },
    { id: 'rules', label: 'Kurort Qoidalari' }
  ]

  const docsList = [
    { id: 'doc1', title: "072/u Sanatoriya-kurort kartasi", desc: "Oilaviy poliklinika terapevti tomonidan to'ldiriladi (amal qilish muddati 1 oy)." },
    { id: 'doc2', title: "Pasport / ID-karta (asl nusxasi)", desc: "16 yoshgacha bo'lgan bolalar uchun tug'ilganlik haqidagi guvohnoma." },
    { id: 'doc3', title: "Elektron Vaucher yoki Bron tasdiqnomasi", desc: "Sihat & Sport portali orqali olingan rasmiy QR-kodli elektron vaucher." },
    { id: 'doc4', title: "Flyuorografiya va EKG xulosasi", desc: "So'nggi 6 oy ichidagi ko'krak qafasi tekshiruvi va elektrokardiogramma natijasi." }
  ]

  const luggageList = [
    { id: 'lug1', title: "Cho'milish kiyimi va rezina shippak", desc: "Yopiq basseyn, mineral vannalar va turk hammomi uchun qulay suzish kiyimi." },
    { id: 'lug2', title: "Sport kiyimi va qulay krossovka", desc: "Tog' terrenkur yo'laklarida piyoda yurish va ertalabki gimnastika uchun." },
    { id: 'lug3', title: "Muntazam dorilar va tonometr", desc: "Doimiy qabul qilinadigan dori vositalarining zarur zaxirasi." }
  ]

  const rulesList = [
    { id: 'rule1', title: "Tavsiya etilgan davomiylik — 10-14 kun", desc: "Mineral suvlar va balchiqning to'liq biologik shifobaxsh ta'siri uchun minimal kurs." },
    { id: 'rule2', title: "Kelgan kunda shifokor ko'rigi", desc: "Kurortolog-shifokor individual davolash va fizioterapiya rejasini tasdiqlaydi." },
    { id: 'rule3', title: "Parhez taomnomasiga qat'iy rioya", desc: "Shifobaxsh ovqatlanish stoli davolash samarasini sezilarli darajada kuchaytiradi." }
  ]

  return (
    <section className="guide-section" id="yoriqnoma" style={{ padding: '3rem 0', background: 'var(--bg-canvas)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            TAYYORGARLIK VA YO'RIQNOMA
          </span>
          <h2 className="heading-editorial">Dam Olish va Davolanishdan Oldin</h2>
          <p className="section-subtitle">
            Hujjatlarni to'g'ri rasmiylashtirish, qulay kiyinish va tashrifni samarali o'tkazish bo'yicha amaliy yo'riqnoma
          </p>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', background: 'var(--bg-card)', borderRadius: '22px', padding: '1.75rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid var(--border-card)' }}>
          {/* Segmented Navigation Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-card)', paddingBottom: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`segmented-pill-btn ${activeTab === tab.id ? 'active' : ''}`}
                style={{ padding: '0.45rem 1.15rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Checklist items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {(activeTab === 'docs' ? docsList : activeTab === 'luggage' ? luggageList : rulesList).map(item => {
              const isChecked = !!checkedItems[item.id]

              return (
                <label
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: isChecked ? 'var(--accent-lavender-subtle)' : 'var(--bg-subtle)',
                    border: isChecked ? '1px solid var(--accent-lavender-dark)' : '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    padding: '0.95rem 1.15rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    style={{ marginTop: '0.2rem', width: '16px', height: '16px', accentColor: 'var(--dark-capsule)', cursor: 'pointer' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)', textDecoration: isChecked ? 'line-through' : 'none' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.45 }}>
                      {item.desc}
                    </div>
                  </div>
                </label>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
