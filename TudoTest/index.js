const list = document.querySelector('.list');
const data = [{
  title: '자바스크립트 공부하기',
  isClear: true,
}, {
  title: '쓰레기 분리수거',
  isClear: false,
}, {
  title: '고양이 밥주기',
  isClear: true,
}, {
  title: '독서하기',
  isClear: false,
}, {
  title: '영어 공부하기',
  isClear: false,
}
];

data.forEach((todo, i) =>
{
  let liTag = document.createElement("li")
  if (todo.isClear) {
    liTag.classList.add("item", "done")
  }
  else {
    liTag.classList.add("item")
  }
  todo.isClear ? liTag.classList.add("item", "done") : liTag.classList.add("item")

  liTag.textContent = `${i}. ${todo.title}`
  list.appendChild(liTag)
}
)