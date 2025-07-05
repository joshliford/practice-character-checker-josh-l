const readline = require('readline-sync');

console.log("Hello and Welcome!");
console.log("This program will ask you to enter a string (word or phrase), then ask you if you'd like to query a specific position within that string.");

let userPhrase = readline.question("Please enter a word or phrase: ");
console.log("You entered: " + userPhrase + ".");

let userIndex = readline.questionInt("Please enter an index you'd like to query (i.e. 0, 1, 2, etc.): ");
console.log("You decided to query index [" + userIndex + "]."); // added bracket notaction for style & enhanced output in the console

let indexQuery = userPhrase[userIndex];
console.log("The character at index [" + userIndex + "] is " + indexQuery + "."); // added bracket notation here as well