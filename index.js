var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

//setup 
var wordToGuess = document.getElementById('word-to-guess');
var incorrectLetters = document.getElementById('incorrect-letters');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var previousWord = document.getElementById('previous-word');
var remainingGuesses = document.getElementById('remaining-guesses');
var guessesLeft = 10;
remainingGuesses.innerHTML = guessesLeft;


//pick random word from list
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//underscores for current word
var correctLetters = [];
for (let i = 0; i < word.length; i++) {
  correctLetters[i] = "_";
}
wordToGuess.innerHTML = correctLetters.join("");

document.body.onkeyup = function(e) {
  var letter = e.key.toLowerCase();

  if (word.indexOf(letter) == -1) {
    incorrectLetters.innerHTML += letter;
    guessesLeft --;
    remainingGuesses.innerHTML = guessesLeft;
  } else {
    for (var i = 0; i < word.length; i++){
      if(word[i] == letter) {
        correctLetters[i] = letter;
      }
    }
    wordToGuess.innerHTML = correctLetters.join("");
  }

  if (guessesLeft == 0) {
    newGame();
    losses.innerHTML ++;
  }
  if (correctLetters.join("") == word) {
    newGame()
    wins.innerHTML ++;
  }
}

function newGame() {
  previousWord.innerHTML = word;
  word = words[Math.floor(Math.random() * words.length)];
  guessesLeft = 10;
  remainingGuesses.innerHTML = guessesLeft;
  incorrectLetters.innerHTML = "";
  correctLetters.length = 0;  
  for (var i = 0; i < word.length; i++){
    correctLetters[i] = "_"
  }
  wordToGuess.innerHTML = correctLetters.join("")
}