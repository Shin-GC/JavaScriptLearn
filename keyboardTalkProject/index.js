const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}

function sendEnter(e) {
  if(e.key === "Enter" && !e.shiftKey) {
    sendMyText()
    e.preventDefault()
    // 브라우저의 기본 동작으로 줄바꿈을 입력해버리기 때문에 초기화가 제대로 되지 않기 때문에 브라우저 기본 이벤트를 막기 위한 코드 추가
  }
}

function changeLine(e) {

}

input.addEventListener("keypress", sendEnter)
send.addEventListener('click', sendMyText);
