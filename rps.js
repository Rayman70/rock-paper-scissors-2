let humanScore = 0;
let computerScore = 0;




function getComputerChoice() {
    let gameIcon;
    let randomChoice = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(randomChoice);
    if (randomChoice === 1) {
        return gameIcon = "Rock";
    } else if (randomChoice === 2) {
        return gameIcon = "Paper";
    } else {
        return gameIcon = "Scissor";
    };
}

console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("Make your choice: ");
    return userChoice;
}

console.log(getHumanChoice());

function playRound(){

}