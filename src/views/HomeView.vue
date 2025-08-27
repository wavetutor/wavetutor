```vue
<template>
  <main class="bg-white dark:bg-zinc-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-white via-blue-50 to-primary/5 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative grid max-w-screen-xl lg:h-[75vh] px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 mb-10">
          <!-- Trust indicators -->
          

          <h1 class="text-center lg:text-left mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white">
            This isn't like
            <span class="relative">
              <span class="block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-blue-700">
                other tutoring.
              </span>
              <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 animate-pulse"></div>
            </span>
          </h1>
          
          <p class="text-center lg:text-left max-w-2xl mb-8 font-medium text-gray-600 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-300 leading-relaxed">
            Wave Tutor provides <span class="font-bold text-primary dark:text-blue-400">personalized, conversational tutoring</span> to propel learning like never before.
          </p>
          
          <div class="text-center lg:text-left space-y-4 sm:space-y-0 sm:space-x-0 sm:flex sm:flex-col lg:flex-row sm:items-center lg:items-start lg:space-x-4">
            <a
              href="/signup/"
              class="group inline-flex justify-center items-center py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:-translate-y-1 w-full sm:w-auto">
              <span>Sign Up Today</span>
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
            <router-link
              to="/pricing/"
              class="group inline-flex items-center justify-center py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10 w-full sm:w-auto mt-3 lg:mt-0">
              View Pricing
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </router-link>
          </div>
        </div>
        
        <div class="hidden lg:flex lg:col-span-5 justify-center items-center mb-10 lg:mt-0">
          <div class="relative">
            <!-- Floating animation elements -->
                        <img
              :src="Logo"
              alt="Wave Tutor Logo"
              class="relative rounded-full h-80 w-80 shadow-2xl shadow-primary/30 transform hover:scale-105 transition-transform duration-500"
              style="outline: 8px solid white; outline-offset: -8px;"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats / Milestone Section -->
    <section class="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 py-16">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="relative max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <!-- Stats grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="group bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-4xl font-bold text-primary mb-2">2+</div>
            <div class="text-gray-600 dark:text-gray-300 font-medium">Years in Operation</div>
          </div>
          <div class="group bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-4xl font-bold text-primary mb-2">100+</div>
            <div class="text-gray-600 dark:text-gray-300 font-medium">Sessions Completed</div>
          </div>
          <div class="group bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-4xl font-bold text-primary mb-2">20+</div>
            <div class="text-gray-600 dark:text-gray-300 font-medium">Subjects Offered</div>
          </div>
        </div>

        <h2 class="mb-8 sm:text-4xl text-3xl font-extrabold text-zinc-900 dark:text-white leading-tight [text-wrap:balance]">
          For
          <span class="relative">
            <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">two years</span>
          </span>,
          Wave Tutor has
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">educated</span>
          students from
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">across the United States</span>
          with
          <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-blue-700">personalized education</span>.
        </h2>
      </div>
    </section>

    <!-- Testimonial Section -->
    <!-- Testimonial Section -->
    <section class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 py-16">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="mx-auto mb-12 max-w-screen-md lg:mb-16 text-center">
          <h2 class="mb-6 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
            What Families Are Saying
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Real stories from families across the country who trust Wave Tutor
          </p>
        </div>
        
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Original Testimonial -->
          <div class="relative bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <!-- Quote icon -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 27">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
              </svg>
            </div>
            
            <blockquote class="mb-6">
              <p class="text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed">
                "Wave Tutor is a great service for online tutoring. Our son Varun, 13, has been taking Math and Language Arts from them since August 2023. He is doing online flex education because of his medical treatment. Wave Tutor has helped him keep up with school and ensure he is not losing out on opportunities. He likes working with Vedanti and Nikhil, who are patient, friendly and knowledgeable."
              </p>
            </blockquote>
            
            <div class="flex items-center">
              <img class="w-12 h-12 rounded-full border-2 border-primary" :src="JyotiTestImg" alt="Jyoti V., and family" />
              <div class="ml-4">
                <div class="font-semibold text-zinc-900 dark:text-white">Suraj & Jyoti V.</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Oregon • Math and English since August 2023</div>
              </div>
            </div>
          </div>

          <!-- Second Testimonial -->
          <div class="relative bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <!-- Quote icon -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 27">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
              </svg>
            </div>
            
            <blockquote class="mb-6">
              <p class="text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed">
                "My son started taking math lessons from Wave Tutor since summer of this year. In 2 months, he has improved a lot in his math skills. We've been very fortunate to have a talented high school student, guiding my son through complex math concepts. Aaron's patience, depth of understanding, and ability to explain advanced topics have been very helpful."
              </p>
            </blockquote>
            
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center border-2 border-primary">
                <span class="text-white font-semibold text-lg">B</span>
              </div>
              <div class="ml-4">
                <div class="font-semibold text-zinc-900 dark:text-white">Bulbul G.</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Texas • Math since May 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    <!-- Key Features / Example Session Section -->
    <!-- Key Features / Example Session Section -->
    <section class="bg-white dark:bg-zinc-900 py-16">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-12 lg:mb-16">
          <h2 class="mb-6 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
            Why Choose Wave Tutor?
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We're not just another tutoring service. Our approach is designed around what actually works for students.
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- 1-on-1 Tutoring -->
          <div class="group relative bg-gray-50 dark:bg-zinc-800 p-8 rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:shadow-lg">
            <div class="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-user-graduate text-white text-2xl"></i>
            </div>
            <h3 class="mb-4 text-xl font-bold text-zinc-900 dark:text-white">1-on-1 Personalized</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              No generic curriculums. Every session is tailored to your student's unique learning style and goals.
            </p>
          </div>

          <!-- Custom Materials -->
          <div class="group relative bg-gray-50 dark:bg-zinc-800 p-8 rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:shadow-lg">
            <div class="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-secondary to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-book-open text-white text-2xl"></i>
            </div>
            <h3 class="mb-4 text-xl font-bold text-zinc-900 dark:text-white">Custom Materials</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Tailored resources and problem sets that match each student's goals and learning habits.
            </p>
          </div>

          <!-- Concept Checks -->
          <div class="group relative bg-gray-50 dark:bg-zinc-800 p-8 rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:shadow-lg">
            <div class="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-check-circle text-white text-2xl"></i>
            </div>
            <h3 class="mb-4 text-xl font-bold text-zinc-900 dark:text-white">Concept Mastery</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              We ensure understanding before moving on, so students can practice with confidence.
            </p>
          </div>

          <!-- Personalized Homework -->
          <div class="group relative bg-gray-50 dark:bg-zinc-800 p-8 rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:shadow-lg">
            <div class="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-tasks text-white text-2xl"></i>
            </div>
            <h3 class="mb-4 text-xl font-bold text-zinc-900 dark:text-white">Smart Homework</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Written from scratch and personalized to reinforce session content effectively.
            </p>
          </div>
        </div>

        <!-- Call-to-action -->
        <div class="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Ready to experience the difference?
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join students across the U.S. who have transformed learning with Wave Tutor.
          </p>
          <a
            href="/signup/"
            class="inline-flex items-center justify-center py-3 px-8 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Get Started Today
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </section>        <section class="bg-white dark:bg-zinc-900 py-8">
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
          href="https://forms.gle/pezRaRBtRWSqkjEo7"
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
import rishabh from "../assets/credits/rishabh.png";
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
