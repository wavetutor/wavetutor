<template>
    <section id="banner">
        <div tabindex="-1" class="flex z-50 justify-between items-start px-4 py-1 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 dark:bg-zinc-800 text-center">
            <p class="text-center mx-auto text-md font-bold text-blue-400 dark:text-blue-500">We're opening limited tutoring spots for Fall 2025! <a class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" href="/pricing/">Sign up today.</a></p>
            <button aria-label="Close" id="close" type="button" class="flex items-center text-gray-400 hover:bg-gray-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
        </div>
    </section>
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    onMounted(() => {
        const banner = document.getElementById("banner");
        const close = document.getElementById("close");
        close?.addEventListener("click", function() {
            banner?.classList.add("hidden");
            localStorage.setItem("seenBanner", "true");
        });
        if(localStorage.getItem("seenBanner") === null) {
        localStorage.setItem("seenBanner", "false");
        }
        if (localStorage.getItem("seenBanner") === "true") {
            document.getElementById("banner")?.classList.add("hidden");
        }
    });
</script>