function getComputerChoice(){
    let a = Math.floor(Math.random()*3)
    if(a == 0){
        return 'rock'
    }
    else if(a == 1){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}
// console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt("Please enter Rock, Paper or Scissors")
    // console.log(choice)
    return choice
}

let playerScore = 0
let computerScore = 0

function playRound(humanc,compc){
    const a = humanc.toLowerCase()
    const b = compc.toLowerCase()
    if(a==b){
        console.log("This round is a tie")
    }
    else if((a=='rock' && b == 'scissors') || (a=='paper' && b == 'rock') || (a=='scissors' && b=='paper')){
        console.log("You win!! " + a + ' beats '+ b)
        playerScore++
    }
    else{
        console.log('You lose! ' + b +' beats '+ a )
        computerScore++
    }
   
}

function playGame(){
    for (let i = 0; i<5; i++){
        const humanSelection = getHumanChoice()
        const compSelection = getComputerChoice()

        playRound(humanSelection, compSelection)
        console.log('Player Score: ' + playerScore)
        console.log('Computer Score: ' + computerScore)
    }
    if(playerScore > computerScore){
        console.log('Congrats you win')

    }
    else if (playerScore == computerScore){
        console.log('The game is a tie')
    }
    else {
        console.log('You Lose!')
    }
}

playGame()




