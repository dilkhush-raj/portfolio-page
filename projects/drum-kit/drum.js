document.getElementById("Snare").addEventListener("click", function () {
  var snare = new Audio("sounds/Snare.mp3");
  snare.play();
});

document.getElementById("Floor-Tom").addEventListener("click", function () {
  var floorTom = new Audio("sounds/Floor-Tom.mp3");
  floorTom.play();
});

document.getElementById("Hi-Hat").addEventListener("click", function () {
  var hitHat = new Audio("sounds/Hi-Hat.mp3");
  hitHat.play();
});

document.getElementById("Tom-Left-All").addEventListener("click", function () {
  var tomLeft = new Audio("sounds/Small-Rack-Tom.mp3");
  tomLeft.play();
});

document.getElementById("Tom-Right-All").addEventListener("click", function () {
  var tomRight = new Audio("sounds/Big-Rack-Tom.mp3");
  tomRight.play();
});

document.getElementById("Kick").addEventListener("click", function () {
  var kick = new Audio("sounds/Kick.mp3");
  kick.play();
});

document.getElementById("Crash").addEventListener("click", function () {
  var crash = new Audio("sounds/Crash.mp3");
  crash.play();
});

