function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}
// console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt("Please enter Rock, Paper or Scissors")
    // console.log(choice)
    return choice
}

let playerScore = 0
let computerScore = 0

function playRound(humanc){
    if(playerScore>=5 || computerScore >=5) return ;
    const a = humanc.toLowerCase()
    const compc = getComputerChoice();
    const b = compc.toLowerCase()
    let roundResult = '';
    if(a==b){
        roundResult = 'This round is a tie!';
    }
    else if((a=='rock' && b == 'scissors') || (a=='paper' && b == 'rock') || (a=='scissors' && b=='paper')){
       roundResult = 'You Win! ' + a +' beats '+ b;
        playerScore++
    }
    else{
        roundResult = 'You lose! ' + b +' beats '+ a;
        computerScore++

    }
    resultdiv.textContent = roundResult;
    scorediv.textContent = 'Player Score: ' + playerScore + ', Computer Score: '+ computerScore;
    if(playerScore === 5 || computerScore === 5){
        finaldiv.textContent =( playerScore > computerScore)
            ? 'Congrats! You won the game!'
            : 'Sorry! You lost the game.';
    }
   
}
const resultdiv = document.createElement('div');
const scorediv = document.createElement('div');
const finaldiv = document.createElement('div');
document.body.appendChild(resultdiv);
document.body.appendChild(scorediv);
document.body.appendChild(finaldiv);


document.getElementById('rock').addEventListener('click', ()=>playRound('rock'))
document.getElementById('paper').addEventListener('click', ()=>playRound('paper'))
document.getElementById('scissors').addEventListener('click', ()=>playRound('scissors'))





