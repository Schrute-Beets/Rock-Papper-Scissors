function computerPlay() {
    let options = ["rock", "papper", "scissors"];
    let randomNumber = Math.floor(Math.random()*options.length);
    let computerSelection = options(randomNumber);
    return computerSelection;
}

function userPlay() {
    let validInput = false;

    while (!validInput) {
        let input = prompt("Choose 'rock,' 'paper,' or 'scissors'!").toLowerCase;
        if (input === "rock" || input === "paper" || input === "scissors") {
            validInput = true;
        }
        else {
            alert("Please enter a valid choice.");
        }
    }

    let userSelection = input;
    return userSelection;
}

function playRound(computerSelection, userSelection) {
    if (computerSelection === "rock" && userSelection === "rock"){}

    else if (computerSelection === "rock" && userSelection === "paper"){}

    else if (computerSelection === "rock" && userSelection === "scissors"){}

    else if (computerSelection === "paper" && userSelection === "rock"){}

    else if (computerSelection === "paper" && userSelection === "paper"){}

    else if (computerSelection === "paper" && userSelection === "scissors"){}

    else if (computerSelection === "scissors" && userSelection === "rock"){}

    else if (computerSelection === "scissors" && userSelection === "paper"){}

    else if (computerSelection === "scissors" && userSelection === "scissors"){}
}