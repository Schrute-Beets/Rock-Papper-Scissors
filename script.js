function computerPlay() {
    let options = ["Rock", "Papper", "Scissors"];
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
}