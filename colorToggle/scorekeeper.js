// alert("Connect!");


var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.getElementById("reset");
var numInput  = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span")

p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
        gameOver = true;
    }
    p1Display.textContent = p1Score;

    }
   
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
        }
    
    p2Display.textContent = p2Score; 
    }
});

resetButton.addEventListener("click", function(){
    reset()
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p1Display.classList.remove("winner");
    gameOver = false;
};

numInput.addEventListener("change", function(){
    winningScore = Number(numInput.value);
    winningScoreDisplay.textContent = numInput.value;
    reset();
    
});