//document.querySelector("h1").innerHTML="Good bye";
//document.querySelector("h1").classList.add("huge");

var rand_number1 = Math.floor(Math.random()*6)+1;
var img = "dice" + rand_number1 + ".png";
var img_path = "images/" + img;

document.querySelectorAll("img")[0].setAttribute("src",img_path);

var rand_number2 = Math.floor(Math.random()*6)+1;
var img = "dice" + rand_number2 + ".png";
var img_path = "images/" + img;

document.querySelectorAll("img")[1].setAttribute("src",img_path);
if (rand_number1>rand_number2)
{
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if (rand_number2>rand_number1)
{
  document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Tie";
}
