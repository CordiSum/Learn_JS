"use strict";

require("./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
// Доробити TODO лист, в якому буде можливість:
// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.

function onPageLoaded() {
  const pencil = document.querySelector('#pencil');
  const addList = document.querySelector('#addList');
  const saveButton = document.querySelector('button.save');
  const clearButton = document.querySelector('button.clear');
  const showTipsButton = document.querySelector('button.showTips');
  const closeTipsButton = document.querySelector('a.closeTips');
  const overlay = document.querySelector('#overlay');
  const ul = document.querySelector('ul.todos');
  const input = document.querySelector('input[type=text]');
  const wrapInput = document.querySelector('#wrapper-input');
  pencil.addEventListener('click', function () {
    wrapInput.classList.toggle('display');
  });
  function createTodo() {
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.classList.add('todo-text');
    const newTodo = input.value;
    textSpan.append(newTodo);
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('todo-trash');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt');
    deleteBtn.appendChild(icon);
    ul.appendChild(li).append(textSpan, deleteBtn);
    input.value = '';
    listenDeleteTodo(deleteBtn);
  }
  function onClickTodo(event) {
    if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
      event.target.classList.toggle('checked');
    }
    ;
  }
  function listenDeleteTodo(element) {
    element.addEventListener('click', event => {
      element.parentElement.remove();
      event.stopPropagation();
    });
  }
  function loadTodos() {
    const data = localStorage.getItem('todos');
    if (data) {
      ul.innerHTML = data;
    }
    const deleteButtons = document.querySelectorAll('span.todo-trash');
    for (const button of deleteButtons) {
      listenDeleteTodo(button);
    }
  }
  input.addEventListener('keypress', keyPressed => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
      createTodo();
    }
  });
  addList.addEventListener('click', () => {
    if (input.value !== '') {
      createTodo();
    }
  });
  ul.addEventListener('click', onClickTodo);
  saveButton.addEventListener('click', () => {
    localStorage.setItem('todos', ul.innerHTML);
  });
  clearButton.addEventListener('click', () => {
    ul.innerHTML = '';
    localStorage.removeItem('todos', ul.innerHTML);
  });
  showTipsButton.addEventListener('click', () => {
    overlay.style.height = '100%';
  });
  closeTipsButton.addEventListener('click', () => {
    overlay.style.height = '0';
  });
  loadTodos();
}
document.addEventListener('DOMContentLoaded', onPageLoaded);