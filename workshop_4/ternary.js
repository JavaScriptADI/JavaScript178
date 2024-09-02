// ternaty operator

let a = 10;
let b = 20;
let max = a > b ? a : b;

console.log(max); // 20

// Same as
if (a > b) {
    max = a;
} else {
    max = b;
}
