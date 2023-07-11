// Iteration 2: Generate 2 random number and display it on the screen

let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let timer = document.getElementById("timer")
let count = 5
let score = 0
let id = setInterval(()=>{
    if(count==0){
        localStorage.setItem("score" , score )
        clearInterval(id)
        window.location.href="gameover.html"
    }
    timer.innerText = count
count--

},1000)

let greaterButton = document.getElementById("greater-than")
greaterButton.addEventListener("click" , ()=>{
    handleOutput(">")
})

let equalButton = document.getElementById("equal-to")
equalButton.addEventListener("click" , ()=>{
    handleOutput ("=")
})

let lesserButton = document.getElementById("lesser-than")
lesserButton.addEventListener("click" ,()=>{
    handleOutput("<")
})

function randomFunction(){
number1.innerText = randomNumberGenerator()
number2.innerText = randomNumberGenerator()
}

randomFunction()

function randomNumberGenerator(){
   return Math.floor(Math.random()*100)
}

// Iteration 3: Make the options button functional

function handleOutput(a){
    if(a==">"){
if(+number1.innerText>+number2.innerText){
    score++
    count = 5
    randomFunction()
}else{
    count = 0
}
    }else if(a=="="){
        if(+number1.innerText ==  +number2.innerText){
            score++
            count = 5
            randomFunction()
        }else{
            count = 0
        }
    }else{
        if(+number1.innerText <  +number2.innerText){
            score++
            count = 5
            randomFunction()
        }else{
            count = 0
        }

    }

}



// Iteration 4: Build a timer for the game
