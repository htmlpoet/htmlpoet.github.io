document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenue sur mon site poétique ✨");
});

document.addEventListener("DOMContentLoaded", function() {
      const postList = document.querySelector('.post-list');
      if (!postList) return; // Ne fait rien si on n'est pas sur la page du blog

      const loadMoreButton = document.getElementById('loadMore');
      let itemsToShow = 5;
      const allItems = postList.querySelectorAll('li');

      // Cache le bouton s'il y a 5 articles ou moins
      if (allItems.length <= itemsToShow) {
        loadMoreButton.classList.add('hidden');
      }

      loadMoreButton.addEventListener('click', function() {
        let currentlyShown = postList.querySelectorAll('li:not([style*="display: none"])').length;
        
        for (let i = currentlyShown; i < currentlyShown + itemsToShow && i < allItems.length; i++) {
          allItems[i].style.display = 'block';
        }

        // Cache le bouton s'il n'y a plus rien à montrer
        if (postList.querySelectorAll('li:not([style*="display: none"])').length === allItems.length) {
          loadMoreButton.classList.add('hidden');
        }
      });
    });