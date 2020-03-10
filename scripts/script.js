const h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

const topNav = document.getElementById("topNav");
const topNavHeader = document.getElementById("topNavHeader");
const topNavTitle = document.getElementById("topNavTitle");
const colourBlock = document.getElementById("colourBlock");
const mainNavList = document.getElementById("mainNavList");
const mobileNavBar = document.getElementById("mobileNavBar");
const mobileTitle = document.getElementById("mobileTitle");
const navIcons = document.getElementById("navIcons");


function navBar() {
  if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
    topNav.classList.add("top-nav--scrolled");
    topNavHeader.classList.add("top-nav__header--scrolled");
    topNavTitle.classList.add("top-nav__title--scrolled");
    colourBlock.classList.add("colour-block--scrolled");
    mainNavList.classList.add("main-nav__list--scrolled");
    mobileNav.classList.add("mobile-nav--scrolled");
    mobileNavBar.classList.add("mobile-nav__bar--scrolled");
    mobileTitle.style.visibility = "visible";
    mobileTitle.style.maxHeight = "5rem";
    mobileTitle.style.opacity = "1";
    mobileTitle.style.transition = "opacity .7s .5s, max-height .0s .4s";
    mobileNavBar.style.borderBottomLeftRadius = " 0";
  }
  else {
    topNav.classList.remove("top-nav--scrolled");
    topNavHeader.classList.remove("top-nav__header--scrolled");
    topNavTitle.classList.remove("top-nav__title--scrolled");
    colourBlock.classList.remove("colour-block--scrolled");
        mainNavList.classList.remove("main-nav__list--scrolled");
            mobileNav.classList.remove("mobile-nav--scrolled");
                mobileTitle.style.visibility = "hidden";
                mobileTitle.style.maxHeight = "0rem";
                    mobileTitle.style.opacity = "0";
                    mobileTitle.style.transition = "opacity .7s .5s, max-height .0s .0s";


  }
}


  }
}
