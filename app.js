let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1){
        computerChoice = 'paper'
    }
    if(randomNumber === 2){
        
        computerChoice = 'rock'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if(computerChoice === userChoice){
       result = 'Game draw' 
    }
    if(computerChoice === 'rock' && userChoice === "paper"){
        result = 'You Win' 
     }
     if(computerChoice === 'rock' && userChoice === "scissors"){
        result = 'You Lose!' 
     }
     if(computerChoice === 'paper' && userChoice === "scissors"){
        result = 'You Win!' 
     }
     if(computerChoice === 'paper' && userChoice === "rock"){
        result = 'You Lose!' 
     }
     if(computerChoice === 'scissors' && userChoice === "rock"){
        result = 'You Win!' 
     }
     if(computerChoice === 'scissors' && userChoice === "paper"){
        result = 'You lose!' 
     }
     resultDisplay.innerHTML = result
}