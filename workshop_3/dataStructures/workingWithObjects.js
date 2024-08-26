const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    friends: [
        {
            name: 'Jane',
            age: 23
        },
        {
            name: 'Doe',
            age: 24
        },
        {
            name: 'Smith',
            age: 25
        },
        {
            name: 'Alex',
            age: 26
        }
    ]
};


// print out all the properties of the student object
console.log('in operator');
for (const key in student) {
    console.log(key);
}

console.log('Object.keys(student)');
console.log(Object.keys(student));
for (const key of Object.keys(student)) {
    console.log(key);
}

// print out all values of the student object
console.log('Object.values(student)');
console.log(Object.values(student));
for (const value of Object.values(student)) {
    console.log(value);
}

// find the average age of the student and his friends
let totalAge = student.age;
let groupSize = student.friends.length + 1;

for (const friend of student.friends) {
    totalAge += friend.age;
}

console.log(totalAge / groupSize);
