<template>
  <main class="grow">
    <!-- Tutors Grid -->
    <section class="bg-paper dark:bg-stone-900 min-h-screen">
      <div class="py-16 px-8 mx-auto max-w-screen-xl lg:py-24 lg:px-12">
        <!-- Header -->
        <div class="mx-auto max-w-screen-md text-center mb-10 lg:mb-14">
          <h2 class="mb-4 font-display text-4xl sm:text-5xl tracking-tight font-semibold text-stone-900 dark:text-white">
            Our Tutors
          </h2>
          <p class="text-lg text-stone-600 dark:text-stone-400">
            Click on a tutor to learn about their qualifications.
          </p>
        </div>

        <!-- Portraits -->
        <div class="flex justify-center mb-16">
          <div class="grid gap-x-10 gap-y-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            <div
              v-for="tutor in tutors"
              :key="tutor.id"
              @click="openTutor(tutor)"
              class="group cursor-pointer flex flex-col items-center text-center"
            >
              <div class="overflow-hidden rounded-3xl transition-transform duration-300 group-hover:scale-105">
                <img
                  :src="tutor.picture"
                  :alt="tutor.name"
                  class="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover rounded-3xl ring-1 ring-stone-200 dark:ring-stone-700 shadow-md group-hover:ring-primary/40 transition-all duration-300"
                />
              </div>
              <h3 class="mt-4 text-lg font-semibold text-stone-900 dark:text-white">{{ tutor.name }}</h3>
              <span class="text-sm text-stone-500 dark:text-stone-400 group-hover:text-primary transition-colors">
                View profile →
              </span>
            </div>
          </div>
        </div>

        <!-- Subjects Offered -->
        <section class="bg-sand dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 py-16 px-6 rounded-2xl">
          <div class="max-w-screen-lg mx-auto text-center">
            <h2 class="mb-4 font-display text-3xl sm:text-4xl tracking-tight font-semibold text-stone-900 dark:text-white">
              Subjects Offered
            </h2>
            <p class="mb-10 text-md tracking-tight text-stone-600 dark:text-stone-300">
              We offer a wide range of subjects and topics for tutoring, and <span class="font-semibold text-stone-900 dark:text-white">more to come soon!</span>
            </p>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-left">
              <div
                v-for="subject in subjects"
                :key="subject.subject"
                class="card p-6"
              >
                <h3 class="text-xl font-semibold mb-3 text-stone-900 dark:text-white">
                  {{ subject.subject }}
                </h3>
                <p class="text-md text-stone-600 dark:text-stone-300">
                  {{ subject.topics.join(', ') }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Fullscreen Profile -->
    <transition name="fade">
      <div
        v-if="selectedTutor"
        class="fixed inset-0 z-50 overflow-y-auto bg-paper dark:bg-stone-900"
      >
        <button
          @click="closeTutor"
          aria-label="Close profile"
          class="fixed top-5 right-5 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-primary hover:bg-stone-200 dark:hover:bg-stone-700 shadow-sm transition-colors"
        >
          <i class="fas fa-times text-lg"></i>
        </button>

        <div class="min-h-full max-w-6xl mx-auto px-5 py-16 sm:px-8 sm:py-20 lg:px-12 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
          <!-- Left: photo, name, bio, subjects -->
          <aside class="lg:w-80 flex-shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <img
              :src="selectedTutor.picture"
              :alt="selectedTutor.name"
              class="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover ring-4 ring-primary/20 shadow-xl mb-6"
            />
            <h3 class="font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white">
              {{ selectedTutor.name }}
            </h3>
            <div class="mt-3 h-1 w-14 rounded-full bg-primary"></div>
            <p class="mt-5 text-stone-600 dark:text-stone-300 leading-relaxed">
              {{ selectedTutor.bio }}
            </p>
            <div class="mt-6 w-full">
              <p class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">Teaches</p>
              <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span
                  v-for="s in selectedTutor.subjects"
                  :key="s"
                  class="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                >
                  {{ s }}
                </span>
              </div>
            </div>
          </aside>

          <!-- Right: accomplishments -->
          <div class="flex-1 min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-6">Accomplishments</p>
            <ul class="border-t border-stone-200 dark:border-stone-800 divide-y divide-stone-200 dark:divide-stone-800">
              <li
                v-for="(acc, i) in selectedTutor.accomplishments"
                :key="i"
                :style="{ transitionDelay: `${i * 100}ms` }"
                class="flex items-start gap-4 py-4 opacity-0 -translate-y-3 transition-all duration-500 ease-out"
                :class="{ 'opacity-100 !translate-y-0': showAcc }"
              >
                <span class="flex-shrink-0 mt-[0.7rem] w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span class="text-lg sm:text-xl text-stone-800 dark:text-stone-100 leading-snug">
                  {{ acc }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Vite static imports
const imageMap = {
  vedanti: new URL('@/assets/credits/vedanti.png', import.meta.url).href,
  nikhil:  new URL('@/assets/credits/nikhil.jpg', import.meta.url).href,
  rishabh: new URL('@/assets/credits/rishabh.png', import.meta.url).href,
  aaron:   new URL('@/assets/credits/aaron.jpg', import.meta.url).href,
}

const tutors = [
  {
    id: 'vedanti',
    name: 'Vedanti Patil',
    bio: "Hey there! I'm Vedanti, a student at Westwood High School. I'm passionate about biology and neuroscience. In my free time, I enjoy creating art, spending time with my friends, and writing for my school's newspaper.",
    picture: imageMap.vedanti,
    accomplishments: [
      'State Champion for UIL District Science',
      '2nd Place Nationally at NSF Senior Brain Bee',
      'U.S. Office of Naval Research Award at Greater Austin Regional Science & Engineering Fair (awarded to 7 of 427 projects, 2026)',
      'Top Written Scorer at Rice University State Brain Bee',
      'State Champion for Bio Process Lab (Science Olympiad)',
      '2nd Place News Story of the Year — National Student Press Association',
      'Silver Key in Scholastic Art & Writing (Journalism)',
      'Published Neuroscience Research Author in Science High School Journal',
      '5x Best of SNO Student Journalist, Westwood Horizon'
    ],
    subjects: ["Biology (Honors, AP)", "Chemistry (Honors)", "Physics (Honors, AP)", "Psychology", "Neuroscience/Brain Bee", "Human Anatomy & Physiology", "Spanish 1-4"]
  },
  {
    id: 'nikhil',
    name: 'Nikhil Gupta',
    bio: "Hello! My name is Nikhil, and I am a student at Westwood High School. I'm passionate about math, programming, writing, and chess. I enjoy reading, writing, talking to friends, and listening to music in my free time.",
    picture: imageMap.nikhil,
    accomplishments: [
      '3x Tournament of Champions Qualifier',
      'Top 8 internationally on the National Debate Coach Association Baker Cup',
      'Finalist - Stanford Debate Tournament; Semifinalist - Berkeley Debate Tournament; Quarterfinalist - Harvard Debate Tournament',
      'Ranked fifth best debater in the state of Texas by the Texas Forensic Association',
      '3x Texas Forensic Association State Tournament Qualifier',
      '4.0 GPA in high school',
      'Opinions Editor, Westwood Horizon',
      'AP Student'
    ],
    subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Chess", "English/Writing", "Debate"]
  },
  {
    id: 'rishabh',
    name: 'Rishabh Susarla',
    bio: "Hey! My name is Rishabh, and I'm a student at Westwood High School. I enjoy doing math and physics, and I'm really excited to go deeper with these topics with you! I enjoy playing video games, talking with friends, listening to music, and procrastinating for hours in my free time.",
    picture: imageMap.rishabh,
    accomplishments: [
      '4.0 GPA in high school',
      '790 Math SAT Score in 8th Grade',
      'AFJROTC Academic Bowl National Qualifier 2023-2024',
      'Science Bowl Practice Team 2022-2023'
    ],
    subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Precalculus (AP)", "Probability", "SAT Math", "Physics"]
  },
  {
    id: 'aaron',
    name: 'Aaron Fan',
    bio: "Hey, I'm Aaron! I love learning math and competing in math competitions all across the country. In my free time I like to procrastinate, read and play Brawl Stars.",
    picture: imageMap.aaron,
    accomplishments: [
      '5x AIME Qualifier (2022, 2023, 2024, 2025, 2026)',
      'Mathcounts State 2nd Place Team (2022, 2023) and Top 13 (2023)',
      'Harvard-MIT Math Tournament Top 10 Team (Feb. 2026)',
    ],
    subjects: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Precalculus (AP)", "Probability", "SAT Math"]
  }
]

const subjects = [
  { subject: "Math",        topics: ["Prealgebra", "Algebra I", "Geometry", "Algebra II", "Precalculus (AP)", "Probability", "Calculus (AP: AB, BC)"] },
  { subject: "Science",     topics: ["Biology (Honors, AP)", "Chemistry (Honors)", "Physics (Honors, AP)", "Psychology", "Neuroscience/Brain Bee", "Human Anatomy & Physiology"] },
  { subject: "Test Prep",   topics: ["SAT Prep: Math, R&W", "AMC 8", "AP Testing", "STAAR Testing"] },
  { subject: "More",        topics: ["English/Writing", "Debate", "Chess"] },
]

const route  = useRoute()
const router = useRouter()

const selectedTutor = ref(null)
const showAcc      = ref(false)

function openTutor(tutor) {
  selectedTutor.value = tutor
  showAcc.value       = false
  document.body.style.overflow = 'hidden'
  setTimeout(() => (showAcc.value = true), 150)
}

function openById(id) {
  const tutor = tutors.find(t => t.id === id)
  if (tutor) openTutor(tutor)
}

function closeTutor() {
  selectedTutor.value = null
  document.body.style.overflow = ''
  showAcc.value       = false
  // Clear the ?tutor= query so the deep-link can re-trigger later
  if (route.query.tutor) router.replace({ path: route.path, query: {} })
}

function onKeydown(e) {
  if (e.key === 'Escape') closeTutor()
}

// Deep-link support: /tutors/?tutor=<id> auto-opens that profile
onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  if (route.query.tutor) openById(String(route.query.tutor))
})

watch(() => route.query.tutor, (id) => {
  if (id) openById(String(id))
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
