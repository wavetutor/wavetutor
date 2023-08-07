<template>
    <main>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">This isn't like <span class="pb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary  to-blue-700 block">other tutoring.</span></h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Enter Wave Tutor: conversational tutoring to propel your learning like never before.</p>
                <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <router-link to="#" class="transition-colors inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:ring-primary/50">
                        Sign up
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </router-link>
                    <router-link to="/pricing/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Pricing
                    </router-link>  
                </div>
            </div>
        </section>
        <section class="bg-white dark:bg-gray-900">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image">
                <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image">
                <div class="mt-4 md:mt-0">
                    <!-- <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"><span class="line-through decoration-red-500">One</span> <span class="text-primary dark:text-secondary">two</span> dedicated teachers.</h2> -->
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your own <span class="text-primary">dedicated</span> tutor.</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Every student is assigned a tutor who's going to teach and guide them through their learning journey.</p>
                    <router-link to="/tutors/" class="inline-flex items-center text-white bg-primary hover:bg-primary/60 focus:ring-4 focus:ring-primary/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        See our tutors
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </router-link>
                </div>
            </div>
        </section>
        <FeaturesSection />
        <CreditsSection />
        <ComingSoonSection />
    </main>
</template>

<script setup lang="ts">
import FeaturesSection from "../components/FeaturesSection.vue";
import CreditsSection from "../components/CreditsSection.vue";
import ComingSoonSection from "../components/ComingSoonSection.vue";
</script>