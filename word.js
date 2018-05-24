var letter = require("./letter.js");

var word = function () {
    this.letterArr = [];
    this.newWord = function (word) {
        var wordArry = word.split("");
        var display = [];
        for (let i = 0; i <wordArry.length; i++) {
            var wordChar = new letter(wordArry[i])
            this.letterArr.push(wordChar);
            wordChar.display(wordArry[i]);
        }
        
        for (let j=0; j<this.letterArr.length; j++) {
            display.push(this.letterArr[0].letter);
        }
        console.log(wordArry);
        console.log(display.join(" "));
    }   
}   

var wordpress = new word("word press");
wordpress.newWord("word press");