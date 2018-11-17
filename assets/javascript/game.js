//Random word gets picked from an existing array 
var words = ['LOST', 'Dexter', 'Breaking Bad', 'Big bang theory', 'Scrubs', 'Westworld', 'Game of thrones', 'Sons of anarchy', 'Friends']
var randNum = Math.floor(Math.random() * words.length)
var chosenWord = words[randNum]
var underScore = []
var wrongWord = []
console.log(chosenWord)
//Generate a required amound of underscores in the letter row
function generateUnderscores() {
    for (var i=0; i<chosenWord.length;i++) {
        underScore[i] = ("_")
    }
    return underScore;
}
//DOM manipulation
var objUnderScore = document.getElementsByClassName("underscore")
var objWrongWord = document.getElementsByClassName("wrongletters")
//Pick up the key user pressed
document.addEventListener('keypress', function(event) {
   var keyCode = event.keyCode;
   var keyWord = String.fromCharCode(keyCode);
   console.log(keyWord)
//Compare the key user pressed with the word we have
    //if the letter user entered is in the chosenWord
    if (chosenWord.indexOf(keyWord) > -1) {
        //then replace an underscore with the same index with this letter
        underScore[chosenWord.indexOf(keyWord)] = keyWord
        
            
        //Replace the underscore with the right key
            
            objUnderScore[0].innerHTML = underScore.join(' ')
           
        }
        else {
            wrongWord.push(keyWord);
            objWrongWord[0].innerHTML = wrongWord.join(' ');
            
            };
}) 

//Add the wrong letter to the wrong letter section

console.log(generateUnderscores())

