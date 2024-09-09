// Higher Order functions with arrays

// 1. forEach
let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

numbers.forEach(number => {
    console.log(number);
});

// 2. filter
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]


const eN = [];
for (const number of numbers) {
    if (number % 2 === 0) {
        eN.push(number);
    }
}

console.log(eN); // [2, 4]


// 3. map
let squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// 4. reduce
let sum = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum); // 15

// 5. some
let hasEvenNumbers = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumbers); // true

// 6. every
let allEvenNumbers = numbers.every(number => number % 2 === 0);

console.log(allEvenNumbers); // false

// 7. find
let firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber); // 2

// 8. findIndex
let firstEvenNumberIndex = numbers.findIndex(number => number % 2 === 0);
console.log(firstEvenNumberIndex); // 1
