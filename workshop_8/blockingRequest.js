console.log('hello');

function getData(endpoint) {
    // immitation of blocking request
    const db = {
        friends: ['Alice', 'Bob', 'Charlie'],
        posts: [
            { title: 'Post 1', content: 'Hello' },
            { title: 'Post 2', content: 'Hi' },
        ],
    };

    const s = new Date();
    let wait = endpoint === 'friends' ? 5000 : 3000;

    while (new Date() - s < wait) {
    }

    return db[endpoint];
}
let s = new Date();

const friends = getData('friends');
const friendsDiv = document.querySelector('#friends');
friendsDiv.textContent = friends.join(', ');
console.log((new Date() - s) / 1000);

let s2 = new Date();
const posts = getData('posts');
const postsDiv = document.querySelector('#posts');
postsDiv.textContent = posts.map(post => post.title).join(', ');
console.log((new Date() - s2) / 1000);

console.log('hi');
let p = document.createElement('p');
p.textContent = (new Date() - s) / 1000;
document.body.appendChild(p);