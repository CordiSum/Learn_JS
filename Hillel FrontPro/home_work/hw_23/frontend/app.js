const API = "http://localhost:4000/api/todos";
const STORAGE_KEY = "todos_cache_v1";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

// ---------- LocalStorage helpers ----------
function saveToLS(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadFromLS() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

// ---------- API helpers ----------
async function apiGetTodos() {
  const res = await fetch(API);
  return res.json();
}

async function apiCreateTodo(title, completed = false) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed })
  });
  return res.json();
}

async function apiUpdateTodo(id, patch) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch)
  });
}

async function apiDeleteTodo(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
}

// ---------- UI ----------
function render(todos) {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", async () => {
      await apiUpdateTodo(todo.id, { completed: checkbox.checked });
      await refreshAndCache(); // обновим список и LS
    });

    const span = document.createElement("span");
    span.textContent = todo.title;
    if (todo.completed) span.classList.add("done");

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.addEventListener("click", async () => {
      await apiDeleteTodo(todo.id);
      await refreshAndCache();
    });

    li.append(checkbox, span, btn);
    list.append(li);
  });
}

// ---------- Sync logic ----------
async function refreshAndCache() {
  const serverTodos = await apiGetTodos();
  saveToLS(serverTodos);
  render(serverTodos);
}

// Если сервер пустой (после перезапуска) — восстанавливаем из localStorage
async function restoreServerFromLSIfEmpty() {
  const serverTodos = await apiGetTodos();

  if (serverTodos.length > 0) {
    // сервер уже не пустой — просто закешируем
    saveToLS(serverTodos);
    render(serverTodos);
    return;
  }

  // сервер пустой → берем локальные
  const localTodos = loadFromLS();

  if (localTodos.length === 0) {
    render([]);
    return;
  }

  // заливаем локальные на сервер
  for (const t of localTodos) {
    await apiCreateTodo(t.title, t.completed);
  }

  await refreshAndCache();
}

// ---------- Create ----------
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = input.value.trim();
  if (!title) return;

  await apiCreateTodo(title);
  input.value = "";
  await refreshAndCache();
});

// ---------- Init ----------
restoreServerFromLSIfEmpty();
