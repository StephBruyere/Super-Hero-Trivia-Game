// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );


var questionsCounter = 0;
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;

var questions;
var anwser;
var correctAnwsers;
var images;
var correctGuess = 0;
var incorrectGuess = 0;
var noAnwser = 0;
var timer;

// Start

var count = 30;

$(".start").on("click", function() {
	$(".start").hide("slow");
	showText ();
	var start = true;
	setInterval(clock,1000)

;
});

function showText () { 
	$(".hourglass").html(count);
	questionsCounter = 0
	correctAnwsers = correctArray[questionsCounter];
	$(".questions").html(questionArray[questionsCounter]); 
	button();

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

 questionArray = [ "What was The Hulk's original color?", "What is Dare Devil's real name?", "Which is not a interation of the Robin character?", "The character Deadpool has a fear or what...?", "What year did the Wonder Women comic debut?"];


//Anwsers
anwserArray = [[ "Green", "Grey", "Blue", "Red"], ["Matt Murdock", "Foggy Nelson", "Scott Summers", "Frank Castle"], ["Tim Drake", "Damien Wayne", "Stephanie Brown","Barbara Gordon"], ["Spiders", "Spider-man", "Cows", "Zombies"], ["1927", "1939", "1941", "1955"]];




function button () {
$("#button1").html(anwserArray[questionsCounter][0]);
$("#button2").html(anwserArray[questionsCounter][1]);
$("#button3").html(anwserArray[questionsCounter][2]);
$("#button4").html(anwserArray[questionsCounter][3]);
}

//Right answer  [1, 0, 3, 2, 0]; , #button2, #button3, #button4


$(function correct(){
    $("#button1, #button2, #button3, #button4").on('click', function(event){
    	console.log(correctArray[questionsCounter]);
    	console.log(buttonOne);
    });
});


 
correctArray = ["Grey", "Matt Murdock", "Barbara Gordon", "Cows", "1941"];

buttonOne = anwserArray[questionsCounter][0]; 
function userGuess () {
	if (buttonOne === correctArray[questionsCounter]) {
		console.log("BINGO");
	} else { console.log("False");
}
}


/* $("#button1, #button2, #button3, #button4").on("click", function() {
	if(correctAnwsers === userGuess) {
		console.log (correctAnwsers);
		//userGuess = $(".solution").html();
		clearInterval(clock);
	}
	else {
		clearInterval(clock);
	}
});
*/


/*function getMatch(anwserArray, correctArray) {
    var matches = [];
    for ( var i = 0; i < anwserArray[questionsCounter].length; i++ ) {
        for ( var e = 0; e < correctArray[questionsCounter].length; e++ ) {
            if ( anwserArray[i] === correctArray[e] ) matches.push( a[i] );
        }
    }
    return matches;
    console.log(matches);
}
getMatch(anwserArray[questionsCounter], correctArray[questionsCounter]); */


//Images





//Wrong anwser

// Win & Lose Count


//Global variables




}); //On document ready closing