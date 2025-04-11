let computerScore = 0;
let humanScore = 0;
let currentRound = 0;

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
function getHumanChoice(choice1, choice2, choice3) {
  const playerInput = prompt("What's your choice: \nRock, Paper or Scissors?");
  const humanChoice = playerInput.toLowerCase();
  switch (humanChoice) {
    case "rock":
      return choice1;
      break;
    case "paper":
      return choice2;
      break;
    case "scissors":
      return choice3;
      break;
    default:
      return "Invalid option. Please try again.";
  }
}

//Get player and computer choices to play a round
function playRound(computerChoice, humanChoice) {
  if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (computerChoice === humanChoice) {
    computerScore++;
    humanScore++;
    console.log(`You both selected ${humanChoice}. It's a tie!`);
  }
}

//Create a function that plays the entire game (5 rounds)
function playGame() {
  currentRound++;
  console.log(`ROUND: ${currentRound}`);

  const computerChoice = getComputerChoice("rock", "paper", "scissors");
  const humanChoice = getHumanChoice("rock", "paper", "scissors")
  console.log(`Computer Choice: ${computerChoice} \nPlayer Choice: ${humanChoice}\n\n`)
  playRound(computerChoice, humanChoice)

  console.log(`Computer Score: ${computerScore} \nPlayer Score: ${humanScore}\n\n`)
}

playGame()
playGame()
playGame()
playGame()
playGame()

function finalResult () {
    if (computerScore > humanScore) {
        console.log("Loser!!! GAME OVER")
    }
    else if (computerScore < humanScore) {
        console.log("You're the winner! (But just for this time;)")
    }
    else if (computerScore === humanScore) {
        console.log("You both had the same luck today!")
    }
}
finalResult()