<template>
    <main class="bg-white dark:bg-zinc-900">

        <section class="bg-white dark:bg-zinc-900">
    <div class="grid max-w-screen-xl lg:h-[70vh] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 mb-10">
            <h1 class="text-center lg:text-left mb-4 text-5xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-7xl dark:text-white">This isn't like <span class="pb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary  to-blue-700 block">other tutoring.</span></h1>
            <p class=" text-center lg:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Enter Wave Tutor: conversational tutoring to propel learning like never before.</p>
            <div class="text-center lg:text-left">
            
            <a href="https://forms.gle/tXpQbQdPqAnfebT78" class="inline-flex justify-center items-center py-5 px-6 text-xl font-medium text-center text-white transition-all duration-600 rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:ring-primary/50">
                Sign up today!
            </a>
            <router-link to="/pricing/" class="inline-flex items-center justify-center py-5 px-6 mr-3 text-xl font-medium text-center dark:text-white text-gray-800 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:underline hover:text-primary transition-all hover:ml-2 duration-200">
                View Pricing
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </router-link> 
        </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center mb-10">
            <img :src="Logo" alt="Wave Tutor Logo" class="rounded-full h-80 w-80 shadow-2xl shadow-primary" style="  outline: 8px solid white;outline-offset: -8px;">
        </div>                
    </div>
</section>
<section class="bg-gray-100 dark:bg-zinc-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h2 class="mb-4 sm:text-5xl text-3xl font-extrabold text-zinc-900 dark:text-white [text-wrap:balance]">
  For almost <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">two years</span>,
  Wave Tutor has <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">educated</span>
  and <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">inspired</span>
  the next generation of students with <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">personalized education</span>.
</h2>

    </div>
</section>


<section class="bg-white dark:bg-zinc-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-xl font-medium text-zinc-900 dark:text-white">"Wave Tutor is a great service for online tutoring. Our son Varun, 13, has been taking Math and Language Arts from them since August 2023. He is doing online flex education because of his medical treatment. Wave Tutor has helped him keep up with school and ensure he is not losing out on opportunities he would normally get from in-person school. He likes working with Vedanti and Nikhil, who are patient, friendly and knowledgeable. They are also flexible and accommodating with his schedule and needs. We highly recommend Wave Tutor to anyone."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" :src="JyotiTestImg" alt="Jyoti Varma, and family">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 text-sm font-medium text-zinc-900 dark:text-white">Suraj & Jyoti Varma</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Math and English since August 2023</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
        <section>
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full border-gray-800 border-4 rounded-lg dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image">
                <img class="w-full hidden dark:block border-white border-4 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image">
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">Your own <span class="text-primary">dedicated</span> tutor.</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Every student is assigned a tutor who's going to teach and guide them through their learning journey.</p>
                    <router-link to="/tutors/" class="inline-flex items-center text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-primary/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        See our tutors
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </router-link>
                </div>
            </div>
        </section>
        <FeaturesSection />
        <CreditsSection />
    </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import FeaturesSection from "../components/FeaturesSection.vue";
import CreditsSection from "../components/CreditsSection.vue";
import Logo from "../assets/logo.svg";
import JyotiTestImg from "../assets/jyoti-test.jpg";
</script>
