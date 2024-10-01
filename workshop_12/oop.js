
class Pesron {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    describe() {
        console.log('-'.repeat(10));
        this.greet();
    }

    greet() {
        console.log(`Hi I am ${this.firstName} ${this.lastName}.`);
    }
}

class Student extends Pesron {
    constructor (firstName, lastName, faculty) {
        super(firstName, lastName);
        this.faculty = faculty;
    }

    describe() {
        super.describe();
        console.log(`I am studing on ${this.faculty}.`);
    }
}

class Lecturer extends Pesron {
    constructor(firstName, lastName, subjects) {
        super(firstName, lastName);
        this.subjects = subjects;
    }
    describe() {
        super.describe();
        console.log(`I am teaching ${this.subjects}.`);
    }
}


const students = [
    new Student("Josh", "Doe", "Computer Science"),
    new Student("Jane", "Doe", "Computer Science"),
    new Student("Mary", "Poppins", "Mathematics"),

]

const lecturers = [
    new Lecturer('James', 'Brown', ['Math', 'Python']),
    new Lecturer('George', 'Washington', ['Computer Science', 'Algorithms']),
    new Lecturer('Phillip', 'Brown', ['Matlab', 'R']),
]


for (const student of students) {
    console.log(student.firstName, student.lastName);
    student.describe();
}

for (const lecturer of lecturers) {
    lecturer.describe();
}

