
var randomNumber1 = Math.random() * 6; 
randomNumber1 = Math.floor(randomNumber1) + 1; 

var randomNumber2 = Math.random() * 6; 
randomNumber2 = Math.floor(randomNumber2) + 1; 

var randomImage1 = "images/dice" + randomNumber1 + ".png"; //images/dice5.png 
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0]; 
var image2 = document.querySelectorAll("img")[1]; 

image1.setAttribute("src", randomImage1); 
image2.setAttribute("src", randomImage2); 

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins ! 🏆";  
    document.querySelector(".player1 p").innerHTML = "Player 1🎖";  
   
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins ! 🏆 ";  
    document.querySelector(".player2 p").innerHTML = "Player 2🎖"; 
   
}

else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw 😟";  
   
}