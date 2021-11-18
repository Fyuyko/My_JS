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


// Slides

const slides = document.querySelectorAll('.slide');

for (let slide of slides) {

   slide.addEventListener('click', () => {
      cleanClass();

      slide.classList.add('active');
   });

}

function cleanClass() {

   slides.forEach(item => {
      item.classList.remove('active');
   });

}
