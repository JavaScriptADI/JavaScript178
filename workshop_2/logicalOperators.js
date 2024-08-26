const birthYear = 1992; // Hard coded
// const isGenZ = (birthYear >= 1997) && (birthYear <= 2012);
const isGenZ = (1997 <= birthYear) && (birthYear <= 2012); // dynamic / computed value
const isNotGenZ = (birthYear < 1997) || (2012 < birthYear);
// What is going on here?
// const isGenZ = 1997 <= birthYear <= 2012;

console.log('is Gen Z', isGenZ);
// console.log('is not Gen Z', isNotGenZ);
// not operator
console.log('is not Gen Z', !isGenZ);


