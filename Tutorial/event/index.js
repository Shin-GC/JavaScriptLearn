// const toDoList = document.querySelector('#to-do-list');
// const items = toDoList.children;
//
// function updateToDo(event) {
//   event.target.classList.toggle('done')
// }
//
// for (let item of items) {
//   item.addEventListener("click", updateToDo)
// }
//
//

const toDoList = document.querySelector('#to-do-list');

function updateToDo(event) {
  if (event.target.classList.contains("item")) {
    event.target.classList.toggle('done')
  }
}

toDoList.addEventListener("click", updateToDo)


const newToDo = document.createElement('li');
newToDo.textContent = '가계부 정리하기';
newToDo.classList.add('item');
toDoList.append(newToDo);

toDoList.children[2].addEventListener('click', function(e) {e.stopPropagation()});