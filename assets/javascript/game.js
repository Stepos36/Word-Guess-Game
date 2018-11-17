//Random word gets picked from an existing array 
var words = ['LOST', 'Dexter', 'Breaking Bad', 'Big bang theory', 'Scrubs', 'Westworld', 'Game of thrones', 'Sons of anarchy', 'Friends']
var randNum = Math.floor(Math.random() * words.length)
var chosenWord = words[randNum]
var underScore = []
var rightWord = []
var wrongWord = []
var objUnderScore = document.getElementsByClassName("underscore")
var objWrongWord = document.getElementsByClassName("wrongletters")
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
   var keyCode = event.keyCode;
   var keyWord = String.fromCharCode(keyCode);
   console.log(keyWord)
//Compare the key user pressed with the word we have
    for (var j=0; j<chosenWord.length;j++) {
        if (chosenWord[j] === keyWord) {
        //Add our letter to the right guess array
            
            
        //Replace the underscore with the right key
            underScore[j] = keyWord;
            objUnderScore[0].innerHTML = underScore.join(' ')
           
        }
        else if (chosenWord[j] !== keyWord) {
            function wrongLetter() {
                wrongWord.push(keyWord);
                objWrongWord[0].innerHTML = wrongWord.join(' ')
                console.log(wrongWord)}
        };
        
            
        
    }
    wrongLetter()
}) 

//Add the wrong letter to the wrong letter section

console.log(generateUnderscores())

