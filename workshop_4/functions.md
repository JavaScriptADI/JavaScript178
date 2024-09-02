Function is a block of code that can be called by name. 
The code inside a function is not executed when the function is defined. 
It is executed when the function is invoked.

```javascript
// Define a function
function greet() {
    console.log('Hello, World!');
}


// Call the function
greet(); // Hello, World!

```

```javascript
// Define a function with parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Call the function
greet('Alice'); // Hello, Alice!
greet('Bob'); // Hello, Bob!
greet(); // Hello, undefined!
```

```javascript
// Define a function that returns a value
function add(a, b) {
    return a + b;
}

// Call the function
let sum = add(5, 10);
console.log(sum); // 15
console.log(add(2, 3)); // 5
add(1, 2); // 3 (return value is not stored in a variable)
```

```javascript
// Function declaration
function greet() {
    console.log('Hello, World!');
}

```

```javascript
// Function expression
let greet = function() {
    console.log('Hello, World!');
};
```
    
```javascript
// Arrow function
let greet = () => {
    console.log('Hello, World!');
};
```

```javascript
// Arrow function with parameters
let greet = (name) => {
    console.log(`Hello, ${name}!`);
};
```

