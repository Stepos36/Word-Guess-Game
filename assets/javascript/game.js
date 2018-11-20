//Random word gets picked from an existing array 
var words = [   {   wordSign: 'LOST(2004-2010)',
                    wordName: 'LOST',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Dexter(2006-2013',
                    wordName: 'Dexter',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Breaking Bad(2008-2013)',
                    wordName: 'Breaking_bad',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Big bang theory(2007-present)',
                    wordName: 'Big_bang_theory',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Scrubs(2001-2010',
                    wordName: 'Scrubs',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Westworld(2016-present)',
                    wordName: 'Westworld',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Game of thrones(2011-present)',
                    wordName: 'Game_of_thrones',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Sons of anarchy(2008-2014',
                    wordName: 'Sons_of_anarchy',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'Friends(1994-2004)',
                    wordName: 'Friends',
                    wordPicture: '',
                    wordMusic: '',
                },
                {   wordSign: 'American Horror Story(2011-present)',
                    wordName: 'American_Horror_Story',
                    wordPicture: '',
                    wordMusic: '',
                },
            ]
var randNum;
var unknownWord
var chosenWord;
var underScore = [];
var rightWord = [];
var wrongWord = [];
var remainingLetters;
var remainingGuesses;
var objUnderScore = document.getElementsByClassName("underscore")
var objWrongWord = document.getElementsByClassName("wrongletters")
var objGuessesLeft = document.getElementsByClassName("guessesleft")

newGame()


//Pick up the key user pressed
document.addEventListener('keypress', function(event) {
    let keyWord = event.key
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
     }//???
     
     if (underScore.join('') === chosenWord) {
         alert("You won!");
     }
 }) 


//Add the wrong letter to the wrong letter section

function newGame() {
    randNum = Math.floor(Math.random() * words.length);
    unknownWord = words[randNum];
    chosenWord = unknownWord.wordName.toLowerCase();
    remainingGuesses = 6;
    remainingLetters = chosenWord.length;
    function generateUnderscores() {
        for (var i=0; i<chosenWord.length;i++) {
            underScore[i] = "_"
        }
        return underScore;
    }
    generateUnderscores()
   
}
console.log(chosenWord)