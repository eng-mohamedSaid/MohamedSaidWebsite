<template>
  <div class="blog-list">
    <h1>المقالات</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <router-link :to="`/articles/${article.slug}`">{{ article.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Use Vite's import.meta.glob to auto-import all markdown files
const articleFiles = import.meta.glob('../articles/*.md', { eager: true, as: 'raw' });

const articles = ref(
  Object.entries(articleFiles).map(([path, content]) => {
    // Extract slug from path
    const slug = path.match(/([\w-]+)\.md$/)[1];
    // Try to extract title from first markdown heading
    const titleMatch = content.match(/^#\s+(.+)$/m);
    return {
      slug,
      title: titleMatch ? titleMatch[1] : slug
    };
  })
);
</script>

<style scoped>
.blog-list {
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1rem;
}
</style>
