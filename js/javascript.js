function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedTitleChallenge() {
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const firstSentence = document.createElement('h1');
    firstSentence.innerText = "You are challenged to the most noble of duels!";
    firstSentence.style.color = 'white';
    header.appendChild(firstSentence);
    const cat = document.createElement('img');
    cat.setAttribute('src', './img/cat.png');
    cat.style.cssText = 'position: absolute; bottom: -65px; margin-left: -391px; left: 50%;';
    body.appendChild(cat);
    await sleep(3000);
    header.removeChild(header.firstChild);
    await sleep(700);
    const secondSentence = document.createElement('h1');
    secondSentence.innerText = "First to 5 wins all!";
    secondSentence.style.color = 'white';
    header.appendChild(secondSentence);
    await sleep(3000);
    header.removeChild(header.firstChild);
    await sleep(700);
    const thirdSentence = document.createElement('h1');
    thirdSentence.innerText = "In a game of";
    thirdSentence.style.color = 'white';
    header.appendChild(thirdSentence);
    await sleep(2000);
    header.removeChild(header.firstChild);
    cat.classList.toggle('fadeOut');
    await sleep(500);
    const firstTitle = document.createElement('h1');
    firstTitle.innerText = "ROCK ";
    firstTitle.style.cssText = 'color: white; padding: 0px 2rem';
    header.appendChild(firstTitle);
    const rock = document.querySelector('#rock');
    rock.classList.toggle('hide');
    await sleep(1500);
    const secondTitle = document.createElement('h1');
    secondTitle.innerText = "PAPER ";
    secondTitle.style.cssText = 'color: white; padding: 0px 2rem';
    header.appendChild(secondTitle);
    const paper = document.querySelector('#paper');
    paper.classList.toggle('hide');
    await sleep(1500);
    const thirdTitle = document.createElement('h1');
    thirdTitle.innerText = "SCISSORS";
    thirdTitle.style.cssText = 'color: white; padding: 0px 2rem';
    header.appendChild(thirdTitle);
    const scissors = document.querySelector('#scissors');
    scissors.classList.toggle('hide');



}


delayedTitleChallenge();








