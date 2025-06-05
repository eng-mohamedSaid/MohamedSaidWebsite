<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
const isNavActive = ref(false);
</script>

<template>
  <Navbar v-model="isNavActive" />
  <div class="main">
    <RouterView v-show="!isNavActive" />
  </div>
</template>
