/*
Implement the following functions:

1. Implement a function called forEach that takes in an array and a callback function. 
The function should call the callback function on each element in the array.
2. Implement a function called map that takes in an array and a callback function.
The function should return a new array with the result of calling the callback function on each element in the array.
3. Implement a function called filter that takes in an array and a callback function.
The function should return a new array with only the elements that pass the condition specified in the callback function.
4. Implement a function called reduce that takes in an array, a callback function, and an initial value.
The function should return a single value that is the result of calling the callback function on each element in the array.
*/

function forEach(array, fn) {
    for (const element of array) {
        fn(element);
    }
}


forEach([1, 2, 3, 4], console.log);
forEach([1, 2, 3, 4], (element) => { console.log(element ** 2); });
forEach(["Gio", "Levani", "Mary"], function (name) { console.log(`Hello ${name}`); });

