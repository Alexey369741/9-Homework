const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const button = document.querySelector('#msgButton');

button.addEventListener('click', onButtonClick);

function onButtonClick() {

    const message = getTodoMessage();

    if (!isMessageValid(message)) {
        showError();
        return;
    }

    addTodoItem(message);
    clear();
}

function getTodoMessage() {
    return input.value;
}

function isMessageValid(message) {
    return message.trim() !== '';
}

function showError() {
    alert('Поле сообщение не должно быть пустым');
}

function addTodoItem(message) {
    const li = document.createElement('li');
    li.textContent = message;

    ul.append(li);
}

function clear() {
    input.value = '';
}
