const input = document.querySelector('#guessField');
const button = document.querySelector('#submit');
const displayResult = document.querySelector('#display-result');
const previous = document.querySelector('#previous');
const remain = document.querySelector('#remain');
const resultBox = document.querySelector('#result-box');

const previousGuesses = [];
let remainGuess = 10;
let playGame = true;

if(playGame){
    button.addEventListener('click', (e) => {
        e.preventDefault();
    
        const getValue = parseInt(input.value);
        const randomNumber = Math.round(Math.random()*100 + 1);

        const isvalidNumber = validation(getValue);

        if(isvalidNumber){
            if(getValue == randomNumber){
                displayResult.innerHTML = 'Congratulation! You win the game.';
            }else{
                displayResult.innerHTML = `Oops! Try again. Random number is :: ${randomNumber}`;
            }
        }
        
        if(isvalidNumber){
            pushInputValue(getValue);
            previous.innerHTML = `Previous Guess :: ${previousGuesses}`;
        }

        if(isvalidNumber){
            remainGuess = (remainGuess - 1);
            remain.innerHTML = `Remain Chance :: ${remainGuess}`;
            if(remainGuess == 0){
                alert('Game Over');
                endGame();
            }
        }

    })
}

const validation = (getValue) => {
    if(isNaN(getValue)){
        alert('Please enter a valid number');
        return false;
    }else if(getValue < 1 || getValue > 100){
        alert('Please enter a number between 1 to 100');
        return false;
    }else{
        return true;
    }
}

const pushInputValue = (inputValue) => {
    previousGuesses.push(inputValue);
}

const endGame = () => {
    input.value = "";
    input.setAttribute('disabled', '');
    playGame = false;   
    startGame();
}

const startGame = () => {
    const start = document.createElement('p');
    start.textContent = 'Start Game';
    resultBox.appendChild(start);
    start.setAttribute('id', 'newGame');

    const run = document.querySelector('#newGame');
    run.addEventListener('click', () => {
        window.location.reload();
    })
}