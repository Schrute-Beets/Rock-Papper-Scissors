playRound();

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

    console.log("User: " + userSelection);
    console.log("Computer: " + computerSelection);

    if (computerSelection === userSelection){
        console.log("It's a draw!");
    }
    else if (computerSelection === "rock" && userSelection === "paper"){
        console.log("You win!");
    }
    else if (computerSelection === "rock" && userSelection === "scissors"){
        console.log("You lose!");
    }
    else if (computerSelection === "paper" && userSelection === "rock"){
        console.log("You lose!");
    }
    else if (computerSelection === "paper" && userSelection === "scissors"){
        console.log("You win!");
    }
    else if (computerSelection === "scissors" && userSelection === "rock"){
        console.log("You win!");
    }
    else if (computerSelection === "scissors" && userSelection === "paper"){
        console.log("You lose!");
    }
}