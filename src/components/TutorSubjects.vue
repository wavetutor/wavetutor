<template>
    <div class="shadow-lg rounded-lg p-5 pl-6 m-3 bg-cyan-800 dark:bg-cyan-950">
        <p class="mb-2 text-white font-semibold">{{ subject }}</p>
        <ul style="list-style-type: disc;" class="ml-3 text-white">
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
