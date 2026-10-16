/**
 * SihatMaskan - Band Qilish (Booking Wizard) va Vaucher Tizimi
 */

const BookingApp = {
  currentStep: 1,
  activeSanatorium: null,
  selectedRoomIndex: 0,
  checkInDate: null,
  checkOutDate: null,
  nights: 10,
  adultsCount: 1,
  childrenCount: 0,
  isPensioner: false,
  appliedPromo: null,
  promoDiscountPct: 0,
  addons: {
    vipCheckup: false,
    transfer: false,
    personalDoctor: false
  },
  lastGeneratedVoucher: null,

  // Inicializatsiya
  init() {
    this.setDefaultDates();
    this.bindEvents();
    this.loadSavedBookings();
  },

  // Standart sanalarni o'rnatish (Bugundan 3 kun keyin boshlanib, 10 kunlik kurs)
  setDefaultDates() {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + 3);

    const end = new Date(start);
    end.setDate(start.getDate() + 10);

    const formatDate = (d) => d.toISOString().split('T')[0];

    const inInput = document.getElementById('bookCheckIn');
    const outInput = document.getElementById('bookCheckOut');

    if (inInput && outInput) {
      inInput.value = formatDate(start);
      inInput.min = formatDate(today);
      outInput.value = formatDate(end);
      outInput.min = formatDate(start);

      this.checkInDate = start;
      this.checkOutDate = end;
      this.calculateNights();
    }
  },

  calculateNights() {
    const inInput = document.getElementById('bookCheckIn');
    const outInput = document.getElementById('bookCheckOut');
    if (!inInput || !outInput) return;

    const start = new Date(inInput.value);
    const end = new Date(outInput.value);

    if (end > start) {
      const diffTime = Math.abs(end - start);
      this.nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } else {
      this.nights = 1;
      const nextDay = new Date(start);
      nextDay.setDate(start.getDate() + 1);
      outInput.value = nextDay.toISOString().split('T')[0];
    }

    const nightsEl = document.getElementById('nightsDisplay');
    if (nightsEl) {
      nightsEl.innerText = `${this.nights} kun (${this.nights - 1} kecha)`;
    }

    this.calculateTotal();
  },

  // Band qilish modalini ochish
  openBookingModal(sanatoriumId, preferredRoomIndex = 0) {
    const sanatorium = SANATORIUMS_DATA.find(s => s.id === sanatoriumId) || SANATORIUMS_DATA[0];
    this.activeSanatorium = sanatorium;
    this.selectedRoomIndex = preferredRoomIndex;
    this.currentStep = 1;

    // Sarlavhani yangilash
    const titleEl = document.getElementById('bookingModalTitle');
    const imgThumbEl = document.getElementById('bookingModalThumb');
    if (titleEl) titleEl.innerText = `${sanatorium.name} — Joy band qilish`;
    if (imgThumbEl) imgThumbEl.src = sanatorium.image;

    // Xonalar ro'yxatini chiqarish
    this.renderRoomOptions();
    this.updateWizardUI();
    this.calculateTotal();

    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  // Xona variantlarini chizish
  renderRoomOptions() {
    const container = document.getElementById('roomOptionsList');
    if (!container || !this.activeSanatorium) return;

    container.innerHTML = this.activeSanatorium.rooms.map((room, index) => `
      <div class="room-radio-card ${index === this.selectedRoomIndex ? 'selected' : ''}" onclick="BookingApp.selectRoom(${index})">
        <div class="room-radio-header">
          <span>${room.name}</span>
          <span class="room-radio-price">${room.price.toLocaleString('uz-UZ')} so'm</span>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">${room.desc}</p>
      </div>
    `).join('');
  },

  selectRoom(index) {
    this.selectedRoomIndex = index;
    this.renderRoomOptions();
    this.calculateTotal();
  },

  // Jonli narxni hisoblash
  calculateTotal() {
    if (!this.activeSanatorium) return;

    const baseRoomPrice = this.activeSanatorium.rooms[this.selectedRoomIndex]?.price || this.activeSanatorium.price;
    const baseTotal = baseRoomPrice * this.nights * this.adultsCount;

    // Bolalar uchun 40% narx
    const childrenTotal = this.childrenCount * (baseRoomPrice * 0.4) * this.nights;

    // Qo'shimcha xizmatlar
    let addonsTotal = 0;
    if (this.addons.vipCheckup) addonsTotal += 150000;
    if (this.addons.transfer) addonsTotal += 200000;
    if (this.addons.personalDoctor) addonsTotal += 120000;

    let subTotal = baseTotal + childrenTotal + addonsTotal;

    // Chegirmalar
    let discountAmount = 0;
    if (this.isPensioner) {
      discountAmount += (baseTotal * 0.10); // 10% pensioner chegirmasi
    }

    if (this.promoDiscountPct > 0) {
      discountAmount += (subTotal * (this.promoDiscountPct / 100));
    }

    const grandTotal = Math.max(0, subTotal - discountAmount);

    // Ekranga chiqarish
    const elRoomRate = document.getElementById('breakdownRoomRate');
    const elNights = document.getElementById('breakdownNights');
    const elAddons = document.getElementById('breakdownAddons');
    const elDiscount = document.getElementById('breakdownDiscount');
    const elGrandTotal = document.getElementById('breakdownGrandTotal');

    if (elRoomRate) elRoomRate.innerText = `${baseRoomPrice.toLocaleString('uz-UZ')} so'm x ${this.adultsCount} mehmon`;
    if (elNights) elNights.innerText = `${this.nights} kun`;
    if (elAddons) elAddons.innerText = `${addonsTotal.toLocaleString('uz-UZ')} so'm`;
    if (elDiscount) elDiscount.innerText = `-${Math.round(discountAmount).toLocaleString('uz-UZ')} so'm`;
    if (elGrandTotal) elGrandTotal.innerText = `${Math.round(grandTotal).toLocaleString('uz-UZ')} so'm`;

    return {
      baseRoomPrice,
      nights: this.nights,
      adults: this.adultsCount,
      children: this.childrenCount,
      addonsTotal,
      discountAmount,
      grandTotal: Math.round(grandTotal)
    };
  },

  // Qadamlar boshqaruvi
  nextStep() {
    if (this.currentStep === 1) {
      // Validate dates
      if (this.nights < 1) {
        showToast("Iltimos, to'g'ri kelish va ketish sanalarini tanlang", "error");
        return;
      }
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      this.currentStep = 3;
    } else if (this.currentStep === 3) {
      // Shaxsiy ma'lumotlarni tekshirish
      const fullName = document.getElementById('bookFullName')?.value.trim();
      const phone = document.getElementById('bookPhone')?.value.trim();

      if (!fullName || fullName.length < 3) {
        showToast("Iltimos, ism va familiyangizni to'liq kiriting", "error");
        document.getElementById('bookFullName')?.focus();
        return;
      }

      if (!phone || phone.length < 9) {
        showToast("Iltimos, telefon raqamingizni kiriting", "error");
        document.getElementById('bookPhone')?.focus();
        return;
      }

      // Buyurtmani yakunlash va vaucher yaratish
      this.finishBooking();
      this.currentStep = 4;
    }

    this.updateWizardUI();
  },

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateWizardUI();
    }
  },

  updateWizardUI() {
    // Stepper holatlari
    for (let i = 1; i <= 4; i++) {
      const stepEl = document.getElementById(`wizStep${i}`);
      const paneEl = document.getElementById(`wizPane${i}`);

      if (stepEl) {
        stepEl.classList.remove('active', 'completed');
        if (i === this.currentStep) stepEl.classList.add('active');
        else if (i < this.currentStep) stepEl.classList.add('completed');
      }

      if (paneEl) {
        paneEl.style.display = (i === this.currentStep) ? 'block' : 'none';
      }
    }

    // Tugmalar
    const prevBtn = document.getElementById('bookPrevBtn');
    const nextBtn = document.getElementById('bookNextBtn');

    if (prevBtn) {
      prevBtn.style.visibility = (this.currentStep > 1 && this.currentStep < 4) ? 'visible' : 'hidden';
    }

    if (nextBtn) {
      if (this.currentStep === 1) nextBtn.innerText = "Keyingisi: Mehmonlar va Xizmatlar →";
      else if (this.currentStep === 2) nextBtn.innerText = "Keyingisi: Buyurtmachi Ma'lumotlari →";
      else if (this.currentStep === 3) nextBtn.innerText = "Tasdiqlash va Vaucher Olish ✓";
      else if (this.currentStep === 4) nextBtn.style.display = 'none';
    }
  },

  // Promokod qo'llash
  applyPromoCode() {
    const promoInput = document.getElementById('bookPromoInput');
    const msgEl = document.getElementById('promoMessage');
    if (!promoInput) return;

    const code = promoInput.value.trim().toUpperCase();

    if (code === 'SIHAT2026' || code === 'SALOMAT') {
      this.appliedPromo = code;
      this.promoDiscountPct = 10;
      if (msgEl) {
        msgEl.innerHTML = `<span style="color: #10b981; font-weight: 700;">✓ Promokod faollashtirildi! 10% chegirma berildi.</span>`;
      }
      showToast("10% maxsus chegirma muvaffaqiyatli qo'llanildi!", "success");
    } else if (code === 'NAVRUZ' || code === 'BAHOR') {
      this.appliedPromo = code;
      this.promoDiscountPct = 15;
      if (msgEl) {
        msgEl.innerHTML = `<span style="color: #10b981; font-weight: 700;">✓ Bayram aksiyasi! 15% chegirma berildi.</span>`;
      }
      showToast("15% bayram aksiyasi chegirmasi berildi!", "success");
    } else {
      if (msgEl) {
        msgEl.innerHTML = `<span style="color: #ef4444; font-weight: 600;">Noto'g'ri promokod. Masalan: SIHAT2026</span>`;
      }
    }

    this.calculateTotal();
  },

  // Buyurtmani yakunlash va Vaucher generatsiyasi
  finishBooking() {
    const calc = this.calculateTotal();
    const fullName = document.getElementById('bookFullName')?.value.trim();
    const phone = document.getElementById('bookPhone')?.value.trim();
    const passport = document.getElementById('bookPassport')?.value.trim() || "Tasdiqlanmoqda";
    const notes = document.getElementById('bookNotes')?.value.trim() || "Maxsus ko'rsatma yo'q";

    const voucherCode = `SM-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const selectedRoom = this.activeSanatorium.rooms[this.selectedRoomIndex];

    const voucherData = {
      code: voucherCode,
      sanatoriumId: this.activeSanatorium.id,
      sanatoriumName: this.activeSanatorium.name,
      location: this.activeSanatorium.location,
      phoneContact: this.activeSanatorium.phone,
      roomName: selectedRoom.name,
      checkIn: document.getElementById('bookCheckIn')?.value,
      checkOut: document.getElementById('bookCheckOut')?.value,
      nights: this.nights,
      adults: this.adultsCount,
      children: this.childrenCount,
      fullName: fullName,
      phone: phone,
      passport: passport,
      notes: notes,
      grandTotal: calc.grandTotal,
      status: "Tasdiqlangan",
      createdAt: new Date().toLocaleDateString('uz-UZ')
    };

    this.lastGeneratedVoucher = voucherData;

    // Saqlash
    this.saveBooking(voucherData);

    // Ekranga chizish
    this.renderVoucherPass(voucherData);

    // Bildirishnoma
    showToast(`Buyurtma tasdiqlandi! Vaucher kodi: ${voucherCode}`, "success");
  },

  // Vaucher pass kartasini chizish
  renderVoucherPass(v) {
    const container = document.getElementById('voucherOutputArea');
    if (!container) return;

    container.innerHTML = `
      <div class="voucher-pass-card" id="printableVoucher">
        <div class="voucher-pass-header">
          <div class="voucher-logo-area">
            <span>🌿 SihatMaskan</span>
            <span style="font-size: 0.8rem; background: rgba(255,255,255,0.25); padding: 0.2rem 0.6rem; border-radius: 99px;">Rasmiy Elektron Vaucher</span>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.75rem; text-transform: uppercase; opacity: 0.85;">Vaucher Raqami</div>
            <div style="font-size: 1.15rem; font-weight: 800; letter-spacing: 0.05em;">${v.code}</div>
          </div>
        </div>

        <div class="voucher-pass-body">
          <div class="voucher-info-grid">
            <div>
              <div class="voucher-field-label">Sanatoriya</div>
              <div class="voucher-field-val">${v.sanatoriumName}</div>
              <div style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">${v.location}</div>
            </div>
            <div>
              <div class="voucher-field-label">Dam Oluvchi (F.I.O)</div>
              <div class="voucher-field-val">${v.fullName}</div>
              <div style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">Tel: ${v.phone}</div>
            </div>
            <div>
              <div class="voucher-field-label">Kelish - Ketish Muddatlari</div>
              <div class="voucher-field-val">${v.checkIn} — ${v.checkOut}</div>
              <div style="font-size: 0.8rem; color: #059669; font-weight: 700; margin-top: 2px;">${v.nights} Kunlik To'liq Kurs</div>
            </div>
            <div>
              <div class="voucher-field-label">Xona Toifasi & Mehmonlar</div>
              <div class="voucher-field-val">${v.roomName}</div>
              <div style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">${v.adults} Katta ${v.children > 0 ? `, ${v.children} Bola` : ''}</div>
            </div>
            <div>
              <div class="voucher-field-label">Jami To'lov Qiymati</div>
              <div class="voucher-field-val" style="color: #059669; font-size: 1.3rem;">${v.grandTotal.toLocaleString('uz-UZ')} so'm</div>
              <div style="font-size: 0.75rem; color: #64748b;">(Davolash + 3 mahal ovqat + yashash)</div>
            </div>
            <div>
              <div class="voucher-field-label">Buyurtma Statusi</div>
              <div style="display: inline-block; background: #ecfdf5; color: #047857; font-weight: 800; padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.85rem; border: 1px solid #a7f3d0;">
                ✓ 100% Tasdiqlangan
              </div>
            </div>
          </div>

          <div class="voucher-qr-area">
            <div class="qr-code-box">
              <div class="qr-simulated-matrix"></div>
            </div>
            <div style="font-size: 0.75rem; font-weight: 700; color: #0f172a;">SKANER QILISH</div>
            <div style="font-size: 0.7rem; color: #64748b;">Rasmiy ma'lumotlar bazasi bilan integratsiya</div>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 1rem 2rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: #64748b;">
          <div>📞 Sanatoriya Ma'lumotlar Markazi: <strong>${v.phoneContact}</strong></div>
          <div>Muhr & Tasdiq: Rasmiy Davlat Salomatlik Reyestri</div>
        </div>
      </div>

      <div class="voucher-actions">
        <button class="btn-primary" onclick="BookingApp.printVoucher()">
          🖨️ Chop etish / PDF saqlash
        </button>
        <button class="btn-outline" onclick="BookingApp.shareVoucherTelegram()">
          ✈️ Telegramga yuborish
        </button>
        <button class="btn-outline" onclick="BookingApp.closeBookingModal(); App.openDrawer('bookingsDrawer')">
          📋 Mening Buyurtmalarim
        </button>
      </div>
    `;
  },

  // Vaucher chop etish
  printVoucher() {
    window.print();
  },

  shareVoucherTelegram() {
    if (!this.lastGeneratedVoucher) return;
    const v = this.lastGeneratedVoucher;
    const text = encodeURIComponent(`Salom! Men SihatMaskan portali orqali ${v.sanatoriumName} sanatoriyasiga muvaffaqiyatli yo'llanma (Vaucher: ${v.code}) band qildim! Sanalar: ${v.checkIn} dan ${v.checkOut} gacha.`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank');
  },

  // LocalStorage amallari
  saveBooking(voucher) {
    const list = this.getSavedBookings();
    list.unshift(voucher);
    localStorage.setItem('sihat_bookings', JSON.stringify(list));
    this.updateBookingsCount();
  },

  getSavedBookings() {
    try {
      const data = localStorage.getItem('sihat_bookings');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  loadSavedBookings() {
    this.updateBookingsCount();
  },

  updateBookingsCount() {
    const list = this.getSavedBookings();
    const countEl = document.getElementById('myBookingsCountBadge');
    if (countEl) countEl.innerText = list.length;
  },

  renderMyBookingsList() {
    const container = document.getElementById('myBookingsListContainer');
    if (!container) return;

    const list = this.getSavedBookings();
    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌿</div>
          <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-main);">Hozircha buyurtmalar yo'q</div>
          <p style="font-size: 0.9rem; margin-top: 0.25rem;">O'zingizga ma'qul sanatoriyani tanlab, birinchi joyingizni band qiling!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map((b, idx) => `
      <div class="drawer-item-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-main);">${b.sanatoriumName}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${b.roomName} • ${b.nights} kun</div>
          </div>
          <span style="background: var(--primary-100); color: var(--primary-800); font-size: 0.72rem; font-weight: 800; padding: 0.2rem 0.55rem; border-radius: 99px;">
            ${b.code}
          </span>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-main); margin-top: 0.35rem;">
          📅 <strong>${b.checkIn}</strong> dan <strong>${b.checkOut}</strong> gacha
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; pt: 0.5rem; border-top: 1px dashed var(--border-color);">
          <div style="font-weight: 800; color: var(--primary-700);">${b.grandTotal.toLocaleString('uz-UZ')} so'm</div>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn-card-detail" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="BookingApp.viewSavedVoucher(${idx})">
              Vaucher
            </button>
            <button class="btn-card-detail" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; color: #ef4444;" onclick="BookingApp.cancelBooking(${idx})">
              Bekor qilish
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  viewSavedVoucher(index) {
    const list = this.getSavedBookings();
    if (list[index]) {
      this.lastGeneratedVoucher = list[index];
      this.activeSanatorium = SANATORIUMS_DATA.find(s => s.id === list[index].sanatoriumId) || SANATORIUMS_DATA[0];
      this.currentStep = 4;
      this.renderVoucherPass(list[index]);
      this.updateWizardUI();

      App.closeDrawer('bookingsDrawer');
      const modal = document.getElementById('bookingModal');
      if (modal) modal.classList.add('active');
    }
  },

  cancelBooking(index) {
    if (confirm("Haqiqatan ham ushbu buyurtmani bekor qilmoqchimisiz?")) {
      const list = this.getSavedBookings();
      list.splice(index, 1);
      localStorage.setItem('sihat_bookings', JSON.stringify(list));
      this.updateBookingsCount();
      this.renderMyBookingsList();
      showToast("Buyurtma muvaffaqiyatli bekor qilindi", "info");
    }
  },

  // Event tinglovchilari
  bindEvents() {
    const inInput = document.getElementById('bookCheckIn');
    const outInput = document.getElementById('bookCheckOut');

    if (inInput) inInput.addEventListener('change', () => this.calculateNights());
    if (outInput) outInput.addEventListener('change', () => this.calculateNights());

    // Mehmonlar soni o'zgarganda
    const adultSel = document.getElementById('bookAdultsSelect');
    const childSel = document.getElementById('bookChildrenSelect');
    const pensionCheck = document.getElementById('bookPensionerCheck');

    if (adultSel) {
      adultSel.addEventListener('change', (e) => {
        this.adultsCount = parseInt(e.target.value) || 1;
        this.calculateTotal();
      });
    }

    if (childSel) {
      childSel.addEventListener('change', (e) => {
        this.childrenCount = parseInt(e.target.value) || 0;
        this.calculateTotal();
      });
    }

    if (pensionCheck) {
      pensionCheck.addEventListener('change', (e) => {
        this.isPensioner = e.target.checked;
        this.calculateTotal();
      });
    }

    // Qo'shimcha xizmatlar
    const chkVip = document.getElementById('chkAddonVip');
    const chkTransfer = document.getElementById('chkAddonTransfer');
    const chkDoctor = document.getElementById('chkAddonDoctor');

    if (chkVip) chkVip.addEventListener('change', (e) => { this.addons.vipCheckup = e.target.checked; this.calculateTotal(); });
    if (chkTransfer) chkTransfer.addEventListener('change', (e) => { this.addons.transfer = e.target.checked; this.calculateTotal(); });
    if (chkDoctor) chkDoctor.addEventListener('change', (e) => { this.addons.personalDoctor = e.target.checked; this.calculateTotal(); });
  }
};
