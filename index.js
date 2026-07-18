function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]

  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose between rock, paper or scissors")
  if(humanChoice === null){
    return "";
  } else {
    humanChoice = humanChoice.toLowerCase()
  }
  return humanChoice
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    console.log("You tied. Try again!")
  } else if(humanChoice === "rock") {
    if(computerChoice === "scissors") {
      console.log(`You win: ${humanChoice} beats ${computerChoice}`)
      humanScore += 1
      // console.log(`The human score is: ${humanScore} and computer score is ${computerScore}`)
    } else {
      console.log(`You lose: ${computerChoice} beats ${humanChoice}`)
      computerScore += 1
      // console.log(`The human score is: ${humanScore} and computer score is ${computerScore}`)
    }
  } else if(humanChoice === "scissors") {
    if(computerChoice === "paper") {
      console.log(`You win: ${humanChoice} beats ${computerChoice}`)
      humanScore += 1
      // console.log(`The human score is: ${humanScore} and computer score is ${computerScore}`)
    } else {
      console.log(`You lose: ${computerChoice} beats ${humanChoice}`)
      computerScore += 1
      // console.log(`The human score is: ${humanScore} and computer score is ${computerScore}`)
    }
  } else if(humanChoice === "paper") {
    if(computerChoice === "rock") {
      console.log(`You win: ${humanChoice} beats ${computerChoice}`)
      humanScore += 1
      // console.log(`The human score is: ${humanScore} and computer score is ${computerScore}`)
    } else {
      console.log(`You lose: ${computerChoice} beats ${humanChoice}`)
      computerScore += 1
      // console.log(`The human score is: ${humanScore} and computer score is ${computerScore}`)
    }
  }
}

function playGame() {
  const humanSelection = getHumanChoice()
  const computerSelection = getComputerChoice()

  playRound(humanSelection, computerSelection)
}

let round = 1
while(round <= 5) {
  playGame()
  round++
}

console.log("=========FINAL SCORE========\n")

if(humanScore > computerScore) {
  console.log("You win!")
} else if(computerScore > humanScore) {
  console.log("You lose!")
}else {
  console.log("It's a tie!")
}