// fetch('https://dummyjson.com/users')
//     .then(response => response.json())
//     .then(data => {
//         const { users } = data;
//         console.log(users);

//         const friends = document.querySelector('#friends');
//         console.log(users.map(user => user.firstName));
//         friends.innerText = users.map(user => user.firstName).join(', ');
//     });


fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(data => {
        const { posts } = data;
        // throw new Error('Failed to fetch posts');
        const postsDiv = document.querySelector('#posts');
        postsDiv.innerHTML = posts.map(post => `<div>${post.title}</div>`).join('\n');
    })
    .catch(e => {
        const postsDiv = document.querySelector('#posts');
        postsDiv.innerText = 'Failed to fetch posts';
        postsDiv.classList.add('text-danger');
    })


async function fetchUsers() {
    const friends = document.querySelector('#friends');

    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        // throw new Error('Failed to fetch users');
        const { users } = data;

        friends.innerHTML = users.map(user => (`
            <div>
                <img class="rounded-circle border-primary" src="${user.image}" alt="${user.firstName}" width="50" height="50">
                ${user.firstName}
            </div>
        `)).join('\n');
    } catch (e) {
        friends.innerText = 'Failed to fetch users';
        friends.classList.add('text-danger');
        console.log(e);
    }
}

fetchUsers();
console.log('Hi');
// const s = new Date();
// while (new Date() - s < 4000) {

// } 