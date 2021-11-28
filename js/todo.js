const ToDoForm = document.getElementById("todo-form");
const ToDoInput = ToDoForm.querySelector("input");
const ToDoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    li.id = newToDo.id
    const span = document.createElement('span')
    span.innerText = newToDo.text
    const button = document.createElement('button')
    button.innerText = '❌'
    button.addEventListener('click', deleteToDo)
    
    li.appendChild(span)
    li.appendChild(button)
    ToDoList.appendChild(li)
    
}

function deleteToDo(event){
    const li = event.target.parentElement
    
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos()
    // ToDoList.removeChild(event['path'][1])
    // ToDoList.removeChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = ToDoInput.value;
    ToDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

ToDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}