document.addEventListener("DOMContentLoaded", function() {

  // --- MESSAGE DE BIENVENUE ---
  console.log("Bienvenue sur mon site poétique ✨");


  // --- LOGIQUE POUR LE BOUTON "VOIR PLUS" ---
  const loadMoreButton = document.getElementById('loadMore');
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


  // --- LOGIQUE POUR LE MENU MOBILE ---
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('is-open');
      this.classList.toggle('is-active');
    });
  }
  
}); // Fin de l'unique addEventListener