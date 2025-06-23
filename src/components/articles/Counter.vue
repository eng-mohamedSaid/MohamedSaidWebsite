<template>
  <div class="masbha">
    <p class="masbha-count" :class="{ 'masbha-count-light': isLight }">
      {{ count }}
    </p>
    <div class="masbha-controls">
      <button @click="lightBackground">💡</button>
      <button @click="reset">↺</button>
    </div>
    <button class="increment-btn" @click="increment"></button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const isLight = ref(false);

const increment = () => {
  count.value++;
};
const reset = () => {
  count.value = 0;
};
const lightBackground = () => {
  isLight.value = true;
  setTimeout(() => {
    isLight.value = false;
  }, 2000);
};
</script>

<style scoped>
.masbha {
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

.masbha-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 95px;
}
.masbha-controls button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: white;
  font-size: 16px;
}
.masbha-count {
  background: #abe2be;
  width: 100px;
  border-radius: 5px;
  text-align: right;
  padding: 4px;
}
.masbha-count-light {
  background: #a6ffc5;
}
button {
  background: #3acd5b;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.increment-btn {
  width: 55px;
  height: 55px;
}
</style>
