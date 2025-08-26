document.addEventListener("DOMContentLoaded", function() {

  // --- MESSAGE DE BIENVENUE ---
  console.log("Bienvenue sur mon site poétique ✨");


  // --- LOGIQUE POUR LE BOUTON "VOIR PLUS" ---
  const loadMoreButton = document.getElementById('loadMore');
  // On ne lance ce code que si le bouton existe sur la page
  if (loadMoreButton) {
    const postList = document.querySelector('.post-list');
    const allItems = postList.querySelectorAll('li');
    const itemsPerPage = 5;
    let currentlyVisible = itemsPerPage;

    if (allItems.length <= itemsPerPage) {
      loadMoreButton.classList.add('hidden');
    }

    loadMoreButton.addEventListener('click', function() {
      const nextBatchEnd = currentlyVisible + itemsPerPage;
      for (let i = currentlyVisible; i < nextBatchEnd && i < allItems.length; i++) {
        allItems[i].style.display = 'list-item';
      }
      currentlyVisible = nextBatchEnd;
      if (currentlyVisible >= allItems.length) {
        loadMoreButton.classList.add('hidden');
      }
    });
  }


  // --- LOGIQUE POUR LE FILTRAGE DES TAGS ---
  // On ne lance ce code que si on est sur la page des tags
  if (document.querySelector('.tag-group')) {
    const allTagGroups = document.querySelectorAll('.tag-group');
    const showAllButton = document.querySelector('.show-all-tags');

    function filterTags() {
      const targetTag = window.location.hash.substring(1);

      if (!targetTag) {
        allTagGroups.forEach(group => group.style.display = 'block');
        showAllButton.style.display = 'none';
        return;
      }

      showAllButton.style.display = 'block';
      allTagGroups.forEach(group => {
        if (group.id === targetTag) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    }

    filterTags();
    window.addEventListener('hashchange', filterTags);
  }

  // --- SCRIPT DE FILTRAGE POUR LA PAGE DES TAGS ---
  
  // On ne lance ce script que si on trouve un conteneur de tags
  if (document.querySelector('.tag-group')) {
    
    const allTagGroups = document.querySelectorAll('.tag-group');
    const showAllButton = document.querySelector('.show-all-tags');

    function filterTags() {
      // On récupère le tag dans l'URL (ex: #poesie -> "poesie")
      const targetTag = window.location.hash.substring(1);

      // S'il n'y a pas de tag dans l'URL, on montre tout
      if (!targetTag) {
        allTagGroups.forEach(group => group.style.display = 'block');
        showAllButton.style.display = 'none'; // On cache le bouton "Voir tout"
        return;
      }

      // S'il y a un tag, on filtre...
      showAllButton.style.display = 'block'; // On montre le bouton "Voir tout"
      allTagGroups.forEach(group => {
        if (group.id === targetTag) {
          group.style.display = 'block'; // On montre le groupe correspondant
        } else {
          group.style.display = 'none'; // On cache les autres
        }
      });
    }

    // On lance la fonction une première fois au chargement de la page
    filterTags();

    // On relance la fonction si l'ancre dans l'URL change
    window.addEventListener('hashchange', filterTags);
  }

  // --- LOGIQUE POUR LE MENU MOBILE ---
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      // Ajoute/retire la classe sur la navigation
      mainNav.classList.toggle('is-open');
      // Ajoute/retire la classe sur le bouton pour l'animation en croix
      this.classList.toggle('is-active');
    });
  }
  
});
});