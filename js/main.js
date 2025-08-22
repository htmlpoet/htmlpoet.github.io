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

});