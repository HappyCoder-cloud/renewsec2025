// js/script.js

// Custom JavaScript for RENEWSEC 2025 website
// (You can leave this empty or add functions below)

// Example: Smooth scroll for anchor links
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    }
  });
});
