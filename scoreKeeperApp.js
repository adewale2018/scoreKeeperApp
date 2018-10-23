var playerOneButton = document.querySelector('#p1btn');
var playerTwoButton = document.querySelector('#p2btn');
var resetButton = document.querySelector('#reset');
var playerOneDisplay = document.querySelector('#playerOneDisplay');
var playerTwoDisplay = document.querySelector('#playerTwoDisplay');
var numberInput = document.querySelector("input[type = 'number']");
var winningScoreDisplay = document.querySelector('p span');
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 5;

playerOneButton.addEventListener('click', function(){
	if(!gameOver){
		playerOneScore++;
		if(playerOneScore === winningScore){
			playerOneDisplay.classList.add('winner')
			gameOver = true;
		}
		playerOneDisplay.textContent = playerOneScore;

	}
	



});

playerTwoButton.addEventListener('click', function(){
	if(!gameOver){
		playerTwoScore++;
		if(playerTwoScore === winningScore){
			playerTwoDisplay.classList.add('winner')
			gameOver = true;
		}
		playerTwoDisplay.textContent = playerTwoScore;
	}
	
});

resetButton.addEventListener('click', function(){
	reset();
});

function reset(){
	playerOneScore =0;
	playerTwoScore = 0;
	playerOneDisplay.textContent = playerOneScore;
	playerTwoDisplay.textContent = playerTwoScore;
	playerOneDisplay.classList.remove('winner');
	playerTwoDisplay.classList.remove('winner');
	gameOver = false;
}
numberInput.addEventListener('change', function(){
winningScoreDisplay.textContent = this.value
winningScore = Number(this.value);
reset();
});