document.addEventListener('DOMContentLoaded', function() {
  const ulTodo = document.querySelector('.todo-list'),
        input = document.querySelector('.todo-input');

  // функция создает новый список
  function createTodo() {
    const newTodo = input.value,
          todoItem = `
          <li class="todo-item">
            <div class="todo-item__wrapper">
              <label>
                <input type="checkbox">
              </label>
              <span class="todo-item__title">${newTodo}</span>

              <div class="more">
                <div class="icon more-toggle">...</div>
                <div class="dropdown">
                  <ul class="dropdown__list">
                    <li class="edit-todo-item">
                      <span class="dropdown__list-label">Изменить</span>
                    </li>
                    <li class="delete-todo-item">
                      <span class="dropdown__list-label">Удалить</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        `;

    // вывод заметки
    ulTodo.insertAdjacentHTML('beforeend', todoItem);
    input.value = "";
    
  }

  //по нажатию Enter вызываются функции создания и отслеживания клика п отрем точкам
  input.addEventListener('keyup',  (event) => {
    if (event.key == 'Enter') {
      createTodo();
      moreToggle()
      editList()
    }
  });

  // ================================
  // выпадающее меню: изменит/удалить
  function moreToggle() {
    const lastElem = ulTodo.lastElementChild;

    const btn = lastElem.querySelector('.more-toggle');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const moreWrapper = e.target.parentNode;

      if (moreWrapper.classList.contains('active')) {
        moreWrapper.classList.remove('active');
      } else {
        moreWrapper.classList.add('active');
      }
    });
  }

  // ====================
  // редактировать задачу
  function editList() {
    const lastElemEdit = ulTodo.lastElementChild;
    const editBtn = lastElemEdit.querySelector('.edit-todo-item');
    const inputEdit = lastElemEdit.querySelector('.todo-item__title');
    const moreActive = document.querySelector('.more');
    
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (moreActive) {
        moreActive.classList.remove('active'); //скрываем выпадающее меню
      }

      inputEdit.contentEditable = 'true'; //разрешено редактирование поля
      inputEdit.focus(); //фокус на редактируемом поле
    });

    inputEdit.addEventListener('keydown',  (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); //запрещаем перенос строки по Enter        
        inputChanged = inputEdit.innerText  // перезаписываем запись
        console.log(inputChanged);
        inputEdit.contentEditable = 'false'; //поле ввода не редактируется
      }
    });
  }








  

})