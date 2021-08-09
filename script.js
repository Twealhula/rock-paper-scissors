function computerPlay() { //randomly selects 'Rock', 'Paper', or 'Scissors'
    
    let x = Math.floor(Math.random() * 3); //generate random number (0-2)
    
    if (x === 0) {
        return "rock";
    }   else if (x===1) {
        return "paper";
    }   else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) { //take input of player and evaluate against random selection of computer to determine an outcome

    let x = playerSelection.toLowerCase(); //convert player input string into lowercase and set as local x
    let y = computerSelection; //set computer generated input as local y

//If selection is the same, then "Draw"
//Permutations for "Win" case: ROCK AND SCISSORS, SCISSORS AND PAPER, PAPER AND ROCK
//Else return "Lose"

//Print result in console, return 0, 1 or 2, each corresponding to Draw, Win or Lose
    if (x === y) {
        console.log("It's a Draw!")
        return 0;
    }   else if (x === "rock" && y === "scissors" || x === "scissors" && y === "paper" || x === "paper" && y === "rock" ) {
        console.log(`You Win! ${x} beats ${y}`)
        return 1;
    }   else {
        console.log(`You Lose! ${y} beats ${x}`)
        return 2;
    }
}

function game() { //call playRound 5 times and each time keep record of the score, return Win or Lose at the end

    let playerScore = 0; //create player's score and set to 0
    let computerScore = 0; //create computer's score and set to 0

    for (let i = 0; i < 5; i++) { //loop code 5 times
        let playerSelection = prompt("Rock Paper Scissors?");
        let computerSelection = computerPlay();
        
        switch (playRound(playerSelection, computerSelection)) {
            case 1:
                ++playerScore;
                break;
            case 2:
                ++computerScore;
                break;
        }
    
        console.log(`${playerScore} : ${computerScore}`)
    }

}

game()