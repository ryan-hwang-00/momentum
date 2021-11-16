const ToDoForm = document.getElementById("todo-form");
const ToDoInput = ToDoForm.querySelector("input");
const ToDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = ToDoInput.value;
    ToDoInput.value = "";
    console.log(newToDo)
}

ToDoForm.addEventListener("submit", handleToDoSubmit);