import { getRandom, prompNumber } from "./utils.js";


// prompt user for a 2 number; and log random number between those 2 numbers

const n1 = prompNumber("Enter a Number: ");
const n2 = prompNumber("Enter another Number: ");

console.log(n1, n2);

// console.log(Math.round(Math.random() * (n2 - n1) + n2));
// console.log(Math.round(Math.random() * (n1 - n2) + n2));
console.log(getRandom(n1, n2));
console.log(getRandom(n2, n1));

console.log(getRandom(n1 * 2, n2 * 2));
console.log(getRandom());
