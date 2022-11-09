// menu si butonul din meniu
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav-list'),
  menuItem = document.querySelectorAll('.nav-item'),  
  hamburger = document.querySelector('.hamburger');
  body = document.querySelector('.body');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
      body.classList.toggle('no__scroll');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
          body.classList.toggle('no__scroll');
      })
  })
})