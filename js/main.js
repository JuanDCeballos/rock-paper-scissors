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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let res;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    // // playRound(playerSelection, computerSelection) + '\n';
    console.log(playRound(playerSelection, computerSelection)) + '\n';
  }
  return playRound;
}

// const playerSelection = playerPlay();
// const computerSelection = computerPlay();

// console.log(playRound(playerSelection, computerSelection));
// console.log(game());
game();
// console.log(playerPlay());
