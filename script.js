let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  // rock paper scissor  it randomly generate 1 things..
  const option = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);
  return option[randIndex]; // it can return choice option random value
};
// create draw function

const drawGame = () => {
  // console.log("Game  was Draw");
  msg.innerText ="Draw Game !";
  msg.style.background= "black";
};
// create a showWin function
const showWin = (userWin,Userchoice,compChoice) => {
  if (userWin) {
   userScore++;
    userScorePara.innerText =userScore;

    msg.innerText =`YOU WIN ! Your ${Userchoice} beats ${compChoice}`;
    msg.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText =compScore;
    msg.innerText =`YOU LOSE ! Your ${compChoice} beats  ${Userchoice}`;
    msg.style.background = "red";
  }
};

//make a function that can answer me who can win the game
const playGame = (Userchoice) => {
  // console.log("choices was clicked  id=", Userchoice);
  // Generate computer choice -> this is also a modular programming
  const compChoice = genCompChoice(); //calling function

  // console.log("comp choice", compChoice);
  if ((Userchoice === compChoice)) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (Userchoice === "rock") {
      // comp => rock,scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (Userchoice === "paper") {
      //comp -> rock ,scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // comp=> rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWin( userWin,Userchoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id");
    playGame(Userchoice); // calling a function
  });
});
