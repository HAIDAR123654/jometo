const mobuile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobuile_nav.addEventListener("click", () => toggleNavbar());

// event clicked triggred on clicking on anywhere in the DOM-------------------------------

document.addEventListener("click", function (event) {
  var div = document.getElementById("loginid");

  // Check if the clicked element is the div or one of its descendants
  if (event.target !== div && !div.contains(event.target)) {
    // Clicked outside the div, so hide it
    div.style.display = "none";
  }
});

//whenever user scroll page up login div display should be none--------------------------------
var div = document.getElementById("loginid");
var username = document.getElementById("input1");
var flag = false;

document.addEventListener("click", function (event) {
  if (event.target === username) {
    flag = true;
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0 && flag) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
const loginClose = document.querySelector(".login-close");
const loginPage = document.querySelector(".login");

loginClose.addEventListener("click", () => {
  loginPage.style.display = "none";
});

// ---------------------------
username.addEventListener("blur", function () {
  // Scroll the page to the top (x: 0, y: 0)
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Use "smooth" for smooth scrolling, or "auto" for instant scrolling
  });
});
