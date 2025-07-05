const inputBox = document.getElementById("inputBox");
const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");

let edittodo = null;
//function to add  to do
const addtodo = () => {
  const inputtext = inputBox.value.trim();
  if (inputtext.length <= 0) {
    alert("You must  write something in your to do");
    return false;
  }

  if (addbtn.value === "Edit") {
    edittodo.target.previousElementSibling.innerHTML = inputtext;
    editLocaltodos(inputtext);
    addbtn.value = "Add";
    inputBox.value = "";
  } else {
    //Creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputtext;
    li.appendChild(p);

    //Creating edit btn
    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit"; //this method is used to add  class  through js
    editbtn.classList.add("btn", "editbtn");
    li.appendChild(editbtn);

    //Creating delete btn
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Remove";
    deletebtn.classList.add("btn", "deletebtn");
    li.appendChild(deletebtn);

    todolist.appendChild(li);
    inputBox.value = ""; //is method se input box empty ho jaye ga

    savelocalTodos(inputtext);
  }
};

//function to update (Remove button as well as Edit button)
const updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    //is method se Remove button  pe click karne pe Remove ho jaye ga
    todolist.removeChild(e.target.parentElement);
    deletLocalTodo(e.target.parentElement);
  }

  //Edit button
  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addbtn.value = "Edit";
    edittodo = e;
  }
};

//function  to save local todo
const savelocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

//function to ger local todo
const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.gerItme("todos"));
    todos.forEach((todo) => {
      //Creating p tag
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = todo;
      li.appendChild(p);

      //Creating edit btn
      const editbtn = document.createElement("button");
      editbtn.innerText = "Edit"; //this method is used to add  class  through js
      editbtn.classList.add("btn", "editbtn");
      li.appendChild(editbtn);

      //Creating delete btn
      const deletebtn = document.createElement("button");
      deletebtn.innerText = "Remove";
      deletebtn.classList.add("btn", "deletebtn");
      li.appendChild(deletebtn);

      todolist.appendChild(li);
    });
  }
};

//function to delete local todo
const deletLocalTodo = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todotext = todo.children[0].innerHTML;
  let todoIndex = todo.indexof(todotext);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todoIndex);
};

const editLocaltodos = (todo) => {
  let toods = JSON.parse(localStorage.gerItem("todos"));
  let todoIndex = todos.indexof(todo);
  todos[todoIndex] = inputBox.value;
  localStorage.setItem("todos", JSON.stringify(todos));
};

document.addEventListener("DOMContentLoaded", getLocalTodos);
addbtn.addEventListener("click", addtodo);
todolist.addEventListener("click", updateTodo);
