<template>
  <Navbar />
  <Banner />

  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>

  <footer>
    <Footer />
  </footer>
</template>
<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
</script>