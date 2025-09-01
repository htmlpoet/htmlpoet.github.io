// assets/js/characters.js
document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------
     INIT SWIPER (si chargé)
     ---------------------- */
  try {
    if (typeof Swiper !== 'undefined') {
      new Swiper('.character-slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
      });
    } else {
      console.warn('Swiper non chargé — vérifie l\'inclusion du script Swiper.');
    }
  } catch (e) {
    console.error('Erreur initialisation Swiper:', e);
  }

  /* ----------------------
     RÉCUPÉRATION DES DONNÉES
     ---------------------- */
  var characters = null;
  var dataEl = document.getElementById('characters-data');
  if (dataEl) {
    try {
      characters = JSON.parse(dataEl.textContent || dataEl.innerText);
    } catch (err) {
      console.error('Impossible de parser #characters-data JSON', err);
    }
  } else if (typeof window.charactersData !== 'undefined') {
    characters = window.charactersData;
  } else {
    console.warn('Aucune data characters trouvée (ni #characters-data, ni window.charactersData).');
  }

  /* ----------------------
     SÉLECTEURS ET GUARD CLAUSES
     ---------------------- */
  var modal = document.getElementById('character-modal');
  if (!modal) {
    console.warn('Modal #character-modal introuvable — script arrêté.');
    return;
  }
  var modalBody = modal.querySelector('.modal-body');
  var closeBtn = modal.querySelector('.close-btn');

  if (!modalBody) console.warn('.modal-body introuvable dans #character-modal.');
  if (!closeBtn) console.warn('.close-btn introuvable dans #character-modal.');

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (m) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
    });
  }

  function openModalWithChar(char) {
    if (!modalBody) return;
    var name = char && char.name ? escapeHtml(char.name) : 'Personnage';
    var imageHtml = (char && char.image) ? ('<img src="' + escapeHtml(char.image) + '" alt="' + name + '" style="max-width:100%;border-radius:10px;margin:1rem 0;">') : '';
    var desc = escapeHtml((char && (char.description || char.bio)) || 'Pas de description disponible.');

    modalBody.innerHTML = '<h2>' + name + '</h2>' + imageHtml + '<p>' + desc + '</p>';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  /* ----------------------
     BIND CLICK SUR LES CARTES
     ---------------------- */
  var cards = document.querySelectorAll('.character-card');
  if (!cards || cards.length === 0) {
    console.warn('Aucune .character-card trouvée sur la page.');
  }

  cards.forEach(function(card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function () {
      var idx = card.dataset.index;
      var char = null;

      if (characters && Array.isArray(characters) && typeof idx !== 'undefined') {
        char = characters[Number(idx)];
      } else {
        // fallback : on tente de lire depuis le DOM
        var nameEl = card.querySelector('h2');
        var imgEl = card.querySelector('img');
        char = {
          name: nameEl ? nameEl.textContent.trim() : '',
          image: imgEl ? imgEl.getAttribute('src') : '',
          description: card.dataset.description || ''
        };
      }
      openModalWithChar(char);
    });
  });

  /* ----------------------
     FERMETURES (bouton, ESC, clic hors modal)
     ---------------------- */
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });

});
