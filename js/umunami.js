// Fichier : /js/umunami.js
document.addEventListener('DOMContentLoaded', () => {

  const characterSlider = document.querySelector('.character-slider');
  if (characterSlider) {
    var swiper = new Swiper(characterSlider, {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      
      // Affiche la carte centrale + une partie des voisins
      slidesPerView: 'auto',
      spaceBetween: 30, // Espace entre les cartes
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // --- La logique de la modale reste exactement la même ---
  const modal = document.getElementById('character-modal');
  if (modal && typeof window.charactersData !== 'undefined') {
    // ... (tout le code de la modale que vous aviez déjà) ...
  }
});