// Select elements
const startBtn = document.getElementById("startBtn");
const landing = document.querySelector(".landing");
const app = document.querySelector(".app");
const themeToggle = document.getElementById("themeToggle");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Show app
startBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  app.classList.remove("hidden");
});

// Toggle dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskTime = taskDate.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task");

  li.innerHTML = `
    <span>
      ${taskText} 
      ${taskTime ? `<small>${taskTime}</small>` : ""}
    </span>
    <div>
      <button class="complete">✅</button>
      <button class="edit">✏️</button>
      <button class="delete">❌</button>
    </div>
  `;

  // Task actions
  li.querySelector(".complete").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".edit").addEventListener("click", () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      li.querySelector("span").innerHTML = `${newTask} ${taskTime ? `<small>${taskTime}</small>` : ""}`;
    }
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);

  // Reset inputs
  taskInput.value = "";
  taskDate.value = "";
});
