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

 $("#button5").hide();
 $("#button1, #button2, #button3, #button4").hide();

var count = 10;

 questionArray = [ "What was The Hulk's original color?", "What is Dare Devil's real name?", "Which is not a interation of the Robin character?", "The character Deadpool has a fear or what...?", "What year did the Wonder Women comic debut?"];


//Answers
answerArray = [[ "Green", "Grey", "Blue", "Red"], ["Matt Murdock", "Foggy Nelson", "Scott Summers", "Frank Castle"], ["Tim Drake", "Damien Wayne", "Stephanie Brown","Barbara Gordon"], ["Spiders", "Spider-man", "Cows", "Zombies"], ["1927", "1939", "1941", "1955"]];


correctArray = [1, 0, 3, 2, 0];


$(".start").on("click", function() {
	$(".start").hide("slow");

	questionsCounter = 0
	showText ();
	var start = true;
	timer = setInterval( function(){clock()},1000);
	$("#button1, #button2, #button3, #button4").show();
	

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
	$("#button1, #button2, #button3, #button4").hide();
	$(".hourglass").hide();
	if (answer === correctArray[questionsCounter]) {
		correctGuess++;
		$(".solution").show();
		$(".solution").html("Correct! The right answer was " + answerArray[questionsCounter][correctArray[questionsCounter]]);
	} 
	else { console.log("False");
		incorrectGuess++;
		$(".solution").show();
		$(".solution").html("Wrong! The right answer was " + answerArray[questionsCounter][correctArray[questionsCounter]]);
	}
	if (questionsCounter === correctArray.length-1){
		gameOver();
	
}
		setTimeout (function () {questionsCounter+=1}, 1000 * 3);
		if (questionsCounter < questionArray.length-1){
		setTimeout (function () {$("#button1, #button2, #button3, #button4").show();}, 1000 * 3);
		setTimeout (function ()  {$(".solution").hide();}, 1000 * 2);
		setTimeout (function () {$(".hourglass").show();}, 1000 * 3);}
		setTimeout (function () {count = 10;}, 1000 * 2);
		showText();
		console.log(questionsCounter);
}

// Timers
 function clock () {
 		if (count === 0 ) {	
 		answer != correctArray[questionsCounter];
		userGuess();
		(count = 10);		
} 
 		if (count > 0) {
 		count -- ;
 		}
 	console.log("clock")
 	showText ();
 } 

 while (correctArray === correctArray.length) {
 	$(".hourglass").html(count);
 	console.log("stop hourglass")
 	clearInterval(timer);
 } 

 function gameOver() {
 		clearInterval(timer);
 		$("#button1, #button2, #button3, #button4").hide();
 		$(".hourglass").hide();
 		$(".stats").html("Correct Anwsers: " + correctGuess + " <br> Wrong Anwsers: " + incorrectGuess);
 		$("#button5").show();
 		console.log("game over");
 		console.log(correctGuess +"correct");
 		console.log(incorrectGuess + "wrong");
 		if (correctGuess >= 5) {$(".win").html("You're a true hero!");}
 		 if (correctGuess >= 3){$(".win").html("You're a hero in training!");} 
 		 else { $(".win").html("Stand Aside, Citizen!");}
 }


	$("#button5").on('click', function(event){
	questionsCounter = 0;
	correctAnswers = 0;
	incorrectGuess = 0;
	$(".stats, .win").hide();
	$(".solution").hide();
	$(".hourglass").show();
	showText();
 	$("#button1, #button2, #button3, #button4").show();
 	count = 10;
 	timer = setInterval( function(){clock()},1000);
 	clock ();
 	$("#button5").hide();
});
 










}); //On document ready closing