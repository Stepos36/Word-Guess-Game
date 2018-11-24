//An array of objects with necessary properties 
var words = [   {   wordSign: 'LOST(2004-2010)',
                    wordName: 'LOST',
                    wordPicture: 'assets/images/lost.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Dexter(2006-2013)',
                    wordName: 'Dexter',
                    wordPicture: 'assets/images/dexter.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Breaking Bad(2008-2013)',
                    wordName: 'Breaking_bad',
                    wordPicture: 'assets/images/bb.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Big bang theory(2007-present)',
                    wordName: 'Big_bang_theory',
                    wordPicture: 'assets/images/bbt.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Scrubs(2001-2010)',
                    wordName: 'Scrubs',
                    wordPicture: 'assets/images/scrubs.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Westworld(2016-present)',
                    wordName: 'Westworld',
                    wordPicture: 'assets/images/ww.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Game of thrones(2011-present)',
                    wordName: 'Game_of_thrones',
                    wordPicture: 'assets/images/got.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Sons of anarchy(2008-2014)',
                    wordName: 'Sons_of_anarchy',
                    wordPicture: 'assets/images/soa.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Friends(1994-2004)',
                    wordName: 'Friends',
                    wordPicture: 'assets/images/friends.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'American Horror Story(2011-present)',
                    wordName: 'American_Horror_Story',
                    wordPicture: 'assets/images/ahs.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'The Walking Dead(2010-present)',
                    wordName: 'The_Walking_Dead',
                    wordPicture: 'assets/images/twd.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'House of cards(2013-2018)',
                    wordName: 'House_of_cards',
                    wordPicture: 'assets/images/hoc.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Supernatural(2005-present)',
                    wordName: 'Supernarural',
                    wordPicture: 'assets/images/sn.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Stranger Things(2016-present)',
                    wordName: 'Stranger_things',
                    wordPicture: 'assets/images/st.jpg',
                    wordMusic: '',
                },
            ]            
var standbyPic ='assets/images/standby.jpg'
var losePic = 'assets/images/lose.jpg'

var loseSign = 'You lost! Press RESTART to start again' 
var winSign = 'You won! Press NEXT WORD to continue'

var randNum;
var unknownWord;
var chosenWord;
var underScore = [];
var rightWord = [];
var wrongWord = [];
var remainingLetters;
var remainingGuesses;

//DOM variables that refer JavaScript to html objects via class names
var objUnderScore = document.getElementsByClassName("underscore");
var objWrongWord = document.getElementsByClassName("wrongletters");
var objGuessesLeft = document.getElementsByClassName("guessesleft");
var objWins = document.getElementsByClassName("wins");
var objImage = document.getElementsByClassName("show-image-1")
var objNext = document.getElementsByClassName("nextword")
var objSign = document.getElementsByClassName("sign-show-name")

var wins = 0;

newGame();

//Pick up the key user pressed
document.addEventListener('keypress', function(event) {
    var keyLetter = event.key;
    var keyWord = keyLetter.toLowerCase()
    console.log(keyWord)
 //Compare the key user pressed with the word we have
    for (var j=0; j<chosenWord.length;j++) {
        if (chosenWord[j] === keyWord) {
            if (keyWord !== underScore[j]) {
                rightWord.push(keyWord);
                remainingLetters--;
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
    //If the same right letter is guessed do nothing
    else if (underScore.includes(keyWord)) {
    }
    //If entered letter is wrong - it goes to the wrongWord array and we lose an attempt. Stats update, 'You lose' picture appears and 
    //the 'Restart' button appears
    else {
       wrongWord.push(keyWord);
       remainingGuesses--;
       objWrongWord[0].innerHTML = wrongWord.join(' ').toUpperCase();
       objGuessesLeft[0].innerHTML = remainingGuesses;
       if (remainingGuesses === 0) {
            alert("You Lost! Try again! The word was: " + chosenWord.toUpperCase());
            image(losePic)
            sign(loseSign)
            objNext[0].innerHTML = ('Restart') 
            wins = 0
            objWins[0].innerHTML = wins
            objNext[0].addEventListener("click", function nextLevelLose() {
                newGame()
                image(standbyPic)
                sign('')
                objUnderScore[0].innerHTML = underScore.join(' ');
                objGuessesLeft[0].innerHTML = remainingGuesses;
                objWrongWord[0].innerHTML = ('none');
                objNext[0].innerHTML = ('');
    })
    }
    };
    //If all letters of the right word are correctly guessed, tv show picture appears, stats update and 'Next Word' button appear
    if (underScore.join('') === chosenWord) {
       alert("You won!");
       wins++;
       objWins[0].innerHTML = wins; 
       image(unknownWord.wordPicture);
       sign(unknownWord.wordSign +'<br/>'+ winSign);
       objNext[0].innerHTML = ('Next word!'); 
       objNext[0].addEventListener("click", function nextLevelWin() {
            newGame();
            image(standbyPic);
            sign('')
            objUnderScore[0].innerHTML = underScore.join(' ');
            objGuessesLeft[0].innerHTML = remainingGuesses;
            objWrongWord[0].innerHTML = ('none');
            objNext[0].innerHTML = ('');
    })
    }
 }) 
function newGame() {
    randNum = Math.floor(Math.random() * words.length);
    unknownWord = words[randNum];
    chosenWord = unknownWord.wordName.toLowerCase();
    console.log(chosenWord)
    remainingGuesses = 8;
    remainingLetters = chosenWord.length;
    underScore = [];
    rightWord = [];
    wrongWord = [];
    function generateUnderscores() {
        for (var i=0; i<chosenWord.length;i++) {
            underScore[i] = "_"
        }
        return underScore;
    }
    generateUnderscores()
}
function image(picPath) {
    objImage[0].src = picPath;
}
function sign(signPath) {
    objSign[0].innerHTML = signPath;
}
