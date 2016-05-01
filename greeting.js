

var Greeting = ["Hello", "Hola", "Que Tal"];
var randomAdjectives = ["Sir", "ma'am", "Mr."];
var randomWords = ["annoyed", "happy", "busy", "wide awake", "hungry", "sleepy"];


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











