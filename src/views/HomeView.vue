<script setup>
import { RouterLink } from "vue-router";
import About from "@/components/About.vue";
</script>

<template>
  <section class="wrapper">
    <div class="home-section">
      <div class="home-text">
        <p>Hello , I 'm</p>
        <h1>Mohamed Said</h1>
        <h2>Frontend developer</h2>
        <div class="btns">
          <RouterLink to="projects" class="btn">Projects</RouterLink>
          <RouterLink to="articles" class="btn">Blog</RouterLink>
          <a
            href="https://docs.google.com/document/d/1OcavfO8XJ7q3Q5Efn7UbkEj08XX4R7WxYeQJITmoPpU/edit?usp=sharing"
            class="btn"
            target="_blank"
            >CV</a
          >
        </div>
      </div>

      <img class="img-box" src="@/assets/img/my-photo2.webp" alt="my-logo" />
    </div>
    <about></about>
  </section>
</template>

<style scoped>
.wrapper,
.home-section {
  display: flex;
  align-items: center;
}
.wrapper {
  flex-direction: column;
}
.home-section {
  height: 600px;
  justify-content: space-between;
  width: 100%;
}

.home-text {
  width: 50%;
}
.home-text p {
  font-size: 1.5rem;
}
.home-text h1 {
  font-size: 2rem;
  cursor: pointer;
  color: var(--main-color);
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff,
    0 0 120px #fff, 0 0 160px #fff;
}

.home-text h2 {
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 300;
  margin: 0 0 2rem;
}
.img-box {
  width: 360px;
  height: 360px;
  object-fit: cover;
  object-position: center top;
  background-color: var(--white-alpha-25);
  border-radius: 50%;
  border: 8px solid var(--white-alpha-25);
  margin: auto;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 900px) {
  .home-section {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .home-text {
    text-align: center;
    width: 100%;
  }

  .img-box {
    width: 200px;
    height: 200px;
    margin: 0;
  }
  .btns {
    justify-content: center;
  }
}
</style>
