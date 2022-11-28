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
     
     removelAllChildNodes(result);
     removelAllChildNodes(runningTotal);

     const user = document.createElement('p');
     user.innerText = "You chose: " + userChoice;
     result.appendChild(user);
     const puter = document.createElement('p');
     puter.innerText = "Computer chose: " + computerChoice;
     result.appendChild(puter);

     const playerScore = document.createElement('p');
     playerScore.innerText = "Player total: " + counter;
     runningTotal.appendChild(playerScore);
 
     const computerScore = document.createElement('p');
     computerScore.innerText = "Computer total: " + computerCounter;
     runningTotal.appendChild(computerScore);


    if (userChoice === computerChoice) {
        const draw = document.createElement('p');
        draw.innerText = "It's a draw!";
        result.appendChild(draw);
        playerScore.innerText = "Player total: " + counter;
        computerScore.innerText = "Computer total: " + computerCounter;
    } else if (userChoice === 'paper' && computerChoice === "rock") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        result.appendChild(win);
        ++counter;
        playerScore.innerText = "Player total: " + counter;
        computerScore.innerText = "Computer total: " + computerCounter;
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "You are the victor!";
            result.appendChild(victor);
        }
    } else if (userChoice === 'paper' && computerChoice === "scissors") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        result.appendChild(lose);
        ++computerCounter;
        playerScore.innerText = "Player total: " + counter;
        computerScore.innerText = "Computer total: " + computerCounter;
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Bleep boop! Machines are ever victorious!";
            result.appendChild(victor);
        }
    } else if (userChoice === 'rock' && computerChoice === "paper") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        result.appendChild(lose);
        ++computerCounter;
        playerScore.innerText = "Player total: " + counter;
        computerScore.innerText = "Computer total: " + computerCounter;
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Bleep boop! Machines are ever victorious!";
            result.appendChild(victor);
        }
    }else if (userChoice === 'rock' && computerChoice === "scissors") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        result.appendChild(win);;
        ++counter;
        playerScore.innerText = "Player total: " + counter;
        computerScore.innerText = "Computer total: " + computerCounter;
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "You are the victor!";
            result.appendChild(victor);
        }
    }else if (userChoice === 'scissors' && computerChoice === "rock") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        result.appendChild(lose);
        ++computerCounter;
        playerScore.innerText = "Player total: " + counter;
        computerScore.innerText = "Computer total: " + computerCounter;
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Bleep boop! Machines are ever victorious!";
            result.appendChild(victor);
        }
    }else if (userChoice === 'scissors' && computerChoice === "paper") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        result.appendChild(win);;
        ++counter;
        playerScore.innerText = "Player total: " + counter;
        computerScore.innerText = "Computer total: " + computerCounter;
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "You are the victor!";
            result.appendChild(victor);
        }
    }
    
};

// setting up the required variables and counters to keep score.
let counter = 0;
let computerCounter = 0;

// adding event listeners to the buttons to play round when user chooses r/p or s
const btn = document.querySelectorAll('button');
console.log(btn);
for (i of btn) {
    i.addEventListener('click', function(e){
        userChoice = e.target.id;
        play(userChoice, getComputerChoice())
    });
}

// create div's to display results
const result = document.createElement('div');
result.style.cssText = 'background: blue;';
result.setAttribute('id', 'result');
const body = document.querySelector('body');
body.appendChild(result);

const runningTotal = document.createElement('div');
runningTotal.style.cssText = 'background: gray;';
runningTotal.setAttribute('id', 'runningTotal');
body.appendChild(runningTotal);


// function to remove child nodes

function removelAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


/* // function to loop through 5 rounds and declare win, lose or draw. Resets counters at end. 
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
game(); */