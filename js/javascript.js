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

// setting up the required variables and counters to keep score.
let counter = 0;
let computerCounter = 0;
let drawCounter = 0;

// function to play a round of rock,paper,scissors and log to console
function play(userChoice, computerChoice) {

    function win() {
        const win = document.createElement('p');
        win.innerText = "You won!";
        win.classList.toggle('flash');
        resultBox.appendChild(win);
        ++counter;
        playerCounter.innerText = counter;
        playerCounter.classList.toggle('flash');
    }

    function lose() {
        const lose = document.createElement('p');
        lose.innerText = "You lose!";
        lose.classList.toggle('flash');
        resultBox.appendChild(lose);
        ++computerCounter;
        kittyCounter.innerText = computerCounter;
        kittyCounter.classList.toggle('flash');
    }

    function rematchWinner() {
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

    function rematchLoser() {
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

    removelAllChildNodes(result);
    removelAllChildNodes(runningTotal);
    result.style.border = '2px solid white';
    runningTotal.style.border = '2px solid white';



    const playerBox = document.createElement('div');
    playerBox.classList.add('resultCards');
    const playerBoxHeader = document.createElement('p');
    playerBoxHeader.innerText = "You chose:";
    const playerBoxImg = document.createElement('div');
    playerBoxImg.classList.add(userChoice);
    playerBox.appendChild(playerBoxHeader);
    playerBox.appendChild(playerBoxImg);
    result.appendChild(playerBox);

    const kittyBox = document.createElement('div');
    kittyBox.classList.add('resultCards');
    const kittyBoxHeader = document.createElement('p');
    kittyBoxHeader.innerText = "Kitty chose:";
    const kittyBoxImg = document.createElement('div');
    kittyBoxImg.classList.add(computerChoice);
    kittyBox.appendChild(kittyBoxHeader);
    kittyBox.appendChild(kittyBoxImg);
    result.appendChild(kittyBox);

    const resultBox = document.createElement('div');
    resultBox.classList.add('resultCards');
    resultBox.style.cssText = 'margin-left: 1rem; margin-right: 1rem;';
    result.insertBefore(resultBox, kittyBox);



    const playerTotal = document.createElement('div');
    playerTotal.classList.add('resultCards');
    const playerCounter = document.createElement('div');
    playerCounter.innerText = counter;
    playerCounter.style.fontSize = '2rem';
    playerTotal.appendChild(playerCounter);
    runningTotal.appendChild(playerTotal);

    const drawTotal = document.createElement('div');
    drawTotal.classList.add('resultCards');
    drawTotal.style.cssText = 'margin-left: 1rem; margin-right: 1rem;';
    const drawsCounter = document.createElement('div');
    drawsCounter.innerText = drawCounter;
    drawsCounter.style.fontSize = '2rem';
    drawTotal.appendChild(drawsCounter);
    runningTotal.appendChild(drawTotal);

    const kittyTotal = document.createElement('div');
    kittyTotal.classList.add('resultCards');
    const kittyCounter = document.createElement('div');
    kittyCounter.innerText = computerCounter;
    kittyCounter.style.fontSize = '2rem';
    kittyTotal.appendChild(kittyCounter);
    runningTotal.appendChild(kittyTotal);



    const playerScore = document.createElement('p');
    playerScore.innerText = "Player total:";
    playerTotal.insertBefore(playerScore, playerCounter);

    const draws = document.createElement('p');
    draws.innerText = "Number of draws:";
    drawTotal.insertBefore(draws, drawsCounter);

    const kittyScore = document.createElement('p');
    kittyScore.innerText = "Kitty total:";
    kittyTotal.insertBefore(kittyScore, kittyCounter);


    if (userChoice === computerChoice) {
        const draw = document.createElement('p');
        draw.innerText = "It's a draw!";
        draw.classList.toggle('flash');
        resultBox.appendChild(draw);
        ++drawCounter;
        drawsCounter.innerText = drawCounter;
        drawsCounter.classList.toggle('flash');

    } else if (userChoice === 'rock' && computerChoice === "paper") {
        lose();
        if (computerCounter === 5) {
            rematchLoser();
        }
    } else if (userChoice === 'paper' && computerChoice === "scissors") {
        lose();
        if (computerCounter === 5) {
            rematchLoser();
        }
    } else if (userChoice === 'scissors' && computerChoice === "rock") {
        lose();
        if (computerCounter === 5) {
            rematchLoser();
        }
    } else if (userChoice === 'rock' && computerChoice === "scissors") {
        win();
        if (counter === 5) {
            rematchWinner();
        }
    } else if (userChoice === 'paper' && computerChoice === "rock") {
        win();
        if (counter === 5) {
            rematchWinner();
        }
    } else if (userChoice === 'scissors' && computerChoice === "paper") {
        win();
        if (counter === 5) {
            rematchWinner();
        }
    }
};

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

// create div's to display results
const body = document.querySelector('body');

const result = document.createElement('div');
result.classList.add('results');
body.appendChild(result);

const runningTotal = document.createElement('div');
runningTotal.classList.add('results');
runningTotal.style.cssText = 'margin-top: 1rem;';
body.appendChild(runningTotal);

// function to remove child nodes

function removelAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
