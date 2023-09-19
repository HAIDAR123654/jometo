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

//whenever user scroll page up login div display should be none
var div = document.getElementById("loginid");
var username = document.getElementById("input1");
var flag = false;

document.addEventListener("click", function (event) {
  if (event.target === username) {
    flag = true;
  }
});

window.addEventListener("scroll", function () {
  // Check if the user is scrolling up (scrolling towards the top of the page)
  if (window.scrollY > 0 && flag) {
    // If scrolling up, hide the div
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  flag = false;
  // else {
  // If not scrolling up (e.g., scrolling down or at the top), show the div
  // div.style.display = "block"; // You can use "block" or "inline-block" depending on your layout
  // }
});
