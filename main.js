const newPageText = document.getElementById('new-page-text');
const topicInput = document.getElementById('topic-input');

const tasks = document.getElementById('tasks');
const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');

const taskText = document.getElementById('task-text');
const taskInput = document.getElementById('task-input');

const descText = document.getElementById('desc-text');
const descInput = document.getElementById('desc-input');

const priority = document.getElementById('priority')
const priorityColor = document.getElementById('priorityColor')


let priorityCount = null; // Инициализируем priorityCount

document.addEventListener('DOMContentLoaded', () => { // Ждем загрузки DOM
  const important = document.getElementById('important');
  const secondary = document.getElementById('secondary');

  important.addEventListener('click', () => {
    priorityCount = 0;
  });

  secondary.addEventListener('click', () => {
    priorityCount = 1;
  });
});

let newTask = {};


function addTaskToList(task) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  const taskNameElement = document.createElement('span');
  taskNameElement.textContent = task.taskname;
  taskNameElement.classList.add('task-name'); // добавляем класс для стилизации

  const taskDescriptionElement = document.createElement('span');
  taskDescriptionElement.textContent = task.description;
  taskDescriptionElement.classList.add('task-description'); // добавляем класс для стилизации


  const priorityElement = document.createElement('div');
  priorityElement.classList.add('priority-circle');
  if (task.priorityCount === 0) {
      priorityElement.style.backgroundColor = 'red'; // Или другой цвет для важной задачи
  } else if (task.priorityCount === 1) {
      priorityElement.style.backgroundColor = 'yellow'; // Или другой цвет для второстепенной задачи
  }

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-button');

  // Обработчик удаления задачи
  deleteButton.addEventListener('click', () => {
      taskElement.remove();
  });

  taskElement.appendChild(taskNameElement);
  taskElement.appendChild(taskDescriptionElement);
  taskElement.appendChild(priorityElement);
  taskElement.appendChild(deleteButton);
  tasks.appendChild(taskElement);
}

function saveTask() {
  const taskname = document.getElementById('task-input').value;
  const description = document.getElementById('desc-input').value;

  newTask.taskname = taskname;
  newTask.description = description;
  newTask.priorityCount = priorityCount;

  console.log('Новая задача:', newTask);

  // Создаем и добавляем новую задачу на страницу
  addTaskToList(newTask);
}

priority.addEventListener('click', function(){
    priorityColor.classList.toggle('show');
})

priorityColor.addEventListener('click', function(){
  priorityColor.classList.toggle('show');
})

newPageText.addEventListener('click', () => {
    newPageText.style.display = 'none'; // Скрываем "New page"
    topicInput.style.display = 'block'; // Показываем поле ввода
    topicInput.focus(); // Устанавливаем фокус на поле ввода

    if (!topicInput.value) {
        topicInput.value = "";
    }
});

taskText.addEventListener('click', () => {
    taskText.style.display = 'none'; // Скрываем "New page"
    taskInput.style.display = 'block'; // Показываем поле ввода
    taskInput.focus(); // Устанавливаем фокус на поле ввода

    if (!taskInput.value) {
        taskInput.value = "";
    }
});

descText.addEventListener('click', () => {
    descText.style.display = 'none'; // Скрываем "New page"
    descInput.style.display = 'block'; // Показываем поле ввода
    descInput.focus(); // Устанавливаем фокус на поле ввода

    if (!descInput.value) {
        descInput.value = "";
    }
});

function saveH1() {
  const h1Text = document.getElementById('new-page-text').textContent;
  localStorage.setItem('h1Text', h1Text);
  console.log('Текст h1 сохранен:', h1Text);
}

function loadH1() {
  const savedH1Text = localStorage.getItem('h1Text');
  if (savedH1Text) {
    document.getElementById('new-page-text').textContent = savedH1Text;
    console.log('Текст h1 загружен:', savedH1Text);
  }
}

// Вызываем функцию loadH1() при загрузке страницы, чтобы загрузить сохраненный текст
window.addEventListener('DOMContentLoaded', loadH1); // Используем DOMContentLoaded

// Добавляем обработчик события input для сохранения текста h1 при изменении
document.getElementById('topic-input').addEventListener('input', function() {
  const newText = this.value; // Получаем текст из input
  document.getElementById('new-page-text').textContent = newText; // Устанавливаем текст для h1
  saveH1(); // Сохраняем в localStorage
});

cancelBtn.addEventListener('click', () => {
  taskInput.value = '';
  descInput.value = '';

  priorityCount = null;

  newTask = {};
});