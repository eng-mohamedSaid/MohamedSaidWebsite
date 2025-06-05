<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="home-section align-item-center" id="home">
    <div class="container">
      <div class="row align-item-center">
        <div class="home-text">
          <p>Hello , I 'm</p>
          <h1>Mohamed Said</h1>
          <h2>Frontend developer</h2>
          <RouterLink to="about" class="btn link-item"
            >more about me</RouterLink
          >
          <RouterLink to="portfolio" class="btn link-item"
            >Portfolio</RouterLink
          >
        </div>

        <div class="home-img">
          <div class="img-box">
            <img src="@/assets/img/my-photo.png" alt="my-logo" />
          </div>

          <!-- <div class="img-box">
            <img src="@/assets/img/my-logo2.png" alt="my-logo" />
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  padding: 120px 0;
}
.home-section.active {
  display: flex;
}
.home-text,
.home-img {
  width: 50%;
  padding: 1rem;
}
.home-text p {
  font-size: 1.5rem;
}
.home-text h1 {
  font-size: 2rem;
  cursor: pointer;
}
.home-text h1 {
  transition: 0.5s;
}
.home-text h1:hover {
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
.home-text .btn {
  margin: 0 1rem 1rem 0;
}
.home-img .img-box {
  max-width: 360px;
  background-color: var(--white-alpha-25);
  border-radius: 50%;
  border: 8px solid var(--white-alpha-25);
  margin: auto;
}
.home-img .img-box img {
  width: 100%;
  border-radius: 50%;
}

@media (max-width: 991px) {
  .home-text,
  .home-img {
    width: 100%;
  }
  .home-text {
    text-align: center;
  }
  .home-img {
    order: -1;
  }
  .home-img .img-box {
    max-width: 300px;
  }
  .home-text .btn {
    margin: 0 2rem 2rem;
  }
}
</style>
