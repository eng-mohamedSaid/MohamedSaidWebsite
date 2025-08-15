<template>
  <div class="calculator">
    <div class="calculator-display">
      <p>{{ display }}</p>
      <h3>= {{ result }}</h3>
    </div>

    <div class="clculator-buttons">
      <!-- 1 row -->
      <button @click="clearAll()">Ac</button>
      <button @click="deleteLast()">
        <img
          src="@/assets/img/articles/calculator-delete.svg"
          alt="delete icon"
        />
      </button>
      <button class="blue-btn" @click="inputOperator('/')">/</button>
      <button class="blue-btn" @click="inputOperator('*')">
        <p class="star-icon">*</p>
      </button>

      <!-- 2 row -->
      <button @click="input('7')">7</button>
      <button @click="input('8')">8</button>
      <button @click="input('9')">9</button>
      <button class="blue-btn" @click="inputOperator('-')">-</button>

      <!-- 3 row -->
      <button @click="input('4')">4</button>
      <button @click="input('5')">5</button>
      <button @click="input('6')">6</button>
      <button class="blue-btn" @click="inputOperator('+')">+</button>

      <!-- 4 row -->
      <button @click="input('1')">1</button>
      <button @click="input('2')">2</button>
      <button @click="input('3')">3</button>
      <button class="equal-btn" @click="calculate()">=</button>

      <!-- 5 row -->
      <button class="zero-btn" @click="input('0')">0</button>
      <button><p class="dot-icon" @click="input('.')">.</p></button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const display = ref("0");
const result = ref("");

function input(val) {
  if (display.value === "0") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function inputOperator(op) {
  if (/[+\-*/.]$/.test(display.value)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function calculate() {
  try {
    console.log("Calculating:", display.value);
    result.value = eval(display.value).toString();
  } catch {
    result.value = "Error";
    display.value = "0";
  }
}

function clearAll() {
  display.value = "0";
  result.value = "";
}

function deleteLast() {
  if (display.value.length === 1) {
    display.value = "0";
  } else {
    display.value = display.value.slice(0, -1);
  }
}
</script>

<style scoped>
.calculator {
  background: #f7f8fb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 375px;
}
.calculator-display {
  height: 150px;
  font-size: 30px;
}
.blue-btn {
  background: #ade2ff;
  color: #109dff;
}
button {
  background: #ffffff;
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #38b9ff;
  border-radius: 16px;
}
.star-icon {
  margin-bottom: -10px;
}
.dot-icon {
  margin-top: -10px;
}
.clculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 60px);
  gap: 20px;
}

.zero-btn {
  grid-column-end: span 2;
}
.equal-btn {
  grid-row-end: span 2;
  background: #19acff;
  color: white;
  box-shadow: -9px 13px 23px 0 rgba(0, 163, 255, 0.65);
}

@media (max-width: 400px) {
  .calculator {
    width: 100%;
  }
  .calculator-display {
    height: 120px;
    font-size: 24px;
  }
  .clculator-buttons {
    gap: 10px;
  }
  button {
    font-size: 20px;
  }
    
}
</style>
