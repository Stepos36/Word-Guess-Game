//Random word gets picked from an existing array 
var words = ['LOST', 'Dexter', 'Breaking Bad', 'Big bang theory', 'Scrubs', 'Westworld', 'Game of thrones', 'Sons of anarchy', 'Friends']
var randNum = Math.floor(Math.random() * words.length)
var chosenWord = words[randNum]
var underScore = []
console.log(chosenWord)
//Generate a required amound of underscores in the letter row
function generateUnderscores() {
    for (var i=0; i<chosenWord.length;i++) {
        underScore.push('_')
    }
    return underScore;
}
document.addEventListener('keypress', function(event) {
   var keyCode = event.keyCode;
   var keyWord = String.fromCharCode(keyCode);
   console.log(keyWord)
}) 
    

console.log(generateUnderscores())

