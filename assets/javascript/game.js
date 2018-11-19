//Random word gets picked from an existing array 
var words = ['LOST', 'Dexter', 'Breaking' + '\n' + 'Bad', 'Big' + '\n' + 'bang' + '\n' + 'theory', 'Scrubs', 'Westworld', 'Game' + '\n' + 'of' + '\n' + 'thrones', 'Sons' + '\n' + 'of' + '\n' + 'anarchy', 'Friends']
var randNum = Math.floor(Math.random() * words.length)
var chosenWord = words[randNum].toLowerCase()
var underScore = []
var rightWord = []
var wrongWord = []
var remainingLetters;
var remainingGuesses = 6;
remainingLetters = chosenWord.length
var objUnderScore = document.getElementsByClassName("underscore")
var objWrongWord = document.getElementsByClassName("wrongletters")
var objGuessesLeft = document.getElementsByClassName("guessesleft")
console.log(chosenWord)
//Generate a required amound of underscores in the letter row
function generateUnderscores() {
    for (var i=0; i<chosenWord.length;i++) {
        underScore[i] = "_"
    }
    return underScore;
}
//Pick up the key user pressed
document.addEventListener('keypress', function(event) {
   var keyWord = event.key
   console.log(keyWord)
//Compare the key user pressed with the word we have
    for (var j=0; j<chosenWord.length;j++) {
        if (chosenWord[j] === keyWord) {
            if (keyWord !== underScore[j]) {
                rightWord.push(keyWord);
                remainingLetters--;
                console.log(remainingLetters)
            }
            //Replace the underscore with the right key
            underScore[j] = keyWord
            objUnderScore[0].innerHTML = underScore.join(' ').toUpperCase();
        }
    }
    //If the same letter is guessed
    if (wrongWord.includes(keyWord)) {
        alert('You already guessed that!')
    }
    else if (underScore.includes(keyWord)) {
    }
    //If entered letter is wrong - it goes to the wrongWord array and we lose an attempt
    else {
        wrongWord.push(keyWord);
        remainingGuesses--;
        objWrongWord[0].innerHTML = wrongWord.join(' ').toUpperCase();
        objGuessesLeft[0].innerHTML = remainingGuesses;
        if (remainingGuesses === 0) {
            alert("You Lost! Try again! The word was: " + chosenWord.toUpperCase());
        }
    }
    if (remainingLetters === 0) {
        alert("You won!");
    }
}) 

//Add the wrong letter to the wrong letter section

console.log(generateUnderscores())

