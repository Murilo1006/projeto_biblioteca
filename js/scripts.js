window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) return;
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
      } else {
        navbarCollapsible.classList.add('navbar-shrink')
      }
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
  
    // Login fake
    const loginForm = document.getElementById('loginForm');
    const painel = document.getElementById('painel');
    const navPainel = document.getElementById('nav-painel');
    const btnLogout = document.getElementById('btnLogout');
  
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // simulação de login
        painel.classList.remove('d-none');
        navPainel.classList.remove('d-none');
        document.querySelector('#login').classList.add('d-none');
        window.location.hash = '#painel';
      });
    }
  
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        painel.classList.add('d-none');
        navPainel.classList.add('d-none');
        document.querySelector('#login').classList.remove('d-none');
        window.location.hash = '#login';
      });
    }
  });
  
