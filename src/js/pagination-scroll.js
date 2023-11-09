document.addEventListener('DOMContentLoaded', function() {
    // Restore the scroll position when the page is loaded
    const savedPosition = localStorage.getItem('paginationScrollPosition');
    if (savedPosition) {
      window.scrollTo(0, savedPosition);
      localStorage.removeItem('paginationScrollPosition');
    }
  
    // Add click event to each pagination link to save the scroll position
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
      link.addEventListener('click', function() {
        localStorage.setItem('paginationScrollPosition', window.scrollY || document.documentElement.scrollTop);
      });
    });
  });
  