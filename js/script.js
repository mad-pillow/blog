var menuBtn = document.getElementById("menu-btn"),
  menuItems = document.getElementsByClassName("nav-panel__item");

menuBtn.addEventListener("click", function () {
  menuBtn.children[0].classList.toggle("visible");
  menuBtn.parentElement.classList.toggle("active");
});
