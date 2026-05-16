// ===== MENU MOBILE =====
  const menuToggle = document.getElementById('menuToggle');
  const menuIcon = document.getElementById('menuIcon');
  const sidebar = document.getElementById('sidebar');
 
  function toggleMenu() {
    const isOpen = sidebar.classList.toggle('open');
    menuIcon.innerHTML = isOpen ? '<svg class="ico" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>' : '<svg class="ico" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
  }
 
  menuToggle.addEventListener('click', toggleMenu);
 
  // ===== ANIMATION BARRES DE LANGUE =====
  function animateBars() {
    document.querySelectorAll('.niveau').forEach(bar => {
      const w = bar.getAttribute('data-width');
      setTimeout(() => { bar.style.width = w + '%'; }, 400);
    });
  }
 
  // ===== INTERSECTION OBSERVER — Animation au scroll =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
 
  document.querySelectorAll('.timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
 
  // Lancer les barres après chargement
  window.addEventListener('load', animateBars);
 
  // ===== HOVER PARTICULES sur les skill tags =====
  document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 4px 15px rgba(46,125,233,0.3)';
    });
    tag.addEventListener('mouseleave', function () {
      this.style.boxShadow = 'none';
    });
  });
 
  // ===== Fermer menu si > 720px =====
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      sidebar.classList.remove('open');
      menuIcon.innerHTML = '<svg class="ico" viewBox="0 0 448 512" fill="white" style="width:18px;height:18px"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
    }
  });