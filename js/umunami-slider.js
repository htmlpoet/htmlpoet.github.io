// Initialisation de Swiper
var swiper = new Swiper('.character-slider', {
  effect: 'cards',
  grabCursor: true,
  loop: true,
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