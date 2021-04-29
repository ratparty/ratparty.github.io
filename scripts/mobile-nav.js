

function topnav() {
  let navButton = document.getElementById("navButton");
  var nav = document.getElementById("mobileNavMenu");
  let iconOpen = document.getElementById("iconOpen");
  var iconClose = document.getElementById("iconClose");
  var navBar = document.getElementById("mobileNavBar");



  if (nav.style.maxHeight === "15rem") {
    //nav.style.maxHeight = "0";
    //nav.style.padding = "0 10px";
   // nav.style.maxWidth = "3rem";
    nav.style.transition = "0.7s ease-in-out, max-width .7s .5s";
    nav.style.borderBottomLeftRadius = "0";
    //open.style.display = "inline-block";
    close.style.display = "none";
    //nav.style.width = "auto";
    navBar.classList.remove("nav-bar--open");
    navBar.classList.add("nav-bar--closed");
    navBar.style.transition ="0.7s ease-in-out, border-bottom-left-radius .3s .7s";

  } else {
    nav.style.maxHeight = "15rem";
    nav.style.padding = ".3em 10px 1em";
    open.style.display = "none";
    close.style.display = "block";
   // nav.style.maxWidth = "10rem";
   // nav.style.borderBottomLeftRadius = "15px";
   // nav.style.width = "auto";
    nav.style.transition = "0.7s ease-in-out .25s, max-width .0s .0s";
    navBar.style.transition ="0.7s ease-in-out, border-bottom-left-radius .3s";
    navBar.classList.add("nav-bar--open");
    navBar.classList.remove("nav-bar--closed");


  }
}

// function topnav() {
//   var nav = document.getElementById("mobileNavMenu");
//   var open = document.getElementById("open");
//   var close = document.getElementById("close");
//   if (nav.style.maxHeight === "100%") {
//     nav.style.maxHeight = "0";
//     nav.style.padding = "0 10px";
//     open.style.display = "inline-block";
//     close.style.display = "none";
//   } else {
//     nav.style.maxHeight = "100%";
//
//    nav.style.padding = ".3em 10px 1em";
//     open.style.display = "none";
//     close.style.display = "block";
//   }
// }
//
// function topnav() {
//   var x = document.getElementById("mobile-nav");
//   // var y = document.getElementById("body");
//   var open = document.getElementById("open");
//   var close = document.getElementById("close");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//     open.style.display = "block";
//     close.style.display = "none";
//   } else {
//     x.style.display = "block";
//     open.style.display = "none";
//     close.style.display = "block";
//   }
// }
//
//
// /* open when someone clicks on the span element */
// function openNav() {
//   document.getElementById("mobileNavMenu").style.height = "100%";
// }
//
// /*close when someone clicks the "x" symbol inside the overlay */
// function closeNav() {
// document.getElementById("mobileNavMenu").style.width = "0%";
// }
