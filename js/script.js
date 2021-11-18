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

// task-list

const items = document.querySelectorAll('.task-list__column-item');
const checkbox = document.querySelectorAll('#checkbox');

for (let box of checkbox) {
   box.addEventListener('change', function(event) {
      
      box.parentNode.classList.toggle('checked');

   });
}



//carusel
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector('.main-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slideLength = mainSlide.querySelectorAll("div").length;
const container = document.querySelector('.sidebar-container');

sidebar.style.top = `-${(slideLength-1)*100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () =>{
   changeSlide('up');
});

downBtn.addEventListener('click', () =>{
   changeSlide('down');
});

function changeSlide(direction) {

   if (direction === 'up') {
      activeSlideIndex++;
      if (activeSlideIndex === slideLength) {
         activeSlideIndex = 0;
      }
   }

   if (direction === 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
         activeSlideIndex = slideLength-1;
      }
   }

   const height = container.clientHeight;

   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}


