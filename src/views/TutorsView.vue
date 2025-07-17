<template>
  <main class="grow">
    <!-- Tutors Grid -->
    <section class="bg-white dark:bg-zinc-900 min-h-screen">
      <div class="py-16 px-8 mx-auto max-w-screen-xl lg:py-24 lg:px-12">
        <!-- Header -->
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
            Our Tutors
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Click on a tutor to learn about their qualifications.
          </p>
        </div>

        <!-- Portraits -->
        <div class="flex justify-center mb-16">
          <div class="grid gap-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            <div
              v-for="tutor in tutors"
              :key="tutor.id"
              @click="openTutor(tutor)"
              class="cursor-pointer overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-110"
            >
              <img
                :src="tutor.picture"
                alt=""
                class="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>

        <!-- Subjects Offered -->
        <section class="bg-zinc-50 dark:bg-zinc-800 py-16 px-6 rounded-2xl shadow-lg">
          <div class="max-w-screen-lg mx-auto text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
              Subjects Offered
            </h2>
            <p class="mb-10 text-md tracking-tight text-zinc-700 dark:text-zinc-300">
              We offer a wide range of subjects and topics for tutoring, and <span class="font-bold">more to come soon!</span>
            </p>
            <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="subject in subjects"
                :key="subject.subject"
                class="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow hover:shadow-md transition-shadow"
              >
                <h3 class="text-2xl font-semibold mb-3 text-zinc-900 dark:text-white">
                  {{ subject.subject }}
                </h3>
                <p class="text-md text-zinc-700 dark:text-zinc-300">
                  {{ subject.topics.join(', ') }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Fullscreen Modal -->
    <transition name="fade">
      <div
        v-if="selectedTutor"
        class="fixed inset-0 z-50 overflow-y-auto h-screen bg-white dark:bg-zinc-900 px-4 py-8 sm:px-8 sm:py-12 lg:px-32"
      >
        <button
          @click="closeTutor"
          class="absolute top-6 right-6 text-zinc-900 dark:text-zinc-200 text-5xl hover:text-zinc-500 transition-colors"
        >
          <i class="fas fa-times"></i>
        </button>

        <div class="flex flex-col md:flex-row justify-evenly items-start md:items-center h-full">
          <!-- mobile‐only photo at very top -->
          <div class="flex justify-center mb-8 sm:hidden">
            <img
              :src="selectedTutor.picture"
              alt=""
              class="rounded-full sm:w-48 sm:h-48 h-32 w-32 mt-16 -mb-8 sm:mt-0 sm:mb-0 sm:ml-0 ml-4 object-cover border-4 border-zinc-900 dark:border-white shadow-2xl"
            />
          </div>

          <!-- Name + Accomplishments -->
          <div class="w-full md:w-2/3 p-4 sm:p-6">
            <h3 class="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4">
              {{ selectedTutor.name }}
            </h3>
            <div>
              <p
                v-for="(acc, i) in selectedTutor.accomplishments"
                :key="i"
                :style="{ transitionDelay: `${i * 150}ms` }"
                class="opacity-0 transform -translate-y-4 text-lg sm:text-3xl font-semibold text-zinc-700 dark:text-zinc-300 transition-all duration-700 ease-out mb-2"
                :class="{ 'opacity-100 translate-y-0 text-zinc-900 dark:text-white': showAcc }"
              >
                {{ acc }}
              </p>
            </div>
          </div>

          <!-- Bio + “I teach” + desktop photo -->
          <div class="w-full md:w-1/3 p-4 sm:p-6 flex flex-col justify-start items-center md:items-end text-center md:text-right space-y-6">
            <!-- desktop‐only photo -->
            <div class="hidden sm:flex justify-center mb-4">
              <img
                :src="selectedTutor.picture"
                alt=""
                class="rounded-full w-64 h-64 object-cover border-4 border-zinc-900 dark:border-white shadow-2xl"
              />
            </div>
            <p class="max-w-2xl text-xl leading-snug text-zinc-800 dark:text-zinc-200">
              {{ selectedTutor.bio }}
            </p>
            <p class="max-w-2xl text-xl leading-snug text-zinc-800 dark:text-zinc-200">
              I teach {{ formattedSubjects }}.
            </p>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

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
      'Placed 4th nationally in the Senior Brain Bee (organized by NSF)',
      'Placed 8th in Texas for State Brain Bee',
      'State Champion for Bio Process Lab (organized by Science Olympiad)',
      'Gold Medal at National Spanish Examination'
    ],
    subjects: ["Biology (Honors, AP)", "Chemistry (Honors)", "Physics (Honors, AP)", "Psychology", "Neuroscience/Brain Bee", "Human Anatomy & Physiology", "Spanish 1-4"]
  },
  {
    id: 'nikhil',
    name: 'Nikhil Gupta',
    bio: "Hello! My name is Nikhil, and I am a student at Westwood High School. I'm passionate about math, programming, writing, and chess. I enjoy reading, writing, talking to friends, and listening to music in my free time.",
    picture: imageMap.nikhil,
    accomplishments: [
      '4.0 GPA in high school',
      'Ranked fifth best debater in the state of Texas by the Texas Forensic Association',
      'Qualified to the Tournament of Champions, the most prestigious national tournament in Policy Debate',
      'Finalist of the Stanford Debate Tournament and Quarterfinalist of the Harvard Debate Tournament',
      '2x Texas Forensic Association State Tournament Qualifier',
      'AP & IB Student'
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
      '4x AIME Qualifier (2022, 2023, 2024, 2025)',
      'Mathcounts State 2nd Place Team (2022, 2023) and Top 13 (2023)',
      'Science Bowl Team 2023'
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

const selectedTutor = ref(null)
const showAcc      = ref(false)

function openTutor(tutor) {
  selectedTutor.value = tutor
  showAcc.value       = false
  document.body.style.overflow = 'hidden'
  setTimeout(() => (showAcc.value = true), 150)
}

function closeTutor() {
  selectedTutor.value = null
  document.body.style.overflow = ''
  showAcc.value       = false
}

const formattedSubjects = computed(() => {
  if (!selectedTutor.value) return ''
  const subs = selectedTutor.value.subjects
  if (subs.length === 1) return subs[0]
  if (subs.length === 2) return subs.join(' and ')
  return subs.slice(0, -1).join(', ') + ', and ' + subs[subs.length - 1]
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
