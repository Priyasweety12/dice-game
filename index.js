// Generating first random number
var randomNum1=Math.floor(Math.random()*6)+1
// Changing the image based on the random number
document.getElementsByTagName("img")[0].setAttribute("src", "dice" +randomNum1+ ".png");
// Generating second random number
var randomNum2=Math.floor(Math.random()*6)+1
// Changing the image based on the random number
document.getElementsByTagName("img")[1].setAttribute("src", "dice" +randomNum2+ ".png");

// Checking which player won the Game
if(randomNum1>randomNum2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomNum1<randomNum2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
