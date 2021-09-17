// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listners

todoButton.addEventListener('click', addTodo);


// Functions

function addTodo(event){
    // prevent form from submitting
    event.preventDefault();

    //Create Todo DIV
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    toDoDiv.appendChild(newTodo);

    // Checked mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    toDoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    toDoDiv.appendChild(trashButton);

    // Append to the List
    todoList.append(toDoDiv);

    // Clear todo input value
    todoInput.value = ""
;
}