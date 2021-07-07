

const toDoInput = document.getElementById("toDoInput");
const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("toDoList");

// Guardar arrays
const items = [];


// create an event listener 
function addToDoOnclick() {
  items.push(toDoInput.value);
  console.log(items);
 

 

};
addBtn.addEventListener("click", addToDoOnclick);
