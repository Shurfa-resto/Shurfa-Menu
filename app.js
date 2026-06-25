
(function () {
  'use strict';

  // =========================================================================
  // Menu data — single source of truth
  // =========================================================================
  const MENU_DATA = [
    {
      id: 'mezza',
      navLabel: 'Mezza',
      titleEn: 'MEZZA',
      titleAr: 'مازة',
      subsections: [
        {
          label: 'Cold Mezza',
          items: [
            { en: 'Hummus', ar: 'حمص', price: 5.0 },
            { en: 'Hummus + Meat', ar: 'حمص باللحمة', price: 8.5 },
            { en: 'Mutabbal', ar: 'متبل', price: 5.0 },
            { en: 'Labneh', ar: 'لبنة', price: 5.0 },
            { en: 'Labneh + Garlic', ar: 'لبنة بالثوم', price: 5.5 },
            { en: 'Chmandar', ar: 'شمندر', price: 4.5 },
            { en: 'Warak Enab', ar: 'ورق عنب', price: 5.5 },
          ],
        },
        {
          label: 'Hot Mezza',
          items: [
            { en: 'Eggs + Qawarma', ar: 'بيض بقاورما', price: 9.0 },
            { en: 'Pastirma', ar: 'بسطرمة', price: 9.0 },
            { en: 'Balila', ar: 'بليلة', price: 5.0 },
            { en: 'Batata + Kizbara', ar: 'بطاطا بكزبرة', price: 7.5 },
            { en: 'Batata Harra', ar: 'بطاطا حرة', price: 7.0 },
            { en: 'French Fries', ar: 'بطاطا مقلية', price: 5.5 },
            { en: 'Sambousek', ar: 'سمبوسك', price: 6.0 },
            { en: 'Cheese Rolls', ar: 'رقاقات', price: 5.5 },
            { en: 'Kibbeh', ar: 'قراص كبة', price: 6.0 },
            { en: 'Soujouk', ar: 'سجق', price: 8.0 },
            { en: 'Naqaneq', ar: 'نقانق', price: 8.5 },
            { en: 'Chicken Liver', ar: 'قصبة دجاج', price: 7.0 },
            { en: 'Ras Asfour', ar: 'راس عصفور', price: 11.0 },
          ],
        },
      ],
    },
    {
      id: 'salads',
      navLabel: 'Salads',
      titleEn: 'SALADS',
      titleAr: 'السلطات',
      items: [
        { en: 'Caesar Salad', ar: 'سيزار', price: 9.0 },
        { en: 'Fattoush', ar: 'فتوش ', price: 6.0 },
        { en: 'Tabbouleh ', ar: 'تبولة ', price: 6.0 },
        { en: 'Eggplant Salad', ar: 'سلطة الراهب', price: 7.0 },
      ],
    },
    {
      id: 'grills',
      navLabel: 'Grills',
      titleEn: 'GRILLS',
      titleAr: 'المشاوي',
      items: [
        { en: '1/2 Chicken  ', ar: 'نصف فروج ', price: 9.0 },
        { en: 'Chicken', ar: 'فروج ', price: 17.0 },
        { en: 'Meat', ar: 'لحم', price: 15.0 },
        { en: 'Red Taouk', ar: 'طاووق أحمر', price: 12.0 },
        { en: 'White Taouk', ar: 'طاووق أبيض', price: 12.0 },
        { en: 'Kafta', ar: 'كفتة', price: 11.0 },
        { en: 'Kebab', ar: 'كباب', price: 11.0 },
      ],
    },
    {
      id: 'raw-meat',
      navLabel: 'Raw Meat',
      titleEn: 'RAW MEAT',
      titleAr: 'اللحوم النيئة',
      items: [
        { en: 'Raw kibbeh', ar: 'كبة نيّة + فتيلة', price: 11.0 },
      ],
    },
    {
      id: 'platters',
      navLabel: 'Platters',
      titleEn: 'PLATTERS',
      titleAr: 'أطباق',
      items: [
        { en: 'Fajita Platter', ar: 'فاهيتا', price: 13.5 },
        { en: 'Shish Taouk Platter', ar: 'طاووق', price: 11.5 },
        { en: 'Crispy Chicken Platter', ar: 'كريسبي', price: 13.5 },
        { en: 'Meat Steak Platter', ar: 'ستيك لحم', price: 18.0 },
        {
          en: 'Chicken Steak Platter',
          ar: 'ستيك دجاج',
          price: 14.5,
          desc: 'Sautéed with Garlic & Lemon',
          descAr: 'مطفى بالثوم والحامض',
        },
      ],
    },
    {
      id: 'burgers',
      navLabel: 'Burgers',
      titleEn: 'BURGERS & SANDWICHES',
      titleAr: 'برغر وسندويش',
      subsections: [
        {
          label: 'Burgers',
          items: [
            { en: 'Ham Burger ', ar: 'همبرغر ', price: 9.0 },
            { en: 'Chicken Burger ', ar: 'برغر دجاج', price: 10.0 },
          ],
        },
        {
          label: 'Sandwiches',
          items: [
            { en: 'Submarine', ar: 'سابمارين', price: 10.0 },
            { en: 'Crispy Chicken Sandwich', ar: 'سندويش كريسبي', price: 7.5 },
            { en: 'Fajitas Sandwich', ar: 'سندويش فاهيتا', price: 10.0 },
          ],
        },
      ],
    },
    {
      id: 'drinks',
      navLabel: 'Drinks & Hookah',
      titleEn: 'DRINKS & HOOKAH',
      titleAr: 'المشروبات والأرجيلة',
      subsections: [
        {
          label: 'Soft Drinks & Water',
          items: [
            { en: 'Small Water', ar: 'مياه صغيرة', price: 1.0 },
            { en: 'Large Water', ar: 'مياه كبيرة', price: 2.0 },
            { en: 'Soft Drinks / Pepsi / 7Up', ar: 'مشروبات غازية', price: 2.0 },
            { en: 'Beer', ar: 'بيرة', price: 4.0 },
          ],
        },
        {
          label: 'Hookah',
          items: [
            { en: 'Hookah', ar: 'أرجيلة', price: 7.0 },
          ],
        },
      ],
    },
  ];

  const ORDER_STORAGE_KEY = 'shurfa-order-list';

  // =========================================================================
  // DOM references
  // =========================================================================
  const navContainer = document.querySelector('#category-nav [role="tablist"]');
  const menuContainer = document.getElementById('menu-sections');
  const siteHeader = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');
  const orderFab = document.getElementById('order-fab');
  const orderFabCount = document.getElementById('order-fab-count');
  const orderOverlay = document.getElementById('order-overlay');
  const orderPanel = document.getElementById('order-panel');
  const orderPanelClose = document.getElementById('order-panel-close');
  const orderListEl = document.getElementById('order-list');
  const orderEmptyEl = document.getElementById('order-empty');

  /** itemId → { id, en, ar, price, qty } */
  let orderList = {};

  /** Suppress scroll spy while programmatically scrolling to a section */
  let isNavigating = false;
  let navigateTimer = null;
  let scrollSpyObserver = null;
  let layoutRefreshTimer = null;

  // =========================================================================
  // Helpers
  // =========================================================================

  /** Format price as USD string */
  function formatPrice(amount) {
    return '$' + amount.toFixed(2);
  }

  /** Escape HTML to prevent injection if data is ever edited */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /** Stable id for each menu item */
  function buildItemId(sectionId, item, index) {
    const slug = item.en
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return sectionId + '--' + (slug || 'item') + (index > 0 ? '--' + index : '');
  }

  /** Assign unique ids to every item in MENU_DATA */
  function assignMenuItemIds() {
    MENU_DATA.forEach((section) => {
      const seen = {};

      function tagItems(items) {
        items.forEach((item, index) => {
          let id = buildItemId(section.id, item, index);
          if (seen[id]) {
            id = id + '--' + index;
          }
          seen[id] = true;
          item.id = id;
        });
      }

      if (section.subsections) {
        section.subsections.forEach((sub) => tagItems(sub.items));
      } else if (section.items) {
        tagItems(section.items);
      }
    });
  }

  /** Look up item metadata by id */
  function findMenuItem(itemId) {
    for (const section of MENU_DATA) {
      const pools = section.subsections
        ? section.subsections.map((s) => s.items)
        : [section.items];
      for (const items of pools) {
        const found = items.find((item) => item.id === itemId);
        if (found) return found;
      }
    }
    return null;
  }

  /** Total number of items in the order (sum of quantities) */
  function getOrderCount() {
    return Object.values(orderList).reduce((sum, entry) => sum + entry.qty, 0);
  }

  function saveOrderList() {
    try {
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orderList));
    } catch (_) {
      /* storage unavailable */
    }
  }

  function loadOrderList() {
    try {
      const raw = localStorage.getItem(ORDER_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        orderList = parsed;
        Object.keys(orderList).forEach((id) => {
          if (!findMenuItem(id)) {
            delete orderList[id];
          }
        });
      }
    } catch (_) {
      orderList = {};
    }
  }

  function addToOrder(itemId) {
    const item = findMenuItem(itemId);
    if (!item) return;

    if (orderList[itemId]) {
      orderList[itemId].qty += 1;
    } else {
      orderList[itemId] = {
        id: item.id,
        en: item.en.trim(),
        ar: item.ar.trim(),
        price: item.price,
        qty: 1,
      };
    }

    saveOrderList();
    syncOrderUI();
  }

  function setOrderQty(itemId, qty) {
    if (!orderList[itemId]) return;

    if (qty <= 0) {
      delete orderList[itemId];
    } else {
      orderList[itemId].qty = qty;
    }

    saveOrderList();
    syncOrderUI();
  }

  function syncMenuItemStates() {
    menuContainer.querySelectorAll('.menu-item-btn').forEach((btn) => {
      const itemId = btn.dataset.itemId;
      const entry = orderList[itemId];
      const qty = entry ? entry.qty : 0;
      const isSelected = qty > 0;

      btn.classList.toggle('is-selected', isSelected);
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

      const badge = btn.querySelector('.menu-item-qty-badge');
      if (badge) {
        badge.hidden = !isSelected;
        badge.textContent = String(qty);
      }
    });
  }

  function renderOrderPanelList() {
    const entries = Object.values(orderList);
    const hasItems = entries.length > 0;

    orderEmptyEl.hidden = hasItems;
    orderListEl.hidden = !hasItems;

    if (!hasItems) {
      orderListEl.innerHTML = '';
      orderFab.classList.remove('has-items');
      orderFabCount.hidden = true;
      return;
    }

    orderListEl.innerHTML = entries
      .map(
        (entry) => `
        <li class="order-list-item" data-item-id="${escapeHtml(entry.id)}">
          <div class="order-list-item-info">
            <span class="order-list-item-en">${escapeHtml(entry.en)}</span>
            <span class="order-list-item-ar" dir="rtl" lang="ar">${escapeHtml(entry.ar)}</span>
          </div>
          <div class="order-list-item-controls">
            <button type="button" class="order-qty-btn" data-action="decrease" aria-label="Decrease ${escapeHtml(entry.en)}">−</button>
            <span class="order-qty-value" aria-live="polite">${entry.qty}</span>
            <button type="button" class="order-qty-btn" data-action="increase" aria-label="Increase ${escapeHtml(entry.en)}">+</button>
            <span class="order-list-item-price">${formatPrice(entry.price * entry.qty)}</span>
          </div>
        </li>
      `
      )
      .join('');

    const count = getOrderCount();
    orderFab.classList.add('has-items');
    orderFabCount.hidden = false;
    orderFabCount.textContent = count > 99 ? '99+' : String(count);
  }

  function syncOrderUI() {
    syncMenuItemStates();
    renderOrderPanelList();
  }

  function openOrderPanel() {
    orderOverlay.hidden = false;
    orderPanel.hidden = false;
    orderFab.setAttribute('aria-expanded', 'true');
    orderOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('order-panel-open');
    requestAnimationFrame(() => {
      orderOverlay.classList.add('is-visible');
      orderPanel.classList.add('is-visible');
    });
    orderPanelClose.focus();
  }

  function closeOrderPanel() {
    orderOverlay.classList.remove('is-visible');
    orderPanel.classList.remove('is-visible');
    orderFab.setAttribute('aria-expanded', 'false');
    orderOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('order-panel-open');

    const finish = () => {
      orderPanel.hidden = true;
      orderOverlay.hidden = true;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
    } else {
      orderPanel.addEventListener('transitionend', finish, { once: true });
      setTimeout(finish, 650);
    }

    orderFab.focus();
  }

  function handleMenuItemClick(event) {
    const btn = event.target.closest('.menu-item-btn');
    if (!btn) return;
    addToOrder(btn.dataset.itemId);
  }

  function handleOrderListClick(event) {
    const qtyBtn = event.target.closest('.order-qty-btn');
    if (!qtyBtn) return;

    const row = qtyBtn.closest('.order-list-item');
    if (!row) return;

    const itemId = row.dataset.itemId;
    const entry = orderList[itemId];
    if (!entry) return;

    if (qtyBtn.dataset.action === 'increase') {
      setOrderQty(itemId, entry.qty + 1);
    } else {
      setOrderQty(itemId, entry.qty - 1);
    }
  }

  function initOrderList() {
    loadOrderList();
    syncOrderUI();

    menuContainer.addEventListener('click', handleMenuItemClick);
    orderListEl.addEventListener('click', handleOrderListClick);

    orderFab.addEventListener('click', openOrderPanel);
    orderPanelClose.addEventListener('click', closeOrderPanel);
    orderOverlay.addEventListener('click', closeOrderPanel);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !orderPanel.hidden) {
        closeOrderPanel();
      }
    });
  }

  // =========================================================================
  // Render functions
  // =========================================================================

  /** Build a single menu item row */
  function renderMenuItem(item) {
    const descHtml = item.desc
      ? `<p class="menu-item-desc">${escapeHtml(item.desc)}</p>`
      : '';
    const descArHtml = item.descAr
      ? `<p class="menu-item-desc">${escapeHtml(item.descAr)}</p>`
      : '';

    return `
      <li class="menu-item">
        <button
          type="button"
          class="menu-item-btn"
          data-item-id="${escapeHtml(item.id)}"
          aria-pressed="false"
          aria-label="Add ${escapeHtml(item.en.trim())} to your order"
        >
          <span class="menu-item-qty-badge" hidden aria-hidden="true">0</span>
          <div class="menu-item-grid">
            <div class="menu-item-en">
              ${escapeHtml(item.en)}
              ${descHtml}
            </div>
            <span class="menu-item-price">${formatPrice(item.price)}</span>
            <div class="menu-item-ar" dir="rtl" lang="ar">
              ${escapeHtml(item.ar)}
              ${descArHtml}
            </div>
          </div>
        </button>
      </li>
    `;
  }

  /** Build item list (flat or from subsections) */
  function renderItems(section) {
    if (section.subsections) {
      return section.subsections
        .map(
          (sub) => `
          <div class="subsection-block">
            <h4 class="subsection-label">${escapeHtml(sub.label)}</h4>
            <ul class="menu-list" role="list">
              ${sub.items.map(renderMenuItem).join('')}
            </ul>
          </div>
        `
        )
        .join('');
    }

    return `
      <ul class="menu-list" role="list">
        ${section.items.map(renderMenuItem).join('')}
      </ul>
    `;
  }

  /** Build a full menu section */
  function renderSection(section) {
    return `
      <section
        id="section-${section.id}"
        class="menu-section"
        data-category="${section.id}"
        aria-labelledby="heading-${section.id}"
      >
        <header class="section-header">
          <h3 id="heading-${section.id}">
            ${escapeHtml(section.titleEn)}
            <span class="section-divider" aria-hidden="true">|</span>
            <span class="section-title-ar font-arabic" dir="rtl" lang="ar">${escapeHtml(section.titleAr)}</span>
          </h3>
        </header>
        ${renderItems(section)}
      </section>
    `;
  }

  /** Build category navigation pills */
  function renderNav() {
    const allButton = `
      <button
        type="button"
        class="nav-pill is-active"
        data-category="all"
        role="tab"
        aria-selected="true"
        aria-controls="menu-sections"
      >All</button>
    `;

    const categoryButtons = MENU_DATA.map(
      (section) => `
      <button
        type="button"
        class="nav-pill"
        data-category="${section.id}"
        role="tab"
        aria-selected="false"
        aria-controls="section-${section.id}"
      >${escapeHtml(section.navLabel)}</button>
    `
    ).join('');

    navContainer.innerHTML = allButton + categoryButtons;
  }

  // =========================================================================
  // Navigation
  // =========================================================================

  /** Sync layout offsets with the live sticky header height */
  function updateHeaderHeight() {
    document.documentElement.style.setProperty(
      '--header-height',
      siteHeader.offsetHeight + 'px'
    );
  }

  /** Re-measure header and refresh scroll spy after animated layout changes */
  function scheduleLayoutRefresh() {
    updateHeaderHeight();
    clearTimeout(layoutRefreshTimer);
    layoutRefreshTimer = setTimeout(refreshScrollSpy, 60);
  }

  /** Keep the active pill visible inside the horizontal nav strip */
  function revealActivePill(pill, smooth) {
    const navRect = navContainer.getBoundingClientRect();
    const pillRect = pill.getBoundingClientRect();
    const margin = 10;
    const isVisible =
      pillRect.left >= navRect.left + margin &&
      pillRect.right <= navRect.right - margin;

    if (!isVisible) {
      pill.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        inline: 'center',
        block: 'nearest',
      });
    }
  }

  /** Update active state on nav pills and keep the active pill in view */
  function setActiveNav(categoryId, smoothScrollPill) {
    const pills = navContainer.querySelectorAll('.nav-pill');
    let activePill = null;

    pills.forEach((pill) => {
      const isActive =
        categoryId === 'all'
          ? pill.dataset.category === 'all'
          : pill.dataset.category === categoryId;
      pill.classList.toggle('is-active', isActive);
      pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) activePill = pill;
    });

    if (activePill) {
      revealActivePill(activePill, Boolean(smoothScrollPill));
    }
  }

  /** Temporarily pause scroll spy during smooth scroll navigation */
  function beginNavigation() {
    isNavigating = true;
    clearTimeout(navigateTimer);
    navigateTimer = setTimeout(() => {
      isNavigating = false;
    }, 800);
  }

  /** Smooth scroll to a section, accounting for sticky header height */
  function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;

    beginNavigation();

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      siteHeader.offsetHeight -
      12;

    window.scrollTo({ top, behavior: 'smooth' });
  }

  /** Handle nav pill click: scroll to matching section */
  function handleNavClick(event) {
    const pill = event.target.closest('.nav-pill');
    if (!pill) return;

    const categoryId = pill.dataset.category;
    setActiveNav(categoryId, true);

    if (categoryId === 'all') {
      beginNavigation();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    scrollToSection('section-' + categoryId);
  }

  // =========================================================================
  // Scroll spy: highlight nav pill for the section in view
  // =========================================================================

  function refreshScrollSpy() {
    const sections = MENU_DATA.map((s) =>
      document.getElementById('section-' + s.id)
    ).filter(Boolean);

    if (scrollSpyObserver) {
      scrollSpyObserver.disconnect();
    }

    scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        if (isNavigating) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveNav(visible[0].target.dataset.category);
          return;
        }

        if (window.scrollY < 120) {
          setActiveNav('all');
        }
      },
      {
        rootMargin: `-${siteHeader.offsetHeight + 24}px 0px -50% 0px`,
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => scrollSpyObserver.observe(section));
  }

  // =========================================================================
  // Scroll reveal: fade sections in as they enter the viewport
  // =========================================================================

  function initScrollReveal() {
    const sections = menuContainer.querySelectorAll('.menu-section');
    if (!sections.length) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -6% 0px',
        threshold: 0.08,
      }
    );

    sections.forEach((section, index) => {
      section.style.transitionDelay = Math.min(index * 0.06, 0.36) + 's';
      revealObserver.observe(section);
    });
  }

  // =========================================================================
  // Header shadow & back-to-top visibility
  // =========================================================================

  function initScrollEffects() {
    let ticking = false;
    let lastScrolled = null;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const isScrolled = scrollY > 10;

        siteHeader.classList.toggle('is-scrolled', isScrolled);
        backToTopBtn.classList.toggle('is-visible', scrollY > 400);

        if (lastScrolled !== isScrolled) {
          lastScrolled = isScrolled;
          scheduleLayoutRefresh();
        }

        if (!isNavigating && scrollY < 120) {
          setActiveNav('all');
        }

        ticking = false;
      });
    }, { passive: true });
  }

  // =========================================================================
  // Init
  // =========================================================================

  function init() {
    assignMenuItemIds();
    renderNav();
    menuContainer.insertAdjacentHTML(
      'beforeend',
      MENU_DATA.map(renderSection).join('')
    );

    navContainer.addEventListener('click', handleNavClick);
    initOrderList();

    backToTopBtn.addEventListener('click', () => {
      beginNavigation();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveNav('all', true);
    });

    scheduleLayoutRefresh();
    window.addEventListener('resize', scheduleLayoutRefresh, { passive: true });
    siteHeader.addEventListener('transitionend', (event) => {
      if (
        event.target.closest(
          '.header-brand, #category-nav, .shurfa-logo--header, .header-menu-title'
        )
      ) {
        scheduleLayoutRefresh();
      }
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleLayoutRefresh);
    }

    initScrollReveal();
    initScrollEffects();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
