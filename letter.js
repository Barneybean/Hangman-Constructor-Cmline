
// create a constructor for each word thats gonna be letterGuessed
var letter = function (letter) {
    this.letter = letter;
    //A boolean value that stores whether that letter has been letterGuessed yet
    this.letterGuessed = false;
    //A function that returns the underlying character if the letter has been letterGuessed, or a placeholder (like an underscore) if the letter has not been letterGuessed
    this.display = function (letter) {
        
        if (this.letterGuessed) {
            console.log(this.letter);
            this.letterGuessed = true;
        }
        else if (letter == " ") {
            this.letter = "Y";
        }
        else {
            this.letter = "_";
        }
        
    }
    // compare user input with the word 
    this.checkletter = function (userInput) {
        if(userInput === this.letter) {
            this.letterGuessed = true;
        }
    }   
}

module.exports = letter;

// var a="word";
// console.log (a.length); // return 4


// var word = new letterCheck("word press");

// word.letterGuessed = true;

// word.display(); // return _ _ _ _   _ _ _ _ _

// var letter = "s";
// word.rebuildShowWord(letter); // retrun _ _ _ _   _ _ _ s s



