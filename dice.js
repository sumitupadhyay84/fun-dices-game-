let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImages1 = "images/dice" + randomNumber1 + ".png";

let images = document.querySelectorAll(".img")[0]; // for the player 1......

images.setAttribute(".img", randomImages1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImages2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(".img")[1].setAttribute(".img", randomImages2); // for player 2 ...........

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WON";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WON";
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}