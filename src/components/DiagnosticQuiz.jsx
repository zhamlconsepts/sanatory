import React, { useState } from 'react'
import { IconTarget, IconRefresh, IconCheck } from './Icons'

export default function DiagnosticQuiz({ sanatoriums, onOpenBookingModal, onOpenDetailsModal }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({
    needType: null,
    regionPref: null,
    party: null
  })
  const [results, setResults] = useState(null)

  const stepsData = {
    1: {
      title: "1. Sizga qanday yo'nalishdagi xizmat yoki sog'lomlashtirish zarur?",
      subtitle: "Salomatlik, jismoniy tiklanish va hordiq uchun asosiy yo'nalishni tanlang",
      options: [
        { id: 'football', code: '01', title: "Mini-futbol va faol jamoaviy sport", desc: "FIFA standartidagi sun'iy chim, tungi projektorlar, dush va mini-turnirlar" },
        { id: 'massage', code: '02', title: "Terapevtik massaj, umurtqa va bo'g'im davolash", desc: "Sertifikatlangan shifokor-manualistlar, chuqur uqalash, kedr bochkasi va sauna" },
        { id: 'fitness', code: '03', title: "Suzish, akva-fitness va tana chiniqtirish", desc: "50 metrlik isitiladigan yopiq va ochiq basseyn, professional trenajyorlar" },
        { id: 'sanatorium_air', code: '04', title: "Nafas yo'llari va toza tog' iqlim terapiyasi", desc: "Zomin va Oqtosh archazorlari, speleoterapiya (tuz g'ori), baland tog' havosi" },
        { id: 'sanatorium_joints', code: '05', title: "Mineral buloqlar va shifobaxsh balchiq muolajalari", desc: "Chortoq va Chimyon termal yod-brom suvlari, revmatizm va artrit davosi" },
        { id: 'sanatorium_gastro', code: '06', title: "Oshqozon-ichak va moddalar almashinuvini yaxshilash", desc: "Chinobod va Omonxona tabiiy shifobaxsh ichimlik suvlari, detoks parhez" }
      ]
    },
    2: {
      title: "2. Qaysi hudud yoki geografik joylashuv ma'qul?",
      subtitle: "Borish qulayligi va transport masofasiga qarab tanlang",
      options: [
        { id: 'tashkent', code: 'A', title: "Poytaxt hududida (Toshkent shahri)", desc: "Shahardan chiqmasdan, oqshomgi yoki dam olish kunlari mashg'ulotlari uchun" },
        { id: 'tashkent_vil', code: 'B', title: "Tog' tabiati (Bo'stonliq, Chimyon, Humson)", desc: "Toshkentdan 1-1.5 soatlik masofadagi toza tog' etaklari va dam olish zonalari" },
        { id: 'jizzax', code: 'C', title: "Baland tog' archazori (Zomin milliy bog'i)", desc: "2000 metr balandlikdagi beqiyos archazorlar va toza tog' salqini" },
        { id: 'vodiy', code: 'D', title: "Farg'ona vodiysi (Namangan, Farg'ona, Andijon)", desc: "Chortoq, Xonobod, Chimyon shifobaxsh suvlari va zamonaviy sport arenalari" },
        { id: 'samarqand', code: 'E', title: "Samarqand viloyati", desc: "Sport Siti, Registon arenalari va zamonaviy sog'lomlashtirish klublari" }
      ]
    },
    3: {
      title: "3. Kim bilan tashrif buyurasiz?",
      subtitle: "Xizmat shart-sharoitlari va maydon hajmini moslashtirish uchun",
      options: [
        { id: 'team', code: 'I', title: "Do'stlar yoki hamkasblar jamoasi bilan", desc: "Futbol matchi, birgalikda sport yoki jamoaviy SPA relaksatsiya" },
        { id: 'solo', code: 'II', title: "Yakka tartibda", desc: "Individual massaj, erkin suzish mashg'uloti yoki shaxsiy davolanish kursi" },
        { id: 'family', code: 'III', title: "Oila a'zolari va farzandlar bilan", desc: "Xavfsiz basseynlar, bolalar maydonchasi, oilaviy kottejlar va osoyishta hordiq" },
        { id: 'parents', code: 'IV', title: "Ota-onalar va keksalar uchun", desc: "Tinch muhit, shifobaxsh parhez taomlar, 24/7 malakali tibbiy nazorat" }
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
    const need = currentAnswers.needType
    const region = currentAnswers.regionPref

    let scored = sanatoriums.map(item => {
      let score = 65
      let reasons = []

      // Need matching
      if (need === 'football' && item.facilityType === 'football') {
        score += 30
        reasons.push("FIFA standartidagi sun'iy chimli mini-futbol maydoni")
      }
      if (need === 'massage' && item.facilityType === 'massage') {
        score += 30
        reasons.push("Sertifikatlangan tibbiy manual terapiya va umurtqa massaji")
      }
      if (need === 'fitness' && item.facilityType === 'fitness') {
        score += 30
        reasons.push("50 metrli isitiladigan basseyn va zamonaviy trenajyorlar")
      }
      if (need === 'sanatorium_air' && (item.id === 'zomin' || item.id === 'oqtosh' || item.id === 'zaamin_stadium')) {
        score += 30
        reasons.push("Nafas yo'llarini tozalovchi baland tog' archazor havosi")
      }
      if (need === 'sanatorium_joints' && (item.id === 'chortoq' || item.id === 'chimyon' || item.id === 'ibn_sino_massage')) {
        score += 28
        reasons.push("Bo'g'im va umurtqa og'riqlarini qoldiruvchi shifobaxsh muolajalar")
      }
      if (need === 'sanatorium_gastro' && (item.id === 'chinobod' || item.id === 'omonxona')) {
        score += 28
        reasons.push("Ichimlik mineral buloqlari va maxsus parhez")
      }

      // Region matching
      if (region === 'tashkent' && (item.regionKey === 'tashkent' || item.region?.includes('Toshkent sh'))) {
        score += 15
        reasons.push("Poytaxt ichida qulay transport lokatsiyasi")
      }
      if (region === 'tashkent_vil' && item.regionKey === 'tashkent_vil') {
        score += 15
        reasons.push("Tog'oldi toza havoli hududda joylashgan")
      }
      if (region === 'jizzax' && item.regionKey === 'jizzax') {
        score += 15
        reasons.push("Zomin milliy bog'i purviqor tabiat bag'rida")
      }
      if (region === 'samarqand' && item.regionKey === 'samarqand') {
        score += 15
        reasons.push("Samarqand markaziy sport majmualari")
      }
      if (region === 'vodiy' && (item.regionKey === 'namangan' || item.regionKey === 'fargona' || item.regionKey === 'andijon')) {
        score += 15
        reasons.push("Farg'ona vodiysidagi mashhur shifobaxsh maskan")
      }

      return {
        ...item,
        suitabilityScore: Math.min(score, 99),
        reasons: reasons.slice(0, 2)
      }
    })

    scored.sort((a, b) => b.suitabilityScore - a.suitabilityScore)
    setResults(scored.slice(0, 3))
  }

  const restartQuiz = () => {
    setCurrentStep(1)
    setAnswers({ needType: null, regionPref: null, party: null })
    setResults(null)
  }

  return (
    <section className="quiz-section" id="quiz" style={{ padding: '3.5rem 0', background: 'var(--bg-canvas)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tagline">
            <span className="tagline-dot"></span>
            AQLLI TAVSIYA TIZIMI
          </span>
          <h2 className="heading-editorial">Sizga Ayni Damda Qaysi Maskan Eng Mos?</h2>
          <p className="section-subtitle">
            Sport, futbol, terapevtik massaj yoki sanatoriya — 3 ta savolga javob bering va sizga eng to'g'ri keladigan maskanni aniqlang
          </p>
        </div>

        {/* Quiz Container Box */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '24px',
            padding: '2rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
          }}
        >
          {!results ? (
            <div>
              {/* Progress Steps Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {[1, 2, 3].map(stepNum => (
                    <div
                      key={stepNum}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: currentStep >= stepNum ? 'var(--dark-capsule)' : 'var(--bg-subtle)',
                        color: currentStep >= stepNum ? '#FFFFFF' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 700
                      }}
                    >
                      {stepNum}
                    </div>
                  ))}
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                    Bosqich {currentStep} / 3
                  </span>
                </div>

                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
                  >
                    ← Ortga
                  </button>
                )}
              </div>

              {/* Step Title */}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                {stepsData[currentStep].title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {stepsData[currentStep].subtitle}
              </p>

              {/* Step Options Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {stepsData[currentStep].options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      const field = currentStep === 1 ? 'needType' : currentStep === 2 ? 'regionPref' : 'party'
                      handleSelectOption(field, opt.id)
                    }}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '16px',
                      padding: '1rem 1.25rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--text-primary)'
                      e.currentTarget.style.background = 'var(--bg-card)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      e.currentTarget.style.background = 'var(--bg-subtle)'
                    }}
                  >
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.76rem',
                        color: 'var(--text-primary)',
                        flexShrink: 0
                      }}
                    >
                      {opt.code}
                    </span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                        {opt.title}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                        {opt.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--accent-lavender-subtle)',
                    color: 'var(--accent-lavender-dark)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.5rem'
                  }}
                >
                  <IconTarget size={28} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  Sizga Eng Mos Topilgan 3 Ta Maskan
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Siz tanlagan ehtiyoj va mezonlar bo'yicha sun'iy intellekt tahlili natijasi
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {results.map((res, idx) => (
                  <div
                    key={res.id}
                    style={{
                      border: idx === 0 ? '2px solid var(--dark-capsule)' : '1px solid var(--border-card)',
                      borderRadius: '16px',
                      padding: '1.15rem',
                      background: idx === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <img
                        src={res.image}
                        alt={res.name}
                        style={{ width: '80px', height: '65px', borderRadius: '12px', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                            {res.name}
                          </span>
                          <span
                            style={{
                              background: '#10B981',
                              color: '#FFFFFF',
                              fontSize: '0.66rem',
                              fontWeight: 800,
                              padding: '0.15rem 0.5rem',
                              borderRadius: '9999px'
                            }}
                          >
                            {res.suitabilityScore}% mos
                          </span>
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          {res.region} • {res.priceFormatted} {res.priceUnit || (res.facilityType === 'football' ? '/ soat' : res.facilityType === 'massage' ? '/ seans' : '/ kun')}
                        </div>
                        {res.reasons && res.reasons.length > 0 && (
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#059669', fontWeight: 600, marginTop: '0.25rem' }}>
                            <IconCheck size={13} color="#059669" />
                            <span>{res.reasons.join(' • ')}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => onOpenDetailsModal(res)}
                        className="btn-outline-pill"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
                      >
                        Batafsil
                      </button>
                      <button
                        onClick={() => onOpenBookingModal(res)}
                        className="btn-dark-pill"
                        style={{ padding: '0.4rem 0.95rem', fontSize: '0.78rem' }}
                      >
                        Band Qilish
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
                <button
                  onClick={restartQuiz}
                  className="btn-outline-pill"
                  style={{ padding: '0.55rem 1.35rem', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                >
                  <IconRefresh size={14} />
                  <span>Qaytadan test topshirish</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
