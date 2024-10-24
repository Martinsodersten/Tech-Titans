'use strict';

const list = document.querySelector('.todo-list');
const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.todo-input');


let todos = [
    {
        id: 1,
        task: 'Mata hunden',
        completed: true,
    },
    {
        id: 2,
        task: 'Matlådor',
        completed: false,
    },
    {
        id: 3,
        task: 'Dammsuga',
        completed: false,
    }
];

let idCounter = todos.length;

function renderList() {
    list.innerHTML = '';
    todos.forEach(todo => {
        list.innerHTML += `<li class="todo-item" id="${todo.id}">
                        <span class="todo-content ${todo.completed ? 'completed' : ''}">${todo.task}</span>
                        <span class="remove-btn">❌</span>
                    </li>`;
    });
}

// Add todo
addBtn.addEventListener('click', function(){
    idCounter++;
    const todo = {
        id: idCounter,
        task: input.value,
        completed: false,
    }

    todos.push(todo);
    renderList()

    input.value = '';
});

document.querySelector('body').addEventListener('click', function(event){

    // Complete todo
    if(event.target.closest('.todo-content')) {
        const target = event.target.closest('.todo-content');
        const id = target.parentElement.id;
        const arrayItem = todos.find(todo => todo.id == id);

        arrayItem.completed = !arrayItem.completed;

        // if(arrayItem.completed == false) {
        //     arrayItem.completed = true;
        // } else {
        //     arrayItem.completed = false;
        // }

        renderList();
    }
    // Remove todo
    else if (event.target.closest('.remove-btn')) {
        const target = event.target.closest('.remove-btn');
        const id = target.parentElement.id;

        todos = todos.filter(todo => todo.id != id);
        console.log(todos);
        renderList();
    }
});

renderList();























/* const listItem = document.createElement('li');
listItem.classList.add('todo-item');
            
const content = document.createElement('span');
content.textContent = 'Mata hunden';
listItem.appendChild(content);
            
const cross = document.createElement('span');
ross.textContent = '❌';
cross.classList.add('remove-btn')
listItem.appendChild(cross);
            
list.appendChild(listItem);
            
console.log(listItem); */






