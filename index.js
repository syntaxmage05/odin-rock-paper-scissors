function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]

  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

// function getHumanChoice() {
//   let humanChoice = prompt("Please choose between rock, paper or scissors")
//   if(humanChoice === null){
//     return "";
//   } else {
//     humanChoice = humanChoice.toLowerCase()
//   }
//   return humanChoice
// }

const results = document.querySelector(".results")
const scores = document.querySelector(".scores")

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    results.innerText = "You tied. Try again!"
    scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`
  } else if(humanChoice === "rock") {
    if(computerChoice === "scissors") {
      results.innerText = `You win: ${humanChoice} beats ${computerChoice}`
      humanScore += 1
      scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`
    } else {
      results.innerText = `You lose: ${computerChoice} beats ${humanChoice}`
      computerScore += 1
      scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`
    }
  } else if(humanChoice === "scissors") {
    if(computerChoice === "paper") {
      results.innerText = `You win: ${humanChoice} beats ${computerChoice}`
      humanScore += 1
      scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`
    } else {
      results.innerText = `You lose: ${computerChoice} beats ${humanChoice}`
      computerScore += 1
      scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`
    }
  } else if(humanChoice === "paper") {
    if(computerChoice === "rock") {
      results.innerText = `You win: ${humanChoice} beats ${computerChoice}`
      humanScore += 1
      scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`
    } else {
      results.innerText = `You lose: ${computerChoice} beats ${humanChoice}`
      computerScore += 1
      scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`
    }
  }
}

let gameOver = false

function playGame(humanChoice) {
  if (gameOver) return;
  // const humanSelection = getHumanChoice()
  const computerSelection = getComputerChoice()

  playRound(humanChoice, computerSelection)
  checkWinner()
}

const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")

scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`


btnRock.addEventListener("click", () => {
  playGame("rock")
})

btnPaper.addEventListener("click", () => {
  playGame("paper")
})

btnScissors.addEventListener("click", () => {
  playGame("scissors")
})

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", resetGame)

function checkWinner() {
  if(humanScore === 5 || computerScore === 5) {
    gameOver = true

    if(humanScore > computerScore) {
      results.innerText = "You won the game! Click 'Play Again to restart'"
    } else {
      results.innerText = "Computer won the game! Click 'Play Again' to restart"
    }
    resetBtn.classList.remove("hidden")
  }
}


function resetGame() {
  humanScore = 0;
  computerScore = 0
  gameOver = false

  results.innerText = "Choose Rock, Paper or Scissors!"
  scores.innerText = `You: ${humanScore} / Computer: ${computerScore}`

  resetBtn.classList.add("hidden")
}