let computerScore = 0;
let humanScore = 0;
let roundCounter = 1;

const divRound = document.querySelector(".round-winner");
const divCompScore = document.querySelector(".computer-score");
const divHumScore = document.querySelector(".human-score");
const divGameResult = document.querySelector(".game-result")
const round = document.querySelector(".round-counter")
const computerCounter = document.querySelector(".computer-counter")
const humanCounter = document.querySelector(".human-counter")

//Get computer choice function
const getComputerChoice = (array) => array[Math.floor(Math.random() * array.length)]
const choices = ["rock", "paper", "scissors"]
const computerChoice = getComputerChoice(choices)


//Get player and computer choices to play a round
function playRound(computerChoice, humanChoice) {
  round.textContent = `Round: ${roundCounter}`
  computerCounter.textContent = `${computerScore}`
  humanCounter.textContent = `${humanScore}`
  if (computerScore < 5 && humanScore < 5) {
    if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "rock")
    ) {
      humanScore++;
      roundCounter++;
      divRound.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (computerChoice === humanChoice) {
      roundCounter++
      computerScore++;
      humanScore++;
      divRound.textContent = `You both selected ${humanChoice}. It's a tie!.`;
    } else {
      roundCounter++;
      computerScore++;
      divRound.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  } else if (computerScore === 5 || humanScore === 5) {
    divRound.textContent = finalResult();
  }
  divRound.setAttribute("style", "color: white")
}

const buttons = document.querySelectorAll(".input-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (computerScore < 6 && humanScore < 6) {
      const userInput = button.textContent;
      const computerChoice = getComputerChoice(choices);
      playRound(computerChoice, userInput);
    } 
  });
});

function finalResult() {
  if (computerScore > humanScore) {
    return "Loser!!! GAME OVER";
  } else if (computerScore < humanScore) {
    return "You're the winner! (But just for this time;)";
  } else if (computerScore === humanScore) {
    return "You both had the same luck today!";
  }
}