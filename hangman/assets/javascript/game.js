

//Create a Word Bank
var wordBank = ["tantrum", "crayon", "pullups"];
//Creat a Wins counter
var wins = 0;
//Choose a current word to play the game
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//Create a placeholder to display the length of the word
var wordHolder = [];
for (i=0; i < currentWord.length; i++) {
    wordHolder = wordHolder + "_";
};

console.log(currentWord);
console.log(wordHolder); 
document.getElementById("word-holder").textContent = wordHolder;
//works up to here so far

document.onkeyup = function() {
    //Create a variable to hold the key pressed
    var userGuess = event.key;

    for (i=0; i < currentWord.length; i++) {
        if(userGuess===currentWord[i]) {
            wordHolder[i] = currentWord[i];

            // wordHolder[i] = userGuess;
        //runs until userGuess=currentWord[i] but does not set
        //wordHolder[i] = userGuess; 

        // wordHolder.splice(i,1,userGuess); alternate method?
        debugger;
        document.getElementById("word-holder").textContent = wordHolder;
        }//This bugger isn't working right 
    }

}