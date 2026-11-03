const menuToggle = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

if (menuToggle && primaryNavigation) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Открыть меню');
    primaryNavigation.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.setAttribute('aria-label', isExpanded ? 'Открыть меню' : 'Закрыть меню');
    primaryNavigation.classList.toggle('is-open', !isExpanded);
  });

  primaryNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) closeMenu();
  });
}
