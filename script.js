
  const menuBtn = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  // toggle menu on button click
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle("show");
  });

  // close menu when clicking outside
  document.addEventListener("click", function () {
    mobileMenu.classList.remove("show");
  });

  // prevent closing when clicking inside menu
  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });


