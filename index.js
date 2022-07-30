var readlineSync = require("readline-sync");
var chalk = require('chalk');

var userName = readlineSync.question(chalk.yellowBright("What is your name? "));
console.log("");
console.log(chalk.greenBright(`Welcome ` + userName));
console.log("");

var score = 0;

const leaderBoard = [
  {
    name: "Rushi",
    score: 10
  },
  {
    name: "Pratik",
    score: 9
  },
  {
    name: "Pravin",
    score: 9
  }
]

var questions = [
  {
    //1
    question: "What's my name? ",
    correctAnswer: "Rushi"
  },
  //2
  {
    question: "Which is my favourite sport? ",
    correctAnswer: "Football"
  },
  //3
  {
    question: "Which is my favourite food item? ",
    correctAnswer: "Biryani"
  },
  //4
  {
    question: "Which is my favourite color? ",
    correctAnswer: "Black"
  },
  //5
  {
    question: "Which is my dream destination? ",
    correctAnswer: "Barcelona"
  },
  //6
  {
    question: "Which is my favourite Football club? ",
    correctAnswer: "FC Barcelona"
  },
  //7
  {
    question: "Which city I graduated from? ",
    correctAnswer: "Mumbai"
  },
  //8
  {
    question: "Which brand's phone do I use? ",
    correctAnswer: "Realme"
  },
  //9
  {
    question: "Do I play Valorant? ",
    correctAnswer: "Yes"
  },
  //10
  {
    question: "Which is my favorite Valorant agent ? ",
    correctAnswer: "Omen"
  }
]

var score = 0;

function play(question, correctAnswer) {
  var userAnswer = readlineSync.question(chalk.blue(question));

  if (userAnswer === correctAnswer) {
    score = score + 1;
    console.log("")
    console.log(chalk.greenBright("Voila!, Correct"));
    // console.log("")
  } else {
    score = score;
    console.log(chalk.red("uh oh, that's Wrong Answer"));
    console.log("")
  }
  console.log("Your current Score is : " + score)
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.correctAnswer);
    console.log("------------------------------------------------------------------");
    console.log("");
  }
  showFinalScore()
  // playAgain()
}

// function playAgain() {
//   console.log("Would you like to play the game again to beat the leaderboard or you want to only see the leaderboard ?")
//   console.log("")
//   const gameOrSee = readlineSync.question("Type G for game and L for leaderboard: ");
//   gameOptions()
// }

function showFinalScore() {
  if (score >= 9) {
    console.log("")
    console.log(chalk.blueBright("YAY, Your Final Score is : " + score + " you have beaten the leaderboard, take a screenshot and send me! :)"))
    console.log("")
  }
  else if (score > 5 && score < 9) {
    console.log("")
    console.log(chalk.blueBright("YAY, Your Final Score is : " + score + " you know me quite well! :)"))
    console.log("")
  } else {
    console.log("")
    console.log(chalk.blueBright("Your Final Score is : " + score + " :( no problem, we can get to know each other! :)"))
    console.log("")
  }
  viewLeaderBoard()
}

function viewLeaderBoard() {
  console.log("LeaderBoard:")
  console.log("-----------------------------------------------")
  for (var i = 0; i < leaderBoard.length; i++) {
    console.log(`${chalk.green(`Rank ${i + 1}`)}: ${chalk.yellow(leaderBoard[i].name)} - score = ${chalk.yellow(leaderBoard[i].score)}`)
  }
  console.log("-----------------------------------------------")
}


console.log("Would you like to play the game or only see the leaderboard ?")

console.log("")
const gameOrSee = readlineSync.question("Type G for game and L for leaderboard: ");
console.log("-------------------------------------------------------------------")

function gameOptions() {
  if (gameOrSee.toLowerCase() === "g") {
    console.log("")
    game();
    console.log("")
  } else {
    console.log("")
    viewLeaderBoard();
    console.log("")
  }
}
gameOptions()
// viewLeaderBoard();
