/**
 * lang.js – Bilingual (EN/FR) language switcher
 * Default language: English (EN)
 * All translatable elements use: data-en="..." data-fr="..."
 * The toggle button is injected automatically into every nav.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'cteteli_lang';
  const DEFAULT_LANG = 'en';

  /* ── Detect saved preference ── */
  let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;

  /* ── Apply translations ── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    /* Update all data-en / data-fr elements */
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text !== null) {
        /* Preserve inner HTML if text contains tags */
        if (text.includes('<')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    /* Update html lang attribute */
    document.documentElement.lang = lang;

    /* Update the toggle button label */
    const btn = document.getElementById('langToggleBtn');
    if (btn) {
      if (lang === 'en') {
        btn.innerHTML = '<span class="lang-flag">🇫🇷</span> FR';
        btn.title = 'Passer en Français';
      } else {
        btn.innerHTML = '<span class="lang-flag">🇬🇧</span> EN';
        btn.title = 'Switch to English';
      }
    }

    /* Update page title */
    const titleEl = document.querySelector('title[data-en]');
    if (titleEl) {
      document.title = titleEl.getAttribute('data-' + lang) || document.title;
    }
  }

  /* ── Inject toggle button into nav ── */
  function injectLangButton() {
    const nav = document.getElementById('topnav');
    if (!nav) return;

    /* Don't inject twice */
    if (document.getElementById('langToggleBtn')) return;

    const btn = document.createElement('button');
    btn.id = 'langToggleBtn';
    btn.className = 'lang-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle language');

    btn.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'fr' : 'en');
    });

    /* Insert before the burger button (or at end of nav) */
    const burger = nav.querySelector('.nav-burger');
    if (burger) {
      nav.insertBefore(btn, burger);
    } else {
      nav.appendChild(btn);
    }
  }

  /* ── Init on DOM ready ── */
  function init() {
    injectLangButton();
    applyLang(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
