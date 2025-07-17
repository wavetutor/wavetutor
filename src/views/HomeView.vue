```vue
<template>
  <main class="bg-white dark:bg-zinc-900">
    <!-- Hero Section -->
    <section class="bg-white dark:bg-zinc-900">
      <div class="grid max-w-screen-xl lg:h-[70vh] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 mb-10">
          <h1 class="text-center lg:text-left mb-4 text-5xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-7xl dark:text-white">
            This isn't like
            <span class="pb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700 block">
              other tutoring.
            </span>
          </h1>
          <p class="text-center lg:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Wave Tutor provides personalized, conversational tutoring to propel learning like never before.
          </p>
          <div class="text-center lg:text-left">
            <a
              href="https://forms.gle/tXpQbQdPqAnfebT78"
              class="inline-flex justify-center items-center py-5 px-6 text-xl font-medium text-white transition-all duration-600 rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:ring-primary/50">
              Sign up today!
            </a>
            <router-link
              to="/pricing/"
              class="inline-flex items-center justify-center py-5 px-6 ml-4 text-xl font-medium text-center text-gray-800 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:underline hover:text-primary transition-all hover:ml-2 duration-200">
              View Pricing
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="hidden lg:flex lg:col-span-5 justify-center items-center mb-10 lg:mt-0">
          <img
            :src="Logo"
            alt="Wave Tutor Logo"
            class="rounded-full h-80 w-80 shadow-2xl shadow-primary"
            style="outline: 8px solid white; outline-offset: -8px;"
          />
        </div>
      </div>
    </section>

    <!-- Stats / Milestone Section -->
    <section class="bg-gray-100 dark:bg-zinc-800 py-8">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h2 class="mb-4 sm:text-5xl text-3xl font-extrabold text-zinc-900 dark:text-white [text-wrap:balance]">
          For
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">two years</span>,
          Wave Tutor has
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">educated</span>
          and
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">inspired</span>
          the next generation of students with
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">personalized education</span>.
        </h2>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-white dark:bg-zinc-900 py-8">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-md lg:mb-16">
          <h2 class="mb-4 text-3xl tracking-tight text-center text-zinc-900 dark:text-white">
            Families across the country love Wave Tutor.
          </h2>
        </div>
        <div class="grid gap-8 md:grid-cols-2">
          <!-- Original Testimonial -->
          <figure class="max-w-screen-md mx-auto text-center">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none">
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-lg text-zinc-900 dark:text-white">
                "Wave Tutor is a great service for online tutoring. Our son Varun, 13, has been taking Math and Language Arts from them since August 2023. He is doing online flex education because of his medical treatment. Wave Tutor has helped him keep up with school and ensure he is not losing out on opportunities he would normally get from in-person school. He likes working with Vedanti and Nikhil, who are patient, friendly and knowledgeable. They are also flexible and accommodating with his schedule and needs. We highly recommend Wave Tutor to anyone."
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" :src="JyotiTestImg" alt="Jyoti V., and family" />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 text-sm font-medium text-zinc-900 dark:text-white">Suraj &amp; Jyoti V.</div>
                <div class="px-3 text-sm font-light text-gray-500 dark:text-gray-400">Math and English since August 2023</div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Oregon</div>
              </div>
            </figcaption>
          </figure>


          <figure class="max-w-screen-md mx-auto text-center">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none">
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-lg text-zinc-900 dark:text-white">
                "My son started taking math lessons from Wave Tutor since summer of this year. In 2 months, he has improved a lot in his math skills. We’ve been very fortunate to have a talented high school student, guiding my son through complex math concepts. Aaron's patience, depth of understanding, and ability to explain advanced topics have been very helpful. My son enjoys challenging math concepts and his confidence in the subject has increased because of him. I wholeheartedly recommend Wave Tutor to any family seeking tutoring support in mathematics."
              </p>
            </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 text-sm font-medium text-zinc-900 dark:text-white">Bulbul G.</div>
                <div class="px-3 text-sm font-light text-gray-500 dark:text-gray-400">Math since May 2025</div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Texas</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Key Features / Example Session Section -->
    <section class="bg-white dark:bg-zinc-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
            Why Wave Tutor?
          </h2>
        </div>
        <div class="grid gap-8 md:grid-cols-2">
          <!-- 1-on-1 Tutoring -->
          <div class="flex flex-col items-center">
            <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-16 lg:w-16 bg-primary">
              <i class="fas fa-chalkboard-teacher w-6 h-6 text-white lg:w-8 lg:h-8"></i>
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">1-on-1 Tutoring</h3>
            <p class="text-gray-500 dark:text-gray-400">
              We don't teach with generic curriculums. We personalize our tutoring content sessions to focus on your student’s unique needs and learning style.
            </p>
          </div>
          <!-- Custom Materials -->
          <div class="flex flex-col items-center">
            <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-16 lg:w-16 bg-primary">
              <i class="fas fa-book w-6 h-6 text-white lg:w-8 lg:h-8"></i>
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Custom Teaching Materials</h3>
            <p class="text-gray-500 dark:text-gray-400">
              We create tailored resources and problem sets that match each student’s goals, engaging their strengths and learning habits.
            </p>
          </div>
          <!-- Concept Checks -->
          <div class="flex flex-col items-center">
            <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-16 lg:w-16 bg-primary">
              <i class="fas fa-check-circle w-6 h-6 text-white lg:w-8 lg:h-8"></i>
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">In-Session Concept Checks</h3>
            <p class="text-gray-500 dark:text-gray-400">
              We ensure your student understands the concepts before they leave each session, so they can practice on their own with confidence.
            </p>
          </div>
          <!-- Personalized Homework -->
          <div class="flex flex-col items-center">
            <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full lg:h-16 lg:w-16 bg-primary">
              <i class="fas fa-pencil-alt w-6 h-6 text-white lg:w-8 lg:h-8"></i>
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Personalized Homework</h3>
            <p class="text-gray-500 dark:text-gray-400">
              All homework is written from scratch and personalized to cover the content learned in the session, ensuring your student builds on their knowledge effectively.
            </p>
          </div>
        </div>
      </div>
    </section>

        <section class="bg-white dark:bg-zinc-900 py-8">
      <div class="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">Our Team</h2>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-3">
          <div class="text-center text-gray-500 dark:text-gray-400" v-for="person in team" :key="person.name">
            <img class="mx-auto mb-4 w-36 h-36 rounded-full" :src="person.pfp" :alt="person.name" />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{{ person.name }}</h3>
            <p class="mb-2 font-medium text-gray-700 dark:text-gray-300">{{ person.role }}</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li v-if="person.github">
                <a
                  :href="`https://github.com/${person.github}`"
                  class="text-zinc-900 hover:text-zinc-900 dark:hover:text-white dark:text-gray-300"
                  aria-label="GitHub Profile">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Aspiring Tutors Section -->
    <section class="bg-white dark:bg-zinc-900 py-8">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h2 class="mb-4 text-3xl font-extrabold text-zinc-900 dark:text-white">Want to join our team of tutors?</h2>
        <p class="mb-8 text-gray-500 dark:text-gray-400">
          We're always looking for passionate educators. If you're interested in becoming a Wave Tutor, fill out our application form.
        </p>
        <a
          href="https://forms.gle/BwfEq8Y3pscKTz3FA"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center py-3 px-5 font-medium text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:ring-primary/50 transition-all">
          Apply to be a tutor
        </a>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import Logo from "../assets/logo.svg";
import JyotiTestImg from "../assets/jyoti-test.jpg";
import ruhan from "../assets/credits/ruhan.jpeg";
import vedanti from "../assets/credits/vedanti.png";
import nikhil from "../assets/credits/nikhil.jpg";
import rishabh from "../assets/credits/rishabh.jpg";
import aaron from "../assets/credits/aaron.jpg";

// Team members data
const team = shuffle([
  { name: "Ruhan Gupta", role: "Operations Lead", rank: 4, pfp: ruhan, github: "" },
  { name: "Vedanti Patil", role: "Tutor, Marketing Lead", rank: 3, pfp: vedanti, github: "" },
  { name: "Nikhil Gupta", role: "Tutor", rank: 0, pfp: nikhil, github: "" },
  { name: "Rishabh Susarla", role: "Tutor, Growth Lead", rank: 2, pfp: rishabh, github: "" },
  { name: "Aaron Fan", role: "Tutor", rank: 1, pfp: aaron, github: "" }
]).sort((a, b) => b.rank - a.rank);

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length; i > 0; ) {
    const j = Math.floor(Math.random() * i);
    i--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>
```
