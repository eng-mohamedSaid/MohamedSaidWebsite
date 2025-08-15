## إنشاء مسبحة باستخدام Vue 3

النهاردة هنتعلم سوا ازاي نعمل **مسبحة الكترونية** باستخدام Vue 3. وهنتعلم فيه :

- Reactivity (يعني ازاي نخلي الصفحة تتغير لما نضغط على حاجة)
- Event handling (يعني ايه اللي هيحصل لما ندوس على زرار)
- Dynamic class binding (ازاي نغير style العناصر من خلال dynamic class)
- Styling components using the Composition API 
---

## 🔍 مكونات المسبحة

- **شاشة** تظهر الرقم اللي احنا واقفين عنده
- **زرار LED** 💡 هيخلي الشاشة تنور لمدة ثانيتين
- **زرار تصفير** ↺ عشان نبدأ من الأول
- **زرار كبير** هنضغط عليه عشان نزود العدد

---


## 🛠️ نبدأ خطوة خطوة

### 1. 🧱 الأول نعمل الشكل بتاعنا (HTML)
- بنحط عناصر html بداخل `<template></template>`
- بنحط عناصر css بداخل `<style></style>`
- بنحط عناصر script بداخل `<script></script>`

بص علي الكود هنا هتلاقي pragraph, 3 buttons بداخل `<template></template>`
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

### 2. 🧠 نضيف script
عشان السبحة تشتغل، محتاجين نخلي العداد يتغير. هنكتب الكود في `<script></script>`
محتاجين متغير للعداد، وفي Vue هنستخدم ref عشان نعمل متغير ممكن نغير قيمته وتتغير في كل مكان بيستخدمه

#### أ. نستورد `ref` ونعمل المتغير بتاعنا

```js
<script setup>
import { ref } from "vue";

const count = ref(0);
</script>
```

- كده عندنا المتغير، وشايفين انه بيبدأ من صفر، وطبعاً ممكن نخليه يبدأ بأي رقم تاني وبالنسبة لل ref ممكن نخليه string او boolean او اي نوع من الداتا

#### ب. نظهر العداد في الشاشة

```html
<p class="masbha-count">{{ count }}</p>
```
- لو عايزين نظهر متغير، بنحطه جوا {{  }}، كده هيظهر قيمة المتغير اللي اسمه count وقيمته بصفر والطريقة دي في vue اسمها interpolation 

#### ج. نعمل دالة زيادة العداد

```js
const increment = () => {
  count.value++;
};
```
- دي دالة بسيطة، وشايفين اننا بنكتب count.value عشان نزود قيمة العداد في الكود، بس في الـ template مش هنكتب .value 
- باختصار المتغير الخاص ب ref هنستدعيه في script باسمه ثم تضيف .value انما في template لا نضيف .value

#### د. نربط دالة الزيادة بالزرار

```html
<button class="increment-btn" @click="increment"></button>
```
 - عشان نخلي الزرار يشتغل، في Vue بنستخدم @click وده زي onclick في JavaScript. دلوقتي لما ندوس على الزرار، العداد وده اسمه Event Handler

---

### 3. 🔄 زرار تصفير الشاشة

#### أ. نضيف الدالة في script 
- عايزين نصفر العداد، يعني نرجعه صفر
```js
const reset = () => {
  count.value = 0;
};
```

#### ب. نربط الدالة بالزرار

```html
<button @click="reset">↺</button>
```

---

### 4. 💡 نعمل تأثير النور
- عايزين نخلي الخلفية تنور، هنعمل كلاس جديد للشاشة ونضيفه لما ندوس على زرار النور

#### أ. نعمل كلاس جديد للشاشة في CSS

```css
.masbha-count-light {
  background: #a6ffc5;
}
```

#### ب. نعمل متغير وهنسميه isLight

```js
const isLight = ref(false);
```

#### ج. نعمل دالة النور مع مؤقت
- عايزين نخلي isLight يبقى true لمدة ثانيتين وبعدين يرجع false
```js
const lightBackground = () => {
  isLight.value = true;
  setTimeout(() => {
    isLight.value = false;
  }, 2000);
};
```

#### د. نربط الشاشه بالمتغير isLight
- في Vue ممكن نحط كلاس بشرط، لو الشرط اتحقق الكلاس هيتحط وده اسمه Dynamic Class Binding 
- كده اول ما isLight يكون ب true هيضيف الكلاس الجديد اللي هو عباره عن لون خلفيه جديدة وبعد الثانيتين هيكون ب false فعلي طول لن يتم اضافه dynamic class للشاشة

```html
<p class="masbha-count" :class="{ 'masbha-count-light': isLight }">
  {{ count }}
</p>
```

#### هـ. نربط دالة النور بالزرار 

```html
<button @click="lightBackground">💡</button>
```


## ✅ الكود كاملاً

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
  transition: all .3s;
}
button:hover{
  background: #38a54e;
}
.increment-btn {
  width: 55px;
  height: 55px;
}
</style>
```
---

## 🚀 ازاي تشغل المشروع

### 🔹 اونلاين
ادخل على [Vue SFC Playground](https://sfc.vuejs.org) وحط الكود وجربه على طول.

### 🔹 على جهازك

1. اعمل مشروع Vue 3 جديد:
   ```bash
   npm create vue@latest
   ```

2. عدل الصفحة الرئيسية واكتب فيها الكود

3. حط صورة الخلفية في المكان المناسب.

4. شغل السيرفر:
   ```bash
   npm run dev
   ```

---

## 🧾 في النهاية

كده احنا عملنا مشروع بسيط وعملي عشان نتعلم Vue 3، واتعلمنا:

- ازاي نعمل **reactive variables** باستخدام  `ref`
- ازاي نخلي **الأزرار تستجيب** للضغط `@click`
- ازاي **نغير شكل العناصر** حسب حالتها **dynamic class bindings** 
- ازاي نعمل **تأثيرات مؤقتة** في الشكل `setTimeout`
