//Global Variables
var trivia = {
  initialScreen: "",
  correctCounter: 0,
  inCorrectCounter: 0,

}





//Functions

  function startScreen(){
    //Create the start button
    trivia.initialScreen = "<p class='text-center main-button'><a class='btn btn-primary btn-lg' href='#'>Luta!</a></p>";
    //Add Start button to main-area
    $(".main-area").html(trivia.initialScreen);
  }



//Main Process
startScreen();
