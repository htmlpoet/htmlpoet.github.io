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

document.querySelectorAll('.character-card').forEach(card => {
  card.addEventListener('click', () => {
    const index = card.dataset.index;
    const char = window.charactersData[index];
    const modal = document.getElementById('character-modal');

    if (char && modal) {
      modal.querySelector('.modal-body').innerHTML = `
        <h2>${char.name}</h2>
        <h3>${char.title}</h3>
        <p>${char.bio}</p>
      `;
      modal.style.display = 'flex';
    }
  });
});

// Fermer
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('character-modal').style.display = 'none';
});
