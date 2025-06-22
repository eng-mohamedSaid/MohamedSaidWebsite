<template>
  <div class="todo-app">
    <h1>تطبيق المهام Todo</h1>
    <!-- حقل إدخال المهمة الجديدة -->
    <input
      v-model="newTask"
      placeholder="أضف مهمة جديدة"
      @keyup.enter="addTask"
    />
    <button @click="addTask">إضافة</button>
    <!-- قائمة المهام -->
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ completed: task.completed }"
      >
        <input type="checkbox" v-model="task.completed" />
        <span>{{ task.text }}</span>
        <button @click="removeTask(index)">حذف</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
// متغير تفاعلي لتخزين نص المهمة الجديدة
const newTask = ref("");
// مصفوفة تفاعلية لتخزين المهام
const tasks = ref([
  { text: "تعلم Vue 3", completed: false },
  { text: "بناء تطبيق Todo", completed: false },
]);
// دالة لإضافة مهمة جديدة
function addTask() {
  if (newTask.value.trim() !== "") {
    tasks.value.push({ text: newTask.value, completed: false });
    newTask.value = "";
  }
}
// دالة لحذف مهمة حسب رقمها في المصفوفة
function removeTask(index) {
  tasks.value.splice(index, 1);
}
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: auto;
  font-family: Arial, sans-serif;
}
.completed span {
  text-decoration: line-through;
  color: gray;
}
input[type="text"] {
  width: 70%;
  padding: 8px;
  margin-right: 8px;
}
button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
