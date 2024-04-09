function togglemenu() {
  const toggleMenu = document.getElementById("hamburger");
  if (toggleMenu.getAttribute("class") === "hidden") {
    toggleMenu.setAttribute("class", "block");
  } else {
    toggleMenu.setAttribute("class", "hidden");
  }
}
// Swipper Code
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
  new WOW().init();
});
