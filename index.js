var randomNumber1 = Math.floor(Math.random()*6) + 1;

if(randomNumber1 === 1)
{
document.getElementById("image1").src="images/dice1.png";
}

else if(randomNumber1 === 2)
{
document.getElementById("image1").src="images/dice2.png";
}

else if(randomNumber1 === 3)
{
document.getElementById("image1").src="images/dice3.png";
}

else if(randomNumber1 === 4)
{
document.getElementById("image1").src="images/dice4.png";
}

else if(randomNumber1 === 5)
{
document.getElementById("image1").src="images/dice5.png";
}

else
{
document.getElementById("image1").src="images/dice6.png";
}

// /*SECOND DICE*/
var randomNumber2 = Math.floor(Math.random()*6) + 1;

 if(randomNumber2 === 1)
 {
 document.getElementById("image2").src="images/dice1.png";
 }

 else if(randomNumber2 === 2)
 {
 document.getElementById("image2").src="images/dice2.png";
 }

 else if(randomNumber2 === 3)
 {
document.getElementById("image2").src="images/dice3.png";
 }

 else if(randomNumber2 === 4)
 {
document.getElementById("image2").src="images/dice4.png";
 }

 else if(randomNumber2 === 5)
 {
document.getElementById("image2").src="images/dice5.png";
 }

 else
 {
document.getElementById("image2").src="images/dice6.png";
 }


if(randomNumber1 === randomNumber2)
{
  document.getElementById("refresfid").innerHTML = "Draw 😐";
}

if(randomNumber1 > randomNumber2)
{
  document.getElementById("refresfid").innerHTML = " 🎊 Player 1 Won ";
}

if(randomNumber1 < randomNumber2)
{
  document.getElementById("refresfid").innerHTML = "Player 2 Won 🎊 ";
}
