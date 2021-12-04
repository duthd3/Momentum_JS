const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //local storage에 저장
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();  
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li"); //li 추가
    li.id = newTodo.id;
    const span = document.createElement("span"); //span 추가   
    span.innerText = newTodo.text;
    const button = document.createElement("button"); //button 추가
    button.innerText="☓";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);//li가 span을 자식으로 갖는다.
    li.appendChild(button);//li가 button을 자식으로 갖는다.    
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; ///value값 저장    
    toDoInput.value = ""; //value값 초기화(빈문자열)
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj); //newTodo를 toDos array에 push
    paintToDo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

