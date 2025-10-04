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

  // Referências
  const loginForm = document.getElementById('loginForm');
  const painel = document.getElementById('painel');
  const navPainel = document.getElementById('nav-painel');
  const btnLogout = document.getElementById('btnLogout');
  const home = document.getElementById('home');
  const about = document.getElementById('about');
  const login = document.getElementById('login');

  // Login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // simulação de login válido
      painel.classList.remove('d-none');
      navPainel.classList.remove('d-none');

      // esconder telas iniciais
      home.classList.add('d-none');
      about.classList.add('d-none');
      login.classList.add('d-none');

      window.location.hash = '#painel';
    });
  }

  // Logout
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      painel.classList.add('d-none');
      navPainel.classList.add('d-none');

      // mostrar telas iniciais de novo
      home.classList.remove('d-none');
      about.classList.remove('d-none');
      login.classList.remove('d-none');

      window.location.hash = '#home';
    });
  }
});
