let className = "inverted";
let scrollTrigger = 30;
let topButton = document.querySelector('#topBtn');
let mblBtn = document.querySelector('#mblBtn');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a');


window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
    
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    
  }
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
  scrollFunction();
};



/* MODAL */
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modalBtn');
const closeButton = document.querySelector('.close_button')

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
modalButton.addEventListener('click', () => {

})
topButton.addEventListener('click', getToTop);
/* MOBILE */

const mblMenu = () => {
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
}

for (const link of links) {
    link.addEventListener('click', mblMenu)
}
mblBtn.addEventListener('click', mblMenu);