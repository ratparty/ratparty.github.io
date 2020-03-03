

function topnav() {
  var nav = document.getElementById("mobileNavMenu");
  var open = document.getElementById("open");
  var close = document.getElementById("close");
  if (nav.style.maxHeight === "15rem") {
    nav.style.maxHeight = "0";
    nav.style.padding = "0 10px";
    open.style.display = "inline-block";
    close.style.display = "none";
  } else {
    nav.style.maxHeight = "15rem";
   nav.style.padding = ".3em 10px 1em";
    open.style.display = "none";
    close.style.display = "block";
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
