/**
 * SihatMaskan & Sport — O'zbekistonning Yetakchi Sanatoriylari, Futbol Maydonlari,
 * Massaj & SPA Maskanlari hamda Sport Majmualari Yagona Ma'lumotlar Bazasi.
 * Har bir maskan o'zining alohida, takrorlanmas, real yuqori aniqlikdagi fotosuratlariga ega.
 */

export const SANATORIUMS_DATA = [
  // ==========================================================================
  // 1. FUTBOL & SPORT MAYDONLARI
  // ==========================================================================
  {
    id: "bunyodkor_arena",
    name: "Bunyodkor Sport & Futbol Arena",
    tagline: "FIFA Quality sun'iy qoplamali mini-futbol maydonlari va professional sport majmuasi",
    region: "Toshkent shahri",
    regionKey: "tashkent",
    location: "Toshkent sh., Chilonzor tumani, Bunyodkor shox ko'chasi 47",
    coords: [41.2825, 69.2155],
    price: 160000,
    priceFormatted: "160 000 so'm",
    priceUnit: "/ soat",
    rating: 4.9,
    reviewsCount: 382,
    image: "assets/images/bunyodkor_cover.jpg",
    gallery: [
      "assets/images/bunyodkor_bench.jpg",
      "assets/images/bunyodkor_night.jpg"
    ],
    badge: "FIFA Standart",
    badgeType: "featured",
    discount: "Tungi chegirma",
    categories: ["popular", "football", "sports"],
    facilityType: "football",
    altitude: "480 m",
    climate: "Yopiq va ochiq havodagi zamonaviy stadion muhiti",
    specialties: [
      "Mini-futbol va futzal o'yinlari (6x6 va 8x8)",
      "Kechki professional yoritish ostidagi matchlar",
      "Korporativ do'stona chempionatlar va turnirlar",
      "Sportchi jismoniy chidamliligini oshirish va kardio"
    ],
    amenities: [
      "FIFA Pro sertifikatli 50mm sun'iy chim",
      "1000 Lux kuchli LED projektorlar",
      "Issiq suvli shinam dush va kiyinish xonalari",
      "To'plar va raqamli jiletkalar bepul",
      "Tribunalar va muxlislar uchun o'rindiqlar",
      "Fitobar, izotonik ichimliklar va sport qahvaxonasi",
      "80+ avtomobil uchun 24/7 qo'riqlanadigan parkovka"
    ],
    advantages: [
      "Poytaxtning qulay markaziy lokatsiyasi, metro va transportga yaqin",
      "Bo'g'im va tizzalarga ortiqcha yuk tushirmaydigan amortizatsiyali eng so'nggi chim",
      "Hakamlar xizmati va do'stona jamoalar uchun turnirlar tashkil qilish imkoniyati"
    ],
    description: "Bunyodkor Sport & Futbol Arena — haftalik jismoniy faollik va do'stlar bilan mini-futbol o'ynash uchun Toshkentdagi eng nufuzli majmualardan biridir. Oliy sifatli yoritish tizimi kechki soatlarda ham kunduzgidek qulay o'yin sharoitini yaratadi. Har bir o'yindan so'ng toza dush va sport barida tetiklanish mumkin.",
    rooms: [
      { name: "Kunduzgi soatlar (08:00 - 18:00)", price: 130000, desc: "1 soatlik maydon ijarasi, kiyinish xonasi, dush, to'p va jiletkalar kiritilgan" },
      { name: "Kechki Prime-Time (18:00 - 00:00)", price: 160000, desc: "Kechki kuchli LED yoritish ostida 1 soatlik o'yin, barcha qulayliklar bilan" },
      { name: "Tungi soatlar (00:00 - 04:00)", price: 140000, desc: "Sokin tungi o'yinlar uchun maxsus chegirmali tarif" },
      { name: "Oylik Korporativ Paket (8 ta o'yin)", price: 1150000, desc: "Haftada 2 marta qat'iy vaqt band qilish, hakam ta'minoti va kubok taxtasi" }
    ],
    includedInPrice: [
      "To'liq professional maydon va to'rlar",
      "Individual shkaflarga ega kiyinish xonasi va dush",
      "Rasmiy o'yin to'plari (Select/Nike) va rangli jiletkalar",
      "Avtomobil uchun bepul qo'riqlanadigan turargoh"
    ],
    contraindications: "O'tkir jarohatlar, sinishlar, yurak faoliyatining o'tkir yetishmovchiligi.",
    phone: "+998 (90) 800-11-22"
  },
  {
    id: "zaamin_stadium",
    name: "Zomin Tog' Bag'ri Sport Majmuasi",
    tagline: "1800m balandlikdagi toza archazor tog' havosi, tabiiy chimli stadion va kottejlar",
    region: "Jizzax viloyati",
    regionKey: "jizzax",
    location: "Zomin milliy bog'i, sanatoriya majmuasiga tutash hudud",
    coords: [39.6360, 68.5200],
    price: 140000,
    priceFormatted: "140 000 so'm",
    priceUnit: "/ soat",
    rating: 5.0,
    reviewsCount: 248,
    image: "assets/images/zaamin_stadium_cover.jpg",
    gallery: [
      "assets/images/zaamin_track.jpg",
      "assets/images/zaamin_field.jpg"
    ],
    badge: "Tog' Bag'rida",
    badgeType: "featured",
    discount: "Sport & Oila",
    categories: ["popular", "football", "sports", "mountain"],
    facilityType: "football",
    altitude: "1 800 m",
    climate: "Kislorodga boy archazor havosi, tog' salqini",
    specialties: [
      "O'pka va nafas yo'llarini sport orqali tabiiy chiniqtirish",
      "Tabiiy chimli stadionda mini-futbol va voleybol",
      "Professional sport jamoalari uchun tog' yig'inlari",
      "Dam olish kunlari oilaviy va do'stona matchlar"
    ],
    amenities: [
      "Tabiiy tog' chimi va yozgi mini-maydon",
      "Archazorlar oralab ketgan terrenkur va yugurish yo'laklari",
      "Dush va sauna majmuasi",
      "Tog' buloq suvi va fitobar",
      "Shinam yog'och kottejlar bilan birlashgan hudud"
    ],
    advantages: [
      "Dengiz sathidan 1800 metr balandlikdagi beqiyos archa fitonsidlariga to'la havo",
      "Futbol o'ynash barobarida butun organizmning kislorod bilan chuqur to'yinishi",
      "O'yindan so'ng Zomin sanatoriyasining sauna va tabiiy buloqlaridan foydalanish qulayligi"
    ],
    description: "Zomin Tog' Bag'ri Arenasi — sport va dam olishni tabiat bilan uyg'unlashtirgan noyob majmua. Bu yerda tog' havosi ostida futbol o'ynash nafaqat jismoniy tetiklik, balki nafas a'zolari va immunitetni kuchaytirishda ulkan terapevtik samara beradi.",
    rooms: [
      { name: "Standart mini-maydon (1 soat)", price: 140000, desc: "Sun'iy va tabiiy chimli mini-futbol maydoni, tog' manzarasi bilan" },
      { name: "Katta stadion (1 soat)", price: 280000, desc: "11x11 formatidagi tabiiy chimli katta futbol stadioni" },
      { name: "Sport & Kottej kunlik paket", price: 650000, desc: "4 kishilik yog'och kottej + 2 soat futbol maydoni + sauna" }
    ],
    includedInPrice: [
      "Maydon va projektor chiroqlari",
      "Tog' bulog'idan toza ichimlik suvi",
      "Kiyinish xonasi va dush",
      "Sport to'plari"
    ],
    contraindications: "Og'ir astma xuruji, o'tkir infarkt davri.",
    phone: "+998 (78) 120-40-25"
  },
  {
    id: "registan_sport",
    name: "Registon Sport Siti & Mini-Futbol",
    tagline: "Samarqand markazidagi yopiq va ochiq professional maydonlar, dush va fitobar",
    region: "Samarqand viloyati",
    regionKey: "samarqand",
    location: "Samarqand sh., Gagarin ko'chasi, Sport Siti majmuasi",
    coords: [39.6542, 66.9597],
    price: 150000,
    priceFormatted: "150 000 so'm",
    priceUnit: "/ soat",
    rating: 4.8,
    reviewsCount: 290,
    image: "assets/images/registan_sport_cover.jpg",
    gallery: [
      "assets/images/registan_indoor.jpg",
      "assets/images/registan_court.jpg"
    ],
    badge: "Samarqand Markazi",
    badgeType: "featured",
    discount: "Abonement chegirma",
    categories: ["popular", "football", "sports"],
    facilityType: "football",
    altitude: "710 m",
    climate: "Mo''tadil shahar sport mikroiqlimi",
    specialties: [
      "Yopiq va ochiq mini-futbol matchlari (har qanday ob-havoda)",
      "Haftalik havaskorlar ligasi va kuboklar",
      "Bolalar va o'smirlar futbol seksiyasi",
      "Mashg'ulotdan keyingi sauna va massaj"
    ],
    amenities: [
      "3 ta zamonaviy mini-futbol maydoni",
      "Belgiya sifatli monofilament sun'iy chim",
      "Yopiq isitiladigan manej maydoni (qish mavsumi uchun)",
      "Shaxsiy dush kabinalari va lokerlar",
      "Sport kafe va televizion translyatsiyalar zali"
    ],
    advantages: [
      "Yozda salqin, qishda esa yopiq isitiladigan qulay manej",
      "Professional darajadagi yumshoq qoplama va elastik to'rlar",
      "Doimiy jamoalar uchun maxsus chegirmali abonementlar"
    ],
    description: "Registon Sport Siti — Samarqanddagi futbol ixlosmandlari va sportsevarlar uchun eng sevimli markaz. Shaharning barcha nuqtalaridan yetib kelish qulay, maydon qoplamasi esa yevropa standartlariga to'la mos keladi.",
    rooms: [
      { name: "Ochiq maydon (1 soat)", price: 150000, desc: "Full LED projektorli ochiq havodagi maydon" },
      { name: "Yopiq isitiladigan manej (1 soat)", price: 190000, desc: "Yomg'ir va sovuqdan himoyalangan qulay yopiq arena" },
      { name: "Haftalik jamoa abonementi (1 oy)", price: 1100000, desc: "8 ta kechki o'yin kafolatlangan vaqt bilan" }
    ],
    includedInPrice: [
      "Maydon va yoritish tizimi",
      "Kiyinish xonasi, dush va lokerlar",
      "To'p va jiletkalar to'plami"
    ],
    contraindications: "Yangi olingan oyoq jarohatlari, surunkali yurak yetishmovchiligi.",
    phone: "+998 (66) 234-55-66"
  },
  {
    id: "fergana_arena",
    name: "Vodiy Grand Arena Sport Majmuasi",
    tagline: "Farg'onadagi zamonaviy universal sport maydoni, mini-futbol, dush va sauna",
    region: "Farg'ona viloyati",
    regionKey: "fargona",
    location: "Farg'ona sh., Al-Farg'oniy xiyoboni yaqinida",
    coords: [40.3842, 71.7843],
    price: 130000,
    priceFormatted: "130 000 so'm",
    priceUnit: "/ soat",
    rating: 4.8,
    reviewsCount: 195,
    image: "assets/images/fergana_arena_cover.jpg",
    gallery: [
      "assets/images/fergana_pitch.jpg",
      "assets/images/fergana_stands.jpg"
    ],
    badge: "Vodiy Tanlovi",
    badgeType: "budget",
    discount: "10% Chegirma",
    categories: ["popular", "football", "sports"],
    facilityType: "football",
    altitude: "580 m",
    climate: "Mo''tadil bog'oldi sport muhiti",
    specialties: [
      "Mini-futbol va do'stona musobaqalar",
      "Sportchi tiklanishi va kardio yuklamalar",
      "Tungi matchlar va sport hordig'i"
    ],
    amenities: [
      "Professional sun'iy chim qoplamasi",
      "Kuchli yoritish tizimi",
      "Yuvinish va kiyinish xonalari",
      "Fin saunasi (alohida buyurtma)",
      "Keng avtoturargoh"
    ],
    advantages: [
      "Vodiy viloyatlari ichida eng hamyonbop va sifatli maydon",
      "Doimiy tozalik va sanitariya qoidalariga qat'iy rioya etilishi",
      "Tungi matchlardan so'ng sauna bilan charchoqni chiqarish imkoni"
    ],
    description: "Vodiy Grand Arena — Farg'ona shahridagi eng mashhur futbol maydonchalaridan biri. Har kuni yuzlab yoshlar va korxona xodimlari sog'lom turmush tarzi yo'lida bu yerda futbol o'ynab, kuch-quvvat to'playdilar.",
    rooms: [
      { name: "Standart soat (1 soat)", price: 130000, desc: "Maydon, yoritish, kiyinish xonasi va dush kiritilgan" },
      { name: "Maydon + 1 soat Sauna paketi", price: 260000, desc: "Futbol o'yinidan so'ng butun jamoa uchun issiq fin saunasi" }
    ],
    includedInPrice: ["Maydon ijarasi", "Dush va kiyinish", "O'yin to'plari"],
    contraindications: "Og'ir surunkali kasalliklarning xuruji davri.",
    phone: "+998 (73) 226-70-80"
  },

  // ==========================================================================
  // 2. MASSAJ & TERAPEVTIK SPA MASKANLARI
  // ==========================================================================
  {
    id: "ibn_sino_massage",
    name: "Ibn Sino Terapevtik Massaj & Manual Markazi",
    tagline: "Umurtqa churrasi (grija), bel-bo'g'im og'riqlari va asabiy zo'riqishni davolovchi tibbiy markaz",
    region: "Toshkent shahri",
    regionKey: "tashkent",
    location: "Toshkent sh., Shayxontohur tumani, Navoiy ko'chasi 24",
    coords: [41.3210, 69.2485],
    price: 180000,
    priceFormatted: "180 000 so'm",
    priceUnit: "/ seans",
    rating: 5.0,
    reviewsCount: 462,
    image: "assets/images/ibn_sino_cover.jpg",
    gallery: [
      "assets/images/ibn_sino_manual.jpg",
      "assets/images/ibn_sino_kedr.jpg"
    ],
    badge: "Tibbiy Sertifikatli",
    badgeType: "premium",
    discount: "Kursga 15% chegirma",
    categories: ["popular", "massage", "joints", "nerve"],
    facilityType: "massage",
    altitude: "480 m",
    climate: "Tinch va osoyishta tibbiy relaksatsiya muhiti",
    specialties: [
      "Umurtqa pog'onasi churrasi (grija) va osteoxondroz davosi",
      "Skolioz, kifoz va qad-qomat egriligini to'g'rilash",
      "Bo'yin-kurak sohasidagi tuz to'planishi va migren bosh og'riqlari",
      "Sport mashg'ulotlaridan keyingi chuqur mushak reabilitatsiyasi",
      "Surunkali asabiy toliqish, stress va uyqusizlikni bartaraf etish"
    ],
    amenities: [
      "Alohida shinam VIP massaj kabinetlari",
      "Erkaklar va ayollar uchun alohida tajribali mutaxassislar",
      "Kedr bochkasi (tabiiy tog' giyohlari bilan bug'lash)",
      "Infraqizil umurtqa isitish va magnitoterapiya apparatlari",
      "Tinchlantiruvchi fitobar (dorivor choylar)",
      "Ortopedik ko'p funksiyali massaj stollari"
    ],
    advantages: [
      "Har bir bemor holatini MRT yoki rentgen tahlillari asosida individual tekshirish",
      "Og'riqsiz yumshoq manual texnikalar orqali birinchi seansdayoq sezilarli yengillik",
      "Tibbiyot fanlari nomzodlari va xalqaro toifadagi massajistlar nazorati"
    ],
    description: "Ibn Sino nomidagi terapevtik massaj markazi — inson umurtqa pog'onasi, suyak-mushak tizimi va asab tugunlarini tabiiy yo'l bilan sog'lomlashtirishga ixtisoslashgan yetakchi markaz. Bu yerda disk churrasi, radikulit, bel qotishi va surunkali stress mutaxassislar tomonidan zamonaviy hamda sharqona uslubda davolanadi.",
    rooms: [
      { name: "Terapevtik davolovchi massaj (60 daqiqa)", price: 180000, desc: "Bel, bo'yin, kurak va umurtqani to'liq davolash seansi va isituvchi malhamlar" },
      { name: "Professional sport massaji (60 daqiqa)", price: 200000, desc: "Mashg'ulotdan so'ng to'plangan sut kislotasini haydash, mushaklar elastikligini tiklash" },
      { name: "Kompleks Manual Terapiya + Kedr bochkasi (90 daqiqa)", price: 280000, desc: "Kedr bug'ida qizdirish, umurtqa traksiyasi (cho'zish) va chuqur nuqtali massaj" },
      { name: "10 kunlik to'liq sog'lomlashtirish kursi", price: 1500000, desc: "Shifokor nazorati ostida 10 ta to'liq seans + fitobar va 15% chegirma" }
    ],
    includedInPrice: [
      "Shifokor-vertebrolog ko'rigi va tashxisi",
      "Tabiiy efir moylari va shifobaxsh malhamlar",
      "Bir martalik gigiyenik choyshab va sochiqlar",
      "Seansdan so'ng dorivor fitobar choyi"
    ],
    contraindications: "Onkologik xastaliklar, faol bosqichdagi o'tkir qon ketishlar, yuqori tana harorati.",
    phone: "+998 (71) 244-10-20"
  },
  {
    id: "lotus_spa_wellness",
    name: "Lotus SPA & Shifobaxsh Relaks Markazi",
    tagline: "Fin saunasi, turk hammomi, gidromassaj va relaksatsiya — to'liq qayta tug'ilish hissi",
    region: "Toshkent viloyati",
    regionKey: "tashkent_vil",
    location: "Bo'stonliq tumani, Chorvoq yo'li bo'yi, tog' daryosi sohili",
    coords: [41.6050, 69.9800],
    price: 220000,
    priceFormatted: "220 000 so'm",
    priceUnit: "/ seans",
    rating: 4.9,
    reviewsCount: 312,
    image: "assets/images/lotus_spa_cover.jpg",
    gallery: [
      "assets/images/lotus_hammam.jpg",
      "assets/images/lotus_jacuzzi.jpg"
    ],
    badge: "SPA & Relaks",
    badgeType: "featured",
    discount: "Juftliklar paketi",
    categories: ["popular", "massage", "spa", "family"],
    facilityType: "massage",
    altitude: "900 m",
    climate: "Tog' daryosi bo'yidagi toza va salqin havo",
    specialties: [
      "Detoks va butun tanani toksinlardan tozalash",
      "Turk xamomi va sharqona kisa-skrab parvarishi",
      "Aromaterapiya va toshlar bilan issiq massaj (Stone therapy)",
      "Surunkali toliqish, migren va asab zo'riqishini yo'qotish"
    ],
    amenities: [
      "Fin saunasi va Rim bug'xonasi",
      "Marmar toshli an'anaviy turk hammomi",
      "Gidromassajli jakuzi va iliq hovuz",
      "Shinam dam olish zallari va kamin",
      "Tabiiy o'simlik choylari va yangi siqilgan sharbatlar"
    ],
    advantages: [
      "Tabiat qo'ynida joylashgan sokin va hashamatli muhit",
      "Tana va ruhiyatni bir vaqtda dam oldiruvchi eng sara SPA marosimlari",
      "Oilaviy va do'stlar davrasida xususiy xona ijarasi imkoni"
    ],
    description: "Lotus SPA — tog' tabiati bag'rida joylashgan premium relaksatsiya maskani. Issiq marmar toshlarda amalga oshiriladigan kisa va ko'pikli massaj, fin saunasi va xushbo'y moylar bilan uqalash insonni og'ir ish haftasidan keyin butunlay yengillashtiradi.",
    rooms: [
      { name: "Klassik SPA Relaks (60 daqiqa)", price: 220000, desc: "Fin saunasi, yengil skrab va xushbo'y moyli umumiy tana massaji" },
      { name: "Sharqona Hammom Marosimi (90 daqiqa)", price: 320000, desc: "Turk hammomi, kisa, ko'pikli massaj, jakuzi va fitobar" },
      { name: "VIP Royal SPA & Massaj (120 daqiqa)", price: 450000, desc: "Issiq vulqon toshlari bilan massaj, kedr bochkasi, yuz parvarishi" }
    ],
    includedInPrice: ["Barcha sauna va hammom xizmatlari", "Xalat, sochiq va shippak", "Dorivor damlama va quritilgan mevalar"],
    contraindications: "O'tkir yuqumli teri kasalliklari, yuqori qon bosimi xuruji.",
    phone: "+998 (71) 205-33-88"
  },
  {
    id: "shifo_nur_massage",
    name: "Shifo Nur Sharqona & Nuqtali Massaj Maskani",
    tagline: "Qadimiy sharqona nuqtali uqalash, parafinoterapiya va umurtqani tiklash maskani",
    region: "Namangan viloyati",
    regionKey: "namangan",
    location: "Namangan sh., Bobur bog'i yaqinida",
    coords: [40.9983, 71.6726],
    price: 150000,
    priceFormatted: "150 000 so'm",
    priceUnit: "/ seans",
    rating: 4.8,
    reviewsCount: 220,
    image: "assets/images/shifo_nur_cover.jpg",
    gallery: [
      "assets/images/shifo_nur_acupressure.jpg",
      "assets/images/shifo_nur_stones.jpg"
    ],
    badge: "Sharq Tabobati",
    badgeType: "budget",
    discount: "Pensionerlarga 10%",
    categories: ["popular", "massage", "joints"],
    facilityType: "massage",
    altitude: "450 m",
    climate: "Tinch va osoyishta maskan",
    specialties: [
      "Nuqtali massaj (Akupressura) va qon aylanishini kuchaytirish",
      "Bel, tizza va yelka bo'g'imlaridagi tuzlarni eritish",
      "Bosh og'rig'i va bo'yin qotishini davolash"
    ],
    amenities: [
      "Shinam xonalar",
      "Parafin-ozokerit isitish stoli",
      "Erkak va ayol ustalar",
      "Giyohli fitobar"
    ],
    advantages: [
      "Tajribali xalq tabobati va zamonaviy nevrologiya uyg'unligi",
      "Hamyonbop narxlar va keksalar uchun alohida g'amxo'rlik",
      "Bo'g'imlardagi harakat cheklanishini tezda ochish"
    ],
    description: "Shifo Nur — Farg'ona vodiysida o'zining mohir massaj ustalari bilan tanilgan markaz. Bo'g'imlardagi og'riqlar, bel qotishi va tana horg'inligi uchun qadimiy tabobat uslublarida samarali muolajalar taqdim etiladi.",
    rooms: [
      { name: "Umumiy sharqona massaj (50 daqiqa)", price: 150000, desc: "Butun tana mushaklarini yozish va bo'g'imlar nuqtali uqalanishi" },
      { name: "Bel va umurtqa massaji + Parafin (60 daqiqa)", price: 190000, desc: "Chuqur qizdirish va nerv ildizlari qisilishi bo'shashtirilishi" }
    ],
    includedInPrice: ["Massaj seansi", "Shifobaxsh giyohli moylar", "Choy"],
    contraindications: "O'tkir yallig'lanish, qon bosimi kritik darajasi.",
    phone: "+998 (69) 232-14-14"
  },

  // ==========================================================================
  // 3. BASSEYN, FITNES & SUV SPORTI MAJMUALARI
  // ==========================================================================
  {
    id: "olimpiya_complex",
    name: "Olimpiya Suv & Zamonaviy Fitnes Majmuasi",
    tagline: "50 metrlik isitiladigan yopiq basseyn, Technogym fitnes zali va professional murabbiylar",
    region: "Toshkent shahri",
    regionKey: "tashkent",
    location: "Toshkent sh., Yunusobod tumani, Amir Temur shox ko'chasi 108",
    coords: [41.3450, 69.2850],
    price: 90000,
    priceFormatted: "90 000 so'm",
    priceUnit: "/ kun",
    rating: 4.9,
    reviewsCount: 520,
    image: "assets/images/olimpiya_pool_cover.jpg",
    gallery: [
      "assets/images/olimpiya_lanes.jpg",
      "assets/images/olimpiya_gym.jpg"
    ],
    badge: "Olimpiya Basseyn",
    badgeType: "featured",
    discount: "Oylik abonement",
    categories: ["popular", "fitness", "sports", "family"],
    facilityType: "fitness",
    altitude: "480 m",
    climate: "Tozalangan va doimiy 28°C haroratdagi suv muhiti",
    specialties: [
      "Suzish orqali umurtqa pog'onasi va nafas tizimini mustahkamlash",
      "Kardio va mushak massasini rivojlantirish trenajyorlari",
      "Ayollar uchun akva-aerobika va suv gimnastikasi",
      "Og'ir jarohatlardan keyingi gidro-reabilitatsiya"
    ],
    amenities: [
      "50 metrli 8 ta yo'lakka ega isitiladigan yopiq basseyn",
      "Technogym so'nggi avlod trenajyor zallari",
      "Fin saunasi, turk xamomi va dam olish zonasi",
      "Shaxsiy sertifikatlangan instruktorlar ko'magi",
      "Bolalar uchun maxsus sayoz basseyn va suzish maktabi",
      "Protein va fitobar (vitaminli kokteyllar)"
    ],
    advantages: [
      "Suvni xlor hidisiz tozalovchi zamonaviy ozonlash va ultrabinafsha filtrlash tizimi",
      "Professional suzish yo'laklari va erkin mashg'ulotlar uchun keng maydon",
      "Fitnes, basseyn va saunaning bir joyda mujassamligi"
    ],
    description: "Olimpiya Suv & Fitnes Majmuasi — sog'lom turmush tarzini sevuvchilar uchun poytaxtdagi eng yirik maskanlardan biridir. Suzish — insonning barcha mushak guruhlarini birdek ishlatuvchi, bo'g'imlarga ziyon yetkazmaydigan yagona sport turidir. Majmuada barcha yoshdagilar uchun qulay sharoit yaratilgan.",
    rooms: [
      { name: "1 kunlik erkin tashrif (Basseyn + Zal + Sauna)", price: 90000, desc: "Cheklovsiz vaqt davomida basseyn, trenajyor zali va saunadan foydalanish" },
      { name: "Oylik to'liq abonement (12 ta tashrif)", price: 650000, desc: "Basseyn, barcha trenajyorlar va murabbiyning ertalabki yo'riqnomasi" },
      { name: "VIP Yillik Cheksiz Karta", price: 5500000, desc: "Yil davomida 24/7 erkin kirish, shaxsiy shkafcha, sochiq va massajga 20% chegirma" }
    ],
    includedInPrice: ["Basseyn yo'laklari", "Trenajyorlar zali", "Fin saunasi", "Issiq dush va loker"],
    contraindications: "Yuqumli teri xastaliklari, ochiq yaralar, quloq parda yallig'lanishi.",
    phone: "+998 (71) 235-90-90"
  },
  {
    id: "titan_fit_club",
    name: "Titan Gym & Recovery Wellness Club",
    tagline: "Samarqanddagi eng katta fitnes, krioteraqiya va sport reabilitatsiyasi zali",
    region: "Samarqand viloyati",
    regionKey: "samarqand",
    location: "Samarqand sh., Universitet xiyoboni 14",
    coords: [39.6580, 66.9650],
    price: 80000,
    priceFormatted: "80 000 so'm",
    priceUnit: "/ kun",
    rating: 4.8,
    reviewsCount: 310,
    image: "assets/images/titan_gym_cover.jpg",
    gallery: [
      "assets/images/titan_cardio.jpg",
      "assets/images/titan_weights.jpg"
    ],
    badge: "Fitnes & Gym",
    badgeType: "featured",
    discount: "Talabalar 20%",
    categories: ["popular", "fitness", "sports"],
    facilityType: "fitness",
    altitude: "710 m",
    climate: "Konditsionerlangan toza sport zali",
    specialties: [
      "Kardio mashg'ulotlar va ortiqcha vazn yo'qotish (detoks)",
      "Kuch mashqlari va qad-qomat korreksiyasi",
      "Krioteraqiya va mushaklar regeneratsiyasi",
      "Shaxsiy fitnes taomnoma tuzish"
    ],
    amenities: [
      "1200 kv.m kenglikdagi yorug' mashg'ulot zali",
      "Zamonaviy yugurish yo'laklari va velotrenajyorlar",
      "Quruq fin saunasi",
      "Sport ovqatlanishi va fitobar"
    ],
    advantages: [
      "Keng zallar, tirbandliksiz mashg'ulot o'tkazish imkoniyati",
      "Tajribali murabbiylar tomonidan individual mashqlar dasturi tuzilishi",
      "Mashg'ulotdan so'ng saunada qon aylanishini tiklash"
    ],
    description: "Titan Gym — sog'lom, kuchli va baquvvat bo'lishni xohlovchilar uchun Samarqanddagi premium sport klubi. Erkaklar va ayollar uchun qulay zonalar, zamonaviy uskunalar va jo'shqin musiqiy muhit sizga har mashg'ulotda zavq ulashadi.",
    rooms: [
      { name: "1 kunlik kirish chiptasi", price: 80000, desc: "Trenajyor zali, kardiomashinalar, sauna va dush" },
      { name: "1 oylik erkin abonement (cheksiz)", price: 550000, desc: "O'zingizga qulay har qanday vaqtda zalga kelish imkoni" }
    ],
    includedInPrice: ["Trenajyorlar", "Kiyinish xonasi", "Sauna va dush"],
    contraindications: "Yurak anevrizmasi, o'tkir churra yorilishi xavfi.",
    phone: "+998 (66) 210-44-55"
  },

  // ==========================================================================
  // 4. SANATORIYLAR & TIBBIY SIHATGOHLAR
  // ==========================================================================
  {
    id: "zomin",
    name: "Zomin Sanatoriysi",
    tagline: "O'zbekiston Shveytsariyasi — Toza archazor tog' havosi va asab-nafas yo'llari davosi",
    region: "Jizzax viloyati",
    regionKey: "jizzax",
    location: "Zomin milliy tabiiy bog'i, Turkiston tog' tizmasi, 2000m balandlik",
    coords: [39.6385, 68.5147],
    price: 480000,
    priceFormatted: "480 000 so'm",
    priceUnit: "/ kun",
    rating: 4.9,
    reviewsCount: 348,
    image: "assets/images/zomin_resort_cover.jpg",
    gallery: [
      "assets/images/zomin_hero_view.jpg",
      "assets/images/zomin_alpine_path.jpg"
    ],
    badge: "Top Tanlov",
    badgeType: "featured",
    discount: "10% Chegirma",
    categories: ["popular", "mountain", "family", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "2 000 m",
    climate: "Tog' iqlimi, archazor fitonsidlari, toza kislorod",
    specialties: [
      "Nafas olish a'zolari (surunkali bronxit, bronxial astma)",
      "Asab tizimi funksional buzilishlari",
      "Allergik holatlar va immunitet pasayishi",
      "Umumiy horg'inlik va stressni yo'qotish"
    ],
    amenities: [
      "Yopiq suzish havzasi",
      "Tuz g'ori (Speleoterapiya)",
      "3 mahal parhez taom",
      "Fin saunasi va turk hammomi",
      "Fitobar va shifobaxsh choylar",
      "Wi-Fi internet",
      "Zamonaviy fizioterapiya",
      "Terrenkur (tog' yo'laklari)",
      "Bolalar maydonchasi"
    ],
    advantages: [
      "Dengiz sathidan 2000 metr balandlikdagi archa fitonsidlariga to'yingan beqiyos tog' havosi",
      "Toshkent tibbiyot akademiyasi mutaxassislari tomonidan tasdiqlangan maxsus reabilitatsiya dasturi",
      "Zamonaviy shinam kottejlar, shifobaxsh tuz g'ori va qulay oilaviy dam olish muhiti"
    ],
    description: "Zomin sanatoriysi — O'zbekistonning eng mashhur va xushmanzara iqlimiy kurortlaridan biridir. Zomin tog'larining archazor o'rmonlari havoni tabiiy tozalab, fitonsidlar bilan boyitadi. Bu yerda surunkali bronxit, astma, o'pka kasalliklari va asab tizimi toliqishi ajoyib tarzda davolanadi.",
    rooms: [
      { name: "Standart (2 kishilik)", price: 480000, desc: "Shinam xona, televizor, dush, tog' manzarasi, 3 mahal ovqat va davolash kiritilgan" },
      { name: "Yarim Lyuks", price: 620000, desc: "Kengaytirilgan xona, konditsioner, yumshoq mebellar, vanna, shaxsiy balkon" },
      { name: "Lyuks Suite", price: 780000, desc: "2 xonali zamonaviy lyuks, panoramik tog' ko'rinishi, mini-bar, premium qulayliklar" },
      { name: "Oilaviy Eko-Kottej", price: 1100000, desc: "Tabiiy yog'ochdan qurilgan shinam 4 kishilik kottej, shaxsiy hovli va terassa" }
    ],
    includedInPrice: [
      "Shifokor-terapevt va tor soha mutaxassislari ko'rigi",
      "Kuniga 3 mahal tabiiy parhez taomnoma",
      "Tuz g'ori, ingalyatsiya va kardiomonitoring",
      "Yopiq isitiladigan basseyn va sauna",
      "Ertalabki badantarbiya va shifobaxsh fitobar choylari"
    ],
    contraindications: "Yurak yetishmovchiligining og'ir bosqichlari, faol bosqichdagi sil kasalligi, yuqumli o'tkir xastaliklar.",
    phone: "+998 (78) 120-40-20"
  },
  {
    id: "chortoq",
    name: "Chortoq Sanatoriysi",
    tagline: "Mo''jizaviy shifobaxsh yod-bromli mineral suvlar va bo'g'im-harakat maskani",
    region: "Namangan viloyati",
    regionKey: "namangan",
    location: "Chortoq tumani, Chortoqsoy daryosi yoqasi, Namangan",
    coords: [41.0664, 71.8159],
    price: 420000,
    priceFormatted: "420 000 so'm",
    priceUnit: "/ kun",
    rating: 4.8,
    reviewsCount: 412,
    image: "assets/images/chortoq_mineral_cover.jpg",
    gallery: [
      "assets/images/chortoq_spring.jpg",
      "assets/images/chortoq_park_trees.jpg"
    ],
    badge: "Mineral Buloq",
    badgeType: "mineral",
    discount: "15% Chegirma",
    categories: ["popular", "mineral", "joints", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "650 m",
    climate: "Mo''tadil vodiy iqlimi, daryo bo'yi salqini",
    specialties: [
      "Harakat va tayanch a'zolari (artrit, artroz, osteoxondroz)",
      "Oshqozon-ichak trakti va jigar-o't yo'llari xastaliklari",
      "Periferik asab tizimi kasalliklari (radikulit, nevrit)",
      "Teri xastaliklari (psoriaz, ekzema remissiya davri)"
    ],
    amenities: [
      "Termal mineral vannalar",
      "Gidromassaj va jakuzi",
      "Shifobaxsh balchiq (loy) bilan davolash",
      "Yopiq va ochiq suzish havzasi",
      "3 mahal vitaminlarga boy parhez taom",
      "Mineral suv ichish galereyasi",
      "Laboratoriya va ultratovush diagnostikasi",
      "Fitnes zali va stol tennisi",
      "Wi-Fi internet"
    ],
    advantages: [
      "Tarkibida yod, brom va xlorid-natriy bo'lgan tabiiy issiq mineral suv buloqlari",
      "Bo'g'imlardagi og'riqlarni qisqa muddatda yengillashtiruvchi professional balchiq va vanna terapiyasi",
      "Go'zal gullar xiyoboni, soy bo'yidagi qulay dam olish maskanlari va xushmuomala xodimlar"
    ],
    description: "Chortoq — O'zbekistonning eng qadimiy va sinalgan balneologik kurortlaridan biri. Bu yerdagi termal yod-bromli mineral suvlar bo'g'im, umurtqa pog'onasi, jigar va oshqozon-ichak xastaliklarida beqiyos shifobaxsh ta'sirga ega. Sanatoriyada qulay sharoitlar va zamonaviy tibbiy korpus faoliyat yuritadi.",
    rooms: [
      { name: "Standart (2 kishilik)", price: 420000, desc: "Shinam xona, barcha qulayliklar, vanna/dush, 3 mahal ovqat va to'liq muolajalar" },
      { name: "Yarim Lyuks", price: 540000, desc: "Yangi ta'mirdan chiqqan, televizor, muzlatgich, yumshoq krovatlar" },
      { name: "Lyuks", price: 710000, desc: "Keng yotoqxona va mehmonxona, konditsioner, daryo ko'rinishi, fitobar xizmati" }
    ],
    includedInPrice: [
      "Mineral vannalar va mineral suv ichish kursi",
      "Shifobaxsh loy (parafin-ozokerit) applikatsiyalari",
      "3 mahal parhez stoli (dietoterapiya)",
      "Gidromassaj va dush-massaj muolajalari",
      "EKG va shifokor doimiy nazorati"
    ],
    contraindications: "Onkologik kasalliklar, qon ketishga moyillik, homiladorlikning barcha davrlari.",
    phone: "+998 (69) 412-15-20"
  },
  {
    id: "chinobod",
    name: "Chinobod Sanatoriysi",
    tagline: "Oshqozon-ichak, gepatologiya va qandli diabet bo'yicha poytaxtdagi yetakchi balneologik markaz",
    region: "Toshkent shahri",
    regionKey: "tashkent",
    location: "Toshkent sh., Yunusobod tumani, Chinobod ko'chasi",
    coords: [41.3653, 69.3142],
    price: 390000,
    priceFormatted: "390 000 so'm",
    priceUnit: "/ kun",
    rating: 4.7,
    reviewsCount: 295,
    image: "assets/images/chinobod_gastro_cover.jpg",
    gallery: [
      "assets/images/chinobod_park.jpg",
      "assets/images/chinobod_clinic.jpg"
    ],
    badge: "Hamyonbop & Sifatli",
    badgeType: "budget",
    discount: "5% Chegirma",
    categories: ["popular", "mineral", "gastro", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "480 m",
    climate: "Mo''tadil shahar park iqlimi, manzarali dendropark",
    specialties: [
      "Oshqozon va o'n ikki barmoqli ichak yaralari (remissiya)",
      "Surunkali gastrit, kolit va xoletsistit",
      "Qandli diabet va modda almashinuvi buzilishi",
      "Jigar va o't yo'llari xastaliklari"
    ],
    amenities: [
      "Xlorid-gidrokarbonatli termal mineral suv",
      "Oshqozon-ichakni chuqur yuvish xonalari",
      "Zamonaviy biokimyoviy laboratoriya",
      "Ultratovush va endoskopiya tekshiruvi",
      "3 mahal individual parhez taomnoma",
      "Yashil soya-salqin botanika bog'i",
      "Kutubxona va madaniyat saroyi",
      "Wi-Fi internet hududi"
    ],
    advantages: [
      "Toshkent markaziga juda yaqin — qulay transport va shahar shovqinidan xoli yashil dendropark",
      "Respublikaning eng yaxshi gastroenterolog va gepatolog shifokorlari jamoasi",
      "Arzon va barcha uchun hamyonbop narxlar, yuqori sifatli statsionar davolash"
    ],
    description: "Chinobod sanatoriysi — Toshkent shahrining shinam go'shasida joylashgan ixtisoslashtirilgan balneologik muassasa. Asosiy davolovchi omili — yer qa'ridan chiquvchi termal kam minerallashgan xlorid-gidrokarbonatli natriyli mineral suvidir. Oshqozon, o't pufagi va diabetda eng samarali natijalarni beradi.",
    rooms: [
      { name: "Standart (2 kishilik)", price: 390000, desc: "Shinam 2 kishilik xona, dush, sanitariya tarmog'i, 3 mahal parhez ovqat" },
      { name: "Standart 1 kishilik", price: 470000, desc: "Yolg'iz dam oluvchilar uchun qulay va sokin xona" },
      { name: "Yarim Lyuks", price: 530000, desc: "Televizor, sovutgich, yumshoq mebel, yangilangan interyer" },
      { name: "Lyuks", price: 680000, desc: "2 xonali alohida kvartira tipidagi lyuks, konditsioner, xizmat ko'rsatish" }
    ],
    includedInPrice: [
      "Shifokor-gastroenterolog ko'rigi va tashxis",
      "Mineral suv ichish va ichaklarni tozalash",
      "3 mahal maxsus diabetik yoki me'da-ichak parhezi",
      "Fizioterapevtik muolajalar (magnit, elektroforez)",
      "Ignasanchish va massaj seanslari"
    ],
    contraindications: "Oshqozon yarasining xuruj qilishi, qon ketish holatlari, o'tkir infarkt davri.",
    phone: "+998 (71) 212-30-00"
  },
  {
    id: "humson",
    name: "Humson Buloq Wellness Majmuasi",
    tagline: "5 yulduzli premium sog'lomlashtirish, SPA va tog' tabiatining uyg'unligi",
    region: "Toshkent viloyati",
    regionKey: "tashkent_vil",
    location: "Bo'stonliq tumani, Humson qishlog'i, Ugom daryosi sohili",
    coords: [41.6111, 70.0244],
    price: 690000,
    priceFormatted: "690 000 so'm",
    priceUnit: "/ kun",
    rating: 5.0,
    reviewsCount: 520,
    image: "assets/images/humson_buloq_cover.jpg",
    gallery: [
      "assets/images/humson_river.jpg",
      "assets/images/humson_spa_pool.jpg"
    ],
    badge: "Premium 5★",
    badgeType: "premium",
    discount: "Maxsus Taklif",
    categories: ["popular", "mountain", "family", "cardio", "spa", "sports", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "1 100 m",
    climate: "Ugom daryosi bo'yidagi toza tog' havosi, salqin shabada",
    specialties: [
      "Yurak-qon tomir tizimi sog'lomlashtirish",
      "Detoks, vazn tashlash va organizmni tozalash",
      "Umurtqa pog'onasi va bo'g'im reabilitatsiyasi",
      "Surunkali stress va charchoq sindromi (Burnout)"
    ],
    amenities: [
      "Katta yopiq va ochiq isitiladigan basseynlar",
      "Fin saunasi, Rus bug'xonasi, Turk xamomi",
      "Restoran darajasidagi 4 mahal shved stoli",
      "SPA kapsulasi, gidromassaj va fitobar",
      "Tennis korti, futbol va voleybol maydoni",
      "Bolalar akvaparki va o'yin xonalari",
      "Kinozal va kechki madaniy dasturlar",
      "Yuqori tezlikdagi Wi-Fi va biznes konferens zal"
    ],
    advantages: [
      "Yevropa darajasidagi 5 yulduzli servis, hashamatli xonalar va shaxsiy shifokor nazorati",
      "Ugom daryosining shovillab oqishi va tog' bag'ridagi toza kislorod maskani",
      "Shved stoli formatidagi mazali va sog'lom parhez taomlar hamda boy SPA majmuasi"
    ],
    description: "Humson Buloq — O'zbekistondagi eng nufuzli va yuqori darajadagi kurort-sog'lomlashtirish majmualaridan biridir. Bu yerda siz nafaqat yuqori texnologiyali tibbiy davolanish, balki premium dam olish, SPA muolajalari va sport bilan faol shug'ullanish imkoniyatiga ega bo'lasiz.",
    rooms: [
      { name: "Standart Twin/King", price: 690000, desc: "Zamonaviy shinam xona, ortopedik to'shak, dush, balkon, 4 mahal taom" },
      { name: "Deluxe Mountain View", price: 890000, desc: "Tog' manzarali keng xona, smart TV, kofe mashina, SPA bepul kirish" },
      { name: "VIP Suite", price: 1250000, desc: "Hashamatli 2 xonali suit, jakuzi, xususiy terassa, shaxsiy konsyerj" },
      { name: "Chalet Kottej", price: 1800000, desc: "Butun oila uchun mo'ljallangan ikki qavatli hashamatli shaxsiy eko-kottej" }
    ],
    includedInPrice: [
      "Barcha tor mutaxassislar konsultatsiyasi va kardiologiya",
      "4 mahal boyitilgan shved stoli (shifobaxsh va parhez taomlar)",
      "Barcha basseynlar, saunalar va turk hammomi",
      "Tuz xonasi, kislorodli kokteyllar va fitobar",
      "Sport maydonchalari va bolalar xizmatlari"
    ],
    contraindications: "Har qanday kasallikning o'tkir dekompensatsiya bosqichi, yuqumli xastaliklar.",
    phone: "+998 (71) 200-22-44"
  },
  {
    id: "oqtosh",
    name: "Oqtosh Sanatoriysi",
    tagline: "Nafas yo'llari va bronxlar uchun tabiiy shifobaxsh yong'oqzor tog' iqlimi",
    region: "Toshkent viloyati",
    regionKey: "tashkent_vil",
    location: "Bo'stonliq tumani, Oqtosh daryosi vodiysi, 1200m balandlik",
    coords: [41.5972, 69.8322],
    price: 460000,
    priceFormatted: "460 000 so'm",
    priceUnit: "/ kun",
    rating: 4.8,
    reviewsCount: 380,
    image: "assets/images/oqtosh_mountain_cover.jpg",
    gallery: [
      "assets/images/oqtosh_river.jpg",
      "assets/images/oqtosh_alpine_air.jpg"
    ],
    badge: "O'pka & Nafas",
    badgeType: "featured",
    discount: "8% Chegirma",
    categories: ["popular", "mountain", "family", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "1 200 m",
    climate: "Oqtosh vodiysining mo''jizaviy kislorodli havosi, yong'oqzorlar",
    specialties: [
      "Nafas olish tizimi nospesifik kasalliklari (astma, bronxit)",
      "Allergik rinit va polinozlar",
      "COVID-19 dan keyingi o'pka reabilitatsiyasi",
      "Asab tizimi funksional zo'riqishlari"
    ],
    amenities: [
      "Eng zamonaviy galokamera (tuz g'ori)",
      "Dori-darmonsiz tabiiy iqlimoterapiya",
      "Yopiq suzish havzasi",
      "Ignalar bilan davolash (akupunktura)",
      "3 mahal vitaminlarga boy parhez taom",
      "Tog' terrenkur piyoda yo'llari",
      "Bolalar uchun maxsus shifokor-pediatr",
      "Shinam yozgi terassa va choyxona"
    ],
    advantages: [
      "Oqtosh va Oqsoqota daryolari hosil qilgan noyob mikroiqlim o'pkani tabiiy tozalaydi",
      "Yong'oqzor va archazorlar bilan o'ralgan sokin, tinch va osoyishta maskan",
      "Allergiya va astmadan aziyat chekuvchi bolalar va kattalar uchun eng sinalgan maskan"
    ],
    description: "Oqtosh sanatoriysi — Toshkentdan atigi 65 km uzoqlikda, go'zal tog' darasida joylashgan. Bu yerning havosi tabiiy dorixona hisoblanadi: tog' daryolari to'lqinlari havoni ionlashtiradi, ko'p yillik yong'oq va archalar esa nafas yo'llaridagi shamollashlarni tezda yengishga yordam beradi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 460000, desc: "Barcha qulayliklarga ega shinam xona, dush, tv, 3 mahal ovqat" },
      { name: "Kengaytirilgan Standart", price: 560000, desc: "Tog' manzarali shinam xona, yangi mebellar, qulay to'shaklar" },
      { name: "Lyuks", price: 740000, desc: "Katta balkon, keng zal, daryo shovqini va to'liq tibbiy xizmatlar" }
    ],
    includedInPrice: [
      "Galoterapiya (tuz kamerasi) va ingalyatsiyalar",
      "Iqlimoterapiya va terrenkur yo'riqnomasi",
      "3 mahal muvozanatlashgan parhez taomnoma",
      "Massaj va fizioterapevtik apparatlar",
      "Laboratoriya tahlillari va kardiologiya"
    ],
    contraindications: "Nafas yetishmovchiligining 3-bosqichi, o'tkir pnevmoniya davri.",
    phone: "+998 (71) 230-10-80"
  },
  {
    id: "xonobod",
    name: "Xonobod Sanatoriysi",
    tagline: "Andijonning sharqiy gavhari — Kislorodga boy tog'-yonbag'ir iqlimi va yurak davosi",
    region: "Andijon viloyati",
    regionKey: "andijon",
    location: "Xonobod shahri, Farg'ona vodiysining eng sharqiy balandligi, 850m",
    coords: [40.8066, 73.0033],
    price: 520000,
    priceFormatted: "520 000 so'm",
    priceUnit: "/ kun",
    rating: 4.9,
    reviewsCount: 310,
    image: "assets/images/xonobod_cardio_cover.jpg",
    gallery: [
      "assets/images/xonobod_garden.jpg",
      "assets/images/xonobod_clinic_suite.jpg"
    ],
    badge: "Yurak & Qon Tomir",
    badgeType: "cardio",
    discount: "12% Chegirma",
    categories: ["popular", "cardio", "mountain", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "850 m",
    climate: "Qoradaryo va Andijon suv ombori yaqinidagi toza kislorodli shabada",
    specialties: [
      "Yurak-qon tomir tizimi (gipertoniya 1-2 daraja, IHK)",
      "Periferik nerv tizimi kasalliklari",
      "Bo'g'im va umurtqa xastaliklari",
      "Kamqonlik va quvvatsizlik"
    ],
    amenities: [
      "Zamonaviy kardiologik reabilitatsiya bloki",
      "Mineral vannalar va marvaridli vannalar",
      "Katta suzish havzasi va fitnes zali",
      "3 mahal shifobaxsh milliy va parhez taomlar",
      "Daryo bo'yi xiyoboni va favvoralar",
      "Shinam lyuks va yarim lyuks nomerlar",
      "Wi-Fi internet tarmog'i"
    ],
    advantages: [
      "Farg'ona vodiysidagi eng toza va kislorodga to'yingan tog'oldi iqlimi",
      "Germaniya va Yaponiyada ishlab chiqarilgan yuqori aniqlikdagi kardiomonitoring uskunalari",
      "Go'zal Xonobod landshafti va Andijon dengizi (suv ombori) manzaralari"
    ],
    description: "Xonobod sanatoriysi — O'zbekistonning sharqiy darvozasi bo'lgan Xonobod shahrida joylashgan zamonaviy salomatlik maskani. Bu yerning havosi yurak faoliyatini yaxshilash, qon bosimini me'yorlashtirish va tetiklik baxsh etishda eng zo'r tabiiy vositadir.",
    rooms: [
      { name: "Standart 2 kishilik", price: 520000, desc: "Shinam nomer, dush, tv, barcha tibbiy xizmatlar va 3 mahal taom" },
      { name: "Yarim Lyuks", price: 650000, desc: "Balkonli, yangi mebellar, konditsioner, yumshoq krovat" },
      { name: "VIP Lyuks", price: 850000, desc: "Keng 2 xonali suit, chiroyli shahar va tog' panoramasi, alohida servis" }
    ],
    includedInPrice: [
      "Kardiolog va terapevt ko'rigi, EKG",
      "Marvaridli va mineral vannalar",
      "3 mahal parhezli taomnoma",
      "Basseyn, sauna va davolovchi gimnastika",
      "Fitobar va vitaminli kokteyllar"
    ],
    contraindications: "Yurak ritmining og'ir buzilishlari, beqaror stenokardiya.",
    phone: "+998 (74) 735-11-22"
  },
  {
    id: "botanika",
    name: "Botanika Sanatoriysi",
    tagline: "Toshkent yaqinidagi asab tizimi, qon aylanishi va xotirjamlik maskani",
    region: "Toshkent viloyati",
    regionKey: "tashkent_vil",
    location: "Qibray tumani, Qorasuv daryosi bo'yi, Toshkentdan 15 km",
    coords: [41.4285, 69.4589],
    price: 380000,
    priceFormatted: "380 000 so'm",
    priceUnit: "/ kun",
    rating: 4.6,
    reviewsCount: 260,
    image: "assets/images/botanika_park_cover.jpg",
    gallery: [
      "assets/images/botanika_alleys.jpg",
      "assets/images/botanika_springs.jpg"
    ],
    badge: "Asab & Xotirjamlik",
    badgeType: "budget",
    discount: "10% Chegirma",
    categories: ["popular", "mineral", "gastro", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "530 m",
    climate: "Daryo bo'yi mikroiqlimi, asriy chinorlar va bog'lar",
    specialties: [
      "Asab tizimi kasalliklari (nevroz, uyqusizlik, vegetativ distoniya)",
      "Qon aylanish tizimi xastaliklari",
      "Oshqozon-ichak trakti kasalliklari",
      "Ginekologik va urologik xastaliklar"
    ],
    amenities: [
      "Termal xlorid-natriyli mineral suv vannalari",
      "Parafin va ozokerit terapiyasi",
      "Psixologik yengillashish va psixoterapiya xonasi",
      "3 mahal parhez taom",
      "Katta yashil park va soy bo'yidagi supa va chorpoyalar",
      "Fizioterapiya va uqalash (massaj)",
      "Wi-Fi internet"
    ],
    advantages: [
      "Poytaxtdan atigi 20 daqiqalik yo'l — transport qulayligi va arzon narxlar",
      "Yuz yillik chinorlar soyasida asab tizimini to'liq tiklovchi sokinlik",
      "O'z yerosti mineral suvi va tajribali tibbiyot xodimlari"
    ],
    description: "Botanika sanatoriysi — Qibray tumanida, xushmanzara Qorasuv daryosi bo'yida joylashgan ko'p tarmoqli shifoxona-kurortdir. Asab tizimini tinchlantirish, yuqori qon bosimini tushirish va uyquni me'yorga keltirishda o'zining uzoq yillik ijobiy natijalari bilan mashhur.",
    rooms: [
      { name: "Standart 2 kishilik", price: 380000, desc: "Shinam xona, dush, tv, 3 mahal ovqat va standart davolash paketi" },
      { name: "Yarim Lyuks", price: 490000, desc: "Konditsioner, muzlatgich, yangilangan vanna xonasi" },
      { name: "Lyuks", price: 620000, desc: "Keng 2 xona, qulay yumshoq mebellar, park manzarasi" }
    ],
    includedInPrice: [
      "Mineral vannalar va suv muolajalari",
      "Ozokerit va parafin bilan davolash",
      "3 mahal parhezli taomlar",
      "Asabni tinchlantiruvchi fitoterapiya",
      "Shifokor ko'rigi va nazorati"
    ],
    contraindications: "Ruhiy kasalliklar, yuqumli xastaliklar, o'tkir qon ketishlar.",
    phone: "+998 (71) 295-88-00"
  },
  {
    id: "chimyon",
    name: "Chimyon Sanatoriysi (Farg'ona)",
    tagline: "Sulfidli vodorodli mineral suvlar va shifobaxsh balchiq mo''jizasi",
    region: "Farg'ona viloyati",
    regionKey: "fargona",
    location: "Farg'ona tumani, Chimyon qishlog'i, Farg'ona shahridan 32 km",
    coords: [40.2982, 71.7456],
    price: 410000,
    priceFormatted: "410 000 so'm",
    priceUnit: "/ kun",
    rating: 4.8,
    reviewsCount: 320,
    image: "assets/images/chimyon_mud_cover.jpg",
    gallery: [
      "assets/images/chimyon_mud_bath.jpg",
      "assets/images/chimyon_mountain_side.jpg"
    ],
    badge: "Vodorod-Sulfidli",
    badgeType: "mineral",
    discount: "10% Chegirma",
    categories: ["popular", "mineral", "joints", "women", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "450 m",
    climate: "Mo''tadil vodiy iqlimi, yer osti shifobaxsh gazlari",
    specialties: [
      "Harakat va tayanch apparati (revmatizm, poliartrit, osteoxondroz)",
      "Teri xastaliklari (psoriaz, neyrodermit, ekzema)",
      "Ginekologik va urologik surunkali yallig'lanishlar",
      "Periferik nerv tizimi xastaliklari"
    ],
    amenities: [
      "Sulfidli mineral vannalar zali",
      "Shifobaxsh balchiq (loy) applikatsiyalari",
      "Gidromassaj va marvaridli vannalar",
      "3 mahal parhez taomnoma",
      "Dendrologik soya-salqin bog'",
      "Kutubxona va sport maydonchalari",
      "Wi-Fi internet"
    ],
    advantages: [
      "Mashhur Matsesta (Sochi) suvlariga o'xshash tabiiy vodorod-sulfidli mineral manba",
      "Bo'g'imlardagi yallig'lanish va surunkali teri xastaliklarini davolashda eng yuqori samara",
      "Ko'p yillik tajribaga ega tibbiyot xodimlari va qulay narxlar"
    ],
    description: "Chimyon sanatoriysi — Markaziy Osiyodagi eng mashhur balneologik kurortlardan biri. Uning vodorod-sulfidli termal suvlari qon aylanishini kuchaytiradi, modda almashinuvini yaxshilaydi va bo'g'imlardagi eng og'ir yallig'lanishlarni ham qisqa fursatda bartaraf etadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 410000, desc: "Shinam xona, dush, tv, 3 mahal ovqat va to'liq balneologik muolajalar" },
      { name: "Yarim Lyuks", price: 520000, desc: "Yangi mebel, muzlatgich, alohida sanitariya tarmog'i" },
      { name: "Lyuks", price: 670000, desc: "2 xonali nomer, konditsioner, bog' manzarasi, fitobar" }
    ],
    includedInPrice: [
      "Sulfidli vodorodli vannalar kursi",
      "Balchiq bilan davolash muolajalari",
      "3 mahal parhezli taomlar",
      "Fizioterapiya va EKG diagnostikasi",
      "Shifokor nazorati"
    ],
    contraindications: "O'tkir jigar va buyrak yetishmovchiligi, onkologiya, sil kasalligi.",
    phone: "+998 (73) 352-12-20"
  },
  {
    id: "omonxona",
    name: "Omonxona Sanatoriysi (Surxondaryo)",
    tagline: "Mo''jizaviy jigar, o't qopi va buyrak davosi — Tabiiy yerosti shifobaxsh bulog'i",
    region: "Surxondaryo viloyati",
    regionKey: "surxondaryo",
    location: "Boysun tumani, Omonxona qishlog'i, Boysun tog'lari etagi",
    coords: [38.2045, 67.2012],
    price: 430000,
    priceFormatted: "430 000 so'm",
    priceUnit: "/ kun",
    rating: 4.9,
    reviewsCount: 375,
    image: "assets/images/omonxona_spring_cover.jpg",
    gallery: [
      "assets/images/omonxona_canyon_stream.jpg",
      "assets/images/omonxona_healing_baths.jpg"
    ],
    badge: "Jigar & O't Yo'llari",
    badgeType: "mineral",
    discount: "10% Chegirma",
    categories: ["popular", "mineral", "gastro", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "1 250 m",
    climate: "Boysun tog'larining salqin va toza havosi, archazorlar",
    specialties: [
      "Surunkali gepatit, jigar gepatozi va jigar faoliyatini tiklash",
      "O't qopi yallig'lanishi (xoletsistit, diskineziya)",
      "Oshqozon-ichak va modda almashinuvi buzilishi",
      "Surunkali piyelonefrit va siydik yo'llari xastaliklari"
    ],
    amenities: [
      "Omonxona tabiiy mineral suv ichish galereyasi",
      "Tyubaj va ichak yuvish maxsus xonalari",
      "Fizioterapiya va massaj zallari",
      "3 mahal parhez stol №5 (jigar va me'da uchun)",
      "Shinam yangi korpus va kottejlar",
      "Tog' sayr yo'laklari",
      "Wi-Fi internet"
    ],
    advantages: [
      "Butun dunyoda o'xshashi kam bo'lgan tabiiy jigar tozalovchi Omonxona mineral suvi",
      "Dorilarsiz, tabiiy suv orqali jigar fermentlari va o't suyuqligini me'yorlashtirish",
      "Boysun tog'larining maftunkor tabiati, shifobaxsh archa havosi"
    ],
    description: "Omonxona sanatoriysi — Boysun tog'larining bag'ridagi afsonaviy maskan. Uning yer qa'ridan chiqadigan mineral suvi jigar, o't yo'llari va oshqozon faoliyatini aql bovar qilmas darajada tez tiklaydi. Respublikamiz va qo'shni davlatlardan minglab insonlar har yili bu yerga shifo topgani kelishadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 430000, desc: "Yangi korpus, dush, tv, 3 mahal maxsus jigar parhezi va muolajalar" },
      { name: "Yarim Lyuks", price: 550000, desc: "Konditsioner, yumshoq mebel, tog' manzarasi, sovutgich" },
      { name: "Lyuks Kottej", price: 720000, desc: "Alohida shaxsiy kottej, 2 xonali keng joylashuv, VIP xizmat" }
    ],
    includedInPrice: [
      "Omonxona mineral suvini ichish kursi",
      "Shifokor-gepatolog va gastroenterolog ko'rigi",
      "3 mahal №5 maxsus shifobaxsh parhez stoli",
      "Tyubaj va fizioterapevtik apparatlar",
      "Tog' sayrlari va terrenkur"
    ],
    contraindications: "Jigar sirrozining og'ir bosqichi, o't qopida 1 sm dan katta toshlar mavjudligi.",
    phone: "+998 (76) 332-20-40"
  },
  {
    id: "turon",
    name: "Turon Sanatoriysi",
    tagline: "Yurak-qon tomir va asab tizimi bo'yicha Toshkentdagi bosh kardiologik maskan",
    region: "Toshkent shahri",
    regionKey: "tashkent",
    location: "Toshkent sh., Chilonzor tumani, xushmanzara park zonasi",
    coords: [41.2750, 69.2080],
    price: 450000,
    priceFormatted: "450 000 so'm",
    priceUnit: "/ kun",
    rating: 4.8,
    reviewsCount: 315,
    image: "assets/images/turon_cardio_cover.jpg",
    gallery: [
      "assets/images/turon_cardio_suite.jpg",
      "assets/images/turon_physio_park.jpg"
    ],
    badge: "Kardiologiya",
    badgeType: "cardio",
    discount: "7% Chegirma",
    categories: ["popular", "cardio", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "480 m",
    climate: "Shahar ichidagi yashil mikroiqlim, kislorodli bog'",
    specialties: [
      "Yurak ishemik kasalligi (IHK) va stenokardiya barqaror bosqichi",
      "Arterial gipertoniya va gipotoniya (qon bosimi buzilishi)",
      "Miokard infarktidan keyingi reabilitatsiya",
      "Asab tizimi kasalliklari va kardionevroz"
    ],
    amenities: [
      "Yuqori aniqlikdagi kardiomonitoring va EKG zallari",
      "Marvaridli, kislorodli va mineral vannalar",
      "Isitiladigan yopiq suzish havzasi",
      "Terapevtik massaj va fizioterapiya",
      "3 mahal maxsus kardiologik parhez taom",
      "Keng yashil park va favvoralar",
      "Wi-Fi internet"
    ],
    advantages: [
      "Respublikaning yetakchi kardiolog professorlari va tajribali shifokorlar nazorati",
      "Poytaxtda joylashgani tufayli qulay yetib borish va statsionar sharoit",
      "Qon bosimini dori-darmonlarsiz barqarorlashtiruvchi zamonaviy texnologiyalar"
    ],
    description: "Turon sanatoriysi — kardiologik yo'nalishdagi eng nufuzli davolash muassasasi. Bu yerda infarktdan keyingi reabilitatsiya, yuqori qon bosimi va yurak qon-tomir zo'riqishlari zamonaviy usullar bilan davolanadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 450000, desc: "Shinam xona, dush, tv, 3 mahal kardiologik parhez ovqat va davolash" },
      { name: "Standart 1 kishilik", price: 530000, desc: "Yolg'iz davolanuvchilar uchun tinch va qulay xona" },
      { name: "Lyuks", price: 720000, desc: "2 xonali keng nomer, konditsioner, yangi zamonaviy interyer" }
    ],
    includedInPrice: [
      "Doimiy kardiomonitoring va shifokor nazorati",
      "Marvaridli va mineral vannalar",
      "3 mahal kardiologik parhez stoli",
      "Fizioterapiya va davolovchi jismoniy tarbiya",
      "Fitobar va vitaminli kokteyllar"
    ],
    contraindications: "Og'ir yurak ritmi buzilishlari, o'tkir beqaror stenokardiya.",
    phone: "+998 (71) 277-50-50"
  },
  {
    id: "sitora",
    name: "Sitorai Mohi Xosa Sanatoriysi",
    tagline: "Buxoro amirlarining yozgi saroyi yonidagi buyrak, urologiya va asab maskani",
    region: "Buxoro viloyati",
    regionKey: "buxoro",
    location: "Buxoro sh., Sitorai Mohi Xosa saroyi tarixiy bog'i",
    coords: [39.8130, 64.4410],
    price: 390000,
    priceFormatted: "390 000 so'm",
    priceUnit: "/ kun",
    rating: 4.7,
    reviewsCount: 280,
    image: "assets/images/sitora_palace_cover.jpg",
    gallery: [
      "assets/images/sitora_palace_courtyard.jpg",
      "assets/images/sitora_garden_walk.jpg"
    ],
    badge: "Buyrak & Urologiya",
    badgeType: "budget",
    discount: "8% Chegirma",
    categories: ["popular", "mineral", "urology", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "230 m",
    climate: "Quruq va iliq cho'l-voha iqlimi, buyrak faoliyati uchun a'lo",
    specialties: [
      "Surunkali nefrit, piyelonefrit va sistit",
      "Buyrak-tosh kasalligi (kichik qum va tuzlar)",
      "Ginekologik va erkaklar urologik xastaliklari",
      "Harakat va tayanch a'zolari xastaliklari"
    ],
    amenities: [
      "Iliq mineral vannalar va dushlar",
      "Katta tarixiy manzarali bog' va xiyobon",
      "3 mahal shifobaxsh buyrak parhez taomnoma",
      "Ultratovush va laboratoriya diagnostikasi",
      "Madaniyat saroyi va ekskursiyalar",
      "Wi-Fi internet"
    ],
    advantages: [
      "Buxoroning quruq va issiq iqlimi buyraklarga tushadigan yukni tabiiy yengillashtiradi",
      "Tarixiy amir saroyi bog'ida sayr qilish va ruhiy xotirjamlik",
      "Buyrak va siydik yo'llarini tuzlardan tozalash bo'yicha yuqori natijalar"
    ],
    description: "Sitorai Mohi Xosa — Buxoro amirlarining sobiq yozgi saroyi hududida barpo etilgan ajoyib kurort. Buxoroning tabiiy quruq iqlimi va shifobaxsh mineral suvlari buyrak, peshob yo'llari hamda ginekologik muammolarni davolashda mo''jizalar ko'rsatadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 390000, desc: "Shinam xona, dush, tv, 3 mahal ovqat va davolash kiritilgan" },
      { name: "Yarim Lyuks", price: 490000, desc: "Konditsioner, yangi mebellar, shaxsiy vanna" },
      { name: "Lyuks", price: 630000, desc: "Keng 2 xona, saroy bog'i manzarasi, shaxsiy xizmat" }
    ],
    includedInPrice: [
      "Urolog va terapevt ko'rigi",
      "Mineral vannalar va suv muolajalari",
      "3 mahal maxsus №7 buyrak parhezi",
      "Fizioterapiya muolajalari",
      "Fitobar va tarvuz/qovun terapiyasi (mavsumda)"
    ],
    contraindications: "Og'ir buyrak yetishmovchiligi, siydik yo'llarida tiqilib qolgan yirik toshlar.",
    phone: "+998 (65) 228-50-20"
  },
  {
    id: "umid_guli",
    name: "Umid Guli Sanatoriysi",
    tagline: "Ayollar va erkaklar reproduktiv salomatligi, bepushtlikni davolash maskani",
    region: "Toshkent viloyati",
    regionKey: "tashkent_vil",
    location: "Qibray tumani, Salar temiryo'l bekati yaqinida, Toshkentdan 12 km",
    coords: [41.3800, 69.3900],
    price: 430000,
    priceFormatted: "430 000 so'm",
    priceUnit: "/ kun",
    rating: 4.8,
    reviewsCount: 330,
    image: "assets/images/umid_guli_cover.jpg",
    gallery: [
      "assets/images/umid_guli_rehab_room.jpg",
      "assets/images/umid_guli_floral_park.jpg"
    ],
    badge: "Reproduktiv Salomatlik",
    badgeType: "featured",
    discount: "Oilaviy paket",
    categories: ["popular", "women", "urology", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "500 m",
    climate: "Mo''tadil shaharoldi mikroiqlimi, yashil xiyobon",
    specialties: [
      "Birlamchi va ikkilamchi bepushtlikni kompleks davolash",
      "Surunkali adneksit, endometrit va bachadon naylari o'tkazuvchanligi",
      "Surunkali prostatit va erkaklar jinsiy faoliyati pasayishi",
      "Bo'g'im va asab tizimi xastaliklari"
    ],
    amenities: [
      "Ginekologik va urologik mineral suvli sug'orishlar",
      "Shifobaxsh dorivor balchiqli tamponlar va applikatsiyalar",
      "Ultratovush, magnitoterapiya va lazeroterapiya",
      "Suzish havzasi va sauna",
      "3 mahal vitaminlarga boy parhez taomnoma",
      "Wi-Fi internet"
    ],
    advantages: [
      "Respublikada reproduktiv salomatlik va bepushtlik bo'yicha eng yuqori ijobiy ko'rsatkich",
      "Juftliklar (er-xotin) uchun birgalikda to'liq tekshiruv va davolanish imkoniyati",
      "Toshkentga yaqin va qulay transport aloqasi"
    ],
    description: "Umid Guli sanatoriysi — minglab oilalarga farzand ko'rish quvonchini baxsh etgan ixtisoslashgan sihatgohdir. Bu yerda tabiiy mineral suvlar, dorivor balchiqlar va zamonaviy fizioterapevtik usullar orqali ayollar va erkaklar reproduktiv salomatligi muvaffaqiyatli tiklanadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 430000, desc: "Shinam xona, barcha qulayliklar, 3 mahal ovqat va davolash" },
      { name: "Oilaviy Juftlik Xonasi", price: 540000, desc: "Katta 2 kishilik ortopedik krovat, tv, konditsioner" },
      { name: "Lyuks", price: 690000, desc: "2 xonali keng lyuks nomer, barcha qulayliklar" }
    ],
    includedInPrice: [
      "Ginekolog va urolog-androlog ko'rigi",
      "Mineral sug'orishlar va balchiq tamponlari",
      "Fizioterapevtik apparatlar va massaj",
      "3 mahal parhezli taomlar",
      "Basseyn va fitobar"
    ],
    contraindications: "O'tkir qon ketishlar, bachadon miomasi tez o'sishi, onkologik shubha.",
    phone: "+998 (71) 260-20-10"
  },
  {
    id: "miraki",
    name: "Miraki Sanatoriysi (Shahrisabz)",
    tagline: "Qashqadaryoning zangori marvaridi — Hisor tog' etaklari va xushmanzara iqlim",
    region: "Qashqadaryo viloyati",
    regionKey: "qashqadaryo",
    location: "Shahrisabz tumani, Miraki qishlog'i, Hisor tog' etaklari",
    coords: [38.9950, 67.0420],
    price: 400000,
    priceFormatted: "400 000 so'm",
    priceUnit: "/ kun",
    rating: 4.8,
    reviewsCount: 290,
    image: "assets/images/miraki_hisor_cover.jpg",
    gallery: [
      "assets/images/miraki_reservoir_view.jpg",
      "assets/images/miraki_mountain_range.jpg"
    ],
    badge: "Hisor Havosi",
    badgeType: "budget",
    discount: "10% Chegirma",
    categories: ["popular", "mountain", "cardio", "sanatorium"],
    facilityType: "sanatorium",
    altitude: "1 050 m",
    climate: "Hisor tog'larining salqin va toza havosi, quyoshli kunlar ko'pligi",
    specialties: [
      "Nafas olish a'zolari va o'pka reabilitatsiyasi",
      "Yurak-qon tomir tizimi funksional zo'riqishlari",
      "Harakat-tayanch tizimi va bo'g'im kasalliklari",
      "Umumiy horg'inlik va immunitet pasayishi"
    ],
    amenities: [
      "Ochiq va yopiq suzish havzalari",
      "Tabiiy tog' terrenkuri yo'laklari",
      "3 mahal tabiiy parhez taomlar",
      "Fizioterapiya va parafin bilan davolash",
      "Sport va stol tennisi maydonchasi",
      "Wi-Fi internet"
    ],
    advantages: [
      "Hisor tog' tizmasining purviqor manzaralari va dori-darmonsiz iqlimiy sog'lomlashtirish",
      "Janubiy viloyatlar uchun eng qulay va hamyonbop kurort maskani",
      "Toza tog' suvi, mevalar va xushmuomala xodimlar"
    ],
    description: "Miraki sanatoriysi — Shahrisabz tumanining xushmanzara Miraki tog'larida joylashgan iqlimiy kurort. Uning archazorlar va tog' salqini bilan to'yingan havosi o'pka, yurak va immunitetni kuchaytirishda zo'r tabiiy vositadir.",
    rooms: [
      { name: "Standart 2 kishilik", price: 400000, desc: "Shinam xona, dush, tv, 3 mahal ovqat va barcha muolajalar" },
      { name: "Yarim Lyuks", price: 510000, desc: "Yangi ta'mirlangan, tog' manzarasi, muzlatgich, qulay krovatlar" },
      { name: "Lyuks", price: 650000, desc: "Keng 2 xonali nomer, shaxsiy balkon, konditsioner" }
    ],
    includedInPrice: [
      "Shifokor-terapevt ko'rigi va diagnostika",
      "Fizioterapevtik apparatlar (ultratovush, magnit)",
      "3 mahal parhez taomnoma",
      "Suzish havzasi va tog' terrenkuri",
      "Fitobar va shifobaxsh choylar"
    ],
    contraindications: "O'tkir infarkt davri, qon ketishlar, nafas yetishmovchiligi og'ir bosqichlari.",
    phone: "+998 (75) 522-10-80"
  }
];

// ==========================================================================
// TOIFALAR & FILTERLAR
// ==========================================================================
export const FACILITY_CATEGORIES = [
  { key: 'all', label: 'Barchasi', icon: '🌟' },
  { key: 'football', label: 'Futbol & Sport Maydonlari', icon: '⚽' },
  { key: 'massage', label: 'Massaj & Terapevtik SPA', icon: '💆‍♂️' },
  { key: 'sanatorium', label: 'Sanatoriylar & Davolanish', icon: '🏥' },
  { key: 'fitness', label: 'Basseyn & Fitnes Zallari', icon: '🏊‍♂️' },
  { key: 'mountain', label: "Tog' Iqlimi & Eko Hordiq", icon: '🏔️' },
  { key: 'mineral', label: 'Mineral Buloqlar', icon: '💧' },
  { key: 'family', label: 'Oilaviy Hordiq', icon: '👨‍👩‍👧‍👦' }
];

// Hududlar ro'yxati
export const REGIONS_DATA = [
  { id: "all", name: "Barcha hududlar", count: 20 },
  { id: "tashkent", name: "Toshkent shahri", count: 6, desc: "Bunyodkor Arena, Chinobod, Olimpiya basseyn, Ibn Sino massaj" },
  { id: "tashkent_vil", name: "Toshkent viloyati", count: 6, desc: "Oqtosh, Humson Buloq, Lotus SPA, Botanika, Umid Guli" },
  { id: "jizzax", name: "Jizzax (Zomin)", count: 2, desc: "Zomin sanatoriysi va Tog' Bag'ri futbol arenasi" },
  { id: "samarqand", name: "Samarqand viloyati", count: 2, desc: "Registon Sport Siti va Titan Gym Wellness" },
  { id: "namangan", name: "Namangan (Chortoq)", count: 2, desc: "Chortoq mineral suvlari va Shifo Nur massaji" },
  { id: "andijon", name: "Andijon (Xonobod)", count: 1, desc: "Yurak-qon tomir va toza shabada" },
  { id: "fargona", name: "Farg'ona (Chimyon)", count: 2, desc: "Chimyon sulfidli suvlari va Vodiy Grand Arena" },
  { id: "surxondaryo", name: "Surxondaryo (Omonxona)", count: 1, desc: "Jigar va o't yo'llari shifobaxsh bulog'i" },
  { id: "buxoro", name: "Buxoro (Sitorai Mohi Xosa)", count: 1, desc: "Buyrak, urologiya va tarixiy bog'" },
  { id: "qashqadaryo", name: "Qashqadaryo (Miraki)", count: 1, desc: "Hisor tog'lari va toza kislorod" }
];

// Mutaxassisliklar va xizmat yo'nalishlari
export const SPECIALTIES_DATA = [
  { id: "all", name: "Barcha yo'nalishlar", icon: "activity" },
  { id: "football", name: "Futbol maydoni (Sun'iy / Tabiiy chim)", icon: "award" },
  { id: "massage", name: "Terapevtik massaj & Manual terapiya", icon: "shield" },
  { id: "fitness", name: "Fitnes, Basseyn & Kardio zallar", icon: "activity" },
  { id: "nafas", name: "Nafas yo'llari va o'pka (Astma, bronxit)", icon: "wind" },
  { id: "joints", name: "Bo'g'im va umurtqa (Artroz, osteoxondroz, grija)", icon: "shield" },
  { id: "gastro", name: "Oshqozon-ichak va jigar (Mineral suvlar)", icon: "coffee" },
  { id: "cardio", name: "Yurak-qon tomir (Gipertoniya, qon bosimi)", icon: "heart" },
  { id: "nerve", name: "Asab tizimi va uyqusizlik (Stress, relaks)", icon: "zap" },
  { id: "urology", name: "Buyrak va Urologiya", icon: "activity" },
  { id: "women", name: "Ayollar va Erkaklar reproduktiv salomatligi", icon: "shield" }
];

// ==========================================================================
// TIBBIY TAYYORGARLIK VA SOG'LOMLASHTIRISH QO'LLANMASI (GUIDE)
// ==========================================================================
export const PREPARATION_GUIDE_DATA = {
  steps: [
    {
      step: 1,
      title: "Xizmat turini aniqlash va onlayn band qilish",
      desc: "Sanatoriya davolanishi, do'stlar bilan mini-futbol o'yini, terapevtik massaj yoki basseyn tashrifini tanlang va sanani belgilang.",
      tip: "Har bir xizmat uchun saytimizda rasmiy elektron vaucher beriladi."
    },
    {
      step: 2,
      title: "Hujjatlar va tayyorgarlik",
      desc: "Sanatoriyalar uchun poliklinikadan sanatoriya-kurort kartasi (yoki joyida tahlil), sport va massaj uchun esa faqat shaxsingizni tasdiqlovchi hujjat kifoya.",
      tip: "Sport maydonlari va massajga borishda ortiqcha hujjat talab qilinmaydi."
    },
    {
      step: 3,
      title: "Kerakli sport va shaxsiy kiyimlar to'plami",
      desc: "Futbol uchun krossovka va sport kiyimi; basseyn uchun cho'milish kiyimi va shippak; sanatoriya uchun shaxsiy qulay liboslar.",
      tip: "Futbol maydonlarida to'p va jiletkalar, massajda esa bir martalik sochiqlar bepul taqdim etiladi."
    },
    {
      step: 4,
      title: "Elektron vaucher orqali kafolatlangan xizmat",
      desc: "Saytimiz orqali olingan rasmiy QR-kodli elektron vaucher bilan borasiz va hech qanday navbatsiz, qulay qabul qilinasiz.",
      tip: "To'lovni yetib borganingizda yoki onlayn xavfsiz amalga oshirishingiz mumkin."
    }
  ],
  checklist: [
    { id: "c1", text: "Pasport yoki ID-karta (asl nusxasi)" },
    { id: "c2", text: "Portalimizdan olingan rasmiy elektron vaucher (telefonda)" },
    { id: "c3", text: "Futbol yoki fitnes uchun mos sport poyabzali va kiyimi" },
    { id: "c4", text: "Basseyn uchun suzish kiyimi, rezina shippak va shapkacha" },
    { id: "c5", text: "Sanatoriya uchun tahlillar yoki sanatoriya kartasi (agar mavjud bo'lsa)" },
    { id: "c6", text: "Massaj uchun avvalgi rentgen/MRT xulosasi (bel/bo'g'im muammolarida)" }
  ],
  dailySchedule: [
    { time: "07:30 - 08:30", activity: "Ertalabki yugurish, badantarbiya yoki basseyn suzishi" },
    { time: "08:30 - 09:30", activity: "Sog'lom nonushta va yangi siqilgan fitobar sharbatlari" },
    { time: "10:00 - 13:00", activity: "Asosiy muolajalar (mineral vanna, terapevtik massaj yoki fitnes)" },
    { time: "13:00 - 14:00", activity: "Muvozanatli parhez tushlik" },
    { time: "17:00 - 19:00", activity: "Do'stlar bilan mini-futbol matchi yoki SPA relaksatsiya" },
    { time: "19:30 - 20:30", activity: "Yengil kechki ovqat" },
    { time: "20:30 - 22:00", activity: "Sokin sayr, toza havodagi hordiq va sog'lom uyqu" }
  ]
};

// ==========================================================================
// KASALLIKLAR VA SPORT-SOG'LOMLASHTIRISH YO'RIQNOMASI
// ==========================================================================
export const DISEASES_DIRECTORY_DATA = [
  {
    id: "artroz",
    name: "Artroz, osteoxondroz va umurtqa churrasi (grija)",
    icon: "🦴",
    recommendedSanatoriums: ["Ibn Sino Massaj Markazi", "Chortoq Sanatoriysi", "Olimpiya Basseyn Majmuasi"],
    sanatoriumIds: ["ibn_sino_massage", "chortoq", "olimpiya_complex"],
    treatments: "Manual terapiya va davolovchi massaj, termal yod-bromli vannalar, suzish (umurtqaga yuk tushirmasdan mustahkamlash).",
    expectedResult: "Bo'g'imlardagi yallig'lanish va qotishning ketishi, disk bosimining kamayishi, erkin harakatlanish.",
    contraindication: "Bo'g'imlarning o'tkir yiringli yallig'lanishi, o'tkir sinishlar davri."
  },
  {
    id: "charchoq",
    name: "Surunkali stress, charchoq va gipodinamiya (kamharakatlik)",
    icon: "⚡",
    recommendedSanatoriums: ["Bunyodkor Futbol Arena", "Lotus SPA & Relaks", "Humson Buloq"],
    sanatoriumIds: ["bunyodkor_arena", "lotus_spa_wellness", "humson"],
    treatments: "Haftada 2 marta mini-futbol o'ynash, fin saunasi va bug' hammomi, toshlar bilan relaks massaj.",
    expectedResult: "Endorfin va tetiklik gormonlarining ko'tarilishi, mushaklar tonusi oshishi, chuqur xotirjam uyqu.",
    contraindication: "Yurak o'tkir xuruji, kuchli holsizlik."
  },
  {
    id: "astma",
    name: "Bronxial astma, nafas qisishi va surunkali bronxit",
    icon: "🫁",
    recommendedSanatoriums: ["Zomin Sanatoriysi", "Zomin Sport Majmuasi", "Oqtosh Sanatoriysi"],
    sanatoriumIds: ["zomin", "zaamin_stadium", "oqtosh"],
    treatments: "Tuz g'ori (Speleoterapiya), ignabargli archazor tog' kislorodi, ochiq havoda yengil yugurish.",
    expectedResult: "Nafas qisishining kamayishi, yo'tal to'xtashi, o'pka hajmining 30% gacha kengayishi.",
    contraindication: "Nafas yetishmovchiligining 3-bosqichi, o'tkir pnevmoniya."
  },
  {
    id: "vazn",
    name: "Ortiqcha vazn, modda almashinuvi sekinlashishi va diabet",
    icon: "🏃‍♂️",
    recommendedSanatoriums: ["Olimpiya Fitnes Majmuasi", "Titan Gym Club", "Chinobod Sanatoriysi"],
    sanatoriumIds: ["olimpiya_complex", "titan_fit_club", "chinobod"],
    treatments: "Kardiomashqlar, 50m suzish, xlorid-gidrokarbonatli mineral suv ichish, limfodrenaj massaji.",
    expectedResult: "Vaznning me'yorlashishi, qondagi qand va xolesterin miqdorining kamayishi, yengillik.",
    contraindication: "Oshqozon yarasining qonash xavfi bo'lgan o'tkir xuruji."
  },
  {
    id: "yurak",
    name: "Arterial gipertoniya va yurak qon aylanishi zo'riqishi",
    icon: "❤️",
    recommendedSanatoriums: ["Turon Kardiologiya", "Xonobod Sanatoriysi", "Lotus SPA"],
    sanatoriumIds: ["turon", "xonobod", "lotus_spa_wellness"],
    treatments: "Doimiy kardiomonitoring, marvaridli va kislorodli vannalar, yengil suzish, piyoda terrenkur.",
    expectedResult: "Qon bosimining normallashishi, bosh aylanishi va yurak sanchishining yo'qolishi, quvvat ortishi.",
    contraindication: "Yurak ritmining og'ir beqarorligi, yaqin 3 oy ichida o'tkazilgan infarkt."
  },
  {
    id: "jigar",
    name: "Jigar, o't qopi xastaliklari va xoletsistit",
    icon: "🥗",
    recommendedSanatoriums: ["Omonxona Sanatoriysi", "Chinobod Sanatoriysi", "Chortoq Sanatoriysi"],
    sanatoriumIds: ["omonxona", "chinobod", "chortoq"],
    treatments: "Tabiiy mineral buloq suvlarini ichish, tyubaj, №5 maxsus jigar parhezi, mineral vannalar.",
    expectedResult: "O't suyuqligi dimlanishining bartaraf bo'lishi, jigar hujayralarining tiklanishi, ovqat hazmining yaxshilanishi.",
    contraindication: "O't pufagidagi yirik toshlar (tiqilib qolish xavfi), jigar sirrozining og'ir bosqichi."
  }
];

// ==========================================================================
// NAMUNAVIY TASDIQLANGAN VAUCHERLAR (TEKSHIRISH TIZIMI UCHUN)
// ==========================================================================
export const SAMPLE_VERIFICATION_VOUCHERS = [
  {
    code: "SM-2026-78421",
    sanatoriumName: "Zomin Sanatoriysi",
    fullName: "Jamshid Ergashov",
    checkIn: "2026-11-01",
    checkOut: "2026-11-11",
    nights: 10,
    roomName: "Yarim Lyuks",
    grandTotal: 6200000,
    status: "Tasdiqlangan",
    verifiedAt: "2026-10-15"
  },
  {
    code: "FB-2026-90412",
    sanatoriumName: "Bunyodkor Futbol Arena",
    fullName: "Sardorbek Olimov",
    checkIn: "2026-10-20",
    checkOut: "2026-10-20 (20:00 - 22:00)",
    nights: 2,
    roomName: "Prime-Time kechki (2 soat)",
    grandTotal: 320000,
    status: "Tasdiqlangan",
    verifiedAt: "2026-10-16"
  },
  {
    code: "MS-2026-55102",
    sanatoriumName: "Ibn Sino Massaj Markazi",
    fullName: "Madina Karimova",
    checkIn: "2026-10-22",
    checkOut: "2026-10-22 (14:00)",
    nights: 1,
    roomName: "Terapevtik massaj (60 daqiqa)",
    grandTotal: 180000,
    status: "Tasdiqlangan",
    verifiedAt: "2026-10-16"
  }
];

// FAQ - Savol-javoblar
export const FAQS_DATA = [
  {
    q: "Sayt orqali nafaqat sanatoriya, balki futbol maydoni va massaj ham bron qilsa bo'ladimi?",
    a: "Ha, albatta! Bizning yangilangan platformamiz inson salomatligi va faol hayoti uchun zarur bo'lgan barcha yo'nalishlarni birlashtirdi: shifobaxsh sanatoriylar, mini-futbol maydonchalari, terapevtik massaj markazlari, suzish havzalari va fitnes zallari. Barchasini bir joyda solishtirib, onlayn band qilishingiz mumkin."
  },
  {
    q: "Futbol maydonini qanday band qilinadi va to'lov qanday bo'ladi?",
    a: "Kerakli maydonni tanlaysiz, o'yin sanasi va qulay soat oralig'ini (masalan, 19:00 - 21:00) belgilaysiz. Sizga bir zumda rasmiy tasdiqlangan elektron vaucher beriladi. To'lovni joyiga borganingizda yoki onlayn karta orqali amalga oshirishingiz mumkin."
  },
  {
    q: "Massaj va SPA xizmatlariga oldindan yozilish shartmi?",
    a: "Ha, massaj ustalari va shifokor-manualistlar oldida navbatda turib vaqt yo'qotmaslik uchun oldindan o'zingizga qulay vaqtga yozilib qo'yish tavsiya etiladi. Portalimiz orqali usta jinsi (erkak/ayol) va muolaja turini bevosita tanlay olasiz."
  },
  {
    q: "Sanatoriyaga borish uchun qanday tibbiy hujjatlar kerak?",
    a: "Sanatoriya uchun yashash joyingizdagi poliklinikadan olingan Sanatoriya-kurort kartasi (forma 072/y), pasport (ID-karta) va bizning elektron vaucherimiz kerak bo'ladi. Agar kartani ololmagan bo'lsangiz, ko'pgina sanatoriyalarning o'zida kelgan kuningiz laboratoriya tahlillari o'tkaziladi."
  },
  {
    q: "Keksalar (pensionerlar) va talabalar uchun chegirmalar bormi?",
    a: "Ha! Pensiya guvohnomasi yoki talabalik guvohnomasiga ega bo'lgan foydalanuvchilarimiz uchun sanatoriyalar, massaj va sport zallarida 10% dan 20% gacha maxsus chegirmalar amal qiladi."
  }
];

// Sharhlar ro'yxati
export const REVIEWS_DATA = [
  {
    id: 1,
    name: "Akmal Rahimov",
    city: "Toshkent shahri",
    sanatoriumName: "Bunyodkor Futbol Arena",
    sanatoriumId: "bunyodkor_arena",
    rating: 5,
    date: "14-Oktabr, 2026",
    text: "Har hafta do'stlarimiz bilan Bunyodkor arenasida mini-futbol o'ynaymiz. Maydon chimi nihoyatda sifatli, oyoq og'rimaydi. Kechki chiroqlari xuddi kunduzgidek yoritadi. Dush va kiyinish xonalari doim toza va ozoda!",
    avatar: "AR"
  },
  {
    id: 2,
    name: "Dilnoza Karimova",
    city: "Toshkent",
    sanatoriumName: "Ibn Sino Massaj Markazi",
    sanatoriumId: "ibn_sino_massage",
    rating: 5,
    date: "10-Oktabr, 2026",
    text: "Belimda disk grijasi sabab doimiy og'riq bor edi. Ibn Sino markazida 10 kunlik manual davolash kursi oldim. Massaj va kedr bochkasi mo''jiza ko'rsatdi — hozir bemalol og'riqsiz harakatlanyapman. Rahmat shifokorlarga!",
    avatar: "DK"
  },
  {
    id: 3,
    name: "Jamshid Ergashov",
    city: "Samarqand",
    sanatoriumName: "Zomin Sanatoriysi",
    sanatoriumId: "zomin",
    rating: 5,
    date: "02-Oktabr, 2026",
    text: "O'tgan yili o'pka shamollashidan so'ng Zomin sanatoriyasiga bordim. 12 kunlik davo kursidan keyin nafas olishim butunlay yengillashdi. Archazorlar havosi, tuz g'ori va shifokorlarning e'tibori shunchaki a'lo darajada.",
    avatar: "JE"
  },
  {
    id: 4,
    name: "Bobur Mirzayev",
    city: "Toshkent",
    sanatoriumName: "Olimpiya Basseyn Majmuasi",
    sanatoriumId: "olimpiya_complex",
    rating: 5,
    date: "25-Sentabr, 2026",
    text: "50 metrlik basseyn shunchaki zo'r! Suvi toza, xlor hidi umuman yo'q. Suzishdan keyin saunaga kirish butun tanadagi charchoqni yo'qotadi. Oylik abonement olganman, har kimga sog'liq uchun tavsiya qilaman.",
    avatar: "BM"
  },
  {
    id: 5,
    name: "Shahnoza Yusupova",
    city: "Farg'ona",
    sanatoriumName: "Chortoq Sanatoriysi",
    sanatoriumId: "chortoq",
    rating: 5,
    date: "18-Sentabr, 2026",
    text: "Ota-onamni Chortoqqa jo'natgandim. Bo'g'imlardagi og'riqlar va tizzalari qattiq bezovta qilardi. Mineral vannalar va loy bilan davolashdan so'ng dadam bemalol hassasiz yura boshladilar.",
    avatar: "SY"
  }
];
