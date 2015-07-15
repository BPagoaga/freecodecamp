//Objects Review

var james = {
    // add properties to this object!
    job: "programmer",
    married: false
    
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student", true);




// Adding a method to a constructor
// via constructor

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function(){
        console.log("Hello!");
    }
}

var user = new Person("Codecademy Student",false);
user.speak();


//litteraly

var james = {
    job: "programmer",
    married: false,
    speak: function( mood ) {
        console.log("Hello, I am feeling " + mood);
    }
};

james.speak("great");
james.speak("just okay");




// this as a reference to a property

var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job, even tho the method call is the same, the result change, because "this" take the last value for the "job" property
james.sayJob();




// "typeof" to determine the type : number, string, boolean, function, array, object

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"





//Object.hasOwnProperty("property") : return true if an object as this property




// for-in loop + bracket notation

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for (var prop in nyc) {
    console.log(nyc[prop]);
}




/*
Class is in Session

Alright, it's time to learn the basics of object-oriented programming! Often abbreviated OOP, this is a very important programming paradigm that is widely used in the industry today.

Let's start by introducing classes. We learned in the last course that constructors are a way to make objects, but they actually do even more than that.

When you make a constructor, you are in fact defining a new class. A class can be thought of as a type, or a category of objects—kind of like how Number and String are types in JavaScript.

Take a look at our Person example taken from Introduction to Objects I. In this case bob and susan are two separate objects, but both belong to the class Person.
*/

// Making a constructor == defining a class

function Person(name,age) { //Personn is a Class (type of object)
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) { //Circle is a Class (type of object)
    this.radius = radius;
}

/*====================================================================
 *protoype : helps remember the properties and the methods of a class*
 ====================================================================*/
//allows to add new methods

className.prototype.newMethod = function() {
statements;
};

// Example :

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function() {
    console.log("Meow!");
};


// add code here to make the cats meow!
cheshire.meow();
gary.meow();




/*========================
 *      inheritance      *
 ========================*/
 
 // the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin (name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal(); //Penguin is a new Class, an instance (child) of the Class Animal. It has the same properties and methods as its parent.




// Power of inheritance

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin (name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

var penguin = new Penguin("Georges"); //creating a new object penguin of the class Penguin
penguin.sayName(); // we have never defined the sayName for the class Penguin, yet it works !

// same goes for properties

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}

Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has
var emperor = new Emperor();
console.log(emperor.numLegs); // we never set the numLegs properties for the class Emperor, yet it works !




//Up the food-I-mean prototype chain, ie : emperor is a penguin, penguin is an animal => emperor is an animal.
// At the top of the list is the Object.prototype (native JS). By default, all class inherits directly from Object.




/*====================
 *      PUBLIC       *
 ====================*/
/*Open to the Public

In JavaScript all properties of an object are automatically public. Public means that they can be accessed outside the class. Think of these properties as the information a class is willing to share.*/




/*====================
 *      PRIVATE      *
 ====================*/
/*
Private Variables

Good! But what if an object wants to keep some information hidden?

Just as functions can have local variables which can only be accessed from within that function, objects can have private variables. Private variables are pieces of information you do not want to publicly share, and they can only be directly accessed from within the class.*/




/*
Accessing Private Variables

Although we cannot directly access private variables from outside the class, there is a way to get around this. We can define a public method that returns the value of a private variable.
*/

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

/*Create a method called askTeller within the Person class that returns the returnBalance method. This means that it returns the method itself and NOT the result of calling that method. So you should NOT have parentheses after returnBalance.

Because askTeller returns a method, we need to call it to make it any use. This is what var myBalance = myBalanceMethod(); does. */

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
       return returnBalance;
   }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);




// Passing Arguments

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);




// for-in + typeof

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var language in languages) {
    if (typeof languages[language] === "string") {
        console.log(languages[language]);
    }
}




// prototype + this

function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function(){
    console.log("Hello this is a " +  this.breed + " dog");
}


var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();




/*Private Eye

Recall that:

    Public properties can be accessed from outside the class
    Private properties can only be accessed from within the class

Using constructor notation, a property declared as this.property = "someValue;" will be public, whereas a property declared with var property = "hiddenValue;" will be private.

In this exercise, hit run and you'll see that all your grades are exposed! You really just want people to know your overall GPA.*/


function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());
