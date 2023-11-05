// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var side = document.getElementById("myside");

// Get the offset position of the navbar
var sticky = side.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    side.classList.add("sticky");
  } else {
    side.classList.remove("sticky");
  }
}