// Data Structure - Object

/*
Object is a non-primitive data structure that stores a collection of key-value pairs.
Each key-value pair is called a property.
An object can contain properties of any data type, including other objects.
*/

// Creating an Object
let person = {
  name: 'John',
  age: 30,
  isEmployed: true
};

// Access an Object property using the dot notation
let personName = person.name; // John

console.log(personName);
console.log(person.age); // 30

// Access an Object property using the bracket notation
console.log(person['isEmployed']); // true

// Add a property to an Object
person.city = 'New York';
console.log(person); // { name: 'John', age: 30, isEmployed: true, city: 'New York' }

// Remove a property from an Object
delete person.age;
console.log(person); // { name: 'John', isEmployed: true, city: 'New York' }

// Update the value of a property
person.name = 'Jane';
console.log(person.name); // Jane


// Accessing non-existent property will return undefined
console.log(person.salary); // undefined
