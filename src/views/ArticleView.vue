<template>
  <section class="article-view">
    <router-link class="btn" to="/articles">← العودة للمقالات</router-link>

    <div v-if="DemoComponent" class="component-wrapper">
      <p class="subtitle">يمكنك تجربة المشروع أولاً</p>
      <component class="demo-component" :is="DemoComponent" />
      <hr />
    </div>

    <div v-if="loading">جاري التحميل...</div>
    <div v-else v-html="renderedMarkdown" class="markdown-body"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue";
import { useRoute } from "vue-router";
import markdownit from "markdown-it";

import CounterDemo from "@/components/articles/Counter.vue";
import TodoDemo from "@/components/articles/Todo.vue";
import CalculatorDemo from "@/components/articles/Calculator.vue";

const route = useRoute();
const slug = route.params.slug;
const renderedMarkdown = ref("");
const loading = ref(true);

const demoComponents = {
  "todo-vue3": TodoDemo,
  "masbha-counter-vue3": CounterDemo,
  "calculator-vue3": CalculatorDemo,
};
const DemoComponent = shallowRef(demoComponents[slug] || null);

onMounted(async () => {
  try {
    // Dynamic import for markdown file
    const md = await import(`../articles/${slug}.md?raw`);
    const mdParser = markdownit({
      html: true,
      linkify: true,
      typographer: true,
    });
    renderedMarkdown.value = mdParser.render(md.default);
  } catch (e) {
    renderedMarkdown.value = "<h2>المقال غير موجود</h2>";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.article-view {
  font-family: "Cairo";
}
.demo-component {
  margin: 1rem auto;
}
.component-wrapper{
  text-align: center;
}

</style>
