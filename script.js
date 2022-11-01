let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';
let gameOutcome = '';
const resultsContainer = document.querySelector('.results-container');
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
	let moves = ['rock', 'paper', 'scissors']
	let randomNumber = Math.floor(Math.random()*3); //generate random number between 0 and 2
	let move = moves[randomNumber];

	return move;
}

function playRound(playerSelection, computerSelection) {

	let roundResult = '';
	
	playerSelection = playerSelection.toLowerCase();
	computerSelection = getComputerChoice();

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
	};

	if (playerScore < 5 && computerScore < 5) {
		resultsContainer.innerText = `
Player Selection: ${playerSelection}.
Computer Selection: ${computerSelection}.	
Round number: ${roundNumber}.
Round result: ${roundResult}.
Player Score: ${playerScore}. Computer Score: ${computerScore}
		`;
		roundNumber ++;
	} else {
		if (playerScore > computerScore) { gameOutcome = 'You Win!' }
		else if (playerScore < computerScore ) { gameOutcome = 'You Lose!' }
		resultsContainer.innerText = `
Game Outcome: ${gameOutcome}.
Total Player Score: ${playerScore}.
Total Computer Score: ${computerScore}
		`;
		buttons.forEach(button => {
			button.style.pointerEvents = 'none';
			button.removeEventListener('click', clickHandler);
		})
	}
	
	return;
}

function clickHandler(e) {
	playerSelection = e.target.innerText;
	playRound(playerSelection, computerSelection);
}

buttons.forEach(button => {
	button.addEventListener('click', clickHandler);
})


