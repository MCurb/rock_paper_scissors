//Global variable counters
let computerScore = 0;
let humanScore = 0;
let roundCounter = 0;

//Elements reference
const divRound = document.querySelector(".round-winner");
const round = document.querySelector(".round-counter");
const computerCounter = document.querySelector(".computer-counter");
const humanCounter = document.querySelector(".human-counter");

//Get computer choice function
const getComputerChoice = (array) =>
  array[Math.floor(Math.random() * array.length)];
const choices = ["Rock", "Paper", "Scissors"];

//Get player and computer choices to play a round
function playRound(computerChoice, humanChoice) {
  //Play the game as long as both scores are less than 5
  if (computerScore < 5 && humanScore < 5) {
    if (
      (computerChoice === "Rock" && humanChoice === "Paper") ||
      (computerChoice === "Paper" && humanChoice === "Scissors") ||
      (computerChoice === "Scissors" && humanChoice === "Rock")
    ) {
      humanScore++;
      divRound.style.color = "rgb(65, 200, 38)";
      divRound.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (computerChoice === humanChoice) {
      computerScore++;
      humanScore++;
      divRound.style.color = "rgb(255, 255, 255)";
      divRound.textContent = `You both selected ${humanChoice}. It's a tie!.`;
    } else {
      computerScore++;
      divRound.style.color = "rgb(230, 7, 7)";
      divRound.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    roundCounter++;
  }

  //Display the round and score counters
  round.textContent = `Round: ${roundCounter}`;
  computerCounter.textContent = `${computerScore}`;
  humanCounter.textContent = `${humanScore}`;

  //Display final result 1 second after one of the scores reaches 5
  if (computerScore === 5 || humanScore === 5) {
    setTimeout(() => {
      //Change text color depending on result
      if (computerScore > humanScore) {
        divRound.style.color = "rgb(230, 7, 7)";
      } else if (computerScore < humanScore) {
        divRound.style.color = "rgb(65, 200, 38)";
      } else {
        divRound.style.color = "rgb(255, 255, 255)";
      }
      divRound.textContent = finalResult();
      restartGame();
    }, 1000);
  }
}

const containerDiv = document.querySelector(".container");
const h1 = document.querySelector("h1");
const restartBtn = document.createElement("button");

//When the game ends it calls this function:
function restartGame() {
  containerDiv.insertBefore(restartBtn, h1);
  restartBtn.textContent = "restart";
  restartBtn.style.alignSelf = "flex-end"

  restartBtn.addEventListener("click", () => {
    //when clicked restart all counters and remove text content
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    divRound.textContent = "";
    //display all counters again
    round.textContent = `Round: ${roundCounter}`;
    computerCounter.textContent = `${computerScore}`;
    humanCounter.textContent = `${humanScore}`;
  
    restartBtn.remove();
  });
}

//Event listener that calls playRound every time a button is clicked
const buttons = document.querySelectorAll(".input-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userInput = button.dataset.choice;
    const computerChoice = getComputerChoice(choices);
    playRound(computerChoice, userInput);
  });
});

//Final result function that gets called at the end of the game
function finalResult() {
  if (computerScore > humanScore) {
    return "Loser!!! GAME OVER";
  } else if (computerScore < humanScore) {
    return "You win — but only this time!";
  } else if (computerScore === humanScore) {
    return "You both had the same luck today!";
  }
}
