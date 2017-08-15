// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );


var questionsCounter = 0;
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;

var questions;
var answer;
var correctAnswers;
var images;
var correctGuess = 0;
var incorrectGuess = 0;
var noAnswer = 0;
var timer;

// Start

var count = 30;

 questionArray = [ "What was The Hulk's original color?", "What is Dare Devil's real name?", "Which is not a interation of the Robin character?", "The character Deadpool has a fear or what...?", "What year did the Wonder Women comic debut?"];


//Answers
answerArray = [[ "Green", "Grey", "Blue", "Red"], ["Matt Murdock", "Foggy Nelson", "Scott Summers", "Frank Castle"], ["Tim Drake", "Damien Wayne", "Stephanie Brown","Barbara Gordon"], ["Spiders", "Spider-man", "Cows", "Zombies"], ["1927", "1939", "1941", "1955"]];


correctArray = [1, 0, 3, 2, 0];


$(".start").on("click", function() {
	$(".start").hide("slow");

	questionsCounter = 0
	showText ();
	var start = true;
	
setInterval(clock,1000)

});

function showText () { 
	$(".hourglass").html(count);
	if (questionsCounter < correctArray.length)
	{
	correctAnswers = correctArray[questionsCounter];
	$(".questions").html(questionArray[questionsCounter]); 
	button();
}
}


// Timers
 function clock () {
 			if (count === 0) {
 		clearInterval(clock);}
 		if (count > 0) {
 		count -- ;	
 		}

 
 	console.log("clock")
 	showText();
 }


//Questions





function button () {
$("#button1").html(answerArray[questionsCounter][0]);
$("#button2").html(answerArray[questionsCounter][1]);
$("#button3").html(answerArray[questionsCounter][2]);
$("#button4").html(answerArray[questionsCounter][3]);
}

//Right answer  [1, 0, 3, 2, 0]; , #button2, #button3, #button4


$(function correct1(){
    $("#button1").on('click', function(event){
    	answer = 0;
    	console.log(correctArray[questionsCounter]);
    	console.log(answer);
    	userGuess();
    });
});
$(function correct2(){
    $("#button2").on('click', function(event){
    	answer = 1;
    	console.log(correctArray[questionsCounter]);
    	console.log(answer);
    	userGuess();
    });
});
$(function correct3(){
    $("#button3").on('click', function(event){
    	answer = 2;
    	console.log(correctArray[questionsCounter]);
    	console.log(answer);
    	userGuess();
    });
});
$(function correct4(){
    $("#button4").on('click', function(event){
    	answer = 3;
    	console.log(correctArray[questionsCounter]);
    	console.log(answer);
    	userGuess();
    });
});



function userGuess () {

	if (answer === correctArray[questionsCounter]) {
		correctGuess++;
		$(".solution").show();
		$(".solution").html("Correct! The right answer was " + answerArray[questionsCounter][correctArray[questionsCounter]]);
	} else { console.log("False");
		incorrectGuess++;
		$(".solution").show();
		$(".solution").html("Wrong! The right answer was " + answerArray[questionsCounter][correctArray[questionsCounter]]);
}
		setTimeout (function () {questionsCounter+=1}, 1000 * 5);
		setTimeout (function () {$(".solution").hide();}, 1000 * 5);
		setTimeout (function () {count = 30;}, 1000 * 5);
		showText();
		console.log(questionsCounter);
}


//Images





//Wrong answer

// Win & Lose Count


//Global variables




}); //On document ready closing