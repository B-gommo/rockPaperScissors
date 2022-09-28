console.log("Hello console, lets play a game!");
// function to randomise the coputer choice of rock paper or scissors.
function getComputerChoice() {
    random = Math.floor(Math.random()*3);
    if (random === 0) {
        return "scissors";
    } else if (random === 1) {
        return "paper";
    } else {
        return "rock"
    }
}

// function to play a round of rock,paper,scissors and log to console
function play(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);

    if (userChoice === computerChoice) {
        console.log("It's a draw!");
        return drawCounter++;
    } else if (userChoice === 'paper' && computerChoice === "rock") {
        console.log( "You win");
        return counter++;
    } else if (userChoice === 'paper' && computerChoice === "scissors") {
        console.log("You lose");
        return computerCounter++;
    } else if (userChoice === 'rock' && computerChoice === "paper") {
        console.log("You lose");
        return computerCounter++;
    }else if (userChoice === 'rock' && computerChoice === "scissors") {
        console.log( "You win");
        return counter++;
    }else if (userChoice === 'scissors' && computerChoice === "rock") {
        console.log("You lose");
        return computerCounter++;
    }else if (userChoice === 'scissors' && computerChoice === "paper") {
        console.log( "You win");
        return counter++;
    } else {
        return "You need to enter the correct object"
    }
}

// setting up the required variables and counters to keep score.
const userChoice = "rock";
const computerChoice = getComputerChoice();
let counter = 0;
let computerCounter = 0;
let drawCounter = 0;

// function to loop through 5 rounds and declare win, lose or draw. Resets counters at end. 
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(play(prompt("choose", "rock, paper or scissors"), getComputerChoice()));
    }
    if (computerCounter > counter) {
        console.log("Computer wins obviously!");
        console.log("You won " + counter + " games. Computer won " + computerCounter + " games. You drew " + drawCounter + " games.");
    } else if (computerCounter < counter) {
        console.log("You win clever clogs!");
        console.log("You won " + counter + " games. Computer won " + computerCounter + " games. You drew " + drawCounter + " games.");
    } else {
        console.log("It's a draw! You are both the bestest!");
        console.log("You won " + counter + " games. Computer won " + computerCounter + " games. You drew " + drawCounter + " games.");
    }  
    counter = 0;
    computerCounter = 0;
    drawCounter = 0;
}
// call the above game function
game();