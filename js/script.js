//burger menu

const iconMenu = document.querySelector('.header__menu-icon');
const bodyMenu = document.querySelector('.header__nav');


if (iconMenu) {
   iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('lock');     
      iconMenu.classList.toggle('active');
      bodyMenu.classList.toggle('active');
   });
}