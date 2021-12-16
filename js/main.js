const pPoints = document.querySelector('#playerPoints');
const cPoints = document.querySelector('#computerPoints');
const gameResult = document.querySelector('#game');
const playAgain = document.querySelector('#reload');
const result = document.querySelector('#result');
const byPlayer = document.querySelector('#byPlayer');
const byComputer = document.querySelector('#byComputer');
const against = document.querySelector('#against');

function computerPlay() {
  let options = ['ROCK', 'PAPER', 'SCISSORS'];
  return options[Math.floor(Math.random() * options.length)];
}

let playerPoints = 0;
let computerPoints = 0;
pPoints.textContent = `Player points : ${0}`;
cPoints.textContent = `Computer points : ${0}`;

function playRound(playerSelection, computerSelection) {
  result.textContent = '';
  if (playerSelection === computerSelection) {
    gameResult.textContent = 'TIE';
    byPlayer.textContent = `Player selection ${playerSelection}`;
    byComputer.textContent = `Computer selection ${computerSelection}`;
    against.textContent = `${computerSelection} ties ${playerSelection}`;
    gameResult.style.cssText = 'background-color: #898686; color: #4F504F';
  } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    playerPoints++;
    pPoints.textContent = `Player points : ${playerPoints}`;
    byPlayer.textContent = `Player selection ${playerSelection}`;
    byComputer.textContent = `Computer selection ${computerSelection}`;
    gameResult.textContent = 'YOU WON';
    against.textContent = `${playerSelection} beats ${computerSelection}`;
    gameResult.style.cssText = 'background-color: #22CE46; color: #115E21;';
  } else {
    computerPoints++;
    cPoints.textContent = `Computer points : ${computerPoints}`;
    byPlayer.textContent = `Player selection ${playerSelection}`;
    byComputer.textContent = `Computer selection ${computerSelection}`;
    gameResult.textContent = 'YOU LOSE';
    against.textContent = `${computerSelection} beats ${playerSelection}`;
    gameResult.style.cssText = 'background-color: #CE2C22; color: #5E1111;';
  }

  if (playerPoints == 5 || computerPoints == 5) {
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

function checkWinner() {
  if (playerPoints === 5) {
    Swal.fire({
      icon: 'success',
      title: 'Good job!',
      text: 'You beat the machine!',
    });
  }

  if (computerPoints === 5) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'A machine beats you!',
    });
  }
}

const buttons = document.querySelectorAll('.cta');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    checkWinner();
  });
});

function reload() {
  reload = location.reload();
}

playAgain.addEventListener('click', reload);
