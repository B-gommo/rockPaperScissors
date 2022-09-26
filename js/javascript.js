console.log("Hello console, lets play a game!");

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


function play(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);

    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (userChoice === 'paper' && computerChoice === "rock") {
        return "You win";
    } else if (userChoice === 'paper' && computerChoice === "scissors") {
        return "You lose";
    } else if (userChoice === 'rock' && computerChoice === "paper") {
        return "You lose";
    }else if (userChoice === 'rock' && computerChoice === "scissors") {
        return "You win";
    }else if (userChoice === 'scissors' && computerChoice === "rock") {
        return "You lose";
    }else if (userChoice === 'scissors' && computerChoice === "paper") {
        return "You win";
    } else {
        return "You need to enter the correct object"
    }
}

const userChoice = "rock";
const computerChoice = getComputerChoice();


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(play(prompt("choose", "rock, paper or scissors"), getComputerChoice()));

    }
}

game();