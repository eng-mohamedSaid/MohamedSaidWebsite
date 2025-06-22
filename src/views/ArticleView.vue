<template>
  <section>
    <router-link to="/articles">← العودة للمقالات</router-link>

    <div v-if="DemoComponent">
      <component :is="DemoComponent" />
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

import TodoDemo from "@/components/articles/Todo.vue";
import CounterDemo from "@/components/articles/Counter.vue";

const route = useRoute();
const slug = route.params.slug;
const renderedMarkdown = ref("");
const loading = ref(true);

const demoComponents = {
  "simple-todo-vue3": TodoDemo,
  "simple-counter-vue3": CounterDemo,
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

<style scoped></style>
