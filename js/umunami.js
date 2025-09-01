// Fichier : /js/umunami.js

// On attend que toute la page soit chargée pour exécuter le code
document.addEventListener('DOMContentLoaded', () => {

  // --- Initialisation de Swiper ---
  const characterSlider = document.querySelector('.character-slider');
  if (characterSlider) {
    var swiper = new Swiper(characterSlider, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      coverflowEffect: {
        rotate: 30,
        stretch: -60,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

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