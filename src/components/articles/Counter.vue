<template>
  <div class="counter-app">
    <p class="count-number" :class="{ 'light-background': isLight }">
      {{ count }}
    </p>
    <div class="buttons-container">
      <button @click="lightBackground">💡</button>
      <button @click="reset">↺</button>
    </div>
    <button class="increment" @click="increment"></button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(0);
const isLight = ref(false);

function increment() {
  count.value++;
}

function reset() {
  count.value = 0;
}
function lightBackground() {
  isLight.value = true;
  setTimeout(() => {
    isLight.value = false;
  }, 2000);
}
</script>

<style scoped>
.counter-app {
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/img/articles/counter.svg");
  background-repeat: no-repeat;
  background-size: 175px 180px;
  background-position: center;
  width: 190px;
  height: 190px;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 95px;
}
.buttons-container button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: white;
  font-size: 16px;
}
.count-number {
  background: #abe2be;
  width: 100px;
  border-radius: 5px;
  text-align: right;
  padding: 4px;
}
.light-background {
  background: #a6ffc5;
}
button {
  background: #3acd5b;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.increment {
  width: 55px;
  height: 55px;
}
</style>
