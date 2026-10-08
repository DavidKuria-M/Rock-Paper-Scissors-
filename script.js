const decision = ["rock","paper","scissors"];
let rock = document.getElementById("rock-play");
let paper = document.getElementById("paper-play");
let scissors = document.getElementById("scissors-play");

const  humanScoreDisplay = document.getElementById("score-human");
const computerScoreDisplay = document.getElementById("score-computer");
const displayResult = document.getElementById("outcome-result");

let humanscore = 0;
let computerscore = 0; 
let rounds = 0;
const maxRounds = 5;
let isGameOver = false;

rock.addEventListener("click",() => handleTurn("rock"));
paper.addEventListener("click",() => handleTurn("paper"));
scissors.addEventListener("click",() => handleTurn("scissors"));

function getComputerChoice(){
    let n = decision.length;
    const randomIndex = Math.floor(Math.random() * decision.length);
    return decision[randomIndex];
}

function handleTurn(humanchoice){
    if(isGameOver) return;
    if(rounds >= maxRounds){
        resetGame();
    }

    const computerChoice = getComputerChoice();
    playGame(humanchoice,computerChoice)
}

function playGame(humanchoice,computerChoice){
    rounds +=1;
    if(humanchoice === computerChoice){

        displayResult.textContent = `Round ${rounds}: it's a tie ! Both selected ${humanchoice}`;

    }else if((humanchoice === 'rock' && computerChoice === 'scissors') || 
            (humanchoice === 'paper' && computerChoice === 'rock') ||
            humanchoice === 'scissors' && computerChoice === 'paper'){
                humanscore += 1;
                humanScoreDisplay.textContent = humanscore;
                displayResult.textContent = `Round ${rounds}: You win! ${capitalize(humanchoice)} beats ${computerChoice}.`;
    }else{
        computerscore += 1;
        computerScoreDisplay.textContent = computerscore;
        displayResult.textContent = `Round ${rounds}: Computer win! ${capitalize(computerChoice)} beats ${humanchoice}.`;
    }

    if(rounds === maxRounds){
        isGameOver = true;

        let matchResult = "";

        if(humanscore > computerscore){
            matchResult = "You won the match!";
        }else if(computerscore >  humanscore){
            matchResult = "Computer won the match!";
        }else{
            matchResult = "It's a tie match!";
        }

        let secondsLeft = 10;

        displayResult.textContent = `${matchResult} Resetting in ${secondsLeft}s....`;

        const countDownInterval = setInterval(() => {
            secondsLeft--;
            displayResult.textContent = `${matchResult} Resetting in ${secondsLeft}s...`;

            if(secondsLeft <= 0){
                clearInterval(countDownInterval);
                resetGame();
            }
        },1000)
    }
    
}


function announceWinner(){   
    if(rounds === maxRounds){
        isGameOver = true;
        if(humanscore > computerscore){
            displayResult.textContent = `GAME OVER! You win: ${humanscore} - ${computerscore}`;
        }else if(computerscore >  humanscore){
            displayResult.textContent = `GAME OVER! Computer wins: ${computerscore} - ${humanscore}`;
        }else{
            displayResult.textContent = `GAME OVER! Its a tie, ${humanscore} - Computer ${computerscore} `;
        }  

        setTimeout(() => {
            resetGame();
        }, 10000);
    }
}

function resetGame(){
    humanscore = 0;
    computerscore = 0;
    rounds = 0;
    isGameOver = false;
    humanScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    displayResult.textContent = "Make your move to start!";
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

