import { getRandom } from "./utils.js";

let clicked = false;
const divs = [];

function createDiv() {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'red';

    div.addEventListener('mouseover', () => {
        console.log(clicked);
        // div.style.backgroundColor = 'green';
        if (clicked) {
            div.style.backgroundColor = 'green';
        } else {
            div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        }
    });
    return div;
}

for (let i = 0; i < 147; i++) {
    const div = createDiv();
    divs.push(div);
    document.body.appendChild(div);
}

window.addEventListener('mousedown', () => {
    console.log('mousedown');
    clicked = true;
});

window.addEventListener('mouseup', () => {
    console.log('mouseup');
    clicked = false;
});

setInterval(
    () => {
        divs.forEach((div) => {
            div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        });
    },
    1000
);