// Finds the navigation menu elements in HTML
const sideMenu = document.getElementById("sideMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

// Opens navigation menu when the hamburger button is clicked
openMenu.addEventListener("click", function() {
    sideMenu.classList.add("open");
});

// Closes navigation menu when the close button is clicked
closeMenu.addEventListener("click", function() {
    sideMenu.classList.remove("open");
});
