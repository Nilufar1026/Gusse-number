"use strict";

const button = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0
const buttonAgain=document.querySelector(".again")

const displayMessage= function(message){
    document.querySelector(".guess").innerHTML=message;
}

const restore= function(){
    score=20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    const guessText = document.querySelector(".guess");
    guessText.innerHTML = "Start guessing...";
    document.querySelector(".score-number").innerHTML = score
    document.querySelector(".box").innerHTML="?"
    document.querySelector(".input-number").value=""
    document.querySelector("main").style.backgroundColor = "black";
    document.querySelector("header").style.backgroundColor = "black";
}


button.addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".input-number").value);
  
  if (!inputNumber) {
    displayMessage("No number!") ;
  } else if (inputNumber === secretNumber) {
    displayMessage("Correct number!") ;
    document.querySelector("main").style.backgroundColor = "#60b347";
    document.querySelector("header").style.backgroundColor = "#60b347";
    document.querySelector(".box").textContent = secretNumber;
    if (score>highScore) {
        highScore=score
        document.querySelector(".highs-number").textContent = highScore;
    }
  } else if (inputNumber !== secretNumber) {
    if (score > 1) {
        displayMessage(inputNumber > secretNumber ? "Too high!":"Too low!");
        score--;
        document.querySelector(".score-number").innerHTML = score;
      } else {
        displayMessage("You lose the game!") ;
        document.querySelector(".score-number").innerHTML = 0;
      }
  }
});



buttonAgain.addEventListener("click",function(){
    restore()
})