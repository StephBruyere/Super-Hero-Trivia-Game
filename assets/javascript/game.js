// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );



// Start

var count = 30;

$(".start").on("click", function() {
	$(".start").hide("slow");
	showText ();
	var start = true;
	setInterval(clock,1000)
;
});

var questionsCounter = 0;

function showText () { 
	$(".hourglass").html(count);
	console.log("showtext")
	var questionsCounter = 1
	$(".questions").html(questionArray[questionsCounter]); 
	$(".anwsers").html(anwserArray[questionsCounter]); 
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

$("#solution").on(click)

//Questions


 questionArray = [ "What was The Hulk's original color?", "What is Dare Devil's real name?", "Which is not a interation of the Robin character?", "The character Deadpool has a fear or what...?", "What year did the Wonder Women comic debut?"];


//Anwsers
anwserArray = [[ "Green", "Grey", "Blue", "Red"], ["Matt Murdock", "Foggy Nelson", "Scott Summers", "Frank Castle"], ["Tim Drake", "Damien Wayne", "Stephanie Brown", "Jason Todd", "Barbara Gordon"], ["Spiders", "Spider-man", "Cows", "Zombies"], ["1927", "1939", "1941", "1955"]];

//Right answer

correctArray = ["Grey", "Matt Murdock", "Barbara Gordon", "Cows", "1941"];

//Images





//Wrong anwser

// Win & Lose Count


//Global variables

var questions;
var anwser;
var correctAnwsers;
var images;

var userGuess;
var correctGuess = 0;
var incorrectGuess = 0;
var noAnwser = 0;
var timer;



}); //On document ready closing