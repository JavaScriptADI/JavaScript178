// console.log(Math.floor(Math.random() * 101));
// console.log(Math.floor(0.99999999999999 * 101));

let a, b;
a = 97;
b = 122;
// console.log(Math.floor((Math.random() * (b - a)) + a));

let password = '';
for (let i = 0; i < 20; i++) {
    const charCode = Math.floor((Math.random() * (b - a)) + a);
    // console.log(Math.floor((Math.random() * (b - a)) + a));
    // console.log(String.fromCharCode(charCode));
    const char = String.fromCharCode(charCode);
    password += char;
}
console.log(password);
