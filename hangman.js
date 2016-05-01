// // //hangman words
// var words = [
// "donkey", 
// "money", 
// "cheese", 
// "pillow",
// "music", 
// "cake",
// "homework"
// ];

// // function chooseWord () 

// // //select a random word
// var word = words[Math.floor(Math.random() * words.length)];


// // //answer array
// var answerArray = [];
// for (var i = 0; i < word.length; i++){
// 	answerArray[i] = "_";
// }

// // var remainingLetters = word.length;

// // //loop
// while (remainingLetters > 0) {
// 	//show player progress
// 	alert(answerArray.join(" "));

// // //get guess from player
// var guess = prompt("Guess a letter, or click cancel to stop playing.");

// if (guess === null) {
// 	//exit game loop
// 	break;
// } 	else if (guess.length!==1) {
//   	alert ("Please enter a single letter.");
// } 	else {
// //update game state with a guess
// for (var j = 0; j < word.length; j++) {
// 		if (word[j] === guess){
// 				answerArray[j] = guess;
// 				remainingLetters--;
// 		}
// 	}
// }
// // //end of game loop


// // //show the answer to the player and congratualte them

//  alert(answerArray.join(""));
//alert("Good job!" The answer was " + words);

var Greeting = ["Hello", "Hola", "Que Tal"];
var randomAdjectives = ["Sir", "ma'am", "Mr"];
var randomWords = ["annoyed", "happy", "busy", "wide awake", "hungry", "sleepy"];
// var randomWord= function (function_name) {
// 	document.write(" ");


// //pick a Greeting from greeting array:
var Greeting = Greeting[Math.floor(Math.random() *3)];
Greeting

// //pick a random adjective:
var randomAdjectives = randomAdjectives[Math.floor(Math.random() *3)];

// //pick a random from the random words array:

var randomWords = randomWords[Math.floor(Math.random() *6)];

// //join all the random strings into a sentence:
var randomWords = Greeting + " " + randomAdjectives + " " + "are " + "you " + randomWords + "?";

//show in document
document.write(randomWords);











