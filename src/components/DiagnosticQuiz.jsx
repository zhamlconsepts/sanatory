import React, { useState } from 'react'

export default function DiagnosticQuiz({ sanatoriums, onOpenBookingModal, onOpenDetailsModal }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({
    goal: null,
    climate: null,
    party: null
  })
  const [results, setResults] = useState(null)

  const stepsData = {
    1: {
      title: "1. Asosiy davolanish maqsadingizni tanlang:",
      subtitle: "Tibbiy mutaxassislar va kurortologiya mezonlari asosida",
      options: [
        { id: 'bogim', code: '01', title: "Bo'g'im va umurtqa pog'onasi", desc: "Artroz, osteoxondroz, radikulit, disk churrasi" },
        { id: 'nafas', code: '02', title: "Nafas a'zolari va o'pka", desc: "Surunkali bronxit, bronxial astma, toza tog' havosi" },
        { id: 'oshqozon', code: '03', title: "Oshqozon-ichak va jigar", desc: "Gastrit, kolit, o't yo'llari, ichimlik mineral suvlari" },
        { id: 'asab', code: '04', title: "Asab tizimi va toliqish", desc: "Uyqusizlik, surunkali charchoq, psixosomatika" },
        { id: 'yurak', code: '05', title: "Yurak va qon aylanish tizimi", desc: "Gipertoniya, qon bosimi barqarorligi" },
        { id: 'diabet', code: '06', title: "Metabolizm va qandli diabet", desc: "Endokrin bezlar, maxsus parhez va mineral terapiya" }
      ]
    },
    2: {
      title: "2. Qanday tabiiy iqlim ma'qul?",
      subtitle: "Tabiiy omil davolash samaradorligini sezilarli oshiradi",
      options: [
        { id: 'tog', code: 'A', title: "Baland archazor tog' havosi", desc: "Dengiz sathidan 2000m balandlik, toza kislorod" },
        { id: 'buloq', code: 'B', title: "Yer osti termal mineral buloqlari", desc: "Yod-brom va xlorid-natriyli shifobaxsh vannalar" },
        { id: 'sokin', code: 'C', title: "Sokin soya-salqin daryo va bog'", desc: "Tinch mikroiqlim, shahar shovqinidan uzoqda" }
      ]
    },
    3: {
      title: "3. Kim bilan bormoqchisiz?",
      subtitle: "Xona toifasi va zarur sharoitlarni to'g'ri tanlash uchun",
      options: [
        { id: 'otaona', code: 'I', title: "Ota-ona yoki keksa yoshdagilar", desc: "Tinch muhit, lift, qulay yo'laklar, 24/7 navbatchi shifokor" },
        { id: 'yakka', code: 'II', title: "Yakka o'zim", desc: "Individual muolajalar, sukunat va tiklanish" },
        { id: 'oila', code: 'III', title: "Oila va farzandlar bilan", desc: "Bolalar maydonchasi, suzish havzasi va keng kottejlar" }
      ]
    }
  }

  const handleSelectOption = (field, value) => {
    const updated = { ...answers, [field]: value }
    setAnswers(updated)

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateRecommendation(updated)
    }
  }

  const calculateRecommendation = (currentAnswers) => {
    const goal = currentAnswers.goal
    const climate = currentAnswers.climate

    let scored = sanatoriums.map(item => {
      let score = 70
      let reasons = []

      if (goal === 'nafas' && (item.id === 'zomin' || item.id === 'oqtosh' || item.id === 'xonobod')) {
        score += 25
        reasons.push("Nafas yo'llari va toza kislorod kurorti")
      }
      if (goal === 'bogim' && (item.id === 'chortoq' || item.id === 'chinobod' || item.id === 'chimyon')) {
        score += 26
        reasons.push("Shifobaxsh balchiq va mineral vannalari")
      }
      if (goal === 'oshqozon' && (item.id === 'chortoq' || item.id === 'omonxona' || item.id === 'chinobod')) {
        score += 27
        reasons.push("Ichimlik mineral buloqlari mavjud")
      }
      if (goal === 'asab' && (item.id === 'zomin' || item.id === 'humson' || item.id === 'oqtosh')) {
        score += 24
        reasons.push("Archa fitonsidlari va tinch tog' havosi")
      }
      if (goal === 'yurak' && (item.id === 'turon' || item.id === 'chimyon' || item.id === 'humson')) {
        score += 25
        reasons.push("Kardiologik reabilitatsiya dasturi")
      }
      if (goal === 'diabet' && (item.id === 'chinobod' || item.id === 'chortoq')) {
        score += 28
        reasons.push("Maxsus endokrin parhez va mineral terapiya")
      }

      if (climate === 'tog' && item.categories.includes('mountain')) {
        score += 15
        reasons.push("Baland tog' havosi")
      }
      if (climate === 'buloq' && item.categories.includes('mineral')) {
        score += 15
        reasons.push("Yer osti mineral suvi")
      }

      return {
        ...item,
        matchScore: Math.min(score, 99),
        matchReason: reasons.length > 0 ? reasons.join(' • ') : "Sizning mezonlaringizga to'liq mos keladi"
      }
    })

    scored.sort((a, b) => b.matchScore - a.matchScore)
    setResults(scored.slice(0, 3))
  }

  const resetQuiz = () => {
    setAnswers({ goal: null, climate: null, party: null })
    setCurrentStep(1)
    setResults(null)
  }

  return (
    <section className="quiz-section" id="quiz" style={{ padding: '3rem 0', background: 'var(--bg-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            INDIVIDUAL TAVSIYA
          </span>
          <h2 className="heading-editorial">Qaysi Sanatoriya Sizga Mos?</h2>
          <p className="section-subtitle">
            3 ta savolga javob bering — tibbiy mezonlar va kurortologiya algoritmi siz uchun eng ideal maskanni hisoblab beradi
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', background: 'var(--bg-card)', borderRadius: '22px', padding: '2rem', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', border: '1px solid var(--border-card)' }}>
          {!results ? (
            <div>
              {/* Progress Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Bosqich: {currentStep} / 3
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'} yakunlandi
                </span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'var(--bg-subtle)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '1.75rem' }}>
                <div
                  style={{
                    height: '100%',
                    width: currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%',
                    background: 'var(--dark-capsule)',
                    transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                ></div>
              </div>

              {/* Step Title */}
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                {stepsData[currentStep].title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {stepsData[currentStep].subtitle}
              </p>

              {/* Options Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.85rem' }}>
                {stepsData[currentStep].options.map(opt => {
                  const fieldKey = currentStep === 1 ? 'goal' : currentStep === 2 ? 'climate' : 'party'
                  const isSelected = answers[fieldKey] === opt.id

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(fieldKey, opt.id)}
                      style={{
                        background: isSelected ? 'var(--accent-lavender-subtle)' : 'var(--bg-card)',
                        border: isSelected ? '1.5px solid var(--accent-lavender-dark)' : '1px solid var(--border-subtle)',
                        borderRadius: '16px',
                        padding: '1rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.borderColor = 'var(--text-primary)'
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isSelected ? 'var(--accent-lavender)' : 'var(--bg-subtle)',
                          color: isSelected ? 'var(--accent-lavender-dark)' : 'var(--text-secondary)',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-mono)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {opt.code}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                          {opt.title}
                        </div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {opt.desc}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {currentStep > 1 && (
                <div style={{ marginTop: '1.5rem' }}>
                  <button
                    className="btn-outline-pill"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
                  >
                    ← Oldingi bosqich
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Results Header */}
              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <span className="card-badge-pill" style={{ position: 'static', display: 'inline-block', marginBottom: '0.5rem' }}>
                  Tavsiya Tayyor
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  Siz uchun Top-3 Sanatoriya
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Tanlagan parametrlar va sog'lomlashtirish maqsadlaringiz asosida saralandi
                </p>
              </div>

              {/* Results List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {results.map((item, idx) => (
                  <div
                    key={item.id}
                    style={{
                      border: idx === 0 ? '1.5px solid var(--accent-lavender-dark)' : '1px solid var(--border-card)',
                      borderRadius: '16px',
                      padding: '1.1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1.25rem',
                      flexWrap: 'wrap',
                      background: idx === 0 ? 'var(--accent-lavender-subtle)' : 'var(--bg-card)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '12px' }}
                      />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                            {item.name}
                          </span>
                          <span
                            style={{
                              background: idx === 0 ? 'var(--dark-capsule)' : 'var(--bg-subtle)',
                              color: idx === 0 ? '#FFFFFF' : 'var(--text-secondary)',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              padding: '0.15rem 0.55rem',
                              borderRadius: '9999px'
                            }}
                          >
                            {item.matchScore}% Moslik
                          </span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                          {item.region} • Reyting: {item.rating} / 5.0
                        </div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--accent-lavender-dark)', fontWeight: 600, marginTop: '0.2rem' }}>
                          {item.matchReason}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <button
                        className="btn-outline-pill"
                        style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem' }}
                        onClick={() => onOpenDetailsModal(item)}
                      >
                        Batafsil
                      </button>
                      <button
                        className="btn-dark-pill"
                        style={{ padding: '0.45rem 1.15rem', fontSize: '0.8rem' }}
                        onClick={() => onOpenBookingModal(item)}
                      >
                        Band Qilish
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  className="btn-outline-pill"
                  onClick={resetQuiz}
                  style={{ fontSize: '0.82rem', padding: '0.45rem 1.15rem' }}
                >
                  Qaytadan hisoblash
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
