//Rock Paper Scissors Game
const choices = ['rock', 'paper', 'scissors'];
const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');
const playerscorevalue = document.getElementById('playerscorevalue');
const computerscorevalue = document.getElementById('computerscorevalue');

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if(playerchoice === computerchoice) {
        result = "It's a Tie!";
    }
    else {
        switch(playerchoice) {
            case 'rock':
                result = (computerchoice === 'scissors') ? "You Win!" : "You Lose!";
                break;
            case 'paper':
                result = (computerchoice === 'rock') ? "You Win!" : "You Lose!";
                break;
            case 'scissors':
                result = (computerchoice === 'paper') ? "You Win!" : "You Lose!";
                break;
        }
    }
    
    // Update displays
    playerdisplay.textContent = `Player Choice: ${playerchoice}`;
    computerdisplay.textContent = `Computer Choice: ${computerchoice}`;
    resultdisplay.textContent = result;
    
    // Remove previous classes
    resultdisplay.classList.remove("greentext", "redtext");
    
    // Add appropriate class and update scores
    switch(result) {
        case "You Win!":
            resultdisplay.classList.add("greentext");
            playerScore++;
            playerscorevalue.textContent = playerScore;
            break;
        case "You Lose!":
            resultdisplay.classList.add("redtext");
            computerScore++;
            computerscorevalue.textContent = computerScore;
            break;
    }
}