<template>
  <div class="todo">
    <div class="todo-header">
      <p class="todo-header-date">{{ date }}</p>
      <img src="@/assets/img/articles/todo.png" alt="Todo List" />
    </div>

    <div class="todo-input-container">
      <input
        type="text"
        placeholder="Add a new task..."
        class="todo-input"
        v-model="newTask"
        @keyup.enter="addTask"
      />
      <button class="todo-add-btn" @click="addTask">+</button>
    </div>

    <div class="todo-list">
      <div class="todo-list-empty" v-if="tasks.length === 0">
        <img src="@/assets/img/articles/task-list.svg" alt="No tasks" />
        <p>No tasks added yet.</p>
      </div>
      <div v-for="task in tasks" :key="task.id" class="todo-item">
        <div class="todo-item-content">
          <input
            class="todo-item-checkbox"
            type="checkbox"
            v-model="task.completed"
          />
          <span :class="{ completed: task.completed }">{{ task.text }}</span>
        </div>

        <button class="todo-delete-btn" @click="deleteTask(task.id)">❌</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const date = new Date().toLocaleDateString("en-CA");

const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() === "") return;
  tasks.value.push({ id: Date.now(), text: newTask.value, completed: false });
  newTask.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
  console.log("Task added:", tasks.value);
};

const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};
onMounted(() => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
});
</script>

<style scoped>
.todo {
  background: white;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  font-size: 16px;
}
.todo-header {
  position: relative;
}
.todo-header-date {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 24px;
  color: white;
  font-weight: bold;
}
.todo-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  gap: 10px;
}
.todo-input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: #ebeff2;
  height: 50px;
}
.todo-add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 55px;
  font-size: 30px;
  background: #20eeb0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.todo-list {
  width: 100%;
  padding: 0px 20px 20px 20px;
  height: 250px;
  overflow-y: auto;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.todo-item:last-child {
  border-bottom: none;
}
.todo-item span {
  text-align: left;
}
.todo-item-content {
  display: flex;
  align-items: center;
  gap: 10px;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
.todo-item-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #20eeb0;
}
.todo-delete-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.todo-delete-btn:hover {
  animation: spin 0.2s linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
.todo-list-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10px;
}
.todo-list-empty img {
  width: 80px;
  height: 80px;
}
</style>
