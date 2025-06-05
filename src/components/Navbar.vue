<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const toggleNav = () => {
  emit("update:modelValue", !props.modelValue);
};

const closeNav = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <header :class="{ active: modelValue }" class="header">
    <div class="container">
      <div class="row flex-end">
        <button
          class="nav-toggler"
          type="button"
          @click="toggleNav"
          aria-label="Toggle navigation"
        >
          <span :class="{ active: modelValue }"></span>
        </button>
      </div>
      <nav v-show="modelValue" class="nav">
        <div class="nav-inner">
          <RouterLink class="nav-item link-item" to="/" @click="closeNav"
            >Home</RouterLink
          >
          <RouterLink class="nav-item link-item" to="/about" @click="closeNav"
            >About</RouterLink
          >
          <RouterLink
            class="nav-item link-item"
            to="/portfolio"
            @click="closeNav"
            >Portfolio</RouterLink
          >
          <RouterLink class="nav-item link-item" to="/contact" @click="closeNav"
            >Contact</RouterLink
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 100%;
  z-index: 1;
}

.nav-toggler {
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
  background-color: var(--main-color);
  position: relative;
  transition: background-color 0.3s ease;
}
.header.active .nav-toggler span {
  background-color: transparent;
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
  transform: translateY(-8px);
}
.header.active .nav-toggler span::before {
  transform: rotate(45deg);
}
.nav-toggler span::after {
  right: 0;
  transform: translateY(8px);
}
.header.active .nav-toggler span::after {
  transform: rotate(-45deg);
}
.header:not(.active) .nav-toggler:hover span::after,
.header:not(.active) .nav-toggler:hover span::before {
  width: 50%;
}
/* nav */
.nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  overflow-y: auto;
  visibility: hidden;
}
.header.active .nav {
  visibility: visible;
}
.nav-inner {
  min-height: 90vh;
  max-width: 1200px;
  margin: auto;
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  backdrop-filter: var(--backdrop-filter-blur);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}
.header.active .nav-inner {
  opacity: 1;
}
.nav-item {
  font-size: 1.7rem;
  text-transform: capitalize;
  color: var(--blue-dark);
  display: block;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  position: relative;
}
.nav-item:hover {
  color: var(--main-color);
}
.nav-item::before {
  content: "";
  width: 0%;
  height: 50%;
  right: 0;
  bottom: 0;
  background-color: var(--white-alpha-25);
  position: absolute;
  z-index: -1;
  transition: width 0.3s ease;
}
.nav-item:hover:before {
  width: 100%;
}

@media (max-width: 380px) {
  .header {
    right: 0px;
    top: 0px;
  }
}
</style>
