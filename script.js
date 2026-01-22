const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");


menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle("show");
});


document.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
});

mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
});




