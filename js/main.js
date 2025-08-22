document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenue sur mon site poétique ✨");
});

document.addEventListener("DOMContentLoaded", function() {
  // --- PAGINATION "VOIR PLUS" ---
  const postList = document.querySelector('.post-list');
  if (!postList) return; // Ne fait rien si on n'est pas sur la bonne page

  const loadMoreButton = document.getElementById('loadMore');
  const allItems = postList.querySelectorAll('li');
  const itemsPerPage = 5;
  let currentlyVisible = itemsPerPage; // On SAIT que 5 sont visibles au début

  // Cache le bouton s'il n'y a pas assez d'articles au départ
  if (allItems.length <= itemsPerPage) {
    loadMoreButton.classList.add('hidden');
  }

  loadMoreButton.addEventListener('click', function() {
    // On cible la prochaine tranche d'articles à afficher
    const nextBatchEnd = currentlyVisible + itemsPerPage;

    // On boucle sur cette tranche et on affiche les articles
    for (let i = currentlyVisible; i < nextBatchEnd && i < allItems.length; i++) {
      // L'important est d'appliquer un style en ligne pour outrepasser la règle CSS
      allItems[i].style.display = 'list-item'; 
    }

    // On met à jour notre compteur
    currentlyVisible = nextBatchEnd;

    // S'il n'y a plus d'articles à charger, on cache le bouton
    if (currentlyVisible >= allItems.length) {
      loadMoreButton.classList.add('hidden');
    }
  });
});