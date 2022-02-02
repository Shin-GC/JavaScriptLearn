// li 태그이름을 가진 요소 노드를 만든 다음
// 그 요소 노드에 파라미터로 전달받은 오늘 할 일(text)을 담고
// <ul id="to-do-list"></ul>태그의 마지막 자식 요소 노드로 추가하는

const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
  const liTag = document.createElement("li")
  liTag.textContent = text
  toDoList.append(liTag)
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');
addNewTodo("짜란 테스트")