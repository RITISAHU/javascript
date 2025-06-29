const socket = new WebSocket(`ws://${window.location.host}`);

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    appendMessage(`You: ${message}`);
    socket.send(message);
    messageInput.value = '';
  }
});

socket.addEventListener('message', function (event) {
  appendMessage(`Stranger: ${event.data}`);
});

function appendMessage(msg) {
  const msgEl = document.createElement('div');
  msgEl.textContent = msg;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}
