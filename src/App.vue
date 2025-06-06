<script setup>
import { ref } from "vue";
import {  RouterView, useRoute } from "vue-router";
import Navbar from "@/components/Navbar.vue";
const isNavActive = ref(false);
const route = useRoute();
</script>

<template>
  <Navbar v-model="isNavActive" v-if="!route.meta.hideNavbar" />
  <div class="main">
    <RouterView v-show="!isNavActive" />
  </div>
</template>
