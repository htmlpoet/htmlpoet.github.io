
var swiper = new Swiper('.character-slider', {
  // Use the standard 'slide' effect for stability
  effect: 'slide',
  
  // Center the main card
  centeredSlides: true,
  
  // Make sure only one card is primarily visible
  slidesPerView: 1,
  
  // Enable the infinite loop
  loop: true,

  // Keep the cursor and navigation arrows
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Logique pour étendre les cartes
const cards = document.querySelectorAll('.character-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const isExpanded = card.classList.contains('is-expanded');
    cards.forEach(otherCard => {
      otherCard.classList.remove('is-expanded');
    });
    if (!isExpanded) {
      card.classList.add('is-expanded');
    }
  });
});