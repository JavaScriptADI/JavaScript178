// Manipulating Iterations

/* continue keyword

The continue keyword can be used to skip the current iteration of the loop 
and continue with the next iteration.

*/
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

/* break keyword

The break keyword can be used to exit the loop prematurely.

*/
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}

