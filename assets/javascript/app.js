//GLOBAL VARIABLES
//===========================================
var trivia = {
  initialScreen: "",
  correctCounter: 0,
  inCorrectCounter: 0,
  unAnsweredCounter: 0,
  clickSound: new Audio("./assets/sounds/button-click.wav"),
  gameHTML: "",
  questionsArray: [
                  "In what year did the first IBJJF World Jiu-Jitsu Championships take place?", "What is the Abu Dhabi Combat Championship?", "In which country did Brazilian Jiu-Jitsu originate?", "Mata Leon refers to:", "In an IBJJF tournment, passing the guard gets you:"],
  answerArray: [
                ["1991", "1993", "1996", "1998"], ["An MMA event", "A submission grappling event that happens every year", "A submission grappling event that happens every two years", "A Brazilian Jiu-Jitsu event that only takes place in Abu Dhabi"], ["Canada", "Switzerland", "Thailand", "Japan"], ["A foot tickle", "Rear Naked Choke", "There is a lion on the mat", "Someone is wearing shoes on the mat"], ["2 Points", "3 Points", "An instant win", "Dinner after the fight"],],
  correctAnswers: [
                  "C. 1996", "C. A submission grappling event that happens every two years", "D. Japan", "B. Rear Naked Choke", "B. 3 Points"],
  imageArray: [
              "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>", "<img class='center-block img-right' src=''>"],
  clock: "",
  questionCounter: 0,
  timeCounter: 20,
};


//FUNCTIONS
//===========================================
function startScreen(){
  //Create the start button
  trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Luta!</a></p>";
  //Add Start button to main-area
  $(".main-area").html(trivia.initialScreen);
};

function timer(){
  trivia.clock = setInterval(twentySeconds, 1000);
  function twentySeconds(){
    if(trivia.timeCounter === 0){
      timeOutLoss();
      clearInterval(trivia.clock);
    }
    if(trivia.timeCounter > 0) {
      trivia.timeCounter --;
    }
    $(".timer").html(trivia.timeCounter);
  }
};

function wait(){
  if(trivia.questionCounter < 4) {
    trivia.questionCounter ++;
    generateHTML();
    trivia.timeCounter = 20;
    timer();
  }
  else {
    finalScreen();
  }
};

function win(){
  trivia.correctCounter ++;
  trivia.gameHTML = "<p class='text-center'> Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + trivia.correctAnswers[trivia.questionCounter] + "</p>" + "<img class='center-block' src='./assets/images/img.jpg'>";
  $(".main-area").html(trivia.gameHTML);
  setTimeout(wait, 3000);
};

function loss(){
  trivia.inCorrectCounter ++;
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ trivia.correctAnswers[trivia.questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".main-area").html(trivia.gameHTML);
	setTimeout(wait, 3000);
};

function timeOutLoss(){
  trivia.unAnsweredCounter ++;
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + trivia.correctAnswers[trivia.questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".main-area").html(trivia.gameHTML);
	setTimeout(wait, 3000);
};

function finalScreen(){
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + trivia.timeCounter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + trivia.correctCounter + "</p>" + "<p>Wrong Answers: " + trivia.inCorrectCounter + "</p>" + "<p>Unanswered: " + trivia.unAnsweredCounter + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".main-area").html(trivia.gameHTML);
};

function resetGame(){
  trivia.questionCounter = 0;
  trivia.correctCounter = 0;
  trivia.inCorrectCounter = 0;
  trivia.unAnsweredCounter = 0;
  trivia.timeCounter = 20;
  generateHTML();
  timer();
};

function generateHTML(){
  trivia.gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + trivia.questionsArray[trivia.questionCounter] + "</p><p class='first-answer answer'>A. " + trivia.answerArray[trivia.questionCounter][0] + "</p><p class='answer'>B. "+trivia.answerArray[trivia.questionCounter][1]+"</p><p class='answer'>C. "+trivia.answerArray[trivia.questionCounter][2]+"</p><p class='answer'>D. "+trivia.answerArray[trivia.questionCounter][3]+"</p>";
  $(".main-area").html(trivia.gameHTML);
}


//MAIN PROCESS
//===========================================
startScreen();

//start-button click
$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	// trivia.clickSound.play();
	generateHTML();

	timer();
}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	// trivia.clickSound.play();
  //If correct answer
  selectedAnswer = $(this).text();
	if(selectedAnswer === trivia.correctAnswers[trivia.questionCounter]) {

		clearInterval(trivia.clock);
		win();
	}
  //If incorrect ansewr
	else {

		clearInterval(trivia.clock);
		loss();
	}
}); // Close .answer click

//reset-button click
$("body").on("click", ".reset-button", function(event){
	// clickSound.play();
	resetGame();
}); // Closes reset-button click
