//Get computer choice function
function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice < 0.33) {
    return "rock";
  } else if (computerChoice < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// //Get player choice function
// function getHumanChoice() {
//   const humanChoice = prompt("What's your choice: \nRock, Paper or Scissors?")
//     .toLowerCase()
//     .trim();
//   if (
//     humanChoice === "rock" ||
//     humanChoice === "paper" ||
//     humanChoice === "scissors"
//   ) {
//     return humanChoice;
//   } else {
//     alert("Invalid choice! Please type rock, paper, or scissors.");
//     return getHumanChoice();
//   }
// }

//Get player and computer choices to play a round
function playRound(computerChoice, humanChoice) {
  //Add a reference of the div
  const div = document.querySelector("div")
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    div.textContent = `You win! ${humanChoice} beats ${computerChoice}. (Score: You ${humanScore} - ${computerScore} Computer)`;
  } else if (computerChoice === humanChoice) {
    computerScore++;
    humanScore++;
    div.textContent = `You both selected ${humanChoice}. It's a tie!. (Score: You ${humanScore} - ${computerScore} Computer)`;
  } else {
    computerScore++;
    div.textContent = `You lose! ${computerChoice} beats ${humanChoice}. (Score: You ${humanScore} - ${computerScore} Computer)`;
  }
}


const buttons = document.querySelectorAll(".input-btn")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userInput = button.textContent
    const computerChoice = getComputerChoice();
    playRound(computerChoice, userInput)
  })
})




//Create a function that plays the entire game (5 rounds)
let computerScore = 0;
let humanScore = 0;
// let currentRound = 0;

// function playGame() {
//   //Increment and log the Round number
//   currentRound++;
//   console.log(`ROUND: ${currentRound}`);

//   //Log the user and computer choices in the round
//   const computerChoice = getComputerChoice();
//   const humanChoice = getHumanChoice();
//   console.log(
//     `Computer Choice: ${computerChoice} \nPlayer Choice: ${humanChoice}\n\n`
//   );

//   //Log the round winner and increment the winner score
//   playRound(computerChoice, humanChoice);

//   //Log the computer and player scores up to the current round
//   console.log(
//     `Computer Score: ${computerScore} \nPlayer Score: ${humanScore}\n\n`
//   );
// }

// playGame();
// playGame();
// playGame();
// playGame();
// playGame();

// //Final result function
// function finalResult() {
//   if (computerScore > humanScore) {
//     console.log("Loser!!! GAME OVER");
//   } else if (computerScore < humanScore) {
//     console.log("You're the winner! (But just for this time;)");
//   } else if (computerScore === humanScore) {
//     console.log("You both had the same luck today!");
//   }
// }
// finalResult();
