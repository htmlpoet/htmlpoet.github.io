// Fichier : /js/umunami.js

document.addEventListener("DOMContentLoaded", () => {
  // --- Logique de la Modale ---
  const modal = document.getElementById("character-modal");

  // On ne continue que si la modale et les données existent sur la page
  if (modal && typeof window.charactersData !== "undefined") {
    const closeModalButton = document.getElementById("close-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalTitle = document.getElementById("modal-title");
    const modalBio = document.getElementById("modal-bio");

    // On ajoute un écouteur de clic à chaque carte
    document.querySelectorAll(".character-card-static").forEach((card) => {
      card.addEventListener("click", () => {
        // On récupère l'index depuis le "numéro de série" de la carte
        const characterIndex = card.dataset.index;
        const character = window.charactersData[characterIndex];

        // On remplit la modale
        modalImage.src = character.image;
        modalImage.alt = character.name;
        modalName.textContent = character.name;
        modalTitle.textContent = character.title;
        // On transforme les sauts de ligne de la bio en vrais paragraphes HTML
        modalBio.innerHTML = `<p>${character.bio.replace(
          /\n/g,
          "</p><p>"
        )}</p>`;

        // On affiche la modale
        modal.classList.add("is-visible");
      });
    });

    // Fonction pour fermer la modale
    function closeModal() {
      modal.classList.remove("is-visible");
    }

    closeModalButton.addEventListener("click", closeModal);

    // On ferme aussi en cliquant sur le fond obscurci
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  // --- LOGIQUE POUR LE MENU ACCORDÉON UMUNAMI ---
  const umunamiMenuToggle = document.getElementById("umunami-menu-toggle");
  const umunamiMenuList = document.getElementById("umunami-menu-list");

  if (umunamiMenuToggle && umunamiMenuList) {
    umunamiMenuToggle.addEventListener("click", () => {
      umunamiMenuList.classList.toggle("is-open");
    });
  }
});
