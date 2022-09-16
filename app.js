//Switch to determine what can be pressed
let isGameOn = 0;
let scoreToWin = 0;
//The text that displays a player's score, in a span
const plOneScoreText = document.querySelector("#player1score");
const plTwoScoreText = document.querySelector("#player2score");
const scoreBoard = document.querySelector("#scoreBoard");
//The submission form
const input = document.querySelector("#scoreForm");
//The three buttons that advance the game state
const plOneBtn = document.querySelector("#btnOne");
const plTwoBtn = document.querySelector("#btnTwo");
const resetBtn = document.querySelector("#btnReset");
//The number input to determine the winner
const toWin = document.querySelector("#win");
//Reset button code
resetBtn.addEventListener("click", function () {
  plOneScoreText.innerHTML = 0;
  plTwoScoreText.innerHTML = 0;
  isGameOn = 0;
  scoreToWin = 0;
  plOneScoreText.style.color = "";
  plTwoScoreText.style.color = "";
  scoreBoard.innerText = `Score to Win: `;
  buttonColor("off");
});
//Form Controls
input.addEventListener("submit", function (e) {
  //prevent buttons from resetting page
  e.preventDefault();
  //takes the number and updates scoreToWin to start game
  if (scoreToWin === 0) {
    scoreToWin = toWin.value;
    scoreBoard.innerText = `Score to Win: ${scoreToWin}`;
    console.log(typeof scoreToWin);
    isGameOn = 1;
    buttonColor("on");
  }
});
//function to increment the score
function addToScore(player) {
  if (isGameOn !== 0 && scoreToWin !== 0 && player.style.color === "") {
    player.innerHTML = parseInt(player.innerHTML) + 1;
    if (parseInt(player.innerHTML) === parseInt(scoreToWin)) {
      selectWinner();
    }
  }
}
//function for button color changing
function buttonColor(state) {
  if (state === "on") {
    plOneBtn.style.backgroundColor = "lightgreen";
    plTwoBtn.style.backgroundColor = "lightblue";
  } else {
    plOneBtn.style.backgroundColor = "grey";
    plTwoBtn.style.backgroundColor = "grey";
  }
}
//winner function
function selectWinner() {
  if (parseInt(plOneScoreText.innerHTML) === parseInt(scoreToWin)) {
    plOneScoreText.style.color = "green";
    plTwoScoreText.style.color = "red";
  } else {
    plOneScoreText.style.color = "red";
    plTwoScoreText.style.color = "green";
  }
  buttonColor("off");
}
//Controls for player 1 and player 2 button
plOneBtn.addEventListener("click", function () {
  addToScore(plOneScoreText);
});
plTwoBtn.addEventListener("click", function () {
  addToScore(plTwoScoreText);
});
