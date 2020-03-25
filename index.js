var a = Math.floor(Math.random() * 6 + 1);
var b = Math.floor(Math.random() * 6 + 1);

if (a === b) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (a > b) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

document.querySelector(".img1").setAttribute("src", "images/dice" + a + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + b + ".png");
