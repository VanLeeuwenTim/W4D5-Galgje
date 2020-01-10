const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];
let tries = 0;
let maxTries = 5;

const beginTheGame = function() {
  document.querySelector("input").value = "";
  document.querySelector(".lives span").innerHTML = 5 - 0;
  word = pickRandomWord(wordList).split("");
  triedLetters = [];
  showCorrectlyGuessedLetters(word, triedLetters);
  showIncorrectGuessedLetters(word, triedLetters);
};

const pickRandomWord = function(list) {
  let index = Math.floor(Math.random() * list.length);
  return list[index];
};

const checkIfWordContainsLetter = function(word, letter) {
  return word.includes(letter);
};

const updateTriesDisplay = function(tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

const showCorrectlyGuessedLetters = function(word, inputLetterWords) {
  let display = word.map(function(letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const showIncorrectGuessedLetters = function(word, triedLetters) {
  let wrongLetters = triedLetters.filter(function(letter) {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const guessLetter = function() {
  const newInput = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (triedLetters.includes(newInput) || newInput === "") {
    alert("Deze heb je al geprobeerd");
    return;
  }

  if (!word.includes(newInput)) {
    tries++;
    updateTriesDisplay(tries);
  }

  triedLetters.push(newInput);
  showCorrectlyGuessedLetters(word, triedLetters);
  showIncorrectGuessedLetters(word, triedLetters);

  if (wordGuessed(word, triedLetters)) {
    winTheGame();
  } else if (tries >= maxTries) {
    loseTheGame();
  }
};

const wordGuessed = function(word, triedLetters) {
  let remaining = word.filter(function(letter) {
    return !triedLetters.includes(letter);
  });
  return remaining.length === 0;
};

const winTheGame = function() {
  document.querySelector(".win").style.display = "block";
};

const loseTheGame = function() {
  document.querySelector(".lose").style.display = "block";
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", beginTheGame);
  beginTheGame();
});

module.exports = wordGuessed;
