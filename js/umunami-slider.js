// Fichier : /js/umunami-slider.js

var swiper = new Swiper('.character-slider', {
  // On utilise l'effet 'coverflow' pour la perspective 3D
  effect: 'coverflow',
  grabCursor: true,
  
  // La carte active est toujours au centre
  centeredSlides: true,
  
  // On affiche 3 cartes au total, mais les côtés seront en partie cachés
  slidesPerView: 3,
  
  // Boucle infinie stable
  loop: true,

  // Configuration fine de l'effet coverflow
  coverflowEffect: {
    rotate: 30,       // Rotation des cartes sur les côtés
    stretch: -60,     // Tire les cartes les unes vers les autres (overlap)
    depth: 100,       // Profondeur de la perspective
    modifier: 1,      // Multiplicateur de l'effet
    slideShadows: false, // On désactive les ombres par défaut pour un look plus propre
  },

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});