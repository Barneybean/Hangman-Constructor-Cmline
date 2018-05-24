
// create a constructor for each word thats gonna be letterGuessed
var Letter = function (letter) {
    this.underlyingLetter = letter;
    
    //A boolean value that stores whether that letter has been letterGuessed yet
    this.letterGuessed = false;
    //A function that returns the underlying character if the letter has been letterGuessed, or a placeholder (like an underscore) if the letter has not been letterGuessed
    this.display = function () {
        
        if (this.letterGuessed) {
            return this.underlyingLetter;
        }
        else if (this.underlyingLetter == " ") {
            return " ";
        }
        else {
            return "_";
        }
        
    }
    // compare user input with the word 
    this.checkLetter = function (userInput) {
        if(userInput === this.underlyingLetter) {
            this.letterGuessed = true;
        }
    }   
}

module.exports = Letter;

// var a="word";
// console.log (a.length); // return 4


// var word = new letterCheck("word press");

// word.letterGuessed = true;

// word.display(); // return _ _ _ _   _ _ _ _ _

// var letter = "s";
// word.rebuildShowWord(letter); // retrun _ _ _ _   _ _ _ s s



