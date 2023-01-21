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
    cat.setAttribute('id', 'cat');
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
    firstTitle.style.cssText = 'color: white;';
    header.appendChild(firstTitle);
    const rock = document.querySelector('#rock');
    rock.classList.toggle('hide');
    await sleep(1500);
    const secondTitle = document.createElement('h1');
    secondTitle.innerText = "PAPER ";
    secondTitle.style.cssText = 'color: white;';
    header.appendChild(secondTitle);
    const paper = document.querySelector('#paper');
    paper.classList.toggle('hide');
    await sleep(1500);
    const thirdTitle = document.createElement('h1');
    thirdTitle.innerText = "SCISSORS";
    thirdTitle.style.cssText = 'color: white;';
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
    result.style.border = '2px solid white';
    runningTotal.style.border = '2px solid white';


    const playerBox = document.createElement('div');
    playerBox.style.cssText = 'flex: 1; display: flex; flex-direction: column; justify-content: space-around; align-items: center; background: black; color: white; border-radius: 35px; padding: 1rem;';
    const user = document.createElement('p');
    user.innerText = "You chose:";
    const userChoiceImg = document.createElement('div');
    userChoiceImg.classList.add(userChoice);
    playerBox.appendChild(user);
    playerBox.appendChild(userChoiceImg);
    result.appendChild(playerBox);
    const kittyBox = document.createElement('div');
    kittyBox.style.cssText = 'flex: 1; display: flex; flex-direction: column; justify-content: space-around; align-items: center; background: black; color: white; border-radius: 35px; padding: 1rem;';
    const puter = document.createElement('p');
    puter.innerText = "Kitty chose:";
    const kittyChoiceImg = document.createElement('div');
    kittyChoiceImg.classList.add(computerChoice);
    kittyBox.appendChild(puter);
    kittyBox.appendChild(kittyChoiceImg);
    result.appendChild(kittyBox);

    const resultBox = document.createElement('div');
    resultBox.style.cssText = 'flex: 2; display: flex; flex-direction: column; justify-content: space-around; align-items: center; margin-left: 1rem; margin-right: 1rem; background: black; color: white; border-radius: 35px; padding: 1rem;';
    result.insertBefore(resultBox, kittyBox);

    const btns = document.querySelectorAll('button');

    const playerTotal = document.createElement('div');
    playerTotal.style.cssText = 'display: flex; flex-direction: column; justify-content: space-around; align-items: center; background: black; color: white; border-radius: 35px; padding: 1rem;';
    const playerCounter = document.createElement('div');
    playerCounter.innerText = counter;
    playerTotal.appendChild(playerCounter);
    runningTotal.appendChild(playerTotal);
    const drawTotal = document.createElement('div');
    drawTotal.style.cssText = 'display: flex; flex-direction: column; justify-content: space-around; align-items: center; margin-left: 1rem; margin-right: 1rem; background: black; color: white; border-radius: 35px; padding: 1rem;';
    const drawsCounter = document.createElement('div');
    drawsCounter.innerText = drawCounter;
    drawTotal.appendChild(drawsCounter);
    runningTotal.appendChild(drawTotal);
    const kittyTotal = document.createElement('div');
    kittyTotal.style.cssText = 'display: flex; flex-direction: column; justify-content: space-around; align-items: center; background: black; color: white; border-radius: 35px; padding: 1rem;';
    const kittyCounter = document.createElement('div');
    kittyCounter.innerText = computerCounter;
    kittyTotal.appendChild(kittyCounter);
    runningTotal.appendChild(kittyTotal);



    const playerScore = document.createElement('p');
    playerScore.innerText = "Player total:";
    playerTotal.insertBefore(playerScore, playerCounter);

    const draws = document.createElement('p');
    draws.innerText = "Number of draws:";
    drawTotal.insertBefore(draws, drawsCounter);

    const computerScore = document.createElement('p');
    computerScore.innerText = "Kitty total:";
    kittyTotal.insertBefore(computerScore, kittyCounter);


    if (userChoice === computerChoice) {
        const draw = document.createElement('p');
        draw.innerText = "It's a draw!";
        draw.classList.toggle('flash');
        resultBox.appendChild(draw);
        ++drawCounter;
        playerCounter.innerText = counter;
        drawsCounter.innerText = drawCounter;
        kittyCounter.innerText = computerCounter;
        drawsCounter.classList.toggle('flash');
    } else if (userChoice === 'paper' && computerChoice === "rock") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        win.classList.toggle('flash');
        resultBox.appendChild(win);
        ++counter;
        playerCounter.innerText = counter;
        drawsCounter.innerText = drawCounter;
        kittyCounter.innerText = computerCounter;
        playerCounter.classList.toggle('flash');
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Hss! Spit! Scratch! You beat me!\n YOU WIN!!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Again?";
            rematch.style.cssText = 'font-size: 2rem; text-align: center;';
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
                result.style.border = 'none';
                runningTotal.style.border = 'none';
            });

        }
    } else if (userChoice === 'paper' && computerChoice === "scissors") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        lose.classList.toggle('flash');
        resultBox.appendChild(lose);
        ++computerCounter;
        playerCounter.innerText = counter;
        drawsCounter.innerText = drawCounter;
        kittyCounter.innerText = computerCounter;
        kittyCounter.classList.toggle('flash');
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Meow! Cats rule humans drool!\n YOU LOSE!!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Again?";
            rematch.style.cssText = 'font-size: 2rem; text-align: center;';
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
                result.style.border = 'none';
                runningTotal.style.border = 'none';
            });

        }
    } else if (userChoice === 'rock' && computerChoice === "paper") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        lose.classList.toggle('flash');
        resultBox.appendChild(lose);
        ++computerCounter;
        playerCounter.innerText = counter;
        drawsCounter.innerText = drawCounter;
        kittyCounter.innerText = computerCounter;
        kittyCounter.classList.toggle('flash');
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Meow! Cats rule humans drool!\n YOU LOSE!!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Again?";
            rematch.style.cssText = 'font-size: 2rem; text-align: center;'
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
                result.style.border = 'none';
                runningTotal.style.border = 'none';
            });

        }
    } else if (userChoice === 'rock' && computerChoice === "scissors") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        win.classList.toggle('flash');
        resultBox.appendChild(win);
        ++counter;
        playerCounter.innerText = counter;
        drawsCounter.innerText = drawCounter;
        kittyCounter.innerText = computerCounter;
        playerCounter.classList.toggle('flash');
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Hss! Spit! Scratch! You beat me!\n YOU WIN!!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Again?";
            rematch.style.cssText = 'font-size: 2rem; text-align: center;';
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
                result.style.border = 'none';
                runningTotal.style.border = 'none';
            });

        }
    } else if (userChoice === 'scissors' && computerChoice === "rock") {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        lose.classList.toggle('flash');
        resultBox.appendChild(lose);
        ++computerCounter;
        playerCounter.innerText = counter;
        drawsCounter.innerText = drawCounter;
        kittyCounter.innerText = computerCounter;
        kittyCounter.classList.toggle('flash');
        if (computerCounter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Meow! Cats rule humans drool!\n YOU LOSE!!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Again?";
            rematch.style.cssText = 'font-size: 2rem; text-align: center;';
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
                result.style.border = 'none';
                runningTotal.style.border = 'none';
            });

        }
    } else if (userChoice === 'scissors' && computerChoice === "paper") {
        const win = document.createElement('p');
        win.innerText = "You won!";
        win.classList.toggle('flash');
        resultBox.appendChild(win);
        ++counter;
        playerCounter.innerText = counter;
        drawsCounter.innerText = drawCounter;
        kittyCounter.innerText = computerCounter;
        playerCounter.classList.toggle('flash');
        if (counter === 5) {
            removelAllChildNodes(result);
            const victor = document.createElement('h1');
            victor.innerText = "Hss! Spit! Scratch! You beat me!\n YOU WIN!!";
            result.appendChild(victor);
            const btns = document.querySelectorAll('button');
            for (i of btns) {
                i.classList.toggle('hide');
            }
            const rematch = document.createElement('button');
            rematch.innerText = "Again?";
            rematch.style.cssText = 'font-size: 2rem; text-align: center;';
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
                result.style.border = 'none';
                runningTotal.style.border = 'none';
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
        e.target.style.cssText = 'border: 2px solid white; margin-top: 16px;';

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
result.style.cssText = 'background: black; color: white; display: flex; justify-content: center; width: 96%; margin: 0 auto; border-radius: 10px; text-align: center;';
result.setAttribute('id', 'result');
const body = document.querySelector('body');
body.appendChild(result);

const runningTotal = document.createElement('div');
runningTotal.style.cssText = 'background: black; display: flex; justify-content: space-around; width: 96%; margin: 0 auto; border-radius: 10px; margin-top: 1rem;';
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