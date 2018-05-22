// to use inquirer and fs npm
var inquirer = require("inquirer");
var fs = require("fs");
var word = require("./word.js");

var showWord = "";
// create a constructor for each word thats gonna be guessed
function hangman(word) {
    this.word = word, 
    //A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.display = function () {
        if (!this.guessed) {
            for (var i=0; i<word.length; i++) {
                if (this.word.charAt(i) == " ") {
                    showWord += "   ";
                }
                else {
                    showWord += "_ ";
                }
                
                //if guess == letter then push letter otherwise push "-"
            }
            console.log(showWord);
        }
    }
}
// var a="word";
// console.log (a.length); // return 4

var word = new hangman("word press");

word.display();