// function to randomise the coputer choice of rock paper or scissors.
function getComputerChoice() {
    random = Math.floor(Math.random() * 3);
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
    user.style.padding = '1rem';
    result.appendChild(user);
    const puter = document.createElement('p');
    puter.innerText = "Kitty chose: " + computerChoice;
    puter.style.padding = '1rem';
    result.appendChild(puter);

    const btns = document.querySelectorAll('button')
    const playerScore = document.createElement('p');
    playerScore.innerText = "Player total: " + counter;
    playerScore.style.padding = '1rem';
    runningTotal.appendChild(playerScore);

    const draws = document.createElement('p');
    draws.innerText = "Number of draws: " + drawCounter;
    draws.style.paddingTop = '1rem';
    runningTotal.appendChild(draws);

    const computerScore = document.createElement('p');
    computerScore.innerText = "Kitty total: " + computerCounter;
    computerScore.style.padding = '1rem';
    runningTotal.appendChild(computerScore);


    if (userChoice === computerChoice) {
        const draw = document.createElement('p');
        draw.innerText = "It's a draw!";
        draw.style.paddingTop = '1rem';
        result.insertBefore(draw, puter);
        ++drawCounter;
        playerScore.innerText = "Player total: " + counter;
        draws.innerText = "Number of draws: " + drawCounter;
        computerScore.innerText = "Kitty total: " + computerCounter;
    } else if (userChoice === 'paper' && computerChoice === "rock") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        win.style.paddingTop = '1rem';
        result.insertBefore(win, puter);
        ++counter;
        playerScore.innerText = "Player total: " + counter;
        draws.innerText = "Number of draws: " + drawCounter;
        computerScore.innerText = "Kitty total: " + computerCounter;
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Hss! Spit! Scratch! You beat me!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Rematch?";
            rematch.style.cssText = 'font-size: 2rem';
            rematch.classList.add('rainbow');
            const btnContainer = document.querySelector('#btnContainer');
            btnContainer.appendChild(rematch);
            const replay = document.getElementsByClassName('rainbow');
            replay[0].addEventListener('click', function (e) {
                const btnContain = document.querySelector('#btnContainer');
                btnContain.removeChild(btnContain.lastChild);
                for (i of btns) {
                    i.classList.toggle('hide');
                }
                counter = 0;
                computerCounter = 0;
                drawCounter = 0;
                removelAllChildNodes(runningTotal);
                removelAllChildNodes(result);
            });

        }
    } else if (userChoice === 'paper' && computerChoice === "scissors") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        lose.style.paddingTop = '1rem';
        result.insertBefore(lose, puter);
        ++computerCounter;
        playerScore.innerText = "Player total: " + counter;
        draws.innerText = "Number of draws: " + drawCounter;
        computerScore.innerText = "Kitty total: " + computerCounter;
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Meow! Cats rule humans drool!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Rematch?";
            rematch.style.cssText = 'font-size: 2rem';
            rematch.classList.add('rainbow');
            const btnContainer = document.querySelector('#btnContainer');
            btnContainer.appendChild(rematch);
            const replay = document.getElementsByClassName('rainbow');
            replay[0].addEventListener('click', function (e) {
                const btnContain = document.querySelector('#btnContainer');
                btnContain.removeChild(btnContain.lastChild);
                for (i of btns) {
                    i.classList.toggle('hide');
                }
                counter = 0;
                computerCounter = 0;
                drawCounter = 0;
                removelAllChildNodes(runningTotal);
                removelAllChildNodes(result);
            });

        }
    } else if (userChoice === 'rock' && computerChoice === "paper") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        lose.style.paddingTop = '1rem';
        result.insertBefore(lose, puter);
        ++computerCounter;
        playerScore.innerText = "Player total: " + counter;
        draws.innerText = "Number of draws: " + drawCounter;
        computerScore.innerText = "Kitty total: " + computerCounter;
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Meow! Cats rule humans drool!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Rematch?";
            rematch.style.cssText = 'font-size: 2rem;'
            rematch.classList.add('rainbow');
            const btnContainer = document.querySelector('#btnContainer');
            btnContainer.appendChild(rematch);
            const replay = document.getElementsByClassName('rainbow');
            replay[0].addEventListener('click', function (e) {
                const btnContain = document.querySelector('#btnContainer');
                btnContain.removeChild(btnContain.lastChild);
                for (i of btns) {
                    i.classList.toggle('hide');
                }
                counter = 0;
                computerCounter = 0;
                drawCounter = 0;
                removelAllChildNodes(runningTotal);
                removelAllChildNodes(result);
            });

        }
    } else if (userChoice === 'rock' && computerChoice === "scissors") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        win.style.paddingTop = '1rem';
        result.insertBefore(win, puter);
        ++counter;
        playerScore.innerText = "Player total: " + counter;
        draws.innerText = "Number of draws: " + drawCounter;
        computerScore.innerText = "Kitty total: " + computerCounter;
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Hss! Spit! Scratch! You beat me!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Rematch?";
            rematch.style.cssText = 'font-size: 2rem';
            rematch.classList.add('rainbow');
            const btnContainer = document.querySelector('#btnContainer');
            btnContainer.appendChild(rematch);
            const replay = document.getElementsByClassName('rainbow');
            replay[0].addEventListener('click', function (e) {
                const btnContain = document.querySelector('#btnContainer');
                btnContain.removeChild(btnContain.lastChild);
                for (i of btns) {
                    i.classList.toggle('hide');
                }
                counter = 0;
                computerCounter = 0;
                drawCounter = 0;
                removelAllChildNodes(runningTotal);
                removelAllChildNodes(result);
            });

        }
    } else if (userChoice === 'scissors' && computerChoice === "rock") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        lose.style.paddingTop = '1rem';
        result.insertBefore(lose, puter);
        ++computerCounter;
        playerScore.innerText = "Player total: " + counter;
        draws.innerText = "Number of draws: " + drawCounter;
        computerScore.innerText = "Kitty total: " + computerCounter;
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Meow! Cats rule humans drool!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Rematch?";
            rematch.style.cssText = 'font-size: 2rem';
            rematch.classList.add('rainbow');
            const btnContainer = document.querySelector('#btnContainer');
            btnContainer.appendChild(rematch);
            const replay = document.getElementsByClassName('rainbow');
            replay[0].addEventListener('click', function (e) {
                const btnContain = document.querySelector('#btnContainer');
                btnContain.removeChild(btnContain.lastChild);
                for (i of btns) {
                    i.classList.toggle('hide');
                }
                counter = 0;
                computerCounter = 0;
                drawCounter = 0;
                removelAllChildNodes(runningTotal);
                removelAllChildNodes(result);
            });

        }
    } else if (userChoice === 'scissors' && computerChoice === "paper") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        win.style.paddingTop = '1rem';
        result.insertBefore(win, puter);
        ++counter;
        playerScore.innerText = "Player total: " + counter;
        draws.innerText = "Number of draws: " + drawCounter;
        computerScore.innerText = "Kitty total: " + computerCounter;
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Hss! Spit! Scratch! You beat me!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Rematch?";
            rematch.style.cssText = 'font-size: 2rem';
            rematch.classList.add('rainbow');
            const btnContainer = document.querySelector('#btnContainer');
            btnContainer.appendChild(rematch);
            const replay = document.getElementsByClassName('rainbow');
            replay[0].addEventListener('click', function (e) {
                const btnContain = document.querySelector('#btnContainer');
                btnContain.removeChild(btnContain.lastChild);
                for (i of btns) {
                    i.classList.toggle('hide');
                }
                counter = 0;
                computerCounter = 0;
                drawCounter = 0;
                removelAllChildNodes(runningTotal);
                removelAllChildNodes(result);
            });

        }
    }

};

// setting up the required variables and counters to keep score.
let counter = 0;
let computerCounter = 0;
let drawCounter = 0;

// adding event listeners to the buttons to play round when user chooses r/p or s
const btn = document.querySelectorAll('button');
for (i of btn) {
    i.addEventListener('click', function (e) {
        userChoice = e.target.id;
        play(userChoice, getComputerChoice())
    });
}
const mouseOver = document.querySelectorAll('button');
for (i of btn) {
    i.addEventListener('mouseover', function (e) {
        e.target.style.cssText = 'border: 3px solid #85FF33; margin-top: 20px;';

    });
}

const mouseOut = document.querySelectorAll('button');
for (i of btn) {
    i.addEventListener('mouseout', function (e) {
        e.target.style.cssText = 'border: 2px solid grey; margin-top: 16px;';

    });
}


// event listener for reset button
/*
const replay = document.getElementsByClassName('rainbow');
            replay[0].addEventListener('click', function(e) {
            remplay.classList.add('hide');
                for (i of btns) {
                i.classList.toggle('hide');
            }

            });*/



// create div's to display results
const result = document.createElement('div');
result.style.cssText = 'background: olive; display: flex; justify-content: space-around; width: 80%; margin: 0 auto; border-radius: 10px;';
result.setAttribute('id', 'result');
const body = document.querySelector('body');
body.appendChild(result);

const runningTotal = document.createElement('div');
runningTotal.style.cssText = 'background: gray; display: flex; justify-content: space-around; width: 80%; margin: 0 auto; border-radius: 10px; margin-top: 1rem;';
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