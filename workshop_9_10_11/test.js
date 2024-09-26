fetch("https://jsonplaceholder.typicode.com/posts/3")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })


// Assignment 3
// make a fetch request to following url: https://jsonplaceholder.typicode.com/posts/1/comments a. transform the response into json format. b. print out the data in console. c. how are these comments related to the post with id 1?

fetch("https://jsonplaceholder.typicode.com/posts/3/comments")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })