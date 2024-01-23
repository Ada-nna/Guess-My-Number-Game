'use strict';
const message = document.querySelector('.message');
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
let questionMark = document.querySelector(".number");
let updatedScore = document.querySelector(".score");
let body = document.querySelector("body");
const updatedhighScore = document.querySelector(".highscore");
const againBtn = document.querySelector('.again');

let score = 20;
let highscore = 0



// checkBtn.addEventListener("click", function () {

//     // console.log(typeof guess.value);
//     // const numberConversion = Number(guess.value);
//     // console.log(typeof numberConversion);

//     // whatever a user enters from the user interface is usually a string

//     // message.innerHTML = "🥳 Correct Number"
// })

let secretNumber = Math.trunc((Math.random() * 20) + 1);
questionMark.innerHTML = secretNumber;

checkBtn.addEventListener("click", function () {

    // when there's no input
    if (!guess.value) {
        message.innerHTML = "no value entered"
    }

    // when the player wins
    else if(Number(guess.value) === secretNumber){
        // we've just converted string to a number
        message.innerHTML = "you\'re correct 👍"

        body.style.backgroundColor = "#60b347";

        questionMark.style.width = "30rem"

        if (score > highscore) {
            highscore = score;
            updatedhighScore.innerHTML = highscore; 
        }
 
    }

    // when the guess is too high
    else if (Number(guess.value) > secretNumber) {
        if (score > 1) {
            message.innerHTML = "too high! 🙆‍♀️"
            score--;
            updatedScore.innerHTML = score  /*this reduces the score by 1 */
            
        }
        else{
            message.innerHTML = "Game Over!😁"
            updatedScore.innerHTML = 0;
        }
    }

    // when guess is too low
    else if (Number(guess.value) < secretNumber){
        message.innerHTML = "too low 😢";
        score--;
        updatedScore.innerHTML = score  /*this reduces the score by 1 */
    }
});

//reset event handler
againBtn.addEventListener ('click', () => {
    
    // reset score 
    score = 20;

    // reset secret number
    secretNumber = Math.floor(Math.random() * 20) + 1;

    //reset message,score and number to initial values
    message.innerHTML = 'Start guessing...';
    updatedScore.innerHTML = score;
    questionMark.innerHTML = "?";
    guess.value = "";
    body.style.backgroundColor = "#222";
    questionMark.style.width = "15rem";

})