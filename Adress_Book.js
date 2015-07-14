// Short programm to add and store contact entries




// Creating two contacts, which are associative arrays, same as objects
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};




// Adding this two objects to the array "contacts"
var contacts = [bob, mary];




//Creating a function that print a person, i.e "John Smith"
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}




// Automating the printing of your contacts
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}




/*Create a search function
then call it passing "Jones"*/
var search = function(lastName) {
    var contactsLength = contacts.length;
    
    for (i = 0; i < contactsLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
};




//Add a new contact
var add = function(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    }
};
add("Bernard", "Pago", "61040660", "lolol@gmail.com");
list();
