<template>
  <div>
    <component :is="as === 'group' ? 'p' : 'label'" :id="`${id}-label`" :for="as === 'group' ? undefined : id" class="mb-1.5 block text-sm font-semibold text-stone-800 dark:text-stone-100">
      {{ label }} <span v-if="optional" class="font-normal text-stone-500">(optional)</span>
    </component>
    <slot />
    <p v-if="error" class="mt-1 text-sm text-rose-600 dark:text-rose-400">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ id: string; label: string; optional?: boolean; error?: string; as?: 'group' }>()
</script>
