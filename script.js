let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("user-score");
const computerScore_div = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result__text");
const tl_div = document.getElementById("tl");
const tr_div = document.getElementById("tr");
const br_div = document.getElementById("br");
const bl_div = document.getElementById("bl");
const cc_div = document.getElementById("cc");

function getComputerChoice() {
    const choices = ['tl', 'tr', 'br', 'bl', 'cc'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(corner) {
    if (corner === "tl") return "top left corner";
    if (corner === "tr") return "top right corner";
    if (corner === "br") return "bottom right corner";
    if (corner === "bl") return "bottom left corner";
    if (corner === "cc") return "center";
} 

function win(userChoice, computerChoice) { 
    userScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = `It's a GOAL!!! You shot in ${convertToWord(userChoice)} against ${convertToWord(computerChoice)} goalkeeper move.`;
    document.getElementById(userChoice).classList.add('goal__green-glow');
    setTimeout (function() { document.getElementById(userChoice).classList.remove('goal__green-glow') }, 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = `It's saved!!! You shot in ${convertToWord(userChoice)} against ${convertToWord(computerChoice)} goalkeeper move.`;
    document.getElementById(userChoice).classList.add('goal__red-glow');
    setTimeout (function() { document.getElementById(userChoice).classList.remove('goal__red-glow') }, 500);
}

function game(userChoice) {
     const computerChoice = getComputerChoice();
         if (userChoice != computerChoice) {
             win(userChoice, computerChoice);
        } else if (userChoice == computerChoice) {
             lose(userChoice, computerChoice);
        }
     }

function main() {
    tl_div.addEventListener('click', function() {
        game("tl");
    })

    tr_div.addEventListener('click', function() {
        game("tr");
    })

    br_div.addEventListener('click', function() {
        game("br");
    })

    bl_div.addEventListener('click', function() {
        game("bl");
    })

    cc_div.addEventListener('click', function() {
        game("cc");
    })

}

main();



