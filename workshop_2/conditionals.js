const age = Number(prompt('How old are you?'));
const today = new Date();
const year = today.getFullYear();
console.log(year);
console.log(age, typeof age);

if (age < 18) {
    // code block
    console.log("You are a minor!");
} else {
    // code block
    console.log("You are an adult!");
}

const birthYear = year - age;
// template string / literal
console.log(`You were born in ${birthYear} year`);
if ((2013 <= birthYear) && (birthYear <= 2025)) {
    console.log('Gen Alpha');
} else if ((1996 <= birthYear) && (birthYear <= 2012)) {
    console.log('Gen Z');
} else if ((1981 <= birthYear) && (birthYear <= 1996)) {
    console.log('Millenial');
} else if ((1965 <= birthYear) && (birthYear <= 1980)) {
    console.log('Generation X');
} else {
    console.log('Other!');
}


if (age < 2 || age > 130) { 
    console.log('You are lying!');
}