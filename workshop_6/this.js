/* This keyword in JavaScript

The this keyword in JavaScript is a reference to the object it belongs to. It has different values depending on where it is used:

1. In a method, this refers to the owner object.
2. Alone, this refers to the global object.
3. In a function, this refers to the global object.
4. In a function, in strict mode, this is undefined.
5. In an event, this refers to the element that received the event.

*/

// 1. In a method, this refers to the owner object.
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    greet() {
        console.log("Hello, " + this.fullName());
    },
    f() {
        // return () => {
        //     console.log(this);
        // }
        return function() {
            console.log(this);
        }
    }
}; 

console.log(person.fullName()); // John Doe
person.greet(); // Hello, John Doe
person.f()();
let f = () => {
    console.log(this);
}
f();
// 2. Alone, this refers to the global object.
console.log(this); // Window 

// 3. In a function, this refers to the global object.
function myFunction() {
    return this;
}

console.log(myFunction()); // Window

// 4. In a function, in strict mode, this is undefined.
function myStrictFunction() {
    "use strict";
    return this;
}

console.log(myStrictFunction()); // undefined

// 5. In an event, this refers to the element that received the event.
// document.getElementById("myButton").addEventListener("click", function() {
//     console.log(this); // <button id="myButton">Click me</button>
// });

// Arrow functions do not have their own this. They inherit the this value from the enclosing scope.
let person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: () => {
        console.log('Arrow', this);
        return this.firstName + " " + this.lastName;
    }
};

console.log(person2.fullName()); // undefined undefined
