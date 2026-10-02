const play = document.querySelector("#play");

let humanscore = 0;
let computerscore = 0; 
let rounds = 1;

let choice = "";

let decision = ["rock","paper","scissors"];

play.addEventListener("click", () => {

    while(rounds <= 5){
        console.log("Round: ",rounds)
        choice = prompt("Choose rock,paper or scissors: ").toLocaleLowerCase();

        if(!decision.includes(choice)){
            alert("Invalid choice! Enter Rock,Paper or Scissors");     
        }

        let computer = getComputerChoice();
        playGame(choice,computer)

        rounds++;

        if(rounds > 5){
            console.log("Human Score: ",humanscore);
            console.log("Computer score: ",computerscore);

            if(humanscore > computerscore){
                alert("Human wins,score: "+ humanscore);
            }else if(computerscore >  humanscore){
                alert("Computer wins,score: "+ computerscore);
            }else{
                alert("its a tie ");
            }
        }
    }
  

});

function getComputerChoice(){
    let n = decision.length;
    for(let i = 0; i <= decision.length;i++){
        //console.log(decision[i]);
    }

    const randomIndex = Math.floor(Math.random() * decision.length);
    //console.log(randomIndex);
    return decision[randomIndex];
}

function playGame(humanchoice,computerChoice){

    console.log("Human selected:",humanchoice);
    console.log("Computer selected: ",computerChoice);

    //logic write
    if(humanchoice == computerChoice){
        console.log("Its a tie");
    }else if((humanchoice === 'rock' && computerChoice === 'scissors') || (humanchoice === 'paper' && computerChoice === 'rock') ||
            humanchoice === 'scissors' && computerChoice === 'paper'){
                humanscore += 1;
                console.log("Human wins")
    }else{
        computerscore += 1;
        console.log("Computer wins");
    }
    
}
