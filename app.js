// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteChecked);
filterOption.addEventListener('click', filtterTodo);


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

    // Add todo to loacal storage
    saveLocalTodos(todoInput.value);

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
    todoInput.value = "";
}

function deleteChecked(e) {
    const item = e.target;

    // Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');

        //event listener which wait and remove the task
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }  
    
    // Checked Mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    //Chech if todo already present in local storage
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}