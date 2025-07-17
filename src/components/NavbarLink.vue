<template>
  <li>
      <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }">
          <a class="block py-2 pl-3 pr-4 rounded md:p-0 transition-colors"
              v-bind="$attrs" :href="href" @click="navigate"
              :class="{
                  'text-white bg-primary md:bg-transparent md:text-primary': isActive,
                  'text-zinc-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700': !isActive
              }">
              <slot />
          </a>
      </router-link>
  </li>
</template>
<script setup lang="ts">
// @ts-nocheck
import { RouterLink } from 'vue-router';

defineProps(RouterLink.props)
</script>