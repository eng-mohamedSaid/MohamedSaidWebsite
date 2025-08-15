<template>
  <section class="blog">
    <h1 class="title">المقالات</h1>

    <loader v-if="loading"></loader>

    <div v-else class="articles">
      <div
        class="article-wrapper"
        v-for="article in articles"
        :key="article.slug"
      >
        <router-link class="article" :to="`/articles/${article.slug}`">
          <img
            class="article-img"
            :src="article.image"
            alt="header of article"
          />
          <p class="article-title">
            {{ article.title }}
          </p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import Loader from "@/components/Loader.vue";
import article1 from "@/assets/img/articles/heading/digital-counter.webp";
import article2 from "@/assets/img/articles/heading/calculator.webp";
import article3 from "@/assets/img/articles/heading/todo.webp";
import { onMounted, ref } from "vue";

const articles = [
  {
    title: "Vue3 إنشاء مسبحة الكترونية باستخدام",
    slug: "masbha-counter-vue3",
    image: article1,
  },
  {
    title: "Vue3 إنشاء آلة حاسبة باستخدام",
    slug: "calculator-vue3",
    image: article2,
  },
  {
    title: "Vue3 إنشاء قائمة مهام باستخدام",
    slug: "todo-vue3",
    image: article3,
  },
];

const loading = ref(true);
onMounted(()=>{
  setTimeout(()=>{
    loading.value = false;
  }, 300)
})
</script>

<style scoped>
.blog {
  font-family: "Cairo";
  text-align: center;
}
.title {
  font-size: 2.5rem;
  padding: 1rem 0 1.5rem 0;
}
.articles {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
}
.article {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: 10px;
  border-radius: 12px;
}
.article-img {
  width: 300px;
  border-radius: 12px;
}
.article-title {
  font-size: 1.2rem;
  padding: 8px 0 4px 0;
}
@media (max-width: 600px) {
}
</style>
