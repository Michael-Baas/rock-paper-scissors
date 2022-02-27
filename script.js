/* 
Assignment
    1. Start a new Git repo for your project. ✅
    2. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there. ✅
    3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step! ✅
    4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" ✅
        a. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). ✅
    
    5. Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results
        function playRound(playerSelection, computerSelection) {
        // your code here!
        }
        const playerSelection = "rock";
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    6. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. ✅
        a. You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
        b. At this point you should be using console.log() to display the results of each round and the winner at the end.
        c. Use prompt() to get input from the user. Read the docs here if you need to.
        d. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
        e. Feel free to create more “helper” functions if you think it would be useful.

Written by Michael Baas, Feb 8, 2022
*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.innerText.toLowerCase(), computerPlay())
    })
})


// Computer Play Function - randomly returns the computers "hand", either rock, paper, or scissors 
function computerPlay() {
    // Set RPS variables
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    // Determine computer hand based on random number
    let hand = Math.random();  
    // Return computer "hand" as RPS 
    if (hand <= .33) {
        return rock
    }
    else if (hand > .33 && hand <= .66) {
        return paper
    }
    else if (hand > .66 && hand < 1) { // Dont need hand <= 1 because Math.random() only generates between 0 and up to but not including 1
        return scissors
    }
    else {
        window.alert('Error')
    } 
}

// Player Play Function () - takes users input, case insensitively and returns the players "hand" to be "thrown"
function playerPlay(userInput){
    // Collect user input
    // userInput = window.prompt("Rock, Paper, or Scissors?");
    // Format user input to lowercase for comparison use in playRound()
    // userInput.toLowerCase();
    // Return player "hand"
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
        return userInput
    }
    // Return error message if RPS string isn't entered
    else {
        return window.alert("Please enter either Rock, Paper, or Scissors.")
    }
}

// Proper Capitalization Function - formats arguments first letter to be capital and the rest to be lowercase. 
function formatSelection(string) {
    let firstLetter = string.slice(0,1).toUpperCase();
    let restLetters = string.slice(1).toLowerCase();
    return firstLetter + restLetters
}

// Play Round Function (playerSelection, computerSelection) -  determine winner based on player and computer selection, return a message declaring a winner and winning "hand" ex. "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    // Set winning logic
    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerSelection = formatSelection(playerSelection);
        computerSelection = formatSelection(computerSelection);
        window.alert(`You Win! ${playerSelection} beats ${computerSelection}!`);
        return "winner"
    }
    // Set tie logic
    else if (playerSelection == computerSelection) {
        playerSelection = formatSelection(playerSelection);
        computerSelection = formatSelection(computerSelection);
        window.alert(`It's a Tie! ${playerSelection} and ${computerSelection} equal out!`);
        return "tie"
    }
    // Set losing logic
    else {
        playerSelection = formatSelection(playerSelection);
        computerSelection = formatSelection(computerSelection);
        window.alert(`You Lose! ${computerSelection} beats ${playerSelection}!`)
        return "loser"
    }
}

// Game Function - play best out of 5 rounds and display the winner and their score
// function playGame(){
//     // Set scoring variables 
//     let computerScore = 0;
//     let playerScore = 0;
//     let tie = 0;
//     let result = '';
//     // Loop through 5 iterations of the game
//     for (let i = 0; i < 5; i++) {
//         let computerSelection = computerPlay();
//         let playerSelection = playerPlay();
//         result = playRound(computerSelection, playerSelection);
//         // Add scores up from loop
//         if (result == "winner") {
//             playerScore++;
//         }
//         else if (result == "loser") {
//             computerScore++;
//         }
//         else if (result == "tie") {
//             tie++;
//         }
//     }
//     // Logic to declare winner of all 5 games and display winner
//     if (playerScore > computerScore){
//         window.alert(`You win! You beat the computer ${playerScore} times!`)
//     }
//     else if (computerScore > playerScore){
//         window.alert(`You lose! The computer beat you ${computerScore} times!`)
//     }
//     else if (playerScore == computerScore){
//         window.alert(`It's a tie! You and the computer won ${playerScore} times and there was ${tie} tie.`)
//     }
//     else {
//         window.alert("Error, there should be a winner with 5 rounds.")
//     }
// }

// playGame();
