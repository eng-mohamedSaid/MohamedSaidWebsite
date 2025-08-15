<script setup>
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
    <div class="nav-header">
      <button
        class="nav-toggler"
        type="button"
        @click="toggleNav"
        aria-label="Toggle navigation"
      >
        <span :class="{ active: modelValue }"></span>
      </button>
      <RouterLink to="/">
        <img
          @click="closeNav"
          class="logo"
          src="@/assets/img/logo.png"
          alt="logo"
        />
      </RouterLink>
    </div>

    <section class="nav-inner" v-show="modelValue">
      <RouterLink class="nav-item link-item" to="/" @click="closeNav"
        >Home</RouterLink
      >
      <RouterLink class="nav-item link-item" to="/projects" @click="closeNav"
        >Projects</RouterLink
      >
      <RouterLink class="nav-item link-item" to="/contact" @click="closeNav"
        >Contact</RouterLink
      >
      <RouterLink class="nav-item link-item" to="/articles" @click="closeNav"
        >Blog</RouterLink
      >
    </section>
  </header>
</template>

<style scoped>
.header {
  max-width: 1300px;
  margin: 0 auto;
}
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  width: 200px;
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

.nav-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

@media (max-width: 600px) {
  .logo {
    width: 120px;
  }
  .nav-toggler {
    width: 40px;
    height: 40px;
  }
  .nav-toggler span {
    height: 1.5px;
    width: 18px;
  }
  .nav-toggler span::before {
    transform: translateY(-6px);
  }
  .nav-toggler span::after {
    right: 0;
    transform: translateY(6px);
  }
}
</style>
