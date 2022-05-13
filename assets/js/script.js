// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#night-mode");

const enableDarkMode = () => {
  document.getElementById("night-mode").classList.add("active");
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.getElementById("night-mode").classList.remove("active");
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

window.addEventListener("load", function () {
  document.getElementById("loading").style.display = "none";
});

// Burger Menu Start
function menu() {
  var element = document.getElementById("menu");
  var bar = document.getElementById("bar");
  // var menuImage =
  element.classList.toggle("active");
  bar.classList.toggle("bi-x");
}
// Burger Menu End

// Typewriter Home Start
var app = document.getElementById("typewritter-text");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString("BCA student")
  .pauseFor(2500)
  .deleteChars(11)
  .typeString("Learning Web development")
  .pauseFor(2500)
  .start();
// Typewriter Home End

AOS.init(); // Animate On Scroll Initailizing code
