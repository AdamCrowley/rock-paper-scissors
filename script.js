function getComputerChoice() {

	//create array of 3 choices
	let moves = ['rock', 'paper', 'scissors']
	let move = '';

	//generate random number between 0 and 2
	let randomNumber = Math.floor(Math.random()*3);

	//use random number to select move from array
	move = moves[randomNumber];

	//return move as string
	return move;

}

function playRound(roundNumber, playerSelection, computerSelection) {

	console.log(`Player Selection: ${playerSelection}. Computer Selection: ${computerSelection}.`);

	//convert playerSelection string to all lowercase
	playerSelection = playerSelection.toLowerCase();
	//create round result variable
	let roundResult = '';

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

	//log to console the round result
	console.log(`Round number: ${roundNumber}. Round result: ${roundResult}. Player Score: ${playerScore}. Computer Score: ${computerScore}`);
	
	return;

}

function game() {
	let playerSelection = '';
	let computerSelection = '';
	let gameOutcome = '';
	//play 5 rounds of game
	for (let i = 0; i < 5; i++) {
		//create roundNumber variable
		let roundNumber = i + 1;
		//prompt player to receive input
		playerSelection = prompt(`Please enter 'Rock', 'Paper' or 'Scissors'`);
		//get computer selection
		computerSelection = getComputerChoice();
		//play a round
		playRound(roundNumber, playerSelection, computerSelection);
	}

	// reports winner or loser 
	if (playerScore > computerScore) { gameOutcome = 'You Win!' }
	else if (playerScore < computerScore ) { gameOutcome = 'You Lose!' }
	else { gameOutcome = `It's a Draw!`}

	//log game outcome to console
	console.log(`Game Outcome: ${gameOutcome} Total Player Score: ${playerScore}. Total Computer Score: ${computerScore}`);
}

let playerScore = 0;
let computerScore = 0;
game();

