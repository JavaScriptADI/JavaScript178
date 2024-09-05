// DOM - Document Object Model

const div = document.getElementById('text');
const removeBtn = document.getElementById('remove');
// const todoInput = document.querySelector('input[name="todo"]');
const addTodoForm = document.querySelector('#addTodoForm');
const todoList = document.querySelector('#todoList');

// div.innerHTML = "Hello From JS";
// div.style.background = "linear-gradient(90deg, black, white)";
// div.style.color = "red";
// div.style.padding = "1rem";

// function onClick() {
//     div.remove();
// }

// removeBtn.addEventListener('click', onClick);
// todoInput.addEventListener('input', function() {
//     console.log(todoInput.value);
// });

addTodoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    const todoText = addTodoForm.todo.value;
    console.log(todoText);
    const li = document.createElement('li');
    li.innerHTML = todoText;
    console.log(li);
    todoList.appendChild(li);
    li.addEventListener('click', function() {
        li.style.textDecoration = "line-through";
    });

});