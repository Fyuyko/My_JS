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

// to anchors

//взято с https://ru.stackoverflow.com/questions/676303/%D0%9F%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D0%BF%D1%80%D0%BE%D0%BA%D1%80%D1%83%D1%82%D0%BA%D0%B0-%D0%BA-%D1%8F%D0%BA%D0%BE%D1%80%D1%8E-%D0%B1%D0%B5%D0%B7-jquery

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
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
   box.addEventListener('change', event => {
      
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

//drag-n-drop

const rowItem = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');


rowItem.addEventListener('dragstart', dragstart);

rowItem.addEventListener('dragend', dragend);

function dragstart(event) {
   event.target.classList.add('hold');
   setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
   event.target.classList.remove('hold', 'hide');
}

for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover', dragover);
   placeholder.addEventListener('dragenter', dragenter);
   placeholder.addEventListener('dragleave', dragleave);
   placeholder.addEventListener('drop', dragdrop);
}

function dragover(event) {
   event.preventDefault();
}

function dragenter(event) {
   event.target.classList.add('hovered');
}

function dragleave(event) {
   event.target.classList.remove('hovered');
}

function dragdrop(event) {
   event.target.append(rowItem);
}


