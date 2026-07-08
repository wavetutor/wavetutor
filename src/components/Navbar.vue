<template>
  <nav class="bg-paper/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center group">
        <img src="/icons/icon-192.png" class="h-8 w-8 mr-3 transition-transform duration-300 group-hover:scale-105" alt="Wavetutor logo" />
        <span class="self-center text-2xl font-display font-semibold whitespace-nowrap text-stone-900 dark:text-stone-50">
          Wave Tutor
        </span>
      </router-link>

      <div class="flex md:order-2 items-center space-x-3">
        <a href="/signup/" class="hidden sm:block">
          <button type="button" class="btn-primary text-sm px-5 py-2.5">
            Sign Up
          </button>
        </a>

        <button @click="navbarExpanded = !navbarExpanded" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:text-stone-400 dark:hover:bg-stone-800 dark:focus:ring-stone-700 transition-colors" aria-controls="navbar-cta" :aria-expanded="navbarExpanded">
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger icon with animation -->
          <div class="relative">
            <div class="w-5 h-0.5 bg-current transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': navbarExpanded }"></div>
            <div class="w-5 h-0.5 bg-current mt-1 transition-all duration-300" :class="{ 'opacity-0': navbarExpanded }"></div>
            <div class="w-5 h-0.5 bg-current mt-1 transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': navbarExpanded }"></div>
          </div>
        </button>
      </div>

      <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" :class="{ 'hidden': !navbarExpanded }">
        <ul @click="navbarExpanded = false" class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-stone-200 rounded-xl bg-sand/70 backdrop-blur-md md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-stone-800/70 md:dark:bg-transparent dark:border-stone-700">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/tutors/">Our Tutors</NavbarLink>
          <NavbarLink to="/pricing/">Pricing</NavbarLink>
          <NavbarLink to="/contact/">Contact</NavbarLink>

          <!-- Mobile-only sign up button -->
          <li class="mt-4 md:hidden">
            <a href="/signup/" class="btn-primary w-full">
              Sign Up
            </a>
          </li>
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
