/*
Intervals Js

we can create intervals in javascript using setInterval() function.
- setInterval() is a higher order function that takes two arguments, a callback function and a time interval in milliseconds.
- callback function is executed after every time interval.
- setInterval() returns an interval ID that can be used to clear the interval using clearInterval() function.
- setInterval() function will keep on executing the callback function until it is cleared using clearInterval() function.

*/

// Example 1: setInterval() function
// let's create a simple interval that logs a message after every 2 seconds.
let intervalID = setInterval(
    () => {
        console.log("Hello World");
    },
    2000
);


// Example 2: clearInterval() function
// let's clear the interval after 10 seconds using clearInterval() function.

setTimeout(
    () => {
        clearInterval(intervalID);
        console.log("Interval Cleared");
    },
    10000
);

// Example 3: clock

let clock = document.createElement("div");
document.body.appendChild(clock);

setInterval(
    () => {
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    },
    1000
);
