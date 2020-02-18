let hamburgerIcon = document.querySelector(".hamburger-icon");
let menuItems = document.querySelector(".menu-items");
let container = document.querySelector(".container");
hamburgerIcon.addEventListener("click", () => {
     menuItems.classList.toggle("show-menu");
});
