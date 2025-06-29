
# Project 1 from Vue 3 Learning Series  
## Building a Digital Masbha (Prayer Beads) with Vue 3

This is the first project in the Vue 3 learning series. In this article, you’ll learn how to build a **digital Masbha (prayer beads)** using Vue 3. This beginner-friendly project introduces you to Vue3 concepts including:

- Reactivity
- Event handling
- Dynamic class binding
- Styling components using the Composition API

---

## 🔍 Project Overview

Our Masbha component will have:

- A **counter display** that shows the current count.
- A **light button** 💡 that temporarily highlights the counter.
- A **reset button** ↺ to reset the count.
- A **large increment button** to increase the count on each click.

---

## 🎯 What You Will Learn

- How to create reactive variables using `ref`
- Handling user interactions with `@click`
- Applying dynamic classes based on state
- Using `setTimeout` for temporary UI effects

---

## 🛠️ Step-by-Step Explanation

### 1. 🧱 Template Structure (HTML Only)
In vue you should put html inside `<template></template>` and you can use classes for css normally and we put our css in `<style></style>`, see this html code it has paragraph and 3 buttons.


```vue
<template>
  <div class="masbha">
    <p class="masbha-count">count</p>
    <div class="masbha-controls">
      <button>💡</button>
      <button>↺</button>
    </div>
    <button class="increment-btn"></button>
  </div>
</template>
```

---

### 2. 🧠 Add the Script Logic
now we need to make masbha work so we need to make the count dynamically be changed so let us make the script, you should add your script in `<script></script>` 
we need a variable for count, in vue we have ref and this will make a reference for our variable so we can use it


#### a. Import `ref` and Create Reactive Variables

```js
<script setup>
import { ref } from "vue";

const count = ref(0);
</script>
```

- know we have our const, and here you see zero, as this is my default value, you can make it any type you need like Boolean or string like ref(“ali”), now update the value in template to be dynamic

#### b. Display Reactive Count in Template

```html
<p class="masbha-count">{{ count }}</p>
```
- if you want to show dynamic data you should put it in {{  }} , so now count is appear as 0 

#### c. Create Increment Function

```js
const increment = () => {
  count.value++;
};
```
- This is a simple function, and you see that we write count.value to get the value of count in script, but you should know that when you use count in template, you will not write .value and you see we use it in paragraph like this `<p class="masbha-count">{{ count }}</p>`


#### d. Bind Increment Function to Button

```html
<button class="increment-btn" @click="increment"></button>
```
- to add increment function to the button. In js we use onclick, here we use v-on:click and instead of writing v-on we can write @ so it will be @click  and in vue3 we called this directive. Now increment button increase the value and it appear well.

---

### 3. 🔄 Reset Functionality

#### a. Create Reset Function
- we need to reset the count so make a function and get count value and make it eual to zero
```js
const reset = () => {
  count.value = 0;
};
```

#### b. Add to Reset Function Button

```html
<button @click="reset">↺</button>
```

---

### 4. 💡 Highlight Counter Background
- now we need to make background be lighted like a lump, so this can be done with making the background of count to be more lighter so make a new class to have new lighter background and make condition if it is true add this new background.

#### a. Define Light Background Class in CSS

```css
.masbha-count-light {
  background: #a6ffc5;
}
```

#### b. Create `isLight` Variable

```js
const isLight = ref(false);
```
#### c. Create Light Function with Timer
- ask your self? how can we  make isLight true?
- Answer:  we will make function for button of lamp and when i click, i need to make isLight true and after 2 seconds i need it to be false so we can use setTimeout
```js
const lightBackground = () => {
  isLight.value = true;
  setTimeout(() => {
    isLight.value = false;
  }, 2000);
};
```


#### d. Use Dynamic Class Binding
- In vue we have dynamic class and this can be done if you have a variable will be true or false or have any condition, for static css we know that is `class` so for dynamic `:class` , so if the variable which called isLight become true , dynamic class `masbha-count-light` will be added 

```html
<p class="masbha-count" :class="{ 'masbha-count-light': isLight }">
  {{ count }}
</p>
```


#### e. Bind Function to Lamp Button

```html
<button @click="lightBackground">💡</button>
```

---

## ✅ Final Full Code

```vue
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
```

---

## 🚀 How to Run This Project

### 🔹 Online
Use [Vue SFC Playground](https://sfc.vuejs.org) to paste and test the code live.

### 🔹 On Your Local Machine

1. Create a Vue 3 project:
   ```bash
   npm create vue@latest
   ```

2. Add the above component code into a `.vue` file.

3. Place the background image (`counter.svg`) in the proper path or update the URL.

4. Import and use the `Masbha` component in your app.

5. Run the dev server:
   ```bash
   npm run dev
   ```

---

## 🧾 Conclusion

This project is a simple and practical way to learn Vue 3. You’ve learned how to:

- Create **reactive variables** using `ref`.
- Handle user interaction with **`@click` events**.
- Use **dynamic class bindings** for styling.
- Add **timed visual effects** using `setTimeout`.
- Style components with **scoped CSS**.

