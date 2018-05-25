//require constructor in word.js to work
var word = require("./word.js");
var inquirer = require("inquirer");
//to set game numbers equal to number of words in the array
var round = 0;
// limit guesses to be 15
var guessCount = 15;
var guessRight = 0;
var guessWrong = 0;

//add word for questions 
var wordList = ["mountain", "chameleon"];
//to create a arry that hold on the word obj to be gueseed
var wordObjList = [];

for(let i = 0; i < wordList.length; i++) {
    //create new word obj
    wordObjList.push(new word(wordList[i]));
    //call for word obj and diassemble char in word
    wordObjList[i].letterInWord();
}
// console.log(wordObjList);

var askQuestion = function () {
    var currentRound = round+1;
    var letterGuessed = [];
    if (guessCount >0) {
        // console.log(wordObjList[round]),
        // to print underscore of letter
        wordObjList[round].printWord();
        //get user inputs and check letter
        inquirer.prompt ([
            {
                type: "input",
                name: "userGuess",
                message: "Round " + currentRound+ "; " +guessCount + " guess left; Guess a letter: " + "\n",
                validate: function validateGuess(userGuess) {
                    if (userGuess.length>1) {
                        console.log('\nEnter 1 letter only\n');
                        return;
                    } else if (!userGuess.match(/^[a-zA-Z]*$/)) {
                        console.log("\nThat's not a letter! try again...\n");
                        return
                    } else {
                        return true;
                    }
                }
            }
        ]).then(function(guess){
            //to prevent gussing same number
            if (letterGuessed.indexOf(guess.userGuess) === -1) {
                
                letterGuessed.push(guess.userGuess);
                // console.log(guessCount + " guess left");
                //guess chance -1
                guessCount--;
                
                //if there is word not guessed then continue game
                if (round <= wordList.length-1) {
                    wordObjList[round].getLetter(String(guess.userGuess));
                }
                //end of all rounds
                else {
                    console.log("Game Over; You guessed: " + guessRight + " correctly and " +guessWrong + " wrong.\n")
                    inquirer.prompt([
                        {
                            type: "list",
                            name: "restart",
                            message: "restart game?",
                            choices: ["Yes","No"]
                        }
                    ]).then(function (answer) {
                        if (answer.choices == "Yes") {
                            restartGame();
                        } else{
                            console.log("To End Game, Exit Terminal ..");
                        }
                    })
                    return;
                };
                // guess the whole word before chances run out, guess right ++
        
                if (guessCount >= 0 && wordObjList[round].runningWord.join("") === wordObjList[round].wordArry.join("")) {
                    console.log("***good job, next word\n");
                    guessRight++;
                    round++;
                    guessCount = 15;
                }
                // fail to guess the whole word before chances run out, guess wrong ++
                else if(guessCount === 0 && wordObjList[round].runningWord.join("") !== wordObjList[round].wordArry.join("")) {
                    console.log("***you lose, next word\n");
                    guessWrong++;
                    round++;
                    guessCount = 15
                }
            
                //recursion####### to allow next guess
                askQuestion();
            
            } else {
                console.log("Letter already guessed, try another one..");
            }

            
        });
    };
};
askQuestion();

function restartGame () {
    //reset all values;
    console.log("coming soon");
};