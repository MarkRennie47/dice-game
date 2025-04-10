var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImgPath1 = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgPath1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImgPath2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgPath2);

var heading = document.querySelectorAll("h1");

if (randomNumber1 > randomNumber2) {
  heading[0].innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    heading[0].innerHTML = "Player 2 Wins!";
}
else {
    heading.innerHTML = "draw";
}