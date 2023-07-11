// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

let button = document.getElementById("play-button")
button.addEventListener("click" , play)

function play(){
    window.location.href = "game.html"
}