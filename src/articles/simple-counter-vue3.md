# بناء عداد بسيط باستخدام Vue 3

## الوصف
في هذا المقال، سنتعلم كيف نبني عداد (Counter) بسيط باستخدام Vue 3. هذا المشروع مناسب للمبتدئين ويشرح أساسيات التفاعل مع البيانات والأحداث في Vue 3 باستخدام Composition API و`<script setup>`.

---

### ما الذي ستتعلمه في هذا المقال؟
- كيفية إنشاء متغير تفاعلي باستخدام ref.
- كيفية التعامل مع الأحداث (زيادة/نقصان العداد).
- ربط البيانات بين الواجهة والسكربت.

---

## 1. كتابة القالب (Template)

```vue
<template>
  <div class="counter-app">
    <h1>عداد بسيط</h1>
    <p>القيمة الحالية: {{ count }}</p>
    <button @click="increment">زيادة</button>
    <button @click="decrement">نقصان</button>
  </div>
</template>
```

---

## 2. كتابة السكربت (Script) باستخدام Composition API

```js
<script setup>
import { ref } from 'vue';
const count = ref(0);
function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
</script>
```

---

## 3. إضافة بعض التنسيقات البسيطة (CSS)

```css
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
```

---

## خلاصة
تعلمت في هذا المقال كيف تنشئ عداد بسيط باستخدام Vue 3، وتتعامل مع المتغيرات التفاعلية والأحداث. يمكنك تطوير المشروع بإضافة ميزات مثل إعادة التعيين أو تحديد الحد الأقصى والأدنى للعداد.
