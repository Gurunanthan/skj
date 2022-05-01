var randomdice1=Math.floor(Math.random(Math.random(Math.random(Math.random(Math.random(Math.random(Math.random())))))) * 6)+1;
var dice="images/dice"+randomdice1+".png";
var dicegame=document.querySelectorAll("img")[0];
dicegame.setAttribute("src",dice);
var randomdice2=Math.floor(Math.random(Math.random(Math.random(Math.random(Math.random(Math.random(Math.random()))))))*6)+1;
var dice2="images/dice"+randomdice2+".png";
var dicegame2=document.querySelectorAll("img")[1];
dicegame2.setAttribute("src",dice2);
var display1=console.log(randomdice1);

if(randomdice1==randomdice2)
{
    document.querySelector("h1").innerHTML="Match draw";
}
else if(randomdice1 > randomdice2)
{
    document.querySelector("h1").innerHTML="Player1 wins";
    var display1=randomdice1;
    var h1=document.querySelector("p")
    display1.setAttribute("p",display1)
}
else
{
    document.querySelector("h1").innerHTML="Player2 wins";
    var display2=randomdice2;
    display1.setAttribute("p",display1);
}