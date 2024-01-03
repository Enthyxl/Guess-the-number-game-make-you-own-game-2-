// script.js
let secretNumber, attempts, maxAttempts;

function startNewGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    maxAttempts = 10;
    displayMessage(`Try to guess the number between 1 and 100. You have ${maxAttempts} attempts.`);
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    attempts++;

    if (userGuess == secretNumber) {
        displayMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        disableInputAndButton();
    } else if (attempts === maxAttempts) {
        displayMessage(`Sorry, you've run out of attempts. The correct number was ${secretNumber}.`);
        disableInputAndButton();
    } else {
        const hint = userGuess < secretNumber ? 'Too low!' : 'Too high!';
        displayMessage(`${hint} Try again. Attempts left: ${maxAttempts - attempts}`);
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
}

function disableInputAndButton() {
    document.getElementById('userGuess').disabled = true;
    document.getElementsByTagName('button')[0].disabled = true;
}

function resetGame() {
    document.getElementById('userGuess').disabled = false;
    document.getElementsByTagName('button')[0].disabled = false;
    startNewGame();
    displayMessage(`New game started. Try to guess the number between 1 and 100. You have ${maxAttempts} attempts.`);
}

// Initial game setup
startNewGame();
