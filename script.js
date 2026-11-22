//Get the navigation menu and its open and close buttons
const sideMenu = document.getElementById("sideMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

//Side menu opens when clicking the hamburger menu
openMenu.addEventListener("click", function() {
    sideMenu.classList.add("open");
});

//Side menu closes when clicking the exit button
closeMenu.addEventListener("click", function() {
    sideMenu.classList.remove("open");
});
