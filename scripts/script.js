const h = window.innerHeight

let mainNav = document.getElementById("mainNav");
let navButton = document.getElementById("navButton");
let iconOpen = document.getElementById("iconOpen");
let iconClose = document.getElementById("iconClose");

window.onscroll = function() {navBar()};

navButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  iconOpen.classList.toggle('main-nav__icon--visible');
  iconClose.classList.toggle('main-nav__icon--visible');
  mainNav.classList.toggle('main-nav--open');
}



