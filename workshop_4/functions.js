function greet(name) {
    console.log(`how are you? ${name}`);
}

function getRandom(a, b) {
    // a shadows the global variable a
    // Local Scope
    b += 1;
    a -= 1;
    return Math.floor((Math.random() * (b - a)) + a);
}

greet('james');
// global a
let a = 5;
console.log(getRandom(1, 10));
console.log(a);