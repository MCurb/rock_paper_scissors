//Get computer choice function
function getComputerChoice(choice1, choice2, choice3) {
  const computerChoice = Math.random();
  if (computerChoice < 0.33) {
    return choice1;
  } else if (computerChoice < 0.66) {
    return choice2;
  } else {
    return choice3;
  }
}

//Get player choice function
function getHumanChoice() {
  const humanChoice = prompt("What's your choice: \nRock, Paper or Scissors?")
    .toLowerCase()
    .trim();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    alert("Invalid choice! Please type rock, paper, or scissors.");
    return getHumanChoice();
  }
}

//Get player and computer choices to play a round
function playRound(computerChoice, humanChoice) {
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (computerChoice === humanChoice) {
    computerScore++;
    humanScore++;
    console.log(`You both selected ${humanChoice}. It's a tie!`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

//Create a function that plays the entire game (5 rounds)
let computerScore = 0;
let humanScore = 0;
let currentRound = 0;

function playGame() {
  currentRound++;
  console.log(`ROUND: ${currentRound}`);

  const computerChoice = getComputerChoice("rock", "paper", "scissors");
  const humanChoice = getHumanChoice("rock", "paper", "scissors");
  console.log(
    `Computer Choice: ${computerChoice} \nPlayer Choice: ${humanChoice}\n\n`
  );
  playRound(computerChoice, humanChoice);

  console.log(
    `Computer Score: ${computerScore} \nPlayer Score: ${humanScore}\n\n`
  );
}

playGame();
playGame();
playGame();
playGame();
playGame();

//Final result function
function finalResult() {
  if (computerScore > humanScore) {
    console.log("Loser!!! GAME OVER");
  } else if (computerScore < humanScore) {
    console.log("You're the winner! (But just for this time;)");
  } else if (computerScore === humanScore) {
    console.log("You both had the same luck today!");
  }
}
finalResult();
