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
};





//FUNCTIONS
//===========================================
function startScreen(){
  //Create the start button
  trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg' href='#'>Luta!</a></p>";
  //Add Start button to main-area
  $(".main-area").html(trivia.initialScreen);
  }

function win(){


};

function loss(){

};

function timeOutLoss(){


};

function finalScreen(){

};

function resetGame(){


};


//generateHTML() is triggered by the start button, and generates the HTML
function generateHTML(){
  trivia.gameHTML = ""
}



//MAIN PROCESS
//===========================================
startScreen();
