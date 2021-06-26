function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  let res = options[Math.floor(Math.random() * options.length)];
  console.log(`By computer: ${res}`);
  return res;
  //   return options[Math.floor(Math.random() * options.length)];
}

function playerPlay() {
  let option = prompt('Type your option', '');
  let res = option.toLowerCase();
  console.log(`By player: ${res}`);
  return res;
  // console.log(res);
  //   return option.toLowerCase();
}

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerPoints++;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerPoints++;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerPoints++;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let res;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection)) + '\n';
    console.log(playerPoints);
    console.log(computerPoints);
  }

  if (playerPoints === computerPoints) {
    return "it's a tie";
  } else if (playerPoints > computerPoints) {
    return 'Player won the game';
  } else {
    return 'Computer won the game';
  }
}

console.log(game());
