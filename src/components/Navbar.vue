<template>
  <nav class="bg-white border-gray-200 dark:bg-zinc-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <router-link to="/" class="flex items-center">
      <img src="/icons/icon-192.png" class="h-8 w-8 mr-3" alt="Wavetutor logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wave Tutor</span>
    </router-link>
    <div class="flex md:order-2">
        <a href="https://forms.gle/tXpQbQdPqAnfebT78"><button type="button" class="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary/50 transition-colors font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Sign up</button></a>
        <button @click="navbarExpanded = !navbarExpanded" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" :class="{ 'hidden': !navbarExpanded }">
      <ul @click="navbarExpanded = !navbarExpanded" class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-gray-700">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/tutors/">Tutors</NavbarLink>
        <NavbarLink to="/pricing/">Pricing</NavbarLink>
        <NavbarLink to="/contact/">Contact</NavbarLink>
      </ul>
    </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";
import NavbarLink from "./NavbarLink.vue";
const navbarExpanded = ref(false);
</script>