// Implicit conversion
let result = "5" + 7;  // string


console.log(result, typeof result); //  57, string

result = "5" * 7;
console.log(result, typeof result);

// Explicit conversion
result = "5" + String(8);
console.log(result, typeof result);

// Explicit conversion
result = Number("5") + 8;
console.log(result, typeof result);

// Number conversion
console.log('1', Boolean(1));
console.log("0.1", Boolean(0.1));
console.log('0', Boolean(0));
console.log('-1', Boolean(-1));
console.log('1000.1', Boolean(1000.1));
console.log('-1000', Boolean(-1000));

// Escape / Special characters
console.log('""', Boolean(""));
console.log('\'\'', Boolean(''));
// console.log("\"\"", Boolean(""));
console.log('" "', Boolean(" "));
console.log("Test", Boolean("Test"));

console.log('true + false', true + false); // false
console.log('true + ture', true + true);
console.log('Number(true)', Number(true));
