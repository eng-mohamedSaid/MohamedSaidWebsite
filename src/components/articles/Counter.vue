<template>
  <div class="counter-app">
    <h1>Simple Counter</h1>
    <p>Current Value: {{ count }}</p>
    <p v-if="isEven">The number is even</p>
    <p v-else>The number is odd</p>
    <button @click="increment" :disabled="count >= max">Increment</button>
    <button @click="decrement" :disabled="count <= min">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);         // Reactive variable for the counter value
const max = 10;               // Maximum value for the counter
const min = 0;                // Minimum value for the counter

// Computed property to check if the count is even
const isEven = computed(() => count.value % 2 === 0);

// Function to increment the counter
function increment() {
  if (count.value < max) count.value++;
}

// Function to decrement the counter
function decrement() {
  if (count.value > min) count.value--;
}

// Function to reset the counter to zero
function reset() {
  count.value = 0;
}
</script>

<style scoped>
.counter-app {
  max-width: 300px;
  margin: 2rem auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
button {
  margin: 0 8px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
