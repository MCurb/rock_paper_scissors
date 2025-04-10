// Write a function that randomly returns "rock", "paper" or "scissors"

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(option1, option2, option3) {
  let computerChoice = Math.random();
  if (computerChoice < 0.33) {
    return option1;
  } else if (computerChoice < 0.66) {
    return option2;
  } else {
    return option3;
  }
}

function getHumanChoice(choice1, choice2, choice3) {
  switch (humanChoice) {
    case "rock":
      return choice1;
      break;
    case "paper":
      return choice2;
      break;
    case "scissors":
      return choice3;
  }
}
const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";
const humanChoice = prompt("rock, paper or scissors?");

function playRound(humanSelection, computerSelection) {
  let paper = "Paper beats Rock"
  let rock = "Rock beats Scissors"
  let scissors = "Scissors beat Paper"
  if (computerSelection === "paper" && humanSelection === "rock") {
    console.log("Computer:", computerSelection);
    console.log("Human:", humanSelection);
    console.log(`You lose! ${paper}`);
    computerScore++
  } else if (computerSelection === "rock" && humanSelection === "paper") {
    console.log("Computer:", computerSelection);
    console.log("Human:", humanSelection);
    console.log(`You win! ${paper}`);
    humanScore++
  } else if (computerSelection === "scissors" && humanSelection === "rock") {
    console.log("Computer:", computerSelection);
    console.log("Human:", humanSelection);
    console.log(`You win! ${rock}`);
    humanScore++
  } else if (computerSelection === "rock" && humanSelection === "scissors") {
    console.log("Computer:", computerSelection);
    console.log("Human:", humanSelection);
    console.log(`You lose! ${rock}`);
    computerScore++
  } else if (computerSelection === "paper" && humanSelection === "scissors") {
    console.log("Computer:", computerSelection);
    console.log("Human:", humanSelection);
    console.log(`You win! ${scissors}`);
    humanScore++
  } else if (computerSelection === "scissors" && humanSelection === "paper") {
    console.log("Computer:", computerSelection);
    console.log("Human:", humanSelection);
    console.log(`You lose! ${scissors}`);
    computerScore++
  } else if (computerSelection === humanSelection) {
    console.log("Computer:", computerSelection);
    console.log("Human:", humanSelection);
    console.log(`You both selected ${humanSelection}, it's a tie`);
  }
}
const humanSelection = humanChoice.toLowerCase();
const computerSelection = getComputerChoice("rock", "paper", "scissors");

function playGame(round, score){
  return console.log(`Round 1: \n${round} \n${score}`);
  
}
let round = playRound(humanSelection, computerSelection);
let score = `Human Score: ${humanScore} \nComputer Score: ${computerScore}`

playGame(round, score);
