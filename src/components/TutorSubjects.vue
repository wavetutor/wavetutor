<template>
    <div class="shadow-lg rounded-lg p-5 py-6 m-2 dark:bg-zinc-800 bg-zinc-100">
        <p class="mb-2 text-xl text-primary font-semibold">{{ subject }}</p>
        <ul style="list-style-type: disc;" class="ml-3 dark:text-white text-gray-950">
            <li v-for="topic in topics" :key="topic">{{ topic }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts">

defineProps<{
    subject: string,
    topics: string[],
}>();
</script>
