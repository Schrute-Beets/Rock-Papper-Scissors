game();

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*options.length);
    result = options[randomNumber];
    return result;
}

function userPlay() {
    let validInput = false;
    let input = prompt("Choose 'rock,' 'paper,' or 'scissors'!").toLowerCase();

    while (!validInput) {
        
        if (input === "rock" || input === "paper" || input === "scissors") {
            validInput = true;
        }
        else {
            alert("Please enter a valid choice.");
            input = prompt("Choose 'rock,' 'paper,' or 'scissors'!").toLowerCase();
        }
    }

    result = input;
    return result;
}

function playRound() {
    let computerSelection = computerPlay();
    let userSelection = userPlay();
    let result;

    console.log("User: " + userSelection);
    console.log("Computer: " + computerSelection);

    if (computerSelection === userSelection){
        result = "draw";
    }
    else if (computerSelection === "rock" && userSelection === "paper"){
        result = "win";
    }
    else if (computerSelection === "rock" && userSelection === "scissors"){
        result = "loss";
    }
    else if (computerSelection === "paper" && userSelection === "rock"){
        result = "loss";
    }
    else if (computerSelection === "paper" && userSelection === "scissors"){
        result = "win";
    }
    else if (computerSelection === "scissors" && userSelection === "rock"){
        result = "win";
    }
    else if (computerSelection === "scissors" && userSelection === "paper"){
        result = "loss";
    }
    return result;
}

function game() {
    let computerWins = 0;
    let userWins = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result === "draw"){
            draws++;
            console.log("It's a draw!");
        }
        else if (result === "win"){
            userWins++;
            console.log("You win!");
        }
        else if (result === "loss"){
            computerWins++;
            console.log("You lose!");
        }

        console.log("User wins: " + userWins);
        console.log("Computer wins: " + computerWins);
        console.log("Draws: " + draws);
        console.log("------------------------------------------");
    }
}