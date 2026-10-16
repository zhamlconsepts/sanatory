/**
 * SihatMaskan - O'zbekistonning Yetakchi Sanatoriylari Ma'lumotlar Bazasi
 * Barcha sanatoriyalar rasmiy yo'nalishlari, qulayliklari, narxlari va lokatsiyalari
 */

const SANATORIUMS_DATA = [
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
    rating: 4.9,
    reviewsCount: 348,
    image: "assets/images/hero_zaamin.jpg",
    gallery: [
      "assets/images/hero_zaamin.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/cottage_nature.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Top Tanlov",
    badgeType: "featured",
    discount: "10% Chegirma",
    categories: ["popular", "mountain", "family"],
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
    rating: 4.8,
    reviewsCount: 412,
    image: "assets/images/park_mineral.jpg",
    gallery: [
      "assets/images/park_mineral.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/massage_therapy.jpg",
      "assets/images/doctor_care.jpg"
    ],
    badge: "Mineral Buloq",
    badgeType: "mineral",
    discount: "15% Chegirma",
    categories: ["popular", "mineral", "joints"],
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
    rating: 4.7,
    reviewsCount: 295,
    image: "assets/images/resort_exterior.jpg",
    gallery: [
      "assets/images/resort_exterior.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/doctor_care.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Hamyonbop & Sifatli",
    badgeType: "budget",
    discount: "5% Chegirma",
    categories: ["popular", "mineral", "gastro"],
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
    rating: 5.0,
    reviewsCount: 520,
    image: "assets/images/spa_thermal.jpg",
    gallery: [
      "assets/images/spa_thermal.jpg",
      "assets/images/hero_zaamin.jpg",
      "assets/images/cottage_nature.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Premium 5★",
    badgeType: "premium",
    discount: "Maxsus Taklif",
    categories: ["popular", "mountain", "family", "cardio"],
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
    rating: 4.8,
    reviewsCount: 380,
    image: "assets/images/mountain_view.jpg",
    gallery: [
      "assets/images/mountain_view.jpg",
      "assets/images/hero_zaamin.jpg",
      "assets/images/cottage_nature.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "O'pka & Nafas",
    badgeType: "featured",
    discount: "8% Chegirma",
    categories: ["popular", "mountain", "family"],
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
    rating: 4.9,
    reviewsCount: 310,
    image: "assets/images/resort_exterior.jpg",
    gallery: [
      "assets/images/resort_exterior.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/room_suite.jpg",
      "assets/images/doctor_care.jpg"
    ],
    badge: "Yurak & Qon Tomir",
    badgeType: "cardio",
    discount: "12% Chegirma",
    categories: ["popular", "cardio", "mountain"],
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
    rating: 4.6,
    reviewsCount: 260,
    image: "assets/images/cottage_nature.jpg",
    gallery: [
      "assets/images/cottage_nature.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/park_mineral.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Asab & Xotirjamlik",
    badgeType: "budget",
    discount: "10% Chegirma",
    categories: ["popular", "mineral", "gastro"],
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
    coords: [40.2312, 71.7456],
    price: 350000,
    priceFormatted: "350 000 so'm",
    rating: 4.7,
    reviewsCount: 315,
    image: "assets/images/massage_therapy.jpg",
    gallery: [
      "assets/images/massage_therapy.jpg",
      "assets/images/park_mineral.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/resort_exterior.jpg"
    ],
    badge: "Eng Hamyonbop",
    badgeType: "budget",
    discount: "20% Chegirma",
    categories: ["popular", "mineral", "joints"],
    altitude: "450 m",
    climate: "Quruq vodiy iqlimi, serquyosh kunlar",
    specialties: [
      "Harakat-tayanch tizimi (poliartrit, radikulit, spondilyoz)",
      "Yurak-qon tomir kasalliklari (ateroskleroz, gipotoniya)",
      "Ginekologik va urologik surunkali yallig'lanishlar",
      "Teri xastaliklari"
    ],
    amenities: [
      "Sulfidli-vodorodli vanna korpusi",
      "Tabiiy torfli shifobaxsh balchiq (loy)",
      "Yopiq suzish havzasi va sauna",
      "3 mahal parhez taomnoma",
      "Madaniyat saroyi va kinoteatr",
      "Dori-darmonsiz tabiiy sog'lomlashtirish",
      "Wi-Fi internet"
    ],
    advantages: [
      "Mashhur Matsesta suvlariga teng keluvchi sulfidli mineral suv va dorivor balchiq",
      "O'zbekistondagi eng hamyonbop va xalqona narxlar (350 000 so'mdan)",
      "Bo'g'imlardagi tuz va yallig'lanishlarni ketkazuvchi yuqori samarali muolajalar"
    ],
    description: "Chimyon sanatoriysi — Farg'ona vodiysidagi eng mashhur balneologik kurortlardan biri. O'zining seroltingugurtli (vodorod-sulfidli) suvlari va shifobaxsh balchig'i bilan butun O'zbekistonga tanilgan. Suyak, bo'g'im, bel va oyoq og'riqlaridan aziyat chekkanlar uchun haqiqiy shifo maskanidir.",
    rooms: [
      { name: "Standart 2 kishilik", price: 350000, desc: "Qulay xona, dush, 3 mahal ovqat va barcha vanna-balchiq muolajalari kiritilgan" },
      { name: "Yarim Lyuks", price: 450000, desc: "Televizor, muzlatgich, yangi mebellar, qulay to'shaklar" },
      { name: "Lyuks", price: 580000, desc: "2 xonali lyuks, konditsioner, yumshoq divan, maxsus servis" }
    ],
    includedInPrice: [
      "Vodorod-sulfidli mineral vannalar",
      "Shifobaxsh loy va balchiq applikatsiyalari",
      "3 mahal parhezli taomlar",
      "Gidroterapiya va massaj kurslari",
      "Tibbiy tekshiruv va EKG"
    ],
    contraindications: "Buyrak va jigar yetishmovchiligi, gipertoniya 3-bosqich, o'tkir yallig'lanishlar.",
    phone: "+998 (73) 352-14-14"
  },
  {
    id: "omonxona",
    name: "Omonxona Sanatoriysi (Boysun)",
    tagline: "O'zbekistonning mo''jizaviy shifobaxsh Omonxona suvi — Jigar, o't yo'llari va oshqozon davosi",
    region: "Surxondaryo viloyati",
    regionKey: "surxondaryo",
    location: "Boysun tumani, Omonxona qishlog'i, Boysun tog'lari, 1300m balandlik",
    coords: [38.2045, 67.2012],
    price: 430000,
    priceFormatted: "430 000 so'm",
    rating: 4.9,
    reviewsCount: 460,
    image: "assets/images/sanatoriya_park_resort_1790760932042.jpg",
    gallery: [
      "assets/images/sanatoriya_park_resort_1790760932042.jpg",
      "assets/images/mountain_view.jpg",
      "assets/images/doctor_care.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Noyob Buloq Suvi",
    badgeType: "mineral",
    discount: "10% Chegirma",
    categories: ["popular", "mineral", "gastro"],
    altitude: "1 300 m",
    climate: "Boysun tog'larining toza shabadasi, quruq va shifobaxsh tog' iqlimi",
    specialties: [
      "Surunkali gepatit va gepatotoksik holatlar",
      "O't pufagi va o't yo'llari diskineziyasi, xoletsistit",
      "Surunkali gastrit va oshqozon-ichak shillig'i xastaliklari",
      "Modda almashinuvining buzilishi va buyrak qumlari"
    ],
    amenities: [
      "Tabiiy Omonxona mineral suvi ichish galereyasi",
      "Mineral vannalar va suv muolajalari",
      "Laboratoriya va biokimyoviy tahlil markazi",
      "3 mahal maxsus parhez taomnoma (№5 jigar stoli)",
      "Fizioterapiya va elektroforez xonalari",
      "Tog' sayrgohi va chorpoyalar",
      "Wi-Fi internet"
    ],
    advantages: [
      "Yer qa'ridan chiquvchi Omonxona suvi jigar hujayralarini qayta tiklashda xalqaro miqyosda mashhur",
      "Boysun darasining sokinligi va magnit to'lqinlaridan xoli toza tog' tabiati",
      "Gepatolog va gastroenterologlarning maxsus individual sog'lomlashtirish protokoli"
    ],
    description: "Omonxona sanatoriysi — Surxondaryoning purviqor Boysun tog'lari bag'rida joylashgan noyob davolash maskanidir. Bu yerdagi mineral buloq suvi tarkibida ko'plab mikroelementlar mavjud bo'lib, o't haydovchi, jigarni tozalovchi va oshqozon faoliyatini me'yorlashtiruvchi qudratli shifobaxsh ta'sirga ega.",
    rooms: [
      { name: "Standart 2 kishilik", price: 430000, desc: "Shinam xona, dush, tv, 3 mahal parhez taom va to'liq ichish kursi" },
      { name: "Yarim Lyuks", price: 550000, desc: "Tog' manzarali, konditsioner, muzlatgich, yangi mebellar" },
      { name: "Lyuks Kottej", price: 720000, desc: "Keng yotoqxona va mehmonxona, shaxsiy terassa, premium qulayliklar" }
    ],
    includedInPrice: [
      "Omonxona mineral suvini ichish kursi (kuniga 3 mahal)",
      "Shifokor-gepatolog va terapevt muntazam ko'rigi",
      "Biokimyoviy tahlillar (bilirubin, ALT, AST)",
      "3 mahal jigar va me'da uchun shifobaxsh parhez",
      "Fizioterapiya va dorivor giyohli choylar"
    ],
    contraindications: "O't pufagidagi yirik toshlar (obstruksiya xavfi), jigar sirrozining og'ir davri, o'tkir sarig' kasalligi davri.",
    phone: "+998 (76) 220-33-44"
  },
  {
    id: "sitora",
    name: "Sitorai Mohi Xosa Sanatoriysi",
    tagline: "Buxoro amirlarining yozgi saroyi yonidagi shifobaxsh buyrak, urologiya va asab markazi",
    region: "Buxoro viloyati",
    regionKey: "buxoro",
    location: "Buxoro shahri, Sitorai Mohi Xosa xiyoboni, Buxoro",
    coords: [39.8123, 64.4419],
    price: 410000,
    priceFormatted: "410 000 so'm",
    rating: 4.8,
    reviewsCount: 390,
    image: "assets/images/resort_exterior.jpg",
    gallery: [
      "assets/images/resort_exterior.jpg",
      "assets/images/park_mineral.jpg",
      "assets/images/massage_therapy.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Tarixiy Maskani",
    badgeType: "featured",
    discount: "15% Chegirma",
    categories: ["popular", "mineral", "joints"],
    altitude: "230 m",
    climate: "Mo''tadil voha iqlimi, tarixiy bog' va asriy chinorlar salqini",
    specialties: [
      "Buyrak va siydik yo'llari xastaliklari (piyelonefrit, surunkali sistit)",
      "Harakat-tayanch tizimi va bo'g'im kasalliklari (artroz, radikulit)",
      "Urologik va ginekologik surunkali yallig'lanishlar",
      "Asab tizimi toliqishi va uyqusizlik"
    ],
    amenities: [
      "Termal xlorid-natriyli mineral suv vannalari",
      "Dorivor balchiq va ozokerit applikatsiyalari",
      "Zamonaviy urologik fizioterapiya bloki",
      "3 mahal shifobaxsh parhez taomlar",
      "Tarixiy bog' hududidagi yurish yo'laklari",
      "Madaniyat va hordiq markazi",
      "Wi-Fi internet"
    ],
    advantages: [
      "Buxoro amiri saroyi hududidagi asriy chinorlar bilan o'ralgan betakror tarixiy atmosfera",
      "O'zbekistondagi eng mashhur buyrak va urologik reabilitatsiya maskanlaridan biri",
      "Samarali mineral vannalar va arzon xalqona narxlar"
    ],
    description: "Sitorai Mohi Xosa sanatoriysi — oxirgi Buxoro amirining yozgi saroyi yaqinida joylashgan mashhur balneologik kurort. Bu yerdagi mineral suvlar buyraklarni tuz va qumlardan tozalash, siydik yo'llari yallig'lanishlarini ketkazish hamda asabni tinchlantirishda beqiyos natijalar beradi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 410000, desc: "Shinam xona, dush, tv, 3 mahal ovqat va to'liq balneologik muolajalar" },
      { name: "Yarim Lyuks", price: 520000, desc: "Konditsioner, muzlatgich, yangi ta'mirlangan vanna, yumshoq mebellar" },
      { name: "Lyuks Kvartira", price: 680000, desc: "2 xonali keng lyuks, tarixiy bog' manzarasi, individual shifokor xizmati" }
    ],
    includedInPrice: [
      "Xlorid-natriyli shifobaxsh mineral vannalar",
      "Shifobaxsh loy (balchiq) va ozokerit bilan davolash",
      "3 mahal parhez taomnoma (№7 buyrak stoli)",
      "Urolog va nefrolog ko'rigi, ultratovush diagnostikasi",
      "Fitobar va buyrakni tozalovchi giyohlar damlamalari"
    ],
    contraindications: "Buyrak yetishmovchiligining 2-3 bosqichlari, o'tkir piyelonefrit xuruji, yirik o'lchamdagi buyrak toshlari.",
    phone: "+998 (65) 228-50-20"
  },
  {
    id: "turon",
    name: "Turon Sanatoriysi (Toshkent)",
    tagline: "Respublikaning bosh kardiologiya, qon bosimi va qon aylanishi reabilitatsiya markazi",
    region: "Toshkent shahri",
    regionKey: "tashkent",
    location: "Toshkent sh., Mirzo Ulug'bek tumani, Bo'zbozor mavzesi",
    coords: [41.3325, 69.3456],
    price: 540000,
    priceFormatted: "540 000 so'm",
    rating: 4.9,
    reviewsCount: 430,
    image: "assets/images/doctor_care.jpg",
    gallery: [
      "assets/images/doctor_care.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/resort_exterior.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Yurak & Qon Bosimi",
    badgeType: "cardio",
    discount: "Maxsus Taklif",
    categories: ["popular", "cardio", "family"],
    altitude: "490 m",
    climate: "Toshkent shahrining shinam yashil hududi, manzarali istirohat bog'i",
    specialties: [
      "Yurak ishemik kasalligi (infarktdan keyingi reabilitatsiya)",
      "Arterial gipertoniya va gipotoniya (qon bosimi balandligi)",
      "Bosh miya qon aylanishining buzilishi (insultdan keyingi holat)",
      "Neyrotsirkulyator distoniya va kardiomiopatiya"
    ],
    amenities: [
      "Raqamli kardiomonitoring va Holter EKG markazi",
      "Kislorodli va marvaridli shifobaxsh vannalar",
      "Lazeroterapiya va magnitoterapiya uskunalari",
      "Katta yopiq isitiladigan basseyn",
      "3 mahal yurak uchun foydali kardiologik parhez stoli",
      "Psixoterapevt va yetakchi kardiologlar xizmati",
      "Wi-Fi internet"
    ],
    advantages: [
      "O'zbekistondagi eng yetakchi kardiolog-olimlar va reabilitolog shifokorlar nazorati",
      "Poytaxt markazida joylashgan, yuqori darajadagi statsionar qulayliklar va laboratoriya",
      "Infarkt va insultdan keyin bemorlarni tezda oyoqqa turg'azuvchi ilmiy tasdiqlangan dastur"
    ],
    description: "Turon sanatoriysi — O'zbekistonning poytaxtida joylashgan yirik ixtisoslashgan kardiologik klinika-kurortdir. Bu yerda arterial gipertoniya, stenokardiya, yurak qon aylanishi yetishmovchiligi va asab tizimi toliqishi eng zamonaviy tibbiy uskunalar yordamida muvaffaqiyatli tiklanadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 540000, desc: "Shinam xona, dush, kardiomonitoring, 3 mahal taom va to'liq davo" },
      { name: "Yarim Lyuks", price: 680000, desc: "Konditsioner, muzlatgich, ortopedik to'shak, sokin xiyobon ko'rinishi" },
      { name: "Lyuks Suite", price: 890000, desc: "2 xonali hashamatli lyuks, shaxsiy shifokor nazorati va VIP xizmat" }
    ],
    includedInPrice: [
      "Kardiolog, nevropatolog ko'rigi va EKG kardiogramma",
      "Kislorodli kokteyl, fitobar va marvaridli vannalar",
      "3 mahal muvozanatlangan kardiologik parhez (tuzsiz stol)",
      "Yopiq isitiladigan basseyn va shifobaxsh gimnastika",
      "Fizioterapiya va elektroson muolajalari"
    ],
    contraindications: "O'tkir infarkt davri (birinchi 3 oy), beqaror stenokardiya, ritmning xavfli buzilishlari.",
    phone: "+998 (71) 267-24-40"
  },
  {
    id: "umid_guli",
    name: "Umid Guli Sanatoriysi",
    tagline: "Reproduktiv salomatlik, ayollar va erkaklar salomatligi bo'yicha yetakchi maskan",
    region: "Toshkent viloyati",
    regionKey: "tashkent_vil",
    location: "Qibray tumani, Salar temiryo'l bekati yaqinida, Toshkentdan 10 km",
    coords: [41.3855, 69.3789],
    price: 470000,
    priceFormatted: "470 000 so'm",
    rating: 4.9,
    reviewsCount: 385,
    image: "assets/images/cottage_nature.jpg",
    gallery: [
      "assets/images/cottage_nature.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/doctor_care.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Ayollar & Erkaklar Salomatligi",
    badgeType: "featured",
    discount: "10% Chegirma",
    categories: ["popular", "mineral", "family"],
    altitude: "510 m",
    climate: "Mo''tadil bog'dorchilik hududi, tinch va sokin tabiat",
    specialties: [
      "Ginekologik surunkali yallig'lanishlar va bepushtlik",
      "Urologik kasalliklar, surunkali prostatit va andrologik muammolar",
      "Harakat-tayanch a'zolari va umurtqa xastaliklari",
      "Asab tizimi toliqishi"
    ],
    amenities: [
      "Sulfidli ginekologik va urologik sug'orish xonalari",
      "Tabiiy dorivor balchiq (loy) applikatsiyalari",
      "Urologik apparat majmuasi va massaj",
      "3 mahal to'yimli parhez taom",
      "Wi-Fi internet",
      "Shinam yashil istirohat bog'i"
    ],
    advantages: [
      "O'zbekistonda bepushtlik va surunkali yallig'lanishlarni dori-darmonsiz tabiiy davolash bo'yicha №1 maskan",
      "Toshkent shahriga nihoyatda yaqin — qulay transport va xushmanzara sokin hudud",
      "Tajribali ginekolog va androlog shifokorlarning individual yondashuvi"
    ],
    description: "Umid Guli sanatoriysi — ko'p yillardan buyon minglab oilalarga farzand ko'rish quvonchini baxsh etib kelayotgan respublika miqyosidagi ixtisoslashtirilgan maskandir. Bu yerdagi yerosti termal mineral suvlari va shifobaxsh balchiqlar reproduktiv a'zolar qon aylanishini kuchaytiradi va yallig'lanishlarni butkul yo'qotadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 470000, desc: "Shinam xona, dush, tv, 3 mahal parhez ovqat va maxsus davolash kursi" },
      { name: "Yarim Lyuks", price: 580000, desc: "Konditsioner, sovutgich, yangi mebellar, tinch park ko'rinishi" },
      { name: "Lyuks", price: 740000, desc: "2 xonali keng lyuks, yumshoq mebel, shaxsiy konsyerj xizmati" }
    ],
    includedInPrice: [
      "Ginekolog yoki urolog-androlog to'liq ko'rigi",
      "Mineral sug'orishlar va balchiq applikatsiyalari",
      "3 mahal muvozanatlashgan parhez taomnoma",
      "Fizioterapiya va magnit-lazer muolajalari",
      "Psixologik xotirjamlik va dam olish xizmatlari"
    ],
    contraindications: "Onkologik holatlar, bachadon miomasi (tez o'suvchi), o'tkir qon ketishlar.",
    phone: "+998 (71) 295-40-10"
  },
  {
    id: "tovoqsoy",
    name: "Tovoqsoy Sanatoriysi",
    tagline: "Tabiiy tog' sharsharalari shabadasi — Asab, yurak va toza nafas maskani",
    region: "Toshkent viloyati",
    regionKey: "tashkent_vil",
    location: "Bo'stonliq tumani, Tovoqsoy qishlog'i, Chirchiq daryosi sohillari",
    coords: [41.5211, 69.6422],
    price: 440000,
    priceFormatted: "440 000 so'm",
    rating: 4.7,
    reviewsCount: 270,
    image: "assets/images/mountain_view.jpg",
    gallery: [
      "assets/images/mountain_view.jpg",
      "assets/images/cottage_nature.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Sharshara & Asab",
    badgeType: "budget",
    discount: "12% Chegirma",
    categories: ["popular", "mountain", "cardio"],
    altitude: "680 m",
    climate: "Tog' daryosi va sharsharalar salqini, tabiiy ionlashgan toza havo",
    specialties: [
      "Asab tizimi kasalliklari (asabiy toliqish, nevrozlar, uyqusizlik)",
      "Yurak-qon tomir tizimi funksional buzilishlari",
      "Nafas olish yo'llari shamollashlari",
      "Oshqozon-ichak a'zolari"
    ],
    amenities: [
      "Tabiiy sharshara sayrgohi va daryo bo'yi chorpoyalari",
      "Mineral vannalar va gidromassaj",
      "Yopiq suzish havzasi va sauna",
      "3 mahal to'yimli milliy va parhez taomlar",
      "Fizioterapevtik apparatlar",
      "Wi-Fi internet"
    ],
    advantages: [
      "Tovoqsoy daryosi va sharsharalarining havoni ionlashtiruvchi tabiiy shifobaxsh kuchi",
      "Toshkentdan atigi 45 daqiqalik masofa va qulay narxlar",
      "Sokinlik, yashil tabiat va asabni to'liq tinchlantiruvchi osoyishtalik"
    ],
    description: "Tovoqsoy sanatoriysi — Bo'stonliq tumanining go'zal tog'oldi qismida, shovillab oquvchi Tovoqsoy daryosi yoqasida joylashgan. Uning toza, ionlarga boy havosi yurak va asab tizimi toliqishini dori-darmonsiz tezda ketkazadi.",
    rooms: [
      { name: "Standart 2 kishilik", price: 440000, desc: "Shinam xona, dush, tv, 3 mahal ovqat va standart davolash" },
      { name: "Yarim Lyuks", price: 540000, desc: "Konditsioner, muzlatgich, daryo shovqini va yangi mebellar" },
      { name: "Lyuks Kottej", price: 710000, desc: "Alohida kottej, shaxsiy terassa, panoramik tog' ko'rinishi" }
    ],
    includedInPrice: [
      "Shifokor-nevropatolog ko'rigi va maslahatlari",
      "Mineral va ignabargli (xvoyli) vannalar",
      "3 mahal parhezli va to'yimli taomlar",
      "Daryo bo'yida iqlimoterapiya va terrenkur",
      "Massaj va fizioterapevtik muolajalar"
    ],
    contraindications: "Og'ir ruhiy kasalliklar, faol bosqichdagi o'tkir yallig'lanishlar.",
    phone: "+998 (70) 715-20-30"
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
    rating: 4.8,
    reviewsCount: 290,
    image: "assets/images/sanatoriya_hero_1790760851731.jpg",
    gallery: [
      "assets/images/sanatoriya_hero_1790760851731.jpg",
      "assets/images/mountain_view.jpg",
      "assets/images/spa_thermal.jpg",
      "assets/images/room_suite.jpg"
    ],
    badge: "Hisor Havosi",
    badgeType: "budget",
    discount: "10% Chegirma",
    categories: ["popular", "mountain", "cardio"],
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

// Hududlar ro'yxati (Yangilangan)
const REGIONS_DATA = [
  { id: "all", name: "Barcha hududlar", count: 14 },
  { id: "jizzax", name: "Jizzax (Zomin)", count: 1, desc: "Baland tog' havosi va archazorlar" },
  { id: "namangan", name: "Namangan (Chortoq)", count: 1, desc: "Yod-bromli mineral suvlar" },
  { id: "tashkent", name: "Toshkent shahri", count: 2, desc: "Chinobod, Turon kardiologiya" },
  { id: "tashkent_vil", name: "Toshkent viloyati", count: 5, desc: "Oqtosh, Humson, Botanika, Umid Guli, Tovoqsoy" },
  { id: "andijon", name: "Andijon (Xonobod)", count: 1, desc: "Yurak-qon tomir va toza shabada" },
  { id: "fargona", name: "Farg'ona (Chimyon)", count: 1, desc: "Sulfidli suvlar va shifobaxsh balchiq" },
  { id: "surxondaryo", name: "Surxondaryo (Omonxona)", count: 1, desc: "Jigar va o't yo'llari shifobaxsh bulog'i" },
  { id: "buxoro", name: "Buxoro (Sitorai Mohi Xosa)", count: 1, desc: "Buyrak, urologiya va tarixiy bog'" },
  { id: "qashqadaryo", name: "Qashqadaryo (Miraki)", count: 1, desc: "Hisor tog'lari va toza kislorod" }
];

// Davolash yo'nalishlari
const SPECIALTIES_DATA = [
  { id: "all", name: "Barcha yo'nalishlar", icon: "activity" },
  { id: "nafas", name: "Nafas yo'llari va o'pka (Astma, bronxit)", icon: "wind" },
  { id: "joints", name: "Bo'g'im va umurtqa (Artroz, osteoxondroz)", icon: "shield" },
  { id: "gastro", name: "Oshqozon-ichak va jigar (Gastrit, gepatit)", icon: "coffee" },
  { id: "cardio", name: "Yurak-qon tomir (Gipertoniya, qon bosimi)", icon: "heart" },
  { id: "nerve", name: "Asab tizimi va uyqusizlik (Stress, toliqish)", icon: "zap" },
  { id: "urology", name: "Buyrak va Urologiya (Piyelonefrit, sistit)", icon: "activity" },
  { id: "women", name: "Ayollar va Erkaklar reproduktiv salomatligi", icon: "shield" }
];

// ==========================================================================
// TIBBIY TAYYORGARLIK VA SANATORIYAGA BORISH QO'LLANMASI (GUIDE)
// ==========================================================================
const PREPARATION_GUIDE_DATA = {
  steps: [
    {
      step: 1,
      title: "Sanatoriya-kurort kartasini olish (Forma 072/y)",
      desc: "Safardan 1-2 hafta oldin yashash joyingizdagi oilaviy poliklinikaga borasiz. Terapevt shifokor sizga yo'llanma yozib beradi.",
      tip: "Agar ulgurmasangiz, ko'pgina sanatoriyalarimizda kelgan kuningizning o'zidayoq laboratoriya tekshiruvi tashkil etiladi."
    },
    {
      step: 2,
      title: "Majburiy tibbiy tahlillarni topshirish",
      desc: "Flyurografiya (o'pka rentgeni), EKG (kardiogramma), umumiy qon va peshob tahlillari hamda ayollar uchun ginekolog xulosasi.",
      tip: "Tahlillar muddati odatda 1 oydan oshmagan bo'lishi lozim."
    },
    {
      step: 3,
      title: "Kerakli kiyim va shaxsiy buyumlar to'plami",
      desc: "Suzish havzasi uchun cho'milish kiyimi, shippak, qulay sport oyoq kiyimlari, ertalabki sayrlar uchun iliq kiyim va shaxsiy gigiyena vositalari.",
      tip: "Barcha sanatoriyalar sochiq va yotoq anjomlarini toza taqdim etadi."
    },
    {
      step: 4,
      title: "Rasmiy elektron vaucher bilan ro'yxatdan o'tish",
      desc: "Saytimiz orqali olingan rasmiy QR-kodli elektron vaucher va pasportingizni (ID-karta) qabulxonaga ko'rsatishingiz kifoya.",
      tip: "Hech qanday navbatsiz, 5 daqiqada xonangizga joylashasiz."
    }
  ],
  checklist: [
    { id: "c1", text: "Pasport yoki ID-karta (asl nusxasi)" },
    { id: "c2", text: "SihatMaskan rasmiy elektron vaucheri (telefonda yoki qog'ozda)" },
    { id: "c3", text: "Sanatoriya-kurort kartasi (forma 072/y) yoki tahlil natijalari" },
    { id: "c4", text: "Pensiya guvohnomasi (agar pensioner bo'lsangiz chegirma uchun)" },
    { id: "c5", text: "Suzish havzasi va suv muolajalari uchun shippak (rezinali) va shapkacha" },
    { id: "c6", text: "Tog' va xiyobonlarda piyoda yurish uchun qulay sport krossovkalari" },
    { id: "c7", text: "Doimiy qabul qilinadigan shaxsiy dori-darmonlar (agar mavjud bo'lsa)" }
  ],
  dailySchedule: [
    { time: "07:30 - 08:00", activity: "Ertalabki badantarbiya va terrenkur (shifobaxsh piyoda yurish)" },
    { time: "08:00 - 09:00", activity: "Nonushta (parhezli shved stoli yoki buyurtma taom)" },
    { time: "09:00 - 13:00", activity: "Asosiy tibbiy muolajalar (mineral vanna, loy, tuz g'ori, massaj)" },
    { time: "13:00 - 14:00", activity: "Tushlik va vitaminli fitobar ichimliklari" },
    { time: "14:00 - 16:00", activity: "Sokin sokinlik soati (kunduzgi dam olish va uyqu)" },
    { time: "16:00 - 18:00", activity: "Suzish havzasi, fitnes, yengil fizioterapiya va shifokor nazorati" },
    { time: "18:30 - 19:30", activity: "Kechki ovqat" },
    { time: "20:00 - 22:00", activity: "Madaniy hordiq, kinozal, konsert yoki xiyobonda sayr" }
  ]
};

// ==========================================================================
// KASALLIKLAR VA TASHXISLAR BO'YICHA SANATORIYA TANLASH KATALOGI
// ==========================================================================
const DISEASES_DIRECTORY_DATA = [
  {
    id: "astma",
    name: "Bronxial astma va surunkali bronxit",
    icon: "🫁",
    recommendedSanatoriums: ["Zomin Sanatoriysi", "Oqtosh Sanatoriysi", "Miraki Sanatoriysi"],
    sanatoriumIds: ["zomin", "oqtosh", "miraki"],
    treatments: "Tuz g'ori (Speleoterapiya), ignabargli archazor iqlimoterapiyasi, kislotali ingalyatsiyalar.",
    expectedResult: "Nafas qisishining kamayishi, yo'tal to'xtashi, o'pka hajmining 30% gacha kengayishi.",
    contraindication: "Nafas yetishmovchiligining 3-bosqichi, o'tkir o'pka shamollashi (pnevmoniya xuruji)."
  },
  {
    id: "artroz",
    name: "Artroz, osteoxondroz va umurtqa churrasi (grija)",
    icon: "🦴",
    recommendedSanatoriums: ["Chortoq Sanatoriysi", "Chimyon Sanatoriysi", "Sitorai Mohi Xosa"],
    sanatoriumIds: ["chortoq", "chimyon", "sitora"],
    treatments: "Termal yod-bromli vannalar, dorivor balchiq applikatsiyalari, umurtqa cho'zish (traksiya), gidromassaj.",
    expectedResult: "Bo'g'imlardagi tuz va yallig'lanishning ketishi, og'riqsiz erkin harakatlanish.",
    contraindication: "Bo'g'imlarning o'tkir yiringli yallig'lanishi, o'tkir falajlik davri."
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
  },
  {
    id: "yurak",
    name: "Arterial gipertoniya va yurak qon aylanishi",
    icon: "❤️",
    recommendedSanatoriums: ["Turon Sanatoriysi", "Xonobod Sanatoriysi", "Humson Buloq"],
    sanatoriumIds: ["turon", "xonobod", "humson"],
    treatments: "Doimiy kardiomonitoring, marvaridli va kislorodli vannalar, tuzsiz kardiologik stol, yengil terrenkur.",
    expectedResult: "Qon bosimining normallashishi, bosh aylanishi va yurak sanchishining yo'qolishi, quvvat ortishi.",
    contraindication: "Yurak ritmining og'ir beqarorligi, yaqin 3 oy ichida o'tkazilgan infarkt."
  },
  {
    id: "gastrit",
    name: "Surunkali gastrit, kolit va qandli diabet",
    icon: "🥣",
    recommendedSanatoriums: ["Chinobod Sanatoriysi", "Omonxona Sanatoriysi", "Botanika Sanatoriysi"],
    sanatoriumIds: ["chinobod", "omonxona", "botanika"],
    treatments: "Xlorid-gidrokarbonatli mineral suv ichish, ichaklarni chuqur tozalash, diabetik parhez menyusi.",
    expectedResult: "Jig'ildon qaynashi va qorin dam bo'lishining to'xtashi, qondagi qand miqdorining barqarorlashishi.",
    contraindication: "Oshqozon yarasining qonash xavfi bo'lgan o'tkir xuruji davri."
  },
  {
    id: "reproduktiv",
    name: "Bepushtlik, ginekologik va urologik yallig'lanishlar",
    icon: "🌸",
    recommendedSanatoriums: ["Umid Guli Sanatoriysi", "Sitorai Mohi Xosa", "Chimyon Sanatoriysi"],
    sanatoriumIds: ["umid_guli", "sitora", "chimyon"],
    treatments: "Sulfidli sug'orishlar, dorivor balchiqli tamponlar, kichik chanoq a'zolari magnitoterapiyasi.",
    expectedResult: "Surunkali yallig'lanishlarning butkul yo'qolishi, reproduktiv salomatlikning tiklanishi.",
    contraindication: "Bachadon o'tkir qon ketishlari, tez kattalashuvchi xavfli o'smalar."
  }
];

// ==========================================================================
// NAMUNAVIY TASDIQLANGAN VAUCHERLAR (TEKSHIRISH TIZIMI UCHUN)
// ==========================================================================
const SAMPLE_VERIFICATION_VOUCHERS = [
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
    code: "SM-2026-31950",
    sanatoriumName: "Chortoq Sanatoriysi",
    fullName: "Gulchehra Mirzayeva",
    checkIn: "2026-10-25",
    checkOut: "2026-11-06",
    nights: 12,
    roomName: "Standart (2 kishilik)",
    grandTotal: 5040000,
    status: "Tasdiqlangan",
    verifiedAt: "2026-10-14"
  }
];

// FAQ - Savol-javoblar
const FAQS_DATA = [
  {
    q: "Sanatoriyaga borish uchun qanday tibbiy hujjatlar talab etiladi?",
    a: "Asosiy talab qilinadigan hujjat — yashash joyingizdagi poliklinikadan olingan Sanatoriya-kurort kartasi (forma 072/y), pasport (ID-karta) va bizning tizim orqali olingan rasmiy elektron Vaucherdir. Agar sanatoriya-kurort kartasini ololmagan bo'lsangiz, ko'pgina sanatoriyalarning o'zida kelgan kuningiz laboratoriya tahlillari va mutaxassis ko'rigi tashkil etiladi."
  },
  {
    q: "1 kunlik to'lov ichiga aynan qanday xizmatlar kiritilgan?",
    a: "Bizning portalimizda ko'rsatilgan har bir narx — TO'LIQ KUNLIK PAKET hisoblanadi. U o'z ichiga: tanlangan toifadagi xonada yashash, kuniga 3 (yoki 4) mahal shifobaxsh parhez taomlar, shifokorlar ko'rigi, diagnostika va belgilangan standart fizioterapevtik/balneologik muolajalarni qamrab oladi. Yashirin to'lovlar mavjud emas!"
  },
  {
    q: "Keksalar (pensionerlar) va bolalar uchun chegirmalar bormi?",
    a: "Ha! Pensiya guvohnomasiga ega bo'lgan fuqarolar uchun barcha sanatoriyalarda 10% gacha maxsus chegirmalar mavjud. Shuningdek, 3 yoshgacha bo'lgan bolalar alohida o'rin talab qilinmasa bepul, 3 yoshdan 12 yoshgacha bo'lgan bolalar uchun esa 30% dan 50% gacha imtiyozli tariflar amal qiladi."
  },
  {
    q: "Bron qilish qanday amalga oshiriladi va bekor qilsa bo'ladimi?",
    a: "Saytimizda bir necha daqiqada onlayn ariza to'ldirasiz, sanalar va xonani tanlaysiz. Sizga bir zumda rasmiy QR-kodli elektron vaucher taqdim etiladi. Yetib kelganingizda yoki onlayn to'lov qilishingiz mumkin. Safar bekor bo'lgan taqdirda, kelish kunidan 3 kun oldin ogohlantirsangiz, hech qanday jarimasiz buyurtmangiz bekor qilinadi."
  },
  {
    q: "Davolanishning tavsiya etilgan eng kam muddati necha kun?",
    a: "To'liq terapevtik va sog'lomlashtiruvchi natijaga erishish uchun shifokorlar kamida 10-12 kunlik davolash kursini tavsiya etadilar. Biroq, shunchaki dam olish va quvvat yig'ish maqsadida 3 kundan boshlab ham xona band qilish imkoniyati mavjud."
  }
];

// Sharhlar ro'yxati
const REVIEWS_DATA = [
  {
    id: 1,
    name: "Akmal Rahimov",
    city: "Toshkent shahri",
    sanatoriumName: "Zomin Sanatoriysi",
    sanatoriumId: "zomin",
    rating: 5,
    date: "14-Sentabr, 2026",
    text: "O'tgan yili o'pka shamollashidan so'ng Zomin sanatoriyasiga bordim. 12 kunlik davo kursidan keyin nafas olishim butunlay yengillashdi. Archazorlar havosi, tuz g'ori va shifokorlarning e'tibori shunchaki a'lo darajada. Ushbu sayt orqali bron qilgandik, hech qanday ortiqcha navbatsiz joylashdik.",
    avatar: "AR"
  },
  {
    id: 2,
    name: "Dilnoza Karimova",
    city: "Samarqand",
    sanatoriumName: "Chortoq Sanatoriysi",
    sanatoriumId: "chortoq",
    rating: 5,
    date: "02-Avgust, 2026",
    text: "Ota-onamni Chortoqqa jo'natgandim. Bo'g'imlardagi og'riqlar va tizzalari qattiq bezovta qilardi. Mineral vannalar va loy bilan davolashdan so'ng dadam bemalol hassasiz yura boshladilar. Xodimlar juda muloyim, ovqatlari parhezli bo'lsa ham nihoyatda mazali ekan.",
    avatar: "DK"
  },
  {
    id: 3,
    name: "Botir Qodirov",
    city: "Buxoro",
    sanatoriumName: "Humson Buloq",
    sanatoriumId: "humson",
    rating: 5,
    date: "22-Iyul, 2026",
    text: "Haqiqiy 5 yulduzli dam olish va davolanish maskani! Oilamiz bilan dam oldik. Basseynlari toza, tabiat manzarasi hayratlanarli. Shved stoli taomlari va kardiologiya apparatlari juda zamonaviy. Narxiga 100% arziydi.",
    avatar: "BQ"
  },
  {
    id: 4,
    name: "Shahnoza Yusupova",
    city: "Farg'ona",
    sanatoriumName: "Oqtosh Sanatoriysi",
    sanatoriumId: "oqtosh",
    rating: 5,
    date: "10-Iyun, 2026",
    text: "Bolamda allergik astma bor edi. Oqtoshning tog' havosi va galoterapiyasi tufayli bolam kechalari yo'talsiz, xotirjam uxlaydigan bo'ldi. Hammaga tavsiya qilaman!",
    avatar: "SY"
  },
  {
    id: 5,
    name: "Bobur Mirzayev",
    city: "Termiz",
    sanatoriumName: "Omonxona Sanatoriysi",
    sanatoriumId: "omonxona",
    rating: 5,
    date: "05-Sentabr, 2026",
    text: "Jigar va o't pufagi xastaligi bilan Omonxonaga bordim. 14 kunlik suv ichish kursi va №5 parhez stolidan so'ng tahlillarim a'lo chiqdi. Buloq suvi haqiqatan mo''jiza!",
    avatar: "BM"
  },
  {
    id: 6,
    name: "Nodira Qosimova",
    city: "Toshkent",
    sanatoriumName: "Turon Sanatoriysi",
    sanatoriumId: "turon",
    rating: 5,
    date: "28-Avgust, 2026",
    text: "Onamning qon bosimi baland bo'lib bezovta qilardi. Turonda davolangach, qon bosimlari me'yorga tushdi. Kardiolog shifokorlarning e'tibori va kardiomonitoring xizmatidan juda mamnunmiz.",
    avatar: "NQ"
  }
];

