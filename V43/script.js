'use strict';

const list = document.querySelector('.todo-list');

const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.todo-input');

const todos = [
    {
        id: 1,
        task: 'Mata hunden',
        completed: false,
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

function renderList() {
    list.innerHTML = '';
    todos.forEach(todo => {
        list.innerHTML += `<li class="todo-item" id="${todo.id}">
                        <span class="todo-content ${todo.completed ? 'completed' : ''}">${todo.task}</span> 
                        <span class="remove-btn">❌</span>
                    </li>`;
        
    });
    
}      
renderList()

addBtn.addEventListener('click', function(){
    const todo = {
        id: todos.length + 1,
        task: input.value,
        completed: false,
    }

    todos.push(todo);
    renderList()

    input.value = '';
})

document.querySelector('body').addEventListener('click', function(event){
    const target = event.target.closest('.todo-item');
    if(target) {
        const id = target.id;
        const arrayItem = todos.find(todo => todo.id == id);
        const label = target.querySelector('.todo-content');
        if(arrayItem.completed == false) {
            arrayItem.completed = true;
            label.classList.add('completed');
        } else {
            arrayItem.completed = false;
            label.classList.remove('completed');
        }
    }
})
                
                
                
                























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






