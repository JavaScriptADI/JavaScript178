// Hoisting


greet(); // Hello
// console.log(num1); // Error
console.log(num2); // undefined


function greet() {
    console.log("Hello");
}

const num1 = 20;

var num2 = 25;
