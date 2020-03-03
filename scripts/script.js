const h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

const topNav = document.getElementById("topNav");
const topNavHeader = document.getElementById("topNavHeader");
const topNavTitle = document.getElementById("topNavTitle");
const colourBlock = document.getElementById("colourBlock");
const mainNavList = document.getElementById("mainNavList");

window.onscroll = function() {navBar()};

function navBar() {
  if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
    topNav.classList.add("top-nav--scrolled");
    topNavHeader.classList.add("top-nav__header--scrolled");
    topNavTitle.classList.add("top-nav__title--scrolled");
    colourBlock.classList.add("colour-block--scrolled");
    mainNavList.classList.add("main-nav__list--scrolled");
  }
  else {
    topNav.classList.remove("top-nav--scrolled");
    topNavHeader.classList.remove("top-nav__header--scrolled");
    topNavTitle.classList.remove("top-nav__title--scrolled");
    colourBlock.classList.remove("colour-block--scrolled");
        mainNavList.classList.remove("main-nav__list--scrolled");
  }
}
