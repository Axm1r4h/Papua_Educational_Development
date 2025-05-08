 document.addEventListener('DOMContentLoaded', function () {
  // Accordion
  const accordions = document.querySelectorAll(".accorclass");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  // Story Slides
  let currentIndex = 0;
  const slides = document.querySelectorAll('.story-card');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'flex' : 'none';
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);

  // Founder Slides
  const founderSlides = document.querySelectorAll('.founderslides');
  let founderCurrentSlide = 0;

  function showFounderSlide(index) {
    founderSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextFounderSlide() {
    founderCurrentSlide = (founderCurrentSlide + 1) % founderSlides.length;
    showFounderSlide(founderCurrentSlide);
  }

  function prevFounderSlide() {
    founderCurrentSlide = (founderCurrentSlide - 1 + founderSlides.length) % founderSlides.length;
    showFounderSlide(founderCurrentSlide);
  }

  showFounderSlide(founderCurrentSlide);

  // Mobile Menu
  const mobileNavButton = document.getElementById('mobileNavButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');
  const pageWrapper = document.getElementById('pageWrapper');

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    pageWrapper.classList.toggle('shifted');
  }

  if (mobileNavButton && closeMenu && menuOverlay && mobileMenu) {
    mobileNavButton.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  }
});
