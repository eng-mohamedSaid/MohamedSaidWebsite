<script setup>
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import CirclesBackground from "./components/CirclesBackground.vue";
import Loader from "@/components/Loader.vue";

const route = useRoute();
const isNavActive = ref(false);
const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 5000);
</script>

<template>
  <CirclesBackground />
  <div class="main">
    <Loader v-if="isLoading" />
    <Navbar v-model="isNavActive" v-if="!route.meta.hideNavbar" />
    <RouterView v-show="!isNavActive" />
  </div>
</template>
