function getComputerChoice() {
	let moves = ['rock', 'paper', 'scissors']
	let randomNumber = Math.floor(Math.random()*3); //generate random number between 0 and 2
	let move = moves[randomNumber];

	return move;
}

function playRound(roundNumber, playerSelection, computerSelection) {
	let roundResult = '';

	playerSelection = playerSelection.toLowerCase();

	//resolve round winner
	if (playerSelection === 'rock') {
		if (computerSelection === 'rock') {
			roundResult = `It's a Draw! Rock matches Rock`;
		}
		else if (computerSelection === 'paper') { 
			roundResult = `You Lose! Paper beats Rock`;
			computerScore ++;
		}
		else if (computerSelection === 'scissors') { 
			roundResult = `You Win! Rock beats Scissors`;
			playerScore ++;
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'paper') {
			roundResult = `It's a Draw! Paper matches Paper`;
		}
		else if (computerSelection === 'scissors') {
			roundResult = `You Lose! Scissors beats Paper`;
			computerScore ++;
		}
		else if (computerSelection === 'rock') {
			roundResult = `You Win! Paper beats Rock`;
			playerScore ++;
		}
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'scissors') {
			roundResult = `It's a Draw! Scissors matches Scissors`;
		}
		else if (computerSelection === 'rock') {
			roundResult = `You Lose! Rock beats Scissors`;
			computerScore ++;
		}
		else if (computerSelection === 'paper') {
			roundResult = `You Win! Scissors beats Paper`;
			playerScore ++;
		}
	}

	console.log(`
Player Selection: ${playerSelection}.
Computer Selection: ${computerSelection}.	
Round number: ${roundNumber}.
Round result: ${roundResult}.
Player Score: ${playerScore}. Computer Score: ${computerScore}
	`);
	
	return;
}

function game() {
	let playerSelection = '';
	let computerSelection = '';
	let gameOutcome = '';

	//play 5 rounds of game
	for (let i = 0; i < 5; i++) {
		let roundNumber = i + 1;
		playerSelection = prompt(`Please enter 'Rock', 'Paper' or 'Scissors'`);
		computerSelection = getComputerChoice();
		playRound(roundNumber, playerSelection, computerSelection);
	}

	// report winner or loser
	if (playerScore > computerScore) { gameOutcome = 'You Win!' }
	else if (playerScore < computerScore ) { gameOutcome = 'You Lose!' }
	else { gameOutcome = `It's a Draw!`}

	console.log(`Game Outcome: ${gameOutcome} Total Player Score: ${playerScore}. Total Computer Score: ${computerScore}`);
}

let playerScore = 0;
let computerScore = 0;
game();

