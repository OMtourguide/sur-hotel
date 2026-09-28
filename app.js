/* ==============================================================
   Sur Hotel — site behaviour.
   Language switching, mobile menu, scroll effects.
   All copy lives in translations.js (STRINGS) — this file only
   renders it and wires up interaction.
   ============================================================== */
(function(){
  "use strict";

  const BOOKING_URL = "https://www.booking.com/hotel/om/sur.html?aid=356980";

  // Room photos, in the same order as rooms.items (Single, Double, Twin) in
  // translations.js. Images aren't translated, so this stays out of STRINGS.
  const ROOM_IMAGES = ["images/room-single.jpg", "images/room-double.jpg", "images/room-twin.jpg"];

  const LANGS = [
    { code:"ar", native:"العربية" },
    { code:"zh", native:"中文" },
    { code:"nl", native:"Nederlands" },
    { code:"en", native:"English" },
    { code:"fr", native:"Français" },
    { code:"de", native:"Deutsch" },
    { code:"it", native:"Italiano" },
    { code:"pt", native:"Português" },
    { code:"ru", native:"Русский" },
    { code:"es", native:"Español" }
  ];

  let current = "en";

  function t(path){
    const parts = path.split(".");
    let node = STRINGS[current];
    for(const p of parts){ node = node && node[p]; }
    if(node === undefined){
      node = STRINGS.en;
      for(const p of parts){ node = node && node[p]; }
    }
    return node;
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function renderDropcap(el, data){
    if(!el || !data) return;
    if(data.script && data.rest){
      el.innerHTML = `<span class="script">${escapeHtml(data.script)}</span>${escapeHtml(data.rest)}`;
    } else {
      el.textContent = data.full || "";
    }
  }

  function setBookingLinks(){
    document.querySelectorAll("[data-booking-link]").forEach(a => { a.href = BOOKING_URL; });
  }

  function renderStatic(){
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const val = t(el.getAttribute("data-i18n"));
      if(typeof val === "string") el.textContent = val;
    });
  }

  function renderDropcaps(){
    document.querySelectorAll("[data-dropcap]").forEach(el => {
      renderDropcap(el, t(el.getAttribute("data-dropcap")));
    });
  }

  function renderRoomCards(){
    const wrap = document.getElementById("roomCards");
    if(!wrap) return;
    wrap.innerHTML = "";
    t("rooms.items").forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "room-card reveal";
      const img = ROOM_IMAGES[i];
      card.innerHTML = `
        ${img ? `<img src="${img}" alt="${escapeHtml(item.name)}">` : ""}
        <div class="rc-body">
          <div class="rc-name serif">${escapeHtml(item.name)}</div>
          <div class="rc-meta">${escapeHtml(item.meta)}</div>
          <p>${escapeHtml(item.desc)}</p>
        </div>`;
      wrap.appendChild(card);
    });
    observeReveals();
  }

  function renderExploreTags(){
    const row = document.getElementById("tagRow");
    if(!row) return;
    row.innerHTML = "";
    t("explore.tags").forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag-pill";
      span.textContent = tag;
      row.appendChild(span);
    });
  }

  function renderExploreBadge(){
    const titleEl = document.getElementById("badgeTitle");
    const metaEl = document.getElementById("badgeMeta");
    const ctaEl = document.getElementById("badgeCta");
    if(titleEl) titleEl.textContent = t("explore.badge_title");
    if(metaEl) metaEl.textContent = t("explore.badge_meta");
    if(ctaEl) ctaEl.textContent = t("explore.badge_cta");
  }

  function renderCaptions(){
    const captions = t("explore.captions");
    document.querySelectorAll("[data-caption]").forEach(el => {
      const key = el.getAttribute("data-caption");
      const c = captions[key];
      if(c) el.innerHTML = `<b>${escapeHtml(c.name)}</b> · ${escapeHtml(c.meta)}`;
    });
  }

  function renderTestimonials(){
    const scoreVal = document.getElementById("scoreValue");
    const scoreLabel = document.getElementById("scoreLabel");
    if(scoreVal) scoreVal.textContent = t("testimonials.score_value");
    if(scoreLabel) scoreLabel.textContent = t("testimonials.score_label");

    const bars = document.getElementById("scoreBars");
    if(bars){
      bars.innerHTML = "";
      t("testimonials.bars").forEach(b => {
        const row = document.createElement("div");
        row.className = "score-bar-row";
        row.innerHTML = `
          <div class="sb-top"><span>${escapeHtml(b.label)}</span><span>${b.value/10}</span></div>
          <div class="score-bar-track"><div class="score-bar-fill" style="width:${b.value}%"></div></div>`;
        bars.appendChild(row);
      });
    }

    const grid = document.getElementById("testiGrid");
    if(grid){
      grid.innerHTML = "";
      t("testimonials.items").forEach(item => {
        const card = document.createElement("div");
        card.className = "testi-card reveal";
        card.innerHTML = `
          <p class="tq">${escapeHtml(item.quote)}</p>
          <div class="testi-name serif">${escapeHtml(item.name)}</div>
          <div class="testi-meta">${escapeHtml(item.meta)}</div>
          <div class="testi-source">${escapeHtml(t("testimonials.source_note"))}</div>`;
        grid.appendChild(card);
      });
      observeReveals();
    }
  }

  function renderInfoStrip(){
    const wrap = document.getElementById("infoGrid");
    if(!wrap) return;
    const info = t("info");
    wrap.innerHTML = "";
    ["checkin","checkout","beach","payment"].forEach(key => {
      const item = info[key];
      const div = document.createElement("div");
      div.className = "info-item";
      div.innerHTML = `<div class="info-label">${escapeHtml(item.label)}</div><div class="info-value serif">${escapeHtml(item.value)}</div>`;
      wrap.appendChild(div);
    });
  }

  function renderFooterLinks(){
    const wrap = document.getElementById("footerLinks");
    if(!wrap) return;
    wrap.innerHTML = "";
    t("footer.links").forEach(label => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = label;
      a.addEventListener("click", e => e.preventDefault());
      wrap.appendChild(a);
    });
  }

  function renderAlts(){
    const alts = t("alts");
    document.querySelectorAll("[data-alt]").forEach(img => {
      const key = img.getAttribute("data-alt");
      if(alts[key]) img.alt = alts[key];
    });
  }

  function updateLangUI(){
    document.querySelectorAll(".lang-current").forEach(el => {
      el.textContent = LANGS.find(l => l.code === current).native;
    });
    document.querySelectorAll(".lang-menu button").forEach(btn => {
      btn.setAttribute("aria-current", btn.dataset.lang === current ? "true" : "false");
    });
  }

  function setLang(code){
    if(!STRINGS[code]) return;
    current = code;
    const html = document.documentElement;
    html.setAttribute("lang", code);
    html.setAttribute("dir", t("dir"));
    document.title = t("meta_title");
    renderStatic();
    renderDropcaps();
    renderRoomCards();
    renderExploreTags();
    renderExploreBadge();
    renderCaptions();
    renderTestimonials();
    renderInfoStrip();
    renderFooterLinks();
    renderAlts();
    updateLangUI();
    document.querySelectorAll(".lang-menu").forEach(m => m.classList.remove("open"));
  }

  function buildLangMenus(){
    document.querySelectorAll(".lang-menu").forEach(menu => {
      menu.innerHTML = "";
      LANGS.forEach(l => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.dataset.lang = l.code;
        btn.innerHTML = `<span>${l.native}</span>`;
        btn.addEventListener("click", () => setLang(l.code));
        menu.appendChild(btn);
      });
    });
  }

  function wireLangToggles(){
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const menu = btn.parentElement.querySelector(".lang-menu");
        document.querySelectorAll(".lang-menu").forEach(m => { if(m !== menu) m.classList.remove("open"); });
        menu.classList.toggle("open");
      });
    });
    document.addEventListener("click", () => {
      document.querySelectorAll(".lang-menu").forEach(m => m.classList.remove("open"));
    });
  }

  function wireMobileNav(){
    const burger = document.getElementById("burger");
    const panel = document.getElementById("mobileNav");
    const close = document.getElementById("mobileNavClose");
    if(!burger || !panel) return;
    burger.addEventListener("click", () => panel.classList.add("open"));
    if(close) close.addEventListener("click", () => panel.classList.remove("open"));
    panel.querySelectorAll("a").forEach(a => a.addEventListener("click", () => panel.classList.remove("open")));
  }

  function wireHeaderScroll(){
    const header = document.getElementById("siteHeader");
    if(!header) return;
    const onScroll = () => {
      if(window.scrollY > 60) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
  }

  let revealObserver;
  function observeReveals(){
    if(!revealObserver){
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
      }, { threshold:0.12 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    setBookingLinks();
    buildLangMenus();
    wireLangToggles();
    wireMobileNav();
    wireHeaderScroll();
    setLang("en");
    observeReveals();
  });
})();
