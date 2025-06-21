<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "@/data/data.js";
import CloseButton from "@/components/CloseButton.vue";
const route = useRoute();
const router = useRouter();

const project = ref(null);
onMounted(() => {
  const id = route.params.id;
  project.value = projects.find((project) => project.id === id);
  if (!project.value) {
    router.replace({ name: "home" });
  }
});
</script>

<template>
  <section class="project-details" v-if="project">
    <CloseButton closeLink="/projects" />
    <div class="portfolio-item-thumbnail">
      <img :src="project.img" :alt="project.alt" />
    </div>
    <h3 class="subtitle">{{ project.title }}</h3>

    <p class="description">{{ project.description }}</p>

    <ul class="general-info">
      <li>
        Created - <span>{{ project.created }}</span>
      </li>
      <li>
        technologies used - <span>{{ project.technologies }}</span>
      </li>
      <li>
        Role - <span>{{ project.role }}</span>
      </li>
    </ul>

    <div class="btns-container">
      <a class="btn" :href="project.online" target="_blank">Demo</a>
      <a class="btn" :href="project.github" target="_blank">Github</a>
    </div>
  </section>
</template>

<style scoped>
.project-details {
  padding: 4.5rem 1.5rem;
}
.portfolio-item-thumbnail img {
  border-radius: 1rem;
  width: 100%;
  max-height: 600px;
  height: 20%;
  object-fit: cover;
}
.description {
  margin-bottom: 1rem;
}
.general-info li {
  list-style: none;
  margin-bottom: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
}
.general-info li span {
  font-weight: 300;
}

.btns-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}

@media (max-width: 600px) {
  .project-details {
    padding: 3.5rem 1rem;
  }
  .btns-container {
    justify-content: space-between;
  }
}
</style>
