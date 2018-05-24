var letter = require("./letter.js");

var Word = function (word) {
    //word after guess
    this.runningWord = [];
    // to hold lettes in new word
    this.wordArry = word.split("");
    //to hold new obj for earch letter in new word
    this.letterObjArr = [];
    this.letterInWord = function () {
        
        // loop through arry of and create object of each letter in word
        for (let i = 0; i <this.wordArry.length; i++) {
            var wordChar = new letter(this.wordArry[i])
            this.letterObjArr.push(wordChar);
        };
    };
    this.printWord = function () {
        //print underscore if no match, letter if there is a match
        for (let j=0; j<this.letterObjArr.length; j++) {
           
            this.runningWord.push(this.letterObjArr[j].display());
        }
        console.log(this.runningWord.join(" "));
    };

    this.getLetter = function (input) {
        var number; // to store i when matches
        // compare user input with characters in new word 
        for (let i=0; i<this.letterObjArr.length; i++) {

            this.letterObjArr[i].checkLetter(input);
            this.letterObjArr[i].display();
        }
        this.runningWord=[];
        this.printWord();
    }

}   

var wordpress = new Word("word press");
wordpress.letterInWord();
wordpress.printWord();
wordpress.getLetter("s");
// wordpress.getLetter("r");