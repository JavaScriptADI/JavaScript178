/*
setTimeout
as seen with setInterval, we can create timeouts in javascript using setTimeout() function.
- setTimeout() is a higher order function that takes two arguments, a callback function and a time interval in milliseconds.
- callback function is executed after the time interval.
- setTimeout() returns a timeout ID that can be used to clear the timeout using clearTimeout() function.
- setTimeout() function will execute the callback function only once after the time interval.

*/

// Example 1: setTimeout() function
// let's create a simple timeout that logs a message after 2 seconds.
let timeoutID = setTimeout(
    () => {
        console.log("Hello World");
    },
    2000
);
