<template>
    <section id="banner">
        <div tabindex="-1" class="flex z-50 justify-between items-center px-3 sm:px-4 py-2 sm:py-3 w-full bg-amber-50/90 border-b border-amber-200/50 dark:bg-zinc-800/90 dark:border-zinc-700/50 backdrop-blur-sm">
            <div class="flex items-center justify-center flex-1 gap-2 sm:gap-3">
                <div class="flex items-center gap-1 sm:gap-2">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                    <span class="hidden sm:inline text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400">Limited Spots</span>
                </div>
                <p class="text-center text-xs sm:text-sm md:text-base font-medium text-amber-700 dark:text-amber-300">
                    🎓 <span class="hidden xs:inline">Opening limited tutoring spots for Fall 2025!</span><span class="xs:hidden">Limited Fall 2025 spots!</span>
                    <a class="font-semibold underline text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 transition-colors duration-300 hover:no-underline ml-1" href="/pricing/">
                        <span class="hidden sm:inline">Sign up today →</span><span class="sm:hidden">Reserve now →</span>
                    </a>
                </p>
            </div>
            <button aria-label="Close" id="close" type="button" class="flex-shrink-0 flex items-center justify-center text-gray-500 hover:bg-white/50 hover:text-gray-700 rounded-lg text-sm p-1.5 sm:p-2 ml-2 sm:ml-3 dark:text-gray-400 dark:hover:bg-gray-600/50 dark:hover:text-white transition-all duration-300 group">
                <svg class="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>  
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