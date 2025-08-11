<template>
  <nav class="bg-white/80 backdrop-blur-md border-gray-200 dark:bg-zinc-900/80 dark:backdrop-blur-md sticky top-0 z-50 shadow-sm">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center group">
        <img src="/icons/icon-192.png" class="h-8 w-8 mr-3 group-hover:scale-110 transition-transform duration-300" alt="Wavetutor logo" />
        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Wave Tutor
        </span>
      </router-link>
      
      <div class="flex md:order-2 items-center space-x-3">
        <a href="/signup/" class="hidden sm:block">
          <button type="button" class="group text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary focus:ring-4 focus:outline-none focus:ring-primary/50 transition-all duration-300 font-semibold rounded-xl text-sm px-6 py-3 text-center transform hover:-translate-y-0.5 hover:shadow-lg">
            <span>Sign Up</span>
            <svg class="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>
        </a>
        
        <button @click="navbarExpanded = !navbarExpanded" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors" aria-controls="navbar-cta" :aria-expanded="navbarExpanded">
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
        <ul @click="navbarExpanded = false" class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50/80 backdrop-blur-md md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-zinc-800/80 md:dark:bg-transparent dark:border-gray-700">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/tutors/">Our Tutors</NavbarLink>
          <NavbarLink to="/pricing/">Pricing</NavbarLink>
          <NavbarLink to="/contact/">Contact</NavbarLink>
          
          <!-- Mobile-only sign up button -->
          <li class="mt-4 md:hidden">
            <a href="/signup/" class="block w-full text-center text-white bg-gradient-to-r from-primary to-secondary rounded-xl py-3 font-semibold hover:from-secondary hover:to-primary transition-all duration-300">
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