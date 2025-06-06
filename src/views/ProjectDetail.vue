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
  <section id="portfolio" class="pp-content" v-if="project">
    <CloseButton :closeLink="{ name: 'portfolio' }" />
    <div class="portfolio-items">
      <div class="portfolio-item">
        <div class="portfolio-item-thumbnail pp-thumbnail">
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
    </div>
  </section>
</template>

<style scoped>
.pp-content {
  background-color: var(--white-alpha-25);
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 900px;
  width: 100%;
  border: 1px solid var(--white-alpha-40);
  backdrop-filter: var(--backdrop-filter-blur);
  opacity: 1;
}

.pp-thumbnail img {
  border-radius: 1rem;
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
  .pp-content {
    padding: 2rem 0px 0px 0px;
  }
}
</style>
