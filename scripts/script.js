let mainNav = document.getElementById("mainNav");
let navButton = document.getElementById("navButton");
let iconOpen = document.getElementById("iconOpen");
let iconClose = document.getElementById("iconClose");
let navLinks = document.querySelectorAll('.nav-link');

navButton.addEventListener('click', toggleMenu);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', closeMenuOnSelection);
}

function toggleMenu() {
  iconOpen.classList.toggle('main-nav__icon--visible');
  iconClose.classList.toggle('main-nav__icon--visible');
  mainNav.classList.toggle('main-nav--open');
}

function closeMenuOnSelection() {
  if (mainNav.classList.contains('main-nav--open')) {
    mainNav.classList.remove('main-nav--open');
  }
}



