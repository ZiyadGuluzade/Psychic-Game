var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = "";

var lettersGuessedText = document.getElementById("letters-guessed-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var winsText = document.getElementById("wins-text");

var computerOutput;

function newGame() {
    guessesLeft = 9;
    lettersGuessed = "";
    computerOutput =computerChoices[Math.floor(Math.random() * computerChoices.length)];
    updateText();

}

document.onkeyup = function(event) {

    lettersGuessed = lettersGuessed + "  " + event.key;

        if (event.key === computerOutput){
            wins++;
            newGame();
        } else {
            guessesLeft --;
            if (guessesLeft === -1) {
                losses ++;
                newGame();
            }
        }
        updateText();
}

function updateText (){
    winsText.textContent = "Wins" + wins;
    lossesText.textContent = "Losses" + losses;
    guessesLeftText.textContent = "Guesses Left" + guessesLeft;
    lettersGuessedText.textContent = "Letters Guessed" + lettersGuessed;
}

newGame();






