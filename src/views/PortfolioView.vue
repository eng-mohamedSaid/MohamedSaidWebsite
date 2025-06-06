<script setup>
import { projects } from "@/data/data.js";
</script>

<template>
  <section id="portfolio">
    <h2 class="section-title">recent work</h2>

    <div class="portfolio-items">
      <div class="portfolio-item" v-for="(project, idx) in projects" :key="idx">
        <div class="portfolio-item-thumbnail">
          <img :src="project.img" :alt="project.alt" />
        </div>
        <h3>{{ project.title }}</h3>
        <RouterLink
          :to="{ name: 'ProjectDetail', params: { id: project.id } }"
          class="btn view-project-btn"
        >
          view project
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  margin: 1rem 0;
}
.portfolio-item {
  margin: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.portfolio-item h3 {
  font-size: 1.4rem;
  text-transform: capitalize;
  text-align: center;
  margin: 0.5rem 0;
}
.portfolio-item-thumbnail {
  padding: 10px;
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  border-radius: 1rem;
  flex: 30%;
  display: flex;
  overflow: hidden;
}
.portfolio-item-thumbnail img {
  border-radius: 1rem;
  max-width: 100%;
  height: auto;
}
.portfolio-item-details {
  display: none;
}

@media (max-width: 767px) {
  .portfolio-item {
    margin: 1rem 0;
  }
  .portfolio-item h3 {
    font-size: 1.2rem;
  }
  .portfolio-items {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 575px) {
  .portfolio-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
