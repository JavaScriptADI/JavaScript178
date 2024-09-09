// Constructor functions

// Constructor functions are used to create multiple objects of the same type. They are similar to classes in other programming languages.

// 1. Create a constructor function for a Person object. The Person object should have the following properties:
// - firstName
// - lastName
// - age
// 2. Add a method to the Person object that returns the full name of the person.
// 3. Add a method to the Person object that greets the person by saying "Hello, [full name]".
// 4. Create an instance of the Person object and test the methods.

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }

    this.greet = function() {
        console.log("Hello, " + this.fullName());
    }
}

const person1 = new Person("John", "Doe", 30);
console.log(person1); // Person { firstName: 'John', lastName: 'Doe', age: 30 }
person1.greet(); // Hello, John Doe

const person2 = new Person("Jane", "Smith", 25);
console.log(person2); // Person { firstName: 'Jane', lastName: 'Smith', age: 25 }
person2.greet(); // Hello, Jane Smith
