# بناء تطبيق Todo بسيط باستخدام Vue 3 – تعلم Vue 3 خطوة بخطوة


## الوصف
في هذا المقال، ستتعلم كيف تبني تطبيق مهام (Todo) بسيط باستخدام Vue 3 من الصفر، حتى لو لم تكن تعرف Vue من قبل. سنشرح لك كل خاصية في الكود خطوة بخطوة، مع أمثلة عملية تساعدك على فهم كيفية عمل Vue 3، خصوصًا استخدام القالب (template)، التفاعل مع البيانات (reactivity)، والتعامل مع الأحداث (event handling) باستخدام Composition API و`<script setup>`.

---

### ما الذي ستتعلمه في هذا المقال؟
- كيف تكتب قالب Vue 3 باستخدام التوجيهات (Directives) مثل v-model وv-for.
- كيف تجعل البيانات تفاعلية باستخدام ref.
- كيف تضيف مهام جديدة وتحذف مهام موجودة باستخدام دوال Vue.
- كيف تربط بين واجهة المستخدم والبيانات بطريقة سهلة وواضحة.
- أساسيات بناء مكونات Vue 3 باستخدام `<script setup>` التي تسهل كتابة السكربت.

---

## 1. كتابة القالب (Template) – هيكل واجهة المستخدم

```vue
<template>
  <div class="todo-app">
    <h1>تطبيق المهام Todo</h1>
    <!-- حقل إدخال المهمة الجديدة -->
    <input v-model="newTask" placeholder="أضف مهمة جديدة" @keyup.enter="addTask" />
    <button @click="addTask">إضافة</button>
    <!-- قائمة المهام -->
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
        <input type="checkbox" v-model="task.completed" />
        <span>{{ task.text }}</span>
        <button @click="removeTask(index)">حذف</button>
      </li>
    </ul>
  </div>
</template>
```

**شرح القالب:**
- `v-model="newTask"`: يربط قيمة حقل الإدخال بمتغير newTask في السكربت، بحيث تتغير القيمة تلقائيًا عند الكتابة.
- `@keyup.enter="addTask"`: عندما يضغط المستخدم زر Enter في حقل الإدخال، يتم استدعاء دالة addTask لإضافة المهمة.
- `v-for="(task, index) in tasks"`: يعرض كل مهمة في مصفوفة tasks داخل عنصر `<li>`.
- `:key="index"`: يحدد مفتاحًا فريدًا لكل عنصر في القائمة لتحسين الأداء.
- `v-model="task.completed"`: يربط مربع الاختيار بحالة إنجاز المهمة (مكتملة أو لا).
- `:class="{ completed: task.completed }"`: يضيف صنف CSS completed للمهمة إذا كانت مكتملة، لتغيير مظهرها.

---

## 2. كتابة السكربت (Script) باستخدام Composition API و`<script setup>`

```js
<script setup>
import { ref } from 'vue';
// متغير تفاعلي لتخزين نص المهمة الجديدة
const newTask = ref('');
// مصفوفة تفاعلية لتخزين المهام
const tasks = ref([
  { text: 'تعلم Vue 3', completed: false },
  { text: 'بناء تطبيق Todo', completed: false }
]);
// دالة لإضافة مهمة جديدة
function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ text: newTask.value, completed: false });
    newTask.value = '';
  }
}
// دالة لحذف مهمة حسب رقمها في المصفوفة
function removeTask(index) {
  tasks.value.splice(index, 1);
}
</script>
```

**شرح السكربت:**
- `ref`: دالة من Vue 3 تجعل المتغيرات تفاعلية، أي أن Vue تراقبها وتحدث الواجهة تلقائيًا عند تغيرها.
- `newTask`: متغير يخزن نص المهمة التي يكتبها المستخدم.
- `tasks`: مصفوفة تحتوي على المهام، كل مهمة كائن يحتوي على نص المهمة وحالة الإنجاز.
- `addTask()`: تضيف مهمة جديدة إلى المصفوفة إذا لم يكن النص فارغًا، ثم تمسح حقل الإدخال.
- `removeTask(index)`: تحذف المهمة من المصفوفة حسب موقعها.

---

## 3. إضافة بعض التنسيقات البسيطة (CSS)

```css
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
```

---

## خلاصة
في هذا المقال، تعلمنا كيف نستخدم Vue 3 لبناء تطبيق مهام بسيط، مع شرح كل خاصية:
- ربط البيانات بين الواجهة والسكربت باستخدام v-model.
- تكرار عرض العناصر باستخدام v-for.
- جعل المتغيرات تفاعلية باستخدام ref.
- التعامل مع الأحداث مثل الضغط على الأزرار أو مفتاح Enter.
- كتابة السكربت بطريقة حديثة باستخدام `<script setup>`.

في المقالات القادمة، سنتعلم كيفية إضافة ميزات متقدمة مثل تعديل المهام، استخدام الخصائص المحسوبة (computed properties)، وإدارة الحالة.
