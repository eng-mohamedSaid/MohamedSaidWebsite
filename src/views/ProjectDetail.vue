<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "@/data/data.js";
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
  <section id="portfolio" class="project-details" v-if="project">
    <div class="portfolio-item">
      <div class="portfolio-item-thumbnail">
        <img :src="project.img" :alt="project.alt" />
      </div>
      <h3 class="pp-header">{{ project.title }}</h3>
      <div class="pp-body">
        <div class="description">
          <p>{{ project.description }}</p>
        </div>
        <div class="general-info">
          <ul>
            <li>
              Created - <span>{{ project.created }}</span>
            </li>
            <li>
              technologies used - <span>{{ project.technologies }}</span>
            </li>
            <li>
              Role - <span>{{ project.role }}</span>
            </li>
            <li>
              view Online -
              <span>
                <a :href="project.online" target="_blank">www.domain.com</a>
              </span>
            </li>
            <li>
              Github -
              <span>
                <a :href="project.github" target="_blank">Code</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-details {
  padding: 1.5rem;
}
.portfolio-item-thumbnail img {
  border-radius: 1rem;
  width: 100%;
  max-height: 600px;
  height: 20%;
  object-fit: cover;
}
.pp-header {
  font-size: 1.3rem;
  text-transform: capitalize;
  margin: 1rem 0;
}
.description {
  margin-bottom: 1rem;
}
.general-info li {
  margin-bottom: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
}
.general-info li span {
  font-weight: 300;
}
.general-info li a {
  text-transform: lowercase;
  color: var(--main-color);
}

.portfolio-item {
  margin: 1.3rem;
}

@media (max-width: 600px) {
  .project-details {
    padding: 2rem 0px 0px 0px;
  }
}
</style>
