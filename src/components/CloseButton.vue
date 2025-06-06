<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  closeLink: {
    type: [String, Object],
    required: true,
  },
});
</script>
<template>
  <RouterLink class="nav-toggler" :to="props.closeLink">
    <span></span>
  </RouterLink>
</template>

<style scoped>
.nav-toggler {
  position: absolute;
  right: -10px;
  top: -10px;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  z-index: 1;
  transition: opacity 0.3s ease-in-out;
}
.nav-toggler span {
  height: 2px;
  width: 24px;
  position: relative;
  transition: background-color 0.3s ease;
}
.nav-toggler span::after,
.nav-toggler span::before {
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  position: absolute;
  transition: all 0.3s ease;
}

.nav-toggler span::before {
  left: 0;
  transform: rotate(45deg);
}

.nav-toggler span::after {
  right: 0;
  transform: translateY(8px);
}
.nav-toggler span::after {
  transform: rotate(-45deg);
}
</style>
