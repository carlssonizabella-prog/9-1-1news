const sideMenu = document.getElementById("sideMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", function() {
    sideMenu.classList.add("open");
});

closeMenu.addEventListener("click", function() {
    sideMenu.classList.remove("open");
});