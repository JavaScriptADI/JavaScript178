/* Mutability

In JavaScript, some data types are mutable, meaning that the data can be changed.
Objects, arrays are mutable data types. 
Primitives, such as strings, numbers, and booleans, are immutable.

When working with mutable data types, it is important to be aware of how they behave.
For example, when you assign an object to a new variable, you are not creating a new object,
but rather creating a reference to the original object. 
This means that if you modify the object through the new variable, the original object will also be modified.\

*/

// Example 1
let arr = [1, 2, 3];
let arr2 = arr;
arr2.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

// Example 2
let obj1 = { name: 'Alice' };
let obj2 = obj1;
obj2.age = 30;
console.log(obj1); // { name: 'Alice', age: 30 }
console.log(obj2); // { name: 'Alice', age: 30 }

// Example 3
let str = 'hello';
let str2 = str;
str2 += ' world';
console.log(str); // hello
console.log(str2); // hello world

// Example 4
let num = 5;
let num2 = num;
num2 = 10;
console.log(num); // 5
console.log(num2); // 10

// Example 5
arr = [1, 2, 3];
arr2 = arr.slice();
arr2.push(4);
console.log(arr); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

// Example 6
str = 'hello';
str[0] = 'H';
console.log(str); // hello

// Example 7
arr = [1, 2, 3];
arr[0] = 10;
console.log(arr); // [10, 2, 3]

