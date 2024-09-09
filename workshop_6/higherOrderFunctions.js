/* Higher Order functions
    - Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
    - Higher-order functions allow us to abstract over actions, not just values.   

*/



// 1. Functions that create new functions
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
let greaterThan20 = greaterThan(20);

console.log(greaterThan10(11)); // true

console.log(greaterThan10(9)); // false

// 2. Functions that change other functions'
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1); // calling with [3, 2, 1] // called with [3, 2, 1] , returned 1

// 3. Functions that provide new types of control flow
function unless(test, then) {
    if (!test) then();
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
