const mobuile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobuile_nav.addEventListener("click", () => toggleNavbar());

const loginClose = document.querySelector(".login-close");
const loginPage = document.querySelector(".login");

loginClose.addEventListener("click", () => {
  loginPage.classList.add("close-login-div");
});

// event clicked triggred on clicking on anywhere in the DOM-------------------------------

document.addEventListener("click", function (event) {
  var div = document.getElementById("loginid");

  // Check if the clicked element is the div or one of its descendants
  if (event.target !== div && !div.contains(event.target)) {
    // Clicked outside the div, so hide it
    div.style.display = "none";
  }
});
