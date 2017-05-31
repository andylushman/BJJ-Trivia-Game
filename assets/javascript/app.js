//GLOBAL VARIABLES
//===========================================
var trivia = {
  initialScreen: "",
  correctCounter: 0,
  inCorrectCounter: 0,
  unAnsweredCounter: 0,
  clickSound: new Audio("./assets/sounds/button-click.wav"),
  gameHTML: "",
  questionsArray: ["Question 1", "questions 2", "Question 3", "question 4", "question 5"],
  answerArray: [
                ["option 1", "option 2", "option 3"], ["option 1", "option 2", "option 3"], ["option 1", "option 2", "option 3"], ["option 1", "option 2", "option 3"], ["option 1", "option 2", "option 3"],],
  correctAnswers: ["option 1", "option 3", "option 1", "option 2", "option 1"],
  imageArray: [],
  clock: "",
  questionCounter: 0,
  timeCounter: 10,
};





//FUNCTIONS
//===========================================
function startScreen(){
  //Create the start button
  trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg' href='#'>Luta!</a></p>";
  //Add Start button to main-area
  $(".main-area").html(trivia.initialScreen);
};

function timer(){
  trivia.clock = setInterval(tenSeconds, 1000);
  function tenSeconds(){
    if(timeCounter === 0){
      clearInterval(trivia.clock);
    }
    if(trivia.timeCounter > 0) {
      trivia.timeCounter --;
    }
    $(".timer").html(trivia.timeCounter);
  }
};

function wait(){
  if(questionCounter < 6) {
    questionCounter ++;
    generateHTML();
    timeCounter = 10;
    timer();
  }
  else {
    finalScreen();
  }
};

function win(){
  trivia.correctCounter ++;
  trivia.gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers + "</p>" + "<img class='center-block' src='./assets/images/img.jpg'>";
  setTimeOut(wait, 3000);
};

function loss(){
  trivia.inCorrectCounter ++;
  trivia.gameHTML = "";
};

function timeOutLoss(){
  trivia.unAnsweredCounter ++;
  trivia.gameHTML = "";
};

function finalScreen(){

};

function resetGame(){
  trivia.questionCounter = 0;
  trivia.correctCounter = 0;
  trivia.inCorrectCounter = 0;
  trivia.unAnsweredCounter = 0;
  trivia.timeCounter = 10;
  generateHTML();
  timer();
};


function generateHTML(){
  trivia.gameHTML = ""
}



//MAIN PROCESS
//===========================================
startScreen();
