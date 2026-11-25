  const els = document.querySelectorAll('section, .project');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if(e.isIntersecting){ 
        e.target.classList.add('in'); 
      } 
    });
  }, { threshold: 0.08 });
  
  els.forEach(el => { 
    el.classList.add('reveal'); 
    io.observe(el); 
  });

  // =========================================
// MENU HAMBURGER (MOBILE)
// Gère l'ouverture/fermeture du menu sur mobile
// =========================================
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav.links');

// Quand on clique sur le bouton hamburger
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');       // Change le bouton (☰ → ✕)
  navLinks.classList.toggle('active');     // Affiche/cache le menu
  
  // Met à jour l'attribut pour l'accessibilité
  const isOpen = navLinks.classList.contains('active');
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
});

// Ferme le menu quand on clique sur un lien
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    navLinks.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  });
});