/**
 * Clément Soloum TETELI – Personal Academic Website
 * Main JavaScript: navigation, hero slider, scroll reveal, lightbox
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ══════════════════════════════════════
     1. NAVIGATION – Burger + Scroll effect
  ══════════════════════════════════════ */
  const topnav   = document.getElementById('topnav');
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect: add .scrolled class
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      topnav.classList.add('scrolled');
    } else {
      topnav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Burger toggle
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // Active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navLinks a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* ══════════════════════════════════════
     2. HERO SLIDER (accueil uniquement)
  ══════════════════════════════════════ */
  const sliderImgs = document.querySelectorAll('#heroSlider img');
  if (sliderImgs.length > 0) {
    let currentSlide = 0;

    function nextSlide() {
      sliderImgs[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % sliderImgs.length;
      sliderImgs[currentSlide].classList.add('active');
    }

    // Démarrer le slider
    sliderImgs[0].classList.add('active');
    setInterval(nextSlide, 4500);
  }

  /* ══════════════════════════════════════
     3. SCROLL REVEAL
  ══════════════════════════════════════ */
  const revealEls = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.9;
    revealEls.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.classList.add('visible');
      }
    });
  }

  // Trigger on load + scroll
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  /* ══════════════════════════════════════
     4. LIGHTBOX – Photos galeries
  ══════════════════════════════════════ */
  const galleryImgs = document.querySelectorAll(
    '.excursion-gallery img, .research-gallery img, .evenement-gallery img'
  );

  galleryImgs.forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      openLightbox(this.src, this.alt);
    });
  });

  function openLightbox(src, alt) {
    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    // Close button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.setAttribute('title', 'Fermer');

    // Image
    const bigImg = document.createElement('img');
    bigImg.src = src;
    bigImg.alt = alt || '';

    overlay.appendChild(closeBtn);
    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Close handlers
    function closeLightbox() {
      overlay.remove();
      document.body.style.overflow = '';
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
    closeBtn.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape') {
        closeLightbox();
        document.removeEventListener('keydown', onKey);
      }
    });
  }

  /* ══════════════════════════════════════
     5. SMOOTH SCROLL pour ancres
  ══════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ══════════════════════════════════════
     6. ANIMATION COMPTEURS (stats)
  ══════════════════════════════════════ */
  const statNums = document.querySelectorAll('.stat-num');
  if (statNums.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const rawText = el.textContent.trim();
          const match = rawText.match(/(\d+)([^\d]*)/);
          if (match) {
            const target  = parseInt(match[1]);
            const suffix  = match[2] || '';
            let current   = 0;
            const step    = Math.max(1, Math.floor(target / 30));
            const timer   = setInterval(function () {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = current + suffix;
            }, 40);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(function (el) { observer.observe(el); });
  }

});
