var random =Math.floor( Math.random()*6)+1;
var randomDiceImage="images/"+"dice"+random+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

// dice2
var random2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/"+"dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

if (random > random2)
{
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(random2 > random)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
