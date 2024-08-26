let result = 10 == 10; // true
console.log(result, typeof result);
console.log('5 == 10', 5 == 10);
console.log('5 < 10', 5 < 10);
console.log('5 > 10', 5 > 10);
console.log('5 >= 10', 5 >= 10);
console.log('10 <= 10', 10 <= 10);
console.log('10 != 10', 10 != 10);

// 0 0 0 0 0 1 0 1
// Implicit conversion
console.log('"5" == 5', "5" == 5);
console.log('Number("5") == 5', Number("5") == 5);

// Strict comparisons
console.log('"5" === 5', "5" === 5);
console.log('"5" !== 5', "5" !== 5);
console.log('5 !== 5', 5 !== 5);

console.log('"5" > 7', "5" > 7);
console.log('"3" < 7', "3" < 7);
console.log('"a" < 7', "a" < 7);
console.log('"a" > 7', "a" > 7);
