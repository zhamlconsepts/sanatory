/**
 * SihatMaskan - Asosiy Ilova Mantiqi (App.js)
 * Qidiruv, Filtrlash, Interaktiv Xarita, Smart Quiz, Taqqoslash, Sevimlilar va Sharhlar
 */

const App = {
  activeCategory: 'all',
  activeRegion: 'all',
  activeSpecialty: 'all',
  searchQuery: '',
  priceRange: 'all',
  selectedAmenities: [],
  sortBy: 'recommended',
  comparedIds: [],
  favoritesIds: [],
  leafletMap: null,
  mapMarkers: {},
  quizAnswers: { goal: null, climate: null, party: null },

  // Dasturni ishga tushirish
  init() {
    this.loadFavorites();
    this.renderSanatoriums();
    this.renderRegionsList();
    this.renderDiseasesDirectory();
    this.renderPreparationGuide();
    this.renderTreatments();
    this.renderFaqs();
    this.renderReviews();
    this.initMap();
    this.initTheme();
    this.bindEvents();

    BookingApp.init();
  },

  // ==========================================================================
  // 1. SANATORIYALARNI CHIZISH VA FILTRLASH
  // ==========================================================================
  getFilteredSanatoriums() {
    return SANATORIUMS_DATA.filter(item => {
      // 1. Kategoriya filtri
      if (this.activeCategory !== 'all' && !item.categories.includes(this.activeCategory)) {
        return false;
      }

      // 2. Hudud filtri
      if (this.activeRegion !== 'all' && item.regionKey !== this.activeRegion) {
        return false;
      }

      // 3. Matnli qidiruv
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchRegion = item.region.toLowerCase().includes(q);
        const matchLocation = item.location.toLowerCase().includes(q);
        const matchSpec = item.specialties.some(s => s.toLowerCase().includes(q));
        if (!matchName && !matchRegion && !matchLocation && !matchSpec) {
          return false;
        }
      }

      // 4. Davolash ixtisosligi filtri
      if (this.activeSpecialty !== 'all') {
        const hasSpec = item.categories.includes(this.activeSpecialty) ||
          item.specialties.some(s => s.toLowerCase().includes(this.activeSpecialty));
        if (!hasSpec) return false;
      }

      // 5. Narx filtri
      if (this.priceRange === 'budget' && item.price > 400000) return false;
      if (this.priceRange === 'comfort' && (item.price < 400000 || item.price > 600000)) return false;
      if (this.priceRange === 'premium' && item.price < 600000) return false;

      return true;
    }).sort((a, b) => {
      if (this.sortBy === 'price-asc') return a.price - b.price;
      if (this.sortBy === 'price-desc') return b.price - a.price;
      if (this.sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount; // default recommended
    });
  },

  renderSanatoriums() {
    const container = document.getElementById('sanatoriumsGrid');
    const countEl = document.getElementById('catalogResultsCount');
    if (!container) return;

    const list = this.getFilteredSanatoriums();

    if (countEl) {
      countEl.innerText = `${list.length} ta sanatoriya topildi`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">Hech narsa topilmadi</h3>
          <p style="color: var(--text-muted); max-width: 480px; margin: 0.5rem auto 1.5rem auto;">
            Siz kiritgan filtrlarga mos sanatoriya mavjud emas. Filtrlarni tozalab qayta urinib ko'ring.
          </p>
          <button class="btn-primary" onclick="App.resetFilters()">
            Barcha filtrlarni tozalash
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(item => {
      const isFav = this.favoritesIds.includes(item.id);
      const isCompared = this.comparedIds.includes(item.id);

      return `
        <article class="sanatorium-card" id="card-${item.id}">
          <div class="card-img-wrap">
            <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
            <span class="card-badge badge-${item.badgeType}">${item.badge}</span>
            <button class="card-favorite-btn ${isFav ? 'active' : ''}" 
                    title="Sevimlilarga qo'shish" 
                    onclick="App.toggleFavorite('${item.id}')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>
            <div class="card-discount-tag">${item.discount}</div>
          </div>

          <div class="card-body">
            <div class="card-location-meta">
              <span class="card-region">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                ${item.region}
              </span>
              <div class="card-rating">
                <span class="star-icon">★</span>
                <span>${item.rating}</span>
                <span style="font-weight: 500; font-size: 0.78rem; color: var(--text-muted);">(${item.reviewsCount})</span>
              </div>
            </div>

            <h3 class="card-title" onclick="App.openDetailsModal('${item.id}')" style="cursor: pointer;">
              ${item.name}
            </h3>
            <p class="card-tagline">${item.tagline}</p>

            <div class="card-specialties">
              ${item.specialties.slice(0, 2).map(s => `<span class="specialty-tag">${s.split('(')[0]}</span>`).join('')}
              <span class="specialty-tag" style="background: var(--primary-50); color: var(--primary-700); font-weight: 700;">+${item.specialties.length - 2} ta yo'nalish</span>
            </div>

            <ul class="card-advantages">
              ${item.advantages.slice(0, 2).map(adv => `
                <li class="card-advantage-item">
                  <span class="adv-icon">✓</span>
                  <span>${adv}</span>
                </li>
              `).join('')}
            </ul>

            <div class="card-amenities-bar">
              <span class="amenity-chip" title="Basseyn mavjud">🏊 Basseyn</span>
              <span class="amenity-chip" title="Tuz g'ori">🧂 Tuz g'ori</span>
              <span class="amenity-chip" title="3 mahal ovqat">🥗 3 mahal ovqat</span>
              <span class="amenity-chip" title="Wi-Fi">📶 Wi-Fi</span>
            </div>

            <div class="card-footer">
              <div class="card-price-wrap">
                <span class="card-price-label">1 kunlik to'liq kurs:</span>
                <div>
                  <span class="card-price-val">${item.priceFormatted}</span>
                  <span class="card-price-unit">/ kun</span>
                </div>
              </div>

              <div class="card-actions">
                <button class="btn-card-compare ${isCompared ? 'active' : ''}" 
                        title="Taqqoslashga qo'shish" 
                        onclick="App.toggleCompare('${item.id}')">
                  ⚖️
                </button>
                <button class="btn-card-detail" onclick="App.openDetailsModal('${item.id}')">
                  Batafsil
                </button>
                <button class="btn-card-book" onclick="BookingApp.openBookingModal('${item.id}')">
                  Band qilish
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  resetFilters() {
    this.activeCategory = 'all';
    this.activeRegion = 'all';
    this.activeSpecialty = 'all';
    this.searchQuery = '';
    this.priceRange = 'all';

    // UI elementlarini yangilash
    const searchIn = document.getElementById('heroSearchInput');
    const regionSel = document.getElementById('searchRegionSelect');
    const specSel = document.getElementById('searchSpecSelect');
    const priceSel = document.getElementById('searchPriceSelect');

    if (searchIn) searchIn.value = '';
    if (regionSel) regionSel.value = 'all';
    if (specSel) specSel.value = 'all';
    if (priceSel) priceSel.value = 'all';

    // Tablarni yangilash
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.category === 'all');
    });

    this.renderSanatoriums();
    showToast("Filtrlar tozalandi", "info");
  },

  // ==========================================================================
  // 2. INTERAKTIV XARITA (LEAFLET.JS)
  // ==========================================================================
  initMap() {
    const mapEl = document.getElementById('sanatoriumMap');
    if (!mapEl || typeof L === 'undefined') return;

    try {
      // O'zbekiston markazi bo'yicha
      this.leafletMap = L.map('sanatoriumMap', {
        center: [40.2, 67.5],
        zoom: 6.5,
        scrollWheelZoom: false
      });

      // Chiroyli CartoDB Positron / OSM qatlami
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(this.leafletMap);

      // Markerlarni joylashtirish
      SANATORIUMS_DATA.forEach(s => {
        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div class="custom-sanatorium-marker">🌿</div>`,
          iconSize: [42, 42],
          iconAnchor: [21, 42],
          popupAnchor: [0, -38]
        });

        const marker = L.marker(s.coords, { icon: customIcon }).addTo(this.leafletMap);

        const popupContent = `
          <div style="max-width: 240px; padding: 4px; font-family: inherit;">
            <img src="${s.image}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
            <div style="font-weight: 800; font-size: 1rem; color: #0f172a; margin-bottom: 2px;">${s.name}</div>
            <div style="font-size: 0.78rem; color: #059669; font-weight: 700; margin-bottom: 6px;">📍 ${s.region} (${s.altitude})</div>
            <div style="font-size: 0.82rem; color: #475569; margin-bottom: 8px;">${s.tagline.substring(0, 75)}...</div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 6px;">
              <span style="font-weight: 800; color: #059669;">${s.priceFormatted}</span>
              <button onclick="BookingApp.openBookingModal('${s.id}')" style="background: #059669; color: #fff; border: none; padding: 4px 10px; border-radius: 6px; font-size: 0.78rem; font-weight: 700; cursor: pointer;">
                Band qilish
              </button>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        this.mapMarkers[s.id] = marker;
      });

    } catch (e) {
      console.warn("Xarita yuklanishida xatolik:", e);
    }
  },

  flyToSanatorium(id) {
    const s = SANATORIUMS_DATA.find(x => x.id === id);
    if (s && this.leafletMap) {
      this.leafletMap.flyTo(s.coords, 11, { duration: 1.5 });
      if (this.mapMarkers[id]) {
        setTimeout(() => {
          this.mapMarkers[id].openPopup();
        }, 1200);
      }
    }
  },

  renderRegionsList() {
    const container = document.getElementById('mapRegionsList');
    if (!container) return;

    container.innerHTML = REGIONS_DATA.filter(r => r.id !== 'all').map(r => `
      <div class="region-item-btn ${this.activeRegion === r.id ? 'active' : ''}" onclick="App.selectMapRegion('${r.id}')">
        <div class="region-item-top">
          <span>${r.name}</span>
          <span style="background: var(--primary-100); color: var(--primary-800); font-size: 0.72rem; padding: 0.15rem 0.5rem; border-radius: 99px;">
            ${r.count} ta maskan
          </span>
        </div>
        <div class="region-item-desc">${r.desc}</div>
      </div>
    `).join('');
  },

  selectMapRegion(regionKey) {
    this.activeRegion = regionKey;
    this.renderRegionsList();
    this.renderSanatoriums();

    const targetSanatorium = SANATORIUMS_DATA.find(s => s.regionKey === regionKey);
    if (targetSanatorium) {
      this.flyToSanatorium(targetSanatorium.id);
    }
  },

  // ==========================================================================
  // 3. SMART QUIZ ("Qaysi Sanatoriya Sizga Mos?")
  // ==========================================================================
  setQuizOption(step, value, btnEl) {
    this.quizAnswers[step] = value;

    // Tugma stilini yangilash
    const parent = btnEl.parentElement;
    parent.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
    btnEl.classList.add('selected');

    // Agar 3 ta savol tanlangan bo'lsa, natijani hisoblash
    if (this.quizAnswers.goal && this.quizAnswers.climate && this.quizAnswers.party) {
      this.calculateQuizResult();
    }
  },

  calculateQuizResult() {
    let matched = SANATORIUMS_DATA[0]; // default Zomin

    if (this.quizAnswers.goal === 'nafas') {
      matched = this.quizAnswers.climate === 'baland_tog' 
        ? SANATORIUMS_DATA.find(s => s.id === 'zomin') 
        : SANATORIUMS_DATA.find(s => s.id === 'oqtosh');
    } else if (this.quizAnswers.goal === 'bogim') {
      matched = SANATORIUMS_DATA.find(s => s.id === 'chortoq') || SANATORIUMS_DATA.find(s => s.id === 'chimyon');
    } else if (this.quizAnswers.goal === 'oshqozon') {
      matched = SANATORIUMS_DATA.find(s => s.id === 'chinobod');
    } else if (this.quizAnswers.goal === 'yurak_asab') {
      matched = this.quizAnswers.party === 'oila' 
        ? SANATORIUMS_DATA.find(s => s.id === 'humson') 
        : SANATORIUMS_DATA.find(s => s.id === 'xonobod');
    }

    const resBox = document.getElementById('quizResultBox');
    if (resBox && matched) {
      resBox.style.display = 'block';
      resBox.innerHTML = `
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.75rem;">
          <img src="${matched.image}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 12px;">
          <div>
            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--primary-700); font-weight: 800;">Sizga 100% Mos Maskan:</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">${matched.name}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${matched.location}</div>
          </div>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-main); line-height: 1.5; margin-bottom: 1rem;">
          🌟 <strong>Nega aynan bu maskan:</strong> ${matched.advantages[0]}
        </p>
        <div style="display: flex; gap: 0.75rem;">
          <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.88rem;" onclick="BookingApp.openBookingModal('${matched.id}')">
            Joy band qilish (${matched.priceFormatted})
          </button>
          <button class="btn-outline" style="padding: 0.5rem 0.85rem; font-size: 0.88rem;" onclick="App.openDetailsModal('${matched.id}')">
            Batafsil ko'rish
          </button>
        </div>
      `;
    }
  },

  // ==========================================================================
  // 4. TAQQOSLASH (COMPARISON) TIZIMI
  // ==========================================================================
  toggleCompare(id) {
    const idx = this.comparedIds.indexOf(id);
    if (idx > -1) {
      this.comparedIds.splice(idx, 1);
      showToast("Sanatoriya taqqoslashdan olib tashlandi", "info");
    } else {
      if (this.comparedIds.length >= 3) {
        showToast("Bir vaqtning o'zida ko'pi bilan 3 ta sanatoriyani taqqoslash mumkin", "warning");
        return;
      }
      this.comparedIds.push(id);
      showToast("Taqqoslashga qo'shildi! Pastdagi dockni bosing.", "success");
    }

    this.updateCompareUI();
    this.renderSanatoriums();
  },

  updateCompareUI() {
    const bar = document.getElementById('compareFloatingBar');
    const countBadge = document.getElementById('compareNavBadge');
    const dockCount = document.getElementById('compareDockCount');
    const thumbs = document.getElementById('compareDockThumbs');

    if (countBadge) countBadge.innerText = this.comparedIds.length;
    if (dockCount) dockCount.innerText = `${this.comparedIds.length} ta sanatoriya tanlandi`;

    if (this.comparedIds.length > 0) {
      if (bar) bar.classList.add('active');
      if (thumbs) {
        thumbs.innerHTML = this.comparedIds.map(id => {
          const s = SANATORIUMS_DATA.find(x => x.id === id);
          return s ? `<img src="${s.image}" class="compare-thumb-img" title="${s.name}">` : '';
        }).join('');
      }
    } else {
      if (bar) bar.classList.remove('active');
    }
  },

  openComparisonModal() {
    if (this.comparedIds.length === 0) {
      showToast("Avval taqqoslash uchun kamida 2 ta sanatoriyani tanlang", "info");
      return;
    }

    const modal = document.getElementById('compareModal');
    const tableBody = document.getElementById('compareTableBody');
    if (!modal || !tableBody) return;

    const items = this.comparedIds.map(id => SANATORIUMS_DATA.find(x => x.id === id)).filter(Boolean);

    tableBody.innerHTML = `
      <tr>
        <th>Sanatoriya Nomi</th>
        ${items.map(s => `
          <td style="font-weight: 800; font-size: 1.1rem; color: var(--text-main);">
            <img src="${s.image}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
            ${s.name}
            <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: normal;">${s.region}</div>
          </td>
        `).join('')}
      </tr>
      <tr>
        <th>1 Kunlik Narxi</th>
        ${items.map(s => `
          <td style="font-weight: 800; font-size: 1.15rem; color: var(--primary-700);">
            ${s.priceFormatted}
            <div style="font-size: 0.75rem; color: #10b981;">(Chegirma: ${s.discount})</div>
          </td>
        `).join('')}
      </tr>
      <tr>
        <th>Balandlik & Iqlim</th>
        ${items.map(s => `
          <td><strong>${s.altitude}</strong><br><span style="font-size: 0.85rem; color: var(--text-muted);">${s.climate}</span></td>
        `).join('')}
      </tr>
      <tr>
        <th>Asosiy Davolash Yo'nalishlari</th>
        ${items.map(s => `
          <td>
            <ul style="padding-left: 1.1rem; font-size: 0.85rem; line-height: 1.5;">
              ${s.specialties.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
          </td>
        `).join('')}
      </tr>
      <tr>
        <th>Qulayliklar & Xizmatlar</th>
        ${items.map(s => `
          <td style="font-size: 0.85rem;">
            ${s.amenities.slice(0, 6).join(' • ')}
          </td>
        `).join('')}
      </tr>
      <tr>
        <th>Asosiy Ustunliklari</th>
        ${items.map(s => `
          <td style="font-size: 0.85rem; color: var(--text-main);">
            ${s.advantages.map(a => `<div>✓ ${a}</div>`).join('')}
          </td>
        `).join('')}
      </tr>
      <tr>
        <th>Amallar</th>
        ${items.map(s => `
          <td>
            <button class="btn-primary" style="width: 100%; font-size: 0.85rem; padding: 0.5rem;" onclick="App.closeModal('compareModal'); BookingApp.openBookingModal('${s.id}')">
              Joy band qilish
            </button>
          </td>
        `).join('')}
      </tr>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  clearComparison() {
    this.comparedIds = [];
    this.updateCompareUI();
    this.renderSanatoriums();
    this.closeModal('compareModal');
  },

  // ==========================================================================
  // 5. BATAFSIL MA'LUMOT (DETAILS MODAL)
  // ==========================================================================
  openDetailsModal(id) {
    const s = SANATORIUMS_DATA.find(x => x.id === id);
    if (!s) return;

    const modal = document.getElementById('detailsModal');
    const content = document.getElementById('detailsModalContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="position: relative; margin: -2rem -2rem 1.5rem -2rem; height: 320px; overflow: hidden;">
        <img src="${s.image}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.85) 100%);"></div>
        <div style="position: absolute; bottom: 20px; left: 24px; color: #fff;">
          <span style="background: var(--primary-600); font-size: 0.78rem; font-weight: 800; padding: 0.25rem 0.75rem; border-radius: 99px;">${s.badge}</span>
          <h2 style="font-size: 2rem; font-weight: 800; margin-top: 6px;">${s.name}</h2>
          <div style="font-size: 0.9rem; opacity: 0.9;">📍 ${s.location} • Balandlik: ${s.altitude}</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
        <div>
          <h4 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.6rem;">Tavsif va Tabiiy Omillar</h4>
          <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">${s.description}</p>

          <h4 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.6rem;">Davolash Ixtisosligi</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1.5rem;">
            ${s.specialties.map(sp => `
              <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.92rem;">
                <span style="color: var(--primary-600); font-weight: 800;">✓</span> ${sp}
              </li>
            `).join('')}
          </ul>

          <h4 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 0.6rem;">Narx Ichiga Kiritilgan Muolajalar</h4>
          <div style="background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
            <ul style="padding-left: 1.2rem; font-size: 0.88rem; line-height: 1.6; color: var(--text-muted);">
              ${s.includedInPrice.map(inc => `<li>${inc}</li>`).join('')}
            </ul>
          </div>

          <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid #ef4444; padding: 1rem; border-radius: var(--radius-sm);">
            <strong style="color: #ef4444; font-size: 0.85rem;">Qarshi Ko'rsatmalar:</strong>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">${s.contraindications}</p>
          </div>
        </div>

        <div>
          <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; position: sticky; top: 1rem;">
            <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">1 kunlik yashash va davo:</div>
            <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary-700); margin-bottom: 1rem;">
              ${s.priceFormatted}
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Reyting:</span>
                <strong>★ ${s.rating} (${s.reviewsCount} sharh)</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Iqlimi:</span>
                <strong>${s.climate.split(',')[0]}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Aloqa markazi:</span>
                <strong>${s.phone}</strong>
              </div>
            </div>

            <button class="btn-primary" style="width: 100%;" onclick="App.closeModal('detailsModal'); BookingApp.openBookingModal('${s.id}')">
              Ushbu Maskanni Band Qilish
            </button>
            <button class="btn-outline" style="width: 100%; margin-top: 0.5rem;" onclick="App.flyToSanatorium('${s.id}'); App.closeModal('detailsModal')">
              Xaritada ko'rish
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  // ==========================================================================
  // 6. SEVIMLILAR (FAVORITES) TIZIMI
  // ==========================================================================
  toggleFavorite(id) {
    const idx = this.favoritesIds.indexOf(id);
    if (idx > -1) {
      this.favoritesIds.splice(idx, 1);
      showToast("Sevimlilardan olib tashlandi", "info");
    } else {
      this.favoritesIds.push(id);
      showToast("Sevimlilar ro'yxatiga saqlandi! ❤️", "success");
    }

    localStorage.setItem('sihat_favorites', JSON.stringify(this.favoritesIds));
    this.updateFavoritesCount();
    this.renderSanatoriums();
    this.renderFavoritesDrawerList();
  },

  loadFavorites() {
    try {
      const data = localStorage.getItem('sihat_favorites');
      this.favoritesIds = data ? JSON.parse(data) : [];
      this.updateFavoritesCount();
    } catch (e) {
      this.favoritesIds = [];
    }
  },

  updateFavoritesCount() {
    const badge = document.getElementById('favNavBadge');
    if (badge) badge.innerText = this.favoritesIds.length;
  },

  renderFavoritesDrawerList() {
    const container = document.getElementById('favoritesDrawerContainer');
    if (!container) return;

    if (this.favoritesIds.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🤍</div>
          <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-main);">Sevimlilar bo'sh</div>
          <p style="font-size: 0.9rem; margin-top: 0.25rem;">O'zingizga yoqqan sanatoriyalar ustidagi yurakcha belgisini bosing!</p>
        </div>
      `;
      return;
    }

    const items = this.favoritesIds.map(id => SANATORIUMS_DATA.find(x => x.id === id)).filter(Boolean);
    container.innerHTML = items.map(s => `
      <div class="drawer-item-card">
        <div style="display: flex; gap: 0.75rem; align-items: center;">
          <img src="${s.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
          <div style="flex-grow: 1;">
            <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-main);">${s.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${s.region}</div>
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--primary-700);">${s.priceFormatted}</div>
          </div>
          <button onclick="App.toggleFavorite('${s.id}')" style="color: #ef4444; font-size: 1.2rem; cursor: pointer;">
            ✕
          </button>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
          <button class="btn-primary" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.8rem;" onclick="App.closeDrawer('favoritesDrawer'); BookingApp.openBookingModal('${s.id}')">
            Band qilish
          </button>
          <button class="btn-outline" style="padding: 0.4rem 0.6rem; font-size: 0.8rem;" onclick="App.closeDrawer('favoritesDrawer'); App.openDetailsModal('${s.id}')">
            Ko'rish
          </button>
        </div>
      </div>
    `).join('');
  },

  // ==========================================================================
  // 7. QULAYLIKLAR VA DAVOLASH YO'NALISHLARI
  // ==========================================================================
  renderTreatments() {
    const container = document.getElementById('treatmentsGrid');
    if (!container) return;

    const list = [
      {
        icon: "💧",
        title: "Balneoterapiya va Mineral Vannalar",
        desc: "Yod-bromli, vodorod-sulfidli va termal tabiiy mineral suvlar tananing qon aylanishini kuchaytiradi, bo'g'im og'riqlarini qoldiradi.",
        tag: "Chortoq, Chinobod, Chimyon"
      },
      {
        icon: "🌲",
        title: "Tog' Iqlimoterapiyasi va Terrenkur",
        desc: "Archazorlar va tog' o'rmonlarining fitonsidlarga boy kislorodli havosi o'pka va nafas yo'llarini chuqur tozalab, immunitetni 100% tiklaydi.",
        tag: "Zomin, Oqtosh, Xonobod"
      },
      {
        icon: "🧂",
        title: "Speleoterapiya (Tabiiy Tuz G'ori)",
        desc: "Mikroskopik aerozolli tabiiy tuz xonalari bronxial astma, allergik yo'tal, rinit va surunkali shamollashlarni dori-darmonsiz davolaydi.",
        tag: "Zomin, Oqtosh, Humson"
      },
      {
        icon: "🌋",
        title: "Shifobaxsh Balchiq (Loy) va Ozokerit",
        desc: "Minerallashgan balchiq va parafin applikatsiyalari chuqur isitish ta'siriga ega bo'lib, umurtqa churrasi (grija) va artritlarda a'lo vositadir.",
        tag: "Chortoq, Chimyon"
      },
      {
        icon: "❤️",
        title: "Kardiomonitoring va Reabilitatsiya",
        desc: "Zamonaviy yapon va nemis EKG apparatlari, doimiy kardiologik nazorat va yurak-qon tomir tizimini bosqichma-bosqich mustahkamlash.",
        tag: "Xonobod, Humson, Botanika"
      },
      {
        icon: "🥗",
        title: "Shifobaxsh Dietoterapiya va Fitobar",
        desc: "Individual kasallikka mos 15 xil parhez taomnoma, tog' giyohlari damlamalari, kislorodli kokteyllar va organizmni tozalovchi detoks.",
        tag: "Barcha Sanatoriyalar"
      }
    ];

    container.innerHTML = list.map(item => `
      <div class="treatment-card">
        <div class="treatment-card-icon" style="font-size: 1.8rem;">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="treatment-sanatorium-tag">Maskanlar: ${item.tag}</span>
      </div>
    `).join('');
  },

  // ==========================================================================
  // KASALLIKLAR VA TASHXISLAR KATALOGI
  // ==========================================================================
  renderDiseasesDirectory() {
    const container = document.getElementById('diseasesGrid');
    if (!container || typeof DISEASES_DIRECTORY_DATA === 'undefined') return;

    container.innerHTML = DISEASES_DIRECTORY_DATA.map(d => `
      <div class="disease-card">
        <div class="disease-card-header">
          <div class="disease-card-icon">${d.icon}</div>
          <div>
            <div class="disease-card-title">${d.name}</div>
          </div>
        </div>

        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem;">
          Tavsiya etiladigan sanatoriylar:
        </div>
        <div class="disease-sanatorium-pills">
          ${d.recommendedSanatoriums.map((name, i) => `
            <span class="disease-san-pill" onclick="App.openDetailsModal('${d.sanatoriumIds[i]}')">
              🏨 ${name}
            </span>
          `).join('')}
        </div>

        <div class="disease-info-block">
          <strong>⚡ Asosiy Shifobaxsh Muolajalar:</strong>
          <div>${d.treatments}</div>
        </div>

        <div class="disease-info-block" style="color: #059669;">
          <strong>🎯 Kutiladigan Natija:</strong>
          <div>${d.expectedResult}</div>
        </div>

        <div class="disease-contra-box">
          <strong style="color: #ef4444; font-size: 0.78rem;">Qarshi ko'rsatma:</strong> ${d.contraindication}
        </div>

        <button class="btn-primary" style="width: 100%; font-size: 0.88rem; padding: 0.6rem;" onclick="BookingApp.openBookingModal('${d.sanatoriumIds[0]}')">
          Ushbu Yo'nalishda Joy Band Qilish →
        </button>
      </div>
    `).join('');
  },

  // ==========================================================================
  // TIBBIY TAYYORGARLIK VA CHECKLIST
  // ==========================================================================
  renderPreparationGuide() {
    const stepsContainer = document.getElementById('guideStepsGrid');
    const checklistContainer = document.getElementById('checklistItemsContainer');
    const scheduleContainer = document.getElementById('dailyScheduleContainer');

    if (typeof PREPARATION_GUIDE_DATA === 'undefined') return;

    // 1. Bosqichlar
    if (stepsContainer) {
      stepsContainer.innerHTML = PREPARATION_GUIDE_DATA.steps.map(s => `
        <div class="guide-step-card">
          <div class="guide-step-num">${s.step}</div>
          <div class="guide-step-title">${s.title}</div>
          <div class="guide-step-desc">${s.desc}</div>
          <div class="guide-step-tip">💡 ${s.tip}</div>
        </div>
      `).join('');
    }

    // 2. Interaktiv Cheklist
    if (checklistContainer) {
      let savedChecks = {};
      try {
        savedChecks = JSON.parse(localStorage.getItem('sihat_user_checklist') || '{}');
      } catch(e) {}

      checklistContainer.innerHTML = PREPARATION_GUIDE_DATA.checklist.map(item => {
        const isChecked = !!savedChecks[item.id];
        return `
          <label class="checklist-item-row ${isChecked ? 'completed' : ''}" id="checkRow-${item.id}">
            <input type="checkbox" id="chk-${item.id}" ${isChecked ? 'checked' : ''} onchange="App.toggleChecklistItem('${item.id}')">
            <span style="font-size: 0.9rem; font-weight: 500;">${item.text}</span>
          </label>
        `;
      }).join('');

      this.updateChecklistProgress();
    }

    // 3. Namunaviy kun tartibi
    if (scheduleContainer) {
      scheduleContainer.innerHTML = PREPARATION_GUIDE_DATA.dailySchedule.map(sc => `
        <div class="schedule-row">
          <span class="schedule-time">${sc.time}</span>
          <span class="schedule-act">${sc.activity}</span>
        </div>
      `).join('');
    }
  },

  toggleChecklistItem(id) {
    let savedChecks = {};
    try {
      savedChecks = JSON.parse(localStorage.getItem('sihat_user_checklist') || '{}');
    } catch(e) {}

    const chk = document.getElementById(`chk-${id}`);
    const row = document.getElementById(`checkRow-${id}`);
    if (chk && row) {
      savedChecks[id] = chk.checked;
      row.classList.toggle('completed', chk.checked);
      localStorage.setItem('sihat_user_checklist', JSON.stringify(savedChecks));
      this.updateChecklistProgress();
    }
  },

  updateChecklistProgress() {
    if (typeof PREPARATION_GUIDE_DATA === 'undefined') return;
    const total = PREPARATION_GUIDE_DATA.checklist.length;
    let savedChecks = {};
    try {
      savedChecks = JSON.parse(localStorage.getItem('sihat_user_checklist') || '{}');
    } catch(e) {}

    const doneCount = Object.values(savedChecks).filter(Boolean).length;
    const progText = document.getElementById('checklistProgressText');
    if (progText) {
      progText.innerText = `${doneCount} / ${total} tayyor`;
    }
  },

  // ==========================================================================
  // RASMIY VAUCHERNI TEKSHIRISH
  // ==========================================================================
  handleVerifyVoucher(e) {
    if (e) e.preventDefault();
    const inputEl = document.getElementById('verifyVoucherInput');
    const resultBox = document.getElementById('verifyResultBox');
    if (!inputEl || !resultBox) return;

    const query = inputEl.value.trim().toUpperCase();
    if (!query) {
      showToast("Iltimos, vaucher raqamini kiriting (masalan: SM-2026-78421)", "error");
      return;
    }

    // Qidirish: LocalStorage buyurtmalari va SAMPLE_VERIFICATION_VOUCHERS
    let userBookings = [];
    try {
      userBookings = JSON.parse(localStorage.getItem('sihat_bookings') || '[]');
    } catch(e) {}

    const allVouchers = [
      ...userBookings,
      ...(typeof SAMPLE_VERIFICATION_VOUCHERS !== 'undefined' ? SAMPLE_VERIFICATION_VOUCHERS : [])
    ];

    const match = allVouchers.find(v => v.code && v.code.toUpperCase() === query);

    resultBox.style.display = 'block';

    if (match) {
      resultBox.innerHTML = `
        <div class="verify-stamp">✓ HAQIQIY</div>
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="font-size: 2rem;">🛡️</span>
          <div>
            <h4 style="font-size: 1.25rem; font-weight: 800; color: #047857;">Rasmiy Elektron Vaucher Tasdiqlandi</h4>
            <div style="font-size: 0.85rem; color: var(--text-muted);">O'zbekiston Davlat Salomatlik Reyestri bilan 100% integratsiyalangan</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; background: var(--bg-surface-subtle); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.25rem;">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Vaucher Raqami</div>
            <strong style="font-size: 1.05rem; color: var(--primary-700);">${match.code}</strong>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Dam Oluvchi F.I.O</div>
            <strong style="font-size: 1.05rem; color: var(--text-main);">${match.fullName}</strong>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Sanatoriya</div>
            <strong style="font-size: 1.05rem; color: var(--text-main);">${match.sanatoriumName}</strong>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Tashrif Muddatlari</div>
            <strong style="font-size: 0.95rem; color: var(--text-main);">${match.checkIn} — ${match.checkOut} (${match.nights} kun)</strong>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">To'lov Qiymati</div>
            <strong style="font-size: 1.05rem; color: #059669;">${match.grandTotal.toLocaleString('uz-UZ')} so'm (To'liq paket)</strong>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Holati</div>
            <span style="display: inline-block; background: #ecfdf5; color: #047857; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 99px; font-size: 0.8rem;">
              ✓ Joy 100% Band Qilingan
            </span>
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
          <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.88rem;" onclick="window.print()">
            🖨️ Nusxa Olish / Chop Etish
          </button>
        </div>
      `;
      showToast("Vaucher muvaffaqiyatli tasdiqlandi!", "success");
    } else {
      resultBox.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">⚠️</div>
          <h4 style="font-size: 1.2rem; font-weight: 800; color: #ef4444; margin-bottom: 0.5rem;">Bunday Vaucher Topilmadi</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); max-width: 500px; margin: 0 auto 1.25rem auto;">
            Siz kiritgan "<strong>${query}</strong>" kodi bazamizda mavjud emas. Kod to'g'ri kiritilganligini tekshiring yoki yangi vaucher olish uchun sanatoriyani tanlang.
          </p>
          <button class="btn-primary" onclick="document.getElementById('katalog').scrollIntoView({behavior: 'smooth'})">
            Sanatoriyalar Katalogiga O'tish →
          </button>
        </div>
      `;
      showToast("Vaucher topilmadi. Kodni qayta tekshiring.", "error");
    }
  },

  // ==========================================================================
  // 8. FAQ VA SHARHLAR
  // ==========================================================================
  renderFaqs() {
    const container = document.getElementById('faqAccordion');
    if (!container) return;

    container.innerHTML = FAQS_DATA.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <button class="faq-question" onclick="App.toggleFaq(this)">
          <span>${faq.q}</span>
          <span class="faq-icon-arrow">▼</span>
        </button>
        <div class="faq-answer">
          ${faq.a}
        </div>
      </div>
    `).join('');
  },

  toggleFaq(buttonEl) {
    const item = buttonEl.parentElement;
    item.classList.toggle('active');
  },

  renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (!container) return;

    // LocalStorage dagi qo'shimcha sharhlar bilan birlashtirish
    let userReviews = [];
    try {
      userReviews = JSON.parse(localStorage.getItem('sihat_user_reviews') || '[]');
    } catch(e) {}

    const all = [...userReviews, ...REVIEWS_DATA];

    container.innerHTML = all.map(r => `
      <div class="review-card">
        <div class="review-user-row">
          <div class="review-avatar">${r.avatar || r.name.substring(0, 2).toUpperCase()}</div>
          <div>
            <div class="review-user-name">${r.name}</div>
            <div class="review-meta">${r.city} • <strong>${r.sanatoriumName}</strong> mehmoni</div>
          </div>
        </div>
        <div style="display: flex; gap: 2px; color: #f59e0b; font-size: 0.95rem;">
          ${'★'.repeat(r.rating)}
        </div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">
          "${r.text}"
        </p>
        <div style="font-size: 0.75rem; color: var(--text-subtle); margin-top: auto;">
          📅 ${r.date} • <span style="color: #059669; font-weight: 700;">✓ Tasdiqlangan tashrif</span>
        </div>
      </div>
    `).join('');
  },

  // Yangi sharh qo'shish
  openAddReviewModal() {
    const modal = document.getElementById('addReviewModal');
    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  submitNewReview(e) {
    e.preventDefault();
    const name = document.getElementById('revName')?.value.trim();
    const city = document.getElementById('revCity')?.value.trim() || "O'zbekiston";
    const sanatoriumId = document.getElementById('revSanatoriumSelect')?.value;
    const rating = parseInt(document.getElementById('revRatingSelect')?.value || '5');
    const text = document.getElementById('revText')?.value.trim();

    if (!name || !text) {
      showToast("Iltimos, ismingiz va sharh matnini to'liq kiriting", "error");
      return;
    }

    const s = SANATORIUMS_DATA.find(x => x.id === sanatoriumId) || SANATORIUMS_DATA[0];

    const newRev = {
      id: Date.now(),
      name,
      city,
      sanatoriumName: s.name,
      sanatoriumId: s.id,
      rating,
      date: new Date().toLocaleDateString('uz-UZ'),
      text,
      avatar: name.substring(0, 2).toUpperCase()
    };

    let list = [];
    try {
      list = JSON.parse(localStorage.getItem('sihat_user_reviews') || '[]');
    } catch(e) {}
    list.unshift(newRev);
    localStorage.setItem('sihat_user_reviews', JSON.stringify(list));

    this.renderReviews();
    this.closeModal('addReviewModal');
    showToast("Sharhingiz uchun tashakkur! Fikringiz e'lon qilindi.", "success");
  },

  // ==========================================================================
  // 9. TEZKOR KONSULTATSIYA (DOKTOR BILAN BOG'LANISH)
  // ==========================================================================
  openConsultationModal() {
    const modal = document.getElementById('consultationModal');
    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  submitConsultationForm(e) {
    e.preventDefault();
    const name = document.getElementById('consName')?.value.trim();
    const phone = document.getElementById('consPhone')?.value.trim();

    if (!name || !phone) {
      showToast("Iltimos, ismingiz va telefoningizni kiriting", "error");
      return;
    }

    this.closeModal('consultationModal');
    showToast(`Rahmat, ${name}! Tibbiy mutaxassisimiz 10 daqiqa ichida siz bilan bog'lanadi.`, "success");
  },

  // ==========================================================================
  // 10. MODALLAR VA DRAWERLAR BOSHQARUVI
  // ==========================================================================
  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  openDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    const backdrop = document.getElementById(`${drawerId}Backdrop`);
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');

    if (drawerId === 'bookingsDrawer') {
      BookingApp.renderMyBookingsList();
    } else if (drawerId === 'favoritesDrawer') {
      this.renderFavoritesDrawerList();
    }
    document.body.style.overflow = 'hidden';
  },

  closeDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    const backdrop = document.getElementById(`${drawerId}Backdrop`);
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  },

  // ==========================================================================
  // 11. TUNGI/KUNDUZGI REJIM (DARK / LIGHT THEME)
  // ==========================================================================
  initTheme() {
    const saved = localStorage.getItem('sihat_theme');
    if (saved === 'dark') {
      document.body.classList.add('dark-mode');
    }
  },

  toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('sihat_theme', isDark ? 'dark' : 'light');
    showToast(isDark ? "Tungi rejim yoqildi" : "Kunduzgi rejim yoqildi", "info");
  },

  // ==========================================================================
  // 12. HODISALAR (EVENT LISTENERS)
  // ==========================================================================
  bindEvents() {
    // Qidiruv maydoni
    const searchIn = document.getElementById('heroSearchInput');
    if (searchIn) {
      searchIn.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderSanatoriums();
      });
    }

    // Hudud selektori
    const regionSel = document.getElementById('searchRegionSelect');
    if (regionSel) {
      regionSel.addEventListener('change', (e) => {
        this.activeRegion = e.target.value;
        this.renderSanatoriums();
      });
    }

    // Yo'nalish selektori
    const specSel = document.getElementById('searchSpecSelect');
    if (specSel) {
      specSel.addEventListener('change', (e) => {
        this.activeSpecialty = e.target.value;
        this.renderSanatoriums();
      });
    }

    // Narx selektori
    const priceSel = document.getElementById('searchPriceSelect');
    if (priceSel) {
      priceSel.addEventListener('change', (e) => {
        this.priceRange = e.target.value;
        this.renderSanatoriums();
      });
    }

    // Katalog tablari
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeCategory = e.currentTarget.dataset.category || 'all';
        this.renderSanatoriums();
      });
    });

    // Saralash (Sort)
    const sortSel = document.getElementById('catalogSortSelect');
    if (sortSel) {
      sortSel.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.renderSanatoriums();
      });
    }

    // Mobil menyu
    const mobileToggle = document.getElementById('mobileNavToggle');
    const navLinks = document.getElementById('navLinksMenu');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
      });
    }
  }
};

// Global Toast Bildirishnoma
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';

  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '⚠️';
  if (type === 'warning') icon = '🔔';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Sahifa to'liq yuklangach ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
