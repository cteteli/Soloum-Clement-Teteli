// Slider d'images d'entête & animations d'apparition avancées

document.addEventListener('DOMContentLoaded', function() {
  // Slider en background header
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
});
