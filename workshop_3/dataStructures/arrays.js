// Data Structure - Array

/*
Array is a data structure that stores a collection of elements. 
Each element is identified by an index. 
The index of the first element is 0, the index of the second element is 1, and so on. 
The length of an array is the number of elements it contains. 
An array can contain elements of any data type, including other arrays.
*/

// Creating an Array
let fruits = ['Apple', 'Banana'];

// Access an Array item using the index position
let first = fruits[0]; // Apple

console.log(first);
console.log(fruits[1]); // Banana

// Add an item to the end of an Array
fruits.push('Orange'); // ["Apple", "Banana", "Orange"]

console.log(fruits);

// Remove an item from the end of an Array
let last = fruits.pop(); // remove Orange (from the end) and return it
// fruits.pop();
console.log(last);

// Remove an item from the beginning of an Array
let firstFruit = fruits.shift(); // remove Apple (from the front) and return it

console.log(firstFruit);

// Add an item to the beginning of an Array
fruits.unshift('Strawberry'); // add to the front

console.log(fruits); // ["Strawberry", "Banana"]

// Accessing non-existent index will return undefined
console.log(fruits[10]); // undefined


// Update an existing item in an Array
fruits[1]= 'Mango'; // ["Strawberry", "Mango"]

console.log(fruits);