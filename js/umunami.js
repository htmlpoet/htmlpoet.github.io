// Fichier : /js/umunami.js (Version de débogage)

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Étape 1 : Le script umunami.js est chargé et s'exécute.");

  // --- Logique de la Modale ---
  const modal = document.getElementById("character-modal");
  const characterCards = document.querySelectorAll(".character-card-static");

  if (modal && characterCards.length > 0 && typeof window.charactersData !== "undefined") {
    console.log("✅ Étape 2 : Modale, cartes et données trouvées. Initialisation des clics...");

    const closeModalButton = document.getElementById("close-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalTitle = document.getElementById("modal-title");
    const modalBio = document.getElementById("modal-bio");

    characterCards.forEach((card) => {
      const characterIndex = card.dataset.index;
      console.log(`- Préparation de la carte pour le personnage index ${characterIndex}...`);

      card.addEventListener("click", () => {
        console.log(`✅ Clic détecté sur la carte du personnage index ${characterIndex} !`);
        
        const character = window.charactersData[characterIndex];

        modalImage.src = character.image;
        modalImage.alt = character.name;
        modalName.textContent = character.name;
        modalTitle.textContent = character.title;
        modalBio.innerHTML = `<p>${character.bio.replace(/\n/g, "</p><p>")}</p>`;

        modal.classList.add("is-visible");
      });
    });

    console.log("✅ Étape 3 : Tous les écouteurs de clics ont été ajoutés aux cartes.");

    // Fonction pour fermer la modale
    function closeModal() {
      modal.classList.remove("is-visible");
    }

    closeModalButton.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

  } else {
    console.error("❌ ERREUR : Un ou plusieurs éléments nécessaires sont manquants.");
    if (!modal) console.error("- La modale (#character-modal) est introuvable.");
    if (characterCards.length === 0) console.error("- Aucune carte de personnage (.character-card-static) n'a été trouvée.");
    if (typeof window.charactersData === "undefined") console.error("- Les données des personnages (window.charactersData) ne sont pas chargées.");
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