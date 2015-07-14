// Object

var Spencer = {
  age: 22,
  country: "United States"
};




// Accessing Properties
//Part 1

var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;


//Part2

// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];




//Create an object : litteral and constructor

// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;




// Methods : 
//So What's a Method?
//In the last section, we discussed properties. We can think of properties as variables associated with an object. Similarly, a method is just like a function associated with an object.

// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20

bob.setAge(20);




// the "this" keyword

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50);




// Example of method using this and return

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
    return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();




// Object constructor (native in javascript)

// here we make bob using the Object constructor
var bob = new Object();
bob.name = "Bob Smith";
// add bob's age here and set it equal to 20
bob.age = 20;




// Custom constructor

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);




// Constructors can use object properties and methods

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();




// Array of objects

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);




// Loop in a array of objects

// Our Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
};

// Now we can make an array of people
var family = [
    new Person("alice", 40),
    new Person("bob", 42),
    new Person("michelle", 8),
    new Person("timmy", 6)
    ];

// loop through our new array
for (i = 0; i < family.length; i++) {
    console.log(family[i].name);
}




// Functions taking objects as parameters

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2) {
    return person1.age > person2.age ? person1.age : person2.age;
};

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
