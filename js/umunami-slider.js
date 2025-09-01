

var swiper = new Swiper('.character-slider', {
  // On reste sur l'effet "slide" pour la stabilité
  effect: 'slide',
  
  // On active la boucle infinie
  loop: true,
  
  // Affiche la carte principale au centre
  centeredSlides: true,
  
  // C'EST LA PARTIE IMPORTANTE : on montre plusieurs cartes
  slidesPerView: 'auto', // Laisse le CSS déterminer la taille des cartes
  spaceBetween: -80,    // Crée un chevauchement pour l'effet "deck"
  
  // Garde le curseur et la navigation
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