<template>
  <li>
      <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }">
          <a class="relative block py-2 pl-3 pr-4 rounded-lg md:rounded-none md:p-3 transition-all duration-300 group"
              v-bind="$attrs" :href="href" @click="navigate"
              :class="{
                  'text-white bg-primary md:bg-transparent md:text-primary md:font-bold': isActive,
                  'text-zinc-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:font-medium': !isActive
              }">
              <span class="relative z-10">
                <slot />
              </span>
              <!-- Active indicator for desktop -->
              <div v-if="isActive" class="hidden md:block absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <!-- Hover indicator for desktop -->
              <div v-else class="hidden md:block absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-300"></div>
          </a>
      </router-link>
  </li>
</template>
<script setup lang="ts">
// @ts-nocheck
import { RouterLink } from 'vue-router';

defineProps(RouterLink.props)
</script>