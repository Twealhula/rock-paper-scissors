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

    if (x === y) {
        return "It's a Draw!";
    }   else if (x === "rock" && y === "scissors" || x === "scissors" && y === "paper" || x === "paper" && y === "rock" ) {
        return `You Win! ${x} beats ${y}`;
    }   else {
        return `You Lose! ${y} beats ${x}`;
    }
}

function game() { //call playRound 5 times and each time keep record of the score, return Win or Lose at the end

    let playerScore = 0 //create player's score and set to 0
    let computerScore = 0 //create computer's score and set to 0

    for (let i = 0; i < 5; i++) { //loop code 5 times
        let playerSelection = prompt("Rock Paper Scissors?")
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))

    }

}

game()