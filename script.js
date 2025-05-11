// Slider d'images d'entête & animations d'apparition avancées + lightbox galerie excursions

document.addEventListener('DOMContentLoaded', function() {
  // Slider en background header (page accueil uniquement)
  const sliderImgs = document.querySelectorAll('.slider-bg img');
  let sliderIdx = 0;
  function sliderShow() {
    sliderImgs.forEach((img, i) => {
      img.classList.toggle('active', i === sliderIdx);
    });
    sliderIdx = (sliderIdx + 1) % sliderImgs.length;
  }
  if (sliderImgs.length > 0) {
    sliderShow();
    setInterval(sliderShow, 4200);
  }

  // Apparition animée des sections au scroll
  function showOnScroll() {
    const sections = document.querySelectorAll('.animated-section');
    const trigger = window.innerHeight * 0.92;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < trigger) {
        sec.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', showOnScroll);
  showOnScroll();

  // Menu actif
  const links = document.querySelectorAll('header nav a');
  const current = window.location.pathname.split('/').pop();
  links.forEach(link => {
    if (link.getAttribute('href') === current || (current === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Scroll doux pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    };
  });

  // Lightbox galerie pour excursions
  document.querySelectorAll('.excursion-gallery img').forEach(img => {
    img.addEventListener('click', function() {
      // Crée l'overlay lightbox
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(44,62,80,0.85)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;
      overlay.style.cursor = 'zoom-out';

      // Image agrandie
      const imgBig = document.createElement('img');
      imgBig.src = this.src;
      imgBig.alt = this.alt;
      imgBig.style.maxWidth = '90vw';
      imgBig.style.maxHeight = '85vh';
      imgBig.style.borderRadius = '18px';
      imgBig.style.boxShadow = '0 8px 48px #000b';

      overlay.appendChild(imgBig);
      document.body.appendChild(overlay);

      // Fermer la lightbox en cliquant
      overlay.onclick = function() {
        document.body.removeChild(overlay);
      };
    });
  });
});
