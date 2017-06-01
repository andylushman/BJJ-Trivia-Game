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
                ["option 1", "option 2", "option 3", "option 4"], ["option 1", "option 2", "option 3", "option 4"], ["option 1", "option 2", "option 3", "option 4"], ["option 1", "option 2", "option 3", "option 4"], ["option 1", "option 2", "option 3", "option 4"],],
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
  trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button' href='#'>Luta!</a></p>";
  //Add Start button to main-area
  $(".main-area").html(trivia.initialScreen);
};

function timer(){
  trivia.clock = setInterval(tenSeconds, 1000);
  function tenSeconds(){
    if(trivia.timeCounter === 0){
      clearInterval(trivia.clock);
    }
    if(trivia.timeCounter > 0) {
      trivia.timeCounter --;
    }
    $(".timer").html(trivia.timeCounter);
  }
};

function wait(){
  if(trivia.questionCounter < 6) {
    trivia.questionCounter ++;
    generateHTML();
    trivia.timeCounter = 10;
    timer();
  }
  else {
    finalScreen();
  }
};

function win(){
  trivia.correctCounter ++;
  trivia.gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + trivia.correctAnswers + "</p>" + "<img class='center-block' src='./assets/images/img.jpg'>";
  setTimeOut(wait, 3000);
};

function loss(){
  trivia.inCorrectCounter ++;
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ trivia.correctAnswers[trivia.questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(trivia.gameHTML);
	setTimeout(wait, 3000);
};

function timeOutLoss(){
  trivia.unAnsweredCounter ++;
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + trivia.correctAnswers[trivia.questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(trivia.gameHTML);
	setTimeout(wait, 3000);
};

function finalScreen(){
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + trivia.correctCounter + "</p>" + "<p>Wrong Answers: " + trivia.inCorrectCounter + "</p>" + "<p>Unanswered: " + trivia.unAnsweredCounter + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".mainArea").html(trivia.gameHTML);

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
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + trivia.questionsArray[trivia.questionCounter] + "</p><p class='first-answer answer'>A. " + trivia.answerArray[trivia.questionCounter][0] + "</p><p class='answer'>B. "+trivia.answerArray[trivia.questionCounter][1]+"</p><p class='answer'>C. "+trivia.answerArray[trivia.questionCounter][2]+"</p><p class='answer'>D. "+trivia.answerArray[trivia.questionCounter][3]+"</p>";
  $(".main-area").html(trivia.gameHTML);
}



//MAIN PROCESS
//===========================================
startScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();  // added line to test issue on GitHub Viewer
	trivia.clickSound.play();
	generateHTML();

	timer();
}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	trivia.clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === trivia.correctAnswers[trivai.questionCounter]) {
		//alert("correct");

		clearInterval(trivia.clock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(trivia.clock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
}); // Closes reset-button click
