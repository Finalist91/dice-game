// putting the Names of Player1 and Player2 into 2 Variables
var player1Name = document.getElementById("Player1").textContent;
var player2Name = document.getElementById("Player2").textContent;

// declaring the variables for all the result element HTML items
// and coverting the string into INT at the same time to be able to increment the value
var player1Wins = parseInt(document.getElementById("wins1").innerHTML, 10);
var numberOfDraws = parseInt(document.getElementById("draws").innerHTML, 10);
var player2Wins = parseInt(document.getElementById("wins2").innerHTML, 10);
var numberOfRolls = parseInt(
  document.getElementById("no-of-rolls").innerHTML,
  10
);

function playerName() {
  // getting the Names of Player1 and Player2 into 2 input fields
  var player1 = document.getElementById("input-player1").value;
  var player2 = document.getElementById("input-player2").value;

  // putting the Names of Player1 and Player2 into the #Player1 and #Player2 HTML items

  if (player1 === "") {
    document.getElementById("player1-wins").textContent = "Player 1 Wins:";
    document.getElementById("Player1").textContent = "Player 1";
  } else {
    document.getElementById("player1-wins").textContent = player1 + " Wins:";
    document.getElementById("Player1").textContent = player1;
  }

  if (player2 === "") {
    document.getElementById("player2-wins").textContent = "Player 2 Wins:";
    document.getElementById("Player2").textContent = "Player 2";
  } else {
    document.getElementById("player2-wins").textContent = player1 + " Wins:";
    document.getElementById("Player2").textContent = player2;
  }

  // clearing the input fields
  document.getElementById("input-player1").value = "";
  document.getElementById("input-player2").value = "";
}

function rollDice() {
  // generating random Numbers (dice roll values 1-6) into 2 Variables
  var value1 = Math.floor(Math.random() * 6) + 1;
  var value2 = Math.floor(Math.random() * 6) + 1;

  // choosing the right images acc. to generated values
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + value1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + value2 + ".png");

  // reeding out Player1 and Player2 Names
  var player1Name = document.getElementById("Player1").textContent;
  var player2Name = document.getElementById("Player2").textContent;

  // Conditioning the change of the HTML title according to the values of dice roll
  // and incrementing the right result values according to the roll
  if (value1 > value2) {
    if (player1Name === "") {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else {
      document.querySelector("h1").innerHTML = player1Name + " Wins!";
    }
    player1Wins += 1;
    document.getElementById("wins1").textContent = player1Wins;
  } else if (value2 > value1) {
    if (player2Name === "") {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
      document.querySelector("h1").innerHTML = player2Name + " Wins!";
    }
    player2Wins += 1;
    document.getElementById("wins2").textContent = player2Wins;
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
    numberOfDraws += 1;
    document.getElementById("draws").textContent = numberOfDraws;
  }

  // Calculate the total number of rolls (games played) for each player
  numberOfRolls = player1Wins + numberOfDraws + player2Wins;
  document.getElementById("no-of-rolls").textContent = numberOfRolls;
}

function resetResults() {
  player1Wins = 0;
  document.getElementById("wins1").textContent = player1Wins;
  numberOfDraws = 0;
  document.getElementById("draws").textContent = numberOfDraws;
  player2Wins = 0;
  document.getElementById("wins2").textContent = player2Wins;
  numberOfRolls = 0;
  document.getElementById("no-of-rolls").textContent = numberOfRolls;
}

// calling the rollDice function by pressing btn "Roll"
document.querySelector(".btn").addEventListener("click", rollDice);

// calling the playerName function by pressing btn2 "Accept"
document.querySelector(".btn2").addEventListener("click", playerName);

// calling the resetResults function by pressing btn3 "Reset"
document.querySelector(".btn3").addEventListener("click", resetResults);
