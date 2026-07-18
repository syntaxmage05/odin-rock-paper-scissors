function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]

  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function getHumanChoice() {
  const humanChoice = prompt("Please choose between rock, paper or scissors")
  console.log(humanChoice)
}

getHumanChoice()

let humanScore = 0
let computerScore = 0