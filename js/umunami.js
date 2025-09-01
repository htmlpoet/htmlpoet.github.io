// Fichier : /js/umunami.js

// On attend que toute la page soit chargée pour exécuter le code
document.addEventListener('DOMContentLoaded', () => {

// --- Initialisation de Swiper (Version STABLE et LARGE) ---
const characterSlider = document.querySelector('.character-slider');
if (characterSlider) {
  var swiper = new Swiper(characterSlider, {
    effect: 'slide',      // L'effet le plus stable
    grabCursor: true,
    centeredSlides: true, // La carte active est toujours au centre
    loop: true,
    
    // C'est ici qu'on crée l'effet de "voisinage" sans débordement
    slidesPerView: 'auto', // Les slides prennent leur largeur définie en CSS
    spaceBetween: 20,    // Espace entre les slides
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// ... Le reste de votre script pour la modale ne change pas ...

  // --- Logique de la Modale ---
  const modal = document.getElementById('character-modal');
  if (modal && typeof window.charactersData !== 'undefined') {
    const closeModalButton = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalTitle = document.getElementById('modal-title');
    const modalBio = document.getElementById('modal-bio');

    document.querySelector('.character-slider').addEventListener('click', (event) => {
      const card = event.target.closest('.character-card');
      if (card) {
        const characterIndex = card.dataset.index;
        if (window.charactersData[characterIndex]) {
          const character = window.charactersData[characterIndex];
          
          modalImage.src = character.image;
          modalImage.alt = character.name;
          modalName.textContent = character.name;
          modalTitle.textContent = character.title;
          modalBio.innerHTML = `<p>${character.bio.replace(/\n/g, '</p><p>')}</p>`;
          
          modal.classList.add('is-visible');
        }
      }
    });

    function closeModal() {
      modal.classList.remove('is-visible');
    }

    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
});