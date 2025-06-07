<script setup></script>
<template>
  <div class="bg-circles">
    <div v-for="index in 5" :key="index" :class="`circle-${index}`"></div>
  </div>
</template>

<style scoped>
.bg-circles {
  position: fixed;
  top: 0;
  height: 100%;
  max-width: 1300px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
}
.bg-circles div {
  position: absolute;
  border-radius: 50%;
}
.bg-circles .circle-1 {
  left: 30%;
  top: 20%;
  height: 3rem;
  width: 3rem;
  background-color: rgb(88, 88, 204);
  opacity: 0.2;
  animation: bounceTop 5s ease-in-out infinite;
}
.bg-circles .circle-2 {
  left: 40%;
  top: 70%;
  height: 4rem;
  width: 4rem;
  background-color: rgb(231, 173, 231);
  opacity: 0.4;
  animation: zoomInOut 8s linear infinite;
}
.bg-circles .circle-3 {
  height: 120px;
  width: 120px;
  background-color: var(--white);
  top: 40%;
  right: -60px;
  opacity: 0.6;
  animation: zoomInOut 8s linear infinite;
}
.bg-circles .circle-4 {
  height: 50px;
  width: 50px;
  background-color: rgb(247, 224, 183);
  top: 90%;
  left: 1rem;
  opacity: 0.6;
  animation: bounceTop 5s ease-in-out infinite;
}
</style>
