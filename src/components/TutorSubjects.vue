<template>
    <div>
        <p class="mb-2 text-white font-semibold">{{ subject }}</p>
        <ul style="list-style-type: disc;">
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
