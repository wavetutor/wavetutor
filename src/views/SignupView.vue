<template>
  <div class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper dark:bg-stone-900 px-6">
    <!-- Logo with spinning ring -->
    <div class="relative flex items-center justify-center w-28 h-28 mb-8">
      <div class="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
      <img :src="Logo" alt="Wave Tutor logo" class="w-16 h-16 rounded-full" />
    </div>
    <p class="font-display text-2xl font-semibold text-stone-900 dark:text-white">
      Redirecting to signup…
    </p>
    <p class="mt-2 text-stone-500 dark:text-stone-400">
      Hang tight, taking you to our signup form.
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Logo from "../assets/logo.svg";

const SIGNUP_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSehqFMbQfHT-p-fqBv1kgvbQaFU4MbHoRqs1XIyVn-U0btlmQ/viewform";

onMounted(() => {
  setTimeout(() => {
    window.location.href = SIGNUP_FORM_URL;
  }, 1200);
});
</script>
