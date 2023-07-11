// Iteration 5: Store the player score and display it on the game over screen

let replayButton = document.getElementById("play-again-button")
replayButton.addEventListener("click" , replay)

let score = document.getElementById("score-board")
score.innerText = localStorage.getItem("score")


function replay(){
    window.location.href = "game.html"
}