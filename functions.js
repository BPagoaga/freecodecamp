var speed = 65;

// Complete the condition in the ()s on line 4
if (speed>80 ) {
	// Use console.log() to print "Slow down"
	console.log("Slow down");
} 
else {
	// Use console.log() to print "Drive safe"
	console.log("Drive safe");

}

//=====|===========================================

// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);

//=====|===========================================

// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Bernard");

//=====|===========================================

var foodDemand = function(food){
	console.log("I want to eat" + " " + food);
};

foodDemand("steak");

//=====|===========================================

// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

greeting var func{name}(console.log(name)))} 

var greeting = function(name){
	console.log(name);
};
greeting("Bernard");

//=====|===========================================

var orangeCost = function(cost){
	console.log(cost*5);
}

orangeCost(5);

//=====|===========================================

// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(10);
console.log(newNumber);

//=====|===========================================

// Define quarter here.

var quarter = function(number){
	var quarter = number/4;
}

if (quarter(36) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

//=====|===========================================

// Write your function starting on line 3

var perimeterBox = function(length, width) {
    return (length + width)*2;
};
perimeterBox(2, 5);

//=====|===========================================

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

//=====|===========================================

var nameString = function(name){
	var nameString = "Hi, I am" + " " + name ;
	return nameString;
};

console.log(nameString("Bernard"));

//=====|===========================================

var sleepCheck = function(numHours){

	if( numHours >= 8 ){
		return "You're getting plenty of sleep! Maybe even too much!";
	}else{
		return "Get some more shut eye!";
	}
};

sleepCheck(10);

sleepCheck(5);

sleepCheck(8);
